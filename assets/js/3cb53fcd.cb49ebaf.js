"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3038],{2648:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(5893),n=t(1151),i=t(4866),l=t(5162);const s={sidebar_position:3,description:"Linux-specific instructions for setting up Pragtical."},o="Linux",c={id:"setup/linux",title:"Linux",description:"Linux-specific instructions for setting up Pragtical.",source:"@site/docs/setup/linux.md",sourceDirName:"setup",slug:"/setup/linux",permalink:"/docs/setup/linux",draft:!1,unlisted:!1,editUrl:"https://github.com/pragtical/pragtical.github.io/tree/main/docs/setup/linux.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Linux-specific instructions for setting up Pragtical."},sidebar:"tutorialSidebar",previous:{title:"Windows",permalink:"/docs/setup/windows"},next:{title:"macOS",permalink:"/docs/setup/macos"}},u={},d=[{value:"Install",id:"install",level:2},{value:"Install via package managers",id:"install-via-package-managers",level:2},{value:"Arch Linux (via AUR)",id:"arch-linux-via-aur",level:3},{value:"Fedora",id:"fedora",level:3},{value:"32-bit support",id:"32-bit-support",level:2},{value:"Portable packages",id:"portable-packages",level:2},{value:"Client-side decorations",id:"client-side-decorations",level:2}];function p(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"linux",children:"Linux"}),"\n",(0,r.jsx)(a.h2,{id:"install",children:"Install"}),"\n",(0,r.jsxs)(a.p,{children:["The easiest way to run Pragtical on Linux is to download and run the ",(0,r.jsx)(a.a,{href:"https://github.com/pragtical/pragtical/releases/download/rolling/Pragtical-rolling-x86_64.AppImage",children:"Pragtical AppImage"}),".\nMost recent Linux systems supports AppImage, but you may need to install ",(0,r.jsx)(a.code,{children:"fuse"}),"."]}),"\n",(0,r.jsxs)(a.p,{children:['Alternatively, we provide a "portable" ',(0,r.jsxs)(a.a,{href:"https://github.com/pragtical/pragtical/releases/download/rolling/pragtical-rolling-linux-x86_64-portable.tar.gz",children:[(0,r.jsx)(a.code,{children:"tar.gz"})," archive"]})," that can be\ndownloaded and extracted to a directory."]}),"\n",(0,r.jsx)(a.h2,{id:"install-via-package-managers",children:"Install via package managers"}),"\n",(0,r.jsxs)(a.p,{children:["Pragtical is available on some package managers.\nA complete list is available at ",(0,r.jsx)(a.a,{href:"https://repology.org/project/pragtical/versions",children:"Repology"}),"."]}),"\n",(0,r.jsx)(a.admonition,{title:"These packages are maintained by the community.",type:"note"}),"\n",(0,r.jsx)(a.h3,{id:"arch-linux-via-aur",children:"Arch Linux (via AUR)"}),"\n",(0,r.jsxs)(a.p,{children:["Packages for Arch Linux are available as 3 AUR repositories: ",(0,r.jsx)(a.a,{href:"https://aur.archlinux.org/packages/pragtical",children:(0,r.jsx)(a.code,{children:"pragtical"})})," and ",(0,r.jsx)(a.a,{href:"https://aur.archlinux.org/packages/pragtical-git",children:(0,r.jsx)(a.code,{children:"pragtical-git"})}),"."]}),"\n",(0,r.jsxs)(a.p,{children:["To install, you can clone the ",(0,r.jsx)(a.a,{href:"https://aur.archlinux.org/pragtical.git",children:"git repository"})," to a working directory and run ",(0,r.jsx)(a.code,{children:"makepkg"}),":"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"git clone https://aur.archlinux.org/pragtical.git\ncd pragtical\nmakepkg -si\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Alternatively, install it via an AUR helper such as ",(0,r.jsx)(a.a,{href:"https://github.com/Jguer/yay",children:"yay"}),"."]}),"\n",(0,r.jsx)(a.h3,{id:"fedora",children:"Fedora"}),"\n",(0,r.jsxs)(a.p,{children:["Pragtical stable and nightly releases can be installed on Fedora using Copr.\nTo install it, enable the ",(0,r.jsxs)(a.a,{href:"https://copr.fedorainfracloud.org/coprs/sentry/pragtical/",children:[(0,r.jsx)(a.code,{children:"sentry/pragtical"})," Copr"]})," and install the appropriate\npackage, for example:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"dnf copr enable sentry/pragtical\ndnf install pragtical-nightly\n"})}),"\n",(0,r.jsx)(a.h2,{id:"32-bit-support",children:"32-bit support"}),"\n",(0,r.jsx)(a.p,{children:"Unfortunately, Pragtical does not provide binary packages for 32-bit systems.\nYou may want to compile Pragtical yourself."}),"\n",(0,r.jsx)(a.admonition,{title:"32-bit version of Pragtical is not actively tested for bugs.",type:"caution",children:(0,r.jsx)(a.p,{children:"Due to a lack of testers, we've only been able to test whether the code can\ncompile on a 32-bit system. This does not mean that Pragtical may run correctly."})}),"\n",(0,r.jsx)(a.h2,{id:"portable-packages",children:"Portable packages"}),"\n",(0,r.jsx)(a.p,{children:"Since v2.1.0, only portable packages are provided.\nThese packages do not follow the UNIX Filesystem Hierarchy Standard (FHS)."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"pragtical/\n  \\- data/\n  \\- doc/\n  \\- pragtical\n"})}),"\n",(0,r.jsx)(a.p,{children:"To install the portable package according to the FHS, do the following:"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsxs)(a.li,{children:["Move ",(0,r.jsx)(a.code,{children:"data/"})," to ",(0,r.jsx)(a.code,{children:"/usr/share/pragtical"}),"."]}),"\n",(0,r.jsxs)(a.li,{children:["Move ",(0,r.jsx)(a.code,{children:"doc/"})," to ",(0,r.jsx)(a.code,{children:"/usr/share/doc/pragtical"})]}),"\n",(0,r.jsxs)(a.li,{children:["Move ",(0,r.jsx)(a.code,{children:"pragtical"})," to ",(0,r.jsx)(a.code,{children:"/usr/bin/pragtical"})]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"client-side-decorations",children:"Client-side decorations"}),"\n",(0,r.jsxs)(a.p,{children:["Certain Wayland desktops does not provide server-side decorations.\nBy default, Pragtical (SDL under the hood) will use ",(0,r.jsx)(a.code,{children:"libdecor"})," to draw client-side decorations."]}),"\n",(0,r.jsxs)(a.p,{children:["To work around this, set ",(0,r.jsx)(a.code,{children:"config.borderless"})," to ",(0,r.jsx)(a.code,{children:"true"}),".\nPragtical will draw a client-side decoration."]}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(l.Z,{value:"user-module",label:"User Module",default:!0,children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-lua",children:'local config = require "core.config"\nconfig.borderless = true\n'})})}),(0,r.jsx)(l.Z,{value:"settings-ui",label:"Settings UI",children:(0,r.jsxs)(a.p,{children:['Toggle the "Borderless" checkbox under ',(0,r.jsx)(a.em,{children:"Core"})," > ",(0,r.jsx)(a.em,{children:"User Interface"}),".\n",(0,r.jsx)(a.img,{src:"/img/user-guide/settings/borderless.png",alt:"screenshot indicating the borderless checkbox"})]})})]})]})}function h(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},5162:(e,a,t)=>{t.d(a,{Z:()=>l});t(7294);var r=t(512);const n={tabItem:"tabItem_Ymn6"};var i=t(5893);function l(e){let{children:a,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(n.tabItem,l),hidden:t,children:a})}},4866:(e,a,t)=>{t.d(a,{Z:()=>k});var r=t(7294),n=t(512),i=t(2466),l=t(6550),s=t(469),o=t(1980),c=t(7392),u=t(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:n}}=e;return{value:a,label:t,attributes:r,default:n}}))}(t);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function h(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function g(e){let{queryString:a=!1,groupId:t}=e;const n=(0,l.k6)(),i=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(n.location.search);a.set(i,e),n.replace({...n.location,search:a.toString()})}),[i,n])]}function x(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,i=p(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:i}))),[c,d]=g({queryString:t,groupId:n}),[x,b]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,i]=(0,u.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:n}),m=(()=>{const e=c??x;return h({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{m&&o(m)}),[m]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=t(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(5893);function v(e){let{className:a,block:t,selectedValue:r,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const a=e.currentTarget,t=o.indexOf(a),n=s[t].value;n!==r&&(c(a),l(n))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;a=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;a=o[t]??o[o.length-1];break}}a?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":t},a),children:s.map((e=>{let{value:a,label:t,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:e=>o.push(e),onKeyDown:d,onClick:u,...i,className:(0,n.Z)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":r===a}),children:t??a},a)}))})}function j(e){let{lazy:a,children:t,selectedValue:n}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n})))})}function y(e){const a=x(e);return(0,f.jsxs)("div",{className:(0,n.Z)("tabs-container",m.tabList),children:[(0,f.jsx)(v,{...e,...a}),(0,f.jsx)(j,{...e,...a})]})}function k(e){const a=(0,b.Z)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(a))}},1151:(e,a,t)=>{t.d(a,{Z:()=>s,a:()=>l});var r=t(7294);const n={},i=r.createContext(n);function l(e){const a=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);