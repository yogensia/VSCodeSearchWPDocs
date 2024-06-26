# Search WordPress Docs

![downloads](https://img.shields.io/visual-studio-marketplace/d/yogensia.searchwpdocs.svg) ![version](https://img.shields.io/visual-studio-marketplace/v/yogensia.searchwpdocs.svg) ![license](https://img.shields.io/github/license/yogensia/VSCodeSearchWPDocs.svg) ![issues](https://img.shields.io/github/issues-raw/yogensia/VSCodeSearchWPDocs.svg) [![donate](https://img.shields.io/badge/donate-paypal-brightgreen.svg)](https://paypal.me/JPardilla)

**Search WordPress Docs** is an extension that allows you to search functions, classes, methods, or hooks on the official WordPress documentation without having to leave VSCode.

<div align="center">
  <img src="https://github.com/yogensia/VSCodeSearchWPDocs/raw/master/assets/demo.avif" alt="Search WordPress Docs Demo" title="Search WordPress Docs Demo" />
</div>

## How it Works

**Search WordPress Docs** takes the word at your cursor position, or selected text and matches it against a dictionary of known WordPress functions and hooks. If it recognizes your search term, it opens the according Documentation page <https://developer.wordpress.org/>, otherwise it opens Google's first result that matches.

Since version 2.0.0, results are shown on a panel to the right of your VSCode editor, and offers a few themes to style the results too. This is optional, and can be disabled from the extension's settings if you prefer to open the results on your browser.

<div align="center">
  <img src="https://github.com/yogensia/VSCodeSearchWPDocs/raw/master/assets/screenshot.png" alt="Search WordPress Docs screenshot" title="Search WordPress Docs screenshot" />
</div>

### To Make a Search

- Open/Create a PHP file. The extension ignores other languages.
- Place your cursor on a word you want to search, or manually select it, for example a function like `get_posts`.
- When manually selecting text, select only a word, no symbols, or code blocks.
- Now you can choose how to invoke the search:
  - Context Menu: Right click on the editor and click on "Search in WordPress Docs...".
  - key Binding: Ctrl+Alt+F by default.
  - Command Palette: You can do a search directly from the Command Palette, pressing Ctrl+Shift+P, then typing "WordPress" to filter the commands.

Documentation will appear on a side tab in VSCode. You can use the Table of Contents and the "Top ↑" links to navigate around the page, if you like. All other links will be opened in your browser.

### Configuration

- `searchwpdocs.cssTheme`: Choose between several themes to style the documentation when it is showed in a tab inside VSCode.
- `searchwpdocs.openResultsInTab`: Enabled by default, it shows the documentation in a tab inside VSCode. If it is disabled, documentation will open in your browser instead.
- `searchwpdocs.showOnSideTab`: Allows you to specify whether you want documentation to open on a side panel or as a regular tab. You can of course drag and drop the tab after it opens and rearrange it as you like.
- `searchwpdocs.site`: Change the URL to use for the search when the word isn't recognized by the extension. The text you have selected will be appended to the URL specified here. With this setting you can choose if you want to search in the [Developer Reference](https://developer.wordpress.org/reference/) site, in the good old [Codex](https://codex.wordpress.org/), or other sites like [QueryPosts](https://queryposts.com/).

## Known Issues

- If a word is not found in the internal dictionary, the extension will rely on Google to show the best guess match, so results might be less accurate in that case. This should rarely happen when searching for functions and hooks.

- When showing results in VSCode, only results from the [Developer Reference](https://developer.wordpress.org/reference/) site will be shown. Other documentation sources such as the Codex are not available in this mode.

- If you set the search site in settings to the WordPress Codex, some functions will still redirect to the new Developer Resource site. This is out of the control of this extension, as the Developer Resource is meant to replace the older Codex site.

## Roadmap

Planned updates can be found at the [project's Trello board](https://trello.com/b/GAayqIox/searchwpdocs).

## Suggestions & Bug Reports

If you find an issue or have any feedback you can let me know by posting on [GitHub](https://github.com/yogensia/VSCodeSearchWPDocs/issues).

## Changelog

All notable changes for each version of this extension are documented in the [changelog](https://github.com/yogensia/VSCodeSearchWPDocs/blob/master/CHANGELOG.md).
