"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[836],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),h=a,f=p["".concat(u,".").concat(h)]||p[h]||d[h]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5392:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={},u="FAQ",s={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"FAQ",description:"Configuration",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/faq",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Extras",permalink:"/Extras"},next:{title:"Support & Debugging",permalink:"/support-debugging"}},c=[{value:"Configuration",id:"configuration",children:[{value:"How to change theme of NvChad?",id:"how-to-change-theme-of-nvchad",children:[]},{value:"My icons aren&#39;t working, what should I do?",id:"my-icons-arent-working-what-should-i-do",children:[]},{value:"NvChad is not working, I have nvim installed",id:"nvchad-is-not-working-i-have-nvim-installed",children:[]},{value:"How can I add external plugin in NvChad?",id:"how-can-i-add-external-plugin-in-nvchad",children:[]}]},{value:"General",id:"general",children:[{value:"Would lots of plugins in nvchad make it slow?",id:"would-lots-of-plugins-in-nvchad-make-it-slow",children:[]}]}],d={toc:c};function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"how-to-change-theme-of-nvchad"},"How to change theme of NvChad?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Press ",(0,o.kt)("inlineCode",{parentName:"li"},"<leader>"),"(which is space by default) + th, then select your theme and press enter, restart nvim and done \ud83d\udc4d\ud83c\udffb")),(0,o.kt)("h3",{id:"my-icons-arent-working-what-should-i-do"},"My icons aren't working, what should I do?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It's probably because you aren't using correct font, download and install any font from ",(0,o.kt)("a",{parentName:"li",href:"https://www.nerdfonts.com/font-downloads"},"Nerd Fonts")," and set that font to your terminal and your icons will work fine \ud83d\udc4d\ud83c\udffb")),(0,o.kt)("h3",{id:"nvchad-is-not-working-i-have-nvim-installed"},"NvChad is not working, I have nvim installed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make sure you have Nvim 0.5.1+ version")),(0,o.kt)("h3",{id:"how-can-i-add-external-plugin-in-nvchad"},"How can I add external plugin in NvChad?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"config/Custom%20config#add-new-plugins"},"Docs"))),(0,o.kt)("h2",{id:"general"},"General"),(0,o.kt)("h3",{id:"would-lots-of-plugins-in-nvchad-make-it-slow"},"Would lots of plugins in nvchad make it slow?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"NvChad has like 30 ~ plugins but that doesn't mean those plugins are compromising neovim's speed, snappiness, or making it slow. No matter how many plugins I'd add on NvChad, it wouldn't compromise speed/snappiness/make it slow or whatever since it uses packer.nvim as plugin manager. packer.nvim lets you lazy load plugins i.e. loading plugins on certain events, mappings, sequentially loading them, etc, thus loading them only when needed. I have lazy loaded all the plugins so most plugins aren't loaded by default, hence not affecting neovim's startup/launch time.")))}p.isMDXComponent=!0}}]);