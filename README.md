# Search WordPress Docs

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

- The extension relies on Google's "I'm feeling lucky" functionality when searching the new WP Developer Resource. This allows retrieving the function page directly instead of opening a search results page, but it also adds an element of unpredictability. I have had no issues so far with it though. If you find an issue let me know know by posting it on [github](https://github.com/yogensia/VSCodeSearchWPDocs/issues).

- If you set the search to the WordPress Codex, some function will still redirect tot he new Developer Resource site. This is out of the control of this plugin, as the Developer Resource is meant to replace the older Codex site.

## Release Notes

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