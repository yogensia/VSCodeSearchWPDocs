/*

MIT License

Copyright(c) 2018 — 2024 Yogensia

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files(the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and / or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

'use strict';

import type { AxiosResponse } from 'axios';
import axios from 'axios';
import * as cheerio from 'cheerio';
import * as vscode from 'vscode';

import * as html from './html';
import * as wp_names from './wp_names';

// Get configuration.
let settings = vscode.workspace.getConfiguration('searchwpdocs');

// Update settings when configuration changes.
vscode.workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration('searchwpdocs')) {
        settings = vscode.workspace.getConfiguration('searchwpdocs');
    }
});

// Create log channel.
const log = vscode.window.createOutputChannel('SearchWPDocs');

/**
 * Request WordPress documentation, adjust it and display it in webview.
 *
 * @param searchTerm The word the user is searching for.
 * @param context Extension context.
 */
export function searchWPDocsRequest(searchTerm: string, context: vscode.ExtensionContext) {
    // Get webview tab name and settings.
    const { searchString, tabName, isKnownWord } = getSearchTerms();

    if (isKnownWord === false) {
        log.appendLine(`Unknown word '${searchTerm}', opening in ${searchString}`);
        vscode.env.openExternal(vscode.Uri.parse(searchString));

        return;
    }

    // Make HTTP request to docs site and handle it.
    axios
        .get(searchString)
        .then((response) => {
            // Get response and discard header, which is later added locally.
            const output: string = cleanResponse(response);

            // Get tab column value from settings.
            let tabColumn = vscode.ViewColumn.Active;
            if (settings.showOnSideTab) {
                tabColumn = vscode.ViewColumn.Three;
            }

            // Create and show webview panel.
            // https://code.visualstudio.com/api/extension-guides/webview
            const panel = vscode.window.createWebviewPanel(searchTerm, tabName, tabColumn, {
                retainContextWhenHidden: true,
                localResourceRoots: [vscode.Uri.file(context.extensionPath)],
            });

            // Get webview resources.
            const { logoRes, cssThemeRes } = getWebviewResources(panel);

            // Set webview panel HTML.
            log.appendLine(`Searching for '${searchTerm}' on ${searchString}`);
            const headHTML = html.getHtmlHead(
                isKnownWord,
                searchString,
                searchTerm,
                cssThemeRes.toString(),
                logoRes.toString(),
            );
            const foooterHTML = html.getHtmlFooter();
            panel.webview.html = headHTML + output.trim() + foooterHTML;
        })
        .catch((error) => {
            // Handle error.
            log.appendLine(error);
            vscode.window.showErrorMessage(`WPSearchDocs error:
      Request to '${searchString}' returned error code ${error.code}.`);
        });

    /**
     * Takes the response from the WP Docs request and removes all unnecessary elements.
     *
     * @param response Axios response from WP Docs request.
     * @returns String Cleaned HTML.
     */
    function cleanResponse(response: AxiosResponse<any, any>) {
        const $ = cheerio.load(response.data);

        // Isolate the page content
        $('article.wp-block-group').unwrap();

        // Remove unnecessary elements.
        $('article.wp-block-group').find('wp-block-wporg-code-reference-comment-form').remove();
        $('article.wp-block-group').find('.feedback-links').remove();

        // Add 'Back to Top' links.
        $('article.wp-block-group').find('.wp-block-heading')
            .append(`<a class="top-link" href="#top"
      tittle="Scroll back to the top of the page">↑ Back to top</a>`);
        $('article.wp-block-group').find('.wp-block-wporg-table-of-contents .top-link').remove();

        // Trim long tables and add 'Show More' links.
        $('article.wp-block-group')
            .find('.wp-block-wporg-code-table table')
            .each((i, el) => {
                const $el = $(el);

                if ($el.find('tr').length > 5) {
                    // We remove 6 rows from the count because of the head row.
                    const length = $el.find('tr').length - 6;

                    $el.find('tr').slice(6).remove();
                    $el.parent('.wp-block-table')
                        .append(`<p class="more-rows"><a href="${searchString}#related">
            Check documentation page to see ${length} more rows</a></p>`);
                }
            });

        return $('article.wp-block-group').html()!;
    }

    /**
     * Gets the search terms and returns them in formatted strings.
     *
     * @returns SearchTerms object with `searchString`, `tabName` and `isKnownWord` properties.
     */
    function getSearchTerms() {
        let searchString = settings.site + searchTerm;
        let tabName = '';
        let isKnownWord = true;

        if (wp_names.isFunction(searchTerm) === true) {
            searchString = `https://developer.wordpress.org/reference/functions/${searchTerm}`;
            tabName = `${searchTerm}()`;
        } else if (wp_names.isHook(searchTerm) === true) {
            searchString = `https://developer.wordpress.org/reference/hooks/${searchTerm}`;
            tabName = `( '${searchTerm}' )`;
        } else {
            isKnownWord = false;
            tabName = `'${searchTerm}'`;
            vscode.window.showWarningMessage(`WPSearchDocs:
        Unknown word! Opening Google\'s first result...`);
        }

        return { searchString, tabName, isKnownWord };
    }

    /**
     * Gets resources for webview panel ready.
     *
     * @param panel Webview panel object.
     * @returns Object with `logoRes` and `cssThemeLinkTag` properties.
     */
    function getWebviewResources(panel: vscode.WebviewPanel) {
        // Get WordPress logo.
        const logoPath = vscode.Uri.joinPath(context.extensionUri, 'assets', 'wporg-logo.svg');
        const logoRes = panel.webview.asWebviewUri(logoPath);

        // Get CSS.
        const cssThemePath = vscode.Uri.joinPath(
            context.extensionUri,
            'out/styles',
            `theme-${settings.cssTheme}.css`,
        );
        const cssThemeRes = panel.webview.asWebviewUri(cssThemePath);

        return { logoRes, cssThemeRes };
    }
}
