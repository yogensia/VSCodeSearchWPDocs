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

  async searchWPDocs() {
    let searchTerm;

    // Get configuration.
    var settings = vscode.workspace.getConfiguration("searchwpdocs");

    // No open text editor.
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    // Get search term from selection.
    // If no selection, attempt grow from cursor position.
    if (editor.selection.isEmpty) {
      let selection = editor.document.getWordRangeAtPosition(editor.selection.active);
      searchTerm = editor.document.getText(selection);
    } else {
      let selection = editor.selection;
      searchTerm = editor.document.getText(selection);
    }

    // Check that search term is not empty.
    if (0 === searchTerm.length) {
      vscode.window.showErrorMessage('Nothing to search, select or place cursor on a word first!');
      return;
    }

    // Check that search term doesn't contain several lines.
    if (-1 < searchTerm.indexOf("\n")) {
      vscode.window.showErrorMessage('Please limit selection to one line.');
      return;
    }

    vscode.commands.executeCommand("vscode.open", vscode.Uri.parse(settings.site + searchTerm));
  }

  dispose() {
  }
}

// This method is called when your extension is deactivated.
export function deactivate() { }