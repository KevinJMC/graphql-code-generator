(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(1),i=n(10),r=(n(0),n(249)),o={id:"typescript-mongodb",title:"TypeScript MongoDB"},p={id:"plugins/typescript-mongodb",title:"TypeScript MongoDB",description:"This plugin generates TypeScript types for MongoDB models, which makes it relevant for server-side development only. It uses GraphQL directives to declare the types you want to generate and use in your MongoDB backend.",source:"@site/docs/plugins/typescript-mongodb.md",permalink:"/docs/plugins/typescript-mongodb",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typescript-mongodb.md",sidebar:"sidebar",previous:{title:"TypeScript document nodes",permalink:"/docs/plugins/typescript-document-nodes"},next:{title:"TypeScript React Apollo",permalink:"/docs/plugins/typescript-react-apollo"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Directives",id:"directives",children:[]},{value:"Example",id:"example",children:[]},{value:"Configuration",id:"configuration",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This plugin generates TypeScript types for MongoDB models, which makes it relevant for server-side development only. It uses GraphQL directives to declare the types you want to generate and use in your MongoDB backend."),Object(r.b)("p",null,"Given the following GraphQL declaration:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type User @entity {\n    id: String @id\n    username: String! @column\n    email: @column\n}\n")),Object(r.b)("p",null,"We can have the following TypeScript output:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { ObjectID } from 'mongodb';\n\nexport interface UserDbObject {\n  _id: ObjectID;\n  username: string;\n  email?: string | null;\n}\n")),Object(r.b)("p",null,"This interface can be used for db read/write purposes, thus making communication with the db much more consistent."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ yarn add @graphql-codegen/typescript-mongodb\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Don't install this plugin as devDependency, because you need to import the directives from it.")),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("p",null,"Once installed, add the directives declaration to your GraphQL Schema definition:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { makeExecutableSchema } from 'graphql-tools';\nimport { DIRECTIVES } from '@graphql-codegen/typescript-mongodb';\n\nconst schema = makeExecutableSchema({\n  typeDefs: [\n    DIRECTIVES,\n    // the rest of your GraphQL types\n  ],\n  resolvers,\n});\n")),Object(r.b)("p",null,"And generate code using ",Object(r.b)("inlineCode",{parentName:"p"},"gql-gen"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"schema: ./src/my-schema.js\nrequire:\n  - ts-node/register\ngenerates:\n  ./src/generated/graphql.ts:\n    plugins:\n      - typescript\n      - typescript-mongodb\n")),Object(r.b)("p",null,"At this point, you can add the directives to your GraphQL definitions, and generate your MongoDB models file."),Object(r.b)("h2",{id:"directives"},"Directives"),Object(r.b)("h4",{id:"entityadditionalfields-additionalentityfields-on-object"},Object(r.b)("inlineCode",{parentName:"h4"},"@entity(additionalFields: [AdditionalEntityFields])")," (on ",Object(r.b)("inlineCode",{parentName:"h4"},"OBJECT"),")"),Object(r.b)("p",null,"Use this directive to specify which GraphQL type should have generated MongoDB models."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"embedded: Boolean")," - use this option to declare target entity as child of a greater entity. For example, given the following structure ",Object(r.b)("inlineCode",{parentName:"li"},"{ _id: string, username: string, profile: { name: string }}"),", the GraphQL type ",Object(r.b)("inlineCode",{parentName:"li"},"Profile")," should be declared as embedded."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"additionalFields: [AdditionalEntityFields]")," - specify any additional fields that you would like to add to your MongoDB object, and are not a part of your public GraphQL schema.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'type User @entity(additionalFields: [\n { path: "services.login.token", type: "string" }\n]) {\n id: String @id\n email: @column\n}\n')),Object(r.b)("h4",{id:"columnoverridetype-string-on-field_definition"},Object(r.b)("inlineCode",{parentName:"h4"},"@column(overrideType: String)")," (on ",Object(r.b)("inlineCode",{parentName:"h4"},"FIELD_DEFINITION"),")"),Object(r.b)("p",null,"Use this directive to declare a specific GraphQL field as part of your generated MongoDB type."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"overrideType: String")," - use this to override the type of the field; for example, if you store dates as ",Object(r.b)("inlineCode",{parentName:"li"},"Date")," but expose them as ",Object(r.b)("inlineCode",{parentName:"li"},"String"),".")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u26a0 If target property is an embedded entity, you should use ",Object(r.b)("inlineCode",{parentName:"p"},"@embedded")," instead.")),Object(r.b)("h4",{id:"id-on-field_definition"},Object(r.b)("inlineCode",{parentName:"h4"},"@id")," (on ",Object(r.b)("inlineCode",{parentName:"h4"},"FIELD_DEFINITION"),")"),Object(r.b)("p",null,"Use this directive on the filed that should be mapped to a MongoDB ",Object(r.b)("inlineCode",{parentName:"p"},"_id"),". By default, it should be the ",Object(r.b)("inlineCode",{parentName:"p"},"id")," field of the GraphQL ",Object(r.b)("inlineCode",{parentName:"p"},"type"),"."),Object(r.b)("h4",{id:"link-on-field_definition"},Object(r.b)("inlineCode",{parentName:"h4"},"@link")," (on ",Object(r.b)("inlineCode",{parentName:"h4"},"FIELD_DEFINITION"),")"),Object(r.b)("p",null,"Use this directive to declare that a specific field is a link to another type in another table. This will use the ",Object(r.b)("inlineCode",{parentName:"p"},"ObjectID")," type in the generated result."),Object(r.b)("h4",{id:"embedded-on-field_definition"},Object(r.b)("inlineCode",{parentName:"h4"},"@embedded")," (on ",Object(r.b)("inlineCode",{parentName:"h4"},"FIELD_DEFINITION"),")"),Object(r.b)("p",null,"use this option to declare target entity as child of a greater entity."),Object(r.b)("h4",{id:"mappath-string-on-field_definition"},Object(r.b)("inlineCode",{parentName:"h4"},"@map(path: String)")," (on ",Object(r.b)("inlineCode",{parentName:"h4"},"FIELD_DEFINITION"),")"),Object(r.b)("p",null,"Use this directive to override the path or the name of the target field. This would come in handy whenever we would like to create a more complex object structure in the database;\nfor example, if you wish to project a field as ",Object(r.b)("inlineCode",{parentName:"p"},"username")," on your schema, but store it as ",Object(r.b)("inlineCode",{parentName:"p"},"credentials.username")," in your DB.\nYou can either specify the name of the field, or a path to which will lead to its corresponding field in the DB."),Object(r.b)("p",null,"Given the following GraphQL schema:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'type User @entity {\n  username: String @column @map(path: "credentials.username")\n}\n')),Object(r.b)("p",null,"The output should be:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export interface UserDbObject {\n  credentials: {\n    username: string;\n  };\n}\n")),Object(r.b)("h4",{id:"abstractentitydiscriminatorfield-string-on-interface"},Object(r.b)("inlineCode",{parentName:"h4"},"@abstractEntity(discriminatorField: String!)")," (on ",Object(r.b)("inlineCode",{parentName:"h4"},"INTERFACE"),")"),Object(r.b)("p",null,"Use this directive on a GraphQL interface to mark it as a basis for other database types.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"discriminatorField")," argument is mandatory and will tell the generator what field name in the database determines what interface the target object is implementing."),Object(r.b)("p",null,"For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'interface BaseNotification @abstractEntity(discriminatorField: "notificationType") {\n  id: ID! @id\n  createdAt: String! @column(overrideType: "Date")\n}\n\ntype TextNotification implements BaseNotification @entity {\n  id: ID!\n  createdAt: String!\n  content: String! @column\n}\n')),Object(r.b)("p",null,"This way, you will get:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export interface BaseNotificationDbInterface {\n  notificationType: string;\n  _id: ObjectID;\n  createdAt: Date;\n}\n\nexport interface TextNotificationDbObject extends BaseNotificationDbInterface {\n  content: string;\n}\n")),Object(r.b)("h4",{id:"uniondiscriminatorfield-string-on-union"},Object(r.b)("inlineCode",{parentName:"h4"},"@union(discriminatorField: String)")," (on ",Object(r.b)("inlineCode",{parentName:"h4"},"UNION"),")"),Object(r.b)("p",null,"This directive is similar to ",Object(r.b)("inlineCode",{parentName:"p"},"@abstractEntity"),", but for unions (that don't necessarily have any common fields).\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"discriminatorField")," argument is mandatory and will tell the generator what field name in the database determines what interface the target object is implementing."),Object(r.b)("p",null,"Given the following GraphQL schema:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'type A @entity {\n  fieldA: String @column\n}\n\ntype B @entity {\n  fieldB: String @column\n}\n\nunion PossibleType @union(discriminatorField: "entityType") = A | B\n')),Object(r.b)("p",null,"The output should be:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export interface ADbObject {\n  fieldA: string;\n}\n\nexport interface BDbObject {\n  fieldB: string;\n}\n\nexport type PossibleType = { entityType: string } & (ADbObject | BDbObject);\n")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("p",null,"Given the following GraphQL types:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type User @entity {\n  id: String! @id\n  username: String! @column\n  email: String! @column\n  profile: Profile! @embedded\n  friendsCount: Int! # this field won't get a generated MongoDB field\n  friends: [User]! @link\n}\n\ntype Profile @entity(embedded: true) {\n  name: String! @column\n  age: Int! @column\n}\n")),Object(r.b)("p",null,"The generated MongoDB models should look like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { ObjectID } from 'mongodb';\n\nexport interface UserDbObject {\n  _id: ObjectID;\n  username: string;\n  email: string;\n  profile: ProfileDbObject;\n  friends: ObjectID[];\n}\n\nexport interface ProfileDbObject {\n  name: string;\n  age: string;\n}\n")),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,Object(r.b)("h3",{parentName:"p"},"scalars (",Object(r.b)("inlineCode",{parentName:"h3"},"ScalarsMap"),")"),Object(r.b)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(r.b)("h4",{parentName:"p"},"Usage Example"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(r.b)("h3",{parentName:"p"},"namingConvention (",Object(r.b)("inlineCode",{parentName:"h3"},"NamingConvention"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"pascal-case#pascalCase"),")"),Object(r.b)("p",{parentName:"p"},"Allow you to override the naming convention of the output. You can either override all namings, or specify an object with specific custom naming convention per output. The format of the converter must be a valid ",Object(r.b)("inlineCode",{parentName:"p"},"module#method"),". Allowed values for specific output are: ",Object(r.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(r.b)("inlineCode",{parentName:"p"},"enumValues"),'. You can also use "keep" to keep all GraphQL names as-is. Additionally you can set ',Object(r.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behaviour, which is to preserves underscores."),Object(r.b)("h4",{parentName:"p"},"Usage Example: Override All Names"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(r.b)("h4",{parentName:"p"},"Usage Example: Upper-case enum values"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(r.b)("h4",{parentName:"p"},"Usage Example: Keep"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(r.b)("h4",{parentName:"p"},"Usage Example: Remove Underscores"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(r.b)("h3",{parentName:"p"},"typesPrefix (",Object(r.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},'""'),")"),Object(r.b)("p",{parentName:"p"},"Prefixes all the generated types."),Object(r.b)("h4",{parentName:"p"},'Usage Example: Add "I" Prefix'),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(r.b)("h3",{parentName:"p"},"skipTypename (",Object(r.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(r.b)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(r.b)("h4",{parentName:"p"},"Usage Example"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(r.b)("h3",{parentName:"p"},"nonOptionalTypename (",Object(r.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(r.b)("p",{parentName:"p"},"Automatically adds ",Object(r.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified in the selection set, and makes it non-optional"),Object(r.b)("h4",{parentName:"p"},"Usage Example"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n"))),Object(r.b)("p",null,Object(r.b)("h3",{parentName:"p"},"dbTypeSuffix (",Object(r.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"DbObject"),")"),Object(r.b)("p",{parentName:"p"},"Customize the suffix for the generated GraphQL ",Object(r.b)("inlineCode",{parentName:"p"},"type"),"s."),Object(r.b)("h4",{parentName:"p"},"Usage Example"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  dbTypeSuffix: MyType\n")),Object(r.b)("h3",{parentName:"p"},"dbInterfaceSuffix (",Object(r.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"DbObject"),")"),Object(r.b)("p",{parentName:"p"},"Customize the suffix for the generated GraphQL ",Object(r.b)("inlineCode",{parentName:"p"},"interface"),"s."),Object(r.b)("h4",{parentName:"p"},"Usage Example"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  dbInterfaceSuffix: MyInterface\n")),Object(r.b)("h3",{parentName:"p"},"objectIdType (",Object(r.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"mongodb#ObjectId"),")"),Object(r.b)("p",{parentName:"p"},"Customize the type of ",Object(r.b)("inlineCode",{parentName:"p"},"_id")," fields. You can either specify a type name, or specify ",Object(r.b)("inlineCode",{parentName:"p"},"module#type"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Example"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  objectIdType: ./my-models.ts#MyIdType\n")),Object(r.b)("h3",{parentName:"p"},"idFieldName (",Object(r.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"_id"),")"),Object(r.b)("p",{parentName:"p"},"Customize the name of the id field generated after using ",Object(r.b)("inlineCode",{parentName:"p"},"@id")," directive over a GraphQL field."),Object(r.b)("h4",{parentName:"p"},"Usage Example"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  idFieldName: id\n")),Object(r.b)("h3",{parentName:"p"},"enumsAsString (",Object(r.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"true"),")"),Object(r.b)("p",{parentName:"p"},"Replaces generated ",Object(r.b)("inlineCode",{parentName:"p"},"enum")," values with ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Example"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  enumsAsString: false\n")),Object(r.b)("h3",{parentName:"p"},"avoidOptionals (",Object(r.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(r.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(r.b)("p",{parentName:"p"},"This will cause the generator to avoid using TypeScript optionals (",Object(r.b)("inlineCode",{parentName:"p"},"?"),"), so the following definition: ",Object(r.b)("inlineCode",{parentName:"p"},"type A { myField: String }")," will output ",Object(r.b)("inlineCode",{parentName:"p"},"myField: Maybe<string>")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"myField?: Maybe<string>"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Example"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-mongodb\n config:\n   avoidOptionals: true\n"))))}b.isMDXComponent=!0},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},s=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=b(n),m=a,u=s["".concat(o,".").concat(m)]||s[m]||d[m]||r;return n?i.a.createElement(u,p({ref:t},l,{components:n})):i.a.createElement(u,p({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);