/*

MIT License

Copyright(c) 2018 — 2019 Yogensia

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

import * as vscode from 'vscode';
import * as path from 'path';

// Internal modules.
import * as swd_dictionary from './swd_dictionary';
import * as webview_html from './webview_html';

// Request module to perform HTTP requests.
// https://github.com/request/request
import request = require('request');

// Get configuration.
let settings = vscode.workspace.getConfiguration("searchwpdocs");

/**
 * Request WordPress documentation, adjust it and display it in webview.
 * @param searchTerm The word the user is searching for.
 * @param context Extension context.
 */
export function searchWPDocsRequest(searchTerm: string, context: vscode.ExtensionContext) {
  // Get WordPress logo.
  const WPLogoPath = vscode.Uri.file(path.join(context.extensionPath, 'images', 'wporg-logo.svg'));
  const WPLogoRes = WPLogoPath.with({ scheme: 'vscode-resource' });

  // If theme = wp-docs then no additional css is needed, just use the default styles.
  let cssThemeLinkTag = "";
  if ("wp-docs" !== settings.cssTheme) {
    const cssThemePath = vscode.Uri.file(path.join(context.extensionPath, 'styles', 'theme-' + settings.cssTheme + '.css'));
    const cssThemeRes = cssThemePath.with({ scheme: 'vscode-resource' });
    cssThemeLinkTag = '<link rel="stylesheet" id = "swpd-theme" href="' + cssThemeRes + '" type="text/css" media="all" />';
  }

  // Check it search term is a known function or hook.
  let searchString = settings.site + searchTerm;
  let tabName = "";
  let isKnownWord = true;

  if (true == swd_dictionary.isFunction(searchTerm)) {
    searchString = 'https://developer.wordpress.org/reference/functions/' + searchTerm;
    tabName = searchTerm + '()';
  } else if (true == swd_dictionary.isHook(searchTerm)) {
    searchString = 'https://developer.wordpress.org/reference/hooks/' + searchTerm;
    tabName = "( '" + searchTerm + "' )";
  } else {
    isKnownWord = false;
    tabName = "'" + searchTerm + "'";
    vscode.window.showWarningMessage('WPSearchDocs: Unknown word! Opening Google\'s first result...');
  }

  // Make HTTP request to docs site and handle it.
  request({
    uri: searchString,
    method: 'GET',
    timeout: 5000
  }, (err, res, body) => {
    // If there's and error show the message and abort.
    if (err) {
      switch (err.code) {
        case 'ETIMEDOUT':
          vscode.window.showErrorMessage('WPSearchDocs: Error code \'ETIMEDOUT\'. Request timed out, server might be unresponsive.');
          return;
        case 'ENOTFOUND':
          vscode.window.showErrorMessage('WPSearchDocs: Error code \'ENOTFOUND\'. Server can\'t be reached or might be unresponsive.');
          return;
      }
      vscode.window.showErrorMessage('WPSearchDocs: Unknown error, documentation couldn\'t be loaded.');
      return;
    }

    // Split response and discard header, which is added locally.
    var splitted = body.split('<div id="content" class="site-content">', 2);

    // If split doesn't have 2 pieces it means we have an unexpected response,
    // If so fallback to on-browser load.
    if (2 !== splitted.length) {
      // Try to load page on browser.
      vscode.commands.executeCommand("vscode.open", vscode.Uri.parse(settings.site + searchTerm));
    } else {
      // If response is good, we split again, this time to clean the footer.
      splitted = splitted[1].split('<div id="respond" class="comment-respond">', 1);

      // Get tab column value from settings.
      let tabColumn = vscode.ViewColumn.Active;
      if (settings.showOnSideTab) {
        tabColumn = vscode.ViewColumn.Three;
      }

      // Create and show webview panel.
      // https://code.visualstudio.com/api/extension-guides/webview
      const panel = vscode.window.createWebviewPanel(
        searchTerm,
        tabName,
        tabColumn,
        {
          retainContextWhenHidden: true,
          localResourceRoots: [vscode.Uri.file(context.extensionPath)]
        }
      );

      // Set webview panel HTML.
      const headHTML = webview_html.getHtmlHead(isKnownWord, searchString, searchTerm, cssThemeLinkTag, WPLogoRes.toString());
      const foooterHTML = webview_html.getHtmlFooter();
      panel.webview.html = headHTML + splitted[0].trim() + foooterHTML;
    }
  });
}