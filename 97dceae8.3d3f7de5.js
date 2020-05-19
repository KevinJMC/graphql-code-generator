(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{196:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return c})),a.d(n,"metadata",(function(){return o})),a.d(n,"rightToc",(function(){return i})),a.d(n,"default",(function(){return l}));var t=a(1),r=a(10),p=(a(0),a(249)),c={id:"typescript-document-nodes",title:"TypeScript document nodes"},o={id:"plugins/typescript-document-nodes",title:"TypeScript document nodes",description:"This is a plugin for [GraphQL Code",source:"@site/docs/plugins/typescript-document-nodes.md",permalink:"/docs/plugins/typescript-document-nodes",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typescript-document-nodes.md",sidebar:"sidebar",previous:{title:"TypeScript GraphQL Files Modules",permalink:"/docs/plugins/typescript-graphql-files-modules"},next:{title:"TypeScript MongoDB",permalink:"/docs/plugins/typescript-mongodb"}},i=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]}],s={rightToc:i};function l(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(t.a)({},s,a,{components:n,mdxType:"MDXLayout"}),Object(p.b)("p",null,"This is a plugin for ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"https://graphql-code-generator.com/"}),"GraphQL Code\nGenerator")," that generates TypeScript\nsource file from GraphQL files."),Object(p.b)("p",null,"Generated modules export GraphQL as an AST document nodes. Modules use\n",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.npmjs.com/package/graphql-tag"}),Object(p.b)("inlineCode",{parentName:"a"},"graphql-tag"))," module."),Object(p.b)("h2",{id:"installation"},"Installation"),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{}),"$ yarn add @graphql-codegen/typescript-document-nodes\n")),Object(p.b)("h2",{id:"usage"},"Usage"),Object(p.b)("p",null,"With ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"https://developer.github.com/v4/"}),"GitHub GraphQL API v4")," schema and\nfollowing GraphQL operation:"),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-graphql"}),"query Viewer {\n  viewer {\n    login\n    name\n  }\n}\n")),Object(p.b)("p",null,"It will generate following TypeScript code:"),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-ts"}),"import { DocumentNode } from 'graphql';\nimport gql from 'graphql-tag';\n\nexport const viewerQuery: DocumentNode = gql`\n  query Viewer {\n    viewer {\n      login\n      name\n    }\n  }\n`;\n")),Object(p.b)("h2",{id:"configuration"},"Configuration"),Object(p.b)("p",null,Object(p.b)("h3",{parentName:"p"},"scalars (",Object(p.b)("inlineCode",{parentName:"h3"},"ScalarsMap"),")"),Object(p.b)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(p.b)("h3",{parentName:"p"},"namingConvention (",Object(p.b)("inlineCode",{parentName:"h3"},"NamingConvention"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"pascal-case#pascalCase"),")"),Object(p.b)("p",{parentName:"p"},"Allow you to override the naming convention of the output. You can either override all namings, or specify an object with specific custom naming convention per output. The format of the converter must be a valid ",Object(p.b)("inlineCode",{parentName:"p"},"module#method"),". Allowed values for specific output are: ",Object(p.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(p.b)("inlineCode",{parentName:"p"},"enumValues"),'. You can also use "keep" to keep all GraphQL names as-is. Additionally you can set ',Object(p.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(p.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behaviour, which is to preserves underscores."),Object(p.b)("h4",{parentName:"p"},"Usage Example: Override All Names"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Upper-case enum values"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Keep"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Remove Underscores"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(p.b)("h3",{parentName:"p"},"typesPrefix (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},'""'),")"),Object(p.b)("p",{parentName:"p"},"Prefixes all the generated types."),Object(p.b)("h4",{parentName:"p"},'Usage Example: Add "I" Prefix'),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(p.b)("h3",{parentName:"p"},"skipTypename (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(p.b)("h3",{parentName:"p"},"nonOptionalTypename (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Automatically adds ",Object(p.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified in the selection set, and makes it non-optional"),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n"))),Object(p.b)("p",null,Object(p.b)("h3",{parentName:"p"},"namingConvention (",Object(p.b)("inlineCode",{parentName:"h3"},"NamingConvention"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"pascal-case#pascalCase"),")"),Object(p.b)("p",{parentName:"p"},"Allow you to override the naming convention of the output. You can either override all namings, or specify an object with specific custom naming convention per output. The format of the converter must be a valid ",Object(p.b)("inlineCode",{parentName:"p"},"module#method"),". Allowed values for specific output are: ",Object(p.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(p.b)("inlineCode",{parentName:"p"},"enumValues"),'. You can also use "keep" to keep all GraphQL names as-is. Additionally you can set ',Object(p.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(p.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behaviour, which is to preserves underscores."),Object(p.b)("h4",{parentName:"p"},"Usage Example: Override All Names"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Upper-case enum values"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Keep"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Remove Underscores"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(p.b)("h3",{parentName:"p"},"namePrefix (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"''"),")"),Object(p.b)("p",{parentName:"p"},"Adds prefix to the name"),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"})," documents: src/api/user-service/queries.graphql\n generates:\n   src/api/user-service/queries.ts:\n   plugins:\n     - typescript-document-nodes\n   config:\n     namePrefix: 'gql'\n")),Object(p.b)("h3",{parentName:"p"},"nameSuffix (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"''"),")"),Object(p.b)("p",{parentName:"p"},"Adds suffix to the name"),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"})," documents: src/api/user-service/queries.graphql\n generates:\n   src/api/user-service/queries.ts:\n   plugins:\n     - typescript-document-nodes\n   config:\n     nameSuffix: 'Query'\n"))))}l.isMDXComponent=!0},249:function(e,n,a){"use strict";a.d(n,"a",(function(){return b})),a.d(n,"b",(function(){return d}));var t=a(0),r=a.n(t);function p(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach((function(n){p(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),l=function(e){var n=r.a.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o({},n,{},e)),a},b=function(e){var n=l(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=Object(t.forwardRef)((function(e,n){var a=e.components,t=e.mdxType,p=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=l(a),u=t,d=b["".concat(c,".").concat(u)]||b[u]||m[u]||p;return a?r.a.createElement(d,o({ref:n},s,{components:a})):r.a.createElement(d,o({ref:n},s))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var p=a.length,c=new Array(p);c[0]=u;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:t,c[1]=o;for(var s=2;s<p;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);