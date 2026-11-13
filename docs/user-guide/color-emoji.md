---
sidebar_position: 2.2
description: Display color emoji using installed fonts or an explicit fallback font.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Color Emoji

Pragtical supports color emoji in documents and interface text. With
**System Fallback** enabled, which is the default, the editor can use an
installed emoji font automatically. You do not need to add it to every font
list. The [font configuration guide](configuration.md#automatic-font-fallback)
explains platform support and how to opt out.

To choose a particular emoji design, or use a font without installing it
system-wide, add an explicit fallback after your regular text font. Configured
fonts keep priority over automatically discovered system fonts.

![Color emoji rendered with Noto-COLRv1.ttf in Pragtical][emoji]

## Choose an Emoji Font

**Noto Color Emoji** is one option. The `Noto-COLRv1.ttf` variant supports color
outlines and is used for the explicit fallback example below. It is available
from the official [Noto Emoji] project:

**[Download Noto-COLRv1.ttf][download]**

Create a `fonts` folder inside your [user directory](configuration.md#location)
and place the downloaded file there. For a standard Linux configuration,
the resulting path is `~/.config/pragtical/fonts/Noto-COLRv1.ttf`.
Pragtical searches this folder for fonts, so a system-wide installation is
not required.

## Add the Fallback

<Tabs groupId="configuration">
  <TabItem value="user-module" label="User Module" default>

Open your [user module](configuration.md#user-module) and create a font group:

```lua
local style = require "core.style"

style.code_font = renderer.font.group {
  renderer.font.load(
    DATADIR .. "/fonts/JetBrainsMono-Regular.ttf",
    15 * SCALE,
    { system_fallback = true }
  ),
  renderer.font.load(
    USERDIR .. "/fonts/Noto-COLRv1.ttf",
    15 * SCALE,
    { system_fallback = true }
  )
}
```

Keep your preferred code font first and add any other fallback fonts as
additional entries. Load each font separately: font groups cannot be nested.

To display color emoji in interface text as well, configure `style.font`:

```lua
style.font = renderer.font.group {
  renderer.font.load(DATADIR .. "/fonts/FiraSans-Regular.ttf", 15 * SCALE),
  renderer.font.load(
    USERDIR .. "/fonts/Noto-COLRv1.ttf",
    15 * SCALE,
    { system_fallback = true }
  )
}
```

  </TabItem>
  <TabItem value="settings-ui" label="Settings UI">

1. Open Settings with the `ui:settings` command.
2. In **Core > Editor > Code Font**, press **Add**.
3. In the Font Selector, press **All** and search for **Noto Color Emoji**.
   Select the entry whose path ends in `Noto-COLRv1.ttf`.
4. Leave **System Fallback** enabled if you also want automatic font discovery,
   then press **Save**. **Ligatures** is optional for programming operators;
   it is not required for emoji sequences.
5. Keep your regular code font first and **Noto Color Emoji Regular** after it.
   Use the arrow buttons to adjust the fallback order.

![Noto Color Emoji after JetBrains Mono in the Code Font list][font-order]

To enable emoji in interface text too, repeat these steps for
**Core > User Interface > Font**.

If the font does not appear in the picker, use
**Core > General > Clear Fonts Cache**, wait for the scan to finish and try again.

The Settings UI shares size and font options across the entire fallback list.
The first font's **System Fallback** option controls automatic discovery for
the group.

  </TabItem>
</Tabs>

## Emoji Sequences and Fallback Order

Supported emoji sequences are shaped as complete graphemes, including skin
tones, variation selectors, flags, and joined emoji. This works independently
of optional [programming ligatures](font-ligatures.md). Font coverage still
matters: the selected font must be able to render the complete sequence.

Arrow movement, mouse placement, selection and deletion keep a displayed
grapheme together, so the caret does not stop inside a composed emoji or
between a letter and its combining accent. The underlying text is preserved.

If an emoji appears monochrome, an earlier font may already provide that
character. Move Noto Color Emoji ahead of other symbol or emoji fallbacks.
If characters appear as boxes, check that the font loaded successfully and
that you downloaded the color variant named above.
For automatic fallback on Linux, also check that Fontconfig and an emoji font
are available. An unsupported sequence can appear as separate symbols even
when its individual characters exist in a font.

[emoji]: /img/user-guide/settings/fonts/color-emoji.png
[font-order]: /img/user-guide/settings/fonts/font-order.png
[Noto Emoji]: https://github.com/googlefonts/noto-emoji
[download]: https://raw.githubusercontent.com/googlefonts/noto-emoji/main/2D/fonts/Noto-COLRv1.ttf
