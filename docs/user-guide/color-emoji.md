---
sidebar_position: 2.2
description: Download a color emoji font and configure it as a fallback in Pragtical.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Color Emoji

Pragtical supports color emoji in documents and interface text. To enable them,
add a color emoji font after your regular text font in the fallback list.
The regular font continues to render code, while the fallback supplies missing
emoji characters.

![Color emoji rendered with Noto-COLRv1.ttf in Pragtical][emoji]

## Download the Font

We recommend **Noto Color Emoji**, specifically the `Noto-COLRv1.ttf` variant
used in the screenshots. It is available from the official [Noto Emoji] project:

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
    { ligatures = true }
  ),
  renderer.font.load(
    USERDIR .. "/fonts/Noto-COLRv1.ttf",
    15 * SCALE,
    { ligatures = true }
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
    { ligatures = true }
  )
}
```

  </TabItem>
  <TabItem value="settings-ui" label="Settings UI">

1. Open Settings with the `ui:settings` command.
2. In **Core > Editor > Code Font**, press **Add**.
3. In the Font Selector, press **All** and search for **Noto Color Emoji**.
   Select the entry whose path ends in `Noto-COLRv1.ttf`.
4. Enable **Ligatures** and press **Save**.
5. Keep your regular code font first and **Noto Color Emoji Regular** after it.
   Use the arrow buttons to adjust the fallback order.

![Noto Color Emoji after JetBrains Mono in the Code Font list][font-order]

To enable emoji in interface text too, repeat these steps for
**Core > User Interface > Font**.

If the font does not appear in the picker, use
**Core > General > Clear Fonts Cache**, wait for the scan to finish and try again.

The Settings UI shares size and font options across the entire fallback list.
Use the User Module to control ligatures for each font separately.

  </TabItem>
</Tabs>

## Emoji Sequences and Fallback Order

Color rendering does not require ligatures for individual emoji.
Enabling [ligatures](font-ligatures.md) also allows the emoji font to combine
supported sequences, such as joined emoji. Every character in a sequence must
be handled by the same font for it to join, so results depend on font coverage
and fallback order.

If an emoji appears monochrome, an earlier font may already provide that
character. Move Noto Color Emoji ahead of other symbol or emoji fallbacks.
If characters appear as boxes, check that the font loaded successfully and
that you downloaded the color variant named above.

[emoji]: /img/user-guide/settings/fonts/color-emoji.png
[font-order]: /img/user-guide/settings/fonts/font-order.png
[Noto Emoji]: https://github.com/googlefonts/noto-emoji
[download]: https://raw.githubusercontent.com/googlefonts/noto-emoji/main/2D/fonts/Noto-COLRv1.ttf
