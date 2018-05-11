'use strict';
// The module 'vscode' contains the VS Code extensibility API.
// Import the module and reference it with the alias vscode in your code below.
import * as vscode from 'vscode';

// This method is called when your extension is activated.
// Your extension is activated the very first time the command is executed.
export function activate(context: vscode.ExtensionContext) {
  /**
   * Search the Code Reference site for WordPress functions, hooks, etc.
   */
  let searchWpDocs = new SearchWPDocs();
  let searchCodeRefDisposable = vscode.commands.registerCommand(
    'extension.searchCodeRef',
    () => {
      searchWpDocs.searchWPDocs('codeRef');
    }
  );

  /**
   * Search the Codex site for WordPress functions, hooks, etc.
   */
  let searchCodexDisposable = vscode.commands.registerCommand(
		'extension.searchCodex',
		() => {
			searchWpDocs.searchWPDocs('codex');
		}
	);

  /**
   * Dispose.
   */
  context.subscriptions.push(searchCodexDisposable);
  context.subscriptions.push(searchCodeRefDisposable);
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
    if ('codeRef' === docSite) {
      site = 'developer.wordpress.org';
    } else {
      site = 'codex.wordpress.org';
    }

    let selection = editor.selection;
    let text = editor.document.getText(selection);
    let url = 'https://google.com/search?q=' + text + ' url:' + site + '&btnI';

    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse( url ));
  }

  dispose() {
  }
}

// This method is called when your extension is deactivated.
export function deactivate() {}
