!function(e){var t={};function c(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=t,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c(c.s=10)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){!function(){e.exports=this.regeneratorRuntime}()},function(e,t){!function(){e.exports=this.wp.apiFetch}()},function(e,t){e.exports=function(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}},function(e,t){function c(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=c=function(e){return typeof e}:e.exports=c=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(t)}e.exports=c},function(e,t,c){"use strict";c.r(t);var n=c(6),o=c.n(n),l=c(5),a=c(7),r=c.n(a),i={defaults:{initiallyOpen:!1,clickToClose:!0,autoClose:!0,scroll:!1,scrollOffset:0}},s={setDefaults:function(e){return{type:"SET_DEFAULTS",defaults:e}},saveDefaultSettings:function(e){return{type:"SAVE_DEFAULTS",defaults:e}},fetchFromAPI:function(e){return{type:"FETCH_FROM_API",path:e}}};Object(l.registerStore)("accordion-blocks",{reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DEFAULTS":return Object.assign({},e,{defaults:t.defaults});case"SAVE_DEFAULTS":return r()({path:"accordion-blocks/v1/defaults",data:t.defaults,method:"POST"}).then((function(e){})).catch((function(e){})),Object.assign({},e,{defaults:t.defaults});default:return e}},actions:s,selectors:{getDefaultSettings:function(e){return e.defaults}},controls:{FETCH_FROM_API:function(e){return r()({path:e.path})}},resolvers:{getDefaultSettings:o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/accordion-blocks/v1/defaults",e.next=3,s.fetchFromAPI("/accordion-blocks/v1/defaults");case 3:return t=e.sent,e.abrupt("return",s.setDefaults(t));case 5:case"end":return e.stop()}}),e)}))}});var u=c(8),b=c.n(u),h=c(0),p=c(4),f=c(3),d=c(2),m=c(1),O={title:Object(d.__)("Accordion Item","pb"),icon:Object(h.createElement)(m.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},Object(h.createElement)(m.Path,{d:"M16.93,8.93a1,1,0,0,1-.7-.29L12,4.41,7.9,8.51A1,1,0,0,1,6.49,7.1L12,1.59l5.64,5.64a1,1,0,0,1,0,1.41A1,1,0,0,1,16.93,8.93Z"}),Object(h.createElement)(m.Path,{d:"M12.07,22.35,6.42,16.71a1,1,0,0,1,1.42-1.42l4.23,4.23,4.09-4.1a1,1,0,0,1,1.42,1.42Z"}),Object(h.createElement)(m.Path,{d:"M17.93,13H5.82a1,1,0,0,1,0-2H17.93a1,1,0,0,1,0,2Z"})),category:"formatting",supports:{anchor:!0},attributes:{title:{type:"array",source:"children",selector:".c-accordion__title"},initiallyOpen:{type:"boolean",default:!1},clickToClose:{type:"boolean",default:!0},autoClose:{type:"boolean",default:!0},titleTag:{type:"string",default:"h2"},scroll:{type:"boolean",default:!1},scrollOffset:{type:"number",default:0},uuid:{type:"number"}}},j={from:[{type:"block",blocks:["core/heading"],transform:function(e){return Object(p.createBlock)("pb/accordion-item",{title:e.content,titleTag:"h"+(e.level<=4?e.level:2)})}},{type:"block",isMultiBlock:!0,blocks:["core/paragraph"],transform:function(e){return Object(p.createBlock)("pb/accordion-item",{},e.map((function(e){return Object(p.createBlock)("core/paragraph",{content:e.content})})))}}],to:[{type:"block",blocks:["core/paragraph"],transform:function(e,t){var c=t.map((function(e){return Object(p.createBlock)(e.name,e.attributes)})),n="button"!==e.titleTag?parseInt(e.titleTag.replace("h","")):2;return c.splice(0,0,Object(p.createBlock)("core/heading",{content:e.title,anchor:e.anchor,className:e.className,level:n})),c}}]};function v(e){var t;switch(e){case"h1":t=Object(h.createElement)(m.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(h.createElement)(m.Path,{d:"M12.09,15.88h-2v-4H6.45v4h-2V6.6h2v3.64h3.68V6.6h2Z"}),Object(h.createElement)(m.Path,{d:"M18.63,15.88h-2V10.51l0-.88,0-1A7.37,7.37,0,0,1,16,9.3L15,10.16,14,9,17,6.6h1.61Z"}));break;case"h2":t=Object(h.createElement)(m.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(h.createElement)(m.Path,{d:"M12.09,15.88h-2v-4H6.45v4h-2V6.6h2v3.64h3.68V6.6h2Z"}),Object(h.createElement)(m.Path,{d:"M20.27,15.88H13.78V14.52l2.33-2.36c.69-.71,1.14-1.2,1.36-1.47a3,3,0,0,0,.45-.76,1.78,1.78,0,0,0,.14-.72,1,1,0,0,0-.31-.83,1.13,1.13,0,0,0-.82-.28,2.45,2.45,0,0,0-1,.25,5.4,5.4,0,0,0-1.05.71L13.76,7.79A6.92,6.92,0,0,1,14.89,7a4,4,0,0,1,1-.37,4.82,4.82,0,0,1,1.19-.13,3.59,3.59,0,0,1,1.54.31,2.5,2.5,0,0,1,1,.89A2.33,2.33,0,0,1,20,9a3.16,3.16,0,0,1-.22,1.2,4.61,4.61,0,0,1-.7,1.15A16.65,16.65,0,0,1,17.42,13l-1.19,1.12v.09h4Z"}));break;case"h3":t=Object(h.createElement)(m.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(h.createElement)(m.Path,{d:"M12.09,15.88h-2v-4H6.45v4h-2V6.6h2v3.64h3.68V6.6h2Z"}),Object(h.createElement)(m.Path,{d:"M19.91,8.68a2.18,2.18,0,0,1-.53,1.47A2.68,2.68,0,0,1,17.9,11v0a3,3,0,0,1,1.71.68,1.93,1.93,0,0,1,.57,1.47,2.47,2.47,0,0,1-1,2.08,4.45,4.45,0,0,1-2.77.75,6.81,6.81,0,0,1-2.68-.5V13.84a5.76,5.76,0,0,0,1.19.44,5.12,5.12,0,0,0,1.28.17,2.47,2.47,0,0,0,1.43-.33,1.21,1.21,0,0,0,.47-1.06,1,1,0,0,0-.54-.93,4,4,0,0,0-1.7-.27h-.7v-1.5h.71a3.45,3.45,0,0,0,1.58-.28,1,1,0,0,0,.5-1c0-.71-.44-1.06-1.32-1.06a2.8,2.8,0,0,0-.93.16,4.24,4.24,0,0,0-1.05.52l-.91-1.35a5.06,5.06,0,0,1,3-.91,3.93,3.93,0,0,1,2.28.58A1.89,1.89,0,0,1,19.91,8.68Z"}));break;case"h4":t=Object(h.createElement)(m.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(h.createElement)(m.Path,{d:"M12.09,15.88h-2v-4H6.45v4h-2V6.6h2v3.64h3.68V6.6h2Z"}),Object(h.createElement)(m.Path,{d:"M20.48,14H19.36v1.92H17.45V14h-4V12.59l4.06-6h1.81v5.83h1.12Zm-3-1.53V10.86q0-.39,0-1.14c0-.5,0-.79.05-.87h-.05a7.85,7.85,0,0,1-.57,1l-1.7,2.57Z"}));break;case"h5":t=Object(h.createElement)(m.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(h.createElement)(m.Path,{d:"M12.09,15.88h-2v-4H6.45v4h-2V6.6h2v3.64h3.68V6.6h2Z"}),Object(h.createElement)(m.Path,{d:"M17.16,10a3,3,0,0,1,2.14.76,2.71,2.71,0,0,1,.8,2.07,3,3,0,0,1-1,2.39A4,4,0,0,1,16.4,16a5.42,5.42,0,0,1-2.5-.5v-1.7a5.3,5.3,0,0,0,1.17.44,5.18,5.18,0,0,0,1.26.16q1.8,0,1.8-1.47c0-.93-.62-1.4-1.86-1.4a5.14,5.14,0,0,0-.75.06q-.4.08-.66.15l-.78-.42.35-4.73h5V8.26H16.15L16,10.08l.22,0A4.35,4.35,0,0,1,17.16,10Z"}));break;case"h6":t=Object(h.createElement)(m.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(h.createElement)(m.Path,{d:"M12.09,15.88h-2v-4H6.45v4h-2V6.6h2v3.64h3.68V6.6h2Z"}),Object(h.createElement)(m.Path,{d:"M13.72,11.94a6.1,6.1,0,0,1,1.17-4.1,4.33,4.33,0,0,1,3.48-1.35,5.86,5.86,0,0,1,1.25.1V8.15A5.4,5.4,0,0,0,18.5,8a3.93,3.93,0,0,0-1.65.3,2.13,2.13,0,0,0-1,.9,4.23,4.23,0,0,0-.38,1.7h.09a2.15,2.15,0,0,1,2-1.08,2.49,2.49,0,0,1,1.95.78,3.1,3.1,0,0,1,.7,2.16,3.23,3.23,0,0,1-.84,2.35,3.05,3.05,0,0,1-2.32.87,3.28,3.28,0,0,1-1.79-.48,3.06,3.06,0,0,1-1.18-1.39A5.23,5.23,0,0,1,13.72,11.94Zm3.35,2.5A1.18,1.18,0,0,0,18,14a1.94,1.94,0,0,0,.33-1.21,1.66,1.66,0,0,0-.31-1.07,1.15,1.15,0,0,0-.95-.39,1.44,1.44,0,0,0-1,.39,1.2,1.2,0,0,0-.42.9,2,2,0,0,0,.4,1.28A1.2,1.2,0,0,0,17.07,14.44Z"}));break;case"p":t=Object(h.createElement)(m.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(h.createElement)(m.Path,{d:"M15.5,9.49a2.87,2.87,0,0,1-.94,2.3,4,4,0,0,1-2.66.79h-.85v3.3h-2V6.6h3a3.92,3.92,0,0,1,2.57.73A2.65,2.65,0,0,1,15.5,9.49ZM11.05,11h.65a2.15,2.15,0,0,0,1.36-.36,1.27,1.27,0,0,0,.45-1,1.29,1.29,0,0,0-.38-1A1.75,1.75,0,0,0,12,8.21h-.9Z"}));break;case"div":t=Object(h.createElement)(m.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(h.createElement)(m.Path,{d:"M9.68,11.15a4.56,4.56,0,0,1-1.3,3.51,5.34,5.34,0,0,1-3.77,1.22H2V6.6H4.89A4.89,4.89,0,0,1,8.42,7.8,4.41,4.41,0,0,1,9.68,11.15Zm-2,0c0-2-.88-3-2.64-3H4v6h.84C6.69,14.25,7.64,13.24,7.64,11.2Z"}),Object(h.createElement)(m.Path,{d:"M11.6,15.88V6.6h2v9.28Z"}),Object(h.createElement)(m.Path,{d:"M21.2,6.6h2L20,15.88H17.89L14.74,6.6h2l1.74,5.52q.15.49.3,1.14c.11.44.17.74.2.91a15.19,15.19,0,0,1,.47-2.05Z"}));break;case"button":t=Object(h.createElement)(m.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(h.createElement)(m.Path,{d:"M20,5.53H4a3,3,0,0,0-3,3v6.94a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V8.53A3,3,0,0,0,20,5.53Zm1.5,9.28A2.17,2.17,0,0,1,19.39,17H4.61A2.17,2.17,0,0,1,2.5,14.81V9.25A2.17,2.17,0,0,1,4.61,7H19.39A2.17,2.17,0,0,1,21.5,9.25Z"}),Object(h.createElement)(m.Path,{d:"M4.82,9.28H6.51a3.26,3.26,0,0,1,1.68.33,1.14,1.14,0,0,1,.52,1.05,1.35,1.35,0,0,1-.22.8.92.92,0,0,1-.61.37v0a1.21,1.21,0,0,1,.74.43,1.35,1.35,0,0,1,.23.84,1.37,1.37,0,0,1-.54,1.16,2.29,2.29,0,0,1-1.46.42h-2ZM6,11.43h.67a1.21,1.21,0,0,0,.68-.14.55.55,0,0,0,.21-.48.49.49,0,0,0-.23-.45,1.45,1.45,0,0,0-.72-.14H6Zm0,.92v1.42h.75a1.16,1.16,0,0,0,.71-.18A.69.69,0,0,0,7.65,13c0-.45-.32-.68-1-.68Z"}),Object(h.createElement)(m.Path,{d:"M12,14.72H10.88V10.24H9.41v-1h4.11v1H12Z"}),Object(h.createElement)(m.Path,{d:"M19.18,14.72H17.72L15.35,10.6h0c0,.73.08,1.25.08,1.56v2.56h-1V9.28h1.46l2.36,4.07h0q-.06-1-.06-1.5V9.28h1Z"}))}return t}var g=c(9),y=c.n(g);var w=function e(){for(var t=[],c=0;c<arguments.length;c++){var n=arguments[c];if(n){var o=y()(n);if("string"===o||"number"===o)t.push(n);else if(Array.isArray(n)&&n.length){var l=e.apply(null,n);l&&t.push(l)}else if("object"===o)for(var a in n)hasOwnProperty.call(n,a)&&n[a]&&t.push(a)}}return t.join(" ")},_=[],E=function(e){var t=e.className,c=e.attributes,n=e.setAttributes,o=c.title,a=c.initiallyOpen,r=c.clickToClose,i=c.autoClose,s=c.titleTag,u=c.scroll,b=c.scrollOffset,p=c.uuid,O=Object(l.useSelect)((function(e){return e("accordion-blocks").getDefaultSettings()})),j=a===O.initiallyOpen&&r===O.clickToClose&&i===O.autoClose&&u===O.scroll&&b===O.scrollOffset;return Object(h.useEffect)((function(){var e=p;return e||n({initiallyOpen:O.initiallyOpen,clickToClose:O.clickToClose,autoClose:O.autoClose,scroll:O.scroll,scrollOffset:O.scrollOffset}),e&&!_.includes(e)||(e=Math.floor(1e5*Math.random()+1),n({uuid:e})),_.push(e),function(){_.splice(_.indexOf(e),1)}}),[]),Object(h.createElement)(h.Fragment,null,Object(h.createElement)(f.BlockControls,null,Object(h.createElement)(m.Toolbar,{controls:["h1","h2","h3","h4","button"].map((function(e){return{icon:v(e),title:e.toUpperCase(),isActive:s===e,onClick:function(){return n({titleTag:e})}}}))})),Object(h.createElement)(f.InspectorControls,null,Object(h.createElement)(m.PanelBody,{title:Object(d.__)("Accordion Item Settings","pb")},Object(h.createElement)(m.ToggleControl,{label:Object(d.__)("Open By Default","pb"),help:a?Object(d.__)("This accordion item will be open when the page loads.","pb"):Object(d.__)("This accordion item will be closed when the page loads.","pb"),checked:a,onChange:function(e){return n({initiallyOpen:e})}}),Object(h.createElement)(m.ToggleControl,{label:Object(d.__)("Click to Close","pb"),help:r?Object(d.__)("When open, this accordion item title can be clicked again to close it.","pb"):Object(d.__)("Once opened, this accordion item cannot be closed by clicking the title.","pb"),checked:r,onChange:function(e){return n({clickToClose:e})}}),Object(h.createElement)(m.ToggleControl,{label:Object(d.__)("Auto Close","pb"),help:i?Object(d.__)("This accordion item will close when opening another item.","pb"):Object(d.__)("This accordion item will remain open when opening another item.","pb"),checked:i,onChange:function(e){return n({autoClose:e})}}),Object(h.createElement)(m.ToggleControl,{label:Object(d.__)("Scroll to Accordion Item","pb"),help:u?Object(d.__)("The page will scroll to the accordion item title when it is opened.","pb"):Object(d.__)("The page will not scroll when opening accordion items.","pb"),checked:u,onChange:function(e){return n({scroll:e,scrollOffset:0})}}),!!u&&Object(h.createElement)(m.RangeControl,{label:Object(d.__)("Scroll Pixel Offset","pb"),value:b,onChange:function(e){return n({scrollOffset:e||0})},min:0,max:1e3,help:Object(d.__)("A pixel offset for the final scroll position.","pb")}),!j&&Object(h.createElement)(h.Fragment,null,Object(h.createElement)("hr",null),Object(h.createElement)(m.Button,{isLink:!0,onClick:function(){Object(l.dispatch)("accordion-blocks").saveDefaultSettings({initiallyOpen:a,clickToClose:r,autoClose:i,scroll:u,scrollOffset:b})}},Object(d.__)("Make These Settings the Defaults","pb")),Object(h.createElement)("p",{style:{fontStyle:"italic",marginTop:"7px"}},Object(d.__)("Default settings only apply when creating new accordion items.","pb")),Object(h.createElement)("p",null,Object(h.createElement)(m.Button,{isLink:!0,isDestructive:!0,onClick:function(){n({initiallyOpen:O.initiallyOpen,clickToClose:O.clickToClose,autoClose:O.autoClose,scroll:O.scroll,scrollOffset:O.scrollOffset})}},Object(d.__)("Reset These Settings to Defaults","pb")))))),Object(h.createElement)("div",{className:w("c-accordion__item","js-accordion-item",t)},Object(h.createElement)(f.RichText,{className:w("c-accordion__title",{"c-accordion__title--button":"button"===s}),tagName:s,allowedFormats:["bold","italic"],placeholder:Object(d.__)("Accordion item title...","pb"),value:o,onChange:function(e){return n({title:e})}}),Object(h.createElement)("div",{className:"c-accordion__content"},Object(h.createElement)(f.InnerBlocks,null))))},k=[{attributes:{title:{type:"array",source:"children",selector:".c-accordion__title"},initiallyOpen:{type:"boolean",default:!1},clickToClose:{type:"boolean",default:!0},autoClose:{type:"boolean",default:!0},titleTag:{type:"string",default:"h2"},scroll:{type:"boolean",default:!1},scrollOffset:{type:"number",default:0},uuid:{type:"number"}},supports:{anchor:!0},save:function(e){var t=e.attributes,c=t.className,n=t.title,o=t.initiallyOpen,l=t.clickToClose,a=t.autoClose,r=t.titleTag,i=t.scroll,s=t.scrollOffset,u=t.uuid,b=["c-accordion__item","js-accordion-item","no-js"],p=["c-accordion__title","js-accordion-controller"],d={};return"button"===r&&p.push("c-accordion__title--button"),o?b.push("is-open"):d.display="none",Object(h.createElement)("div",{className:[].concat(b,[c]).join(" "),"data-initially-open":o,"data-click-to-close":l,"data-auto-close":a,"data-scroll":i,"data-scroll-offset":s},Object(h.createElement)(f.RichText.Content,{id:"at-"+u,className:p.join(" "),tagName:r,tabIndex:0,role:"button","aria-controls":"ac-"+u,value:n}),Object(h.createElement)("div",{id:"ac-"+u,className:"c-accordion__content",style:d},Object(h.createElement)(f.InnerBlocks.Content,null)))}}];function C(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}Object(p.registerBlockType)("pb/accordion-item",function(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?C(Object(c),!0).forEach((function(t){b()(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):C(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}({},O,{transforms:j,edit:E,save:function(e){var t=e.attributes,c=t.className,n=t.title,o=t.initiallyOpen,l=t.clickToClose,a=t.autoClose,r=t.titleTag,i=t.scroll,s=t.scrollOffset,u=t.uuid,b=["c-accordion__item","js-accordion-item","no-js"],p=["c-accordion__title","js-accordion-controller"];return"button"===r&&p.push("c-accordion__title--button"),o&&b.push("is-open"),Object(h.createElement)("div",{className:[].concat(b,[c]).join(" "),"data-initially-open":o,"data-click-to-close":l,"data-auto-close":a,"data-scroll":i,"data-scroll-offset":s},Object(h.createElement)(f.RichText.Content,{id:"at-"+u,className:p.join(" "),tagName:r,role:"button",value:n}),Object(h.createElement)("div",{id:"ac-"+u,className:"c-accordion__content"},Object(h.createElement)(f.InnerBlocks.Content,null)))},deprecated:k}))}]);