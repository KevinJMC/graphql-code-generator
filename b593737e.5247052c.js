(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{208:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),i=n(10),o=(n(0),n(249)),a={id:"require-field",title:"`require` field"},c={id:"getting-started/require-field",title:"`require` field",description:"The `require` field allows you to load any external files without the need to transpile them before.",source:"@site/docs/getting-started/require-field.md",permalink:"/docs/getting-started/require-field",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/getting-started/require-field.md",sidebar:"sidebar",previous:{title:"`config` field",permalink:"/docs/getting-started/config-field"},next:{title:"Lifecycle Hooks",permalink:"/docs/getting-started/lifecycle-hooks"}},l=[{value:"How to use it?",id:"how-to-use-it",children:[]},{value:"TypeScript Support",id:"typescript-support",children:[]},{value:"Specifying from the command line",id:"specifying-from-the-command-line",children:[{value:"<code>dotenv</code> Integration",id:"dotenv-integration",children:[]}]}],p={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"require")," field allows you to load any external files without the need to transpile them before."),Object(o.b)("h2",{id:"how-to-use-it"},"How to use it?"),Object(o.b)("p",null,"To use it, install the extensions you wish to use from npm and then specify a list of ",Object(o.b)("inlineCode",{parentName:"p"},"require")," extensions in your root config:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"require:\n  - extension1\n  - extension2\n")),Object(o.b)("p",null,"Adding ",Object(o.b)("inlineCode",{parentName:"p"},"require")," extension is useful if you are loading your ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," or GraphQL documents from a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./schema-field#javascript-export"}),"code file"),", if you wish to use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../custom-codegen/write-your-plugin"}),"custom plugins"),", or use a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./schema-field#custom-schema-loader"}),"custom schema loader")," or a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"documents-field#custom-document-loader"}),"custom document loader"),"."),Object(o.b)("h2",{id:"typescript-support"},"TypeScript Support"),Object(o.b)("p",null,"If you wish to use TypeScript, just add ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/TypeStrong/ts-node"}),Object(o.b)("inlineCode",{parentName:"a"},"ts-node"))," from npm and specify its register export in your config file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"require:\n  - ts-node/register\n")),Object(o.b)("h2",{id:"specifying-from-the-command-line"},"Specifying from the command line"),Object(o.b)("p",null,"You can also specify ",Object(o.b)("inlineCode",{parentName:"p"},"require.extensions")," as a cli flag using ",Object(o.b)("inlineCode",{parentName:"p"},"-r"),"."),Object(o.b)("p",null,"Specifying ",Object(o.b)("inlineCode",{parentName:"p"},"-r")," using a CLI flag will load your ",Object(o.b)("inlineCode",{parentName:"p"},"require.extension")," ",Object(o.b)("em",{parentName:"p"},"before")," loading the ",Object(o.b)("inlineCode",{parentName:"p"},".yml")," file, and this way you can load environment variables using ",Object(o.b)("inlineCode",{parentName:"p"},"dotenv")," and use those environment variables in your ",Object(o.b)("inlineCode",{parentName:"p"},".yml")," config file."),Object(o.b)("h3",{id:"dotenv-integration"},Object(o.b)("inlineCode",{parentName:"h3"},"dotenv")," Integration"),Object(o.b)("p",null,"If you wish to use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/motdotla/dotenv"}),"dotenv")," to load environment variables, you can install ",Object(o.b)("inlineCode",{parentName:"p"},"dotenv")," from npm and then to use the ",Object(o.b)("inlineCode",{parentName:"p"},"require")," cli flag to preload the ",Object(o.b)("inlineCode",{parentName:"p"},"dotenv")," require extensions: ",Object(o.b)("inlineCode",{parentName:"p"},"-r dotenv/config"),"."),Object(o.b)("p",null,"It will make sure to load your ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file before executing the codegen and loading your ",Object(o.b)("inlineCode",{parentName:"p"},".yml")," file."))}u.isMDXComponent=!0},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(a,".").concat(b)]||d[b]||s[b]||o;return n?i.a.createElement(m,c({ref:t},p,{components:n})):i.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);