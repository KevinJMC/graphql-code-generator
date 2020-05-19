(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{246:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(10),p=(n(0),n(249)),o={id:"typescript-stencil-apollo",title:"TypeScript Stencil Apollo"},i={id:"plugins/typescript-stencil-apollo",title:"TypeScript Stencil Apollo",description:"This plugin generates Stencil Apollo functional components typings. It extends the basic TypeScript template [`@graphql-codegen/typescript`](typescript) and thus shares a similar configuration.",source:"@site/docs/plugins/typescript-stencil-apollo.md",permalink:"/docs/plugins/typescript-stencil-apollo",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typescript-stencil-apollo.md",sidebar:"sidebar",previous:{title:"TypeScript Apollo Angular",permalink:"/docs/plugins/typescript-apollo-angular"},next:{title:"TypeScript Urql",permalink:"/docs/plugins/typescript-urql"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"This plugin generates Stencil Apollo functional components typings. It extends the basic TypeScript template ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"typescript"}),Object(p.b)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript"))," and thus shares a similar configuration."),Object(p.b)("p",null,Object(p.b)("h2",{parentName:"p"},"Requirements"),Object(p.b)("p",{parentName:"p"},"In order to use this package, please make sure that you have GraphQL operations set as ",Object(p.b)("inlineCode",{parentName:"p"},"documents: ...")," in your ",Object(p.b)("inlineCode",{parentName:"p"},"codegen.yml"),"."),Object(p.b)("p",{parentName:"p"},"Without loading your GraphQL operations (query, mutation, subscription and fragment), you won't see any change in the generated output.")),Object(p.b)("h2",{id:"installation"},"Installation"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{}),"$ yarn add -D @graphql-codegen/typescript-stencil-apollo\n")),Object(p.b)("h2",{id:"usage"},"Usage"),Object(p.b)("p",null,"For the given input:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query Test {\n  feed {\n    id\n    commentCount\n    repository {\n      full_name\n      html_url\n      owner {\n        avatar_url\n      }\n    }\n  }\n}\n")),Object(p.b)("p",null,"We can use the generated code like this:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"  <TestComponent variables={...}>\n    ...\n  </TestComponent>\n")),Object(p.b)("h2",{id:"configuration"},"Configuration"),Object(p.b)("p",null,Object(p.b)("h3",{parentName:"p"},"scalars (",Object(p.b)("inlineCode",{parentName:"h3"},"ScalarsMap"),")"),Object(p.b)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(p.b)("h3",{parentName:"p"},"namingConvention (",Object(p.b)("inlineCode",{parentName:"h3"},"NamingConvention"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"pascal-case#pascalCase"),")"),Object(p.b)("p",{parentName:"p"},"Allow you to override the naming convention of the output. You can either override all namings, or specify an object with specific custom naming convention per output. The format of the converter must be a valid ",Object(p.b)("inlineCode",{parentName:"p"},"module#method"),". Allowed values for specific output are: ",Object(p.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(p.b)("inlineCode",{parentName:"p"},"enumValues"),'. You can also use "keep" to keep all GraphQL names as-is. Additionally you can set ',Object(p.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(p.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behaviour, which is to preserves underscores."),Object(p.b)("h4",{parentName:"p"},"Usage Example: Override All Names"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Upper-case enum values"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Keep"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Remove Underscores"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(p.b)("h3",{parentName:"p"},"typesPrefix (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},'""'),")"),Object(p.b)("p",{parentName:"p"},"Prefixes all the generated types."),Object(p.b)("h4",{parentName:"p"},'Usage Example: Add "I" Prefix'),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(p.b)("h3",{parentName:"p"},"skipTypename (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(p.b)("h3",{parentName:"p"},"nonOptionalTypename (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Automatically adds ",Object(p.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified in the selection set, and makes it non-optional"),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n"))),Object(p.b)("p",null,Object(p.b)("h3",{parentName:"p"},"gqlImport (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"gql#graphql-tag"),")"),Object(p.b)("p",{parentName:"p"},"Customize from which module will ",Object(p.b)("inlineCode",{parentName:"p"},"gql")," be imported from. This is useful if you want to use modules other than ",Object(p.b)("inlineCode",{parentName:"p"},"graphql-tag"),", e.g. ",Object(p.b)("inlineCode",{parentName:"p"},"graphql.macro"),"."),Object(p.b)("h4",{parentName:"p"},"Usage Example: graphql.macro"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  gqlImport: graphql.macro#gql\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Gatsby"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  gqlImport: gatsby#graphql\n")),Object(p.b)("h3",{parentName:"p"},"operationResultSuffix (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},'""'),")"),Object(p.b)("p",{parentName:"p"},"Adds a suffix to generated operation result type names"),Object(p.b)("h3",{parentName:"p"},"dedupeOperationSuffix (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Set this configuration to ",Object(p.b)("inlineCode",{parentName:"p"},"true")," if you wish to make sure to remove duplicate operation name suffix."),Object(p.b)("h3",{parentName:"p"},"omitOperationSuffix (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Set this configuration to ",Object(p.b)("inlineCode",{parentName:"p"},"true")," if you wish to disable auto add suffix of operation name, like ",Object(p.b)("inlineCode",{parentName:"p"},"Query"),", ",Object(p.b)("inlineCode",{parentName:"p"},"Mutation"),", ",Object(p.b)("inlineCode",{parentName:"p"},"Subscription"),", ",Object(p.b)("inlineCode",{parentName:"p"},"Fragment"),"."),Object(p.b)("h3",{parentName:"p"},"documentMode (",Object(p.b)("inlineCode",{parentName:"h3"},"'graphQLTag' | 'documentNode' | 'documentNodeImportFragments' | 'external'"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"'graphQLTag'"),")"),Object(p.b)("p",{parentName:"p"},"Declares how DocumentNode are created: - ",Object(p.b)("inlineCode",{parentName:"p"},"graphQLTag"),": ",Object(p.b)("inlineCode",{parentName:"p"},"graphql-tag")," or other modules (check ",Object(p.b)("inlineCode",{parentName:"p"},"gqlImport"),") will be used to generate document nodes. If this is used, document nodes are generated on client side i.e. the module used to generate this will be shipped to the client - ",Object(p.b)("inlineCode",{parentName:"p"},"documentNode"),": document nodes will be generated as objects when we generate the templates. - ",Object(p.b)("inlineCode",{parentName:"p"},"documentNodeImportFragments"),": Similar to documentNode except it imports external fragments instead of embedding them. - ",Object(p.b)("inlineCode",{parentName:"p"},"external"),": document nodes are imported from an external file. To be used with ",Object(p.b)("inlineCode",{parentName:"p"},"importDocumentNodeExternallyFrom")),Object(p.b)("h3",{parentName:"p"},"importDocumentNodeExternallyFrom (",Object(p.b)("inlineCode",{parentName:"h3"},"string | 'near-operation-file'"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"''"),")"),Object(p.b)("p",{parentName:"p"},"This config should be used if ",Object(p.b)("inlineCode",{parentName:"p"},"documentMode")," is ",Object(p.b)("inlineCode",{parentName:"p"},"external"),". This has 2 usage: - any string: This would be the path to import document nodes from. This can be used if we want to manually create the document nodes e.g. Use ",Object(p.b)("inlineCode",{parentName:"p"},"graphql-tag")," in a separate file and export the generated document - 'near-operation-file': This is a special mode that is intended to be used with ",Object(p.b)("inlineCode",{parentName:"p"},"near-operation-file")," preset to import document nodes from those files. If these files are ",Object(p.b)("inlineCode",{parentName:"p"},".graphql")," files, we make use of webpack loader."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  documentMode: external\n  importDocumentNodeExternallyFrom: path/to/document-node-file\n")),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  documentMode: external\n  importDocumentNodeExternallyFrom: near-operation-file\n"))),Object(p.b)("p",null,Object(p.b)("h3",{parentName:"p"},"componentType (",Object(p.b)("inlineCode",{parentName:"h3"},"functional / class"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"functional"),")"),Object(p.b)("p",{parentName:"p"},"Customize the output of the plugin - you can choose to generate a Component class or a function component."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-stencil-apollo\n config:\n   componentType: class\n"))))}b.isMDXComponent=!0},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,d=s["".concat(o,".").concat(u)]||s[u]||m[u]||p;return n?r.a.createElement(d,i({ref:t},l,{components:n})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);