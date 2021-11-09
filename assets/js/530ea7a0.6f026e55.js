"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[459],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},5711:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return v},metadata:function(){return N},toc:function(){return b}});var a=n(7462),i=n(3366),r=n(7294),l=n(3905),o=n(9443);var s=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(6010),p="tabItem_vU9c",c="tabItemActive_cw6a";var m=37,d=39;var h=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,i=e.values,l=e.groupId,o=e.className,h=s(),g=h.tabGroupChoices,k=h.setTabGroupChoices,v=(0,r.useState)(a),f=v[0],N=v[1],b=r.Children.toArray(e.children),y=[];if(null!=l){var w=g[l];null!=w&&w!==f&&i.some((function(e){return e.value===w}))&&N(w)}var C=function(e){var t=e.currentTarget,n=y.indexOf(t),a=i[n].value;N(a),null!=l&&(k(l,a),setTimeout((function(){var e,n,a,i,r,l,o,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,l=window,o=l.innerHeight,s=l.innerWidth,n>=0&&r<=s&&i<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case d:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case m:var i=y.indexOf(e.target)-1;n=y[i]||y[y.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":n},o)},i.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,u.Z)("tabs__item",p,{"tabs__item--active":f===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:O,onFocus:C,onClick:C},n)}))),t?(0,r.cloneElement)(b.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))};var g=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},k=["components"],v={id:"setup",title:"Setup",sidebar_position:1},f=void 0,N={unversionedId:"getting-started/setup",id:"getting-started/setup",isDocsHomePage:!1,title:"Setup",description:"Pre-requisites",source:"@site/docs/getting-started/setup.md",sourceDirName:"getting-started",slug:"/getting-started/setup",permalink:"/getting-started/setup",version:"current",sidebarPosition:1,frontMatter:{id:"setup",title:"Setup",sidebar_position:1},sidebar:"docs",next:{title:"Post Install",permalink:"/getting-started/post-install"}},b=[{value:"Pre-requisites",id:"pre-requisites",children:[{value:"NeoVim installation options",id:"neovim-installation-options",children:[]},{value:"Semi-optional dependencies",id:"semi-optional-dependencies",children:[]}]},{value:"Install",id:"install",children:[{value:"Linux &amp; MacOS:",id:"linux--macos",children:[]},{value:"Windows",id:"windows",children:[]}]},{value:"Update",id:"update",children:[]},{value:"Uninstall",id:"uninstall",children:[]}],y={toc:b};function w(e){var t=e.components,n=(0,i.Z)(e,k);return(0,l.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/neovim/neovim/wiki/Installing-Neovim"},"Neovim 0.5.1+ install page"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Some NeoVim installation options"),(0,l.kt)("div",null,(0,l.kt)("h3",{id:"neovim-installation-options"},"NeoVim installation options"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: This is a summary of ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/neovim/neovim/wiki/Installing-Neovim"},"NeoVim's installation page"))),(0,l.kt)("h4",{id:"with-an-appimage"},(0,l.kt)("a",{parentName:"h4",href:"https://github.com/neovim/neovim/wiki/Installing-Neovim#appimage-universal-linux-package"},"With an appimage")),(0,l.kt)("p",null,"This should work across all Linux distros."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim.appimage\nchmod u+x nvim.appimage\n./nvim.appimage\n")),(0,l.kt)("p",null,"Then consider moving this to your local/user bin & adding an alias to this"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mv ./nvim.appimage ~/.local/bin/\necho \"alias vim='/home/<YOUR USERNAME>/.local/bin/nvim.appimage'\" >>~/.<bashrc or zshrc>\n")),(0,l.kt)("h4",{id:"using-pacman-on-arch"},(0,l.kt)("a",{parentName:"h4",href:"https://github.com/neovim/neovim/wiki/Installing-Neovim#arch-linux"},"Using PACMAN on Arch")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo pacman -S neovim\n")),(0,l.kt)("h4",{id:"using-apt-on-ubuntu"},(0,l.kt)("a",{parentName:"h4",href:"https://github.com/neovim/neovim/wiki/Installing-Neovim#ubuntu"},"Using APT on Ubuntu")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: This doesn't work with Debian")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo add-apt-repository ppa:neovim-ppa/stable\nsudo apt-get update\nsudo apt-get install neovim\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.nerdfonts.com/"},"Use a Nerd Font")," in your terminal emulator."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"git")," & other basic Linux CLI tools")),(0,l.kt)("h3",{id:"semi-optional-dependencies"},"Semi-optional dependencies"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"node")," ",(0,l.kt)("strong",{parentName:"li"},"Node.js")," is required for many Language Servers (LSPs)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/BurntSushi/ripgrep"},(0,l.kt)("inlineCode",{parentName:"a"},"ripgrep"))," is required for grep searching with ",(0,l.kt)("em",{parentName:"li"},"Telescope"))),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("p",null,"Installation is as easy as cloning the NvChad repository into your NeoVim configuration folder."),(0,l.kt)("p",null,"Next, clone the ",(0,l.kt)("inlineCode",{parentName:"p"},"NvChad")," repository to ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.config/nvim")," & install plugins with:"),(0,l.kt)(h,{defaultValue:"linux",values:[{label:"Linux & MacOS",value:"linux"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,l.kt)(g,{value:"linux",mdxType:"TabItem"},(0,l.kt)("h3",{id:"linux--macos"},"Linux & MacOS:"),(0,l.kt)("p",null,"If you already have a ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.config/nvim")," folder, make a backup with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mv ~/.config/nvim ~/.config/NVIM.BAK\n")),(0,l.kt)("p",null,"Then install NvChad & it's plugins with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/NvChad/NvChad ~/.config/nvim\nnvim +'hi NormalFloat guibg=#1e222a' +PackerSync\n"))),(0,l.kt)(g,{value:"win",mdxType:"TabItem"},(0,l.kt)("h3",{id:"windows"},"Windows"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install ",(0,l.kt)("a",{parentName:"li",href:"http://mingw-w64.org/doku.php"},(0,l.kt)("inlineCode",{parentName:"a"},"mingw"))," if you don't already have it.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"choco install mingw\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Install ",(0,l.kt)("inlineCode",{parentName:"li"},"packer"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'git clone https://github.com/wbthomason/packer.nvim "$env:LOCALAPPDATA\\nvim-data\\site\\pack\\packer\\start\\packer.nvim"\ngit clone https://github.com/NvChad/NvChad\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Go to ",(0,l.kt)("inlineCode",{parentName:"li"},"~/AppData/Local/nvim"),". Copy nvchad's ",(0,l.kt)("inlineCode",{parentName:"li"},"init.lua")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"lua")," folder into the nvim folder."),(0,l.kt)("li",{parentName:"ol"},"Then launch ",(0,l.kt)("inlineCode",{parentName:"li"},"nvim")," like so:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nvim +'hi NormalFloat guibg=#1e222a' +PackerSync\n")),(0,l.kt)("p",null,"Press enter to skip errors and let it install plugins."))),(0,l.kt)("h2",{id:"update"},"Update"),(0,l.kt)("p",null,"NvChad has an update mechanism built-in, which will pull any new updates to the git repository."),(0,l.kt)("p",null,"Activate it by running ",(0,l.kt)("inlineCode",{parentName:"p"},"<leader> + uu"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Note: by NvChad default, ",(0,l.kt)("inlineCode",{parentName:"li"},"<leader>")," is the ",(0,l.kt)("inlineCode",{parentName:"li"},"<space>")," key")),(0,l.kt)("p",null,"This will open a prompt in NeoVim warning you that it is about to do a ",(0,l.kt)("inlineCode",{parentName:"p"},"git reset --hard")," and ",(0,l.kt)("strong",{parentName:"p"},"you will lose any customisations")," you've made to NvChad that are not in designated customisation folders."),(0,l.kt)("h2",{id:"uninstall"},"Uninstall"),(0,l.kt)("p",null,"Uninstalling is as simple as removing the ",(0,l.kt)("inlineCode",{parentName:"p"},"nvim")," configuration directories."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: it's suggested to backup your config first, consider ",(0,l.kt)("inlineCode",{parentName:"p"},"mv ~/.config/nvim ~/.config/NVIM.BAK"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"rm -rf ~/.config/nvim\nrm -rf ~/.local/share/nvim\nrm -rf ~/.cache/nvim\n")))}w.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);