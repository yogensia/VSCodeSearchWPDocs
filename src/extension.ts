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
      searchWpDocs.searchWPDocs("codex");
    },
  );

  /**
   * Search in QueryPosts.com.
   */
  let searchQueryPostsDisposable = vscode.commands.registerCommand(
    "extension.searchQueryPosts",
    () => {
      searchWpDocs.searchWPDocs("queryposts");
    },
  );

  /**
   * Dispose.
   */
  context.subscriptions.push(searchCodexDisposable);
  context.subscriptions.push(searchQueryPostsDisposable);
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

  searchWPDocs(docSite: string) {
    // No open text editor
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    // Codex or Developer Reference site?
    let site;
    if ("codex" === docSite) {
      site = "https://codex.wordpress.org/";
    } else {
      site = "https://queryposts.com/function/";
    }

    let selection = editor.selection;
    let text = editor.document.getText(selection);
    let url = site + text + '/';

    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse( url ));
  }

  dispose() {
  }
}

// This method is called when your extension is deactivated.
export function deactivate() {}
