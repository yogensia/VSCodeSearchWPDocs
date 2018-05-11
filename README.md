# Search WordPress Docs

Search WordPress Docs is a [VS Code](https://code.visualstudio.com/) extension that allows you to select text inside the VS Code editor and search the WordPress Codex/Code Reference sites for a matching function, class, method, or hook.

![](images/material-night.png)

## Features

The extension takes your selected text and opens google's first result that matches.

You can choose if you want to search in the Developer Reference site of in the good old Codex.

To make a search:

- Open/Create a PHP file. The extension will ignore other languages.
- Select some text in the editor, for example a function like `get_posts`.
- For best results, select text only, no symbols.
- Now you can choose how to invoke the search:
  - Context Menu: Right click on the editor and click on "Search in WordPress Developer Reference..." or  "Search in WordPress Codex...".
  - key Binding: You can Search the Developer Reference with Ctrl+Alt+F, or the Codex with Ctrl+Alt+G.
  - Command Palette: You can do a search directly fromt he Command Palette, pressing Ctrl+Shift+P, then typying "Wordpress" to filter the commands.

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

This is the Initial Release.

### 1.0.0

Initial release of Search WordPress Functions.