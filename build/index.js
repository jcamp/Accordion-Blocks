!function(e){var t={};function n(c){if(t[c])return t[c].exports;var o=t[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(c,o,function(t){return e[t]}.bind(null,o));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(0),l=wp.i18n.__,a=wp.components,i=a.SVG,s=a.Path,b={title:l("Accordion Item","pb"),icon:Object(r.createElement)(i,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},Object(r.createElement)(s,{d:"M16.93,8.93a1,1,0,0,1-.7-.29L12,4.41,7.9,8.51A1,1,0,0,1,6.49,7.1L12,1.59l5.64,5.64a1,1,0,0,1,0,1.41A1,1,0,0,1,16.93,8.93Z"}),Object(r.createElement)(s,{d:"M12.07,22.35,6.42,16.71a1,1,0,0,1,1.42-1.42l4.23,4.23,4.09-4.1a1,1,0,0,1,1.42,1.42Z"}),Object(r.createElement)(s,{d:"M17.93,13H5.82a1,1,0,0,1,0-2H17.93a1,1,0,0,1,0,2Z"})),category:"formatting",supports:{anchor:!0},attributes:{title:{type:"array",source:"children",selector:".c-accordion__title"},initiallyOpen:{type:"boolean",default:!1},clickToClose:{type:"boolean",default:!0},autoClose:{type:"boolean",default:!0},titleTag:{type:"string",default:"h2"},scroll:{type:"boolean",default:!1},scrollOffset:{type:"number",default:0},uuid:{type:"number"}}},h=wp.blocks.createBlock,u={from:[{type:"block",blocks:["core/heading"],transform:function(e){return h("pb/accordion-item",{title:e.content,titleTag:"h"+(e.level<=4?e.level:2)})}},{type:"block",isMultiBlock:!0,blocks:["core/paragraph"],transform:function(e){return h("pb/accordion-item",{},e.map((function(e){return h("core/paragraph",{content:e.content})})))}}],to:[{type:"block",blocks:["core/paragraph"],transform:function(e,t){var n=t.map((function(e){return h(e.name,e.attributes)})),c="button"!==e.titleTag?parseInt(e.titleTag.replace("h","")):2;return n.splice(0,0,h("core/heading",{content:e.title,anchor:e.anchor,className:e.className,level:c})),n}}]},p=wp.components,m=p.SVG,d=p.Path;function f(e){var t;switch(e){case"h1":t=Object(r.createElement)(m,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)(d,{d:"M12.09,15.88h-2v-4H6.45v4h-2V6.6h2v3.64h3.68V6.6h2Z"}),Object(r.createElement)(d,{d:"M18.63,15.88h-2V10.51l0-.88,0-1A7.37,7.37,0,0,1,16,9.3L15,10.16,14,9,17,6.6h1.61Z"}));break;case"h2":t=Object(r.createElement)(m,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)(d,{d:"M12.09,15.88h-2v-4H6.45v4h-2V6.6h2v3.64h3.68V6.6h2Z"}),Object(r.createElement)(d,{d:"M20.27,15.88H13.78V14.52l2.33-2.36c.69-.71,1.14-1.2,1.36-1.47a3,3,0,0,0,.45-.76,1.78,1.78,0,0,0,.14-.72,1,1,0,0,0-.31-.83,1.13,1.13,0,0,0-.82-.28,2.45,2.45,0,0,0-1,.25,5.4,5.4,0,0,0-1.05.71L13.76,7.79A6.92,6.92,0,0,1,14.89,7a4,4,0,0,1,1-.37,4.82,4.82,0,0,1,1.19-.13,3.59,3.59,0,0,1,1.54.31,2.5,2.5,0,0,1,1,.89A2.33,2.33,0,0,1,20,9a3.16,3.16,0,0,1-.22,1.2,4.61,4.61,0,0,1-.7,1.15A16.65,16.65,0,0,1,17.42,13l-1.19,1.12v.09h4Z"}));break;case"h3":t=Object(r.createElement)(m,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)(d,{d:"M12.09,15.88h-2v-4H6.45v4h-2V6.6h2v3.64h3.68V6.6h2Z"}),Object(r.createElement)(d,{d:"M19.91,8.68a2.18,2.18,0,0,1-.53,1.47A2.68,2.68,0,0,1,17.9,11v0a3,3,0,0,1,1.71.68,1.93,1.93,0,0,1,.57,1.47,2.47,2.47,0,0,1-1,2.08,4.45,4.45,0,0,1-2.77.75,6.81,6.81,0,0,1-2.68-.5V13.84a5.76,5.76,0,0,0,1.19.44,5.12,5.12,0,0,0,1.28.17,2.47,2.47,0,0,0,1.43-.33,1.21,1.21,0,0,0,.47-1.06,1,1,0,0,0-.54-.93,4,4,0,0,0-1.7-.27h-.7v-1.5h.71a3.45,3.45,0,0,0,1.58-.28,1,1,0,0,0,.5-1c0-.71-.44-1.06-1.32-1.06a2.8,2.8,0,0,0-.93.16,4.24,4.24,0,0,0-1.05.52l-.91-1.35a5.06,5.06,0,0,1,3-.91,3.93,3.93,0,0,1,2.28.58A1.89,1.89,0,0,1,19.91,8.68Z"}));break;case"h4":t=Object(r.createElement)(m,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)(d,{d:"M12.09,15.88h-2v-4H6.45v4h-2V6.6h2v3.64h3.68V6.6h2Z"}),Object(r.createElement)(d,{d:"M20.48,14H19.36v1.92H17.45V14h-4V12.59l4.06-6h1.81v5.83h1.12Zm-3-1.53V10.86q0-.39,0-1.14c0-.5,0-.79.05-.87h-.05a7.85,7.85,0,0,1-.57,1l-1.7,2.57Z"}));break;case"h5":t=Object(r.createElement)(m,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)(d,{d:"M12.09,15.88h-2v-4H6.45v4h-2V6.6h2v3.64h3.68V6.6h2Z"}),Object(r.createElement)(d,{d:"M17.16,10a3,3,0,0,1,2.14.76,2.71,2.71,0,0,1,.8,2.07,3,3,0,0,1-1,2.39A4,4,0,0,1,16.4,16a5.42,5.42,0,0,1-2.5-.5v-1.7a5.3,5.3,0,0,0,1.17.44,5.18,5.18,0,0,0,1.26.16q1.8,0,1.8-1.47c0-.93-.62-1.4-1.86-1.4a5.14,5.14,0,0,0-.75.06q-.4.08-.66.15l-.78-.42.35-4.73h5V8.26H16.15L16,10.08l.22,0A4.35,4.35,0,0,1,17.16,10Z"}));break;case"h6":t=Object(r.createElement)(m,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)(d,{d:"M12.09,15.88h-2v-4H6.45v4h-2V6.6h2v3.64h3.68V6.6h2Z"}),Object(r.createElement)(d,{d:"M13.72,11.94a6.1,6.1,0,0,1,1.17-4.1,4.33,4.33,0,0,1,3.48-1.35,5.86,5.86,0,0,1,1.25.1V8.15A5.4,5.4,0,0,0,18.5,8a3.93,3.93,0,0,0-1.65.3,2.13,2.13,0,0,0-1,.9,4.23,4.23,0,0,0-.38,1.7h.09a2.15,2.15,0,0,1,2-1.08,2.49,2.49,0,0,1,1.95.78,3.1,3.1,0,0,1,.7,2.16,3.23,3.23,0,0,1-.84,2.35,3.05,3.05,0,0,1-2.32.87,3.28,3.28,0,0,1-1.79-.48,3.06,3.06,0,0,1-1.18-1.39A5.23,5.23,0,0,1,13.72,11.94Zm3.35,2.5A1.18,1.18,0,0,0,18,14a1.94,1.94,0,0,0,.33-1.21,1.66,1.66,0,0,0-.31-1.07,1.15,1.15,0,0,0-.95-.39,1.44,1.44,0,0,0-1,.39,1.2,1.2,0,0,0-.42.9,2,2,0,0,0,.4,1.28A1.2,1.2,0,0,0,17.07,14.44Z"}));break;case"p":t=Object(r.createElement)(m,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)(d,{d:"M15.5,9.49a2.87,2.87,0,0,1-.94,2.3,4,4,0,0,1-2.66.79h-.85v3.3h-2V6.6h3a3.92,3.92,0,0,1,2.57.73A2.65,2.65,0,0,1,15.5,9.49ZM11.05,11h.65a2.15,2.15,0,0,0,1.36-.36,1.27,1.27,0,0,0,.45-1,1.29,1.29,0,0,0-.38-1A1.75,1.75,0,0,0,12,8.21h-.9Z"}));break;case"div":t=Object(r.createElement)(m,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)(d,{d:"M9.68,11.15a4.56,4.56,0,0,1-1.3,3.51,5.34,5.34,0,0,1-3.77,1.22H2V6.6H4.89A4.89,4.89,0,0,1,8.42,7.8,4.41,4.41,0,0,1,9.68,11.15Zm-2,0c0-2-.88-3-2.64-3H4v6h.84C6.69,14.25,7.64,13.24,7.64,11.2Z"}),Object(r.createElement)(d,{d:"M11.6,15.88V6.6h2v9.28Z"}),Object(r.createElement)(d,{d:"M21.2,6.6h2L20,15.88H17.89L14.74,6.6h2l1.74,5.52q.15.49.3,1.14c.11.44.17.74.2.91a15.19,15.19,0,0,1,.47-2.05Z"}));break;case"button":t=Object(r.createElement)(m,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)(d,{d:"M20,5.53H4a3,3,0,0,0-3,3v6.94a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V8.53A3,3,0,0,0,20,5.53Zm1.5,9.28A2.17,2.17,0,0,1,19.39,17H4.61A2.17,2.17,0,0,1,2.5,14.81V9.25A2.17,2.17,0,0,1,4.61,7H19.39A2.17,2.17,0,0,1,21.5,9.25Z"}),Object(r.createElement)(d,{d:"M4.82,9.28H6.51a3.26,3.26,0,0,1,1.68.33,1.14,1.14,0,0,1,.52,1.05,1.35,1.35,0,0,1-.22.8.92.92,0,0,1-.61.37v0a1.21,1.21,0,0,1,.74.43,1.35,1.35,0,0,1,.23.84,1.37,1.37,0,0,1-.54,1.16,2.29,2.29,0,0,1-1.46.42h-2ZM6,11.43h.67a1.21,1.21,0,0,0,.68-.14.55.55,0,0,0,.21-.48.49.49,0,0,0-.23-.45,1.45,1.45,0,0,0-.72-.14H6Zm0,.92v1.42h.75a1.16,1.16,0,0,0,.71-.18A.69.69,0,0,0,7.65,13c0-.45-.32-.68-1-.68Z"}),Object(r.createElement)(d,{d:"M12,14.72H10.88V10.24H9.41v-1h4.11v1H12Z"}),Object(r.createElement)(d,{d:"M19.18,14.72H17.72L15.35,10.6h0c0,.73.08,1.25.08,1.56v2.56h-1V9.28h1.46l2.36,4.07h0q-.06-1-.06-1.5V9.28h1Z"}))}return t}var v=wp.i18n.__,O=wp.element.Fragment,w=wp.blockEditor,j=w.BlockControls,g=w.InspectorControls,E=w.RichText,y=w.InnerBlocks,k=wp.components,x=k.PanelBody,M=k.Toolbar,A=k.ToggleControl,V=k.RangeControl,Z=function(e){var t=e.className,n=e.attributes,c=e.setAttributes,o=n.title,l=n.initiallyOpen,a=n.clickToClose,i=n.autoClose,s=n.titleTag,b=n.scroll,h=n.scrollOffset;n.uuid||c({uuid:Math.floor(1e5*Math.random()+1)});var u=["c-accordion__title"];"button"===s&&u.push("c-accordion__title--button");return Object(r.createElement)(O,null,Object(r.createElement)(j,null,Object(r.createElement)(M,{controls:["h1","h2","h3","h4","button"].map((function(e){return{icon:f(e),title:e.toUpperCase(),isActive:s===e,onClick:function(){return c({titleTag:e})}}}))})),Object(r.createElement)(g,null,Object(r.createElement)(x,{title:v("Accordion Item Settings","pb")},Object(r.createElement)(A,{label:v("Open By Default","pb"),help:v(l?"This accordion item will be open when the page loads.":"This accordion item will be closed when the page loads.","pb"),checked:l,onChange:function(e){return c({initiallyOpen:e})}}),Object(r.createElement)(A,{label:v("Click to Close","pb"),help:v(a?"When open, this accordion item title can be clicked again to close it.":"Once opened, this accordion item cannot be closed by clicking the title.","pb"),checked:a,onChange:function(e){return c({clickToClose:e})}}),Object(r.createElement)(A,{label:v("Auto Close","pb"),help:v(i?"This accordion item will close when opening another item.":"This accordion item will remain open when opening another item.","pb"),checked:i,onChange:function(e){return c({autoClose:e})}}),Object(r.createElement)(A,{label:v("Scroll to Accordion Item","pb"),help:v(b?"The page will scroll to the accordion item title when it is opened.":"The page will not scroll when opening accordion items.","pb"),checked:b,onChange:function(e){return c({scroll:e})}}),Object(r.createElement)(V,{label:v("Scroll Pixel Offset","pb"),value:h,onChange:function(e){return c({scrollOffset:e||0})},min:0,max:1e3,help:v("A pixel offset for the final scroll position.","pb")}))),Object(r.createElement)("div",{className:[].concat(["c-accordion__item","js-accordion-item"],[t]).join(" ")},Object(r.createElement)(E,{className:u.join(" "),tagName:s,allowedFormats:["bold","italic"],placeholder:v("Accordion item title...","pb"),value:o,onChange:function(e){return c({title:e})}}),Object(r.createElement)("div",{className:"c-accordion__content"},Object(r.createElement)(y,null))))};function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}var C=wp.blocks.registerBlockType,H=wp.blockEditor,T=H.InnerBlocks,B=H.RichText;C("pb/accordion-item",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},b,{transforms:u,edit:Z,save:function(e){var t=e.attributes,n=t.className,c=t.title,o=t.initiallyOpen,l=t.clickToClose,a=t.autoClose,i=t.titleTag,s=t.scroll,b=t.scrollOffset,h=t.uuid,u=["c-accordion__item","js-accordion-item","no-js"],p=["c-accordion__title","js-accordion-controller"],m={};return"button"===i&&p.push("c-accordion__title--button"),o?u.push("is-open"):m.display="none",Object(r.createElement)("div",{className:[].concat(u,[n]).join(" "),"data-initially-open":o,"data-click-to-close":l,"data-auto-close":a,"data-scroll":s,"data-scroll-offset":b},Object(r.createElement)(B.Content,{id:"at-"+h,className:p.join(" "),tagName:i,tabIndex:0,role:"button","aria-controls":"ac-"+h,value:c}),Object(r.createElement)("div",{id:"ac-"+h,className:"c-accordion__content",style:m},Object(r.createElement)(T.Content,null)))}}))}]);