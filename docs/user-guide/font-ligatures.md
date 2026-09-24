---
sidebar_position: 2.1
description: Enable font ligatures using Pragtical's Settings UI or Lua configuration.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Font Ligatures

Pragtical supports font ligatures, allowing a compatible font to join characters
such as `!=`, `=>` and `>=` into a single visual symbol. This only changes how
the text is rendered: editing, copying and saving still use the original
characters.

Ligatures are disabled by default. The bundled **JetBrains Mono** font supports
them, so you can try the feature without downloading another font.

![JetBrains Mono rendering operator ligatures in Pragtical][ligatures]

## Enable Ligatures

<Tabs groupId="configuration">
  <TabItem value="user-module" label="User Module" default>

Open your [user module](configuration.md#user-module) and enable the `ligatures`
option when loading the code font:

```lua
local style = require "core.style"

style.code_font = renderer.font.load(
  DATADIR .. "/fonts/JetBrainsMono-Regular.ttf",
  15 * SCALE,
  { ligatures = true }
)
```

Replace the path to use another font with ligatures. Set `ligatures = false`
to disable them again.

When using `renderer.font.group`, set the option on each font that should use
ligatures. The [color emoji guide](color-emoji.md) includes a fallback example.

  </TabItem>
  <TabItem value="settings-ui" label="Settings UI">

1. Open Settings with the `ui:settings` command.
2. In the **Core** tab, expand **Editor** and find **Code Font**.
3. Double-click **JetBrains Mono Regular**, or the font you want to edit.
4. Check **Ligatures** in the Font Selector and press **Save**.

![The Code Font list under Core, Editor][font-option]

![Font Selector with the Ligatures checkbox enabled][font-selector]

The size and font options apply to every font in this list. To configure
ligatures separately for individual fallback fonts, use the User Module.

  </TabItem>
</Tabs>

## Font Support

The available ligatures depend on the font. Enabling the option will not add
ligatures to a font that does not provide them. Ligatures also stay within
the same font and rendered text run, so syntax highlighting or a fallback
font boundary can keep a sequence from joining.

For interface text, configure **Core > User Interface > Font** instead of
**Code Font**, or assign the font to `style.font` in Lua.

See the [renderer font options] for the complete API.

[ligatures]: /img/user-guide/settings/fonts/font-ligatures.png
[font-option]: /img/user-guide/settings/fonts/font-option.png
[font-selector]: /img/user-guide/settings/fonts/font-selector.png
[renderer font options]: /docs/api/renderer#rendererfontoptions
