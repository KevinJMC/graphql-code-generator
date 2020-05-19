(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{212:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return i})),a.d(n,"metadata",(function(){return o})),a.d(n,"rightToc",(function(){return c})),a.d(n,"default",(function(){return d}));var t=a(1),r=a(10),l=(a(0),a(249)),i={},o={id:"generated-config/base-types-visitor",title:"base-types-visitor",description:"### addUnderscoreToArgsType (`boolean`)",source:"@site/docs/generated-config/base-types-visitor.md",permalink:"/docs/generated-config/base-types-visitor",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/base-types-visitor.md"},c=[{value:"addUnderscoreToArgsType (<code>boolean</code>)",id:"addunderscoretoargstype-boolean",children:[]},{value:"enumValues (<code>EnumValuesMap</code>)",id:"enumvalues-enumvaluesmap",children:[]},{value:"declarationKind (<code>DeclarationKindConfig</code>)",id:"declarationkind-declarationkindconfig",children:[]},{value:"enumPrefix (<code>boolean</code>, default value: <code>true</code>)",id:"enumprefix-boolean-default-value-true",children:[]},{value:"fieldWrapperValue (<code>string</code>, default value: <code>T</code>)",id:"fieldwrappervalue-string-default-value-t",children:[]},{value:"wrapFieldDefinitions (<code>boolean</code>, default value: <code>false</code>)",id:"wrapfielddefinitions-boolean-default-value-false",children:[]},{value:"onlyOperationTypes (<code>boolean</code>, default value: <code>false</code>)",id:"onlyoperationtypes-boolean-default-value-false",children:[]}],p={rightToc:c};function d(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},p,a,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"addunderscoretoargstype-boolean"},"addUnderscoreToArgsType (",Object(l.b)("inlineCode",{parentName:"h3"},"boolean"),")"),Object(l.b)("p",null,"Adds ",Object(l.b)("inlineCode",{parentName:"p"},"_")," to generated ",Object(l.b)("inlineCode",{parentName:"p"},"Args")," types in order to avoid duplicate identifiers."),Object(l.b)("h4",{id:"usage-example-with-custom-values"},"Usage Example: With Custom Values"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    addUnderscoreToArgsType: true\n")),Object(l.b)("h3",{id:"enumvalues-enumvaluesmap"},"enumValues (",Object(l.b)("inlineCode",{parentName:"h3"},"EnumValuesMap"),")"),Object(l.b)("p",null,"Overrides the default value of enum values declared in your GraphQL schema. You can also map the entire enum to an external type by providing a string that of ",Object(l.b)("inlineCode",{parentName:"p"},"module#type"),"."),Object(l.b)("h4",{id:"usage-example-with-custom-values-1"},"Usage Example: With Custom Values"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    enumValues:\n      MyEnum:\n        A: 'foo'\n")),Object(l.b)("h4",{id:"usage-example-with-external-enum"},"Usage Example: With External Enum"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    enumValues:\n      MyEnum: ./my-file#MyCustomEnum\n")),Object(l.b)("h4",{id:"usage-example-import-all-enums-from-a-file"},"Usage Example: Import All Enums from a file"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    enumValues: ./my-file\n")),Object(l.b)("h3",{id:"declarationkind-declarationkindconfig"},"declarationKind (",Object(l.b)("inlineCode",{parentName:"h3"},"DeclarationKindConfig"),")"),Object(l.b)("p",null,"Overrides the default output for various GraphQL elements."),Object(l.b)("h4",{id:"usage-example-override-all-declarations"},"Usage Example: Override all declarations"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    declarationKind: 'interface'\n")),Object(l.b)("h4",{id:"usage-example-override-only-specific-declarations"},"Usage Example: Override only specific declarations"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    declarationKind:\n      type: 'interface'\n      input: 'interface'\n")),Object(l.b)("h3",{id:"enumprefix-boolean-default-value-true"},"enumPrefix (",Object(l.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(l.b)("inlineCode",{parentName:"h3"},"true"),")"),Object(l.b)("p",null,"Allow you to disable prefixing for generated enums, works in combination with ",Object(l.b)("inlineCode",{parentName:"p"},"typesPrefix"),"."),Object(l.b)("h4",{id:"usage-example-disable-enum-prefixes"},"Usage Example: Disable enum prefixes"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    typesPrefix: I\n    enumPrefix: false\n")),Object(l.b)("h3",{id:"fieldwrappervalue-string-default-value-t"},"fieldWrapperValue (",Object(l.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(l.b)("inlineCode",{parentName:"h3"},"T"),")"),Object(l.b)("p",null,"Allow you to add wrapper for field type, use T as the generic value. Make sure to set ",Object(l.b)("inlineCode",{parentName:"p"},"wrapFieldDefinitions")," to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," in order to make this flag work."),Object(l.b)("h4",{id:"usage-example-allow-promise"},"Usage Example: Allow Promise"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   wrapFieldDefinitions: true\n   fieldWrapperValue: T | Promise<T>\n")),Object(l.b)("h3",{id:"wrapfielddefinitions-boolean-default-value-false"},"wrapFieldDefinitions (",Object(l.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(l.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(l.b)("p",null,"Set the to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," in order to wrap field definitions with ",Object(l.b)("inlineCode",{parentName:"p"},"FieldWrapper"),". This is useful to allow return types such as Promises and functions."),Object(l.b)("h4",{id:"usage-example-enable-wrapping-fields"},"Usage Example: Enable wrapping fields"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   wrapFieldDefinitions: true\n")),Object(l.b)("h3",{id:"onlyoperationtypes-boolean-default-value-false"},"onlyOperationTypes (",Object(l.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(l.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(l.b)("p",null,"This will cause the generator to emit types for operations only (basically only enums and scalars)"),Object(l.b)("h4",{id:"usage-example-override-all-definition-types"},"Usage Example: Override all definition types"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   onlyOperationTypes: true\n")))}d.isMDXComponent=!0},249:function(e,n,a){"use strict";a.d(n,"a",(function(){return u})),a.d(n,"b",(function(){return m}));var t=a(0),r=a.n(t);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),d=function(e){var n=r.a.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o({},n,{},e)),a},u=function(e){var n=d(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=Object(t.forwardRef)((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(a),b=t,m=u["".concat(i,".").concat(b)]||u[b]||s[b]||l;return a?r.a.createElement(m,o({ref:n},p,{components:a})):r.a.createElement(m,o({ref:n},p))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=b;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);