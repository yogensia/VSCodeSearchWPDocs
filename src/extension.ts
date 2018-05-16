'use strict';
// The module 'vscode' contains the VS Code extensibility API.
// Import the module and reference it with the alias vscode in your code below.
import * as vscode from 'vscode';

// This method is called when your extension is activated.
// Your extension is activated the very first time the command is executed.
export function activate(context: vscode.ExtensionContext) {
  /**
   * Search in the WordPress Codex/Code Reference.
   */
  let searchWpDocs = new SearchWPDocs();
  let searchCodexDisposable = vscode.commands.registerCommand(
    "extension.searchCodex",
    () => {
      searchWpDocs.searchWPDocs();
    },
  );

  /**
   * Dispose.
   */
  context.subscriptions.push(searchCodexDisposable);
  context.subscriptions.push(searchWpDocs);
}

/**
 * Handles opening of links.
 *
 * @class SearchWPDocs
 */
class SearchWPDocs {
  constructor() {
  }

  searchWPDocs() {
    // Get configuration.
    var settings = vscode.workspace.getConfiguration("searchwpdocs");

    // No open text editor.
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    let selection = editor.selection;
    let text = editor.document.getText(selection);

    vscode.commands.executeCommand("vscode.open", vscode.Uri.parse(settings.site + text));
  }

  dispose() {
  }
}

// This method is called when your extension is deactivated.
export function deactivate() {}
