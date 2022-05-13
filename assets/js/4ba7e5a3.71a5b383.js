"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[735],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,h=p["".concat(m,".").concat(d)]||p[d]||c[d]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5380:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"contribute",title:"Contribute"},m=void 0,s={unversionedId:"contribute",id:"contribute",title:"Contribute",description:"NvChad install for contributors",source:"@site/docs/contribute.md",sourceDirName:".",slug:"/contribute",permalink:"/contribute",tags:[],version:"current",frontMatter:{id:"contribute",title:"Contribute"},sidebar:"docs",previous:{title:"Support & Debugging",permalink:"/support-debugging"},next:{title:"Acknowledgements",permalink:"/acknowledgements"}},u={},c=[{value:"NvChad install for contributors",id:"nvchad-install-for-contributors",level:2},{value:"Things to know before contributing",id:"things-to-know-before-contributing",level:2},{value:"Format your PR with stylua",id:"format-your-pr-with-stylua",level:2},{value:"How to remove or edit commits from your PR",id:"how-to-remove-or-edit-commits-from-your-pr",level:2}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"nvchad-install-for-contributors"},"NvChad install for contributors"),(0,o.kt)("p",null,"If you wish to contribute to NvChad, you should:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo"},"Create a fork on GitHub")),(0,o.kt)("li",{parentName:"ol"},"Clone your fork to your machine")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For ssh:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone git@github.com:<YOUR GITHUB USERNAME>/NvChad.git ~/.config/nvim\n"))),(0,o.kt)("li",{parentName:"ul"},"For https:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/<YOUR GITHUB USERNAME>/NvChad.git ~/.config/nvim\n")))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.atlassian.com/git/tutorials/git-forks-and-upstreams"},"Add a new remote repo to track"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This means you can push/pull as normal to your own repo, but also easily track & update from the NvChad repo"),(0,o.kt)("li",{parentName:"ul"},"For ssh:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git remote add upstream git@github.com:NvChad/NvChad.git\n"))),(0,o.kt)("li",{parentName:"ul"},"For https:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git remote add upstream https://github.com/NvChad/NvChad.git\n"))))),(0,o.kt)("li",{parentName:"ol"},"Any time you create a branch to do some work, use ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git fetch upstream && git checkout -b dev-myFEAT upstream/main\n"))),(0,o.kt)("li",{parentName:"ol"},"Only use the ",(0,o.kt)("strong",{parentName:"li"},"--rebase")," flag to update your dev branch",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This means that there are no ",(0,o.kt)("inlineCode",{parentName:"li"},"Merge NvChad/main into devBranch")," commits, which are to be avoided")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git pull upstream --rebase\n")))),(0,o.kt)("h2",{id:"things-to-know-before-contributing"},"Things to know before contributing"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When making a PR (pull request), please be very descriptive about what you've done!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We are open to all PRs, but may decline some for a myriad of reasons. Though don't be discouraged! We'll still be open to discussions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"PR's are always welcomed however NvChad aims to be less bloated. So PR's regarding existing plugin's enhancement and creating new features with existing plugins itself (without adding a new plugin), bug fixes and corrections are more encouraged.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"NvChad won't keep adding more and more features (like adding new plugins) as requested if they feel unneeded and aren't usable by the majority!! If you think the plugin you want to be added is very useful and many NvChaders would find it useful, then such feature's PR is welcomed!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"But adding specific features like adding config for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wakatime/vim-wakatime"},"wakatime")," etc will be added in this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/NvChad/NvChad/wiki/Chad-user-configs"},"chad user configs"),". This lets the user select the things only they want (adding configs from extra configs)."))),(0,o.kt)("h2",{id:"format-your-pr-with-stylua"},"Format your PR with stylua"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/NvChad/NvChad/blob/main/.stylua.toml"},"stylua config"))),(0,o.kt)("h2",{id:"how-to-remove-or-edit-commits-from-your-pr"},"How to remove or edit commits from your PR"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You may have been directed here to remove a commit such as a merge commit: ",(0,o.kt)("inlineCode",{parentName:"p"},"Merge NvChad/main into devBranch")," from your PR")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"As these commands edit your git history, you may need to ",(0,o.kt)("strong",{parentName:"p"},"force push")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"git push origin --force"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the following:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ git rebase -i HEAD~<NUMBER OF COMMITS TO GO BACK>\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example"),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git rebase -i HEAD~4\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pick 28b2dcb statusline add lsp status\npick dad9a39 feat: Added lsp radial progress\npick 68f72f1 add clickable btn for exiting nvim\npick b281b53 avoid using q! for quitting vim\n\n# Rebase 52b655b..b281b53 onto 52b655b (4 commands)\n#\n# Commands:\n# p, pick <commit> = use commit\n# r, reword <commit> = use commit, but edit the commit message\n# e, edit <commit> = use commit, but stop for amending\n# s, squash <commit> = use commit, but meld into previous commit\n# f, fixup <commit> = like \"squash\", but discard this commit's log message\n# x, exec <command> = run command (the rest of the line) using shell\n# b, break = stop here (continue rebase later with 'git rebase --continue')\n# d, drop <commit> = remove commit\n# l, label <label> = label current HEAD with a name\n# t, reset <label> = reset HEAD to a label\n# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]\n# .       create a merge commit using the original merge commit's\n# .       message (or the oneline, if no original merge commit was\n# .       specified). Use -c <commit> to reword the commit message.\n#\n# These lines can be re-ordered; they are executed from top to bottom.\n#\n# If you remove a line here THAT COMMIT WILL BE LOST.\n#\n# However, if you remove everything, the rebase will be aborted.\n#\n# Note that empty commits are commented out\n"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change the ",(0,o.kt)("inlineCode",{parentName:"p"},"pick")," commands to whatever you wish, you may wish to ",(0,o.kt)("inlineCode",{parentName:"p"},"d")," ",(0,o.kt)("inlineCode",{parentName:"p"},"drop")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"e")," ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," a commit. Then save & quit this git file to run it."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example"),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"{3,4}","{3,4}":!0},"pick 28b2dcb statusline add lsp status\npick dad9a39 feat: Added lsp radial progress\nedit 68f72f1 add clickable btn for exiting nvim\nd b281b53 avoid using q! for quitting vim\n\n# Rebase 52b655b..b281b53 onto 52b655b (4 commands)\n#\n# Commands:\n# p, pick <commit> = use commit\n# r, reword <commit> = use commit, but edit the commit message\n# e, edit <commit> = use commit, but stop for amending\n# s, squash <commit> = use commit, but meld into previous commit\n# f, fixup <commit> = like \"squash\", but discard this commit's log message\n# x, exec <command> = run command (the rest of the line) using shell\n# b, break = stop here (continue rebase later with 'git rebase --continue')\n# d, drop <commit> = remove commit\n# l, label <label> = label current HEAD with a name\n# t, reset <label> = reset HEAD to a label\n# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]\n# .       create a merge commit using the original merge commit's\n# .       message (or the oneline, if no original merge commit was\n# .       specified). Use -c <commit> to reword the commit message.\n#\n# These lines can be re-ordered; they are executed from top to bottom.\n#\n# If you remove a line here THAT COMMIT WILL BE LOST.\n#\n# However, if you remove everything, the rebase will be aborted.\n#\n# Note that empty commits are commented out\n"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you picked ",(0,o.kt)("inlineCode",{parentName:"p"},"drop")," you are done, if you picked ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," then edit your files, then run:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git add <files>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once you have edited & added your files, run:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git rebase --continue\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You will likely need to push using:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git push origin --force\n")))))}d.isMDXComponent=!0}}]);