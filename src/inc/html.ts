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

/**
 * Generate Webview header HTML.
 *
 * @param isKnownWord Whether this function/hook is in the extension dictionary.
 * @param searchString Full search URL generated by extension. Can be a google search or a WPDocs
 *   link.
 * @param searchTerm Word that the user is searching for.
 * @param cssThemeRes Vscode-resource URI for the CSS theme to use in webview.
 * @param logoRes Vscode-resource URI for the header WordPress logo.
 */
export function getHtmlHead(
    isKnownWord = false,
    searchString = '',
    searchTerm = '',
    cssThemeRes = '',
    logoRes = '',
) {
    let output = `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" lang="en-US">
<head profile="http://gmpg.org/xfn/11">
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>WordPress Developer Resources</title>
  <link rel="stylesheet" id="swpd-theme" href="${cssThemeRes}" type="text/css" media="all" />
</head>
<body id="wordpress-org" class="wp-parser-function-template-default single
single-wp-parser-function postid-0 no-customize-support">
<div id="page" class="hfeed site">
<main id="main" class="site-main" role="main">
<span id="top"></span>
<header id="main-header">
<h1>
  <a href="https://wordpress.org">
    <img alt="WordPress" src="${logoRes}" />
  </a>
</h1>
<nav aria-label="Main Menu">
  <ul id="wporg-header-menu" class=" nav-menu">
    <li class="menu-item"><a href="https://wordpress.org/news/">News</a></li>
    <li class="menu-item"><a href="https://wordpress.org/showcase/">Showcase</a></li>
    <li class="menu-item"><a href="https://wordpress.org/hosting/">Hosting</a></li>
    <li class="menu-item"><a href="https://wordpress.org/themes/">Themes</a></li>
    <li class="menu-item"><a href="https://wordpress.org/plugins/">Plugins</a></li>
    <li class="menu-item"><a href="https://learn.wordpress.org/">Learn</a></li>
    <li class="menu-item"><a href="https://make.wordpress.org/">Get Involved</a></li>
    <li class="menu-item"><a href="https://wordpress.org/about/">About</a></li>
  </ul>
</nav>
</header>`;

    // Add a link to pages for know words, or a link to the google search for unknown words.
    if (isKnownWord) {
        output += `<p id="swpd-intro">This article is part of the
      <a href="https://developer.wordpress.org/">WordPress.org Code Reference</a>.
      You can also <a class="page-link" href="${searchString}">open this article
      in your browser</a>.</p>`;
    } else {
        output += `<p id="swpd-intro">Sorry, the term you searched for isn't
    recognized by the SearchWordPressDocs extension. You are seeing Google's
    first result for your search. If you prefer, you can<a class="page-link"
    href="https://google.com/search?q=site:developer.wordpress.org ${searchTerm}">
    open Google's search results in your browser.</a></p>`;
    }

    return output;
}

/**
 * Generate footer for the webview, and add closing tags.
 */
export function getHtmlFooter() {
    return `</div>
    </section>
    </div>
    </article>
    </main>
    </div>
    </main>
    </div>
    </body>
    </html>`;
}