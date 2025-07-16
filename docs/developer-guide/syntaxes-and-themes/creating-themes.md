---
sidebar_position: 2
description: Learn how to create themes for Pragtical.
---

# Creating Themes

Themes are plugins that modify the `style` table.
The `style` table contains style definitions of most UI elements with Pragtical,
including syntax highlighting. It can be modified by the user module, a plugin,
or a theme file. As Pragtical uses immediate-mode rendering, most UI elements will be
updated once the table were modified.

## Example: Dracula Theme

This is an example of how a theme file could look like.
This Dracula theme is taken from the [colors] repository.

```lua
-- import the style table, and the common module
-- which provides hex / rgb() -> color conversion functions
local style = require "core.style"
local common = require "core.common"

-- set user interface colors
style.background = { common.color "#282a36" }
style.background2 = { common.color "#21222b" }
style.background3 = { common.color "#21222b" }
style.text = { common.color "#7b81a6" }
style.caret = { common.color "#f8f8f0" }
style.accent = { common.color "#8be9fd" }
style.dim = { common.color "#4f5873" }
style.divider = { common.color "#1f2029" }
style.selection = { common.color "#44475a" }
style.line_number = { common.color "#53576e" }
style.line_number2 = { common.color "#f8f8f0" }
style.line_highlight = { common.color "#313442" }
style.scrollbar = { common.color "#44475a" }
style.scrollbar2 = { common.color "#ff79c6" }

-- set syntax highlighting colors
style.syntax["normal"] = { common.color "#f8f8f2" }
style.syntax["symbol"] = { common.color "#f8f8f2" }
style.syntax["comment"] = { common.color "#6272a4" }
style.syntax["keyword"] = { common.color "#ff79c6" }
style.syntax["keyword2"] = { common.color "#ff79c6" }
style.syntax["number"] = { common.color "#bd93f9" }
style.syntax["literal"] = { common.color "#f1fa8c" }
style.syntax["string"] = { common.color "#f1fa8c" }
style.syntax["operator"] = { common.color "#ff79c6" }
style.syntax["function"] = { common.color "#50fa7b" }
```

When placed into `$USERDIR/colors/dracula.lua`, the theme can be loaded by using
`core.reload_module "colors.dracula"` or via the Settings GUI plugin.
The theme file is executed as a normal Lua module when applied.

## Look-and-Feel

The following sections describe a list of keys in the `style` table that can be used to customize Pragtical.
Plugins may choose to use any of the styles defined in the table for their own purposes,
and there are no guidelines for the purpose of all styles defined here.
Some plugins may use non-standard names within the `style` table, so you should consult
documentation for those plugins if you wish to modify their style.

### Fonts

The following entries define the fonts that are used in Pragtical.
Pragtical uses icon fonts to render icons and images in the user interface,
and the icon set can be overridden by specifying an icon font that has the correct mapping.

| Name                  | Description
| ----                  | -----------
| `style.font`          | The font used by non-code UI elements.
| `style.big_font`      | Larger version of `style.font`.
| `style.code_font`     | The font used for display code.
| `style.icon_font`     | The font containing icons that are displayed in the UI.
| `style.icon_big_font` | Larger version of `style.icon_font`.


### Base Colors

These colors make up the majority of Pragtical's user interface.

![Base Colors][1]

| Name                   | Description
| ----                   | -----------
| `style.background`     | The background color of the editor (DocView).
| `style.background2`    | The background color of the file browser (TreeView)
| `style.background3`    | The background color of the command palette (CommandView)
| `style.text`           | The default text color.
| `style.accent`         | The color for primary (highlighted) text.
| `style.dim`            | The color for secondary (dimmed) text.
| `style.divider`        | The color for dividers between views.
| `style.selection`      | The background color of selected text.
| `style.line_number`    | The color of the line numbers.
| `style.line_number2`   | The line number color of the current line (where the caret resides).
| `style.line_highlight` | The background color of the current line (where the caret resides).

### Scrollbar

These colors makes up the scrollbar in Pragtical.

![Scrollbar Colors][2]

| Name                    | Description
| ----                    | -----------
| `style.scrollbar`       | The color of the scrollbar handle.
| `style.scrollbar2`      | The color of the scrollbar handle when hovered.
| `style.scrollbar_track` | The background color of the scrollbar track.

### Nagbar

The Nagbar is a dialog interfaced used in Pragtical to convey important choices,
such as saving or discarding files when exiting.
These colors control the appearance of the Nagbar.

![Nagbar Colors][3]

| Name                | Description
| ----                | -----------
| `style.nagbar`      | The background color of the Nagbar.
| `style.nagbar_text` | The foreground (text and button) color of the Nagbar.
| `style.nagbar_dim`  | The overlay color used to dim other parts of the editor when the Nagbar is present.

### Miscellaneous

These colors do not belong to any particular category, but is still used in the editor.

| Name                           | Description
| ----                           | -----------
| `style.drag_overlay`     | The overlay color covering other parts of the editor when a tab is dragged.
| `style.drag_overlay_tab` | The overlay color covering the tab when a tab is dragged.
| `style.good`             | The color used to indicate a successful operation.
| `style.warn`             | The color used to display warning.
| `style.error`            | The color used to indicate an error.
| `style.modified`         | The color used to indicate a modification has been done.
| `style.log["INFO"]`      | The color and icon used for displaying INFO entries in the logs.
| `style.log["WARN"]`      | The color and icon used for displaying WARN entries in the logs.
| `style.log["ERROR"]`     | The color and icon used for displaying ERROR entries in the logs.

For the `style.log` tables, each entry is expected to be a table in the form of
`{ icon = string, color = color }`, where the icon is rendered from `style.icon_font`,
and the color is applied to the rendered icon.

## Syntax Highlighting

Pragtical defines colors for the tokens produced by `Tokenizer`,
which is used to implement syntax highlighting.
These tokens are dependent on the syntax files for the particular language,
and are intentionally loosely defined.

| Name                             | Description
| ----                             | -----------
| `style.syntax["normal"]`   | Used for highlighting normal (plain) text.
| `style.syntax["symbol"]`   | Used for highlighting variables.
| `style.syntax["comment"]`  | Used for highlighting comments.
| `style.syntax["keyword"]`  | Used for highlighting keywords (e.g. `local`, `function`, `end`, `if`).
| `style.syntax["keyword2"]` | Used for highlighting a different set of keywords (e.g. `self`, `int`).
| `style.syntax["number"]`   | Used for highlighting numbers.
| `style.syntax["literal"]`  | Used for highlighting literals (e.g. `true`, `false`, `nil`).
| `style.syntax["string"]`   | Used for highlighting strings.
| `style.syntax["operator"]` | Used for highlighting operators (e.g. `+`, `-`, `/`, `*`).
| `style.syntax["function"]` | Used for highlighting functions.

### Additional Highlighting Tokens

Pragtical extends the available syntax tokens to allow for more fine
grained coloring of a language. This tokens aren't part of original Lite so
most syntax files do no include them. By default they are assigned darker
or lighter colors from the previous tokens but you can incorporate them into
your syntax for more flexibility and customization.

| Name                                    | Description
| --------------------------------------- | -----------
| `style.syntax["annotation"]`            | Used for doc comments.
| `style.syntax["annotation.string"]`     | Used for doc comments strings.
| `style.syntax["annotation.param"]`      | Used for doc comments params.
| `style.syntax["annotation.type"]`       | Used for doc comments types.
| `style.syntax["annotation.operator"]`   | Used for doc comments operators.
| `style.syntax["annotation.function"]`   | Used for doc comments functions.
| `style.syntax["annotation.number"]`     | Used for doc comments numbers.
| `style.syntax["annotation.keyword2"]`   | Used for doc comments keywords.
| `style.syntax["annotation.literal"]`    | Used for doc comments literals.
| `style.syntax["boolean"]`               | Used for keywords like: true or false.
| `style.syntax["character"]`             | Used for single quote sequences like: `'a'`.
| `style.syntax["character.special"]`     | Used for escape sequences like: `\t`, `\r`, `\n`.
| `style.syntax["conditional"]`           | Used for keywords like: if, else, elseif.
| `style.syntax["conditional.ternary"]`   | Used for conditional ternary as: `condition ? value1 : value2`.
| `style.syntax["constant"]`              | Used for keywords like: `nil`, `null`.
| `style.syntax["constant.builtin"]`      | Used for built-in constants.
| `style.syntax["constant.macro"]`        | Used for macro constants (e.g. `#define MYVAL 1`).
| `style.syntax["constructor"]`           | Used for constructor declarations (e.g. `__init`, `myclass::myclass()`).
| `style.syntax["debug"]`                 | Used for debugging aids (styled as comments).
| `style.syntax["define"]`                | Used for `#define` and similar macros.
| `style.syntax["error"]`                 | Used for error keywords or error reporting.
| `style.syntax["exception"]`             | Used for keywords like: `try`, `catch`, `finally`.
| `style.syntax["field"]`                 | Used for fields of classes or tables.
| `style.syntax["float"]`                 | Used for floating-point numbers.
| `style.syntax["function.call"]`         | Used for function calls.
| `style.syntax["function.macro"]`        | Used for macro-style function calls (e.g. `#define myfunc()`).
| `style.syntax["include"]`               | Used for `include`, `import`, or `require`.
| `style.syntax["keyword.return"]`        | Used for return statements.
| `style.syntax["keyword.function"]`      | Used for function declaration keywords.
| `style.syntax["keyword.operator"]`      | Used for logic operators like `and`, `or`.
| `style.syntax["label"]`                 | Used for labels (e.g. `label:`, `::label::`).
| `style.syntax["method"]`                | Used for class method declarations.
| `style.syntax["method.call"]`           | Used for method calls.
| `style.syntax["namespace"]`             | Used for namespace names.
| `style.syntax["parameter"]`             | Used for function parameters.
| `style.syntax["preproc"]`               | Used for preprocessor keywords like `#if`, `#endif`.
| `style.syntax["punctuation"]`           | Used for general punctuation.
| `style.syntax["punctuation.brackets"]`  | Used for brackets: `()`, `{}`, `[]`.
| `style.syntax["punctuation.delimiter"]` | Used for delimiters like `,`, `:`.
| `style.syntax["punctuation.special"]`   | Used for special characters like `#`, `@`.
| `style.syntax["repeat"]`                | Used for loops like `while`, `for`.
| `style.syntax["storageclass"]`          | Used for keywords like `static`, `const`, `constexpr`.
| `style.syntax["storageclass.lifetime"]` | Used for lifetime specifiers (e.g. `auto`, `register`).
| `style.syntax["tag"]`                   | Used for tags in HTML, JSX, etc.
| `style.syntax["tag.delimiter"]`         | Used for tag delimiters like `<` and `>`.
| `style.syntax["tag.attribute"]`         | Used for attributes inside tags (e.g. `id="value"`).
| `style.syntax["text.diff.add"]`         | Used to highlight added lines in diffs.
| `style.syntax["text.diff.delete"]`      | Used to highlight deleted lines in diffs.
| `style.syntax["type"]`                  | Used for standard library types.
| `style.syntax["type.builtin"]`          | Used for built-in types like `int`, `char`.
| `style.syntax["type.definition"]`       | Used for custom type definitions (e.g. `typedef`).
| `style.syntax["type.qualifier"]`        | Used for access modifiers like `private`, `public`.
| `style.syntax["variable"]`              | Used for user-defined variables.
| `style.syntax["variable.builtin"]`      | Used for built-in variables like `this`, `self`, `parent`.

## Size & Dimensions

The following entries define various sizes and dimensions used in Pragtical's user interface.
It's not recommended changing these values unless you know what you're doing.

| Name                                | Description
| ----                                | -----------
| `style.divider_size`                | The size of the divider between views.
| `style.scrollbar_size`              | The size of the scrollbar (contracted).
| `style.scrollbar_size_expanded`     | The size of the scrollbar (expanded).
| `style.minimum_thumb_size`          | The minimum size of the scrollbar handle.
| `style.contracted_scrollbar_margin` | The margin between the cursor and the contracted scrollbar to expand it.
| `style.expanded_scrollbar_margin `  | The margin between the cursor and the expanded scrollbar to contract it.
| `style.caret_width`                 | The width of the caret.
| `style.tab_width`                   | The width of each editor tab.
| `style.padding.x`                   | The horizontal padding.
| `style.padding.y`                   | The vertical padding.
| `style.margin.tab.top`              | The top margin of editor tabs.


[colors]: https://github.com/pragtical/colors/blob/master/colors/dracula.lua
[1]:      /img/developer-guide/syntaxes-and-themes/basic-layout.png
[2]:      /img/developer-guide/syntaxes-and-themes/scrollbar.png
[3]:      /img/developer-guide/syntaxes-and-themes/nagbar.png
