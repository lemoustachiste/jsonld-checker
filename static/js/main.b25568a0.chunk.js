(this["webpackJsonpjsonld-checker-app"]=this["webpackJsonpjsonld-checker-app"]||[]).push([[0],{136:function(e){e.exports=JSON.parse('{"@context":["https://w3id.org/wallet/v1"],"id":"urn:uuid:53d846c8-9525-11ea-bb37-0242ac130002","name":"My Test Key 1","image":"https://via.placeholder.com/150","description":"For testing only, totally compromised.","tags":["professional","organization","compromised"],"correlation":["4058a72a-9523-11ea-bb37-0242ac130002"],"controller":["did:example:123#_Qq0UL2Fq651Q0Fjd6TvnYE-faHiOpRlPVQcY_-tA4A"],"type":"Ed25519VerificationKey2018","publicKeyJwk":{"crv":"Ed25519","x":"VCpo2LMLhn6iWku8MKvSLg2ZAoC-nlOyPVQaO3FxVeQ","kty":"OKP","kid":"_Qq0UL2Fq651Q0Fjd6TvnYE-faHiOpRlPVQcY_-tA4A"},"privateKeyJwk":{"crv":"Ed25519","x":"VCpo2LMLhn6iWku8MKvSLg2ZAoC-nlOyPVQaO3FxVeQ","d":"tP7VWE16yMQWUO2G250yvoevfbfxY25GjHglTP3ZOyU","kty":"OKP","kid":"_Qq0UL2Fq651Q0Fjd6TvnYE-faHiOpRlPVQcY_-tA4A"}}')},166:function(e,t,n){e.exports=n(228)},198:function(e,t){},211:function(e,t){},221:function(e,t){},222:function(e,t){},227:function(e,t,n){},228:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(13),c=n.n(o),i=n(8),l=n(265),u=n(287),s=n(291),p=n(288),f=n(289),m=n(132),h=n.n(m),d=(n(178),n(179),n(180),function(e){var t=e.onChange,n=e.value,r=e.index,o=e.readOnly;return a.a.createElement(h.a,{placeholder:"Paste your JSON-LD object here",width:"800px",mode:"json",theme:"monokai",name:"json-ld-editor-".concat(r),onChange:t,readOnly:o,fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,value:n,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2}})}),v=n(267),g=Object(l.a)((function(e){return{wrapper:{margin:e.spacing(1),position:"relative"}}})),b=function(e){var t=e.value,n=g(),r=encodeURIComponent(t);return a.a.createElement("div",{className:n.wrapper},a.a.createElement(v.a,{color:"primary",variant:"contained",href:"https://json-ld.org/playground/#json-ld=".concat(r),target:"_blank",rel:"noopener"},"Open in JSON-LD Playground"))},y=n(12),E=n.n(y),w=n(30),O=n(41),k=n(32),j=n(94),x=n(93),S=n(298),L=n(3),N=n(269),C=Object(l.a)((function(){return Object(S.a)({loaderButtonWrapper:{position:"relative"},loaderButtonProgress:{color:j.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}})})),P=function(e){var t=e.onClick,n=e.buttonText,r=e.className,o=C(),c=a.a.useState(!1),l=Object(i.a)(c,2),u=l[0],s=l[1];return a.a.createElement("div",{className:o.loaderButtonWrapper},a.a.createElement(v.a,{className:r,color:"primary",variant:"contained",disabled:u,onClick:function(e){s(!0),t(e).finally((function(){s(!1)}))}},n),u&&a.a.createElement(N.a,{size:24,className:o.loaderButtonProgress}))},R=Object(l.a)((function(e){return Object(S.a)({root:{display:"flex",alignItems:"center"},wrapper:{margin:e.spacing(1),position:"relative"},buttonSuccess:{backgroundColor:j.a[500],"&:hover":{backgroundColor:j.a[700]}},buttonError:{backgroundColor:x.a[500],"&:hover":{backgroundColor:x.a[700]}}})})),F=function(e){var t,n=e.value,r=e.setResult,o=R(),c=a.a.useState(!1),l=Object(i.a)(c,2),u=l[0],s=l[1],p=a.a.useState(!1),f=Object(i.a)(p,2),m=f[0],h=f[1],d=Object(L.a)((t={},Object(O.a)(t,o.buttonSuccess,u),Object(O.a)(t,o.buttonError,m),t)),v=function(){var e=Object(w.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)(n);case 2:t=e.sent,s(t.ok),h(!t.ok),r(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.useEffect((function(){s(!1),h(!1)}),[n]),a.a.createElement("div",{className:o.root},u,m,a.a.createElement("div",{className:o.wrapper},a.a.createElement(P,{className:d,onClick:v,buttonText:"Check"})))},T=n(292),U=n(271),_=function(e){var t=e.result,n=e.className;return t?t.ok?a.a.createElement(T.a,{severity:"success"},"All Good!"):a.a.createElement(T.a,{className:n,severity:"error"},a.a.createElement(U.a,null,t.error.type),t.error.details):a.a.createElement(a.a.Fragment,null)},I=n(293),B=n(142),A=Object(l.a)((function(e){return Object(S.a)({typography:{padding:e.spacing(2)},wrapper:{margin:e.spacing(1),position:"relative"}})})),G=function(){var e=A(),t=a.a.useState(""),n=Object(i.a)(t,2),r=n[0],o=n[1],c=a.a.useState(null),l=Object(i.a)(c,2),u=l[0],s=l[1],p=Boolean(r)&&Boolean(u),f=p?"simple-popover":void 0,m=function(){var e="".concat(window.location.toString());return fetch("https://tiny.gjgd.fr/",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({url:e})}).then((function(e){if(e.ok)return e.json();throw new Error})).then((function(e){var t=e.shortUrl||"";return o(t),t}))},h=function(){var e=Object(w.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(t.currentTarget),o(""),e.abrupt("return",m());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("div",{className:e.wrapper},a.a.createElement(P,{onClick:h,buttonText:"Share"}),a.a.createElement(I.a,{id:f,open:p,anchorEl:u,onClose:function(){s(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},a.a.createElement(B.a,{className:e.typography},a.a.createElement("span",null,"Copy the URL or use this short one:"),a.a.createElement("br",null),a.a.createElement("a",{className:e.wrapper,href:"https://".concat(r),target:"_blank",rel:"noopener noreferrer"},r))))},J=n(87),M=n(88),V=function(){function e(){Object(J.a)(this,e)}return Object(M.a)(e,[{key:"update",value:function(e,t){var n=new URLSearchParams(window.location.search);n.get(e)!==t&&(n.set(e,t),window.history.pushState(null,"","/?".concat(n.toString())))}},{key:"get",value:function(e){return new URLSearchParams(window.location.search).get(e)}},{key:"reset",value:function(){window.history.pushState(null,"","/?")}}]),e}(),W=function(){function e(){Object(J.a)(this,e),this.storage=localStorage}return Object(M.a)(e,[{key:"update",value:function(e,t){this.storage.setItem(e,t)}},{key:"get",value:function(e){return this.storage.getItem(e)}}]),e}(),Q=n(136),q=new V,Y=new W,z=function(e,t){q.update(e,t),Y.update(e,t)},K=function(e){var t=q.get(e);if(t)return console.debug("Loading ".concat(e," from query parameters")),decodeURIComponent(t);var n=Y.get(e);if(n)return console.debug("Loading ".concat(e," from local storage")),decodeURIComponent(n);switch(e){case"url":return"https://github.com/w3c-ccg/universal-wallet-interop-spec/blob/master/docs/index.html";case"repo":return"https://github.com/w3c-ccg/universal-wallet-interop-spec";case"json":return JSON.stringify(Q,null,2);case"tab":return"0";default:throw new Error("Unkown data key: ".concat(e))}},D=function(e){try{var t=new URL(e).pathname.split("/"),n=Object(i.a)(t,3);return{userName:n[1],repoName:n[2]}}catch(r){return{userName:"",repoName:""}}},H=Object(l.a)((function(e){return{buttonWrapper:{display:"flex",margin:e.spacing(1)},contentWrapper:{display:"table",margin:e.spacing(1)},checkResult:{marginBottom:e.spacing(2)}}})),Z=function(){var e=H(),t=a.a.useState((function(){return K("json")})),n=Object(i.a)(t,2),r=n[0],o=n[1],c=a.a.useState(),l=Object(i.a)(c,2),u=l[0],s=l[1];return a.a.useEffect((function(){z("json",encodeURIComponent(r))}),[r]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:e.buttonWrapper},a.a.createElement(F,{value:r,setResult:s}),a.a.createElement(b,{value:r}),a.a.createElement(G,null)),a.a.createElement("div",{className:e.contentWrapper},a.a.createElement(_,{className:e.checkResult,result:u}),a.a.createElement(d,{onChange:function(e){s(void 0),o(e)},value:r})))},X=n(283),$=n(294),ee=n(276),te=n(270),ne=n(278),re=n(280),ae=n(275),oe=n(277),ce=n(279),ie=n(274),le=n(230),ue=n(138),se=n.n(ue),pe=n(137),fe=n.n(pe),me=n(89),he=n.n(me),de=n(90),ve=n.n(de),ge=Object(l.a)({root:{"& > *":{borderBottom:"unset"}}});function be(e){var t,n=e.row,r=a.a.useState(!1),o=Object(i.a)(r,2),c=o[0],l=o[1],u=ge();return t=n.result.ok?a.a.createElement(he.a,{style:{color:"green"}}):a.a.createElement(ve.a,{style:{color:"red"}}),a.a.createElement(a.a.Fragment,null,a.a.createElement(ie.a,{className:u.root},a.a.createElement(ae.a,null,a.a.createElement(te.a,{"aria-label":"expand row",size:"small",onClick:function(){return l(!c)}},c?a.a.createElement(fe.a,null):a.a.createElement(se.a,null))),a.a.createElement(ae.a,{component:"th",scope:"row"},n.name),a.a.createElement(ae.a,{align:"center"},t),a.a.createElement(ae.a,{align:"center"},n.result.ok?a.a.createElement(a.a.Fragment,null):a.a.createElement(v.a,{color:"primary",variant:"contained",onClick:function(){var e=encodeURIComponent(JSON.stringify(n.object,null,2)),t="".concat(window.location.origin,"?json=").concat(e,"&tab=0");window.open(t)}},"Inspect"))),a.a.createElement(ie.a,null,a.a.createElement(ae.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6},a.a.createElement(ee.a,{in:c,timeout:"auto",unmountOnExit:!0},a.a.createElement(f.a,{margin:1},a.a.createElement(B.a,{variant:"h6",gutterBottom:!0,component:"div"},"Details"),a.a.createElement(_,{result:n.result}),a.a.createElement(d,{value:JSON.stringify(n.object,null,2),index:n.key,readOnly:!0}))))))}var ye,Ee=function(e){var t=e.results.map((function(e,t){var n=e.object,r=e.result;return{key:t,name:n.id?n.id:"object ".concat(t),object:n,result:r}}));return 0===t.length?a.a.createElement(a.a.Fragment,null):a.a.createElement(oe.a,{component:le.a},a.a.createElement(ne.a,{"aria-label":"collapsible table"},a.a.createElement(ce.a,null,a.a.createElement(ie.a,null,a.a.createElement(ae.a,null),a.a.createElement(ae.a,null,"JSON-LD objects detected"),a.a.createElement(ae.a,{align:"center"},"Status"),a.a.createElement(ae.a,null," "))),a.a.createElement(re.a,null,t.map((function(e){return a.a.createElement(be,{key:e.key,row:e})})))))},we=Object(l.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},progressBar:{width:"100%",marginTop:e.spacing(2),marginBottom:e.spacing(2)}}})),Oe=function(){var e=a.a.useState((function(){return K("url")})),t=Object(i.a)(e,2),n=t[0],r=t[1],o=a.a.useState([]),c=Object(i.a)(o,2),l=c[0],u=c[1],s=a.a.useState(0),p=Object(i.a)(s,2),f=p[0],m=p[1],h=function(){var e=Object(w.a)(E.a.mark((function e(){var t,r,a,o,c,i,l,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=n).includes("github.com")&&(t=(t=t.replace("github.com","raw.githubusercontent.com")).replace("/blob",""),console.info("It seems you are using the Github URL of the file. Checking the raw URL instead: ".concat(t))),e.next=4,fetch(t);case 4:return r=e.sent,e.next=7,r.text();case 7:return a=e.sent,e.next=10,Object(k.b)(a);case 10:o=e.sent,m(o.length),c=[],i=0;case 14:if(!(i<o.length)){e.next=24;break}return l=o[i],e.next=18,Object(k.a)(l);case 18:s=e.sent,c.push({object:l,result:s}),u([].concat(c));case 21:i+=1,e.next=14;break;case 24:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a.a.useEffect((function(){z("url",n)}),[n]);var d=we(),v=l.filter((function(e){return!e.result.ok})),g=v.length>0,b="Found ".concat(v.length," JSON-LD errors");return a.a.createElement("div",{className:d.root},a.a.createElement(P,{onClick:h,buttonText:"Check"}),a.a.createElement($.a,{label:"Enter the URL to a file",onChange:function(e){r(e.target.value)},defaultValue:n,style:{margin:8},fullWidth:!0,margin:"normal"}),g?a.a.createElement(T.a,{severity:"error"},a.a.createElement(U.a,null,b),"Check details below"):a.a.createElement(a.a.Fragment,null),f>0?a.a.createElement("div",{className:d.progressBar},a.a.createElement(X.a,{variant:"determinate",value:100*l.length/f})):a.a.createElement(a.a.Fragment,null),a.a.createElement(Ee,{results:l}))},ke=n(139),je=n(104),xe=n(295),Se=n(286),Le=n(285),Ne=n(9),Ce=n(296),Pe=n(300),Re=n(284),Fe=n(297),Te=n(141),Ue=n.n(Te);function _e(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}!function(e){e[e.Unchecked=0]="Unchecked",e[e.Valid=1]="Valid",e[e.Invalid=2]="Invalid"}(ye||(ye={}));var Ie=[{id:"path",align:"left",disablePadding:!0,label:"Path"},{id:"url",align:"left",disablePadding:!0,label:"Raw URL"},{id:"ok",align:"left",disablePadding:!0,label:"valid"}];function Be(e){var t=e.classes,n=e.onSelectAllClick,r=e.order,o=e.orderBy,c=e.numSelected,i=e.rowCount,l=e.onRequestSort;return a.a.createElement(ce.a,null,a.a.createElement(ie.a,null,a.a.createElement(ae.a,{padding:"checkbox"},a.a.createElement(xe.a,{indeterminate:c>0&&c<i,checked:i>0&&c===i,onChange:n,inputProps:{"aria-label":"select all desserts"}})),Ie.map((function(e){return a.a.createElement(ae.a,{key:e.id,align:e.align,sortDirection:o===e.id&&r},a.a.createElement(Pe.a,{active:o===e.id,direction:o===e.id?r:"asc",onClick:(n=e.id,function(e){l(e,n)})},e.label,o===e.id?a.a.createElement("span",{className:t.visuallyHidden},"desc"===r?"sorted descending":"sorted ascending"):null));var n}))))}var Ae=Object(l.a)((function(e){return Object(S.a)({root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(Ne.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}})})),Ge=function(e){var t=Ae(),n=e.numSelected;return a.a.createElement(Re.a,{className:Object(L.a)(t.root,Object(O.a)({},t.highlight,n>0))},n>0?a.a.createElement(B.a,{className:t.title,color:"inherit",variant:"subtitle1",component:"div"},"".concat(n," selected")):a.a.createElement(B.a,{className:t.title,variant:"h6",id:"tableTitle",component:"div"},"Files found from Github repository"),n>0?a.a.createElement(a.a.Fragment,null):a.a.createElement(Fe.a,{title:"Filter list"},a.a.createElement(te.a,{"aria-label":"filter list"},a.a.createElement(Ue.a,null))))},Je=Object(l.a)((function(e){return Object(S.a)({root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}})})),Me=function(e){var t=e.files,n=e.repo,r=Je(),o=a.a.useState("asc"),c=Object(i.a)(o,2),l=c[0],u=c[1],s=a.a.useState("path"),p=Object(i.a)(s,2),f=p[0],m=p[1],h=a.a.useState((function(){var e=new Map;return t.forEach((function(t){e.set(t.path,!1)})),e})),d=Object(i.a)(h,2),v=d[0],g=d[1],b=a.a.useState((function(){var e=new Map;return t.forEach((function(t){e.set(t.path,ye.Unchecked)})),e})),y=Object(i.a)(b,2),j=y[0],x=y[1],S=a.a.useState(0),L=Object(i.a)(S,2),N=L[0],C=L[1],R=a.a.useState(100),F=Object(i.a)(R,2),T=F[0],U=F[1],_=function(){return Array.from(v).filter((function(e){return e[1]})).length},I=a.a.useState({"*.html":!0}),B=Object(i.a)(I,2),A=B[0],G=B[1],J=function(e){var t=e.target,n=t.name,r=t.checked;G(Object(je.a)(Object(je.a)({},A),{},Object(O.a)({},n,r)))},M=function(e){var t=D(n),r=t.userName,a=t.repoName;return"https://raw.githubusercontent.com/".concat(r,"/").concat(a,"/master/").concat(e)},V=function(){var e=Object(w.a)(E.a.mark((function e(){var n,r,a,o,c,i,l,u,s,p,f,m,h;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.filter((function(e){return v.get(e.path)})),r=new Map(j),a=Object(ke.a)(n),e.prev=3,a.s();case 5:if((o=a.n()).done){e.next=32;break}return c=o.value,i=M(c.path),e.next=10,fetch(i);case 10:return l=e.sent,e.next=13,l.text();case 13:return u=e.sent,e.next=16,Object(k.b)(u);case 16:s=e.sent,p=!0,f=0;case 19:if(!(f<s.length)){e.next=28;break}return m=s[f],e.next=23,Object(k.a)(m);case 23:h=e.sent,p=p&&h.ok;case 25:f+=1,e.next=19;break;case 28:r.set(c.path,p?ye.Valid:ye.Invalid),x(new Map(r));case 30:e.next=5;break;case 32:e.next=37;break;case 34:e.prev=34,e.t0=e.catch(3),a.e(e.t0);case 37:return e.prev=37,a.f(),e.finish(37);case 40:case"end":return e.stop()}}),e,null,[[3,34,37,40]])})));return function(){return e.apply(this,arguments)}}();return a.a.useEffect((function(){var e=new Map;t.forEach((function(t){e.set(t.path,ye.Unchecked)})),x(e)}),[v,x,t]),a.a.useEffect((function(){var e=new Map(v);Object.entries(A).forEach((function(n){var r=Object(i.a)(n,2),a=r[0],o=r[1],c=a.split(".").pop();t.filter((function(e){return e.path.split(".").pop()===c})).forEach((function(t){e.set(t.path,o)}))})),g(e)}),[A]),a.a.createElement("div",{className:r.root},a.a.createElement(le.a,{className:r.paper},a.a.createElement(Le.a,{row:!0},["*.js","*.ts","*.json","*.jsonld","*.html"].map((function(e){return a.a.createElement(Se.a,{key:e,control:a.a.createElement(xe.a,{checked:A[e],onChange:J,name:e,color:"primary"}),label:e})}))),a.a.createElement(P,{onClick:V,buttonText:"Check"}),a.a.createElement(Ge,{numSelected:_()}),a.a.createElement(oe.a,null,a.a.createElement(ne.a,{className:r.table,"aria-labelledby":"tableTitle",size:"medium","aria-label":"enhanced table"},a.a.createElement(Be,{classes:r,numSelected:_(),order:l,orderBy:f,onSelectAllClick:function(e){var n=new Map(v);t.forEach((function(t){n.set(t.path,e.target.checked)})),g(n)},onRequestSort:function(e,t){u(f===t&&"asc"===l?"desc":"asc"),m(t)},rowCount:t.length}),a.a.createElement(re.a,null,function(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var r=t(e[0],n[0]);return 0!==r?r:e[1]-n[1]})),n.map((function(e){return e[0]}))}(t,function(e,t){return"desc"===e?function(e,n){return _e(e,n,t)}:function(e,n){return-_e(e,n,t)}}(l,f)).slice(N*T,N*T+T).map((function(e,t){var n,r,o=(n=e.path,v.get(n)),c=function(e){return j.get(e)}(e.path),i="enhanced-table-checkbox-".concat(t),l="".concat(window.location.origin,"?url=").concat(M(e.path),"&tab=1");return r=c===ye.Valid?a.a.createElement(he.a,{style:{color:"green"}}):c===ye.Invalid?a.a.createElement(ve.a,{style:{color:"red"}}):a.a.createElement(a.a.Fragment,null),a.a.createElement(ie.a,{hover:!0,onClick:function(t){return function(e,t){var n=v.get(t),r=new Map(v);r.set(t,!n),g(r)}(0,e.path)},role:"checkbox","aria-checked":o,tabIndex:-1,key:e.path,selected:o},a.a.createElement(ae.a,{padding:"checkbox"},a.a.createElement(xe.a,{checked:o,inputProps:{"aria-labelledby":i}})),a.a.createElement(ae.a,{component:"th",id:i,scope:"row",padding:"none"},e.path),a.a.createElement(ae.a,null,a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:l},l)),a.a.createElement(ae.a,null,r))}))))),a.a.createElement(Ce.a,{rowsPerPageOptions:[5,10,25],component:"div",count:t.length,rowsPerPage:T,page:N,onChangePage:function(e,t){C(t)},onChangeRowsPerPage:function(e){U(parseInt(e.target.value,10)),C(0)}})))},Ve=Object(l.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},progressBar:{width:"100%",marginTop:e.spacing(2),marginBottom:e.spacing(2)}}})),We=function(){var e=Ve(),t=a.a.useState((function(){return K("repo")})),n=Object(i.a)(t,2),r=n[0],o=n[1],c=a.a.useState([]),l=Object(i.a)(c,2),u=l[0],s=l[1];a.a.useEffect((function(){z("repo",r)}),[r]);var p=function(){var e=Object(w.a)(E.a.mark((function e(){var t,n,a,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=D(r),n=t.userName,a=t.repoName,e.next=3,Object(k.c)(n,a);case 3:o=e.sent,s(o);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("div",{className:e.root},a.a.createElement(P,{onClick:p,buttonText:"List files"}),a.a.createElement($.a,{label:"Enter the URL of a Github repo",onChange:function(e){o(e.target.value)},defaultValue:r,style:{margin:8},fullWidth:!0,margin:"normal"}),u.length>0?a.a.createElement(Me,{files:u,repo:r}):a.a.createElement(a.a.Fragment,null))};function Qe(e){var t=e.children,n=e.value,r=e.index;return a.a.createElement("div",{role:"tabpanel",hidden:n!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},n===r&&a.a.createElement(f.a,{p:3},t))}function qe(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Ye=Object(l.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function ze(){var e=Ye(),t=a.a.useState((function(){var e,t=K("tab");return t?(e=Number.parseInt(t,10))>2&&(e=0):e=0,e})),n=Object(i.a)(t,2),r=n[0],o=n[1];return a.a.createElement("div",{className:e.root},a.a.createElement(u.a,{position:"static"},a.a.createElement(s.a,{value:r,onChange:function(e,t){!function(e){q.reset(),q.update("tab","".concat(e))}(t),o(t)},centered:!0},a.a.createElement(p.a,Object.assign({label:"Check a single JSON"},qe(0))),a.a.createElement(p.a,Object.assign({label:"Check a file"},qe(1))),a.a.createElement(p.a,Object.assign({label:"Check a Github repo"},qe(2))))),a.a.createElement(Qe,{value:r,index:0},a.a.createElement(Z,null)),a.a.createElement(Qe,{value:r,index:1},a.a.createElement(Oe,null)),a.a.createElement(Qe,{value:r,index:2},a.a.createElement(We,null)))}var Ke=function(){return a.a.createElement(ze,null)};n(227);console.log("Current commit is ".concat("70653e0")),c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Ke,null)),document.getElementById("root"))},32:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return v}));var r=n(71),a=n.n(r),o=function(e,t,n){void 0===t&&(t=""),void 0===n&&(n=""),this.ok=e,this.error={type:t,details:n}};function c(e,t,n,r,a,o,c){try{var i=e[o](c),l=i.value}catch(u){return void n(u)}i.done?t(l):Promise.resolve(l).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){c(o,r,a,i,l,"next",e)}function l(e){c(o,r,a,i,l,"throw",e)}i(void 0)}))}}var l=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){var t=function(e){var t=Object.prototype,n=t.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(S){i=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof p?t:p,o=Object.create(a.prototype),c=new k(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return x()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=E(c,n);if(i){if(i===s)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,c),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=l;var s={};function p(){}function f(){}function m(){}var h={};h[a]=function(){return this};var d=Object.getPrototypeOf,v=d&&d(d(j([])));v&&v!==t&&n.call(v,a)&&(h=v);var g=m.prototype=p.prototype=Object.create(h);function b(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function y(e,t){var r;this._invoke=function(a,o){function c(){return new t((function(r,c){!function r(a,o,c,i){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,p=s.value;return p&&"object"===typeof p&&n.call(p,"__await")?t.resolve(p.__await).then((function(e){r("next",e,c,i)}),(function(e){r("throw",e,c,i)})):t.resolve(p).then((function(e){s.value=e,c(s)}),(function(e){return r("throw",e,c,i)}))}i(l.arg)}(a,o,r,c)}))}return r=r?r.then(c,c):c()}}function E(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:x}}function x(){return{value:void 0,done:!0}}return f.prototype=g.constructor=m,m.constructor=f,f.displayName=i(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,i(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(y.prototype),y.prototype[o]=function(){return this},e.AsyncIterator=y,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new y(l(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},b(g),i(g,c,"Generator"),g[a]=function(){return this},g.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports);try{regeneratorRuntime=t}catch(n){Function("r","regeneratorRuntime = r")(t)}})),u={},s="undefined"!==typeof e&&null!=e.versions&&null!=e.versions.node?a.a.documentLoaders.node():a.a.documentLoaders.xhr(),p=function(){var e=i(l.mark((function e(t){var n;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t in u)){e.next=2;break}return e.abrupt("return",{contextUrl:null,document:u[t],documentUrl:t});case 2:return e.next=4,s(t);case 4:return n=e.sent,u[t]=n.document,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){return!["@id","@type"].includes(e)},m=function(){var e=i(l.mark((function e(t,n){var r,c,i,u,s,m;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===n&&(n=p),e.prev=1,r="string"===typeof t?JSON.parse(t):t,e.next=5,a.a.expand(r,{documentLoader:n});case 5:return c=e.sent,e.next=8,a.a.compact(c,r["@context"],{documentLoader:n});case 8:if(i=e.sent,u=Object.keys(r).filter(f),s=new Set(Object.keys(i)),0!==(m=u.filter((function(e){return!s.has(e)}))).length){e.next=14;break}return e.abrupt("return",new o(!0));case 14:return e.abrupt("return",new o(!1,"MISSING_PROPERTIES_IN_CONTEXT",JSON.stringify(m)));case 17:return e.prev=17,e.t0=e.catch(1),e.abrupt("return",new o(!1,e.t0.name,e.t0.message));case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t,n){return e.apply(this,arguments)}}(),h=n(225),d=function(){var e=i(l.mark((function e(t){return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h("https://api.github.com/repos/"+t).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=i(l.mark((function e(t,n,r){var a,o;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===r&&(r="HEAD"),e.next=3,d(t+"/"+n+"/git/trees/"+r+"?recursive=1");case 3:return a=e.sent,o=a.tree.filter((function(e){return"blob"===e.type})),e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),g=function(e){return function(e){for(var t=[],n=0;n<e.length;n+=1)"{"===e[n]&&t.push(n);return t}(e).map((function(t){return function(e,t){var n=e[t];if("{"!==n)throw new Error("start must be the index of an opening bracket");for(var r=1,a=t+1,o=e.length;0!==r&&a<o;){var c=e[a];"{"===c?r+=1:"}"===c&&(r-=1),a+=1,n+=c}try{return JSON.parse(n)}catch(i){return null}}(e,t)})).filter(Boolean)},b=function(e){return g(e).filter((function(e){return function(e){return"@context"in e}(e)}))}}).call(this,n(62))}},[[166,1,2]]]);
//# sourceMappingURL=main.b25568a0.chunk.js.map