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

// The module 'vscode' contains the VS Code extensibility API.
// The module 'path' allows to work with local paths in the VSCode env.
import * as vscode from 'vscode';

// Internal modules.
import * as swd_request from './inc/swd_request';

// This method is called when your extension is activated.
// Your extension is activated the very first time the command is executed.
export function activate(context: vscode.ExtensionContext) {
  /**
   * Search in the WordPress Codex/Code Reference.
   */
  let searchWpDocs = new SearchWPDocs(context);
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
  private context: vscode.ExtensionContext;

  constructor(ExtensionContext: vscode.ExtensionContext) {
    this.context = ExtensionContext;
  }

  /**
   * Main Command, performs a search inside VSCode.
   */
  async searchWPDocs() {
    let searchTerm = "";

    // Get configuration.
    let settings = vscode.workspace.getConfiguration("searchwpdocs");

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
      vscode.window.showErrorMessage('WPSearchDocs: Nothing to search, select or place cursor on a word first!');
      return;
    }

    // Check that search term doesn't contain several lines.
    if (-1 < searchTerm.indexOf("\n")) {
      vscode.window.showErrorMessage('WPSearchDocs: Please limit selection to one line!');
      return;
    }

    // If showResultsInTab setting is disabled, use the legacy method to open results in browser.
    if (false == settings.openResultsInTab) {
      vscode.commands.executeCommand("vscode.open", vscode.Uri.parse(settings.site + searchTerm));
      return;
    }

    // Request documentation and display it in webview.
    swd_request.searchWPDocsRequest(searchTerm, this.context);
  }

  dispose() {
  }
}

// This method is called when your extension is deactivated.
export function deactivate() { }