"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5676],{21866:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>c});var t=o(85893),s=o(11151);const d={sidebar_position:5,description:"Learn in detail how to add and manage keyboard shortcuts in Pragtical."},a="Managing Keyboard Shortcuts",r={id:"developer-guide/managing-keyboard-shortcuts",title:"Managing Keyboard Shortcuts",description:"Learn in detail how to add and manage keyboard shortcuts in Pragtical.",source:"@site/docs/developer-guide/managing-keyboard-shortcuts.md",sourceDirName:"developer-guide",slug:"/developer-guide/managing-keyboard-shortcuts",permalink:"/docs/developer-guide/managing-keyboard-shortcuts",draft:!1,unlisted:!1,editUrl:"https://github.com/pragtical/pragtical.github.io/edit/main/docs/developer-guide/managing-keyboard-shortcuts.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Learn in detail how to add and manage keyboard shortcuts in Pragtical."},sidebar:"tutorialSidebar",previous:{title:"Commands",permalink:"/docs/developer-guide/commands"},next:{title:"Classes and Objects",permalink:"/docs/developer-guide/classes-and-objects"}},i={},c=[{value:"Keyboard shortcut format",id:"keyboard-shortcut-format",level:3},{value:"Adding Keyboard Shortcuts",id:"adding-keyboard-shortcuts",level:3},{value:"Removing a Keyboard Shortcut",id:"removing-a-keyboard-shortcut",level:3},{value:"Getting Keyboard Shortcuts",id:"getting-keyboard-shortcuts",level:3},{value:"Overriding the Keymap",id:"overriding-the-keymap",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"managing-keyboard-shortcuts",children:"Managing Keyboard Shortcuts"}),"\n",(0,t.jsxs)(n.p,{children:["Mouse clicks, wheel and keyboard events are handled by\n",(0,t.jsx)(n.code,{children:"core.keymap"})," before it was passed to other parts of the editor.\nThe keymap holds the state of various keys, including the modifiers\n(",(0,t.jsx)(n.code,{children:"keymap.modkeys"}),") and runs a command when it's appropriate.\nThe keymap holds a map of key combinations to commands (",(0,t.jsx)(n.code,{children:"keymap.map"}),")\nand a map of commands to key combinations (",(0,t.jsx)(n.code,{children:"keymap.reverse_map"}),")."]}),"\n",(0,t.jsx)(n.h3,{id:"keyboard-shortcut-format",children:"Keyboard shortcut format"}),"\n",(0,t.jsxs)(n.p,{children:["The string is split into parts delimited by ",(0,t.jsx)(n.code,{children:"+"})," and\neach part of the split string is treated as a key.\nFor the list of valid keys, check out ",(0,t.jsx)(n.a,{href:"https://wiki.libsdl.org/SDL2/SDL_Keycode",children:"SDL's documentation"}),' (the "Key Name" column).']}),"\n",(0,t.jsx)(n.p,{children:"For mouse buttons, the format is as follows:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"[nclicks][type]click"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"nclicks"})," is the number of clicks and defaults to 1 when not specified.\n",(0,t.jsx)(n.code,{children:"type"})," is optional and can be one of ",(0,t.jsx)(n.code,{children:"l"}),", ",(0,t.jsx)(n.code,{children:"r"}),", ",(0,t.jsx)(n.code,{children:"m"}),", ",(0,t.jsx)(n.code,{children:"x"})," and ",(0,t.jsx)(n.code,{children:"y"}),".\nThese letters correspond to left, right middle, mouse 4 and\nmouse 5.\nBy default, ",(0,t.jsx)(n.code,{children:"type"})," is set to ",(0,t.jsx)(n.code,{children:"l"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.mdxAdmonitionTitle,{children:["Pragtical does not support consecutive keystrokes, such as ",(0,t.jsx)(n.code,{children:"ctrl+k ctrl+b"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'-- bind core:find-command to ctrl+k\nkeymap.add { ["ctrl+k"] = "core:find-command" }\n\n-- bind core:find-command to clicking middle mouse\nkeymap.add { ["mclick"] = "core:find-command" }\n\n-- bind core:find-command to double clicking right mouse\nkeymap.add { ["2mclick"] = "core:find-command" }\n'})}),"\n",(0,t.jsx)(n.h3,{id:"adding-keyboard-shortcuts",children:"Adding Keyboard Shortcuts"}),"\n",(0,t.jsxs)(n.p,{children:["Ways to add keyboard shortcuts were already discussed in the user guide.\nTo add keyboard shortcuts programmatically, use ",(0,t.jsx)(n.code,{children:"keymap.add()"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"-- a composite type for commands\nlocal type Commands = string | {string}\n\nfunction keymap.add(map: {string: Commands}, overwrite: boolean): () end\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"keymap.add()"})," takes in a table of keyboard shortcuts and the commands\nfor each keyboard shortcut.\nIf the second parameter ",(0,t.jsx)(n.code,{children:"overwrite"})," is true, then the commands\nwill be replaced instead of appended."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'local keymap = require "core.keymap"\n\n-- bind alt + ijkl to move the cursor\nkeymap.add {\n  ["alt+j"] = "doc:move-to-previous-char",\n  ["alt+l"] = "doc:move-to-next-char",\n  ["alt+i"] = "doc:move-to-previous-line",\n  ["alt+k"] = "doc:move-to-next-line",\n}\n\n-- you can also bind a keybind to execute multiple actions\nkeymap.add {\n  ["ctrl+c"] = ["doc:move-to-next-line", "doc:move-to-next-word"]\n}\n\n-- you can also overwrite current keybind\n-- override up for down\nkeymap.add({\n  ["down"] = "doc:move-to-previous-line",\n  ["up"] = "doc:move-to-next-line",\n}, true)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"removing-a-keyboard-shortcut",children:"Removing a Keyboard Shortcut"}),"\n",(0,t.jsxs)(n.p,{children:["To remove a keyboard shortcut, you can use ",(0,t.jsx)(n.code,{children:"keymap.unbind()"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"function keymap.unbind(shortcut: string, command?: string): () end\n"})}),"\n",(0,t.jsx)(n.p,{children:"The function accepts a keyboard shortcut and optionally a command to unbind.\nIf a command is specified, the function will unbind that command\nfrom the key.\nOtherwise, it will unbind all commands from the shortcut."}),"\n",(0,t.jsx)(n.h3,{id:"getting-keyboard-shortcuts",children:"Getting Keyboard Shortcuts"}),"\n",(0,t.jsxs)(n.p,{children:["To get all the keyboard shortcuts associated with a command, use\n",(0,t.jsx)(n.code,{children:"keymap.get_binding()"})," or ",(0,t.jsx)(n.code,{children:"keymap.get_bindings()"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"function keymap.get_binding(cmd: string): string... end\n\nfunction keymap.get_bindings(cmd: string): {string} end\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Both functions accept a command and returns the keyboard\nshortcuts associated to it.\nHowever, ",(0,t.jsx)(n.code,{children:"keymap.get_bindings()"})," returns a table instead\nof a list of values."]}),"\n",(0,t.jsx)(n.h3,{id:"overriding-the-keymap",children:"Overriding the Keymap"}),"\n",(0,t.jsxs)(n.p,{children:["If your plugin need to override the keymap for extra functionality\n(e.g. redirecting keyboard shortcuts to a terminal), you\ncan override ",(0,t.jsx)(n.code,{children:"keymap.on_key_pressed()"}),", ",(0,t.jsx)(n.code,{children:"keymap.on_mouse_wheel()"}),",\n",(0,t.jsx)(n.code,{children:"keymap.on_mouse_pressed()"})," and ",(0,t.jsx)(n.code,{children:"keymap.on_key_released()"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"function keymap.on_key_pressed(key: string, ...: any): boolean end\n\nfunction keymap.on_mouse_wheel(delta_y: number,\n                                delta_x: number,\n                                ...: any): boolean end\n\nfunction keymap.on_mouse_pressed(button: string,\n                                  x: number,\n                                  y: number,\n                                  clicks: number): boolean end\n\nfunction keymap.on_key_released(key: string): () end\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"keymap.on_key_pressed()"})," accepts the key that is being pressed.\nThe other values are reserved for internal usage and should be\npassed as-is."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"keymap.on_mouse_wheel()"}),' accepts the X and Y delta \u2014 the number\nof "steps" scrolled on the mouse wheel.\nOther values are reserved for internal usage and should be passed\nas-is.']}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"keymap.on_mouse_pressed()"})," accepts the type of button being pressed,\nthe coordinates where the button is pressed and the number of\nconsecutive clicks."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"keymap.on_key_released()"})," accepts the key that is released."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"keymap.on_key_pressed()"}),", ",(0,t.jsx)(n.code,{children:"keymap.on_mouse_wheel()"})," and\n",(0,t.jsx)(n.code,{children:"keymap.on_mouse_pressed()"})," returns a boolean that signals\nif the event is being handled.\nIf the function returns true, then the event is considered\nhandled and will not be propagated further.\nYou must handle this condition if you decide to override\nany of these functions."]}),"\n",(0,t.jsx)(n.admonition,{title:"Since v2.1.0, text composition events (IME) should be taken into consideration.",type:"warning",children:(0,t.jsx)(n.p,{children:"In recent versions of Pragtical, text composition/input events\nhas been added to support IMEs.\nWhen text input is enabled, you may receive a key down event\nand a text input event.\nYou need to consider how to handle these new events too."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'local keymap = require "core.keymap"\n\n-- a simple function that logs your keypresses\nlocal keymap_on_key_pressed = keymap.on_key_pressed\nfunction keymap.on_key_pressed(key, ...)\n  local handled = keymap_on_key_pressed(self, key, ...)\n  print(key, "Pressed!")\nend\n\nlocal ime = require "core.ime"\n\n-- to handle IME text composition events, you need to\n-- check the ime.editing value.\n-- If this value is true, text is being composited.\n-- You might want to ignore the keypresses.\nfunction keymap.on_key_pressed(key, ...)\n  -- on Linux this behavior is not observed so it can\n  -- be skipped\n  if PLATFORM ~= "Linux" and ime.editing then return false end\n  local handled = keymap_on_key_pressed(self, key, ...)\n  print(key, "Pressed!")\nend\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>a});var t=o(67294);const s={},d=t.createContext(s);function a(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);