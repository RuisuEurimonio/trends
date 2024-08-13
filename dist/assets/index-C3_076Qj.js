var ut=Object.defineProperty;var _e=t=>{throw TypeError(t)};var lt=(t,e,i)=>e in t?ut(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var I=(t,e,i)=>lt(t,typeof e!="symbol"?e+"":e,i),De=(t,e,i)=>e.has(t)||_e("Cannot "+i);var x=(t,e,i)=>(De(t,e,"read from private field"),i?i.call(t):e.get(t)),Pe=(t,e,i)=>e.has(t)?_e("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i);var l=(t,e,i)=>(De(t,e,"access private method"),i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();var ct=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ue={exports:{}};(function(t,e){(function(i,n){t.exports=n()})(ct,function(){return function(i){function n(s){if(r[s])return r[s].exports;var u=r[s]={exports:{},id:s,loaded:!1};return i[s].call(u.exports,u,u.exports,n),u.loaded=!0,u.exports}var r={};return n.m=i,n.c=r,n.p="dist/",n(0)}([function(i,n,r){function s(b){return b&&b.__esModule?b:{default:b}}var u=Object.assign||function(b){for(var M=1;M<arguments.length;M++){var _=arguments[M];for(var B in _)Object.prototype.hasOwnProperty.call(_,B)&&(b[B]=_[B])}return b},d=r(1),y=(s(d),r(6)),c=s(y),v=r(7),h=s(v),m=r(8),f=s(m),g=r(9),P=s(g),N=r(10),Z=s(N),re=r(11),oe=s(re),se=r(14),ee=s(se),j=[],te=!1,S={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},q=function(){var b=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(b&&(te=!0),te)return j=(0,oe.default)(j,S),(0,Z.default)(j,S.once),j},U=function(){j=(0,ee.default)(),q()},p=function(){j.forEach(function(b,M){b.node.removeAttribute("data-aos"),b.node.removeAttribute("data-aos-easing"),b.node.removeAttribute("data-aos-duration"),b.node.removeAttribute("data-aos-delay")})},a=function(b){return b===!0||b==="mobile"&&P.default.mobile()||b==="phone"&&P.default.phone()||b==="tablet"&&P.default.tablet()||typeof b=="function"&&b()===!0},w=function(b){S=u(S,b),j=(0,ee.default)();var M=document.all&&!window.atob;return a(S.disable)||M?p():(S.disableMutationObserver||f.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),S.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",S.easing),document.querySelector("body").setAttribute("data-aos-duration",S.duration),document.querySelector("body").setAttribute("data-aos-delay",S.delay),S.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?q(!0):S.startEvent==="load"?window.addEventListener(S.startEvent,function(){q(!0)}):document.addEventListener(S.startEvent,function(){q(!0)}),window.addEventListener("resize",(0,h.default)(q,S.debounceDelay,!0)),window.addEventListener("orientationchange",(0,h.default)(q,S.debounceDelay,!0)),window.addEventListener("scroll",(0,c.default)(function(){(0,Z.default)(j,S.once)},S.throttleDelay)),S.disableMutationObserver||f.default.ready("[data-aos]",U),j)};i.exports={init:w,refresh:q,refreshHard:U}},function(i,n){},,,,,function(i,n){(function(r){function s(a,w,b){function M(k){var O=L,W=z;return L=z=void 0,Q=k,C=a.apply(W,O)}function _(k){return Q=k,E=setTimeout(G,w),V?M(k):C}function B(k){var O=k-A,W=k-Q,qe=w-O;return $?U(qe,H-W):qe}function K(k){var O=k-A,W=k-Q;return A===void 0||O>=w||O<0||$&&W>=H}function G(){var k=p();return K(k)?me(k):void(E=setTimeout(G,B(k)))}function me(k){return E=void 0,T&&L?M(k):(L=z=void 0,C)}function xe(){E!==void 0&&clearTimeout(E),Q=0,L=A=z=E=void 0}function ae(){return E===void 0?C:me(p())}function D(){var k=p(),O=K(k);if(L=arguments,z=this,A=k,O){if(E===void 0)return _(A);if($)return E=setTimeout(G,w),M(A)}return E===void 0&&(E=setTimeout(G,w)),C}var L,z,H,C,E,A,Q=0,V=!1,$=!1,T=!0;if(typeof a!="function")throw new TypeError(m);return w=v(w)||0,d(b)&&(V=!!b.leading,$="maxWait"in b,H=$?q(v(b.maxWait)||0,w):H,T="trailing"in b?!!b.trailing:T),D.cancel=xe,D.flush=ae,D}function u(a,w,b){var M=!0,_=!0;if(typeof a!="function")throw new TypeError(m);return d(b)&&(M="leading"in b?!!b.leading:M,_="trailing"in b?!!b.trailing:_),s(a,w,{leading:M,maxWait:w,trailing:_})}function d(a){var w=typeof a>"u"?"undefined":h(a);return!!a&&(w=="object"||w=="function")}function y(a){return!!a&&(typeof a>"u"?"undefined":h(a))=="object"}function c(a){return(typeof a>"u"?"undefined":h(a))=="symbol"||y(a)&&S.call(a)==g}function v(a){if(typeof a=="number")return a;if(c(a))return f;if(d(a)){var w=typeof a.valueOf=="function"?a.valueOf():a;a=d(w)?w+"":w}if(typeof a!="string")return a===0?a:+a;a=a.replace(P,"");var b=Z.test(a);return b||re.test(a)?oe(a.slice(2),b?2:8):N.test(a)?f:+a}var h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},m="Expected a function",f=NaN,g="[object Symbol]",P=/^\s+|\s+$/g,N=/^[-+]0x[0-9a-f]+$/i,Z=/^0b[01]+$/i,re=/^0o[0-7]+$/i,oe=parseInt,se=(typeof r>"u"?"undefined":h(r))=="object"&&r&&r.Object===Object&&r,ee=(typeof self>"u"?"undefined":h(self))=="object"&&self&&self.Object===Object&&self,j=se||ee||Function("return this")(),te=Object.prototype,S=te.toString,q=Math.max,U=Math.min,p=function(){return j.Date.now()};i.exports=u}).call(n,function(){return this}())},function(i,n){(function(r){function s(p,a,w){function b(T){var k=D,O=L;return D=L=void 0,A=T,H=p.apply(O,k)}function M(T){return A=T,C=setTimeout(K,a),Q?b(T):H}function _(T){var k=T-E,O=T-A,W=a-k;return V?q(W,z-O):W}function B(T){var k=T-E,O=T-A;return E===void 0||k>=a||k<0||V&&O>=z}function K(){var T=U();return B(T)?G(T):void(C=setTimeout(K,_(T)))}function G(T){return C=void 0,$&&D?b(T):(D=L=void 0,H)}function me(){C!==void 0&&clearTimeout(C),A=0,D=E=L=C=void 0}function xe(){return C===void 0?H:G(U())}function ae(){var T=U(),k=B(T);if(D=arguments,L=this,E=T,k){if(C===void 0)return M(E);if(V)return C=setTimeout(K,a),b(E)}return C===void 0&&(C=setTimeout(K,a)),H}var D,L,z,H,C,E,A=0,Q=!1,V=!1,$=!0;if(typeof p!="function")throw new TypeError(h);return a=c(a)||0,u(w)&&(Q=!!w.leading,V="maxWait"in w,z=V?S(c(w.maxWait)||0,a):z,$="trailing"in w?!!w.trailing:$),ae.cancel=me,ae.flush=xe,ae}function u(p){var a=typeof p>"u"?"undefined":v(p);return!!p&&(a=="object"||a=="function")}function d(p){return!!p&&(typeof p>"u"?"undefined":v(p))=="object"}function y(p){return(typeof p>"u"?"undefined":v(p))=="symbol"||d(p)&&te.call(p)==f}function c(p){if(typeof p=="number")return p;if(y(p))return m;if(u(p)){var a=typeof p.valueOf=="function"?p.valueOf():p;p=u(a)?a+"":a}if(typeof p!="string")return p===0?p:+p;p=p.replace(g,"");var w=N.test(p);return w||Z.test(p)?re(p.slice(2),w?2:8):P.test(p)?m:+p}var v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},h="Expected a function",m=NaN,f="[object Symbol]",g=/^\s+|\s+$/g,P=/^[-+]0x[0-9a-f]+$/i,N=/^0b[01]+$/i,Z=/^0o[0-7]+$/i,re=parseInt,oe=(typeof r>"u"?"undefined":v(r))=="object"&&r&&r.Object===Object&&r,se=(typeof self>"u"?"undefined":v(self))=="object"&&self&&self.Object===Object&&self,ee=oe||se||Function("return this")(),j=Object.prototype,te=j.toString,S=Math.max,q=Math.min,U=function(){return ee.Date.now()};i.exports=s}).call(n,function(){return this}())},function(i,n){function r(v){var h=void 0,m=void 0;for(h=0;h<v.length;h+=1)if(m=v[h],m.dataset&&m.dataset.aos||m.children&&r(m.children))return!0;return!1}function s(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function u(){return!!s()}function d(v,h){var m=window.document,f=s(),g=new f(y);c=h,g.observe(m.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function y(v){v&&v.forEach(function(h){var m=Array.prototype.slice.call(h.addedNodes),f=Array.prototype.slice.call(h.removedNodes),g=m.concat(f);if(r(g))return c()})}Object.defineProperty(n,"__esModule",{value:!0});var c=function(){};n.default={isSupported:u,ready:d}},function(i,n){function r(m,f){if(!(m instanceof f))throw new TypeError("Cannot call a class as a function")}function s(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function m(f,g){for(var P=0;P<g.length;P++){var N=g[P];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(f,N.key,N)}}return function(f,g,P){return g&&m(f.prototype,g),P&&m(f,P),f}}(),d=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,y=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,v=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,h=function(){function m(){r(this,m)}return u(m,[{key:"phone",value:function(){var f=s();return!(!d.test(f)&&!y.test(f.substr(0,4)))}},{key:"mobile",value:function(){var f=s();return!(!c.test(f)&&!v.test(f.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),m}();n.default=new h},function(i,n){Object.defineProperty(n,"__esModule",{value:!0});var r=function(u,d,y){var c=u.node.getAttribute("data-aos-once");d>u.position?u.node.classList.add("aos-animate"):typeof c<"u"&&(c==="false"||!y&&c!=="true")&&u.node.classList.remove("aos-animate")},s=function(u,d){var y=window.pageYOffset,c=window.innerHeight;u.forEach(function(v,h){r(v,c+y,d)})};n.default=s},function(i,n,r){function s(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(n,"__esModule",{value:!0});var u=r(12),d=s(u),y=function(c,v){return c.forEach(function(h,m){h.node.classList.add("aos-init"),h.position=(0,d.default)(h.node,v.offset)}),c};n.default=y},function(i,n,r){function s(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(n,"__esModule",{value:!0});var u=r(13),d=s(u),y=function(c,v){var h=0,m=0,f=window.innerHeight,g={offset:c.getAttribute("data-aos-offset"),anchor:c.getAttribute("data-aos-anchor"),anchorPlacement:c.getAttribute("data-aos-anchor-placement")};switch(g.offset&&!isNaN(g.offset)&&(m=parseInt(g.offset)),g.anchor&&document.querySelectorAll(g.anchor)&&(c=document.querySelectorAll(g.anchor)[0]),h=(0,d.default)(c).top,g.anchorPlacement){case"top-bottom":break;case"center-bottom":h+=c.offsetHeight/2;break;case"bottom-bottom":h+=c.offsetHeight;break;case"top-center":h+=f/2;break;case"bottom-center":h+=f/2+c.offsetHeight;break;case"center-center":h+=f/2+c.offsetHeight/2;break;case"top-top":h+=f;break;case"bottom-top":h+=c.offsetHeight+f;break;case"center-top":h+=c.offsetHeight/2+f}return g.anchorPlacement||g.offset||isNaN(v)||(m=v),h+m};n.default=y},function(i,n){Object.defineProperty(n,"__esModule",{value:!0});var r=function(s){for(var u=0,d=0;s&&!isNaN(s.offsetLeft)&&!isNaN(s.offsetTop);)u+=s.offsetLeft-(s.tagName!="BODY"?s.scrollLeft:0),d+=s.offsetTop-(s.tagName!="BODY"?s.scrollTop:0),s=s.offsetParent;return{top:d,left:u}};n.default=r},function(i,n){Object.defineProperty(n,"__esModule",{value:!0});var r=function(s){return s=s||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(s,function(u){return{node:u}})};n.default=r}])})})(Ue);var ft=Ue.exports;const pt=dt(ft);pt.init();const Be=t=>Array.isArray(t),Qe=t=>Be(t)?t:[t];let ht=function(t){let e=function(f){return Qe(f).forEach(g=>{var P;return m.set(Symbol((P=g.char)==null?void 0:P.innerText),r({...g}))}),this},i=()=>y().filter(f=>f.typeable),n=function(f,g){let P=[...m.keys()];m.set(P[f],r(g))},r=f=>(f.shouldPauseCursor=function(){return!!(this.typeable||this.cursorable||this.deletable)},f),s=function(){m.forEach(f=>delete f.done)},u=function(){m=new Map,e(t)},d=()=>m,y=()=>Array.from(m.values()),c=f=>m.delete(f),v=(f=!1)=>f?y():y().filter(g=>!g.done),h=(f,g=!1)=>g?m.delete(f):m.get(f).done=!0,m=new Map;return e(t),{add:e,set:n,wipe:u,done:h,reset:s,destroy:c,getItems:v,getQueue:d,getTypeable:i}};const Ve="data-typeit-id",X="ti-cursor",mt="END",yt={started:!1,completed:!1,frozen:!1,destroyed:!1},ne={breakLines:!0,cursor:{autoPause:!0,autoPauseDelay:500,animation:{frames:[0,0,1].map(t=>({opacity:t})),options:{iterations:1/0,easing:"steps(2, start)",fill:"forwards"}}},cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}},bt=`[${Ve}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`,be=t=>document.createElement(t),Ae=t=>document.createTextNode(t),We=(t,e="")=>{let i=be("style");i.id=e,i.appendChild(Ae(t)),document.head.appendChild(i)},ze=t=>(Be(t)||(t=[t/2,t/2]),t),He=(t,e)=>Math.abs(Math.random()*(t+e-(t-e))+(t-e));let $e=t=>t/2;function gt(t){let{speed:e,deleteSpeed:i,lifeLike:n}=t;return i=i!==null?i:e/3,n?[He(e,$e(e)),He(i,$e(i))]:[e,i]}const Ye=t=>Array.from(t);let Le=t=>([...t.childNodes].forEach(e=>{if(e.nodeValue){[...e.nodeValue].forEach(i=>{e.parentNode.insertBefore(Ae(i),e)}),e.remove();return}Le(e)}),t);const Ke=t=>{let e=document.implementation.createHTMLDocument();return e.body.innerHTML=t,Le(e.body)};function Ge(t,e=!1,i=!1){let n=t.querySelector(`.${X}`),r=document.createTreeWalker(t,NodeFilter.SHOW_ALL,{acceptNode:d=>{var y,c;if(n&&i){if((y=d.classList)!=null&&y.contains(X))return NodeFilter.FILTER_ACCEPT;if(n.contains(d))return NodeFilter.FILTER_REJECT}return(c=d.classList)!=null&&c.contains(X)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),s,u=[];for(;s=r.nextNode();)s.originalParent||(s.originalParent=s.parentNode),u.push(s);return e?u.reverse():u}function vt(t){return Ge(Ke(t))}function wt(t,e=!0){return e?vt(t):Ye(t).map(Ae)}const kt=({index:t,newIndex:e,queueItems:i,cleanUp:n})=>{for(let r=t+1;r<e+1;r++)n(i[r][0])},Je=t=>Number.isInteger(t),Fe=({queueItems:t,selector:e,cursorPosition:i,to:n})=>{if(Je(e))return e*-1;let r=new RegExp(mt,"i").test(n),s=e?[...t].reverse().findIndex(({char:d})=>{let y=d.parentElement,c=y.matches(e);return r&&c?!0:c&&y.firstChild.isSameNode(d)}):-1;s<0&&(s=r?0:t.length-1);let u=r?0:1;return s-i+u},St=t=>(t.forEach(clearTimeout),[]),ye=(t,e)=>new Array(e).fill(t);let ke=t=>new Promise(e=>{requestAnimationFrame(async()=>{e(await t())})}),Xe=t=>t==null?void 0:t.getAnimations().find(e=>e.id===t.dataset.tiAnimationId),Ze=({cursor:t,frames:e,options:i})=>{let n=t.animate(e,i);return n.pause(),n.id=t.dataset.tiAnimationId,ke(()=>{ke(()=>{n.play()})}),n},Tt=({cursor:t,options:e,cursorOptions:i})=>{if(!t||!i)return;let n=Xe(t),r;n&&(e.delay=n.effect.getComputedTiming().delay,r=n.currentTime,n.cancel());let s=Ze({cursor:t,frames:i.animation.frames,options:e});return r&&(s.currentTime=r),s},Re=t=>{var e;return(e=t.func)==null?void 0:e.call(null)},xt=async({index:t,queueItems:e,wait:i,cursor:n,cursorOptions:r})=>{let s=e[t][1],u=[],d=t,y=s,c=()=>y&&!y.delay,v=s.shouldPauseCursor()&&r.autoPause;for(;c();)u.push(y),c()&&d++,y=e[d]?e[d][1]:null;if(u.length)return await ke(async()=>{for(let f of u)await Re(f)}),d-1;let h=Xe(n),m;return h&&(m={...h.effect.getComputedTiming(),delay:v?r.autoPauseDelay:0}),await i(async()=>{h&&v&&h.cancel(),await ke(()=>{Re(s)})},s.delay),await Tt({cursor:n,options:m,cursorOptions:r}),t};const Pt=(t,e)=>{new IntersectionObserver((n,r)=>{n.forEach(s=>{s.isIntersecting&&(e(),r.unobserve(t))})},{threshold:1}).observe(t)},Et=()=>Math.random().toString().substring(2,9),Se=t=>"value"in t;let Ct=t=>Se(t)?Ye(t.value):Ge(t,!0).filter(e=>!(e.childNodes.length>0)),ie=t=>typeof t=="function"?t():t,Ie=(t,e=document,i=!1)=>e[`querySelector${i?"All":""}`](t),Mt=t=>/body/i.test(t==null?void 0:t.tagName),Ot=(t,e)=>{if(Se(t)){t.value=`${t.value}${e.textContent}`;return}e.innerHTML="";let i=Mt(e.originalParent)?t:e.originalParent||t;i.insertBefore(e,Ie("."+X,i)||null)};const Nt=t=>/<(.+)>(.*?)<\/(.+)>/.test(t.outerHTML),ue=(t,e)=>Object.assign({},t,e);let jt=t=>{var e,i;if(typeof t=="object"){let n={},{frames:r,options:s}=ne.cursor.animation;return n.animation=t.animation||{},n.animation.frames=((e=t.animation)==null?void 0:e.frames)||r,n.animation.options=ue(s,((i=t.animation)==null?void 0:i.options)||{}),n.autoPause=t.autoPause??ne.cursor.autoPause,n.autoPauseDelay=t.autoPauseDelay||ne.cursor.autoPauseDelay,n}return t===!0?ne.cursor:t};const At=(t,e)=>{if(!t)return;let i=t.parentNode;(i.childNodes.length>1||i.isSameNode(e)?t:i).remove()},Lt=(t,e,i)=>{let n=e[i-1],r=Ie(`.${X}`,t);t=(n==null?void 0:n.parentNode)||t,t.insertBefore(r,n||null)};function It(t){return typeof t=="string"?Ie(t):t}let qt={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"",transform:"translateX(-.125em)"},_t=(t,e)=>{let n=`${`[${Ve}='${t}']`} .${X}`,r=getComputedStyle(e),s=Object.entries(qt).reduce((u,[d,y])=>`${u} ${d}: var(--ti-cursor-${d}, ${y||r[d]});`,"");We(`${n} { display: inline-block; width: 0; ${s} }`,t)};function Dt(t){return t.replace(/<!--(.+?)-->/g,"").trim().split(/<br(?:\s*?)(?:\/)?>/)}let zt=(t,e,i)=>Math.min(Math.max(e+t,0),i.length),Ht=(t,e,i)=>new Promise(n=>{let r=async()=>{await t(),n()};i.push(setTimeout(r,e||0))});var o,et,le,Ee,tt,Ce,Me,Oe,ge,F,it,ce,de,nt,Te,rt,ot,Ne,ve,fe,we,J,pe,he,je,R;class Y{constructor(e,i={}){Pe(this,o);I(this,"element");I(this,"timeouts");I(this,"cursorPosition");I(this,"predictedCursorPosition");I(this,"statuses",{started:!1,completed:!1,frozen:!1,destroyed:!1});I(this,"opts");I(this,"id");I(this,"queue");I(this,"cursor");I(this,"unfreeze",()=>{});I(this,"is",function(e){return this.statuses[e]});Pe(this,Te,e=>{e.cursor=jt(e.cursor??ne.cursor),this.opts.strings=l(this,o,rt).call(this,Qe(this.opts.strings)),this.opts=ue(this.opts,{html:!x(this,o,he)&&this.opts.html,nextStringDelay:ze(this.opts.nextStringDelay),loopDelay:ze(this.opts.loopDelay)})});this.opts=ue(ne,i),this.element=It(e),this.timeouts=[],this.cursorPosition=0,this.unfreeze=()=>{},this.predictedCursorPosition=null,this.statuses=ue({},yt),this.id=Et(),this.queue=ht([{delay:this.opts.startDelay}]),x(this,Te).call(this,i),this.cursor=l(this,o,ot).call(this),this.element.dataset.typeitId=this.id,We(bt),this.opts.strings.length&&l(this,o,nt).call(this)}go(){return this.statuses.started?this:(l(this,o,Oe).call(this),this.opts.waitUntilVisible?(Pt(this.element,l(this,o,le).bind(this)),this):(l(this,o,le).call(this),this))}destroy(e=!0){this.timeouts=St(this.timeouts),ie(e)&&this.cursor&&l(this,o,we).call(this,this.cursor),this.statuses.destroyed=!0}reset(e){!this.is("destroyed")&&this.destroy(),e?(this.queue.wipe(),e(this)):this.queue.reset(),this.cursorPosition=0;for(let i in this.statuses)this.statuses[i]=!1;return this.element[l(this,o,ge).call(this)?"value":"innerHTML"]="",this}type(e,i={}){e=ie(e);let{instant:n}=i,r=l(this,o,ce).call(this,i),u=wt(e,this.opts.html).map(y=>({func:()=>l(this,o,ve).call(this,y),char:y,delay:n||Nt(y)?0:l(this,o,J).call(this),typeable:y.nodeType===Node.TEXT_NODE})),d=[r[0],{func:async()=>await this.opts.beforeString(e,this)},...u,{func:async()=>await this.opts.afterString(e,this)},r[1]];return l(this,o,F).call(this,d,i)}break(e={}){return l(this,o,F).call(this,{func:()=>l(this,o,ve).call(this,be("BR")),typeable:!0},e)}move(e,i={}){e=ie(e);let n=l(this,o,ce).call(this,i),{instant:r,to:s}=i,u=Fe({queueItems:this.queue.getTypeable(),selector:e===null?"":e,to:s,cursorPosition:x(this,o,pe)}),d=u<0?-1:1;return this.predictedCursorPosition=x(this,o,pe)+u,l(this,o,F).call(this,[n[0],...ye({func:()=>l(this,o,Ee).call(this,d),delay:r?0:l(this,o,J).call(this),cursorable:!0},Math.abs(u)),n[1]],i)}exec(e,i={}){let n=l(this,o,ce).call(this,i);return l(this,o,F).call(this,[n[0],{func:()=>e(this)},n[1]],i)}options(e,i={}){return e=ie(e),l(this,o,de).call(this,e),l(this,o,F).call(this,{},i)}pause(e,i={}){return l(this,o,F).call(this,{delay:ie(e)},i)}delete(e=null,i={}){e=ie(e);let n=l(this,o,ce).call(this,i),r=e,{instant:s,to:u}=i,d=this.queue.getTypeable(),y=r===null?d.length:Je(r)?r:Fe({queueItems:d,selector:r,cursorPosition:x(this,o,pe),to:u});return l(this,o,F).call(this,[n[0],...ye({func:l(this,o,fe).bind(this),delay:s?0:l(this,o,J).call(this,1),deletable:!0},y),n[1]],i)}freeze(){this.statuses.frozen=!0}flush(e=()=>{}){return l(this,o,Oe).call(this),l(this,o,le).call(this,!1).then(e),this}getQueue(){return this.queue}getOptions(){return this.opts}updateOptions(e){return l(this,o,de).call(this,e)}getElement(){return this.element}empty(e={}){return l(this,o,F).call(this,{func:l(this,o,et).bind(this)},e)}}o=new WeakSet,et=async function(){if(l(this,o,ge).call(this)){this.element.value="";return}x(this,o,R).forEach(l(this,o,we).bind(this))},le=async function(e=!0){this.statuses.started=!0;let i=n=>{this.queue.done(n,!e)};try{let n=[...this.queue.getQueue()];for(let s=0;s<n.length;s++){let[u,d]=n[s];if(!d.done){if(!d.deletable||d.deletable&&x(this,o,R).length){let y=await l(this,o,Ce).call(this,s,n);kt({index:s,newIndex:y,queueItems:n,cleanUp:i}),s=y}i(u)}}if(!e)return this;if(this.statuses.completed=!0,await this.opts.afterComplete(this),!this.opts.loop)throw"";let r=this.opts.loopDelay;l(this,o,Me).call(this,async()=>{await l(this,o,tt).call(this,r[0]),l(this,o,le).call(this)},r[1])}catch{}return this},Ee=async function(e){this.cursorPosition=zt(e,this.cursorPosition,x(this,o,R)),Lt(this.element,x(this,o,R),this.cursorPosition)},tt=async function(e){let i=x(this,o,pe);i&&await l(this,o,Ee).call(this,{value:i});let n=x(this,o,R).map(r=>[Symbol(),{func:l(this,o,fe).bind(this),delay:l(this,o,J).call(this,1),deletable:!0,shouldPauseCursor:()=>!0}]);for(let r=0;r<n.length;r++)await l(this,o,Ce).call(this,r,n);this.queue.reset(),this.queue.set(0,{delay:e})},Ce=function(e,i){return xt({index:e,queueItems:i,wait:l(this,o,Me).bind(this),cursor:this.cursor,cursorOptions:this.opts.cursor})},Me=async function(e,i,n=!1){this.statuses.frozen&&await new Promise(r=>{this.unfreeze=()=>{this.statuses.frozen=!1,r()}}),n||await this.opts.beforeStep(this),await Ht(e,i,this.timeouts),n||await this.opts.afterStep(this)},Oe=async function(){if(!l(this,o,ge).call(this)&&this.cursor&&this.element.appendChild(this.cursor),x(this,o,je)){_t(this.id,this.element),this.cursor.dataset.tiAnimationId=this.id;let{animation:e}=this.opts.cursor,{frames:i,options:n}=e;Ze({frames:i,cursor:this.cursor,options:{duration:this.opts.cursorSpeed,...n}})}},ge=function(){return Se(this.element)},F=function(e,i){return this.queue.add(e),l(this,o,it).call(this,i),this},it=function(e={}){let i=e.delay;i&&this.queue.add({delay:i})},ce=function(e={}){return[{func:()=>l(this,o,de).call(this,e)},{func:()=>l(this,o,de).call(this,this.opts)}]},de=async function(e){this.opts=ue(this.opts,e)},nt=function(){let e=this.opts.strings.filter(i=>!!i);e.forEach((i,n)=>{if(this.type(i),n+1===e.length)return;let r=this.opts.breakLines?[{func:()=>l(this,o,ve).call(this,be("BR")),typeable:!0}]:ye({func:l(this,o,fe).bind(this),delay:l(this,o,J).call(this,1)},this.queue.getTypeable().length);l(this,o,Ne).call(this,r)})},Te=new WeakMap,rt=function(e){let i=this.element.innerHTML;return i?(this.element.innerHTML="",this.opts.startDelete?(this.element.innerHTML=i,Le(this.element),l(this,o,Ne).call(this,ye({func:l(this,o,fe).bind(this),delay:l(this,o,J).call(this,1),deletable:!0},x(this,o,R).length)),e):Dt(i).concat(e)):e},ot=function(){if(x(this,o,he))return null;let e=be("span");return e.className=X,x(this,o,je)?(e.innerHTML=Ke(this.opts.cursorChar).innerHTML,e):(e.style.visibility="hidden",e)},Ne=function(e){let i=this.opts.nextStringDelay;this.queue.add([{delay:i[0]},...e,{delay:i[1]}])},ve=function(e){Ot(this.element,e)},fe=function(){x(this,o,R).length&&(x(this,o,he)?this.element.value=this.element.value.slice(0,-1):l(this,o,we).call(this,x(this,o,R)[this.cursorPosition]))},we=function(e){At(e,this.element)},J=function(e=0){return gt(this.opts)[e]},pe=function(){return this.predictedCursorPosition??this.cursorPosition},he=function(){return Se(this.element)},je=function(){return!!this.opts.cursor&&!x(this,o,he)},R=function(){return Ct(this.element)};const st=new Y("#mainSubTitle",{speed:50,waitUntilVisible:!0,afterComplete:()=>{st.destroy()}}).pause(1e3).type("Por: ").pause(400).type("Luis Felipe Linares Perdomo").pause(100).type(".").pause(500),$t=new Y("#mainTitle",{speed:100,waitUntilVisible:!0,afterComplete:async()=>{st.go(),$t.destroy()}}).type("Metricas",{delay:300}).delete(7).type("étricas ").pause(300).type("de calidad de hardware").pause(500).delete(8).type("Software").pause(350).type(".").pause(500).go(),Ft=new Y("#titleTrends",{speed:100,waitUntilVisible:!0,afterComplete:()=>{at.go(),Ft.destroy()}}).pause(1500).type("Tendencias tecnologicas.").pause(500).delete(7).type("ógicas.").pause(500).go(),at=new Y("#yearTrends",{speed:100,waitUntilVisible:!0,afterComplete:()=>{at.destroy()}}).type("2024."),Rt=new Y("#cycleTitle",{speed:100,waitUntilVisible:!0,afterComplete:()=>{Rt.destroy()}}).type("Ciclos").pause(700).type(" de vida del desarrollo de ").pause(500).type("software.").pause(700).go(),Ut=new Y("#components",{speed:100,waitUntilVisible:!0,afterComplete:()=>{Ut.destroy()}}).pause(500).type("Componentes y métricas").break().type("de calidad de software.").pause(500).go(),Bt=new Y("#bibliography",{speed:100,waitUntilVisible:!0,afterComplete:()=>Bt.destroy()}).pause(500).type("Bibliografia").pause(400).delete(2).type("ía.").pause(300).go();new Y("#thanks",{speed:220,waitUntilVisible:!0}).pause(500).type("Muchas").pause(400).type(" ").pause(300).type("gracias por su tiempo ").break().pause(800).delete(8).break().type("atención").delete(8).type("tiempo y atención").pause(1e3).type(".").pause(2e3).delete(41).pause(500).type(":D").pause(300).delete(2).type("Muchas gracias por su").break().type("tiempo y atención.").go();
