(function(e){function t(t){for(var n,s,l=t[0],i=t[1],d=t[2],c=0,u=[];c<l.length;c++)s=l[c],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&u.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(u.length)u.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={app:0},r={app:0},o=[];function l(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d209b42":"50fdf73f","chunk-2d22996d":"3a7dc4d3","chunk-f53b9500":"8dfa337a","chunk-74afe032":"c1eefb22","chunk-8b9c96e6":"61a889a0"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={"chunk-8b9c96e6":1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-2d209b42":"31d6cfe0","chunk-2d22996d":"31d6cfe0","chunk-f53b9500":"31d6cfe0","chunk-74afe032":"31d6cfe0","chunk-8b9c96e6":"50bf82c7"}[e]+".css",r=i.p+n,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var d=o[l],c=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(c===n||c===r))return t()}var u=document.getElementsByTagName("style");for(l=0;l<u.length;l++){d=u[l],c=d.getAttribute("data-href");if(c===n||c===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete s[e],f.parentNode.removeChild(f),a(o)},f.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){s[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=o);var d,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=l(e);var u=new Error;d=function(t){c.onerror=c.onload=null,clearTimeout(f);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",u.name="ChunkLoadError",u.type=n,u.request=s,a[1](u)}r[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:c})}),12e4);c.onerror=c.onload=d,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],c=d.push.bind(d);d.push=t,d=d.slice();for(var u=0;u<d.length;u++)t(d[u]);var f=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0ad4":function(e,t,a){"use strict";a("f5a2")},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc10","./be.js":"1fc10","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id="4678"},"4f87":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e623"),a("e379"),a("5dc8"),a("37e1");var n=a("a026"),s=a("f23d"),r=(a("202f"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a(e.layout,{tag:"component"},[a("router-view")],1)],1)}),o=[],l={computed:{layout:function(){return"layout-"+(this.$route.meta.layout||"default").toLowerCase()}}},i=l,d=a("2877"),c=Object(d["a"])(i,r,o,!1,null,null,null),u=c.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-layout",{staticClass:"layout-default",class:[e.layoutClass],attrs:{id:"layout-default"}},[a("DefaultHeader"),a("a-layout-content",[a("router-view")],1),a("DefaultFooter")],1)],1)},h=[],b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout-header",[a("div",{staticClass:"header-col header-brand"},[a("h6",[e._v("Skyle 보호 대상자용")]),a("a-button",{staticClass:"btn-menu-trigger",attrs:{type:"link"},on:{click:function(t){e.collapseNav=e.collapseNav?0:1}}},[a("svg",{attrs:{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[a("path",{attrs:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}})])])],1),a("div",{staticClass:"header-col header-nav"},[a("a-menu",{staticClass:"menu-large",attrs:{mode:"horizontal"}},[a("a-menu-item",[a("router-link",{staticClass:"nav-link",attrs:{to:"/sign-in"},on:{click:function(e){return e.preventDefault()}}},[a("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{staticClass:"fill-muted",attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z",fill:"#111827"}})]),a("span",[e._v("로그인")])])],1)],1),a("div",{staticClass:"menu-small"},[a("a-collapse",{attrs:{accordion:""},model:{value:e.collapseNav,callback:function(t){e.collapseNav=t},expression:"collapseNav"}},[a("a-collapse-panel",{key:"1"},[a("a-menu",{attrs:{mode:"vertical"}},[a("a-menu-item",[a("router-link",{staticClass:"nav-link",attrs:{to:"/sign-in"},on:{click:function(e){return e.preventDefault()}}},[a("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{staticClass:"fill-muted",attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z",fill:"#111827"}})]),a("span",[e._v("로그인")])])],1)],1)],1)],1)],1)],1)])},p=[],m={data:function(){return{collapseNav:0}}},j=m,g=(a("0ad4"),Object(d["a"])(j,b,p,!1,null,"9206d542",null)),v=g.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout-footer",[a("p",{staticClass:"copyright"},[e._v(" Copyright © 2021 Skyle. ")])])},y=[],w={data:function(){return{}}},k=w,x=(a("a265"),Object(d["a"])(k,C,y,!1,null,"3efcdc0a",null)),H=x.exports,_={components:{DefaultHeader:v,DefaultFooter:H},data:function(){return{}},computed:{layoutClass:function(){return this.$route.meta.layoutClass}}},S=_,z=Object(d["a"])(S,f,h,!1,null,null,null),E=z.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-layout",{staticClass:"layout-dashboard",class:[e.navbarFixed?"navbar-fixed":"",e.sidebarCollapsed?"":"has-sidebar",e.layoutClass],attrs:{id:"layout-dashboard"}},[a("DashboardSidebar",{attrs:{sidebarCollapsed:e.sidebarCollapsed,sidebarColor:e.sidebarColor,sidebarTheme:e.sidebarTheme},on:{toggleSidebar:e.toggleSidebar}}),a("a-layout",[a("DashboardHeader",{attrs:{sidebarCollapsed:e.sidebarCollapsed,navbarFixed:e.navbarFixed},on:{toggleSettingsDrawer:e.toggleSettingsDrawer,toggleSidebar:e.toggleSidebar}}),a("a-layout-content",[a("router-view")],1),a("DashboardFooter")],1)],1)],1)},O=[],D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout-sider",{staticClass:"sider-primary",class:["ant-layout-sider-"+e.sidebarColor,"ant-layout-sider-"+e.sidebarTheme],style:{backgroundColor:"transparent"},attrs:{collapsible:"",breakpoint:"lg","collapsed-width":"0",width:"250px",collapsed:e.sidebarCollapsed,trigger:null,theme:"light"},on:{collapse:function(t){return e.$emit("toggleSidebar",!e.sidebarCollapsed)}}},[a("div",{staticClass:"brand"},[a("img",{attrs:{src:"images/logo-ct-black.png",alt:""}}),e._v(" "),a("span",[e._v("Skyle 보호 대상자용")])]),a("hr"),a("a-menu",{attrs:{theme:"light",mode:"inline"}},[a("a-menu-item",[a("router-link",{attrs:{to:"/main"}},[a("span",{staticClass:"icon"},[a("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M9 2C8.44772 2 8 2.44772 8 3C8 3.55228 8.44772 4 9 4H11C11.5523 4 12 3.55228 12 3C12 2.44772 11.5523 2 11 2H9Z",fill:"#111827"}}),a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 5C4 3.89543 4.89543 3 6 3C6 4.65685 7.34315 6 9 6H11C12.6569 6 14 4.65685 14 3C15.1046 3 16 3.89543 16 5V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V5ZM7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H7.01C7.56228 11 8.01 10.5523 8.01 10C8.01 9.44772 7.56228 9 7.01 9H7ZM10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H10ZM7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15H7.01C7.56228 15 8.01 14.5523 8.01 14C8.01 13.4477 7.56228 13 7.01 13H7ZM10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13H10Z",fill:"#111827"}})])]),a("span",{staticClass:"label"},[e._v("Main")])])],1)],1)],1)},V=[],Z={props:{sidebarCollapsed:{type:Boolean,default:!1},sidebarColor:{type:String,default:"primary"},sidebarTheme:{type:String,default:"light"}},data:function(){return{}}},F=Z,T=Object(d["a"])(F,D,V,!1,null,null,null),B=T.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a(e.navbarFixed?"a-affix":"div",{tag:"component",attrs:{"offset-top":e.top}},[a("a-layout-header",[a("a-row",{attrs:{type:"flex"}},[a("a-col",{attrs:{span:24,md:6}},[a("div",{staticClass:"ant-page-header-heading"},[a("span",{staticClass:"ant-page-header-heading-title"},[e._v(e._s(this.$route.name))])])])],1)],1)],1)},L=[],P=[{title:"New message from Sophie",img:"images/face-1.jpg",time:"13 minutes ago"},{title:"New album by Travis Scott",svg:'<svg width="20" height="20" viewBox="0 0 107 107" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n\t\t\t\t<title>logo-spotify</title>\n\t\t\t\t<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n\t\t\t\t\t<g id="logo-spotify" fill="#2EBD59" fill-rule="nonzero">\n\t\t\t\t\t\t<path d="M53.5,0 C23.9517912,0 0,23.9517912 0,53.5 C0,83.0482088 23.9517912,107 53.5,107 C83.0482088,107 107,83.0482088 107,53.5 C107,23.9554418 83.0482088,0.00365063118 53.5,0 Z M78.0358922,77.1597407 C77.0757762,78.7368134 75.0204708,79.2296486 73.4506994,78.2695326 C60.8888775,70.5922552 45.0743432,68.8582054 26.4524736,73.1111907 C24.656363,73.523712 22.8675537,72.3993176 22.458683,70.6032071 C22.0461617,68.8070966 23.1669055,67.0182873 24.9666667,66.6094166 C45.3444899,61.9548618 62.8273627,63.9590583 76.9297509,72.5745479 C78.4995223,73.5419652 78.9996588,75.5899693 78.0358922,77.1597407 L78.0358922,77.1597407 Z M84.5814739,62.5973729 C83.373115,64.5614125 80.8030706,65.1747185 78.8426817,63.9700102 C64.4664961,55.1318321 42.5408052,52.5727397 25.5325145,57.7347322 C23.3275333,58.4027977 20.9984306,57.1579324 20.3267144,54.9566018 C19.6622996,52.7516206 20.9071648,50.4261685 23.1084954,49.7544524 C42.5371546,43.858683 66.6933811,46.7134766 83.2051859,56.8622313 C85.1692255,58.0705902 85.7898328,60.636984 84.5814739,62.5973729 Z M85.1436711,47.4253497 C67.8980894,37.1853292 39.4523712,36.2434664 22.9880246,41.2375299 C20.3449676,42.0406687 17.5485841,40.5475606 16.7490959,37.9045036 C15.9496076,35.2614466 17.4390652,32.4650631 20.0857728,31.6619243 C38.9850904,25.9267827 70.3987718,27.0329239 90.2509041,38.8171614 C92.627465,40.2299556 93.4087001,43.3001365 91.9995565,45.6730467 C90.5940635,48.0532583 87.5165814,48.838144 85.1436711,47.4253497 Z" id="Shape"></path>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</svg>',time:"1 day ago"},{title:"Payment completed",svg:'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t<path fill="#1890FF" d="M4 4C2.89543 4 2 4.89543 2 6V7H18V6C18 4.89543 17.1046 4 16 4H4Z"/>\n\t\t\t\t<path fill="#1890FF" fill-rule="evenodd" clip-rule="evenodd" d="M18 9H2V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V9ZM4 13C4 12.4477 4.44772 12 5 12H6C6.55228 12 7 12.4477 7 13C7 13.5523 6.55228 14 6 14H5C4.44772 14 4 13.5523 4 13ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H10C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12H9Z"/>\n\t\t\t</svg>',time:"2 days ago"}],$={props:{navbarFixed:{type:Boolean,default:!1},sidebarCollapsed:{type:Boolean,default:!1},notificationsData:{type:Array,default:function(){return P}}},data:function(){return{top:0,searchLoading:!1,wrapper:document.body}},methods:{resizeEventHandler:function(){this.top=this.top?0:-.01},onSearch:function(e){}},mounted:function(){this.wrapper=document.getElementById("layout-dashboard")},created:function(){window.addEventListener("resize",this.resizeEventHandler)},destroyed:function(){window.removeEventListener("resize",this.resizeEventHandler)}},A=$,q=Object(d["a"])(A,N,L,!1,null,null,null),I=q.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout-footer",[a("a-row",{attrs:{type:"flex"}},[a("a-col",{attrs:{span:24,md:12}},[a("p",{staticClass:"copyright"},[e._v(" © 2021, made with "),a("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.17157 5.17157C4.73367 3.60948 7.26633 3.60948 8.82843 5.17157L10 6.34315L11.1716 5.17157C12.7337 3.60948 15.2663 3.60948 16.8284 5.17157C18.3905 6.73367 18.3905 9.26633 16.8284 10.8284L10 17.6569L3.17157 10.8284C1.60948 9.26633 1.60948 6.73367 3.17157 5.17157Z",fill:"#111827"}})]),e._v(" by Skyle. ")])])],1)],1)},J=[],K={data:function(){return{}}},G=K,Q=Object(d["a"])(G,U,J,!1,null,null,null),R=Q.exports,W={components:{DashboardSidebar:B,DashboardHeader:I,DashboardFooter:R},data:function(){return{sidebarCollapsed:!1,sidebarColor:"primary",sidebarTheme:"light",navbarFixed:!1,showSettingsDrawer:!1}},methods:{toggleSidebar:function(e){this.sidebarCollapsed=e},toggleSettingsDrawer:function(e){this.showSettingsDrawer=e},toggleNavbarPosition:function(e){this.navbarFixed=e},updateSidebarTheme:function(e){this.sidebarTheme=e},updateSidebarColor:function(e){this.sidebarColor=e}},computed:{layoutClass:function(){return this.$route.meta.layoutClass}}},X=W,Y=Object(d["a"])(X,M,O,!1,null,null,null),ee=Y.exports,te=(a("d3b7"),a("3ca3"),a("ddb0"),a("d81d"),a("8c4f"));n["a"].use(te["a"]);var ae=[{path:"/",name:"Home",component:function(){return a.e("chunk-2d209b42").then(a.bind(null,"a9d8"))}},{path:"/",name:"Home",redirect:"/main"},{path:"/main",name:"Skyle 보호 대상자용",layout:"dashboard",component:function(){return Promise.all([a.e("chunk-f53b9500"),a.e("chunk-74afe032")]).then(a.bind(null,"8840d"))}},{path:"/error",name:"Skyle 보호 대상자용",layout:"dashboard",component:function(){return a.e("chunk-2d22996d").then(a.bind(null,"dda8"))}},{path:"/sign-in",name:"Sign-In",component:function(){return Promise.all([a.e("chunk-f53b9500"),a.e("chunk-8b9c96e6")]).then(a.bind(null,"cabc"))}}];function ne(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";return e.meta=e.meta||{},e.meta.layout=e.layout||t,e.children&&(e.children=e.children.map((function(t){return ne(t,e.meta.layout)}))),e}ae=ae.map((function(e){return ne(e)}));var se=new te["a"]({mode:"hash",base:"/",routes:ae,scrollBehavior:function(e,t,a){return e.hash?{selector:e.hash,behavior:"smooth"}:{x:0,y:0,behavior:"smooth"}}}),re=se,oe=a("2b27"),le=a.n(oe);a("4f87");n["a"].use(s["a"]),n["a"].use(le.a),n["a"].config.productionTip=!1,n["a"].component("layout-default",E),n["a"].component("layout-dashboard",ee),new n["a"]({router:re,render:function(e){return e(u)}}).$mount("#app")},a265:function(e,t,a){"use strict";a("aaa1")},aaa1:function(e,t,a){},f5a2:function(e,t,a){}});
//# sourceMappingURL=app.29f1b230.js.map