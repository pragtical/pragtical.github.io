"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1642],{1044:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var i=t(5893),r=t(1151);const s={sidebar_position:1,description:"Learn about basic operations in Pragtical."},o="Introduction",c={id:"user-guide/introduction",title:"Introduction",description:"Learn about basic operations in Pragtical.",source:"@site/docs/user-guide/introduction.md",sourceDirName:"user-guide",slug:"/user-guide/introduction",permalink:"/docs/user-guide/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/pragtical/pragtical.github.io/edit/main/docs/user-guide/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Learn about basic operations in Pragtical."},sidebar:"tutorialSidebar",previous:{title:"User Guide",permalink:"/docs/category/user-guide"},next:{title:"Configuration",permalink:"/docs/user-guide/configuration"}},d={},a=[{value:"Opening files",id:"opening-files",level:2},{value:"Commands",id:"commands",level:2},{value:"Keyboard shortcuts",id:"keyboard-shortcuts",level:2},{value:"Multiple selections (multiple cursors)",id:"multiple-selections-multiple-cursors",level:2},{value:"Find and replace",id:"find-and-replace",level:2},{value:"Project search",id:"project-search",level:2},{value:"Line endings",id:"line-endings",level:2},{value:"Indentation",id:"indentation",level:2},{value:"Projects",id:"projects",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.h2,{id:"opening-files",children:"Opening files"}),"\n",(0,i.jsx)(n.p,{children:"Pragtical comes with a file browser by default.\nYou can open, rename, move and delete files with it.\nRight-clicking on a file or folder will show more options."}),"\n",(0,i.jsxs)(n.p,{children:["Other than that, you can also open files with ",(0,i.jsx)("kbd",{children:"ctrl+p"}),".\nThis opens a fuzzy finder with a list of project files."]}),"\n",(0,i.jsx)("video",{autoplay:!0,muted:!0,loop:!0,style:{width:"100%"},controls:!0,children:(0,i.jsx)("source",{src:"/videos/user-guide/opening-files.mp4"})}),"\n",(0,i.jsx)(n.h2,{id:"commands",children:"Commands"}),"\n",(0,i.jsxs)(n.p,{children:["Most of Pragtical's functionalities are implemented as commands and\nexposed by the command palette.\nThe command palette is bound to ",(0,i.jsx)("kbd",{children:"ctrl+shift+p"})," by default and is\nused to enter commands and execute them."]}),"\n",(0,i.jsxs)(n.p,{children:["The command palette supports fuzzy matching, so you don't need to enter\nthe full name of the command. For instance, to create a new file, you can\ntype ",(0,i.jsx)(n.code,{children:"new doc"})," and the correct command ",(0,i.jsx)(n.code,{children:"Core: New Doc"})," will show up as\nthe first choice. You can press ",(0,i.jsx)("kbd",{children:"up"})," or ",(0,i.jsx)("kbd",{children:"down"})," to select other commands.\nIf a command is bound to a key shortcut, it will be shown on the right."]}),"\n",(0,i.jsx)("video",{autoplay:!0,muted:!0,loop:!0,style:{width:"100%"},controls:!0,children:(0,i.jsx)("source",{src:"/videos/user-guide/command-palette.mp4"})}),"\n",(0,i.jsx)(n.h2,{id:"keyboard-shortcuts",children:"Keyboard shortcuts"}),"\n",(0,i.jsxs)(n.p,{children:["All keyboard shortcuts are handled by the ",(0,i.jsx)(n.code,{children:"core.keymap"}),' module.\nA key binding maps a "stroke" (e.g. ',(0,i.jsx)("kbd",{children:"ctrl+q"}),") to one or more commands\n(e.g. ",(0,i.jsx)(n.code,{children:"core:quit"}),").\nWhen the shortcut is pressed Pragtical will iterate each command\nassigned to that key and run the ",(0,i.jsx)(n.em,{children:"predicate function"})," for that command \u2014 if the\npredicate passes it stops iterating and runs the command."]}),"\n",(0,i.jsx)(n.p,{children:"A new mapping can be added by your user module as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'local keymap = require "core.keymap"\nkeymap.add { ["ctrl+q"] = "core:quit" }\n'})}),"\n",(0,i.jsxs)(n.p,{children:["A list of default mappings can be viewed ",(0,i.jsx)(n.a,{href:"/img/user-guide/find.png",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"multiple-selections-multiple-cursors",children:"Multiple selections (multiple cursors)"}),"\n",(0,i.jsxs)(n.p,{children:["Pragtical supports multiple cursors to edit multiple lines at once.\nYou insert more cursors by ",(0,i.jsx)("kbd",{children:"ctrl+left-button"}),".\nTo insert cursors upwards or downwards, use ",(0,i.jsx)("kbd",{children:"ctrl+shift+up"}),"\nor ",(0,i.jsx)("kbd",{children:"ctrl+shift+down"}),"."]}),"\n",(0,i.jsx)("video",{autoplay:!0,muted:!0,loop:!0,style:{width:"100%"},controls:!0,children:(0,i.jsx)("source",{src:"/videos/user-guide/multi-cursor.mp4"})}),"\n",(0,i.jsx)(n.h2,{id:"find-and-replace",children:"Find and replace"}),"\n",(0,i.jsxs)(n.p,{children:["To find a certain word, you can use ",(0,i.jsx)("kbd",{children:"ctrl+f"}),".\nThis will open a prompt where you can find text in the document.\nAfter entering the text, you can press enter to find the first\nmatch.\nThe matched text will be selected.\nTo find the next match, press ",(0,i.jsx)("kbd",{children:"f3"})]}),"\n",(0,i.jsxs)(n.p,{children:["By default, Pragtical uses case-insensitive search.\nInput such as ",(0,i.jsx)(n.code,{children:"Test"})," will match either ",(0,i.jsx)(n.code,{children:"Test"})," or ",(0,i.jsx)(n.code,{children:"test"}),".\nTo toggle case-sensitive search, press ",(0,i.jsx)("kbd",{children:"ctrl+i"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Pragtical also supports searching with regular expressions.\nThis feature can be enabled by pressing ",(0,i.jsx)("kbd",{children:"ctrl+shift+i"}),".\nThis mode can be used in conjunction with case-sensitive search."]}),"\n",(0,i.jsxs)(n.p,{children:["To find and replace text, press ",(0,i.jsx)("kbd",{children:"ctrl+r"}),".\nPragtical will prompt you for text to replace and the replacement\ntext. Afterwards, it will replace all occurrences of the text."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/img/user-guide/find.png",alt:"The find text prompt"})}),"\n",(0,i.jsx)(n.h2,{id:"project-search",children:"Project search"}),"\n",(0,i.jsxs)(n.p,{children:["Finding text across multiple files can be useful.\nTo do this in Pragtical, press ",(0,i.jsx)("kbd",{children:"ctrl+shift+f"}),".\nYou can then enter the text to find and press enter.\nPragtical will open a new tab to display all the search results.\nTo open the file containing the match, you can click the entries."]}),"\n",(0,i.jsxs)(n.p,{children:["Project search also supports case-sensitive search and\nregular expressions with the same keyboard shortcuts.\n",(0,i.jsx)(n.code,{children:"project-search:fuzzy-find"})," allows you to search the project\nfor similar words."]}),"\n",(0,i.jsx)(n.p,{children:"Pragtical does not support find and replace text across a project."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/img/user-guide/project-search.png",alt:"Project search result tab"})}),"\n",(0,i.jsx)(n.h2,{id:"line-endings",children:"Line endings"}),"\n",(0,i.jsxs)(n.p,{children:["Some application may require a specific type of line ending.\nTo change the line ending of a file, you can use the command\n",(0,i.jsx)(n.code,{children:"doc:toggle-line-ending"})," or press the rightmost entry on\nthe StatusView.\nThis should toggle between LF and CRLF which corresponds to\nUnix and Windows style line endings."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/img/user-guide/line-endings.png",alt:"Button to change line endings"})}),"\n",(0,i.jsx)(n.h2,{id:"indentation",children:"Indentation"}),"\n",(0,i.jsxs)(n.p,{children:["Pragtical should automatically detect the indentation\nof the current file and apply it when pressing ",(0,i.jsx)("kbd",{children:"tab"}),".\nHowever, you can change the indentation size by left-clicking\nthe 4th entry on the right of the StatusView.\nYou can also change the type of the indentation by right-clicking\nthe entry.\nThe settings will not apply to existing text."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/img/user-guide/indent.png",alt:"Changing the indentation of the file"})}),"\n",(0,i.jsx)(n.h2,{id:"projects",children:"Projects"}),"\n",(0,i.jsx)(n.p,{children:"Pragtical centers around the concept of projects \u2014 a project contains your code\nand project-specific configuration.\nA project contains at least one project directory.\nProject directories are where your code is stored."}),"\n",(0,i.jsxs)(n.p,{children:["To use open a directory as a project, the directory name can be passed\nas a command-line argument or the directory can be dragged onto\neither the executable or a running instance.\nOnce loaded, the project can be changed using the command\n",(0,i.jsx)(n.code,{children:"core:change-project-folder"}),".\nThe command will close all the documents currently opened\nand switch to the new project.\nIf you want to open a project in a new window,\nthe command ",(0,i.jsx)(n.code,{children:"core:open-project-folder"})," will open a new editor window\nwith the selected project."]}),"\n",(0,i.jsxs)(n.p,{children:["Projects may contain multiple directories.\nTo add a directory to the current project,\nyou can use the command ",(0,i.jsx)(n.code,{children:"core:add-directory"}),".\nOnce the directory is added to the project, you can browse its file on the\nfile browser and fuzzy finder."]}),"\n",(0,i.jsx)(n.p,{children:"Pragtical will automatically save opened files and directories and restore them\nwhen you restart the editor."})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var i=t(7294);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);