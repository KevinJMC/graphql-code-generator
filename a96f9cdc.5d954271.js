(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{205:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(1),o=t(10),a=(t(0),t(249)),i={id:"introspection",title:"Introspection"},c={id:"plugins/introspection",title:"Introspection",description:"The `@graphql-codegen/introspection` generates an introspection file based on your GraphQL schema.",source:"@site/docs/plugins/introspection.md",permalink:"/docs/plugins/introspection",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/introspection.md",sidebar:"sidebar",previous:{title:"Fragment Matcher",permalink:"/docs/plugins/fragment-matcher"},next:{title:"Add",permalink:"/docs/plugins/add"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Configuration",id:"configuration",children:[]}],l={rightToc:p};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@graphql-codegen/introspection")," generates an introspection file based on your GraphQL schema."),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ yarn add -D @graphql-codegen/introspection\n")),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,Object(a.b)("h3",{parentName:"p"},"minify (",Object(a.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(a.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(a.b)("p",{parentName:"p"},"Set to ",Object(a.b)("inlineCode",{parentName:"p"},"true")," in order to minify the JSON output."),Object(a.b)("h4",{parentName:"p"},"Usage Example"),Object(a.b)("pre",{parentName:"p"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"generates:\nintrospection.json:\n  plugins:\n    - introspection\n  config:\n    minify: true\n"))))}u.isMDXComponent=!0},249:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},s=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(t),d=r,f=s["".concat(i,".").concat(d)]||s[d]||b[d]||a;return t?o.a.createElement(f,c({ref:n},l,{components:t})):o.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);