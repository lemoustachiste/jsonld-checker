(this["webpackJsonpjsonld-checker-app"]=this["webpackJsonpjsonld-checker-app"]||[]).push([[0],{115:function(e){e.exports=JSON.parse('{"@context":["https://transmute-industries.github.io/universal-wallet/contexts/wallet-v1.json"],"id":"did:example:123","type":["CachedDIDDocument"],"name":"Farming Sensor DID Document","image":"https://via.placeholder.com/150","description":"An IoT device in the middle of a corn field.","tags":["professional"],"correlation":["4058a72a-9523-11ea-bb37-0242ac130002"],"created":"2017-06-18T21:19:10Z","expires":"2026-06-18T21:19:10Z","didDocument":{"@context":"https://w3id.org/did/v0.11","id":"did:example:123","assertionMethod":["did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN"],"authentication":["did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN"],"capabilityDelegation":["did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN"],"capabilityInvocation":["did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN"],"keyAgreement":[{"id":"did:example:123#zC5iai1sL93gQxn8LKh1i42fTbpfar65dVx4NYznYfG3Y5","type":"X25519KeyAgreementKey2019","controller":"did:example:123","publicKeyBase58":"6DrzegWwfw8Xg5MsHX95sVnJaPmtXP214B5X9hkG9oRs"}],"publicKey":[{"id":"did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN","type":"Ed25519VerificationKey2018","controller":"did:example:123","publicKeyBase58":"DqS5F3GVe3rCxucgi4JBNagjv4dKoHc8TDLDw9kR58Pz"}]}}')},130:function(e,t,a){e.exports=a(191)},162:function(e,t){},175:function(e,t){},185:function(e,t){},186:function(e,t){},190:function(e,t,a){},191:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),c=a(10),l=a.n(c),i=a(16),u=a(235),s=a(250),m=a(254),d=a(251),p=a(253),f=a(111),b=a.n(f),E=(a(142),a(143),a(144),function(e){var t=e.onChange,a=e.value,n=e.index,r=e.readOnly;return o.a.createElement(b.a,{placeholder:"Paste your JSON-LD object here",width:"800px",mode:"json",theme:"monokai",name:"json-ld-editor-".concat(n),onChange:t,readOnly:r,fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,value:a,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2}})}),g=a(237),v=Object(u.a)((function(e){return{wrapper:{margin:e.spacing(1),position:"relative"}}})),h=function(e){var t=e.value,a=v(),n=encodeURIComponent(t);return o.a.createElement("div",{className:a.wrapper},o.a.createElement(g.a,{color:"primary",variant:"contained",href:"https://json-ld.org/playground/#json-ld=".concat(n),target:"_blank",rel:"noopener"},"Open in JSON-LD Playground"))},y=a(12),j=a.n(y),S=a(68),O=a(83),x=a(58),k=a(239),N=a(72),D=a(71),w=a(256),P=a(3),C=Object(u.a)((function(e){return Object(w.a)({root:{display:"flex",alignItems:"center"},wrapper:{margin:e.spacing(1),position:"relative"},buttonSuccess:{backgroundColor:N.a[500],"&:hover":{backgroundColor:N.a[700]}},buttonError:{backgroundColor:D.a[500],"&:hover":{backgroundColor:D.a[700]}},buttonProgress:{color:N.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}})})),L=function(e){var t,a=e.value,n=e.setResult,r=C(),c=o.a.useState(!1),l=Object(i.a)(c,2),u=l[0],s=l[1],m=o.a.useState(!1),d=Object(i.a)(m,2),p=d[0],f=d[1],b=o.a.useState(!1),E=Object(i.a)(b,2),v=E[0],h=E[1],y=Object(P.a)((t={},Object(O.a)(t,r.buttonSuccess,p),Object(O.a)(t,r.buttonError,v),t));o.a.useEffect((function(){f(!1),h(!1)}),[a]);var N=function(){var e=Object(S.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=9;break}return s(!0),e.next=4,Object(x.a)(a);case 4:t=e.sent,f(t.ok),h(!t.ok),n(t),s(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.createElement("div",{className:r.root},p,v,o.a.createElement("div",{className:r.wrapper},o.a.createElement(g.a,{variant:"contained",color:"primary",className:y,disabled:u,onClick:N},"Check"),u&&o.a.createElement(k.a,{size:24,className:r.buttonProgress})))},B=a(115),R=a(255),I=a(241),A=function(e){var t=e.result,a=e.className;return t?t.ok?o.a.createElement(R.a,{severity:"success"},"All Good!"):o.a.createElement(R.a,{className:a,severity:"error"},o.a.createElement(I.a,null,t.error.type),t.error.details):o.a.createElement(o.a.Fragment,null)},F=JSON.stringify(B,null,2),T=Object(u.a)((function(e){return{buttonWrapper:{display:"flex",margin:e.spacing(1)},contentWrapper:{display:"table",margin:e.spacing(1)},checkResult:{marginBottom:e.spacing(2)}}})),z=function(){var e=T(),t=o.a.useState(F),a=Object(i.a)(t,2),n=a[0],r=a[1],c=o.a.useState(),l=Object(i.a)(c,2),u=l[0],s=l[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:e.buttonWrapper},o.a.createElement(L,{value:n,setResult:s}),o.a.createElement(h,{value:n})),o.a.createElement("div",{className:e.contentWrapper},o.a.createElement(A,{className:e.checkResult,result:u}),o.a.createElement(E,{onChange:function(e){s(void 0),r(e)},value:n})))},G=a(249),J=a(252);!function(e){e[e.PENDING=0]="PENDING",e[e.PASSED=1]="PASSED",e[e.FAILED=2]="FAILED",e[e.TO_PROCESS=3]="TO_PROCESS"}(n||(n={}));var M=n,H=a(244),W=a(240),V=a(246),K=a(248),q=a(243),Q=a(245),X=a(247),_=a(242),U=a(194),Y=a(193),Z=a(120),$=a.n(Z),ee=a(119),te=a.n(ee),ae=a(116),ne=a.n(ae),re=a(117),oe=a.n(re),ce=a(118),le=a.n(ce),ie=Object(u.a)({root:{"& > *":{borderBottom:"unset"}}});function ue(e){var t,a=e.row,n=o.a.useState(!1),r=Object(i.a)(n,2),c=r[0],l=r[1],u=ie();switch(a.status){case M.PASSED:t=o.a.createElement(ne.a,{style:{color:"green"}});break;case M.FAILED:t=o.a.createElement(oe.a,{style:{color:"red"}});break;case M.PENDING:default:t=o.a.createElement(le.a,{style:{color:"orange"}})}return o.a.createElement(o.a.Fragment,null,o.a.createElement(_.a,{className:u.root},o.a.createElement(q.a,null,o.a.createElement(W.a,{"aria-label":"expand row",size:"small",onClick:function(){return l(!c)}},c?o.a.createElement(te.a,null):o.a.createElement($.a,null))),o.a.createElement(q.a,{component:"th",scope:"row"},a.name),o.a.createElement(q.a,{align:"center"},t)),o.a.createElement(_.a,null,o.a.createElement(q.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6},o.a.createElement(H.a,{in:c,timeout:"auto",unmountOnExit:!0},o.a.createElement(p.a,{margin:1},o.a.createElement(U.a,{variant:"h6",gutterBottom:!0,component:"div"},"Details"),o.a.createElement(A,{result:a.result}),o.a.createElement(E,{value:JSON.stringify(a.object,null,2),index:a.key,readOnly:!0}))))))}var se=function(e){var t=e.results.map((function(e,t){var a=e.object,n=e.status,r=e.error,o=e.result;return{key:t,name:a.id?a.id:"object ".concat(t),status:n,object:a,error:r,result:o}}));return 0===t.length?o.a.createElement(o.a.Fragment,null):o.a.createElement(Q.a,{component:Y.a},o.a.createElement(V.a,{"aria-label":"collapsible table"},o.a.createElement(X.a,null,o.a.createElement(_.a,null,o.a.createElement(q.a,null),o.a.createElement(q.a,null,"JSON-LD objects detected"),o.a.createElement(q.a,{align:"center"},"Status"))),o.a.createElement(K.a,null,t.map((function(e){return o.a.createElement(ue,{key:e.key,row:e})})))))},me="https://raw.githubusercontent.com/transmute-industries/universal-wallet/master/docs/index.html",de=Object(u.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},progressBar:{width:"100%",marginTop:e.spacing(2),marginBottom:e.spacing(2)},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"25ch"}}})),pe=function(){var e=o.a.useState(me),t=Object(i.a)(e,2),a=t[0],n=t[1],r=o.a.useState([]),c=Object(i.a)(r,2),l=c[0],u=c[1],s=o.a.useState(0),m=Object(i.a)(s,2),d=m[0],p=m[1],f=function(){var e=Object(S.a)(j.a.mark((function e(){var t,n,r,o,c,l,i,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:return t=e.sent,e.next=5,t.text();case 5:return n=e.sent,e.next=8,Object(x.b)(n);case 8:r=e.sent,p(r.length),o=function(e){return new Promise((function(t){return setTimeout(t,e)}))},c=[],l=0;case 13:if(!(l<r.length)){e.next=25;break}return i=r[l],e.next=17,o(200);case 17:return e.next=19,Object(x.a)(i);case 19:s=e.sent,c.push({object:i,status:s.ok?M.PASSED:M.FAILED,error:s.error,result:s}),u([].concat(c));case 22:l+=1,e.next=13;break;case 25:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=de(),E=l.filter((function(e){return e.status===M.FAILED})),v=E.length>0,h="Found ".concat(E.length," JSON-LD errors");return o.a.createElement("div",{className:b.root},o.a.createElement(g.a,{variant:"contained",color:"primary",onClick:f},"Check"),o.a.createElement(J.a,{label:"Enter the URL to a file",onChange:function(e){n(e.target.value)},defaultValue:me,style:{margin:8},fullWidth:!0,margin:"normal"}),v?o.a.createElement(R.a,{severity:"error"},o.a.createElement(I.a,null,h),"Check details below"):o.a.createElement(o.a.Fragment,null),d>0?o.a.createElement("div",{className:b.progressBar},o.a.createElement(G.a,{variant:"determinate",value:100*l.length/d})):o.a.createElement(o.a.Fragment,null),o.a.createElement(se,{results:l}))};function fe(e){var t=e.children,a=e.value,n=e.index;return o.a.createElement("div",{role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},a===n&&o.a.createElement(p.a,{p:3},t))}function be(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Ee=Object(u.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function ge(){var e=Ee(),t=o.a.useState(0),a=Object(i.a)(t,2),n=a[0],r=a[1];return o.a.createElement("div",{className:e.root},o.a.createElement(s.a,{position:"static"},o.a.createElement(m.a,{value:n,onChange:function(e,t){2===t?alert("Not implemented yet"):r(t)},centered:!0},o.a.createElement(d.a,Object.assign({label:"Check a single JSON"},be(0))),o.a.createElement(d.a,Object.assign({label:"Check a file"},be(1))),o.a.createElement(d.a,Object.assign({label:"Check a Github repo"},be(2))))),o.a.createElement(fe,{value:n,index:0},o.a.createElement(z,null)),o.a.createElement(fe,{value:n,index:1},o.a.createElement(pe,null)),o.a.createElement(fe,{value:n,index:2},o.a.createElement("div",null,"TODO")))}var ve=function(){return o.a.createElement(ge,null)};a(190);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ve,null)),document.getElementById("root"))},58:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(49),r=a.n(n);"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var o=function(e,t,a){void 0===t&&(t=""),void 0===a&&(a=""),this.ok=e,this.error={type:t,details:a}},c={},l="undefined"!==typeof e&&null!=e.versions&&null!=e.versions.node?r.a.documentLoaders.node():r.a.documentLoaders.xhr();r.a.documentLoader=function(e){try{return e in c?Promise.resolve({contextUrl:null,document:c[e],documentUrl:e}):Promise.resolve(l(e)).then((function(t){return c[e]=t.document,t}))}catch(t){return Promise.reject(t)}};var i=function(e){return!["@id","@type"].includes(e)},u=function(e){try{return Promise.resolve(function(e,t){try{var a=e()}catch(n){return t(n)}return a&&a.then?a.then(void 0,t):a}((function(){var t;return t="string"===typeof e?JSON.parse(e):e,Promise.resolve(r.a.expand(t)).then((function(e){return Promise.resolve(r.a.compact(e,t["@context"])).then((function(e){var a=Object.keys(t).filter(i),n=new Set(Object.keys(e)),r=a.filter((function(e){return!n.has(e)}));return 0===r.length?new o(!0):new o(!1,"MISSING_PROPERTIES_IN_CONTEXT",JSON.stringify(r))}))}))}),(function(e){return new o(!1,e.name,e.message)})))}catch(t){return Promise.reject(t)}},s=function(e){return function(e){for(var t=[],a=0;a<e.length;a+=1)"{"===e[a]&&t.push(a);return t}(e).map((function(t){return function(e,t){var a=e[t];if("{"!==a)throw new Error("start must be the index of an opening bracket");for(var n=1,r=t+1,o=e.length;0!==n&&r<o;){var c=e[r];"{"===c?n+=1:"}"===c&&(n-=1),r+=1,a+=c}try{return JSON.parse(a)}catch(l){return null}}(e,t)})).filter(Boolean)},m=function(e){return s(e).filter((function(e){return function(e){return"@context"in e}(e)}))}}).call(this,a(51))}},[[130,1,2]]]);
//# sourceMappingURL=main.74962b3a.chunk.js.map