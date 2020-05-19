(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{186:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(1),o=r(10),i=(r(0),r(249)),l={id:"lifecycle-hooks",title:"Lifecycle Hooks"},a={id:"getting-started/lifecycle-hooks",title:"Lifecycle Hooks",description:"The codegen allow you to specify scripts it can run for you in certain events. ",source:"@site/docs/getting-started/lifecycle-hooks.md",permalink:"/docs/getting-started/lifecycle-hooks",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/getting-started/lifecycle-hooks.md",sidebar:"sidebar",previous:{title:"`require` field",permalink:"/docs/getting-started/require-field"},next:{title:"Development Workflow",permalink:"/docs/getting-started/development-workflow"}},c=[{value:"How to use?",id:"how-to-use",children:[]},{value:"Root Level",id:"root-level",children:[{value:"<code>afterStart</code>",id:"afterstart",children:[]},{value:"<code>onWatchTriggered</code>",id:"onwatchtriggered",children:[]},{value:"<code>onError</code>",id:"onerror",children:[]},{value:"<code>beforeAllFileWrite</code>",id:"beforeallfilewrite",children:[]},{value:"<code>beforeOneFileWrite</code>",id:"beforeonefilewrite",children:[]},{value:"<code>afterOneFileWrite</code>",id:"afteronefilewrite",children:[]},{value:"<code>afterAllFileWrite</code>",id:"afterallfilewrite",children:[]},{value:"<code>beforeDone</code>",id:"beforedone",children:[]}]},{value:"Output Level",id:"output-level",children:[]}],s={rightToc:c};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The codegen allow you to specify scripts it can run for you in certain events. "),Object(i.b)("p",null,"You can specify hooks on the root level, or specify hooks on the output level (only some of them)."),Object(i.b)("p",null,"Each hook has it's own arguments, and it passes it to your scripts using ",Object(i.b)("inlineCode",{parentName:"p"},"argv"),". "),Object(i.b)("h2",{id:"how-to-use"},"How to use?"),Object(i.b)("p",null,"Add your scripts to your ",Object(i.b)("inlineCode",{parentName:"p"},"codegen.yml")," file, and specify the scripts you wish to run, for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"hooks:\n  afterOneFileWrite:\n    - prettier --write\n")),Object(i.b)("p",null,"Or, for specifc output:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  ./src/types.ts:\n    hooks:\n      afterOneFileWrite:\n        - prettier --write\n    plugins:\n      - typescript\n")),Object(i.b)("h2",{id:"root-level"},"Root Level"),Object(i.b)("p",null,"The following lifecycle hooks are supported on root level:"),Object(i.b)("h3",{id:"afterstart"},Object(i.b)("inlineCode",{parentName:"h3"},"afterStart")),Object(i.b)("p",null,"Trigged with no arguments, when the codegen starts (after the ",Object(i.b)("inlineCode",{parentName:"p"},"codegen.yml")," has beed readed and parsed)."),Object(i.b)("h3",{id:"onwatchtriggered"},Object(i.b)("inlineCode",{parentName:"h3"},"onWatchTriggered")),Object(i.b)("p",null,"Triggered every time a file changes when using watch mode.\nTriggered with two arguments: the type of the event (for example, ",Object(i.b)("inlineCode",{parentName:"p"},"changed"),") and the path of the file."),Object(i.b)("h3",{id:"onerror"},Object(i.b)("inlineCode",{parentName:"h3"},"onError")),Object(i.b)("p",null,"Triggered in case of a general error in the codegen. The argument is a string containing the error."),Object(i.b)("h3",{id:"beforeallfilewrite"},Object(i.b)("inlineCode",{parentName:"h3"},"beforeAllFileWrite")),Object(i.b)("p",null,"Executed after the codegen has done creating the output and before writing the files to the file-system.\nTriggerd with multiple arguments - paths for all relevant files."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Not all the files will be actually written to the file-system, because this is triggered before checking if the file has changed since last execution.")),Object(i.b)("h3",{id:"beforeonefilewrite"},Object(i.b)("inlineCode",{parentName:"h3"},"beforeOneFileWrite")),Object(i.b)("p",null,"Triggered before a file is written to the file-system. Executed with the path for the file."),Object(i.b)("p",null,"If the content of the file hasn't changed since last execution - this hooks won't be triggerd."),Object(i.b)("h3",{id:"afteronefilewrite"},Object(i.b)("inlineCode",{parentName:"h3"},"afterOneFileWrite")),Object(i.b)("p",null,"Triggered after a file is written to the file-system. Executed with the path for the file.\nIf the content of the file hasn't changed since last execution - this hooks won't be triggerd."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This is a very useful hook, you can use it for integration with Prettier or other linters.")),Object(i.b)("h3",{id:"afterallfilewrite"},Object(i.b)("inlineCode",{parentName:"h3"},"afterAllFileWrite")),Object(i.b)("p",null,"Executed after writing all the files to the file-system.\nTriggerd with multiple arguments - paths for all files."),Object(i.b)("h3",{id:"beforedone"},Object(i.b)("inlineCode",{parentName:"h3"},"beforeDone")),Object(i.b)("p",null,"Triggerd with no arguments, right before the codegen closes, or when watch mode is stopped."),Object(i.b)("h2",{id:"output-level"},"Output Level"),Object(i.b)("p",null,"The following hooks are avialable for a single output file: ",Object(i.b)("inlineCode",{parentName:"p"},"beforeOneFileWrite")," and ",Object(i.b)("inlineCode",{parentName:"p"},"afterOneFileWrite"),"."),Object(i.b)("p",null,"Output level hooks are triggerd before root level hooks."))}d.isMDXComponent=!0},249:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return p}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a({},t,{},e)),r},b=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(r),f=n,p=b["".concat(l,".").concat(f)]||b[f]||u[f]||i;return r?o.a.createElement(p,a({ref:t},s,{components:r})):o.a.createElement(p,a({ref:t},s))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);