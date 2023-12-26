"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3874],{457:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var s=t(5893),o=t(1151),i=t(4866),r=t(5162);const l={sidebar_position:2,description:"Learn how to configure Pragtical \u2014 configure fonts, themes and other options."},a="Configuration",c={id:"user-guide/configuration",title:"Configuration",description:"Learn how to configure Pragtical \u2014 configure fonts, themes and other options.",source:"@site/docs/user-guide/configuration.md",sourceDirName:"user-guide",slug:"/user-guide/configuration",permalink:"/docs/user-guide/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/pragtical/pragtical.github.io/tree/main/docs/user-guide/configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Learn how to configure Pragtical \u2014 configure fonts, themes and other options."},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/user-guide/introduction"},next:{title:"Plugins",permalink:"/docs/user-guide/plugins"}},d={},h=[{value:"Location",id:"location",level:2},{value:"User Module",id:"user-module",level:2},{value:"Project Module",id:"project-module",level:2},{value:"Settings GUI",id:"settings-gui",level:2},{value:"Fonts",id:"fonts",level:2},{value:"Keyboard shortcuts",id:"keyboard-shortcuts",level:2},{value:"Adding a keyboard shortcut",id:"adding-a-keyboard-shortcut",level:3},{value:"Removing a keyboard shortcut",id:"removing-a-keyboard-shortcut",level:3},{value:"Themes",id:"themes",level:2},{value:"Other options",id:"other-options",level:2},{value:"Indentation",id:"indentation",level:3},{value:"Window decoration",id:"window-decoration",level:3},{value:"Project files limit",id:"project-files-limit",level:3},{value:"Ignoring files",id:"ignoring-files",level:3},{value:"Caret",id:"caret",level:3},{value:"FPS (Frame rate)",id:"fps-frame-rate",level:3},{value:"Transitions",id:"transitions",level:3},{value:"Other options",id:"other-options-1",level:3},{value:"Plugins",id:"plugins",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.h2,{id:"location",children:"Location"}),"\n",(0,s.jsxs)(n.p,{children:["Pragtical searches a list of paths to store user configuration.\nThis path is also known as ",(0,s.jsx)(n.code,{children:"USERDIR"}),".\nThe first path that is available will be used."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"<path_to_pragtical_executable>/user"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"$PRAGTICAL_USERDIR"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"$XDG_CONFIG_HOME/pragtical"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"$HOME/.config/pragtical"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["On Windows, ",(0,s.jsx)(n.code,{children:"$HOME"})," will be replaced with ",(0,s.jsx)(n.code,{children:"$USERPROFILE"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"user-module",children:"User Module"}),"\n",(0,s.jsx)(n.p,{children:"Pragtical is mainly configured through the user module.\nThe user module is a Lua script run by Pragtical during startup,\nbefore plugins are loaded.\nThus, you can change configuration options, bind shortcut keys, load color\nschemes, change the fonts among other things."}),"\n",(0,s.jsxs)(n.p,{children:["To modify the user module, you can run the command ",(0,s.jsx)(n.code,{children:"core:open-user-module"}),".\nYou can also modify the file ",(0,s.jsx)(n.code,{children:"USERDIR/init.lua"})," directly.\nPragtical will reload the file on file change."]}),"\n",(0,s.jsx)(n.h2,{id:"project-module",children:"Project Module"}),"\n",(0,s.jsx)(n.p,{children:"The project module is an optional module which is loaded from the current\nproject's directory when Pragtical is started. Project modules can be useful for\nthings like adding custom commands for project-specific build systems, or\nloading project-specific plugins."}),"\n",(0,s.jsx)(n.p,{children:"The project module is loaded when the editor starts,\nafter the user module is loaded but before plugins are loaded."}),"\n",(0,s.jsxs)(n.p,{children:["To modify project module, you can run the command ",(0,s.jsx)(n.code,{children:"core:open-project-module"}),".\nThe command will create a project module if it does not exist."]}),"\n",(0,s.jsx)(n.h2,{id:"settings-gui",children:"Settings GUI"}),"\n",(0,s.jsx)(n.p,{children:"The settings plugin provides a GUI to configure Pragtical."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/img/user-guide/settings/settings.png",alt:"Settings User Interface"})}),"\n",(0,s.jsx)(n.h2,{id:"fonts",children:"Fonts"}),"\n",(0,s.jsx)(n.p,{children:"Pragtical comes with JetBrains Mono and Fira Sans by default."}),"\n",(0,s.jsxs)(n.p,{children:["To change the fonts used by the editor, you can change the\nvariable ",(0,s.jsx)(n.code,{children:"style.font"})," and ",(0,s.jsx)(n.code,{children:"style.code_font"}),".\nThese variables are responsible for the UI font and code\nfont respectively."]}),"\n",(0,s.jsxs)(n.p,{children:["To load a font, you can use ",(0,s.jsx)(n.code,{children:"renderer.font.load()"}),".\nThis function allows you to load a font file as long as\nit is supported by FreeType.\nThe function takes in the path to the font file and\nthe pixel size of the font."]}),"\n",(0,s.jsxs)(n.p,{children:["When displaying text with multiple languages, multiple\nfonts are often required.\nPragtical supports fallback fonts by using the function\n",(0,s.jsx)(n.code,{children:"renderer.font.group()"}),".\nThis function takes in a table of fonts loaded by\n",(0,s.jsx)(n.code,{children:"renderer.font.load()"}),".\nPragtical will attempt to render fonts based on the order\nthe fonts are added to the table."]}),"\n",(0,s.jsxs)(i.Z,{groupId:"configuration",children:[(0,s.jsxs)(r.Z,{value:"user-module",label:"User Module",default:!0,children:[(0,s.jsxs)(n.p,{children:["For this example, we'll load Noto Sans Mono, which is\nlocated in ",(0,s.jsx)(n.code,{children:"/usr/share/fonts/noto/NotoSansMono-Regular.ttf"}),"\nand set it as our code font."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local style = require "core.style"\n-- SCALE is the pixel scaling required for the current DPI setup.\n-- This converts the font size from points to pixels.\nstyle.code_font = renderer.font.load("/usr/share/fonts/noto/NotoSansMono-Regular.ttf", 15 * SCALE)\n'})}),(0,s.jsxs)(n.p,{children:["Next, we'll also load Noto Sans Mono CJK SC, which is located\nin ",(0,s.jsx)(n.code,{children:"/usr/share/fonts/noto-cjk/NotoSansCJK-Regular.ttc"})," and use\nit as fallback."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local style = require "core.style"\n-- do not ever do style.code_font = { style.code_font, ... }\n-- style.code_font can be a font group and pragtical does not\n-- support nested font groups!\nstyle.code_font = renderer.font.group {\n  renderer.font.load("/usr/share/fonts/noto/NotoSansMono-Regular.ttf", 15 * SCALE),\n  renderer.font.load("/usr/share/fonts/noto-cjk/NotoSansCJK-Regular.ttc", 15 * SCALE)\n}\n'})}),(0,s.jsx)(n.admonition,{title:"No .ttc fonts support",type:"warning",children:(0,s.jsx)(n.p,{children:"Pragtical does not support using a specfific face in a TrueType collection\n(.ttc) file. Only the first face can be used."})})]}),(0,s.jsxs)(r.Z,{value:"settings-ui",label:"Settings UI",children:[(0,s.jsxs)(n.p,{children:['To change the code font, navigate to the "Core" tab\nand expand the "Editor" section.\nThe first entry should be a list of code fonts used by the editor.\n',(0,s.jsx)(n.img,{src:"/img/user-guide/settings/fonts/font-option.png",alt:"The fonts option under the Editor section"})]}),(0,s.jsxs)(n.p,{children:['To add a new font, click the "Add" button.\nA font selector will be shown.\n',(0,s.jsx)(n.img,{src:"/img/user-guide/settings/fonts/font-selector.png",alt:"Font selector"})]}),(0,s.jsx)(n.p,{children:'To choose a font, press the "Mono" button and select a font from\nthe list. The "All" button allows you to select non-monospace\nfonts.'}),(0,s.jsx)(n.p,{children:'A demo text will be shown at the textbox\non the top of the selector.\nTo change the antialiasing settings of the font, click on the\ndropdown to the left.\nTo change the hinting settings of the font, click on the dropdown\nto the right.\nThe changes will be reflected automatically on the preview window.\nPress "Save" to add the font or "Cancel" to go back.'}),(0,s.jsxs)(n.p,{children:['If you have more than one fonts set up, you can change\nthe fallback order by pressing the "\u2039" and "\u203a" buttons.\n',(0,s.jsx)(n.img,{src:"/img/user-guide/settings/fonts/font-order.png",alt:"The buttons to change font ordering"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"keyboard-shortcuts",children:"Keyboard shortcuts"}),"\n",(0,s.jsxs)(n.p,{children:["Keyboard shortcuts are managed by the ",(0,s.jsx)(n.code,{children:"core.keymap"})," module.\nThis module maps keyboard shortcuts to one or more commands,\nwhere each command has a predicate that determine whether\nit should run based on certain conditions."]}),"\n",(0,s.jsx)(n.p,{children:"For a list of default keyboard shortcuts, check out these pages:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/user-guide/keymap",children:"non-macOS platforms (Windows, Linux, etc.)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/user-guide/macos-keymap",children:"macOS"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"adding-a-keyboard-shortcut",children:"Adding a keyboard shortcut"}),"\n",(0,s.jsxs)(n.p,{children:["To add keyboard shortcuts, you can use ",(0,s.jsx)(n.code,{children:"keymap.add()"}),"."]}),"\n",(0,s.jsxs)(i.Z,{groupId:"configuration",children:[(0,s.jsxs)(r.Z,{value:"user-module",label:"User Module",default:!0,children:[(0,s.jsx)(n.p,{children:"For example, to bind ++ctrl+m++ to move the cursor backwards\nand then upwards, do:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local keymap = require "core.keymap"\nkeymap.add {\n  ["ctrl+m"] = "doc:move-to-previous-char"\n}\nkeymap.add {\n  ["ctrl+m"] = "doc:move-to-previous-line"\n}\n'})}),(0,s.jsx)(n.p,{children:"Pragtical will automatically execute both commands in the order that\nthey're added."}),(0,s.jsxs)(n.p,{children:["Alternatively, to override a keyboard shortcut completely,\nadd ",(0,s.jsx)(n.code,{children:"true"})," on the second parameter of ",(0,s.jsx)(n.code,{children:"keybind.add()"}),"."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local keymap = require "core.keymap"\nkeymap.add {\n  ["ctrl+m"] = "doc:move-to-previous-char"\n}\nkeymap.add({\n  ["ctrl+m"] = "doc:move-to-previous-line"\n}, true)\n'})}),(0,s.jsxs)(n.p,{children:["This will cause Pragtical to only run\n",(0,s.jsx)(n.code,{children:"core:move-to-previous-line"})," when ++ctrl+m++ is pressed."]})]}),(0,s.jsxs)(r.Z,{value:"settings-ui",label:"Settings UI",children:[(0,s.jsxs)(n.p,{children:['Navigate to the "Keybindings" tab.\n',(0,s.jsx)(n.img,{src:"/img/user-guide/settings/keybinds/keybinds.png",alt:"The keybindings tab"})]}),(0,s.jsxs)(n.p,{children:["Scroll until you find the entry containing\nthe command you want to bind to and click on it.\nIn recent versions of the Settings plugin, you can also\nsearch for commands with the text box on top.\nIn this example, we'll pick ",(0,s.jsx)(n.code,{children:"doc:move-to-previous-char"}),"."]}),(0,s.jsxs)(n.p,{children:['To add a keybind, press the "Add" and press the key combination\nthat you want to bind to. Afterwards, press "Save".\n',(0,s.jsx)(n.img,{src:"/img/user-guide/settings/keybinds/keybind-selector.png",alt:"The dialog to assign keyboard shortcuts"})]}),(0,s.jsxs)(n.p,{children:['If the keyboard shortcut is set properly,\nyou will see the updated keyboard shortcut\non the "Bindings" section at the right.\n',(0,s.jsx)(n.img,{src:"/img/user-guide/settings/keybinds/keybinds-after.png",alt:"The keybind tab with changed keybinds"})]}),(0,s.jsx)(n.p,{children:'To replace previous keyboard shortcuts,\nsimply delete any existing keyboard shortcut\nvia the "Remove" button, then re-add it.'})]})]}),"\n",(0,s.jsx)(n.h3,{id:"removing-a-keyboard-shortcut",children:"Removing a keyboard shortcut"}),"\n",(0,s.jsxs)(n.p,{children:["To remove an existing keyboard shortcut, you can use\n",(0,s.jsx)(n.code,{children:"keymap.unbind()"}),"."]}),"\n",(0,s.jsxs)(i.Z,{groupId:"configuration",children:[(0,s.jsxs)(r.Z,{value:"user-module",label:"User Module",default:!0,children:[(0,s.jsx)(n.p,{children:"In this example, we will unbind ++ctrl+m++."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local keymap = require "core.keymap"\nkeymap.unbind("ctrl+m", "doc:move-to-previous-line")\nkeymap.unbind("ctrl+m", "doc:move-to-previous-char")\n'})}),(0,s.jsx)(n.p,{children:"This will unbind the two commands from ++ctrl+m++."}),(0,s.jsxs)(n.p,{children:["Alternatively, to unbind all commands from ++ctrl+m++,\nyou can omit the second parameter to ",(0,s.jsx)(n.code,{children:"keymap.unbind()"}),"."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local keymap = require "core.keymap"\nkeymap.unbind("ctrl+m", "doc:move-to-previous-line")\nkeymap.unbind("ctrl+m", "doc:move-to-previous-char")\n'})})]}),(0,s.jsxs)(r.Z,{value:"settings-ui",label:"Settings UI",children:[(0,s.jsxs)(n.p,{children:['Navigate to the "Keybindings" tab.\n',(0,s.jsx)(n.img,{src:"/img/user-guide/settings/keybinds/keybinds-after.png",alt:"Screenshot showing the keybindings tab"})]}),(0,s.jsxs)(n.p,{children:["Scroll until you find the entry containing\nthe command you want to bind to and click on it.\nIn recent versions of the Settings plugin, you can also\nsearch for commands with the text box on top.\nIn this example, we pick ",(0,s.jsx)(n.code,{children:"doc:move-to-previous-char"}),"."]}),(0,s.jsxs)(n.p,{children:['To remove a keyboard shortcut, select the shortcut you want to remove\nand press the "Remove" button.\nAfterwards, press the "Save" button to save the changes.\n',(0,s.jsx)(n.img,{src:"/img/user-guide/settings/keybinds/keybind-selector-after.png",alt:"Screenshot showing the keybind changer"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"themes",children:"Themes"}),"\n",(0,s.jsx)(n.p,{children:"The default theme is a dark theme.\nThemes are implemented as plugins that changes the styling\nvariables of Pragtical."}),"\n",(0,s.jsxs)(n.p,{children:["This can be changed with ",(0,s.jsx)(n.code,{children:"core.reload_module()"})," and loading\nthe appropriate theme file."]}),"\n",(0,s.jsxs)(i.Z,{groupId:"configuration",children:[(0,s.jsxs)(r.Z,{value:"user-module",label:"User Module",default:!0,children:[(0,s.jsxs)(n.p,{children:["To load the theme ",(0,s.jsx)(n.code,{children:"summer"}),", add ",(0,s.jsx)(n.code,{children:'core.reload_module "colors.summer"'}),"."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'core.reload_module "color.summer"\n'})})]}),(0,s.jsxs)(r.Z,{value:"settings-ui",label:"Settings UI",children:[(0,s.jsx)(n.p,{children:'Navigate to the "Colors" tab.'}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/img/user-guide/settings/colors.png",alt:"The Colors tab"})}),(0,s.jsx)(n.p,{children:"Select your desired theme.\nThe colors should apply immediately."})]})]}),"\n",(0,s.jsx)(n.h2,{id:"other-options",children:"Other options"}),"\n",(0,s.jsxs)(n.p,{children:["There are a lot of configuration options that can be modified.\nA list of these options can be found in ",(0,s.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/blob/master/data/core/config.lua",children:(0,s.jsx)(n.code,{children:"data/core/config.lua"})}),",\nbut we'll list a few common ones here."]}),"\n",(0,s.jsx)(n.h3,{id:"indentation",children:"Indentation"}),"\n",(0,s.jsxs)(n.p,{children:["To change the indentation size and type, set ",(0,s.jsx)(n.code,{children:"config.indent_size"}),"\nand ",(0,s.jsx)(n.code,{children:"config.tab_type"})," respectively."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local config = require "core.config"\nconfig.indent_size = 4 -- set indentation to 4\nconfig.tab_type =      -- "soft" for spaces, "hard" for tabs\n'})}),"\n",(0,s.jsx)(n.h3,{id:"window-decoration",children:"Window decoration"}),"\n",(0,s.jsxs)(n.p,{children:["If you're on platforms such as Wayland where window decoration may be\nclient drawn, you can set ",(0,s.jsx)(n.code,{children:"config.borderless"})," to ",(0,s.jsx)(n.code,{children:"true"}),".\nThis will let Pragtical draw its own window decoration."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local config = require "core.config"\n-- enable custom window borders\nconfig.borderless = true\n'})}),"\n",(0,s.jsx)(n.h3,{id:"project-files-limit",children:"Project files limit"}),"\n",(0,s.jsx)(n.p,{children:"When opening large directories, Pragtical will often complain about reaching\nthe project file limit.\nThis is because Pragtical becomes slower when it needs to index these files\non startup."}),"\n",(0,s.jsxs)(n.p,{children:["If your filesystem has good performance, you can increase this limit\nby setting ",(0,s.jsx)(n.code,{children:"config.max_project_files"})," to something else.\nThe default value is 2000."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local config = require "core.config"\n-- set max project files to 5000\nconfig.max_project_files = 5000\n'})}),"\n",(0,s.jsx)(n.h3,{id:"ignoring-files",children:"Ignoring files"}),"\n",(0,s.jsxs)(n.p,{children:["Pragtical does not index certain files and directories by default, such as\nversion control and executables.\nThis can be modified by changing ",(0,s.jsx)(n.code,{children:"config.ignore_files"}),".\nThis value is a table of Lua patterns.\nFor directories, the pattern ends with a forward slash (",(0,s.jsx)(n.code,{children:"/"}),").\nFor files, the pattern ends with the end anchor (",(0,s.jsx)(n.code,{children:"$"}),")."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local config = require "core.config"\n-- ignore .data/\ntable.insert(config.ignore_files, "^%.data/")\n'})}),"\n",(0,s.jsx)(n.h3,{id:"caret",children:"Caret"}),"\n",(0,s.jsx)(n.p,{children:"You can disable or change the blinking rate of the caret."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local config = require "core.config"\nconfig.disable_blink = true -- disable caret blinking\nconfig.blink_period = 0.4 -- change caret blink rate\n'})}),"\n",(0,s.jsx)(n.h3,{id:"fps-frame-rate",children:"FPS (Frame rate)"}),"\n",(0,s.jsxs)(n.p,{children:["The default frame rate is set to 60.\nIf this causes an issue, you can set it via ",(0,s.jsx)(n.code,{children:"config.fps"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local config = require "core.config"\n-- set FPS to 30\nconfig.fps = 30\n'})}),"\n",(0,s.jsx)(n.h3,{id:"transitions",children:"Transitions"}),"\n",(0,s.jsxs)(n.p,{children:["You can disable any animations/transitions by setting ",(0,s.jsx)(n.code,{children:"config.transitions"}),"\nto ",(0,s.jsx)(n.code,{children:"false"}),".\nTo disable individual transitions, you can set any member of\n",(0,s.jsx)(n.code,{children:"config.disabled_transitions"})," to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local config = require "core.config"\n-- disable all transitions\nconfig.transitions = false\n-- disable commandview and scroll transitions\nconfig.disabled_transitions = {\n  commandview = true,\n  scroll = true\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["To change the animation rate, set ",(0,s.jsx)(n.code,{children:"config.animation_rate"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local config = require "core.config"\n-- slow down the animations to half speed\nconfig.animation_rate = 0.5\n'})}),"\n",(0,s.jsx)(n.h3,{id:"other-options-1",children:"Other options"}),"\n",(0,s.jsx)(n.admonition,{title:"A quick reference of other options.",type:"note",children:(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Options"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"max_log_items"})}),(0,s.jsx)(n.td,{children:"Maximum number of log items to store before discarding them."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"message_timeout"})}),(0,s.jsx)(n.td,{children:"Time (seconds) to show each message on the StatusView."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"mouse_wheel_scroll"})}),(0,s.jsx)(n.td,{children:'Number of pixels per "scroll".'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"animate_drag_scroll"})}),(0,s.jsx)(n.td,{children:"Enable smooth scrolling."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"force_scrollbar_status"})}),(0,s.jsxs)(n.td,{children:["Always expand (",(0,s.jsx)(n.code,{children:'"expanded"'}),") or hide (",(0,s.jsx)(n.code,{children:'"contracted"'}),") the scrollbar."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"file_size_limit"})}),(0,s.jsx)(n.td,{children:"File size limit (MB) before Pragtical refuses to load it."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"symbol_pattern"})}),(0,s.jsx)(n.td,{children:"Lua pattern used by Pragtical to find symbols."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"non_word_chars"})}),(0,s.jsx)(n.td,{children:"A pattern used to find non-word characters."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undo_merge_timeout"})}),(0,s.jsx)(n.td,{children:"Time (seconds) before Pragtical merges edits to form a single undo step."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"max_undos"})}),(0,s.jsx)(n.td,{children:"Number of undo to store per document."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"max_tabs"})}),(0,s.jsx)(n.td,{children:"Number of tabs to show before overflowing."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"always_show_tabs"})}),(0,s.jsx)(n.td,{children:"If true, always show tabs even if only one file is open."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"highlight_current_line"})}),(0,s.jsx)(n.td,{children:"Highlights the current line."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"line_height"})}),(0,s.jsx)(n.td,{children:"The spacing between each line."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"keep_newline_whitespace"})}),(0,s.jsx)(n.td,{children:"If true, removes any line that only contains whitespace (space, tabs, etc.)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"line_limit"})}),(0,s.jsxs)(n.td,{children:["An ",(0,s.jsx)(n.strong,{children:"advisory"})," limit for characters per line."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"tab_close_button"})}),(0,s.jsx)(n.td,{children:"Shows or hides the tab close button for each tab."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"max_clicks"})}),(0,s.jsx)(n.td,{children:"Maximum number of clicks you can perform in the editor."})]})]})]})}),"\n",(0,s.jsx)(n.h2,{id:"plugins",children:"Plugins"}),"\n",(0,s.jsxs)(n.p,{children:["Since the user and project module loads before any plugins, you can configure\nor disable any plugins in the user and project modules.\nPlugins obtain their configuration from a table in the ",(0,s.jsx)(n.code,{children:"config.plugins"})," table.\nYou can add code to user module that modifies the table."]}),"\n",(0,s.jsxs)(n.p,{children:["To disable a plugin, you need to set the associated ",(0,s.jsx)(n.code,{children:"config.plugins"})," entry\nto ",(0,s.jsx)(n.code,{children:"false"}),".\nThis tells Pragtical to not load the plugin on startup.\nIt will not load nor unload the plugin from the current instance."]}),"\n",(0,s.jsx)(n.admonition,{title:"Some plugins may have options to enable/disable themselves.",type:"note",children:(0,s.jsx)(n.p,{children:"This allows the plugins to be loaded and toggled without a restart."})}),"\n",(0,s.jsxs)(i.Z,{groupId:"configuration",children:[(0,s.jsxs)(r.Z,{value:"user-module",label:"User Module",default:!0,children:[(0,s.jsxs)(n.p,{children:["In this example, we'll enable the ",(0,s.jsx)(n.code,{children:"drawwhitespace"})," plugin\nand set it to only draw whitespaces in the selected text."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local config = require "core.config"\nconfig.plugins.drawwhitespace = {\n  show_selected_only = true\n}\n'})}),(0,s.jsxs)(n.p,{children:["To disable the plugin, simply assign ",(0,s.jsx)(n.code,{children:"config.plugins.drawwhitespace"})," to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local config = require "core.config"\nconfig.plugins.drawwhitespace = false\n'})})]}),(0,s.jsxs)(r.Z,{value:"settings-ui",label:"Settings UI",children:[(0,s.jsx)(n.p,{children:'Navigate to the "Plugins" tab.'}),(0,s.jsx)(n.p,{children:'In this tab, you will find many sections dedicated to each plugin,\nas well as an "Installed" section where you can enable/disable the plugins.'}),(0,s.jsxs)(n.p,{children:["To enable the ",(0,s.jsx)(n.code,{children:"drawwhitespace"}),' plugin, expand the "Installed" section\nand enable the corresponding plugin.']}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/img/user-guide/settings/plugins/installed.png",alt:"The Installed section"})}),(0,s.jsxs)(n.p,{children:["To modify the configuration for a plugin, expand the relevant section.\nThe changes will apply automatically.\n",(0,s.jsx)(n.img,{src:"/img/user-guide/settings/plugins/options.png",alt:"Settings for drawwhitespace"})]})]})]})]})}function g(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>r});t(7294);var s=t(512);const o={tabItem:"tabItem_Ymn6"};var i=t(5893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)(o.tabItem,r),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var s=t(7294),o=t(512),i=t(2466),r=t(6550),l=t(469),a=t(1980),c=t(7392),d=t(12);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:o}}=e;return{value:n,label:t,attributes:s,default:o}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const o=(0,r.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a._X)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(o.location.search);n.set(i,e),o.replace({...o.location,search:n.toString()})}),[i,o])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,i=u(e),[r,a]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[c,h]=p({queryString:t,groupId:o}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,i]=(0,d.Nk)(t);return[o,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:o}),x=(()=>{const e=c??f;return g({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{x&&a(x)}),[x]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=t(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(5893);function b(e){let{className:n,block:t,selectedValue:s,selectValue:r,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=a.indexOf(n),o=l[t].value;o!==s&&(c(n),r(o))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>a.push(e),onKeyDown:h,onClick:d,...i,className:(0,o.Z)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:o}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function v(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,o.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(b,{...e,...n}),(0,j.jsx)(y,{...e,...n})]})}function w(e){const n=(0,m.Z)();return(0,j.jsx)(v,{...e,children:h(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var s=t(7294);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);