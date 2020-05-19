(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{193:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return o})),n.d(a,"metadata",(function(){return c})),n.d(a,"rightToc",(function(){return i})),n.d(a,"default",(function(){return b}));var t=n(1),r=n(10),p=(n(0),n(249)),o={id:"java",title:"Java"},c={id:"plugins/java",title:"Java",description:"The `java` plugin generates Java `classes` for Enums and Input types.",source:"@site/docs/plugins/java.md",permalink:"/docs/plugins/java",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/java.md",sidebar:"sidebar",previous:{title:"Kotlin",permalink:"/docs/plugins/kotlin"},next:{title:"Java Resolvers",permalink:"/docs/plugins/java-resolvers"}},i=[{value:"Installation",id:"installation",children:[]},{value:"Configuration",id:"configuration",children:[]}],l={rightToc:i};function b(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(t.a)({},l,n,{components:a,mdxType:"MDXLayout"}),Object(p.b)("p",null,"The ",Object(p.b)("inlineCode",{parentName:"p"},"java")," plugin generates Java ",Object(p.b)("inlineCode",{parentName:"p"},"classes")," for Enums and Input types."),Object(p.b)("p",null,"It works with ",Object(p.b)("inlineCode",{parentName:"p"},"graphql-java")," library."),Object(p.b)("p",null,"You can use this plugin to generate Java enums based on your GraphQL schema, and it also generates a type-safe Java transformer for GraphQL ",Object(p.b)("inlineCode",{parentName:"p"},"input")," types."),Object(p.b)("p",null,"Then, you can use it directly to transform your ",Object(p.b)("inlineCode",{parentName:"p"},"input")," in your resolvers:"),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  user(id: ID!): User!\n}\n\ntype User {\n  id: ID\n}\n")),Object(p.b)("p",null,"Then, in your resolver:"),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"import com.my.app.generated.Types;\nimport com.my.app.models.User;\nimport graphql.schema.DataFetcher;\n\nexport class QueryResolvers {\n  public DataFetcher<User> user() {\n        return env -> {\n            Types.QueryUserArgs args = new Types.QueryUserArgs(env.getArguments());\n            String userId = args.getId();\n\n            // rest of the code\n        };\n    }\n}\n")),Object(p.b)("h2",{id:"installation"},"Installation"),Object(p.b)("p",null,Object(p.b)("p",{parentName:"p"},"To use the GraphQL Code Generator with Java, start by adding the ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"https://plugins.gradle.org/plugin/com.moowork.node"}),"com.moowork.node")," Gradle plugin to your ",Object(p.b)("inlineCode",{parentName:"p"},"build.gradle"),":"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{}),'plugins {\n  id "com.moowork.node" version "1.3.1"\n}\n')),Object(p.b)("p",{parentName:"p"},"Then, add the following in order to make sure you are running the code-generator on each build:"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{}),"build.dependsOn yarn\n")),Object(p.b)("p",{parentName:"p"},"Then, create a ",Object(p.b)("inlineCode",{parentName:"p"},"package.json")," file in your project root, with the following content:"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "java-app",\n  "scripts": {\n    "postinstall": "graphql-codegen"\n  },\n  "dependencies": {\n    "graphql": "14.5.8",\n    "@graphql-codegen/cli": "1.7.0",\n    "@graphql-codegen/RELEVANT_PLUGIN": "1.7.0"\n  }\n}\n')),Object(p.b)("blockquote",{parentName:"p"},Object(p.b)("p",{parentName:"blockquote"},"Make sure to use the latest version of codegen and the plugins, and replace ",Object(p.b)("inlineCode",{parentName:"p"},"RELEVANT_PLUGIN")," with your plugin name.")),Object(p.b)("p",{parentName:"p"},"Then, create ",Object(p.b)("inlineCode",{parentName:"p"},"codegen.yml")," file in your root directory, pointing to your schema, and add the plugins you need. For example:"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{}),"schema: src/main/resources/schema.graphqls\ngenerates:\n  src/main/java/com/my-name/my-app/generated/File.java:\n    - RELEVANT_PLUGIN\n")),Object(p.b)("blockquote",{parentName:"p"},Object(p.b)("p",{parentName:"blockquote"},"Replace ",Object(p.b)("inlineCode",{parentName:"p"},"RELEVANT_PLUGIN")," with your plugin name.")),Object(p.b)("p",{parentName:"p"},"Also, make sure you add the following to your ",Object(p.b)("inlineCode",{parentName:"p"},".gitignore")," file:"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{}),"yarn.lock\nnode_modules\n")),Object(p.b)("p",{parentName:"p"},"Now, run ",Object(p.b)("inlineCode",{parentName:"p"},"gradle yarn")," to install the dependencies for the first time."),Object(p.b)("p",{parentName:"p"},"Next time, the codegen will run automatically each time you run your Gradle build script.")),Object(p.b)("h2",{id:"configuration"},"Configuration"),Object(p.b)("p",null,Object(p.b)("h3",{parentName:"p"},"package (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),")"),Object(p.b)("p",{parentName:"p"},"Customize the Java package name. The default package name will be generated according to the output file path."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java\n    config:\n      package: custom.package.name\n")),Object(p.b)("h3",{parentName:"p"},"enumValues (",Object(p.b)("inlineCode",{parentName:"h3"},"EnumValuesMap"),")"),Object(p.b)("p",{parentName:"p"},"Overrides the default value of enum values declared in your GraphQL schema."),Object(p.b)("h4",{parentName:"p"},"Usage Example: With Custom Values"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    enumValues:\n      MyEnum:\n        A: 'foo'\n")),Object(p.b)("h3",{parentName:"p"},"className (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"Types"),")"),Object(p.b)("p",{parentName:"p"},"Allow you to customize the parent class name."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  src/main/java/my-org/my-app/MyGeneratedTypes.java:\n    plugins:\n      - java\n    config:\n      className: MyGeneratedTypes\n")),Object(p.b)("h3",{parentName:"p"},"listType (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"Iterable"),")"),Object(p.b)("p",{parentName:"p"},"Allow you to customize the list type"),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  src/main/java/my-org/my-app/Types.java:\n    plugins:\n      - java\n    config:\n      listType: Map\n"))),Object(p.b)("p",null,Object(p.b)("h3",{parentName:"p"},"scalars (",Object(p.b)("inlineCode",{parentName:"h3"},"ScalarsMap"),")"),Object(p.b)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(p.b)("h3",{parentName:"p"},"namingConvention (",Object(p.b)("inlineCode",{parentName:"h3"},"NamingConvention"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"pascal-case#pascalCase"),")"),Object(p.b)("p",{parentName:"p"},"Allow you to override the naming convention of the output. You can either override all namings, or specify an object with specific custom naming convention per output. The format of the converter must be a valid ",Object(p.b)("inlineCode",{parentName:"p"},"module#method"),". Allowed values for specific output are: ",Object(p.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(p.b)("inlineCode",{parentName:"p"},"enumValues"),'. You can also use "keep" to keep all GraphQL names as-is. Additionally you can set ',Object(p.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(p.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behaviour, which is to preserves underscores."),Object(p.b)("h4",{parentName:"p"},"Usage Example: Override All Names"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Upper-case enum values"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Keep"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Remove Underscores"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(p.b)("h3",{parentName:"p"},"typesPrefix (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},'""'),")"),Object(p.b)("p",{parentName:"p"},"Prefixes all the generated types."),Object(p.b)("h4",{parentName:"p"},'Usage Example: Add "I" Prefix'),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(p.b)("h3",{parentName:"p"},"skipTypename (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(p.b)("h3",{parentName:"p"},"nonOptionalTypename (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Automatically adds ",Object(p.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified in the selection set, and makes it non-optional"),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n"))))}b.isMDXComponent=!0},249:function(e,a,n){"use strict";n.d(a,"a",(function(){return s})),n.d(a,"b",(function(){return d}));var t=n(0),r=n.n(t);function p(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){p(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var a=r.a.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):c({},a,{},e)),n},s=function(e){var a=b(e.components);return r.a.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=Object(t.forwardRef)((function(e,a){var n=e.components,t=e.mdxType,p=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=b(n),u=t,d=s["".concat(o,".").concat(u)]||s[u]||m[u]||p;return n?r.a.createElement(d,c({ref:a},l,{components:n})):r.a.createElement(d,c({ref:a},l))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var p=n.length,o=new Array(p);o[0]=u;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var l=2;l<p;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);