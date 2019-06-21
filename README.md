# Search WordPress Docs

![downloads](https://img.shields.io/visual-studio-marketplace/d/yogensia.searchwpdocs.svg) ![version](https://img.shields.io/visual-studio-marketplace/v/yogensia.searchwpdocs.svg) ![license](https://img.shields.io/github/license/yogensia/VSCodeSearchWPDocs.svg) ![issues](https://img.shields.io/github/issues-raw/yogensia/VSCodeSearchWPDocs.svg) [![donate](https://img.shields.io/badge/donate-paypal-brightgreen.svg)](https://paypal.me/JPardilla)

Search WordPress Docs is a [VS Code](https://code.visualstudio.com/) extension that allows you to select text inside the VS Code editor and search the WordPress Codex/Code Reference sites for a matching function, class, method, or hook.

![Screenshot](https://github.com/yogensia/VSCodeSearchWPDocs/raw/master/images/screenshot-1.png)

## Features

The extension takes your selected text and opens google's first result that matches.

### To make a search

- Open/Create a PHP file. The extension will ignore other languages.
- Select some text in the editor, for example a function like `get_posts`.
- For best results, select text only, no symbols.
- Now you can choose how to invoke the search:
  - Context Menu: Right click on the editor and click on "Search in WordPress Docs...".
  - key Binding: Ctrl+Alt+F by default.
  - Command Palette: You can do a search directly from the Command Palette, pressing Ctrl+Shift+P, then typing "WordPress" to filter the commands.

### Configuration

You can use the setting `searchwpdocs.site` to change the url to use for the search. The text you have selected will be appended to the url.

With this setting you can choose it you can choose if you want to search in the [Developer Reference](https://developer.wordpress.org/reference/) site, in the good old [Codex](https://codex.wordpress.org/), or other sites like [QueryPosts](https://queryposts.com/).

## Known Issues

- The extension relies on Google's "I'm feeling lucky" functionality when searching the new WP Developer Resource. This allows retrieving the function page directly instead of opening a search results page, but it also adds an element of unpredictability. I have had no issues so far with it though. If you find an issue let me know by posting it on [github](https://github.com/yogensia/VSCodeSearchWPDocs/issues).

- If you set the search to the WordPress Codex, some functions will still redirect to the new Developer Resource site. This is out of the control of this extension, as the Developer Resource is meant to replace the older Codex site.

## Roadmap

Planned updates can be found at the [project's Trello board](https://trello.com/b/GAayqIox/searchwpdocs).

## Suggestions & Bug Reports

If you find an issue or have any feedback you can let me know by posting on [github](https://github.com/yogensia/VSCodeSearchWPDocs/issues).

## Themes

Search WordPress Docs has a few themes available, used to style the Documentation when viewed in a tab within VSCode.

If you want to help by providing a theme, [check this guide](https://github.com/yogensia/VSCodeSearchWPDocs/blob/master/THEMES-HOW-TO.md).

### List of themes

- WordPress Code Reference
- One Dark
- Monokai

## Release Notes

### [2.0.0] - 2019-06-21

- Added feature to view documentation inside VSCode.
- Added themes 'WPDocs', 'One Dark' and 'Monokai' for documentation.
- Fixed keyboard shortcut not working when trying to invoke search without a selection.

### [1.1.2] - 2019-06-18

- It is no longer necessary to select a word, if nothing is selected the extension will search the word at the cursor position.

### [1.1.1] - 2018-08-14

- Fix default google search parameter, changed from 'url' to 'site'. Thanks to 'soderlind' for reporting the error.

### [1.1.0] - 2018-05-16

- Added configuration setting to select where to do the search (Developer Reference, Codex, etc..).
- Reduced the amount of commands to one, now that it can be customized.

### 1.0.0 - 2018-05-11

- Initial release of Search WordPress Functions.

[1.1.2]: https://github.com/yogensia/VSCodeSearchWPDocs/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/yogensia/VSCodeSearchWPDocs/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/yogensia/VSCodeSearchWPDocs/compare/v1.0.0...v1.1.0