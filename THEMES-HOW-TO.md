# SearchWordPressDocs Themes

Search WordPress Docs has a few themes available, used to style the Documentation when viewed in a tab within VSCode.

## How to Create a Theme

Themes are very simple SASS files with a few variables defining font families and text colors.

These files are located in the `/styles/sass/` directory.

This is an example theme file:

```scss
/*
 * One Dark
 * Original theme by: Atom Dev Team (https://atom.io/).
 * Ported by: Yogensia (https://www.yogensia.com/).
 */

$background         : #282c34;
$background-darker  : #21252b;
$background-brighter: #2c313a;
$background-border  : #3c4049;

$text        : #bdc3ce;
$text-dimmer : #bdc3ce;
$text-heading: #eeeeee;

$text-link      : #3fa0cc;
$text-link-hover: #45baf0;

$code-function: #61afef;
$code-type    : #c678dd;
$code-name    : #e06c75;
$code-default : #d19a66;
$code-block   : #d19a66;

$font-family-text: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
$font-family-code: "Operator Mono", Inconsolata, Menlo, Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace;

@import 'rules';
```
To create yours you can follow these steps:

- Clone this repository to you local environment.
- Run `npm install`. This will download the modules needed to work with the files, including gulp and sass.
- Create your theme file, for example `theme-oceanic.scss` in the directory `/styles/sass/`.

⚠ You won't need to run `npm install` if you already have SASS available in your machine, but it may be move convenient, it's up to you!

Once you've created the theme, you'll want to test it.

- Run `gulp sass` to compile the theme.
- Edit the file `test-theme.html`, and update the `<link>` tag that points to `theme-one-dark.css` so that it points to your theme instead, following the example name above that would be `theme-oceanic.css`.
- Open `test-theme.html` in your browser.

## How to Submit a Theme

To submit a theme you need to send me the `.scss` file. You can do this by:

- Forking this repository and submitting a pull request with your theme file in it.
- Uploading the file to [pastebin](https://pastebin.com/), and [filing an issue](https://github.com/yogensia/VSCodeSearchWPDocs/issues) on this repo with the file link.

⚠ You don't need to send me the compiled CSS, just the SCSS file.

⚠ If you are porting an existing color theme, please remember to credit the original authors accordingly in the SCSS comment.

## Tips for porting a theme from VSCode

ℹ Comming soon.