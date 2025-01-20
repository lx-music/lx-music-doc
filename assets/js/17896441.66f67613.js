"use strict";(self.webpackChunklx_music_doc=self.webpackChunklx_music_doc||[]).push([["7048"],{6401:function(e,t,n){n.r(t),n.d(t,{default:function(){return eo}});var r=n("5893"),a=n("7294"),o=n("5231"),i=n("1934"),s=a.createContext(null);function l(e){var t,n=e.children,o=(t=e.content,(0,a.useMemo)(function(){return{metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,contentTitle:t.contentTitle,toc:t.toc}},[t]));return(0,r.jsx)(s.Provider,{value:o,children:n})}function c(){var e=(0,a.useContext)(s);if(null===e)throw new i.i6("DocProvider");return e}function d(){var e,t=c(),n=t.metadata,a=t.frontMatter,i=t.assets;return(0,r.jsx)(o.d,{title:n.title,description:n.description,keywords:a.keywords,image:null!==(e=i.image)&&void 0!==e?e:a.image})}var u=n("7026"),b=n("7550"),p=n("7670"),m=n("3367");function h(e){var t=e.permalink,n=e.title,a=e.subLabel,o=e.isNext;return(0,r.jsxs)(m.Z,{className:(0,u.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}function j(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}function f(e){var t=e.previous,n=e.next;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,r.jsx)(h,j(v({},t),{subLabel:(0,r.jsx)(p.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})})),n&&(0,r.jsx)(h,j(v({},n),{subLabel:(0,r.jsx)(p.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0}))]})}function g(){var e=c().metadata;return(0,r.jsx)(f,{previous:e.previous,next:e.next})}var x=n("7262"),O=n("8854"),y=n("6171"),P=n("7137"),w=n("9873"),_={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return(0,r.jsx)(p.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,r.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return(0,r.jsx)(p.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,r.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function k(e){var t=_[e.versionMetadata.banner];return(0,r.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}({},e))}function N(e){var t=e.versionLabel,n=e.to,a=e.onClick;return(0,r.jsx)(p.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,r.jsx)("b",{children:(0,r.jsx)(m.Z,{to:n,onClick:a,children:(0,r.jsx)(p.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function C(e){var t=e.className,n=e.versionMetadata,a=(0,x.Z)().siteConfig.title,o=(0,O.gA)({failfast:!0}).pluginId,i=(0,P.J)(o).savePreferredVersionName,s=(0,O.Jo)(o),l=s.latestDocSuggestion,c=s.latestVersionSuggestion,d=null!=l?l:c.docs.find(function(e){return e.id===c.mainDocId});return(0,r.jsxs)("div",{className:(0,u.Z)(t,y.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,r.jsx)("div",{children:(0,r.jsx)(k,{siteTitle:a,versionMetadata:n})}),(0,r.jsx)("div",{className:"margin-top--md",children:(0,r.jsx)(N,{versionLabel:c.label,to:d.path,onClick:function(){return i(c.name)}})})]})}function L(e){var t=e.className,n=(0,w.E)();return n.banner?(0,r.jsx)(C,{className:t,versionMetadata:n}):null}function Z(e){var t=e.className,n=(0,w.E)();return n.badge?(0,r.jsx)("span",{className:(0,u.Z)(t,y.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,r.jsx)(p.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}var T={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function S(e){var t=e.permalink,n=e.label,a=e.count,o=e.description;return(0,r.jsxs)(m.Z,{href:t,title:o,className:(0,u.Z)(T.tag,a?T.tagWithCount:T.tagRegular),children:[n,a&&(0,r.jsx)("span",{children:a})]})}function D(e){var t=e.tags;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(p.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,u.Z)("tags_jXut","padding--none","margin-left--sm"),children:t.map(function(e){return(0,r.jsx)("li",{className:"tag_QGVx",children:(0,r.jsx)(S,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}({},e))},e.permalink)})})]})}var E=n("8042");function M(){var e=c().metadata,t=e.editUrl,n=e.lastUpdatedAt,a=e.lastUpdatedBy,o=e.tags,i=o.length>0,s=!!(t||n||a);return i||s?(0,r.jsxs)("footer",{className:(0,u.Z)(y.k.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,r.jsx)("div",{className:(0,u.Z)("row margin-top--sm",y.k.docs.docFooterTagsRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(D,{tags:o})})}),s&&(0,r.jsx)(E.Z,{className:(0,u.Z)("margin-top--sm",y.k.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a})]}):null}var I=n("6850"),B=n("6643"),V={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function A(e){var t,n,a=e.collapsed,o=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["collapsed"]);return(0,r.jsx)("button",(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}({type:"button"},o),n=n={className:(0,u.Z)("clean-btn",V.tocCollapsibleButton,!a&&V.tocCollapsibleButtonExpanded,o.className),children:(0,r.jsx)(p.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}),t))}var H={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function F(e){var t=e.toc,n=e.className,a=e.minHeadingLevel,o=e.maxHeadingLevel,i=(0,I.u)({initialState:!0}),s=i.collapsed,l=i.toggleCollapsed;return(0,r.jsxs)("div",{className:(0,u.Z)(H.tocCollapsible,!s&&H.tocCollapsibleExpanded,n),children:[(0,r.jsx)(A,{collapsed:s,onClick:l}),(0,r.jsx)(I.z,{lazy:!0,className:H.tocCollapsibleContent,collapsed:s,children:(0,r.jsx)(B.Z,{toc:t,minHeadingLevel:a,maxHeadingLevel:o})})]})}function R(){var e=c(),t=e.toc,n=e.frontMatter;return(0,r.jsx)(F,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,u.Z)(y.k.docs.docTocMobile,"tocMobile_ITEo")})}var U=n("9521");function z(){var e=c(),t=e.toc,n=e.frontMatter;return(0,r.jsx)(U.Z,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:y.k.docs.docTocDesktop})}var G=n("6055"),W=n("4719");function J(e){var t,n,a,o,i=e.children,s=(n=(t=c()).metadata,a=t.frontMatter,o=t.contentTitle,a.hide_title||void 0!==o?null:n.title);return(0,r.jsxs)("div",{className:(0,u.Z)(y.k.docs.docMarkdown,"markdown"),children:[s&&(0,r.jsx)("header",{children:(0,r.jsx)(G.Z,{as:"h1",children:s})}),(0,r.jsx)(W.Z,{children:i})]})}var Q=n("5771"),X=n("3868"),Y=n("3187");function q(e){var t,n;return(0,r.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}({viewBox:"0 0 24 24"},e),n=n={children:(0,r.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}),t))}function K(){var e=(0,Y.ZP)("/");return(0,r.jsx)("li",{className:"breadcrumbs__item",children:(0,r.jsx)(m.Z,{"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,r.jsx)(q,{className:"breadcrumbHomeIcon_YNFT"})})})}function $(e){var t=e.children,n=e.href,a=e.isLast,o="breadcrumbs__link";return a?(0,r.jsx)("span",{className:o,itemProp:"name",children:t}):n?(0,r.jsx)(m.Z,{className:o,href:n,itemProp:"item",children:(0,r.jsx)("span",{itemProp:"name",children:t})}):(0,r.jsx)("span",{className:o,children:t})}function ee(e){var t,n,a=e.children,o=e.active,i=e.index,s=e.addMicrodata;return(0,r.jsxs)("li",(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"}),n=n={className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":o}),children:[a,(0,r.jsx)("meta",{itemProp:"position",content:String(i+1)})]},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}),t))}function et(){var e=(0,Q.s1)(),t=(0,X.Ns)();return e?(0,r.jsx)("nav",{className:(0,u.Z)(y.k.docs.docBreadcrumbs,"breadcrumbsContainer_Z_bl"),"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,r.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,r.jsx)(K,{}),e.map(function(t,n){var a=n===e.length-1,o="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,r.jsx)(ee,{active:a,index:n,addMicrodata:!!o,children:(0,r.jsx)($,{href:o,isLast:a,children:t.label})},n)})]})}):null}var en=n("7624"),er={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function ea(e){var t,n,a,o,i,s,l=e.children,d=(n=(t=c()).frontMatter,a=t.toc,o=(0,b.i)(),s=!(i=n.hide_table_of_contents)&&a.length>0,{hidden:i,mobile:s?(0,r.jsx)(R,{}):void 0,desktop:s&&("desktop"===o||"ssr"===o)?(0,r.jsx)(z,{}):void 0}),p=c().metadata;return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:(0,u.Z)("col",!d.hidden&&er.docItemCol),children:[(0,r.jsx)(en.Z,{metadata:p}),(0,r.jsx)(L,{}),(0,r.jsxs)("div",{className:er.docItemContainer,children:[(0,r.jsxs)("article",{children:[(0,r.jsx)(et,{}),(0,r.jsx)(Z,{}),d.mobile,(0,r.jsx)(J,{children:l}),(0,r.jsx)(M,{})]}),(0,r.jsx)(g,{})]})]}),d.desktop&&(0,r.jsx)("div",{className:"col col--3",children:d.desktop})]})}function eo(e){var t="docs-doc-id-".concat(e.content.metadata.id),n=e.content;return(0,r.jsx)(l,{content:e.content,children:(0,r.jsxs)(o.FG,{className:t,children:[(0,r.jsx)(d,{}),(0,r.jsx)(ea,{children:(0,r.jsx)(n,{})})]})})}}}]);