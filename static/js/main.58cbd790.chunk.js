(this["webpackJsonptissue-factory-ui"]=this["webpackJsonptissue-factory-ui"]||[]).push([[0],{24:function(e,t,c){},48:function(e,t,c){},51:function(e,t,c){},64:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){"use strict";c.r(t);c(48);var n=c(0),r=c.n(n),a=c(1),i=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"About"})})},o=(c(51),c(13)),l=function(e){return Object(a.jsxs)(o.b,{className:"GalleryItem",to:"/repo/".concat(e.ORC.owner,"/").concat(e.ORC.repo),children:[Object(a.jsx)("img",{className:"ThumbnailImage",src:"".concat("","/assets/thumbnails/").concat(e.ORC.owner,"-").concat(e.ORC.repo,"_thumbnail.png"),alt:"image"}),Object(a.jsxs)("p",{children:[" ","".concat(e.ORC.owner,"/").concat(e.ORC.repo)," "]})]})},s=function(){return Object(a.jsxs)("div",{className:"Gallery",children:[Object(a.jsx)(l,{ORC:{owner:"pallets",repo:"flask"}}),Object(a.jsx)(l,{ORC:{owner:"facebook",repo:"react"}}),Object(a.jsx)(l,{ORC:{owner:"apache",repo:"OpenNLP"}}),Object(a.jsx)(l,{ORC:{owner:"pallets",repo:"flask"}}),Object(a.jsx)(l,{ORC:{owner:"facebook",repo:"react"}}),Object(a.jsx)(l,{ORC:{owner:"pallets",repo:"flask"}}),Object(a.jsx)(l,{ORC:{owner:"facebook",repo:"react"}}),Object(a.jsx)(l,{ORC:{owner:"apache",repo:"OpenNLP"}}),Object(a.jsx)(l,{ORC:{owner:"PyGithub",repo:"PyGithub"}})]})},u=c(44),d=c(5),j=c(21),b="DIAGRAM_HOVER_CELL",O="DIAGRAM_SELECT_CELL",h="DIAGRAM_UPDATE_CELLS",m="DIAGRAM_API_ERROR",p="DIAGRAM_SIZE",v="NAVIGATE_BACK",f="TOGGLE_OVERLAY",y=function(){var e=Object(d.c)((function(e){return{selectedCellHistory:e.diagram.selectedCellHistory}})).selectedCellHistory,t=Object(d.b)(),c=0!=e.length;return Object(a.jsxs)("div",{children:[Object(a.jsx)(u.a,{"data-tip":"Navigate back up the hierarchy",className:"BackButton ".concat(c?"active":"inactive"),onClick:c?function(){t({type:v})}:void 0}),Object(a.jsx)(j.a,{className:"ReactTooltip"})]})},x=(c(64),c(4)),g=function(){var e=Object(x.g)();return Object(a.jsxs)("div",{className:"Header",children:[e.pathname.includes("repo")?Object(a.jsx)(y,{}):null,Object(a.jsxs)("span",{className:"Navbar",children:[Object(a.jsx)(o.b,{to:"/gallery",children:"Gallery"}),Object(a.jsx)(o.b,{to:"/about",children:"About"})]})]})},C=(c(24),function(){var e=Object(d.c)((function(e){return e.diagram.focused}));return Object(a.jsxs)("div",{className:"CellMetaData",children:[Object(a.jsx)("p",{id:"focusedLabel",children:e?"".concat(e.label.substring(e.label.indexOf("/"))):"/"}),Object(a.jsx)("p",{children:"Created: ".concat(e?new Date(1e3*(null===e||void 0===e?void 0:e.meta.created_timestamp)).toLocaleTimeString("en-UK",{timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone}):"N/A")}),Object(a.jsx)("p",{children:"Last edited: ".concat(e?new Date(1e3*(null===e||void 0===e?void 0:e.meta.last_edited_ts)).toLocaleDateString("en-UK",{timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone}):"N/A")}),Object(a.jsx)("p",{children:"Lines of code: ".concat(e?e.meta.lines_of_code:"N/A")})]})}),_=c(14),w=c(18),N=c(39);_.b.add(w.a,w.d,w.b,w.c);var R=function(e){var t=e.overlay,c=Object(d.c)((function(e){return{activeOverlay:e.diagram.activeOverlay}})).activeOverlay,n=Object(d.b)(),r=c===t?"active":"inactive";return Object(a.jsxs)("div",{"data-tip":t.tooltip,className:"OverlayButton ".concat(r),onClick:function(){n({type:f,overlay:t})},children:[Object(a.jsx)(N.a,{icon:t.fontawesomeIconName,className:r}),Object(a.jsx)(j.a,{className:"ReactTooltip"})]})},A=c(46),E=function(e){var t=e.cell,c=e.points,n=e.l_circ,r=e.style,i=e.relativeTier,o=e.overlay,l=Object(d.b)(),s=function(e,t,c){return c.font=t+"px "+getComputedStyle(document.body).fontFamily,c.measureText(e).width},u=t.n_c>0,j=t.label.split("/").slice(-1)[0],h=u?j+"/":j,m=n.length>0?function(e,t){var c=document.createElement("canvas").getContext("2d");if(!c)return 0;for(var n=72,r=0,a=Math.floor(n-r/2);n-r>1;){s(e,a,c)>t?n=a:r=a,a=Math.floor((n-r)/2)+r}return a}(h,1.6*n[2]):0,p=n.length>0&&m>=16&&u;return Object(a.jsxs)("g",{className:"Polygon ".concat(u?"dirPolygon":"filePolygon"," ").concat(p?"hasLabel":"hasNoLabel"," ").concat(i>0?"deeperTier":0===i?"equalTier":"shallowerTier"," relativeTier").concat(i," ").concat(o.name,"\n      "),onMouseOver:function(e){var t=e.target;l({type:b,cellId:t.dataset.label,meta:{debounce:{time:100}}})},onMouseOut:function(){l({type:b,cellId:void 0,meta:{debounce:{time:600}}})},onClick:function(e){var t=e.target;l({type:O,cellId:t.dataset.label})},children:[Object(a.jsx)("polygon",{points:c,style:r,"data-label":t.label}),p?Object(a.jsx)("text",{x:n[0],y:n[1],fontSize:m,children:Object(a.jsx)("tspan",{textAnchor:"middle",alignmentBaseline:"middle",children:h})}):""]})},M=function(e,t,c){var n=e.filter((function(e){return e.tier<=t.tier+2}));return n.filter((function(e){return e.tier<=t.tier})).concat(n.filter((function(e){return e.tier>t.tier+1})),n.filter((function(e){return e.tier===t.tier+1}))).map((function(e){var n=e.xs.map((function(t,n){return["".concat(c*t,",").concat(c*e.ys[n])]})),r=[];return e.tier==t.tier+1&&(r=[e.l_circ[0]*c,e.l_circ[1]*c,e.l_circ[2]*c]),{cell:e,points:n,l_circ:r}})).map((function(e){var c=e.cell,n=e.points,r=e.l_circ;return Object(a.jsx)(E,{cell:c,points:n.join(" "),l_circ:r,style:{fillOpacity:c.tier>t.tier&&c.tier<=t.tier+2?1:0,strokeWidth:Math.max(1,4-c.tier),strokeOpacity:c.tier>t.tier+1?.4:1},overlay:I.NONE,relativeTier:c.tier-t.tier},c.label)}))},I={NONE:{name:"noOverlay",tooltip:"",fontawesomeIconName:"",overlayRenderingFunction:M},HEATMAP:{name:"heatmapOverlay",tooltip:"Shows number of commits across repo",fontawesomeIconName:"thermometer-half",overlayRenderingFunction:function(e,t,c){var n=e.map((function(e){return e.meta.commit_count})),r=Math.min(Math.max.apply(Math,Object(A.a)(n)),30);function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:108,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=e*(t-c)+c;return"hsl(".concat(n,", 40%, 50%)")}return e.filter((function(e){return e.tier<=t.tier})).concat(e.filter((function(e){return e.tier>t.tier+1})),e.filter((function(e){return e.tier===t.tier+1}))).map((function(e){var n=e.xs.map((function(t,n){return["".concat(c*t,",").concat(c*e.ys[n])]})),r=[];return e.tier==t.tier+1&&(r=[e.l_circ[0]*c,e.l_circ[1]*c,e.l_circ[2]*c]),{cell:e,points:n,l_circ:r}})).map((function(e){var c=e.cell,n=e.points,o=e.l_circ;return Object(a.jsx)(E,{cell:c,points:n.join(" "),l_circ:o,style:{fillOpacity:1,fill:i(1-Math.min(c.meta.commit_count,30)/r),strokeWidth:Math.max(1,4-c.tier)},overlay:I.HEATMAP,relativeTier:c.tier-t.tier},c.label)}))}},DEAD_CODE:{name:"deadCodeOverlay",tooltip:"Highlights code that has not been updated recently",fontawesomeIconName:"skull-crossbones",overlayRenderingFunction:M},LANGUAGES:{name:"languagesOverlay",tooltip:"Shows language of files in repo",fontawesomeIconName:"language",overlayRenderingFunction:M}},T=function(){return Object(a.jsxs)("div",{className:"OverlayBar",children:[Object(a.jsx)(R,{overlay:I.HEATMAP}),Object(a.jsx)(R,{overlay:I.LANGUAGES}),Object(a.jsx)(R,{overlay:I.DEAD_CODE})]})},D=c(45),L=c(40),k=c.n(L),G=c(47),H=function(e){var t=Object(d.c)((function(e){return{cells:Object.values(e.diagram.cells),width:e.diagram.width,height:e.diagram.height,error:e.diagram.error,baseCell:e.diagram.selected,activeOverlay:e.diagram.activeOverlay}})),c=t.baseCell,r=t.cells,i=t.width,o=t.height,l=t.error,s=t.activeOverlay,u=Object(d.b)(),j=Object(n.useRef)(!0),b=Object(n.useRef)(null),O=Object(n.useRef)(null);Object(n.useEffect)((function(){var e=null===b||void 0===b?void 0:b.current;return e&&u({type:p,width:e.clientWidth,height:e.clientHeight}),v(),function(){u({type:h,cells:[]})}}),[]);var v=function(){console.log("Fetching cells for ".concat(e.ORC.owner,"/").concat(e.ORC.repo)),k.a.get("http://localhost:3000/repos/".concat(e.ORC.owner,"/").concat(e.ORC.repo,".json")).then((function(e){var t=e.data;u({type:h,cells:t})})).catch((function(e){u({type:m,error:e.message})}))},f=Math.min(i,o),y=c.xs.reduce((function(e,t,n){var r=t*f,a=c.ys[n]*f;return[Math.min(e[0],r),Math.max(e[1],r),Math.min(e[2],a),Math.max(e[3],a)]}),[f,0,f,0]),x=Object(D.a)(y,4),g=x[0],C=x[1],_=x[2],w=x[3];return Object(n.useEffect)((function(){if(O.current&&r.length>0){var e=j.current?0:1;G.a.to(O.current,e,{attr:{viewBox:"".concat(g," ").concat(_," ").concat(C-g," ").concat(w-_)}}),j.current=!1}}),[f,c.label,r.length]),l?Object(a.jsxs)("div",{children:["Data not found: ",l]}):Object(a.jsx)("div",{className:"PowerDiagram",ref:b,children:Object(a.jsx)("svg",{ref:O,style:{margin:"auto",border:"0px",width:i,height:o},children:s.overlayRenderingFunction(r,c,f)})})},P=function(){var e={owner:location.pathname.split("/")[2],repo:location.pathname.split("/")[3],commit:"master"};return Object(a.jsxs)("div",{className:"Repo",children:[Object(a.jsx)(T,{}),Object(a.jsx)(H,{ORC:e}),Object(a.jsx)(C,{})]})},S=(c(41),c(12)),F=c(42),B=c.n(F),U=c(43),Z=c(6),W={cells:{},selectedCellHistory:[],width:0,height:0,selected:{label:"base",tier:0,xs:[-.1,-.1,1.1,1.1],ys:[-.1,1.1,-.1,1.1],meta:{lines_of_code:0,last_edited_ts:0,last_edited_name:"None",last_edited_email:"None",created_timestamp:0,commit_count:0},l_circ:[.5,.49999999999999994,.32483442836611853],n_c:0},activeOverlay:I.NONE};var K=Object(S.combineReducers)({diagram:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case f:return Object(Z.a)(Object(Z.a)({},t),{},{activeOverlay:t.activeOverlay!==c.overlay?c.overlay:I.NONE});case b:return Object(Z.a)(Object(Z.a)({},t),{},{focused:t.cells[c.cellId]});case O:var n=t.cells[c.cellId];return t.selectedCellHistory.push(t.selected),Object(Z.a)(Object(Z.a)({},t),{},{selected:n,focused:n,selectedCellHistory:t.selectedCellHistory.slice(-30)});case v:var r,a=null===(e=t.selectedCellHistory)||void 0===e?void 0:e.pop();return r=a||t.selected,Object(Z.a)(Object(Z.a)({},t),{},{selected:r,focused:r,selectedCellHistory:t.selectedCellHistory});case h:return Object(Z.a)(Object(Z.a)({},W),{},{cells:c.cells.reduce((function(e,t){return e[t.label]=t,e}),{}),height:t.height,width:t.width});case p:return Object(Z.a)(Object(Z.a)({},t),{},{width:c.width,height:c.height});case m:return Object(Z.a)(Object(Z.a)({},t),{},{error:c.error});default:return t}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type,e}});var V=function(){return Object(a.jsx)(d.a,{store:Object(S.createStore)(K,void 0,Object(U.composeWithDevTools)(Object(S.applyMiddleware)(B()()))),children:Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(o.a,{children:[Object(a.jsx)(g,{}),Object(a.jsxs)(x.d,{children:[Object(a.jsx)(x.b,{exact:!0,path:"/",render:function(){return Object(a.jsx)(x.a,{to:"/gallery"})}}),Object(a.jsx)(x.b,{exact:!0,path:"/gallery",component:s}),Object(a.jsx)(x.b,{exact:!0,path:"/about",component:i}),Object(a.jsx)(x.b,{path:"/repo",component:P})]})]})})})},J=(c(84),c(19));c.n(J).a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(V,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.58cbd790.chunk.js.map