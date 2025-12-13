function RT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function kT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $_={exports:{}},Au={},H_={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sa=Symbol.for("react.element"),CT=Symbol.for("react.portal"),PT=Symbol.for("react.fragment"),NT=Symbol.for("react.strict_mode"),DT=Symbol.for("react.profiler"),bT=Symbol.for("react.provider"),OT=Symbol.for("react.context"),LT=Symbol.for("react.forward_ref"),VT=Symbol.for("react.suspense"),MT=Symbol.for("react.memo"),jT=Symbol.for("react.lazy"),eg=Symbol.iterator;function UT(t){return t===null||typeof t!="object"?null:(t=eg&&t[eg]||t["@@iterator"],typeof t=="function"?t:null)}var W_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q_=Object.assign,K_={};function ws(t,e,n){this.props=t,this.context=e,this.refs=K_,this.updater=n||W_}ws.prototype.isReactComponent={};ws.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function G_(){}G_.prototype=ws.prototype;function Wd(t,e,n){this.props=t,this.context=e,this.refs=K_,this.updater=n||W_}var qd=Wd.prototype=new G_;qd.constructor=Wd;q_(qd,ws.prototype);qd.isPureReactComponent=!0;var tg=Array.isArray,Q_=Object.prototype.hasOwnProperty,Kd={current:null},X_={key:!0,ref:!0,__self:!0,__source:!0};function Y_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Q_.call(e,r)&&!X_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:sa,type:t,key:s,ref:o,props:i,_owner:Kd.current}}function FT(t,e){return{$$typeof:sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gd(t){return typeof t=="object"&&t!==null&&t.$$typeof===sa}function BT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ng=/\/+/g;function Oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?BT(""+t.key):e.toString(36)}function fl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case sa:case CT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Oc(o,0):r,tg(i)?(n="",t!=null&&(n=t.replace(ng,"$&/")+"/"),fl(i,e,n,"",function(c){return c})):i!=null&&(Gd(i)&&(i=FT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ng,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",tg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Oc(s,l);o+=fl(s,e,n,u,i)}else if(u=UT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Oc(s,l++),o+=fl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fa(t,e,n){if(t==null)return t;var r=[],i=0;return fl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function zT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _t={current:null},pl={transition:null},$T={ReactCurrentDispatcher:_t,ReactCurrentBatchConfig:pl,ReactCurrentOwner:Kd};function J_(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Fa,forEach:function(t,e,n){Fa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fa(t,function(){e++}),e},toArray:function(t){return Fa(t,function(e){return e})||[]},only:function(t){if(!Gd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=ws;ee.Fragment=PT;ee.Profiler=DT;ee.PureComponent=Wd;ee.StrictMode=NT;ee.Suspense=VT;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$T;ee.act=J_;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=q_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Q_.call(e,u)&&!X_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:sa,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:OT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bT,_context:t},t.Consumer=t};ee.createElement=Y_;ee.createFactory=function(t){var e=Y_.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:LT,render:t}};ee.isValidElement=Gd;ee.lazy=function(t){return{$$typeof:jT,_payload:{_status:-1,_result:t},_init:zT}};ee.memo=function(t,e){return{$$typeof:MT,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=pl.transition;pl.transition={};try{t()}finally{pl.transition=e}};ee.unstable_act=J_;ee.useCallback=function(t,e){return _t.current.useCallback(t,e)};ee.useContext=function(t){return _t.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return _t.current.useDeferredValue(t)};ee.useEffect=function(t,e){return _t.current.useEffect(t,e)};ee.useId=function(){return _t.current.useId()};ee.useImperativeHandle=function(t,e,n){return _t.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return _t.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return _t.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return _t.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return _t.current.useReducer(t,e,n)};ee.useRef=function(t){return _t.current.useRef(t)};ee.useState=function(t){return _t.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return _t.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return _t.current.useTransition()};ee.version="18.3.1";H_.exports=ee;var O=H_.exports;const Co=kT(O),HT=RT({__proto__:null,default:Co},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WT=O,qT=Symbol.for("react.element"),KT=Symbol.for("react.fragment"),GT=Object.prototype.hasOwnProperty,QT=WT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,XT={key:!0,ref:!0,__self:!0,__source:!0};function Z_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)GT.call(e,r)&&!XT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:qT,type:t,key:s,ref:o,props:i,_owner:QT.current}}Au.Fragment=KT;Au.jsx=Z_;Au.jsxs=Z_;$_.exports=Au;var m=$_.exports,wh={},ev={exports:{}},Ot={},tv={exports:{}},nv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,K){var J=z.length;z.push(K);e:for(;0<J;){var Z=J-1>>>1,ae=z[Z];if(0<i(ae,K))z[Z]=K,z[J]=ae,J=Z;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var K=z[0],J=z.pop();if(J!==K){z[0]=J;e:for(var Z=0,ae=z.length,pe=ae>>>1;Z<pe;){var an=2*(Z+1)-1,Vt=z[an],Ht=an+1,At=z[Ht];if(0>i(Vt,J))Ht<ae&&0>i(At,Vt)?(z[Z]=At,z[Ht]=J,Z=Ht):(z[Z]=Vt,z[an]=J,Z=an);else if(Ht<ae&&0>i(At,J))z[Z]=At,z[Ht]=J,Z=Ht;else break e}}return K}function i(z,K){var J=z.sortIndex-K.sortIndex;return J!==0?J:z.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,g=3,w=!1,x=!1,P=!1,k=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(z){for(var K=n(c);K!==null;){if(K.callback===null)r(c);else if(K.startTime<=z)r(c),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(c)}}function b(z){if(P=!1,E(z),!x)if(n(u)!==null)x=!0,Tn(M);else{var K=n(c);K!==null&&on(b,K.startTime-z)}}function M(z,K){x=!1,P&&(P=!1,I(y),y=-1),w=!0;var J=g;try{for(E(K),p=n(u);p!==null&&(!(p.expirationTime>K)||z&&!C());){var Z=p.callback;if(typeof Z=="function"){p.callback=null,g=p.priorityLevel;var ae=Z(p.expirationTime<=K);K=t.unstable_now(),typeof ae=="function"?p.callback=ae:p===n(u)&&r(u),E(K)}else r(u);p=n(u)}if(p!==null)var pe=!0;else{var an=n(c);an!==null&&on(b,an.startTime-K),pe=!1}return pe}finally{p=null,g=J,w=!1}}var U=!1,S=null,y=-1,T=5,A=-1;function C(){return!(t.unstable_now()-A<T)}function N(){if(S!==null){var z=t.unstable_now();A=z;var K=!0;try{K=S(!0,z)}finally{K?R():(U=!1,S=null)}}else U=!1}var R;if(typeof _=="function")R=function(){_(N)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,sn=ut.port2;ut.port1.onmessage=N,R=function(){sn.postMessage(null)}}else R=function(){k(N,0)};function Tn(z){S=z,U||(U=!0,R())}function on(z,K){y=k(function(){z(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){x||w||(x=!0,Tn(M))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var K=3;break;default:K=g}var J=g;g=K;try{return z()}finally{g=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=g;g=z;try{return K()}finally{g=J}},t.unstable_scheduleCallback=function(z,K,J){var Z=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?Z+J:Z):J=Z,z){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=J+ae,z={id:d++,callback:K,priorityLevel:z,startTime:J,expirationTime:ae,sortIndex:-1},J>Z?(z.sortIndex=J,e(c,z),n(u)===null&&z===n(c)&&(P?(I(y),y=-1):P=!0,on(b,J-Z))):(z.sortIndex=ae,e(u,z),x||w||(x=!0,Tn(M))),z},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(z){var K=g;return function(){var J=g;g=K;try{return z.apply(this,arguments)}finally{g=J}}}})(nv);tv.exports=nv;var YT=tv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JT=O,bt=YT;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rv=new Set,Po={};function vi(t,e){ss(t,e),ss(t+"Capture",e)}function ss(t,e){for(Po[t]=e,t=0;t<e.length;t++)rv.add(e[t])}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eh=Object.prototype.hasOwnProperty,ZT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rg={},ig={};function eI(t){return Eh.call(ig,t)?!0:Eh.call(rg,t)?!1:ZT.test(t)?ig[t]=!0:(rg[t]=!0,!1)}function tI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nI(t,e,n,r){if(e===null||typeof e>"u"||tI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qd=/[\-:]([a-z])/g;function Xd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qd,Xd);Qe[e]=new vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qd,Xd);Qe[e]=new vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qd,Xd);Qe[e]=new vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new vt(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yd(t,e,n,r){var i=Qe.hasOwnProperty(e)?Qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nI(e,n,i,r)&&(n=null),r||i===null?eI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var qn=JT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ba=Symbol.for("react.element"),Vi=Symbol.for("react.portal"),Mi=Symbol.for("react.fragment"),Jd=Symbol.for("react.strict_mode"),Th=Symbol.for("react.profiler"),iv=Symbol.for("react.provider"),sv=Symbol.for("react.context"),Zd=Symbol.for("react.forward_ref"),Ih=Symbol.for("react.suspense"),Sh=Symbol.for("react.suspense_list"),ef=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),ov=Symbol.for("react.offscreen"),sg=Symbol.iterator;function qs(t){return t===null||typeof t!="object"?null:(t=sg&&t[sg]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,Lc;function ro(t){if(Lc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lc=e&&e[1]||""}return`
`+Lc+t}var Vc=!1;function Mc(t,e){if(!t||Vc)return"";Vc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Vc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ro(t):""}function rI(t){switch(t.tag){case 5:return ro(t.type);case 16:return ro("Lazy");case 13:return ro("Suspense");case 19:return ro("SuspenseList");case 0:case 2:case 15:return t=Mc(t.type,!1),t;case 11:return t=Mc(t.type.render,!1),t;case 1:return t=Mc(t.type,!0),t;default:return""}}function xh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Mi:return"Fragment";case Vi:return"Portal";case Th:return"Profiler";case Jd:return"StrictMode";case Ih:return"Suspense";case Sh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sv:return(t.displayName||"Context")+".Consumer";case iv:return(t._context.displayName||"Context")+".Provider";case Zd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ef:return e=t.displayName||null,e!==null?e:xh(t.type)||"Memo";case er:e=t._payload,t=t._init;try{return xh(t(e))}catch{}}return null}function iI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xh(e);case 8:return e===Jd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function av(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sI(t){var e=av(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function za(t){t._valueTracker||(t._valueTracker=sI(t))}function lv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=av(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ah(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function og(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function uv(t,e){e=e.checked,e!=null&&Yd(t,"checked",e,!1)}function Rh(t,e){uv(t,e);var n=Ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?kh(t,e.type,n):e.hasOwnProperty("defaultValue")&&kh(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ag(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function kh(t,e,n){(e!=="number"||Ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var io=Array.isArray;function Qi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ch(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(io(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function cv(t,e){var n=Ar(e.value),r=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ug(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ph(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $a,dv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($a=$a||document.createElement("div"),$a.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$a.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function No(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oI=["Webkit","ms","Moz","O"];Object.keys(po).forEach(function(t){oI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),po[e]=po[t]})});function fv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||po.hasOwnProperty(t)&&po[t]?(""+e).trim():e+"px"}function pv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var aI=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nh(t,e){if(e){if(aI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Dh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bh=null;function tf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oh=null,Xi=null,Yi=null;function cg(t){if(t=la(t)){if(typeof Oh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Nu(e),Oh(t.stateNode,t.type,e))}}function mv(t){Xi?Yi?Yi.push(t):Yi=[t]:Xi=t}function gv(){if(Xi){var t=Xi,e=Yi;if(Yi=Xi=null,cg(t),e)for(t=0;t<e.length;t++)cg(e[t])}}function yv(t,e){return t(e)}function _v(){}var jc=!1;function vv(t,e,n){if(jc)return t(e,n);jc=!0;try{return yv(t,e,n)}finally{jc=!1,(Xi!==null||Yi!==null)&&(_v(),gv())}}function Do(t,e){var n=t.stateNode;if(n===null)return null;var r=Nu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Lh=!1;if(Mn)try{var Ks={};Object.defineProperty(Ks,"passive",{get:function(){Lh=!0}}),window.addEventListener("test",Ks,Ks),window.removeEventListener("test",Ks,Ks)}catch{Lh=!1}function lI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var mo=!1,Vl=null,Ml=!1,Vh=null,uI={onError:function(t){mo=!0,Vl=t}};function cI(t,e,n,r,i,s,o,l,u){mo=!1,Vl=null,lI.apply(uI,arguments)}function hI(t,e,n,r,i,s,o,l,u){if(cI.apply(this,arguments),mo){if(mo){var c=Vl;mo=!1,Vl=null}else throw Error(F(198));Ml||(Ml=!0,Vh=c)}}function wi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function wv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hg(t){if(wi(t)!==t)throw Error(F(188))}function dI(t){var e=t.alternate;if(!e){if(e=wi(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return hg(i),t;if(s===r)return hg(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Ev(t){return t=dI(t),t!==null?Tv(t):null}function Tv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Tv(t);if(e!==null)return e;t=t.sibling}return null}var Iv=bt.unstable_scheduleCallback,dg=bt.unstable_cancelCallback,fI=bt.unstable_shouldYield,pI=bt.unstable_requestPaint,Ne=bt.unstable_now,mI=bt.unstable_getCurrentPriorityLevel,nf=bt.unstable_ImmediatePriority,Sv=bt.unstable_UserBlockingPriority,jl=bt.unstable_NormalPriority,gI=bt.unstable_LowPriority,xv=bt.unstable_IdlePriority,Ru=null,fn=null;function yI(t){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(Ru,t,void 0,(t.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:wI,_I=Math.log,vI=Math.LN2;function wI(t){return t>>>=0,t===0?32:31-(_I(t)/vI|0)|0}var Ha=64,Wa=4194304;function so(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ul(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=so(l):(s&=o,s!==0&&(r=so(s)))}else o=n&~i,o!==0?r=so(o):s!==0&&(r=so(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jt(e),i=1<<n,r|=t[n],e&=~i;return r}function EI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function TI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=EI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Mh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Av(){var t=Ha;return Ha<<=1,!(Ha&4194240)&&(Ha=64),t}function Uc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function oa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jt(e),t[e]=n}function II(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function rf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function Rv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var kv,sf,Cv,Pv,Nv,jh=!1,qa=[],pr=null,mr=null,gr=null,bo=new Map,Oo=new Map,nr=[],SI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fg(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(e.pointerId)}}function Gs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=la(e),e!==null&&sf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function xI(t,e,n,r,i){switch(e){case"focusin":return pr=Gs(pr,t,e,n,r,i),!0;case"dragenter":return mr=Gs(mr,t,e,n,r,i),!0;case"mouseover":return gr=Gs(gr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return bo.set(s,Gs(bo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Oo.set(s,Gs(Oo.get(s)||null,t,e,n,r,i)),!0}return!1}function Dv(t){var e=Yr(t.target);if(e!==null){var n=wi(e);if(n!==null){if(e=n.tag,e===13){if(e=wv(n),e!==null){t.blockedOn=e,Nv(t.priority,function(){Cv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ml(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bh=r,n.target.dispatchEvent(r),bh=null}else return e=la(n),e!==null&&sf(e),t.blockedOn=n,!1;e.shift()}return!0}function pg(t,e,n){ml(t)&&n.delete(e)}function AI(){jh=!1,pr!==null&&ml(pr)&&(pr=null),mr!==null&&ml(mr)&&(mr=null),gr!==null&&ml(gr)&&(gr=null),bo.forEach(pg),Oo.forEach(pg)}function Qs(t,e){t.blockedOn===e&&(t.blockedOn=null,jh||(jh=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,AI)))}function Lo(t){function e(i){return Qs(i,t)}if(0<qa.length){Qs(qa[0],t);for(var n=1;n<qa.length;n++){var r=qa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(pr!==null&&Qs(pr,t),mr!==null&&Qs(mr,t),gr!==null&&Qs(gr,t),bo.forEach(e),Oo.forEach(e),n=0;n<nr.length;n++)r=nr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)Dv(n),n.blockedOn===null&&nr.shift()}var Ji=qn.ReactCurrentBatchConfig,Fl=!0;function RI(t,e,n,r){var i=ue,s=Ji.transition;Ji.transition=null;try{ue=1,of(t,e,n,r)}finally{ue=i,Ji.transition=s}}function kI(t,e,n,r){var i=ue,s=Ji.transition;Ji.transition=null;try{ue=4,of(t,e,n,r)}finally{ue=i,Ji.transition=s}}function of(t,e,n,r){if(Fl){var i=Uh(t,e,n,r);if(i===null)Qc(t,e,r,Bl,n),fg(t,r);else if(xI(i,t,e,n,r))r.stopPropagation();else if(fg(t,r),e&4&&-1<SI.indexOf(t)){for(;i!==null;){var s=la(i);if(s!==null&&kv(s),s=Uh(t,e,n,r),s===null&&Qc(t,e,r,Bl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Qc(t,e,r,null,n)}}var Bl=null;function Uh(t,e,n,r){if(Bl=null,t=tf(r),t=Yr(t),t!==null)if(e=wi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=wv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Bl=t,null}function bv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mI()){case nf:return 1;case Sv:return 4;case jl:case gI:return 16;case xv:return 536870912;default:return 16}default:return 16}}var ur=null,af=null,gl=null;function Ov(){if(gl)return gl;var t,e=af,n=e.length,r,i="value"in ur?ur.value:ur.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return gl=i.slice(t,1<r?1-r:void 0)}function yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ka(){return!0}function mg(){return!1}function Lt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ka:mg,this.isPropagationStopped=mg,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),e}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lf=Lt(Es),aa=Ie({},Es,{view:0,detail:0}),CI=Lt(aa),Fc,Bc,Xs,ku=Ie({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(Fc=t.screenX-Xs.screenX,Bc=t.screenY-Xs.screenY):Bc=Fc=0,Xs=t),Fc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),gg=Lt(ku),PI=Ie({},ku,{dataTransfer:0}),NI=Lt(PI),DI=Ie({},aa,{relatedTarget:0}),zc=Lt(DI),bI=Ie({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),OI=Lt(bI),LI=Ie({},Es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),VI=Lt(LI),MI=Ie({},Es,{data:0}),yg=Lt(MI),jI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},FI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function BI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=FI[t])?!!e[t]:!1}function uf(){return BI}var zI=Ie({},aa,{key:function(t){if(t.key){var e=jI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?UI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uf,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$I=Lt(zI),HI=Ie({},ku,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_g=Lt(HI),WI=Ie({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uf}),qI=Lt(WI),KI=Ie({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),GI=Lt(KI),QI=Ie({},ku,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XI=Lt(QI),YI=[9,13,27,32],cf=Mn&&"CompositionEvent"in window,go=null;Mn&&"documentMode"in document&&(go=document.documentMode);var JI=Mn&&"TextEvent"in window&&!go,Lv=Mn&&(!cf||go&&8<go&&11>=go),vg=String.fromCharCode(32),wg=!1;function Vv(t,e){switch(t){case"keyup":return YI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ji=!1;function ZI(t,e){switch(t){case"compositionend":return Mv(e);case"keypress":return e.which!==32?null:(wg=!0,vg);case"textInput":return t=e.data,t===vg&&wg?null:t;default:return null}}function eS(t,e){if(ji)return t==="compositionend"||!cf&&Vv(t,e)?(t=Ov(),gl=af=ur=null,ji=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lv&&e.locale!=="ko"?null:e.data;default:return null}}var tS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tS[t.type]:e==="textarea"}function jv(t,e,n,r){mv(r),e=zl(e,"onChange"),0<e.length&&(n=new lf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var yo=null,Vo=null;function nS(t){Qv(t,0)}function Cu(t){var e=Bi(t);if(lv(e))return t}function rS(t,e){if(t==="change")return e}var Uv=!1;if(Mn){var $c;if(Mn){var Hc="oninput"in document;if(!Hc){var Tg=document.createElement("div");Tg.setAttribute("oninput","return;"),Hc=typeof Tg.oninput=="function"}$c=Hc}else $c=!1;Uv=$c&&(!document.documentMode||9<document.documentMode)}function Ig(){yo&&(yo.detachEvent("onpropertychange",Fv),Vo=yo=null)}function Fv(t){if(t.propertyName==="value"&&Cu(Vo)){var e=[];jv(e,Vo,t,tf(t)),vv(nS,e)}}function iS(t,e,n){t==="focusin"?(Ig(),yo=e,Vo=n,yo.attachEvent("onpropertychange",Fv)):t==="focusout"&&Ig()}function sS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cu(Vo)}function oS(t,e){if(t==="click")return Cu(e)}function aS(t,e){if(t==="input"||t==="change")return Cu(e)}function lS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nn=typeof Object.is=="function"?Object.is:lS;function Mo(t,e){if(nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Eh.call(e,i)||!nn(t[i],e[i]))return!1}return!0}function Sg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xg(t,e){var n=Sg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sg(n)}}function Bv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Bv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function zv(){for(var t=window,e=Ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ll(t.document)}return e}function hf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uS(t){var e=zv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Bv(n.ownerDocument.documentElement,n)){if(r!==null&&hf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=xg(n,s);var o=xg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cS=Mn&&"documentMode"in document&&11>=document.documentMode,Ui=null,Fh=null,_o=null,Bh=!1;function Ag(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bh||Ui==null||Ui!==Ll(r)||(r=Ui,"selectionStart"in r&&hf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_o&&Mo(_o,r)||(_o=r,r=zl(Fh,"onSelect"),0<r.length&&(e=new lf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ui)))}function Ga(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fi={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},Wc={},$v={};Mn&&($v=document.createElement("div").style,"AnimationEvent"in window||(delete Fi.animationend.animation,delete Fi.animationiteration.animation,delete Fi.animationstart.animation),"TransitionEvent"in window||delete Fi.transitionend.transition);function Pu(t){if(Wc[t])return Wc[t];if(!Fi[t])return t;var e=Fi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $v)return Wc[t]=e[n];return t}var Hv=Pu("animationend"),Wv=Pu("animationiteration"),qv=Pu("animationstart"),Kv=Pu("transitionend"),Gv=new Map,Rg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(t,e){Gv.set(t,e),vi(e,[t])}for(var qc=0;qc<Rg.length;qc++){var Kc=Rg[qc],hS=Kc.toLowerCase(),dS=Kc[0].toUpperCase()+Kc.slice(1);Dr(hS,"on"+dS)}Dr(Hv,"onAnimationEnd");Dr(Wv,"onAnimationIteration");Dr(qv,"onAnimationStart");Dr("dblclick","onDoubleClick");Dr("focusin","onFocus");Dr("focusout","onBlur");Dr(Kv,"onTransitionEnd");ss("onMouseEnter",["mouseout","mouseover"]);ss("onMouseLeave",["mouseout","mouseover"]);ss("onPointerEnter",["pointerout","pointerover"]);ss("onPointerLeave",["pointerout","pointerover"]);vi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vi("onBeforeInput",["compositionend","keypress","textInput","paste"]);vi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fS=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function kg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,hI(r,e,void 0,t),t.currentTarget=null}function Qv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;kg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;kg(i,l,c),s=u}}}if(Ml)throw t=Vh,Ml=!1,Vh=null,t}function ge(t,e){var n=e[qh];n===void 0&&(n=e[qh]=new Set);var r=t+"__bubble";n.has(r)||(Xv(e,t,2,!1),n.add(r))}function Gc(t,e,n){var r=0;e&&(r|=4),Xv(n,t,r,e)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function jo(t){if(!t[Qa]){t[Qa]=!0,rv.forEach(function(n){n!=="selectionchange"&&(fS.has(n)||Gc(n,!1,t),Gc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qa]||(e[Qa]=!0,Gc("selectionchange",!1,e))}}function Xv(t,e,n,r){switch(bv(e)){case 1:var i=RI;break;case 4:i=kI;break;default:i=of}n=i.bind(null,e,n,t),i=void 0,!Lh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Qc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Yr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}vv(function(){var c=s,d=tf(n),p=[];e:{var g=Gv.get(t);if(g!==void 0){var w=lf,x=t;switch(t){case"keypress":if(yl(n)===0)break e;case"keydown":case"keyup":w=$I;break;case"focusin":x="focus",w=zc;break;case"focusout":x="blur",w=zc;break;case"beforeblur":case"afterblur":w=zc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=gg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=NI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=qI;break;case Hv:case Wv:case qv:w=OI;break;case Kv:w=GI;break;case"scroll":w=CI;break;case"wheel":w=XI;break;case"copy":case"cut":case"paste":w=VI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=_g}var P=(e&4)!==0,k=!P&&t==="scroll",I=P?g!==null?g+"Capture":null:g;P=[];for(var _=c,E;_!==null;){E=_;var b=E.stateNode;if(E.tag===5&&b!==null&&(E=b,I!==null&&(b=Do(_,I),b!=null&&P.push(Uo(_,b,E)))),k)break;_=_.return}0<P.length&&(g=new w(g,x,null,n,d),p.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",g&&n!==bh&&(x=n.relatedTarget||n.fromElement)&&(Yr(x)||x[jn]))break e;if((w||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,w?(x=n.relatedTarget||n.toElement,w=c,x=x?Yr(x):null,x!==null&&(k=wi(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=c),w!==x)){if(P=gg,b="onMouseLeave",I="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(P=_g,b="onPointerLeave",I="onPointerEnter",_="pointer"),k=w==null?g:Bi(w),E=x==null?g:Bi(x),g=new P(b,_+"leave",w,n,d),g.target=k,g.relatedTarget=E,b=null,Yr(d)===c&&(P=new P(I,_+"enter",x,n,d),P.target=E,P.relatedTarget=k,b=P),k=b,w&&x)t:{for(P=w,I=x,_=0,E=P;E;E=Di(E))_++;for(E=0,b=I;b;b=Di(b))E++;for(;0<_-E;)P=Di(P),_--;for(;0<E-_;)I=Di(I),E--;for(;_--;){if(P===I||I!==null&&P===I.alternate)break t;P=Di(P),I=Di(I)}P=null}else P=null;w!==null&&Cg(p,g,w,P,!1),x!==null&&k!==null&&Cg(p,k,x,P,!0)}}e:{if(g=c?Bi(c):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var M=rS;else if(Eg(g))if(Uv)M=aS;else{M=sS;var U=iS}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(M=oS);if(M&&(M=M(t,c))){jv(p,M,n,d);break e}U&&U(t,g,c),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&kh(g,"number",g.value)}switch(U=c?Bi(c):window,t){case"focusin":(Eg(U)||U.contentEditable==="true")&&(Ui=U,Fh=c,_o=null);break;case"focusout":_o=Fh=Ui=null;break;case"mousedown":Bh=!0;break;case"contextmenu":case"mouseup":case"dragend":Bh=!1,Ag(p,n,d);break;case"selectionchange":if(cS)break;case"keydown":case"keyup":Ag(p,n,d)}var S;if(cf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ji?Vv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Lv&&n.locale!=="ko"&&(ji||y!=="onCompositionStart"?y==="onCompositionEnd"&&ji&&(S=Ov()):(ur=d,af="value"in ur?ur.value:ur.textContent,ji=!0)),U=zl(c,y),0<U.length&&(y=new yg(y,t,null,n,d),p.push({event:y,listeners:U}),S?y.data=S:(S=Mv(n),S!==null&&(y.data=S)))),(S=JI?ZI(t,n):eS(t,n))&&(c=zl(c,"onBeforeInput"),0<c.length&&(d=new yg("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=S))}Qv(p,e)})}function Uo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function zl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Do(t,n),s!=null&&r.unshift(Uo(t,s,i)),s=Do(t,e),s!=null&&r.push(Uo(t,s,i))),t=t.return}return r}function Di(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Cg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Do(n,s),u!=null&&o.unshift(Uo(n,u,l))):i||(u=Do(n,s),u!=null&&o.push(Uo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var pS=/\r\n?/g,mS=/\u0000|\uFFFD/g;function Pg(t){return(typeof t=="string"?t:""+t).replace(pS,`
`).replace(mS,"")}function Xa(t,e,n){if(e=Pg(e),Pg(t)!==e&&n)throw Error(F(425))}function $l(){}var zh=null,$h=null;function Hh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wh=typeof setTimeout=="function"?setTimeout:void 0,gS=typeof clearTimeout=="function"?clearTimeout:void 0,Ng=typeof Promise=="function"?Promise:void 0,yS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ng<"u"?function(t){return Ng.resolve(null).then(t).catch(_S)}:Wh;function _S(t){setTimeout(function(){throw t})}function Xc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Lo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Lo(e)}function yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ts=Math.random().toString(36).slice(2),cn="__reactFiber$"+Ts,Fo="__reactProps$"+Ts,jn="__reactContainer$"+Ts,qh="__reactEvents$"+Ts,vS="__reactListeners$"+Ts,wS="__reactHandles$"+Ts;function Yr(t){var e=t[cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[jn]||n[cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dg(t);t!==null;){if(n=t[cn])return n;t=Dg(t)}return e}t=n,n=t.parentNode}return null}function la(t){return t=t[cn]||t[jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Bi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Nu(t){return t[Fo]||null}var Kh=[],zi=-1;function br(t){return{current:t}}function _e(t){0>zi||(t.current=Kh[zi],Kh[zi]=null,zi--)}function fe(t,e){zi++,Kh[zi]=t.current,t.current=e}var Rr={},at=br(Rr),It=br(!1),ai=Rr;function os(t,e){var n=t.type.contextTypes;if(!n)return Rr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function St(t){return t=t.childContextTypes,t!=null}function Hl(){_e(It),_e(at)}function bg(t,e,n){if(at.current!==Rr)throw Error(F(168));fe(at,e),fe(It,n)}function Yv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,iI(t)||"Unknown",i));return Ie({},n,r)}function Wl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rr,ai=at.current,fe(at,t),fe(It,It.current),!0}function Og(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=Yv(t,e,ai),r.__reactInternalMemoizedMergedChildContext=t,_e(It),_e(at),fe(at,t)):_e(It),fe(It,n)}var Rn=null,Du=!1,Yc=!1;function Jv(t){Rn===null?Rn=[t]:Rn.push(t)}function ES(t){Du=!0,Jv(t)}function Or(){if(!Yc&&Rn!==null){Yc=!0;var t=0,e=ue;try{var n=Rn;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Rn=null,Du=!1}catch(i){throw Rn!==null&&(Rn=Rn.slice(t+1)),Iv(nf,Or),i}finally{ue=e,Yc=!1}}return null}var $i=[],Hi=0,ql=null,Kl=0,Mt=[],jt=0,li=null,Cn=1,Pn="";function Gr(t,e){$i[Hi++]=Kl,$i[Hi++]=ql,ql=t,Kl=e}function Zv(t,e,n){Mt[jt++]=Cn,Mt[jt++]=Pn,Mt[jt++]=li,li=t;var r=Cn;t=Pn;var i=32-Jt(r)-1;r&=~(1<<i),n+=1;var s=32-Jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Cn=1<<32-Jt(e)+i|n<<i|r,Pn=s+t}else Cn=1<<s|n<<i|r,Pn=t}function df(t){t.return!==null&&(Gr(t,1),Zv(t,1,0))}function ff(t){for(;t===ql;)ql=$i[--Hi],$i[Hi]=null,Kl=$i[--Hi],$i[Hi]=null;for(;t===li;)li=Mt[--jt],Mt[jt]=null,Pn=Mt[--jt],Mt[jt]=null,Cn=Mt[--jt],Mt[jt]=null}var Dt=null,Ct=null,we=!1,Qt=null;function e0(t,e){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dt=t,Ct=yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dt=t,Ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=li!==null?{id:Cn,overflow:Pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dt=t,Ct=null,!0):!1;default:return!1}}function Gh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qh(t){if(we){var e=Ct;if(e){var n=e;if(!Lg(t,e)){if(Gh(t))throw Error(F(418));e=yr(n.nextSibling);var r=Dt;e&&Lg(t,e)?e0(r,n):(t.flags=t.flags&-4097|2,we=!1,Dt=t)}}else{if(Gh(t))throw Error(F(418));t.flags=t.flags&-4097|2,we=!1,Dt=t}}}function Vg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dt=t}function Ya(t){if(t!==Dt)return!1;if(!we)return Vg(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hh(t.type,t.memoizedProps)),e&&(e=Ct)){if(Gh(t))throw t0(),Error(F(418));for(;e;)e0(t,e),e=yr(e.nextSibling)}if(Vg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ct=yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ct=null}}else Ct=Dt?yr(t.stateNode.nextSibling):null;return!0}function t0(){for(var t=Ct;t;)t=yr(t.nextSibling)}function as(){Ct=Dt=null,we=!1}function pf(t){Qt===null?Qt=[t]:Qt.push(t)}var TS=qn.ReactCurrentBatchConfig;function Ys(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Ja(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Mg(t){var e=t._init;return e(t._payload)}function n0(t){function e(I,_){if(t){var E=I.deletions;E===null?(I.deletions=[_],I.flags|=16):E.push(_)}}function n(I,_){if(!t)return null;for(;_!==null;)e(I,_),_=_.sibling;return null}function r(I,_){for(I=new Map;_!==null;)_.key!==null?I.set(_.key,_):I.set(_.index,_),_=_.sibling;return I}function i(I,_){return I=Er(I,_),I.index=0,I.sibling=null,I}function s(I,_,E){return I.index=E,t?(E=I.alternate,E!==null?(E=E.index,E<_?(I.flags|=2,_):E):(I.flags|=2,_)):(I.flags|=1048576,_)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,_,E,b){return _===null||_.tag!==6?(_=ih(E,I.mode,b),_.return=I,_):(_=i(_,E),_.return=I,_)}function u(I,_,E,b){var M=E.type;return M===Mi?d(I,_,E.props.children,b,E.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===er&&Mg(M)===_.type)?(b=i(_,E.props),b.ref=Ys(I,_,E),b.return=I,b):(b=Sl(E.type,E.key,E.props,null,I.mode,b),b.ref=Ys(I,_,E),b.return=I,b)}function c(I,_,E,b){return _===null||_.tag!==4||_.stateNode.containerInfo!==E.containerInfo||_.stateNode.implementation!==E.implementation?(_=sh(E,I.mode,b),_.return=I,_):(_=i(_,E.children||[]),_.return=I,_)}function d(I,_,E,b,M){return _===null||_.tag!==7?(_=ri(E,I.mode,b,M),_.return=I,_):(_=i(_,E),_.return=I,_)}function p(I,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return _=ih(""+_,I.mode,E),_.return=I,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ba:return E=Sl(_.type,_.key,_.props,null,I.mode,E),E.ref=Ys(I,null,_),E.return=I,E;case Vi:return _=sh(_,I.mode,E),_.return=I,_;case er:var b=_._init;return p(I,b(_._payload),E)}if(io(_)||qs(_))return _=ri(_,I.mode,E,null),_.return=I,_;Ja(I,_)}return null}function g(I,_,E,b){var M=_!==null?_.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return M!==null?null:l(I,_,""+E,b);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ba:return E.key===M?u(I,_,E,b):null;case Vi:return E.key===M?c(I,_,E,b):null;case er:return M=E._init,g(I,_,M(E._payload),b)}if(io(E)||qs(E))return M!==null?null:d(I,_,E,b,null);Ja(I,E)}return null}function w(I,_,E,b,M){if(typeof b=="string"&&b!==""||typeof b=="number")return I=I.get(E)||null,l(_,I,""+b,M);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ba:return I=I.get(b.key===null?E:b.key)||null,u(_,I,b,M);case Vi:return I=I.get(b.key===null?E:b.key)||null,c(_,I,b,M);case er:var U=b._init;return w(I,_,E,U(b._payload),M)}if(io(b)||qs(b))return I=I.get(E)||null,d(_,I,b,M,null);Ja(_,b)}return null}function x(I,_,E,b){for(var M=null,U=null,S=_,y=_=0,T=null;S!==null&&y<E.length;y++){S.index>y?(T=S,S=null):T=S.sibling;var A=g(I,S,E[y],b);if(A===null){S===null&&(S=T);break}t&&S&&A.alternate===null&&e(I,S),_=s(A,_,y),U===null?M=A:U.sibling=A,U=A,S=T}if(y===E.length)return n(I,S),we&&Gr(I,y),M;if(S===null){for(;y<E.length;y++)S=p(I,E[y],b),S!==null&&(_=s(S,_,y),U===null?M=S:U.sibling=S,U=S);return we&&Gr(I,y),M}for(S=r(I,S);y<E.length;y++)T=w(S,I,y,E[y],b),T!==null&&(t&&T.alternate!==null&&S.delete(T.key===null?y:T.key),_=s(T,_,y),U===null?M=T:U.sibling=T,U=T);return t&&S.forEach(function(C){return e(I,C)}),we&&Gr(I,y),M}function P(I,_,E,b){var M=qs(E);if(typeof M!="function")throw Error(F(150));if(E=M.call(E),E==null)throw Error(F(151));for(var U=M=null,S=_,y=_=0,T=null,A=E.next();S!==null&&!A.done;y++,A=E.next()){S.index>y?(T=S,S=null):T=S.sibling;var C=g(I,S,A.value,b);if(C===null){S===null&&(S=T);break}t&&S&&C.alternate===null&&e(I,S),_=s(C,_,y),U===null?M=C:U.sibling=C,U=C,S=T}if(A.done)return n(I,S),we&&Gr(I,y),M;if(S===null){for(;!A.done;y++,A=E.next())A=p(I,A.value,b),A!==null&&(_=s(A,_,y),U===null?M=A:U.sibling=A,U=A);return we&&Gr(I,y),M}for(S=r(I,S);!A.done;y++,A=E.next())A=w(S,I,y,A.value,b),A!==null&&(t&&A.alternate!==null&&S.delete(A.key===null?y:A.key),_=s(A,_,y),U===null?M=A:U.sibling=A,U=A);return t&&S.forEach(function(N){return e(I,N)}),we&&Gr(I,y),M}function k(I,_,E,b){if(typeof E=="object"&&E!==null&&E.type===Mi&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Ba:e:{for(var M=E.key,U=_;U!==null;){if(U.key===M){if(M=E.type,M===Mi){if(U.tag===7){n(I,U.sibling),_=i(U,E.props.children),_.return=I,I=_;break e}}else if(U.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===er&&Mg(M)===U.type){n(I,U.sibling),_=i(U,E.props),_.ref=Ys(I,U,E),_.return=I,I=_;break e}n(I,U);break}else e(I,U);U=U.sibling}E.type===Mi?(_=ri(E.props.children,I.mode,b,E.key),_.return=I,I=_):(b=Sl(E.type,E.key,E.props,null,I.mode,b),b.ref=Ys(I,_,E),b.return=I,I=b)}return o(I);case Vi:e:{for(U=E.key;_!==null;){if(_.key===U)if(_.tag===4&&_.stateNode.containerInfo===E.containerInfo&&_.stateNode.implementation===E.implementation){n(I,_.sibling),_=i(_,E.children||[]),_.return=I,I=_;break e}else{n(I,_);break}else e(I,_);_=_.sibling}_=sh(E,I.mode,b),_.return=I,I=_}return o(I);case er:return U=E._init,k(I,_,U(E._payload),b)}if(io(E))return x(I,_,E,b);if(qs(E))return P(I,_,E,b);Ja(I,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,_!==null&&_.tag===6?(n(I,_.sibling),_=i(_,E),_.return=I,I=_):(n(I,_),_=ih(E,I.mode,b),_.return=I,I=_),o(I)):n(I,_)}return k}var ls=n0(!0),r0=n0(!1),Gl=br(null),Ql=null,Wi=null,mf=null;function gf(){mf=Wi=Ql=null}function yf(t){var e=Gl.current;_e(Gl),t._currentValue=e}function Xh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Zi(t,e){Ql=t,mf=Wi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tt=!0),t.firstContext=null)}function Bt(t){var e=t._currentValue;if(mf!==t)if(t={context:t,memoizedValue:e,next:null},Wi===null){if(Ql===null)throw Error(F(308));Wi=t,Ql.dependencies={lanes:0,firstContext:t}}else Wi=Wi.next=t;return e}var Jr=null;function _f(t){Jr===null?Jr=[t]:Jr.push(t)}function i0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,_f(e)):(n.next=i.next,i.next=n),e.interleaved=n,Un(t,r)}function Un(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tr=!1;function vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function s0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function On(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _r(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Un(t,n)}return i=r.interleaved,i===null?(e.next=e,_f(r)):(e.next=i.next,i.next=e),r.interleaved=e,Un(t,n)}function _l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rf(t,n)}}function jg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xl(t,e,n,r){var i=t.updateQueue;tr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var g=l.lane,w=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,P=l;switch(g=e,w=n,P.tag){case 1:if(x=P.payload,typeof x=="function"){p=x.call(w,p,g);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=P.payload,g=typeof x=="function"?x.call(w,p,g):x,g==null)break e;p=Ie({},p,g);break e;case 2:tr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else w={eventTime:w,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=w,u=p):d=d.next=w,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ci|=o,t.lanes=o,t.memoizedState=p}}function Ug(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var ua={},pn=br(ua),Bo=br(ua),zo=br(ua);function Zr(t){if(t===ua)throw Error(F(174));return t}function wf(t,e){switch(fe(zo,e),fe(Bo,t),fe(pn,ua),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ph(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ph(e,t)}_e(pn),fe(pn,e)}function us(){_e(pn),_e(Bo),_e(zo)}function o0(t){Zr(zo.current);var e=Zr(pn.current),n=Ph(e,t.type);e!==n&&(fe(Bo,t),fe(pn,n))}function Ef(t){Bo.current===t&&(_e(pn),_e(Bo))}var Ee=br(0);function Yl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jc=[];function Tf(){for(var t=0;t<Jc.length;t++)Jc[t]._workInProgressVersionPrimary=null;Jc.length=0}var vl=qn.ReactCurrentDispatcher,Zc=qn.ReactCurrentBatchConfig,ui=0,Te=null,Ve=null,Be=null,Jl=!1,vo=!1,$o=0,IS=0;function et(){throw Error(F(321))}function If(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nn(t[n],e[n]))return!1;return!0}function Sf(t,e,n,r,i,s){if(ui=s,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vl.current=t===null||t.memoizedState===null?RS:kS,t=n(r,i),vo){s=0;do{if(vo=!1,$o=0,25<=s)throw Error(F(301));s+=1,Be=Ve=null,e.updateQueue=null,vl.current=CS,t=n(r,i)}while(vo)}if(vl.current=Zl,e=Ve!==null&&Ve.next!==null,ui=0,Be=Ve=Te=null,Jl=!1,e)throw Error(F(300));return t}function xf(){var t=$o!==0;return $o=0,t}function un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Te.memoizedState=Be=t:Be=Be.next=t,Be}function zt(){if(Ve===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var e=Be===null?Te.memoizedState:Be.next;if(e!==null)Be=e,Ve=t;else{if(t===null)throw Error(F(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Be===null?Te.memoizedState=Be=t:Be=Be.next=t}return Be}function Ho(t,e){return typeof e=="function"?e(t):e}function eh(t){var e=zt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((ui&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Te.lanes|=d,ci|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,nn(r,e.memoizedState)||(Tt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Te.lanes|=s,ci|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function th(t){var e=zt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);nn(s,e.memoizedState)||(Tt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function a0(){}function l0(t,e){var n=Te,r=zt(),i=e(),s=!nn(r.memoizedState,i);if(s&&(r.memoizedState=i,Tt=!0),r=r.queue,Af(h0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Wo(9,c0.bind(null,n,r,i,e),void 0,null),ze===null)throw Error(F(349));ui&30||u0(n,e,i)}return i}function u0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function c0(t,e,n,r){e.value=n,e.getSnapshot=r,d0(e)&&f0(t)}function h0(t,e,n){return n(function(){d0(e)&&f0(t)})}function d0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nn(t,n)}catch{return!0}}function f0(t){var e=Un(t,1);e!==null&&Zt(e,t,1,-1)}function Fg(t){var e=un();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:t},e.queue=t,t=t.dispatch=AS.bind(null,Te,t),[e.memoizedState,t]}function Wo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function p0(){return zt().memoizedState}function wl(t,e,n,r){var i=un();Te.flags|=t,i.memoizedState=Wo(1|e,n,void 0,r===void 0?null:r)}function bu(t,e,n,r){var i=zt();r=r===void 0?null:r;var s=void 0;if(Ve!==null){var o=Ve.memoizedState;if(s=o.destroy,r!==null&&If(r,o.deps)){i.memoizedState=Wo(e,n,s,r);return}}Te.flags|=t,i.memoizedState=Wo(1|e,n,s,r)}function Bg(t,e){return wl(8390656,8,t,e)}function Af(t,e){return bu(2048,8,t,e)}function m0(t,e){return bu(4,2,t,e)}function g0(t,e){return bu(4,4,t,e)}function y0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _0(t,e,n){return n=n!=null?n.concat([t]):null,bu(4,4,y0.bind(null,e,t),n)}function Rf(){}function v0(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&If(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function w0(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&If(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function E0(t,e,n){return ui&21?(nn(n,e)||(n=Av(),Te.lanes|=n,ci|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tt=!0),t.memoizedState=n)}function SS(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=Zc.transition;Zc.transition={};try{t(!1),e()}finally{ue=n,Zc.transition=r}}function T0(){return zt().memoizedState}function xS(t,e,n){var r=wr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},I0(t))S0(e,n);else if(n=i0(t,e,n,r),n!==null){var i=gt();Zt(n,t,r,i),x0(n,e,r)}}function AS(t,e,n){var r=wr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(I0(t))S0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,nn(l,o)){var u=e.interleaved;u===null?(i.next=i,_f(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=i0(t,e,i,r),n!==null&&(i=gt(),Zt(n,t,r,i),x0(n,e,r))}}function I0(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function S0(t,e){vo=Jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function x0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rf(t,n)}}var Zl={readContext:Bt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},RS={readContext:Bt,useCallback:function(t,e){return un().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:Bg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wl(4194308,4,y0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wl(4194308,4,t,e)},useInsertionEffect:function(t,e){return wl(4,2,t,e)},useMemo:function(t,e){var n=un();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=un();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=xS.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=un();return t={current:t},e.memoizedState=t},useState:Fg,useDebugValue:Rf,useDeferredValue:function(t){return un().memoizedState=t},useTransition:function(){var t=Fg(!1),e=t[0];return t=SS.bind(null,t[1]),un().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=un();if(we){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),ze===null)throw Error(F(349));ui&30||u0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Bg(h0.bind(null,r,s,t),[t]),r.flags|=2048,Wo(9,c0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=un(),e=ze.identifierPrefix;if(we){var n=Pn,r=Cn;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=$o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=IS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},kS={readContext:Bt,useCallback:v0,useContext:Bt,useEffect:Af,useImperativeHandle:_0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:w0,useReducer:eh,useRef:p0,useState:function(){return eh(Ho)},useDebugValue:Rf,useDeferredValue:function(t){var e=zt();return E0(e,Ve.memoizedState,t)},useTransition:function(){var t=eh(Ho)[0],e=zt().memoizedState;return[t,e]},useMutableSource:a0,useSyncExternalStore:l0,useId:T0,unstable_isNewReconciler:!1},CS={readContext:Bt,useCallback:v0,useContext:Bt,useEffect:Af,useImperativeHandle:_0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:w0,useReducer:th,useRef:p0,useState:function(){return th(Ho)},useDebugValue:Rf,useDeferredValue:function(t){var e=zt();return Ve===null?e.memoizedState=t:E0(e,Ve.memoizedState,t)},useTransition:function(){var t=th(Ho)[0],e=zt().memoizedState;return[t,e]},useMutableSource:a0,useSyncExternalStore:l0,useId:T0,unstable_isNewReconciler:!1};function Kt(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ou={isMounted:function(t){return(t=t._reactInternals)?wi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=gt(),i=wr(t),s=On(r,i);s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,i),e!==null&&(Zt(e,t,i,r),_l(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=gt(),i=wr(t),s=On(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,i),e!==null&&(Zt(e,t,i,r),_l(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gt(),r=wr(t),i=On(n,r);i.tag=2,e!=null&&(i.callback=e),e=_r(t,i,r),e!==null&&(Zt(e,t,r,n),_l(e,t,r))}};function zg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Mo(n,r)||!Mo(i,s):!0}function A0(t,e,n){var r=!1,i=Rr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=St(e)?ai:at.current,r=e.contextTypes,s=(r=r!=null)?os(t,i):Rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ou,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function $g(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ou.enqueueReplaceState(e,e.state,null)}function Jh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},vf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=St(e)?ai:at.current,i.context=os(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ou.enqueueReplaceState(i,i.state,null),Xl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function cs(t,e){try{var n="",r=e;do n+=rI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function nh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var PS=typeof WeakMap=="function"?WeakMap:Map;function R0(t,e,n){n=On(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){tu||(tu=!0,ud=r),Zh(t,e)},n}function k0(t,e,n){n=On(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Zh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zh(t,e),typeof r!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new PS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=HS.bind(null,t,e,n),e.then(t,t))}function Wg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=On(-1,1),e.tag=2,_r(n,e,1))),n.lanes|=1),t)}var NS=qn.ReactCurrentOwner,Tt=!1;function pt(t,e,n,r){e.child=t===null?r0(e,null,n,r):ls(e,t.child,n,r)}function Kg(t,e,n,r,i){n=n.render;var s=e.ref;return Zi(e,i),r=Sf(t,e,n,r,s,i),n=xf(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fn(t,e,i)):(we&&n&&df(e),e.flags|=1,pt(t,e,r,i),e.child)}function Gg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Lf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,C0(t,e,s,r,i)):(t=Sl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Mo,n(o,r)&&t.ref===e.ref)return Fn(t,e,i)}return e.flags|=1,t=Er(s,r),t.ref=e.ref,t.return=e,e.child=t}function C0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Mo(s,r)&&t.ref===e.ref)if(Tt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Tt=!0);else return e.lanes=t.lanes,Fn(t,e,i)}return ed(t,e,n,r,i)}function P0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Ki,kt),kt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(Ki,kt),kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,fe(Ki,kt),kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,fe(Ki,kt),kt|=r;return pt(t,e,i,n),e.child}function N0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ed(t,e,n,r,i){var s=St(n)?ai:at.current;return s=os(e,s),Zi(e,i),n=Sf(t,e,n,r,s,i),r=xf(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fn(t,e,i)):(we&&r&&df(e),e.flags|=1,pt(t,e,n,i),e.child)}function Qg(t,e,n,r,i){if(St(n)){var s=!0;Wl(e)}else s=!1;if(Zi(e,i),e.stateNode===null)El(t,e),A0(e,n,r),Jh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bt(c):(c=St(n)?ai:at.current,c=os(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&$g(e,o,r,c),tr=!1;var g=e.memoizedState;o.state=g,Xl(e,r,o,i),u=e.memoizedState,l!==r||g!==u||It.current||tr?(typeof d=="function"&&(Yh(e,n,d,r),u=e.memoizedState),(l=tr||zg(e,n,l,r,g,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,s0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Kt(e.type,l),o.props=c,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Bt(u):(u=St(n)?ai:at.current,u=os(e,u));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&$g(e,o,r,u),tr=!1,g=e.memoizedState,o.state=g,Xl(e,r,o,i);var x=e.memoizedState;l!==p||g!==x||It.current||tr?(typeof w=="function"&&(Yh(e,n,w,r),x=e.memoizedState),(c=tr||zg(e,n,c,r,g,x,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return td(t,e,n,r,s,i)}function td(t,e,n,r,i,s){N0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Og(e,n,!1),Fn(t,e,s);r=e.stateNode,NS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ls(e,t.child,null,s),e.child=ls(e,null,l,s)):pt(t,e,l,s),e.memoizedState=r.state,i&&Og(e,n,!0),e.child}function D0(t){var e=t.stateNode;e.pendingContext?bg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bg(t,e.context,!1),wf(t,e.containerInfo)}function Xg(t,e,n,r,i){return as(),pf(i),e.flags|=256,pt(t,e,n,r),e.child}var nd={dehydrated:null,treeContext:null,retryLane:0};function rd(t){return{baseLanes:t,cachePool:null,transitions:null}}function b0(t,e,n){var r=e.pendingProps,i=Ee.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),fe(Ee,i&1),t===null)return Qh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Mu(o,r,0,null),t=ri(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rd(n),e.memoizedState=nd,t):kf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return DS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Er(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Er(l,s):(s=ri(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?rd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=nd,r}return s=t.child,t=s.sibling,r=Er(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function kf(t,e){return e=Mu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Za(t,e,n,r){return r!==null&&pf(r),ls(e,t.child,null,n),t=kf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function DS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=nh(Error(F(422))),Za(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Mu({mode:"visible",children:r.children},i,0,null),s=ri(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ls(e,t.child,null,o),e.child.memoizedState=rd(o),e.memoizedState=nd,s);if(!(e.mode&1))return Za(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=nh(s,r,void 0),Za(t,e,o,r)}if(l=(o&t.childLanes)!==0,Tt||l){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Un(t,i),Zt(r,t,i,-1))}return Of(),r=nh(Error(F(421))),Za(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=WS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ct=yr(i.nextSibling),Dt=e,we=!0,Qt=null,t!==null&&(Mt[jt++]=Cn,Mt[jt++]=Pn,Mt[jt++]=li,Cn=t.id,Pn=t.overflow,li=e),e=kf(e,r.children),e.flags|=4096,e)}function Yg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Xh(t.return,e,n)}function rh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function O0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(pt(t,e,r.children,n),r=Ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yg(t,n,e);else if(t.tag===19)Yg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(Ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Yl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),rh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Yl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}rh(e,!0,n,null,s);break;case"together":rh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function El(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ci|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bS(t,e,n){switch(e.tag){case 3:D0(e),as();break;case 5:o0(e);break;case 1:St(e.type)&&Wl(e);break;case 4:wf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;fe(Gl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(Ee,Ee.current&1),e.flags|=128,null):n&e.child.childLanes?b0(t,e,n):(fe(Ee,Ee.current&1),t=Fn(t,e,n),t!==null?t.sibling:null);fe(Ee,Ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return O0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(Ee,Ee.current),r)break;return null;case 22:case 23:return e.lanes=0,P0(t,e,n)}return Fn(t,e,n)}var L0,id,V0,M0;L0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};id=function(){};V0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Zr(pn.current);var s=null;switch(n){case"input":i=Ah(t,i),r=Ah(t,r),s=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),s=[];break;case"textarea":i=Ch(t,i),r=Ch(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=$l)}Nh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Po.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Po.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ge("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};M0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Js(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function OS(t,e,n){var r=e.pendingProps;switch(ff(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(e),null;case 1:return St(e.type)&&Hl(),tt(e),null;case 3:return r=e.stateNode,us(),_e(It),_e(at),Tf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ya(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qt!==null&&(dd(Qt),Qt=null))),id(t,e),tt(e),null;case 5:Ef(e);var i=Zr(zo.current);if(n=e.type,t!==null&&e.stateNode!=null)V0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return tt(e),null}if(t=Zr(pn.current),Ya(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[cn]=e,r[Fo]=s,t=(e.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<oo.length;i++)ge(oo[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":og(r,s),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ge("invalid",r);break;case"textarea":lg(r,s),ge("invalid",r)}Nh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Xa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Xa(r.textContent,l,t),i=["children",""+l]):Po.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":za(r),ag(r,s,!0);break;case"textarea":za(r),ug(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=$l)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[cn]=e,t[Fo]=r,L0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Dh(n,r),n){case"dialog":ge("cancel",t),ge("close",t),i=r;break;case"iframe":case"object":case"embed":ge("load",t),i=r;break;case"video":case"audio":for(i=0;i<oo.length;i++)ge(oo[i],t);i=r;break;case"source":ge("error",t),i=r;break;case"img":case"image":case"link":ge("error",t),ge("load",t),i=r;break;case"details":ge("toggle",t),i=r;break;case"input":og(t,r),i=Ah(t,r),ge("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),ge("invalid",t);break;case"textarea":lg(t,r),i=Ch(t,r),ge("invalid",t);break;default:i=r}Nh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?pv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&dv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&No(t,u):typeof u=="number"&&No(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Po.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ge("scroll",t):u!=null&&Yd(t,s,u,o))}switch(n){case"input":za(t),ag(t,r,!1);break;case"textarea":za(t),ug(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ar(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Qi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Qi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=$l)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tt(e),null;case 6:if(t&&e.stateNode!=null)M0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Zr(zo.current),Zr(pn.current),Ya(e)){if(r=e.stateNode,n=e.memoizedProps,r[cn]=e,(s=r.nodeValue!==n)&&(t=Dt,t!==null))switch(t.tag){case 3:Xa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[cn]=e,e.stateNode=r}return tt(e),null;case 13:if(_e(Ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&Ct!==null&&e.mode&1&&!(e.flags&128))t0(),as(),e.flags|=98560,s=!1;else if(s=Ya(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[cn]=e}else as(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tt(e),s=!1}else Qt!==null&&(dd(Qt),Qt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ee.current&1?je===0&&(je=3):Of())),e.updateQueue!==null&&(e.flags|=4),tt(e),null);case 4:return us(),id(t,e),t===null&&jo(e.stateNode.containerInfo),tt(e),null;case 10:return yf(e.type._context),tt(e),null;case 17:return St(e.type)&&Hl(),tt(e),null;case 19:if(_e(Ee),s=e.memoizedState,s===null)return tt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Js(s,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yl(t),o!==null){for(e.flags|=128,Js(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(Ee,Ee.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>hs&&(e.flags|=128,r=!0,Js(s,!1),e.lanes=4194304)}else{if(!r)if(t=Yl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!we)return tt(e),null}else 2*Ne()-s.renderingStartTime>hs&&n!==1073741824&&(e.flags|=128,r=!0,Js(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=Ee.current,fe(Ee,r?n&1|2:n&1),e):(tt(e),null);case 22:case 23:return bf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?kt&1073741824&&(tt(e),e.subtreeFlags&6&&(e.flags|=8192)):tt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function LS(t,e){switch(ff(e),e.tag){case 1:return St(e.type)&&Hl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return us(),_e(It),_e(at),Tf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ef(e),null;case 13:if(_e(Ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));as()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Ee),null;case 4:return us(),null;case 10:return yf(e.type._context),null;case 22:case 23:return bf(),null;case 24:return null;default:return null}}var el=!1,it=!1,VS=typeof WeakSet=="function"?WeakSet:Set,H=null;function qi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function sd(t,e,n){try{n()}catch(r){Re(t,e,r)}}var Jg=!1;function MS(t,e){if(zh=Fl,t=zv(),hf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,g=null;t:for(;;){for(var w;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(w=p.firstChild)!==null;)g=p,p=w;for(;;){if(p===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++d===r&&(u=o),(w=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for($h={focusedElem:t,selectionRange:n},Fl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var P=x.memoizedProps,k=x.memoizedState,I=e.stateNode,_=I.getSnapshotBeforeUpdate(e.elementType===e.type?P:Kt(e.type,P),k);I.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(b){Re(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return x=Jg,Jg=!1,x}function wo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&sd(e,n,s)}i=i.next}while(i!==r)}}function Lu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function od(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function j0(t){var e=t.alternate;e!==null&&(t.alternate=null,j0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[cn],delete e[Fo],delete e[qh],delete e[vS],delete e[wS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function U0(t){return t.tag===5||t.tag===3||t.tag===4}function Zg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||U0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$l));else if(r!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}function ld(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}var He=null,Gt=!1;function Yn(t,e,n){for(n=n.child;n!==null;)F0(t,e,n),n=n.sibling}function F0(t,e,n){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(Ru,n)}catch{}switch(n.tag){case 5:it||qi(n,e);case 6:var r=He,i=Gt;He=null,Yn(t,e,n),He=r,Gt=i,He!==null&&(Gt?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Gt?(t=He,n=n.stateNode,t.nodeType===8?Xc(t.parentNode,n):t.nodeType===1&&Xc(t,n),Lo(t)):Xc(He,n.stateNode));break;case 4:r=He,i=Gt,He=n.stateNode.containerInfo,Gt=!0,Yn(t,e,n),He=r,Gt=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&sd(n,e,o),i=i.next}while(i!==r)}Yn(t,e,n);break;case 1:if(!it&&(qi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Re(n,e,l)}Yn(t,e,n);break;case 21:Yn(t,e,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,Yn(t,e,n),it=r):Yn(t,e,n);break;default:Yn(t,e,n)}}function ey(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new VS),e.forEach(function(r){var i=qS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:He=l.stateNode,Gt=!1;break e;case 3:He=l.stateNode.containerInfo,Gt=!0;break e;case 4:He=l.stateNode.containerInfo,Gt=!0;break e}l=l.return}if(He===null)throw Error(F(160));F0(s,o,i),He=null,Gt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Re(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)B0(e,t),e=e.sibling}function B0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qt(e,t),ln(t),r&4){try{wo(3,t,t.return),Lu(3,t)}catch(P){Re(t,t.return,P)}try{wo(5,t,t.return)}catch(P){Re(t,t.return,P)}}break;case 1:qt(e,t),ln(t),r&512&&n!==null&&qi(n,n.return);break;case 5:if(qt(e,t),ln(t),r&512&&n!==null&&qi(n,n.return),t.flags&32){var i=t.stateNode;try{No(i,"")}catch(P){Re(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&uv(i,s),Dh(l,o);var c=Dh(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?pv(i,p):d==="dangerouslySetInnerHTML"?dv(i,p):d==="children"?No(i,p):Yd(i,d,p,c)}switch(l){case"input":Rh(i,s);break;case"textarea":cv(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?Qi(i,!!s.multiple,w,!1):g!==!!s.multiple&&(s.defaultValue!=null?Qi(i,!!s.multiple,s.defaultValue,!0):Qi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Fo]=s}catch(P){Re(t,t.return,P)}}break;case 6:if(qt(e,t),ln(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Re(t,t.return,P)}}break;case 3:if(qt(e,t),ln(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Lo(e.containerInfo)}catch(P){Re(t,t.return,P)}break;case 4:qt(e,t),ln(t);break;case 13:qt(e,t),ln(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Nf=Ne())),r&4&&ey(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(it=(c=it)||d,qt(e,t),it=c):qt(e,t),ln(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(H=t,d=t.child;d!==null;){for(p=H=d;H!==null;){switch(g=H,w=g.child,g.tag){case 0:case 11:case 14:case 15:wo(4,g,g.return);break;case 1:qi(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(P){Re(r,n,P)}}break;case 5:qi(g,g.return);break;case 22:if(g.memoizedState!==null){ny(p);continue}}w!==null?(w.return=g,H=w):ny(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=fv("display",o))}catch(P){Re(t,t.return,P)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(P){Re(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:qt(e,t),ln(t),r&4&&ey(t);break;case 21:break;default:qt(e,t),ln(t)}}function ln(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(U0(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(No(i,""),r.flags&=-33);var s=Zg(t);ld(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Zg(t);ad(t,l,o);break;default:throw Error(F(161))}}catch(u){Re(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jS(t,e,n){H=t,z0(t)}function z0(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||el;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||it;l=el;var c=it;if(el=o,(it=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?ry(i):u!==null?(u.return=o,H=u):ry(i);for(;s!==null;)H=s,z0(s),s=s.sibling;H=i,el=l,it=c}ty(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):ty(t)}}function ty(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:it||Lu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Kt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ug(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ug(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Lo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}it||e.flags&512&&od(e)}catch(g){Re(e,e.return,g)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function ny(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function ry(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Lu(4,e)}catch(u){Re(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Re(e,i,u)}}var s=e.return;try{od(e)}catch(u){Re(e,s,u)}break;case 5:var o=e.return;try{od(e)}catch(u){Re(e,o,u)}}}catch(u){Re(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var US=Math.ceil,eu=qn.ReactCurrentDispatcher,Cf=qn.ReactCurrentOwner,Ft=qn.ReactCurrentBatchConfig,ie=0,ze=null,Oe=null,Ke=0,kt=0,Ki=br(0),je=0,qo=null,ci=0,Vu=0,Pf=0,Eo=null,wt=null,Nf=0,hs=1/0,An=null,tu=!1,ud=null,vr=null,tl=!1,cr=null,nu=0,To=0,cd=null,Tl=-1,Il=0;function gt(){return ie&6?Ne():Tl!==-1?Tl:Tl=Ne()}function wr(t){return t.mode&1?ie&2&&Ke!==0?Ke&-Ke:TS.transition!==null?(Il===0&&(Il=Av()),Il):(t=ue,t!==0||(t=window.event,t=t===void 0?16:bv(t.type)),t):1}function Zt(t,e,n,r){if(50<To)throw To=0,cd=null,Error(F(185));oa(t,n,r),(!(ie&2)||t!==ze)&&(t===ze&&(!(ie&2)&&(Vu|=n),je===4&&rr(t,Ke)),xt(t,r),n===1&&ie===0&&!(e.mode&1)&&(hs=Ne()+500,Du&&Or()))}function xt(t,e){var n=t.callbackNode;TI(t,e);var r=Ul(t,t===ze?Ke:0);if(r===0)n!==null&&dg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&dg(n),e===1)t.tag===0?ES(iy.bind(null,t)):Jv(iy.bind(null,t)),yS(function(){!(ie&6)&&Or()}),n=null;else{switch(Rv(r)){case 1:n=nf;break;case 4:n=Sv;break;case 16:n=jl;break;case 536870912:n=xv;break;default:n=jl}n=X0(n,$0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $0(t,e){if(Tl=-1,Il=0,ie&6)throw Error(F(327));var n=t.callbackNode;if(es()&&t.callbackNode!==n)return null;var r=Ul(t,t===ze?Ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ru(t,r);else{e=r;var i=ie;ie|=2;var s=W0();(ze!==t||Ke!==e)&&(An=null,hs=Ne()+500,ni(t,e));do try{zS();break}catch(l){H0(t,l)}while(1);gf(),eu.current=s,ie=i,Oe!==null?e=0:(ze=null,Ke=0,e=je)}if(e!==0){if(e===2&&(i=Mh(t),i!==0&&(r=i,e=hd(t,i))),e===1)throw n=qo,ni(t,0),rr(t,r),xt(t,Ne()),n;if(e===6)rr(t,r);else{if(i=t.current.alternate,!(r&30)&&!FS(i)&&(e=ru(t,r),e===2&&(s=Mh(t),s!==0&&(r=s,e=hd(t,s))),e===1))throw n=qo,ni(t,0),rr(t,r),xt(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Qr(t,wt,An);break;case 3:if(rr(t,r),(r&130023424)===r&&(e=Nf+500-Ne(),10<e)){if(Ul(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){gt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Wh(Qr.bind(null,t,wt,An),e);break}Qr(t,wt,An);break;case 4:if(rr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*US(r/1960))-r,10<r){t.timeoutHandle=Wh(Qr.bind(null,t,wt,An),r);break}Qr(t,wt,An);break;case 5:Qr(t,wt,An);break;default:throw Error(F(329))}}}return xt(t,Ne()),t.callbackNode===n?$0.bind(null,t):null}function hd(t,e){var n=Eo;return t.current.memoizedState.isDehydrated&&(ni(t,e).flags|=256),t=ru(t,e),t!==2&&(e=wt,wt=n,e!==null&&dd(e)),t}function dd(t){wt===null?wt=t:wt.push.apply(wt,t)}function FS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!nn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rr(t,e){for(e&=~Pf,e&=~Vu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jt(e),r=1<<n;t[n]=-1,e&=~r}}function iy(t){if(ie&6)throw Error(F(327));es();var e=Ul(t,0);if(!(e&1))return xt(t,Ne()),null;var n=ru(t,e);if(t.tag!==0&&n===2){var r=Mh(t);r!==0&&(e=r,n=hd(t,r))}if(n===1)throw n=qo,ni(t,0),rr(t,e),xt(t,Ne()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Qr(t,wt,An),xt(t,Ne()),null}function Df(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(hs=Ne()+500,Du&&Or())}}function hi(t){cr!==null&&cr.tag===0&&!(ie&6)&&es();var e=ie;ie|=1;var n=Ft.transition,r=ue;try{if(Ft.transition=null,ue=1,t)return t()}finally{ue=r,Ft.transition=n,ie=e,!(ie&6)&&Or()}}function bf(){kt=Ki.current,_e(Ki)}function ni(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gS(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(ff(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hl();break;case 3:us(),_e(It),_e(at),Tf();break;case 5:Ef(r);break;case 4:us();break;case 13:_e(Ee);break;case 19:_e(Ee);break;case 10:yf(r.type._context);break;case 22:case 23:bf()}n=n.return}if(ze=t,Oe=t=Er(t.current,null),Ke=kt=e,je=0,qo=null,Pf=Vu=ci=0,wt=Eo=null,Jr!==null){for(e=0;e<Jr.length;e++)if(n=Jr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Jr=null}return t}function H0(t,e){do{var n=Oe;try{if(gf(),vl.current=Zl,Jl){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Jl=!1}if(ui=0,Be=Ve=Te=null,vo=!1,$o=0,Cf.current=null,n===null||n.return===null){je=1,qo=e,Oe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ke,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=Wg(o);if(w!==null){w.flags&=-257,qg(w,o,l,s,e),w.mode&1&&Hg(s,c,e),e=w,u=c;var x=e.updateQueue;if(x===null){var P=new Set;P.add(u),e.updateQueue=P}else x.add(u);break e}else{if(!(e&1)){Hg(s,c,e),Of();break e}u=Error(F(426))}}else if(we&&l.mode&1){var k=Wg(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),qg(k,o,l,s,e),pf(cs(u,l));break e}}s=u=cs(u,l),je!==4&&(je=2),Eo===null?Eo=[s]:Eo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=R0(s,u,e);jg(s,I);break e;case 1:l=u;var _=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(vr===null||!vr.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=k0(s,l,e);jg(s,b);break e}}s=s.return}while(s!==null)}K0(n)}catch(M){e=M,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(1)}function W0(){var t=eu.current;return eu.current=Zl,t===null?Zl:t}function Of(){(je===0||je===3||je===2)&&(je=4),ze===null||!(ci&268435455)&&!(Vu&268435455)||rr(ze,Ke)}function ru(t,e){var n=ie;ie|=2;var r=W0();(ze!==t||Ke!==e)&&(An=null,ni(t,e));do try{BS();break}catch(i){H0(t,i)}while(1);if(gf(),ie=n,eu.current=r,Oe!==null)throw Error(F(261));return ze=null,Ke=0,je}function BS(){for(;Oe!==null;)q0(Oe)}function zS(){for(;Oe!==null&&!fI();)q0(Oe)}function q0(t){var e=Q0(t.alternate,t,kt);t.memoizedProps=t.pendingProps,e===null?K0(t):Oe=e,Cf.current=null}function K0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=LS(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,Oe=null;return}}else if(n=OS(n,e,kt),n!==null){Oe=n;return}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);je===0&&(je=5)}function Qr(t,e,n){var r=ue,i=Ft.transition;try{Ft.transition=null,ue=1,$S(t,e,n,r)}finally{Ft.transition=i,ue=r}return null}function $S(t,e,n,r){do es();while(cr!==null);if(ie&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(II(t,s),t===ze&&(Oe=ze=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tl||(tl=!0,X0(jl,function(){return es(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ft.transition,Ft.transition=null;var o=ue;ue=1;var l=ie;ie|=4,Cf.current=null,MS(t,n),B0(n,t),uS($h),Fl=!!zh,$h=zh=null,t.current=n,jS(n),pI(),ie=l,ue=o,Ft.transition=s}else t.current=n;if(tl&&(tl=!1,cr=t,nu=i),s=t.pendingLanes,s===0&&(vr=null),yI(n.stateNode),xt(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(tu)throw tu=!1,t=ud,ud=null,t;return nu&1&&t.tag!==0&&es(),s=t.pendingLanes,s&1?t===cd?To++:(To=0,cd=t):To=0,Or(),null}function es(){if(cr!==null){var t=Rv(nu),e=Ft.transition,n=ue;try{if(Ft.transition=null,ue=16>t?16:t,cr===null)var r=!1;else{if(t=cr,cr=null,nu=0,ie&6)throw Error(F(331));var i=ie;for(ie|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:wo(8,d,s)}var p=d.child;if(p!==null)p.return=d,H=p;else for(;H!==null;){d=H;var g=d.sibling,w=d.return;if(j0(d),d===c){H=null;break}if(g!==null){g.return=w,H=g;break}H=w}}}var x=s.alternate;if(x!==null){var P=x.child;if(P!==null){x.child=null;do{var k=P.sibling;P.sibling=null,P=k}while(P!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:wo(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,H=I;break e}H=s.return}}var _=t.current;for(H=_;H!==null;){o=H;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,H=E;else e:for(o=_;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Lu(9,l)}}catch(M){Re(l,l.return,M)}if(l===o){H=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,H=b;break e}H=l.return}}if(ie=i,Or(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(Ru,t)}catch{}r=!0}return r}finally{ue=n,Ft.transition=e}}return!1}function sy(t,e,n){e=cs(n,e),e=R0(t,e,1),t=_r(t,e,1),e=gt(),t!==null&&(oa(t,1,e),xt(t,e))}function Re(t,e,n){if(t.tag===3)sy(t,t,n);else for(;e!==null;){if(e.tag===3){sy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vr===null||!vr.has(r))){t=cs(n,t),t=k0(e,t,1),e=_r(e,t,1),t=gt(),e!==null&&(oa(e,1,t),xt(e,t));break}}e=e.return}}function HS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=gt(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(Ke&n)===n&&(je===4||je===3&&(Ke&130023424)===Ke&&500>Ne()-Nf?ni(t,0):Pf|=n),xt(t,e)}function G0(t,e){e===0&&(t.mode&1?(e=Wa,Wa<<=1,!(Wa&130023424)&&(Wa=4194304)):e=1);var n=gt();t=Un(t,e),t!==null&&(oa(t,e,n),xt(t,n))}function WS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),G0(t,n)}function qS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),G0(t,n)}var Q0;Q0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||It.current)Tt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tt=!1,bS(t,e,n);Tt=!!(t.flags&131072)}else Tt=!1,we&&e.flags&1048576&&Zv(e,Kl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;El(t,e),t=e.pendingProps;var i=os(e,at.current);Zi(e,n),i=Sf(null,e,r,t,i,n);var s=xf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,St(r)?(s=!0,Wl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vf(e),i.updater=Ou,e.stateNode=i,i._reactInternals=e,Jh(e,r,t,n),e=td(null,e,r,!0,s,n)):(e.tag=0,we&&s&&df(e),pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(El(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=GS(r),t=Kt(r,t),i){case 0:e=ed(null,e,r,t,n);break e;case 1:e=Qg(null,e,r,t,n);break e;case 11:e=Kg(null,e,r,t,n);break e;case 14:e=Gg(null,e,r,Kt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),ed(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Qg(t,e,r,i,n);case 3:e:{if(D0(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,s0(t,e),Xl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=cs(Error(F(423)),e),e=Xg(t,e,r,n,i);break e}else if(r!==i){i=cs(Error(F(424)),e),e=Xg(t,e,r,n,i);break e}else for(Ct=yr(e.stateNode.containerInfo.firstChild),Dt=e,we=!0,Qt=null,n=r0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(as(),r===i){e=Fn(t,e,n);break e}pt(t,e,r,n)}e=e.child}return e;case 5:return o0(e),t===null&&Qh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Hh(r,i)?o=null:s!==null&&Hh(r,s)&&(e.flags|=32),N0(t,e),pt(t,e,o,n),e.child;case 6:return t===null&&Qh(e),null;case 13:return b0(t,e,n);case 4:return wf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ls(e,null,r,n):pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Kg(t,e,r,i,n);case 7:return pt(t,e,e.pendingProps,n),e.child;case 8:return pt(t,e,e.pendingProps.children,n),e.child;case 12:return pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,fe(Gl,r._currentValue),r._currentValue=o,s!==null)if(nn(s.value,o)){if(s.children===i.children&&!It.current){e=Fn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=On(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Xh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Xh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Zi(e,n),i=Bt(i),r=r(i),e.flags|=1,pt(t,e,r,n),e.child;case 14:return r=e.type,i=Kt(r,e.pendingProps),i=Kt(r.type,i),Gg(t,e,r,i,n);case 15:return C0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),El(t,e),e.tag=1,St(r)?(t=!0,Wl(e)):t=!1,Zi(e,n),A0(e,r,i),Jh(e,r,i,n),td(null,e,r,!0,t,n);case 19:return O0(t,e,n);case 22:return P0(t,e,n)}throw Error(F(156,e.tag))};function X0(t,e){return Iv(t,e)}function KS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,e,n,r){return new KS(t,e,n,r)}function Lf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function GS(t){if(typeof t=="function")return Lf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zd)return 11;if(t===ef)return 14}return 2}function Er(t,e){var n=t.alternate;return n===null?(n=Ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Sl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Lf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Mi:return ri(n.children,i,s,e);case Jd:o=8,i|=8;break;case Th:return t=Ut(12,n,e,i|2),t.elementType=Th,t.lanes=s,t;case Ih:return t=Ut(13,n,e,i),t.elementType=Ih,t.lanes=s,t;case Sh:return t=Ut(19,n,e,i),t.elementType=Sh,t.lanes=s,t;case ov:return Mu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case iv:o=10;break e;case sv:o=9;break e;case Zd:o=11;break e;case ef:o=14;break e;case er:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Ut(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ri(t,e,n,r){return t=Ut(7,t,r,e),t.lanes=n,t}function Mu(t,e,n,r){return t=Ut(22,t,r,e),t.elementType=ov,t.lanes=n,t.stateNode={isHidden:!1},t}function ih(t,e,n){return t=Ut(6,t,null,e),t.lanes=n,t}function sh(t,e,n){return e=Ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function QS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uc(0),this.expirationTimes=Uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vf(t,e,n,r,i,s,o,l,u){return t=new QS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ut(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vf(s),t}function XS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Y0(t){if(!t)return Rr;t=t._reactInternals;e:{if(wi(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(St(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(St(n))return Yv(t,n,e)}return e}function J0(t,e,n,r,i,s,o,l,u){return t=Vf(n,r,!0,t,i,s,o,l,u),t.context=Y0(null),n=t.current,r=gt(),i=wr(n),s=On(r,i),s.callback=e??null,_r(n,s,i),t.current.lanes=i,oa(t,i,r),xt(t,r),t}function ju(t,e,n,r){var i=e.current,s=gt(),o=wr(i);return n=Y0(n),e.context===null?e.context=n:e.pendingContext=n,e=On(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=_r(i,e,o),t!==null&&(Zt(t,i,o,s),_l(t,i,o)),o}function iu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function oy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Mf(t,e){oy(t,e),(t=t.alternate)&&oy(t,e)}function YS(){return null}var Z0=typeof reportError=="function"?reportError:function(t){console.error(t)};function jf(t){this._internalRoot=t}Uu.prototype.render=jf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));ju(t,e,null,null)};Uu.prototype.unmount=jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hi(function(){ju(null,t,null,null)}),e[jn]=null}};function Uu(t){this._internalRoot=t}Uu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nr.length&&e!==0&&e<nr[n].priority;n++);nr.splice(n,0,t),n===0&&Dv(t)}};function Uf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ay(){}function JS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=iu(o);s.call(c)}}var o=J0(e,r,t,0,null,!1,!1,"",ay);return t._reactRootContainer=o,t[jn]=o.current,jo(t.nodeType===8?t.parentNode:t),hi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=iu(u);l.call(c)}}var u=Vf(t,0,!1,null,null,!1,!1,"",ay);return t._reactRootContainer=u,t[jn]=u.current,jo(t.nodeType===8?t.parentNode:t),hi(function(){ju(e,u,n,r)}),u}function Bu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=iu(o);l.call(u)}}ju(e,o,t,i)}else o=JS(n,e,t,i,r);return iu(o)}kv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=so(e.pendingLanes);n!==0&&(rf(e,n|1),xt(e,Ne()),!(ie&6)&&(hs=Ne()+500,Or()))}break;case 13:hi(function(){var r=Un(t,1);if(r!==null){var i=gt();Zt(r,t,1,i)}}),Mf(t,1)}};sf=function(t){if(t.tag===13){var e=Un(t,134217728);if(e!==null){var n=gt();Zt(e,t,134217728,n)}Mf(t,134217728)}};Cv=function(t){if(t.tag===13){var e=wr(t),n=Un(t,e);if(n!==null){var r=gt();Zt(n,t,e,r)}Mf(t,e)}};Pv=function(){return ue};Nv=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};Oh=function(t,e,n){switch(e){case"input":if(Rh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Nu(r);if(!i)throw Error(F(90));lv(r),Rh(r,i)}}}break;case"textarea":cv(t,n);break;case"select":e=n.value,e!=null&&Qi(t,!!n.multiple,e,!1)}};yv=Df;_v=hi;var ZS={usingClientEntryPoint:!1,Events:[la,Bi,Nu,mv,gv,Df]},Zs={findFiberByHostInstance:Yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ex={bundleType:Zs.bundleType,version:Zs.version,rendererPackageName:Zs.rendererPackageName,rendererConfig:Zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ev(t),t===null?null:t.stateNode},findFiberByHostInstance:Zs.findFiberByHostInstance||YS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Ru=nl.inject(ex),fn=nl}catch{}}Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZS;Ot.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uf(e))throw Error(F(200));return XS(t,e,null,n)};Ot.createRoot=function(t,e){if(!Uf(t))throw Error(F(299));var n=!1,r="",i=Z0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Vf(t,1,!1,null,null,n,!1,r,i),t[jn]=e.current,jo(t.nodeType===8?t.parentNode:t),new jf(e)};Ot.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Ev(e),t=t===null?null:t.stateNode,t};Ot.flushSync=function(t){return hi(t)};Ot.hydrate=function(t,e,n){if(!Fu(e))throw Error(F(200));return Bu(null,t,e,!0,n)};Ot.hydrateRoot=function(t,e,n){if(!Uf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Z0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=J0(e,null,t,1,n??null,i,!1,s,o),t[jn]=e.current,jo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Uu(e)};Ot.render=function(t,e,n){if(!Fu(e))throw Error(F(200));return Bu(null,t,e,!1,n)};Ot.unmountComponentAtNode=function(t){if(!Fu(t))throw Error(F(40));return t._reactRootContainer?(hi(function(){Bu(null,null,t,!1,function(){t._reactRootContainer=null,t[jn]=null})}),!0):!1};Ot.unstable_batchedUpdates=Df;Ot.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Fu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Bu(t,e,n,!1,r)};Ot.version="18.3.1-next-f1338f8080-20240426";function ew(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ew)}catch(t){console.error(t)}}ew(),ev.exports=Ot;var tx=ev.exports,ly=tx;wh.createRoot=ly.createRoot,wh.hydrateRoot=ly.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ko(){return Ko=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ko.apply(this,arguments)}var hr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(hr||(hr={}));const uy="popstate";function nx(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return fd("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:su(i)}return ix(e,n,null,t)}function De(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ff(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function rx(){return Math.random().toString(36).substr(2,8)}function cy(t,e){return{usr:t.state,key:t.key,idx:e}}function fd(t,e,n,r){return n===void 0&&(n=null),Ko({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Is(e):e,{state:n,key:e&&e.key||r||rx()})}function su(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Is(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ix(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=hr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Ko({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=hr.Pop;let k=d(),I=k==null?null:k-c;c=k,u&&u({action:l,location:P.location,delta:I})}function g(k,I){l=hr.Push;let _=fd(P.location,k,I);n&&n(_,k),c=d()+1;let E=cy(_,c),b=P.createHref(_);try{o.pushState(E,"",b)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(b)}s&&u&&u({action:l,location:P.location,delta:1})}function w(k,I){l=hr.Replace;let _=fd(P.location,k,I);n&&n(_,k),c=d();let E=cy(_,c),b=P.createHref(_);o.replaceState(E,"",b),s&&u&&u({action:l,location:P.location,delta:0})}function x(k){let I=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof k=="string"?k:su(k);return _=_.replace(/ $/,"%20"),De(I,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,I)}let P={get action(){return l},get location(){return t(i,o)},listen(k){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(uy,p),u=k,()=>{i.removeEventListener(uy,p),u=null}},createHref(k){return e(i,k)},createURL:x,encodeLocation(k){let I=x(k);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:g,replace:w,go(k){return o.go(k)}};return P}var hy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(hy||(hy={}));function sx(t,e,n){return n===void 0&&(n="/"),ox(t,e,n,!1)}function ox(t,e,n,r){let i=typeof e=="string"?Is(e):e,s=Bf(i.pathname||"/",n);if(s==null)return null;let o=tw(t);ax(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=_x(s);l=gx(o[u],c,r)}return l}function tw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(De(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Tr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(De(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),tw(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:px(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of nw(s.path))i(s,o,u)}),e}function nw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=nw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function ax(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:mx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const lx=/^:[\w-]+$/,ux=3,cx=2,hx=1,dx=10,fx=-2,dy=t=>t==="*";function px(t,e){let n=t.split("/"),r=n.length;return n.some(dy)&&(r+=fx),e&&(r+=cx),n.filter(i=>!dy(i)).reduce((i,s)=>i+(lx.test(s)?ux:s===""?hx:dx),r)}function mx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function gx(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=fy({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),g=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=fy({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Tr([s,p.pathname]),pathnameBase:Ix(Tr([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=Tr([s,p.pathnameBase]))}return o}function fy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=yx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:g,isOptional:w}=d;if(g==="*"){let P=l[p]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const x=l[p];return w&&!x?c[g]=void 0:c[g]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function yx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ff(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function _x(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ff(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Bf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const vx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wx=t=>vx.test(t);function Ex(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Is(t):t,s;if(n)if(wx(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Ff(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=py(n.substring(1),"/"):s=py(n,e)}else s=e;return{pathname:s,search:Sx(r),hash:xx(i)}}function py(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function oh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Tx(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function zf(t,e){let n=Tx(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function $f(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Is(t):(i=Ko({},t),De(!i.pathname||!i.pathname.includes("?"),oh("?","pathname","search",i)),De(!i.pathname||!i.pathname.includes("#"),oh("#","pathname","hash",i)),De(!i.search||!i.search.includes("#"),oh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}l=p>=0?e[p]:"/"}let u=Ex(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Tr=t=>t.join("/").replace(/\/\/+/g,"/"),Ix=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Sx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,xx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Ax(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const rw=["post","put","patch","delete"];new Set(rw);const Rx=["get",...rw];new Set(Rx);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Go(){return Go=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Go.apply(this,arguments)}const Hf=O.createContext(null),kx=O.createContext(null),Lr=O.createContext(null),zu=O.createContext(null),Vr=O.createContext({outlet:null,matches:[],isDataRoute:!1}),iw=O.createContext(null);function Cx(t,e){let{relative:n}=e===void 0?{}:e;Ss()||De(!1);let{basename:r,navigator:i}=O.useContext(Lr),{hash:s,pathname:o,search:l}=ow(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Tr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Ss(){return O.useContext(zu)!=null}function xs(){return Ss()||De(!1),O.useContext(zu).location}function sw(t){O.useContext(Lr).static||O.useLayoutEffect(t)}function As(){let{isDataRoute:t}=O.useContext(Vr);return t?zx():Px()}function Px(){Ss()||De(!1);let t=O.useContext(Hf),{basename:e,future:n,navigator:r}=O.useContext(Lr),{matches:i}=O.useContext(Vr),{pathname:s}=xs(),o=JSON.stringify(zf(i,n.v7_relativeSplatPath)),l=O.useRef(!1);return sw(()=>{l.current=!0}),O.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=$f(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Tr([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function ow(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=O.useContext(Lr),{matches:i}=O.useContext(Vr),{pathname:s}=xs(),o=JSON.stringify(zf(i,r.v7_relativeSplatPath));return O.useMemo(()=>$f(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Nx(t,e){return Dx(t,e)}function Dx(t,e,n,r){Ss()||De(!1);let{navigator:i}=O.useContext(Lr),{matches:s}=O.useContext(Vr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=xs(),d;if(e){var p;let k=typeof e=="string"?Is(e):e;u==="/"||(p=k.pathname)!=null&&p.startsWith(u)||De(!1),d=k}else d=c;let g=d.pathname||"/",w=g;if(u!=="/"){let k=u.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(k.length).join("/")}let x=sx(t,{pathname:w}),P=Mx(x&&x.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:Tr([u,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:Tr([u,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r);return e&&P?O.createElement(zu.Provider,{value:{location:Go({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:hr.Pop}},P):P}function bx(){let t=Bx(),e=Ax(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:i},n):null,s)}const Ox=O.createElement(bx,null);class Lx extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(Vr.Provider,{value:this.props.routeContext},O.createElement(iw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Vx(t){let{routeContext:e,match:n,children:r}=t,i=O.useContext(Hf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(Vr.Provider,{value:e},r)}function Mx(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||De(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:g,errors:w}=n,x=p.route.loader&&g[p.route.id]===void 0&&(!w||w[p.route.id]===void 0);if(p.route.lazy||x){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,g)=>{let w,x=!1,P=null,k=null;n&&(w=l&&p.route.id?l[p.route.id]:void 0,P=p.route.errorElement||Ox,u&&(c<0&&g===0?($x("route-fallback",!1),x=!0,k=null):c===g&&(x=!0,k=p.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,g+1)),_=()=>{let E;return w?E=P:x?E=k:p.route.Component?E=O.createElement(p.route.Component,null):p.route.element?E=p.route.element:E=d,O.createElement(Vx,{match:p,routeContext:{outlet:d,matches:I,isDataRoute:n!=null},children:E})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?O.createElement(Lx,{location:n.location,revalidation:n.revalidation,component:P,error:w,children:_(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):_()},null)}var aw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(aw||{}),ou=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ou||{});function jx(t){let e=O.useContext(Hf);return e||De(!1),e}function Ux(t){let e=O.useContext(kx);return e||De(!1),e}function Fx(t){let e=O.useContext(Vr);return e||De(!1),e}function lw(t){let e=Fx(),n=e.matches[e.matches.length-1];return n.route.id||De(!1),n.route.id}function Bx(){var t;let e=O.useContext(iw),n=Ux(ou.UseRouteError),r=lw(ou.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function zx(){let{router:t}=jx(aw.UseNavigateStable),e=lw(ou.UseNavigateStable),n=O.useRef(!1);return sw(()=>{n.current=!0}),O.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Go({fromRouteId:e},s)))},[t,e])}const my={};function $x(t,e,n){!e&&!my[t]&&(my[t]=!0)}function Hx(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function uw(t){let{to:e,replace:n,state:r,relative:i}=t;Ss()||De(!1);let{future:s,static:o}=O.useContext(Lr),{matches:l}=O.useContext(Vr),{pathname:u}=xs(),c=As(),d=$f(e,zf(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(d);return O.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function Zn(t){De(!1)}function Wx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=hr.Pop,navigator:s,static:o=!1,future:l}=t;Ss()&&De(!1);let u=e.replace(/^\/*/,"/"),c=O.useMemo(()=>({basename:u,navigator:s,static:o,future:Go({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Is(r));let{pathname:d="/",search:p="",hash:g="",state:w=null,key:x="default"}=r,P=O.useMemo(()=>{let k=Bf(d,u);return k==null?null:{location:{pathname:k,search:p,hash:g,state:w,key:x},navigationType:i}},[u,d,p,g,w,x,i]);return P==null?null:O.createElement(Lr.Provider,{value:c},O.createElement(zu.Provider,{children:n,value:P}))}function qx(t){let{children:e,location:n}=t;return Nx(pd(e),n)}new Promise(()=>{});function pd(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,i)=>{if(!O.isValidElement(r))return;let s=[...e,i];if(r.type===O.Fragment){n.push.apply(n,pd(r.props.children,s));return}r.type!==Zn&&De(!1),!r.props.index||!r.props.children||De(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=pd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function md(){return md=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},md.apply(this,arguments)}function Kx(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Gx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Qx(t,e){return t.button===0&&(!e||e==="_self")&&!Gx(t)}const Xx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Yx="6";try{window.__reactRouterVersion=Yx}catch{}const Jx="startTransition",gy=HT[Jx];function Zx(t){let{basename:e,children:n,future:r,window:i}=t,s=O.useRef();s.current==null&&(s.current=nx({window:i,v5Compat:!0}));let o=s.current,[l,u]=O.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=O.useCallback(p=>{c&&gy?gy(()=>u(p)):u(p)},[u,c]);return O.useLayoutEffect(()=>o.listen(d),[o,d]),O.useEffect(()=>Hx(r),[r]),O.createElement(Wx,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const eA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",tA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$u=O.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:p}=e,g=Kx(e,Xx),{basename:w}=O.useContext(Lr),x,P=!1;if(typeof c=="string"&&tA.test(c)&&(x=c,eA))try{let E=new URL(window.location.href),b=c.startsWith("//")?new URL(E.protocol+c):new URL(c),M=Bf(b.pathname,w);b.origin===E.origin&&M!=null?c=M+b.search+b.hash:P=!0}catch{}let k=Cx(c,{relative:i}),I=nA(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:p});function _(E){r&&r(E),E.defaultPrevented||I(E)}return O.createElement("a",md({},g,{href:x||k,onClick:P||s?r:_,ref:n,target:u}))});var yy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(yy||(yy={}));var _y;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(_y||(_y={}));function nA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=As(),c=xs(),d=ow(t,{relative:o});return O.useCallback(p=>{if(Qx(p,n)){p.preventDefault();let g=r!==void 0?r:su(c)===su(d);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}let rA={data:""},iA=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||rA},sA=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,oA=/\/\*[^]*?\*\/|  +/g,vy=/\n+/g,ir=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?ir(o,s):s+"{"+ir(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=ir(o,e?e.replace(/([^,])+/g,l=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,l):l?l+" "+u:u)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=ir.p?ir.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},xn={},cw=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+cw(t[n]);return e}return t},aA=(t,e,n,r,i)=>{let s=cw(t),o=xn[s]||(xn[s]=(u=>{let c=0,d=11;for(;c<u.length;)d=101*d+u.charCodeAt(c++)>>>0;return"go"+d})(s));if(!xn[o]){let u=s!==t?t:(c=>{let d,p,g=[{}];for(;d=sA.exec(c.replace(oA,""));)d[4]?g.shift():d[3]?(p=d[3].replace(vy," ").trim(),g.unshift(g[0][p]=g[0][p]||{})):g[0][d[1]]=d[2].replace(vy," ").trim();return g[0]})(t);xn[o]=ir(i?{["@keyframes "+o]:u}:u,n?"":"."+o)}let l=n&&xn.g?xn.g:null;return n&&(xn.g=xn[o]),((u,c,d,p)=>{p?c.data=c.data.replace(p,u):c.data.indexOf(u)===-1&&(c.data=d?u+c.data:c.data+u)})(xn[o],e,r,l),o},lA=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let l=o(n),u=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=u?"."+u:l&&typeof l=="object"?l.props?"":ir(l,""):l===!1?"":l}return r+i+(o??"")},"");function Hu(t){let e=this||{},n=t.call?t(e.p):t;return aA(n.unshift?n.raw?lA(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,iA(e.target),e.g,e.o,e.k)}let hw,gd,yd;Hu.bind({g:1});let Bn=Hu.bind({k:1});function uA(t,e,n,r){ir.p=e,hw=t,gd=n,yd=r}function Mr(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let l=Object.assign({},s),u=l.className||i.className;n.p=Object.assign({theme:gd&&gd()},l),n.o=/ *go\d+/.test(u),l.className=Hu.apply(n,r)+(u?" "+u:""),e&&(l.ref=o);let c=t;return t[0]&&(c=l.as||t,delete l.as),yd&&c[0]&&yd(l),hw(c,l)}return e?e(i):i}}var cA=t=>typeof t=="function",au=(t,e)=>cA(t)?t(e):t,hA=(()=>{let t=0;return()=>(++t).toString()})(),dw=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),dA=20,Wf="default",fw=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return fw(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},xl=[],pw={toasts:[],pausedAt:void 0,settings:{toastLimit:dA}},hn={},mw=(t,e=Wf)=>{hn[e]=fw(hn[e]||pw,t),xl.forEach(([n,r])=>{n===e&&r(hn[e])})},gw=t=>Object.keys(hn).forEach(e=>mw(t,e)),fA=t=>Object.keys(hn).find(e=>hn[e].toasts.some(n=>n.id===t)),Wu=(t=Wf)=>e=>{mw(e,t)},pA={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},mA=(t={},e=Wf)=>{let[n,r]=O.useState(hn[e]||pw),i=O.useRef(hn[e]);O.useEffect(()=>(i.current!==hn[e]&&r(hn[e]),xl.push([e,r]),()=>{let o=xl.findIndex(([l])=>l===e);o>-1&&xl.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var l,u,c;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((l=t[o.type])==null?void 0:l.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((u=t[o.type])==null?void 0:u.duration)||(t==null?void 0:t.duration)||pA[o.type],style:{...t.style,...(c=t[o.type])==null?void 0:c.style,...o.style}}});return{...n,toasts:s}},gA=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||hA()}),ca=t=>(e,n)=>{let r=gA(e,t,n);return Wu(r.toasterId||fA(r.id))({type:2,toast:r}),r.id},Me=(t,e)=>ca("blank")(t,e);Me.error=ca("error");Me.success=ca("success");Me.loading=ca("loading");Me.custom=ca("custom");Me.dismiss=(t,e)=>{let n={type:3,toastId:t};e?Wu(e)(n):gw(n)};Me.dismissAll=t=>Me.dismiss(void 0,t);Me.remove=(t,e)=>{let n={type:4,toastId:t};e?Wu(e)(n):gw(n)};Me.removeAll=t=>Me.remove(void 0,t);Me.promise=(t,e,n)=>{let r=Me.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?au(e.success,i):void 0;return s?Me.success(s,{id:r,...n,...n==null?void 0:n.success}):Me.dismiss(r),i}).catch(i=>{let s=e.error?au(e.error,i):void 0;s?Me.error(s,{id:r,...n,...n==null?void 0:n.error}):Me.dismiss(r)}),t};var yA=1e3,_A=(t,e="default")=>{let{toasts:n,pausedAt:r}=mA(t,e),i=O.useRef(new Map).current,s=O.useCallback((p,g=yA)=>{if(i.has(p))return;let w=setTimeout(()=>{i.delete(p),o({type:4,toastId:p})},g);i.set(p,w)},[]);O.useEffect(()=>{if(r)return;let p=Date.now(),g=n.map(w=>{if(w.duration===1/0)return;let x=(w.duration||0)+w.pauseDuration-(p-w.createdAt);if(x<0){w.visible&&Me.dismiss(w.id);return}return setTimeout(()=>Me.dismiss(w.id,e),x)});return()=>{g.forEach(w=>w&&clearTimeout(w))}},[n,r,e]);let o=O.useCallback(Wu(e),[e]),l=O.useCallback(()=>{o({type:5,time:Date.now()})},[o]),u=O.useCallback((p,g)=>{o({type:1,toast:{id:p,height:g}})},[o]),c=O.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),d=O.useCallback((p,g)=>{let{reverseOrder:w=!1,gutter:x=8,defaultPosition:P}=g||{},k=n.filter(E=>(E.position||P)===(p.position||P)&&E.height),I=k.findIndex(E=>E.id===p.id),_=k.filter((E,b)=>b<I&&E.visible).length;return k.filter(E=>E.visible).slice(...w?[_+1]:[0,_]).reduce((E,b)=>E+(b.height||0)+x,0)},[n]);return O.useEffect(()=>{n.forEach(p=>{if(p.dismissed)s(p.id,p.removeDelay);else{let g=i.get(p.id);g&&(clearTimeout(g),i.delete(p.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:u,startPause:l,endPause:c,calculateOffset:d}}},vA=Bn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,wA=Bn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,EA=Bn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,TA=Mr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${vA} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${wA} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${EA} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,IA=Bn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,SA=Mr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${IA} 1s linear infinite;
`,xA=Bn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,AA=Bn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,RA=Mr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${xA} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${AA} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,kA=Mr("div")`
  position: absolute;
`,CA=Mr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,PA=Bn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,NA=Mr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${PA} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,DA=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?O.createElement(NA,null,e):e:n==="blank"?null:O.createElement(CA,null,O.createElement(SA,{...r}),n!=="loading"&&O.createElement(kA,null,n==="error"?O.createElement(TA,{...r}):O.createElement(RA,{...r})))},bA=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,OA=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,LA="0%{opacity:0;} 100%{opacity:1;}",VA="0%{opacity:1;} 100%{opacity:0;}",MA=Mr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,jA=Mr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,UA=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=dw()?[LA,VA]:[bA(n),OA(n)];return{animation:e?`${Bn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Bn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},FA=O.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?UA(t.position||e||"top-center",t.visible):{opacity:0},s=O.createElement(DA,{toast:t}),o=O.createElement(jA,{...t.ariaProps},au(t.message,t));return O.createElement(MA,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):O.createElement(O.Fragment,null,s,o))});uA(O.createElement);var BA=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=O.useCallback(o=>{if(o){let l=()=>{let u=o.getBoundingClientRect().height;r(t,u)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return O.createElement("div",{ref:s,className:e,style:n},i)},zA=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:dw()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},$A=Hu`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,rl=16,HA=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:l})=>{let{toasts:u,handlers:c}=_A(n,s);return O.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:rl,left:rl,right:rl,bottom:rl,pointerEvents:"none",...o},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},u.map(d=>{let p=d.position||e,g=c.calculateOffset(d,{reverseOrder:t,gutter:r,defaultPosition:e}),w=zA(p,g);return O.createElement(BA,{id:d.id,key:d.id,onHeightUpdate:c.updateHeight,className:d.visible?$A:"",style:w},d.type==="custom"?au(d.message,d):i?i(d):O.createElement(FA,{toast:d,position:p}))}))},le=Me;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},WA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},_w={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,w=c&63;u||(w=64,o||(g=64)),r.push(n[d],n[p],n[g],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):WA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new qA;const g=s<<2|l>>4;if(r.push(g),c!==64){const w=l<<4&240|c>>2;if(r.push(w),p!==64){const x=c<<6&192|p;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const KA=function(t){const e=yw(t);return _w.encodeByteArray(e,!0)},lu=function(t){return KA(t).replace(/\./g,"")},vw=function(t){try{return _w.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=()=>GA().__FIREBASE_DEFAULTS__,XA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},YA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vw(t[1]);return e&&JSON.parse(e)},qu=()=>{try{return QA()||XA()||YA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ww=t=>{var e,n;return(n=(e=qu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ew=t=>{const e=ww(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Tw=()=>{var t;return(t=qu())===null||t===void 0?void 0:t.config},Iw=t=>{var e;return(e=qu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[lu(JSON.stringify(n)),lu(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ZA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function eR(){var t;const e=(t=qu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iR(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sR(){return!eR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function oR(){try{return typeof indexedDB=="object"}catch{return!1}}function aR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR="FirebaseError";class En extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=lR,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ha.prototype.create)}}class ha{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?uR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new En(i,l,r)}}function uR(t,e){return t.replace(cR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const cR=/\{\$([^}]+)}/g;function hR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function uu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(wy(s)&&wy(o)){if(!uu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function wy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ao(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function lo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function dR(t,e){const n=new fR(t,e);return n.subscribe.bind(n)}class fR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ah),i.error===void 0&&(i.error=ah),i.complete===void 0&&(i.complete=ah);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ah(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t){return t&&t._delegate?t._delegate:t}class kr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new JA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yR(e))try{this.getOrInitializeService({instanceIdentifier:Xr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Xr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xr){return this.instances.has(e)}getOptions(e=Xr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xr){return this.component?this.component.multipleInstances?e:Xr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gR(t){return t===Xr?void 0:t}function yR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const vR={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},wR=ne.INFO,ER={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},TR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ER[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qf{constructor(e){this.name=e,this._logLevel=wR,this._logHandler=TR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const IR=(t,e)=>e.some(n=>t instanceof n);let Ey,Ty;function SR(){return Ey||(Ey=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xR(){return Ty||(Ty=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xw=new WeakMap,_d=new WeakMap,Aw=new WeakMap,lh=new WeakMap,Kf=new WeakMap;function AR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ir(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xw.set(n,t)}).catch(()=>{}),Kf.set(e,t),e}function RR(t){if(_d.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_d.set(t,e)}let vd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _d.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Aw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kR(t){vd=t(vd)}function CR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(uh(this),e,...n);return Aw.set(r,e.sort?e.sort():[e]),Ir(r)}:xR().includes(t)?function(...e){return t.apply(uh(this),e),Ir(xw.get(this))}:function(...e){return Ir(t.apply(uh(this),e))}}function PR(t){return typeof t=="function"?CR(t):(t instanceof IDBTransaction&&RR(t),IR(t,SR())?new Proxy(t,vd):t)}function Ir(t){if(t instanceof IDBRequest)return AR(t);if(lh.has(t))return lh.get(t);const e=PR(t);return e!==t&&(lh.set(t,e),Kf.set(e,t)),e}const uh=t=>Kf.get(t);function NR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Ir(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ir(o.result),u.oldVersion,u.newVersion,Ir(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const DR=["get","getKey","getAll","getAllKeys","count"],bR=["put","add","delete","clear"],ch=new Map;function Iy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ch.get(e))return ch.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=bR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||DR.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return ch.set(e,s),s}kR(t=>({...t,get:(e,n,r)=>Iy(e,n)||t.get(e,n,r),has:(e,n)=>!!Iy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function LR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wd="@firebase/app",Sy="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new qf("@firebase/app"),VR="@firebase/app-compat",MR="@firebase/analytics-compat",jR="@firebase/analytics",UR="@firebase/app-check-compat",FR="@firebase/app-check",BR="@firebase/auth",zR="@firebase/auth-compat",$R="@firebase/database",HR="@firebase/data-connect",WR="@firebase/database-compat",qR="@firebase/functions",KR="@firebase/functions-compat",GR="@firebase/installations",QR="@firebase/installations-compat",XR="@firebase/messaging",YR="@firebase/messaging-compat",JR="@firebase/performance",ZR="@firebase/performance-compat",ek="@firebase/remote-config",tk="@firebase/remote-config-compat",nk="@firebase/storage",rk="@firebase/storage-compat",ik="@firebase/firestore",sk="@firebase/vertexai-preview",ok="@firebase/firestore-compat",ak="firebase",lk="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="[DEFAULT]",uk={[wd]:"fire-core",[VR]:"fire-core-compat",[jR]:"fire-analytics",[MR]:"fire-analytics-compat",[FR]:"fire-app-check",[UR]:"fire-app-check-compat",[BR]:"fire-auth",[zR]:"fire-auth-compat",[$R]:"fire-rtdb",[HR]:"fire-data-connect",[WR]:"fire-rtdb-compat",[qR]:"fire-fn",[KR]:"fire-fn-compat",[GR]:"fire-iid",[QR]:"fire-iid-compat",[XR]:"fire-fcm",[YR]:"fire-fcm-compat",[JR]:"fire-perf",[ZR]:"fire-perf-compat",[ek]:"fire-rc",[tk]:"fire-rc-compat",[nk]:"fire-gcs",[rk]:"fire-gcs-compat",[ik]:"fire-fst",[ok]:"fire-fst-compat",[sk]:"fire-vertex","fire-js":"fire-js",[ak]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=new Map,ck=new Map,Td=new Map;function xy(t,e){try{t.container.addComponent(e)}catch(n){zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function di(t){const e=t.name;if(Td.has(e))return zn.debug(`There were multiple attempts to register component ${e}.`),!1;Td.set(e,t);for(const n of cu.values())xy(n,t);for(const n of ck.values())xy(n,t);return!0}function Ku(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Yt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sr=new ha("app","Firebase",hk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=lk;function Rw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ed,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Sr.create("bad-app-name",{appName:String(i)});if(n||(n=Tw()),!n)throw Sr.create("no-options");const s=cu.get(i);if(s){if(uu(n,s.options)&&uu(r,s.config))return s;throw Sr.create("duplicate-app",{appName:i})}const o=new _R(i);for(const u of Td.values())o.addComponent(u);const l=new dk(n,r,o);return cu.set(i,l),l}function Gf(t=Ed){const e=cu.get(t);if(!e&&t===Ed&&Tw())return Rw();if(!e)throw Sr.create("no-app",{appName:t});return e}function mn(t,e,n){var r;let i=(r=uk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zn.warn(l.join(" "));return}di(new kr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk="firebase-heartbeat-database",pk=1,Qo="firebase-heartbeat-store";let hh=null;function kw(){return hh||(hh=NR(fk,pk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Sr.create("idb-open",{originalErrorMessage:t.message})})),hh}async function mk(t){try{const n=(await kw()).transaction(Qo),r=await n.objectStore(Qo).get(Cw(t));return await n.done,r}catch(e){if(e instanceof En)zn.warn(e.message);else{const n=Sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zn.warn(n.message)}}}async function Ay(t,e){try{const r=(await kw()).transaction(Qo,"readwrite");await r.objectStore(Qo).put(e,Cw(t)),await r.done}catch(n){if(n instanceof En)zn.warn(n.message);else{const r=Sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zn.warn(r.message)}}}function Cw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk=1024,yk=30*24*60*60*1e3;class _k{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ry();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=yk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){zn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ry(),{heartbeatsToSend:r,unsentEntries:i}=vk(this._heartbeatsCache.heartbeats),s=lu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return zn.warn(n),""}}}function Ry(){return new Date().toISOString().substring(0,10)}function vk(t,e=gk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ky(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ky(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oR()?aR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ay(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ay(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ky(t){return lu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(t){di(new kr("platform-logger",e=>new OR(e),"PRIVATE")),di(new kr("heartbeat",e=>new _k(e),"PRIVATE")),mn(wd,Sy,t),mn(wd,Sy,"esm2017"),mn("fire-js","")}Ek("");var Tk="firebase",Ik="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mn(Tk,Ik,"app");function Qf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Pw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sk=Pw,Nw=new ha("auth","Firebase",Pw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=new qf("@firebase/auth");function xk(t,...e){hu.logLevel<=ne.WARN&&hu.warn(`Auth (${Ei}): ${t}`,...e)}function Al(t,...e){hu.logLevel<=ne.ERROR&&hu.error(`Auth (${Ei}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,...e){throw Yf(t,...e)}function en(t,...e){return Yf(t,...e)}function Xf(t,e,n){const r=Object.assign(Object.assign({},Sk()),{[e]:n});return new ha("auth","Firebase",r).create(e,{appName:t.name})}function Ln(t){return Xf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ak(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&$t(t,"argument-error"),Xf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Nw.create(t,...e)}function G(t,e,...n){if(!t)throw Yf(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Al(e),new Error(e)}function $n(t,e){t||Nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Rk(){return Cy()==="http:"||Cy()==="https:"}function Cy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Rk()||nR()||"connection"in navigator)?navigator.onLine:!0}function Ck(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n){this.shortDelay=e,this.longDelay=n,$n(n>e,"Short delay should be less than long delay!"),this.isMobile=ZA()||rR()}get(){return kk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(t,e){$n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=new fa(3e4,6e4);function jr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Kn(t,e,n,r,i={}){return bw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=da(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return tR()||(c.referrerPolicy="no-referrer"),Dw.fetch()(Ow(t,t.config.apiHost,n,l),c)})}async function bw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Pk),e);try{const i=new bk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw il(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw il(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw il(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw il(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Xf(t,d,c);$t(t,d)}}catch(i){if(i instanceof En)throw i;$t(t,"network-request-failed",{message:String(i)})}}async function pa(t,e,n,r,i={}){const s=await Kn(t,e,n,r,i);return"mfaPendingCredential"in s&&$t(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ow(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Jf(t.config,i):`${t.config.apiScheme}://${i}`}function Dk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),Nk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function il(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=en(t,e,r);return i.customData._tokenResponse=n,i}function Py(t){return t!==void 0&&t.enterprise!==void 0}class Ok{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Dk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Lk(t,e){return Kn(t,"GET","/v2/recaptchaConfig",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vk(t,e){return Kn(t,"POST","/v1/accounts:delete",e)}async function Lw(t,e){return Kn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Mk(t,e=!1){const n=Se(t),r=await n.getIdToken(e),i=Zf(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Io(dh(i.auth_time)),issuedAtTime:Io(dh(i.iat)),expirationTime:Io(dh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function dh(t){return Number(t)*1e3}function Zf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Al("JWT malformed, contained fewer than 3 sections"),null;try{const i=vw(n);return i?JSON.parse(i):(Al("Failed to decode base64 JWT payload"),null)}catch(i){return Al("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ny(t){const e=Zf(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof En&&jk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function jk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Io(this.lastLoginAt),this.creationTime=Io(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function du(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ds(t,Lw(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Vw(s.providerUserInfo):[],l=Bk(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Sd(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function Fk(t){const e=Se(t);await du(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Bk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Vw(t){return t.map(e=>{var{providerId:n}=e,r=Qf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zk(t,e){const n=await bw(t,{},async()=>{const r=da({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ow(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Dw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $k(t,e){return Kn(t,"POST","/v2/accounts:revokeToken",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ny(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=Ny(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await zk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ts;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ts,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Dn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Qf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Uk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Sd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ds(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Mk(this,e)}reload(){return Fk(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await du(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yt(this.auth.app))return Promise.reject(Ln(this.auth));const e=await this.getIdToken();return await ds(this,Vk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,k=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:E,emailVerified:b,isAnonymous:M,providerData:U,stsTokenManager:S}=n;G(E&&S,e,"internal-error");const y=ts.fromJSON(this.name,S);G(typeof E=="string",e,"internal-error"),Jn(p,e.name),Jn(g,e.name),G(typeof b=="boolean",e,"internal-error"),G(typeof M=="boolean",e,"internal-error"),Jn(w,e.name),Jn(x,e.name),Jn(P,e.name),Jn(k,e.name),Jn(I,e.name),Jn(_,e.name);const T=new Dn({uid:E,auth:e,email:g,emailVerified:b,displayName:p,isAnonymous:M,photoURL:x,phoneNumber:w,tenantId:P,stsTokenManager:y,createdAt:I,lastLoginAt:_});return U&&Array.isArray(U)&&(T.providerData=U.map(A=>Object.assign({},A))),k&&(T._redirectEventId=k),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new ts;i.updateFromServerResponse(n);const s=new Dn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await du(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Vw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ts;l.updateFromIdToken(r);const u=new Dn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Sd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=new Map;function bn(t){$n(t instanceof Function,"Expected a class definition");let e=Dy.get(t);return e?($n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Dy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Mw.type="NONE";const by=Mw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(t,e,n){return`firebase:${t}:${e}:${n}`}class ns{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Rl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Rl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ns(bn(by),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||bn(by);const o=Rl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=Dn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ns(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ns(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($w(e))return"Blackberry";if(Hw(e))return"Webos";if(Uw(e))return"Safari";if((e.includes("chrome/")||Fw(e))&&!e.includes("edge/"))return"Chrome";if(zw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jw(t=lt()){return/firefox\//i.test(t)}function Uw(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fw(t=lt()){return/crios\//i.test(t)}function Bw(t=lt()){return/iemobile/i.test(t)}function zw(t=lt()){return/android/i.test(t)}function $w(t=lt()){return/blackberry/i.test(t)}function Hw(t=lt()){return/webos/i.test(t)}function ep(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Hk(t=lt()){var e;return ep(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Wk(){return iR()&&document.documentMode===10}function Ww(t=lt()){return ep(t)||zw(t)||Hw(t)||$w(t)||/windows phone/i.test(t)||Bw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(t,e=[]){let n;switch(t){case"Browser":n=Oy(lt());break;case"Worker":n=`${Oy(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ei}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kk(t,e={}){return Kn(t,"GET","/v2/passwordPolicy",jr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk=6;class Qk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Gk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ly(this),this.idTokenSubscription=new Ly(this),this.beforeStateQueue=new qk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ns.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Lw(this,{idToken:e}),r=await Dn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Yt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await du(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ck()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Yt(this.app))return Promise.reject(Ln(this));const n=e?Se(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Yt(this.app)?Promise.reject(Ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Yt(this.app)?Promise.reject(Ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Kk(this),n=new Qk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ha("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await $k(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await ns.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&xk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ur(t){return Se(t)}class Ly{constructor(e){this.auth=e,this.observer=null,this.addObserver=dR(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Yk(t){Gu=t}function Kw(t){return Gu.loadJS(t)}function Jk(){return Gu.recaptchaEnterpriseScript}function Zk(){return Gu.gapiScript}function eC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const tC="recaptcha-enterprise",nC="NO_RECAPTCHA";class rC{constructor(e){this.type=tC,this.auth=Ur(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Lk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Ok(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Py(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(nC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Py(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Jk();u.length!==0&&(u+=l),Kw(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Vy(t,e,n,r=!1){const i=new rC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function xd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Vy(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Vy(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(t,e){const n=Ku(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(uu(s,e??{}))return i;$t(i,"already-initialized")}return n.initialize({options:e})}function sC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function oC(t,e,n){const r=Ur(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Gw(e),{host:o,port:l}=aC(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||lC()}function Gw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aC(t){const e=Gw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:My(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:My(o)}}}function My(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}async function uC(t,e){return Kn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cC(t,e){return pa(t,"POST","/v1/accounts:signInWithPassword",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hC(t,e){return pa(t,"POST","/v1/accounts:signInWithEmailLink",jr(t,e))}async function dC(t,e){return pa(t,"POST","/v1/accounts:signInWithEmailLink",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo extends tp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Xo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Xo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xd(e,n,"signInWithPassword",cC);case"emailLink":return hC(e,{email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xd(e,r,"signUpPassword",uC);case"emailLink":return dC(e,{idToken:n,email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rs(t,e){return pa(t,"POST","/v1/accounts:signInWithIdp",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC="http://localhost";class fi extends tp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Qf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new fi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return rs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,rs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,rs(e,n)}buildRequest(){const e={requestUri:fC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=da(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mC(t){const e=ao(lo(t)).link,n=e?ao(lo(e)).deep_link_id:null,r=ao(lo(t)).deep_link_id;return(r?ao(lo(r)).link:null)||r||n||e||t}class np{constructor(e){var n,r,i,s,o,l;const u=ao(lo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=pC((i=u.mode)!==null&&i!==void 0?i:null);G(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=mC(e);try{return new np(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.providerId=Rs.PROVIDER_ID}static credential(e,n){return Xo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=np.parseLink(n);return G(r,"argument-error"),Xo._fromEmailAndCode(e,r.code,r.tenantId)}}Rs.PROVIDER_ID="password";Rs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma extends rp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends ma{constructor(){super("facebook.com")}static credential(e){return fi._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends ma{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fi._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.GOOGLE_SIGN_IN_METHOD="google.com";kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends ma{constructor(){super("github.com")}static credential(e){return fi._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends ma{constructor(){super("twitter.com")}static credential(e,n){return fi._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gC(t,e){return pa(t,"POST","/v1/accounts:signUp",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Dn._fromIdTokenResponse(e,r,i),o=jy(r);return new pi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=jy(r);return new pi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function jy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu extends En{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new fu(e,n,r,i)}}function Qw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fu._fromErrorAndOperation(t,s,e,r):s})}async function yC(t,e,n=!1){const r=await ds(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _C(t,e,n=!1){const{auth:r}=t;if(Yt(r.app))return Promise.reject(Ln(r));const i="reauthenticate";try{const s=await ds(t,Qw(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Zf(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),pi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$t(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xw(t,e,n=!1){if(Yt(t.app))return Promise.reject(Ln(t));const r="signIn",i=await Qw(t,r,e),s=await pi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function vC(t,e){return Xw(Ur(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yw(t){const e=Ur(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function wC(t,e,n){if(Yt(t.app))return Promise.reject(Ln(t));const r=Ur(t),o=await xd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Yw(t),u}),l=await pi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function EC(t,e,n){return Yt(t.app)?Promise.reject(Ln(t)):vC(Se(t),Rs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Yw(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TC(t,e){return Kn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jw(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Se(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ds(r,TC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function IC(t,e,n,r){return Se(t).onIdTokenChanged(e,n,r)}function SC(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}function xC(t,e,n,r){return Se(t).onAuthStateChanged(e,n,r)}function AC(t){return Se(t).signOut()}const pu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pu,"1"),this.storage.removeItem(pu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC=1e3,kC=10;class eE extends Zw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ww(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Wk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,kC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},RC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}eE.type="LOCAL";const CC=eE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE extends Zw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tE.type="SESSION";const nE=tE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Qu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await PC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=ip("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(){return window}function DC(t){gn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(){return typeof gn().WorkerGlobalScope<"u"&&typeof gn().importScripts=="function"}async function bC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function LC(){return rE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="firebaseLocalStorageDb",VC=1,mu="firebaseLocalStorage",sE="fbase_key";class ga{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xu(t,e){return t.transaction([mu],e?"readwrite":"readonly").objectStore(mu)}function MC(){const t=indexedDB.deleteDatabase(iE);return new ga(t).toPromise()}function Ad(){const t=indexedDB.open(iE,VC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(mu,{keyPath:sE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(mu)?e(r):(r.close(),await MC(),e(await Ad()))})})}async function Uy(t,e,n){const r=Xu(t,!0).put({[sE]:e,value:n});return new ga(r).toPromise()}async function jC(t,e){const n=Xu(t,!1).get(e),r=await new ga(n).toPromise();return r===void 0?null:r.value}function Fy(t,e){const n=Xu(t,!0).delete(e);return new ga(n).toPromise()}const UC=800,FC=3;class oE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ad(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>FC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qu._getInstance(LC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bC(),!this.activeServiceWorker)return;this.sender=new NC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ad();return await Uy(e,pu,"1"),await Fy(e,pu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Uy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>jC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Xu(i,!1).getAll();return new ga(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oE.type="LOCAL";const BC=oE;new fa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(t,e){return e?bn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp extends tp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return rs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return rs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zC(t){return Xw(t.auth,new sp(t),t.bypassAuthState)}function $C(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),_C(n,new sp(t),t.bypassAuthState)}async function HC(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),yC(n,new sp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zC;case"linkViaPopup":case"linkViaRedirect":return HC;case"reauthViaPopup":case"reauthViaRedirect":return $C;default:$t(this.auth,"internal-error")}}resolve(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=new fa(2e3,1e4);async function qC(t,e,n){if(Yt(t.app))return Promise.reject(en(t,"operation-not-supported-in-this-environment"));const r=Ur(t);Ak(t,e,rp);const i=aE(r,n);return new ei(r,"signInViaPopup",e,i).executeNotNull()}class ei extends lE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ei.currentPopupAction&&ei.currentPopupAction.cancel(),ei.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){$n(this.filter.length===1,"Popup operations only handle one event");const e=ip();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ei.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,WC.get())};e()}}ei.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC="pendingRedirect",kl=new Map;class GC extends lE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=kl.get(this.auth._key());if(!e){try{const r=await QC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}kl.set(this.auth._key(),e)}return this.bypassAuthState||kl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QC(t,e){const n=JC(e),r=YC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function XC(t,e){kl.set(t._key(),e)}function YC(t){return bn(t._redirectPersistence)}function JC(t){return Rl(KC,t.config.apiKey,t.name)}async function ZC(t,e,n=!1){if(Yt(t.app))return Promise.reject(Ln(t));const r=Ur(t),i=aE(r,e),o=await new GC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP=10*60*1e3;class tP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!uE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(en(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eP&&this.cachedEventUids.clear(),this.cachedEventUids.has(By(e))}saveEventToCache(e){this.cachedEventUids.add(By(e)),this.lastProcessedEventTime=Date.now()}}function By(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rP(t,e={}){return Kn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sP=/^https?/;async function oP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rP(t);for(const n of e)try{if(aP(n))return}catch{}$t(t,"unauthorized-domain")}function aP(t){const e=Id(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sP.test(n))return!1;if(iP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP=new fa(3e4,6e4);function zy(){const t=gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uP(t){return new Promise((e,n)=>{var r,i,s;function o(){zy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zy(),n(en(t,"network-request-failed"))},timeout:lP.get()})}if(!((i=(r=gn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=gn().gapi)===null||s===void 0)&&s.load)o();else{const l=eC("iframefcb");return gn()[l]=()=>{gapi.load?o():n(en(t,"network-request-failed"))},Kw(`${Zk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Cl=null,e})}let Cl=null;function cP(t){return Cl=Cl||uP(t),Cl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP=new fa(5e3,15e3),dP="__/auth/iframe",fP="emulator/auth/iframe",pP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gP(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jf(e,fP):`https://${t.config.authDomain}/${dP}`,r={apiKey:e.apiKey,appName:t.name,v:Ei},i=mP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${da(r).slice(1)}`}async function yP(t){const e=await cP(t),n=gn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:gP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),l=gn().setTimeout(()=>{s(o)},hP.get());function u(){gn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vP=500,wP=600,EP="_blank",TP="http://localhost";class $y{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function IP(t,e,n,r=vP,i=wP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},_P),{width:r.toString(),height:i.toString(),top:s,left:o}),c=lt().toLowerCase();n&&(l=Fw(c)?EP:n),jw(c)&&(e=e||TP,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[w,x])=>`${g}${w}=${x},`,"");if(Hk(c)&&l!=="_self")return SP(e||"",l),new $y(null);const p=window.open(e||"",l,d);G(p,t,"popup-blocked");try{p.focus()}catch{}return new $y(p)}function SP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP="__/auth/handler",AP="emulator/auth/handler",RP=encodeURIComponent("fac");async function Hy(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ei,eventId:i};if(e instanceof rp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries(s||{}))o[d]=p}if(e instanceof ma){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${RP}=${encodeURIComponent(u)}`:"";return`${kP(t)}?${da(l).slice(1)}${c}`}function kP({config:t}){return t.emulator?Jf(t,AP):`https://${t.authDomain}/${xP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="webStorageSupport";class CP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nE,this._completeRedirectFn=ZC,this._overrideRedirectResult=XC}async _openPopup(e,n,r,i){var s;$n((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Hy(e,n,r,Id(),i);return IP(e,o,ip())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Hy(e,n,r,Id(),i);return DC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):($n(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yP(e),r=new tP(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fh,{type:fh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[fh];o!==void 0&&n(!!o),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ww()||Uw()||ep()}}const PP=CP;var Wy="@firebase/auth",qy="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bP(t){di(new kr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qw(t)},c=new Xk(r,i,s,u);return sC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),di(new kr("auth-internal",e=>{const n=Ur(e.getProvider("auth").getImmediate());return(r=>new NP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mn(Wy,qy,DP(t)),mn(Wy,qy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=5*60,LP=Iw("authIdTokenMaxAge")||OP;let Ky=null;const VP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>LP)return;const i=n==null?void 0:n.token;Ky!==i&&(Ky=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function MP(t=Gf()){const e=Ku(t,"auth");if(e.isInitialized())return e.getImmediate();const n=iC(t,{popupRedirectResolver:PP,persistence:[BC,CC,nE]}),r=Iw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=VP(s.toString());SC(n,o,()=>o(n.currentUser)),IC(n,l=>o(l))}}const i=ww("auth");return i&&oC(n,`http://${i}`),n}function jP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Yk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=en("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",jP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bP("Browser");var Gy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ii,cE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,y){function T(){}T.prototype=y.prototype,S.D=y.prototype,S.prototype=new T,S.prototype.constructor=S,S.C=function(A,C,N){for(var R=Array(arguments.length-2),ut=2;ut<arguments.length;ut++)R[ut-2]=arguments[ut];return y.prototype[C].apply(A,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,y,T){T||(T=0);var A=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)A[C]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(C=0;16>C;++C)A[C]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=S.g[0],T=S.g[1],C=S.g[2];var N=S.g[3],R=y+(N^T&(C^N))+A[0]+3614090360&4294967295;y=T+(R<<7&4294967295|R>>>25),R=N+(C^y&(T^C))+A[1]+3905402710&4294967295,N=y+(R<<12&4294967295|R>>>20),R=C+(T^N&(y^T))+A[2]+606105819&4294967295,C=N+(R<<17&4294967295|R>>>15),R=T+(y^C&(N^y))+A[3]+3250441966&4294967295,T=C+(R<<22&4294967295|R>>>10),R=y+(N^T&(C^N))+A[4]+4118548399&4294967295,y=T+(R<<7&4294967295|R>>>25),R=N+(C^y&(T^C))+A[5]+1200080426&4294967295,N=y+(R<<12&4294967295|R>>>20),R=C+(T^N&(y^T))+A[6]+2821735955&4294967295,C=N+(R<<17&4294967295|R>>>15),R=T+(y^C&(N^y))+A[7]+4249261313&4294967295,T=C+(R<<22&4294967295|R>>>10),R=y+(N^T&(C^N))+A[8]+1770035416&4294967295,y=T+(R<<7&4294967295|R>>>25),R=N+(C^y&(T^C))+A[9]+2336552879&4294967295,N=y+(R<<12&4294967295|R>>>20),R=C+(T^N&(y^T))+A[10]+4294925233&4294967295,C=N+(R<<17&4294967295|R>>>15),R=T+(y^C&(N^y))+A[11]+2304563134&4294967295,T=C+(R<<22&4294967295|R>>>10),R=y+(N^T&(C^N))+A[12]+1804603682&4294967295,y=T+(R<<7&4294967295|R>>>25),R=N+(C^y&(T^C))+A[13]+4254626195&4294967295,N=y+(R<<12&4294967295|R>>>20),R=C+(T^N&(y^T))+A[14]+2792965006&4294967295,C=N+(R<<17&4294967295|R>>>15),R=T+(y^C&(N^y))+A[15]+1236535329&4294967295,T=C+(R<<22&4294967295|R>>>10),R=y+(C^N&(T^C))+A[1]+4129170786&4294967295,y=T+(R<<5&4294967295|R>>>27),R=N+(T^C&(y^T))+A[6]+3225465664&4294967295,N=y+(R<<9&4294967295|R>>>23),R=C+(y^T&(N^y))+A[11]+643717713&4294967295,C=N+(R<<14&4294967295|R>>>18),R=T+(N^y&(C^N))+A[0]+3921069994&4294967295,T=C+(R<<20&4294967295|R>>>12),R=y+(C^N&(T^C))+A[5]+3593408605&4294967295,y=T+(R<<5&4294967295|R>>>27),R=N+(T^C&(y^T))+A[10]+38016083&4294967295,N=y+(R<<9&4294967295|R>>>23),R=C+(y^T&(N^y))+A[15]+3634488961&4294967295,C=N+(R<<14&4294967295|R>>>18),R=T+(N^y&(C^N))+A[4]+3889429448&4294967295,T=C+(R<<20&4294967295|R>>>12),R=y+(C^N&(T^C))+A[9]+568446438&4294967295,y=T+(R<<5&4294967295|R>>>27),R=N+(T^C&(y^T))+A[14]+3275163606&4294967295,N=y+(R<<9&4294967295|R>>>23),R=C+(y^T&(N^y))+A[3]+4107603335&4294967295,C=N+(R<<14&4294967295|R>>>18),R=T+(N^y&(C^N))+A[8]+1163531501&4294967295,T=C+(R<<20&4294967295|R>>>12),R=y+(C^N&(T^C))+A[13]+2850285829&4294967295,y=T+(R<<5&4294967295|R>>>27),R=N+(T^C&(y^T))+A[2]+4243563512&4294967295,N=y+(R<<9&4294967295|R>>>23),R=C+(y^T&(N^y))+A[7]+1735328473&4294967295,C=N+(R<<14&4294967295|R>>>18),R=T+(N^y&(C^N))+A[12]+2368359562&4294967295,T=C+(R<<20&4294967295|R>>>12),R=y+(T^C^N)+A[5]+4294588738&4294967295,y=T+(R<<4&4294967295|R>>>28),R=N+(y^T^C)+A[8]+2272392833&4294967295,N=y+(R<<11&4294967295|R>>>21),R=C+(N^y^T)+A[11]+1839030562&4294967295,C=N+(R<<16&4294967295|R>>>16),R=T+(C^N^y)+A[14]+4259657740&4294967295,T=C+(R<<23&4294967295|R>>>9),R=y+(T^C^N)+A[1]+2763975236&4294967295,y=T+(R<<4&4294967295|R>>>28),R=N+(y^T^C)+A[4]+1272893353&4294967295,N=y+(R<<11&4294967295|R>>>21),R=C+(N^y^T)+A[7]+4139469664&4294967295,C=N+(R<<16&4294967295|R>>>16),R=T+(C^N^y)+A[10]+3200236656&4294967295,T=C+(R<<23&4294967295|R>>>9),R=y+(T^C^N)+A[13]+681279174&4294967295,y=T+(R<<4&4294967295|R>>>28),R=N+(y^T^C)+A[0]+3936430074&4294967295,N=y+(R<<11&4294967295|R>>>21),R=C+(N^y^T)+A[3]+3572445317&4294967295,C=N+(R<<16&4294967295|R>>>16),R=T+(C^N^y)+A[6]+76029189&4294967295,T=C+(R<<23&4294967295|R>>>9),R=y+(T^C^N)+A[9]+3654602809&4294967295,y=T+(R<<4&4294967295|R>>>28),R=N+(y^T^C)+A[12]+3873151461&4294967295,N=y+(R<<11&4294967295|R>>>21),R=C+(N^y^T)+A[15]+530742520&4294967295,C=N+(R<<16&4294967295|R>>>16),R=T+(C^N^y)+A[2]+3299628645&4294967295,T=C+(R<<23&4294967295|R>>>9),R=y+(C^(T|~N))+A[0]+4096336452&4294967295,y=T+(R<<6&4294967295|R>>>26),R=N+(T^(y|~C))+A[7]+1126891415&4294967295,N=y+(R<<10&4294967295|R>>>22),R=C+(y^(N|~T))+A[14]+2878612391&4294967295,C=N+(R<<15&4294967295|R>>>17),R=T+(N^(C|~y))+A[5]+4237533241&4294967295,T=C+(R<<21&4294967295|R>>>11),R=y+(C^(T|~N))+A[12]+1700485571&4294967295,y=T+(R<<6&4294967295|R>>>26),R=N+(T^(y|~C))+A[3]+2399980690&4294967295,N=y+(R<<10&4294967295|R>>>22),R=C+(y^(N|~T))+A[10]+4293915773&4294967295,C=N+(R<<15&4294967295|R>>>17),R=T+(N^(C|~y))+A[1]+2240044497&4294967295,T=C+(R<<21&4294967295|R>>>11),R=y+(C^(T|~N))+A[8]+1873313359&4294967295,y=T+(R<<6&4294967295|R>>>26),R=N+(T^(y|~C))+A[15]+4264355552&4294967295,N=y+(R<<10&4294967295|R>>>22),R=C+(y^(N|~T))+A[6]+2734768916&4294967295,C=N+(R<<15&4294967295|R>>>17),R=T+(N^(C|~y))+A[13]+1309151649&4294967295,T=C+(R<<21&4294967295|R>>>11),R=y+(C^(T|~N))+A[4]+4149444226&4294967295,y=T+(R<<6&4294967295|R>>>26),R=N+(T^(y|~C))+A[11]+3174756917&4294967295,N=y+(R<<10&4294967295|R>>>22),R=C+(y^(N|~T))+A[2]+718787259&4294967295,C=N+(R<<15&4294967295|R>>>17),R=T+(N^(C|~y))+A[9]+3951481745&4294967295,S.g[0]=S.g[0]+y&4294967295,S.g[1]=S.g[1]+(C+(R<<21&4294967295|R>>>11))&4294967295,S.g[2]=S.g[2]+C&4294967295,S.g[3]=S.g[3]+N&4294967295}r.prototype.u=function(S,y){y===void 0&&(y=S.length);for(var T=y-this.blockSize,A=this.B,C=this.h,N=0;N<y;){if(C==0)for(;N<=T;)i(this,S,N),N+=this.blockSize;if(typeof S=="string"){for(;N<y;)if(A[C++]=S.charCodeAt(N++),C==this.blockSize){i(this,A),C=0;break}}else for(;N<y;)if(A[C++]=S[N++],C==this.blockSize){i(this,A),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var y=1;y<S.length-8;++y)S[y]=0;var T=8*this.o;for(y=S.length-8;y<S.length;++y)S[y]=T&255,T/=256;for(this.u(S),S=Array(16),y=T=0;4>y;++y)for(var A=0;32>A;A+=8)S[T++]=this.g[y]>>>A&255;return S};function s(S,y){var T=l;return Object.prototype.hasOwnProperty.call(T,S)?T[S]:T[S]=y(S)}function o(S,y){this.h=y;for(var T=[],A=!0,C=S.length-1;0<=C;C--){var N=S[C]|0;A&&N==y||(T[C]=N,A=!1)}this.g=T}var l={};function u(S){return-128<=S&&128>S?s(S,function(y){return new o([y|0],0>y?-1:0)}):new o([S|0],0>S?-1:0)}function c(S){if(isNaN(S)||!isFinite(S))return p;if(0>S)return k(c(-S));for(var y=[],T=1,A=0;S>=T;A++)y[A]=S/T|0,T*=4294967296;return new o(y,0)}function d(S,y){if(S.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(S.charAt(0)=="-")return k(d(S.substring(1),y));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(y,8)),A=p,C=0;C<S.length;C+=8){var N=Math.min(8,S.length-C),R=parseInt(S.substring(C,C+N),y);8>N?(N=c(Math.pow(y,N)),A=A.j(N).add(c(R))):(A=A.j(T),A=A.add(c(R)))}return A}var p=u(0),g=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-k(this).m();for(var S=0,y=1,T=0;T<this.g.length;T++){var A=this.i(T);S+=(0<=A?A:4294967296+A)*y,y*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x(this))return"0";if(P(this))return"-"+k(this).toString(S);for(var y=c(Math.pow(S,6)),T=this,A="";;){var C=b(T,y).g;T=I(T,C.j(y));var N=((0<T.g.length?T.g[0]:T.h)>>>0).toString(S);if(T=C,x(T))return N+A;for(;6>N.length;)N="0"+N;A=N+A}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function x(S){if(S.h!=0)return!1;for(var y=0;y<S.g.length;y++)if(S.g[y]!=0)return!1;return!0}function P(S){return S.h==-1}t.l=function(S){return S=I(this,S),P(S)?-1:x(S)?0:1};function k(S){for(var y=S.g.length,T=[],A=0;A<y;A++)T[A]=~S.g[A];return new o(T,~S.h).add(g)}t.abs=function(){return P(this)?k(this):this},t.add=function(S){for(var y=Math.max(this.g.length,S.g.length),T=[],A=0,C=0;C<=y;C++){var N=A+(this.i(C)&65535)+(S.i(C)&65535),R=(N>>>16)+(this.i(C)>>>16)+(S.i(C)>>>16);A=R>>>16,N&=65535,R&=65535,T[C]=R<<16|N}return new o(T,T[T.length-1]&-2147483648?-1:0)};function I(S,y){return S.add(k(y))}t.j=function(S){if(x(this)||x(S))return p;if(P(this))return P(S)?k(this).j(k(S)):k(k(this).j(S));if(P(S))return k(this.j(k(S)));if(0>this.l(w)&&0>S.l(w))return c(this.m()*S.m());for(var y=this.g.length+S.g.length,T=[],A=0;A<2*y;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var C=0;C<S.g.length;C++){var N=this.i(A)>>>16,R=this.i(A)&65535,ut=S.i(C)>>>16,sn=S.i(C)&65535;T[2*A+2*C]+=R*sn,_(T,2*A+2*C),T[2*A+2*C+1]+=N*sn,_(T,2*A+2*C+1),T[2*A+2*C+1]+=R*ut,_(T,2*A+2*C+1),T[2*A+2*C+2]+=N*ut,_(T,2*A+2*C+2)}for(A=0;A<y;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=y;A<2*y;A++)T[A]=0;return new o(T,0)};function _(S,y){for(;(S[y]&65535)!=S[y];)S[y+1]+=S[y]>>>16,S[y]&=65535,y++}function E(S,y){this.g=S,this.h=y}function b(S,y){if(x(y))throw Error("division by zero");if(x(S))return new E(p,p);if(P(S))return y=b(k(S),y),new E(k(y.g),k(y.h));if(P(y))return y=b(S,k(y)),new E(k(y.g),y.h);if(30<S.g.length){if(P(S)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var T=g,A=y;0>=A.l(S);)T=M(T),A=M(A);var C=U(T,1),N=U(A,1);for(A=U(A,2),T=U(T,2);!x(A);){var R=N.add(A);0>=R.l(S)&&(C=C.add(T),N=R),A=U(A,1),T=U(T,1)}return y=I(S,C.j(y)),new E(C,y)}for(C=p;0<=S.l(y);){for(T=Math.max(1,Math.floor(S.m()/y.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),N=c(T),R=N.j(y);P(R)||0<R.l(S);)T-=A,N=c(T),R=N.j(y);x(N)&&(N=g),C=C.add(N),S=I(S,R)}return new E(C,S)}t.A=function(S){return b(this,S).h},t.and=function(S){for(var y=Math.max(this.g.length,S.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)&S.i(A);return new o(T,this.h&S.h)},t.or=function(S){for(var y=Math.max(this.g.length,S.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)|S.i(A);return new o(T,this.h|S.h)},t.xor=function(S){for(var y=Math.max(this.g.length,S.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)^S.i(A);return new o(T,this.h^S.h)};function M(S){for(var y=S.g.length+1,T=[],A=0;A<y;A++)T[A]=S.i(A)<<1|S.i(A-1)>>>31;return new o(T,S.h)}function U(S,y){var T=y>>5;y%=32;for(var A=S.g.length-T,C=[],N=0;N<A;N++)C[N]=0<y?S.i(N+T)>>>y|S.i(N+T+1)<<32-y:S.i(N+T);return new o(C,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,cE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,ii=o}).apply(typeof Gy<"u"?Gy:typeof self<"u"?self:typeof window<"u"?window:{});var sl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hE,uo,dE,Pl,Rd,fE,pE,mE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof sl=="object"&&sl];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var D=a[v];if(!(D in f))break e;f=f[D]}a=a[a.length-1],v=f[a],h=h(v),h!=v&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,v=!1,D={next:function(){if(!v&&f<a.length){var L=f++;return{value:h(L,a[L]),done:!1}}return v=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,v),a.apply(h,D)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function w(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var v=f.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function x(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(v,D,L){for(var B=Array(arguments.length-2),he=2;he<arguments.length;he++)B[he-2]=arguments[he];return h.prototype[D].apply(v,B)}}function P(a){const h=a.length;if(0<h){const f=Array(h);for(let v=0;v<h;v++)f[v]=a[v];return f}return[]}function k(a,h){for(let f=1;f<arguments.length;f++){const v=arguments[f];if(u(v)){const D=a.length||0,L=v.length||0;a.length=D+L;for(let B=0;B<L;B++)a[D+B]=v[B]}else a.push(v)}}class I{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(a){return/^[\s\xa0]*$/.test(a)}function E(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function b(a){return b[" "](a),a}b[" "]=function(){};var M=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function U(a,h,f){for(const v in a)h.call(f,a[v],v,a)}function S(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let f,v;for(let D=1;D<arguments.length;D++){v=arguments[D];for(f in v)a[f]=v[f];for(let L=0;L<T.length;L++)f=T[L],Object.prototype.hasOwnProperty.call(v,f)&&(a[f]=v[f])}}function C(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function N(a){l.setTimeout(()=>{throw a},0)}function R(){var a=K;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ut{constructor(){this.h=this.g=null}add(h,f){const v=sn.get();v.set(h,f),this.h?this.h.next=v:this.g=v,this.h=v}}var sn=new I(()=>new Tn,a=>a.reset());class Tn{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let on,z=!1,K=new ut,J=()=>{const a=l.Promise.resolve(void 0);on=()=>{a.then(Z)}};var Z=()=>{for(var a;a=R();){try{a.h.call(a.g)}catch(f){N(f)}var h=sn;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}z=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var an=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function Vt(a,h){if(pe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(M){e:{try{b(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ht[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Vt.aa.h.call(this)}}x(Vt,pe);var Ht={2:"touch",3:"pen",4:"mouse"};Vt.prototype.h=function(){Vt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var At="closure_listenable_"+(1e6*Math.random()|0),dc=0;function xi(a,h,f,v,D){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!v,this.ha=D,this.key=++dc,this.da=this.fa=!1}function zr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ct(a){this.src=a,this.g={},this.h=0}ct.prototype.add=function(a,h,f,v,D){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var B=Ai(a,h,v,D);return-1<B?(h=a[B],f||(h.fa=!1)):(h=new xi(h,this.src,L,!!v,D),h.fa=f,a.push(h)),h};function $r(a,h){var f=h.type;if(f in a.g){var v=a.g[f],D=Array.prototype.indexOf.call(v,h,void 0),L;(L=0<=D)&&Array.prototype.splice.call(v,D,1),L&&(zr(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Ai(a,h,f,v){for(var D=0;D<a.length;++D){var L=a[D];if(!L.da&&L.listener==h&&L.capture==!!f&&L.ha==v)return D}return-1}var Ri="closure_lm_"+(1e6*Math.random()|0),fc={};function em(a,h,f,v,D){if(v&&v.once)return nm(a,h,f,v,D);if(Array.isArray(h)){for(var L=0;L<h.length;L++)em(a,h[L],f,v,D);return null}return f=yc(f),a&&a[At]?a.K(h,f,c(v)?!!v.capture:!!v,D):tm(a,h,f,!1,v,D)}function tm(a,h,f,v,D,L){if(!h)throw Error("Invalid event type");var B=c(D)?!!D.capture:!!D,he=mc(a);if(he||(a[Ri]=he=new ct(a)),f=he.add(h,f,v,B,L),f.proxy)return f;if(v=Z1(),f.proxy=v,v.src=a,v.listener=f,a.addEventListener)an||(D=B),D===void 0&&(D=!1),a.addEventListener(h.toString(),v,D);else if(a.attachEvent)a.attachEvent(im(h.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Z1(){function a(f){return h.call(a.src,a.listener,f)}const h=eT;return a}function nm(a,h,f,v,D){if(Array.isArray(h)){for(var L=0;L<h.length;L++)nm(a,h[L],f,v,D);return null}return f=yc(f),a&&a[At]?a.L(h,f,c(v)?!!v.capture:!!v,D):tm(a,h,f,!0,v,D)}function rm(a,h,f,v,D){if(Array.isArray(h))for(var L=0;L<h.length;L++)rm(a,h[L],f,v,D);else v=c(v)?!!v.capture:!!v,f=yc(f),a&&a[At]?(a=a.i,h=String(h).toString(),h in a.g&&(L=a.g[h],f=Ai(L,f,v,D),-1<f&&(zr(L[f]),Array.prototype.splice.call(L,f,1),L.length==0&&(delete a.g[h],a.h--)))):a&&(a=mc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ai(h,f,v,D)),(f=-1<a?h[a]:null)&&pc(f))}function pc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[At])$r(h.i,a);else{var f=a.type,v=a.proxy;h.removeEventListener?h.removeEventListener(f,v,a.capture):h.detachEvent?h.detachEvent(im(f),v):h.addListener&&h.removeListener&&h.removeListener(v),(f=mc(h))?($r(f,a),f.h==0&&(f.src=null,h[Ri]=null)):zr(a)}}}function im(a){return a in fc?fc[a]:fc[a]="on"+a}function eT(a,h){if(a.da)a=!0;else{h=new Vt(h,this);var f=a.listener,v=a.ha||a.src;a.fa&&pc(a),a=f.call(v,h)}return a}function mc(a){return a=a[Ri],a instanceof ct?a:null}var gc="__closure_events_fn_"+(1e9*Math.random()>>>0);function yc(a){return typeof a=="function"?a:(a[gc]||(a[gc]=function(h){return a.handleEvent(h)}),a[gc])}function Ye(){ae.call(this),this.i=new ct(this),this.M=this,this.F=null}x(Ye,ae),Ye.prototype[At]=!0,Ye.prototype.removeEventListener=function(a,h,f,v){rm(this,a,h,f,v)};function ht(a,h){var f,v=a.F;if(v)for(f=[];v;v=v.F)f.push(v);if(a=a.M,v=h.type||h,typeof h=="string")h=new pe(h,a);else if(h instanceof pe)h.target=h.target||a;else{var D=h;h=new pe(v,a),A(h,D)}if(D=!0,f)for(var L=f.length-1;0<=L;L--){var B=h.g=f[L];D=Sa(B,v,!0,h)&&D}if(B=h.g=a,D=Sa(B,v,!0,h)&&D,D=Sa(B,v,!1,h)&&D,f)for(L=0;L<f.length;L++)B=h.g=f[L],D=Sa(B,v,!1,h)&&D}Ye.prototype.N=function(){if(Ye.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],v=0;v<f.length;v++)zr(f[v]);delete a.g[h],a.h--}}this.F=null},Ye.prototype.K=function(a,h,f,v){return this.i.add(String(a),h,!1,f,v)},Ye.prototype.L=function(a,h,f,v){return this.i.add(String(a),h,!0,f,v)};function Sa(a,h,f,v){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,L=0;L<h.length;++L){var B=h[L];if(B&&!B.da&&B.capture==f){var he=B.listener,$e=B.ha||B.src;B.fa&&$r(a.i,B),D=he.call($e,v)!==!1&&D}}return D&&!v.defaultPrevented}function sm(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function om(a){a.g=sm(()=>{a.g=null,a.i&&(a.i=!1,om(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class tT extends ae{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:om(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bs(a){ae.call(this),this.h=a,this.g={}}x(bs,ae);var am=[];function lm(a){U(a.g,function(h,f){this.g.hasOwnProperty(f)&&pc(h)},a),a.g={}}bs.prototype.N=function(){bs.aa.N.call(this),lm(this)},bs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _c=l.JSON.stringify,nT=l.JSON.parse,rT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function vc(){}vc.prototype.h=null;function um(a){return a.h||(a.h=a.i())}function cm(){}var Os={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wc(){pe.call(this,"d")}x(wc,pe);function Ec(){pe.call(this,"c")}x(Ec,pe);var Hr={},hm=null;function xa(){return hm=hm||new Ye}Hr.La="serverreachability";function dm(a){pe.call(this,Hr.La,a)}x(dm,pe);function Ls(a){const h=xa();ht(h,new dm(h))}Hr.STAT_EVENT="statevent";function fm(a,h){pe.call(this,Hr.STAT_EVENT,a),this.stat=h}x(fm,pe);function dt(a){const h=xa();ht(h,new fm(h,a))}Hr.Ma="timingevent";function pm(a,h){pe.call(this,Hr.Ma,a),this.size=h}x(pm,pe);function Vs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ms(){this.g=!0}Ms.prototype.xa=function(){this.g=!1};function iT(a,h,f,v,D,L){a.info(function(){if(a.g)if(L)for(var B="",he=L.split("&"),$e=0;$e<he.length;$e++){var se=he[$e].split("=");if(1<se.length){var Je=se[0];se=se[1];var Ze=Je.split("_");B=2<=Ze.length&&Ze[1]=="type"?B+(Je+"="+se+"&"):B+(Je+"=redacted&")}}else B=null;else B=L;return"XMLHTTP REQ ("+v+") [attempt "+D+"]: "+h+`
`+f+`
`+B})}function sT(a,h,f,v,D,L,B){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+D+"]: "+h+`
`+f+`
`+L+" "+B})}function ki(a,h,f,v){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+aT(a,f)+(v?" "+v:"")})}function oT(a,h){a.info(function(){return"TIMEOUT: "+h})}Ms.prototype.info=function(){};function aT(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var v=f[a];if(!(2>v.length)){var D=v[1];if(Array.isArray(D)&&!(1>D.length)){var L=D[0];if(L!="noop"&&L!="stop"&&L!="close")for(var B=1;B<D.length;B++)D[B]=""}}}}return _c(f)}catch{return h}}var Aa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},mm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Tc;function Ra(){}x(Ra,vc),Ra.prototype.g=function(){return new XMLHttpRequest},Ra.prototype.i=function(){return{}},Tc=new Ra;function Gn(a,h,f,v){this.j=a,this.i=h,this.l=f,this.R=v||1,this.U=new bs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gm}function gm(){this.i=null,this.g="",this.h=!1}var ym={},Ic={};function Sc(a,h,f){a.L=1,a.v=Na(In(h)),a.m=f,a.P=!0,_m(a,null)}function _m(a,h){a.F=Date.now(),ka(a),a.A=In(a.v);var f=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),Dm(f.i,"t",v),a.C=0,f=a.j.J,a.h=new gm,a.g=Xm(a.j,f?h:null,!a.m),0<a.O&&(a.M=new tT(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,v=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(am[0]=D.toString()),D=am);for(var L=0;L<D.length;L++){var B=em(f,D[L],v||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ls(),iT(a.i,a.u,a.A,a.l,a.R,a.m)}Gn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Sn(a)==3?h.j():this.Y(a)},Gn.prototype.Y=function(a){try{if(a==this.g)e:{const Ze=Sn(this.g);var h=this.g.Ba();const Ni=this.g.Z();if(!(3>Ze)&&(Ze!=3||this.g&&(this.h.h||this.g.oa()||Um(this.g)))){this.J||Ze!=4||h==7||(h==8||0>=Ni?Ls(3):Ls(2)),xc(this);var f=this.g.Z();this.X=f;t:if(vm(this)){var v=Um(this.g);a="";var D=v.length,L=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wr(this),js(this);var B="";break t}this.h.i=new l.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,a+=this.h.i.decode(v[h],{stream:!(L&&h==D-1)});v.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,sT(this.i,this.u,this.A,this.l,this.R,Ze,f),this.o){if(this.T&&!this.K){t:{if(this.g){var he,$e=this.g;if((he=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(he)){var se=he;break t}}se=null}if(f=se)ki(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ac(this,f);else{this.o=!1,this.s=3,dt(12),Wr(this),js(this);break e}}if(this.P){f=!0;let Wt;for(;!this.J&&this.C<B.length;)if(Wt=lT(this,B),Wt==Ic){Ze==4&&(this.s=4,dt(14),f=!1),ki(this.i,this.l,null,"[Incomplete Response]");break}else if(Wt==ym){this.s=4,dt(15),ki(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else ki(this.i,this.l,Wt,null),Ac(this,Wt);if(vm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ze!=4||B.length!=0||this.h.h||(this.s=1,dt(16),f=!1),this.o=this.o&&f,!f)ki(this.i,this.l,B,"[Invalid Chunked Response]"),Wr(this),js(this);else if(0<B.length&&!this.W){this.W=!0;var Je=this.j;Je.g==this&&Je.ba&&!Je.M&&(Je.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Dc(Je),Je.M=!0,dt(11))}}else ki(this.i,this.l,B,null),Ac(this,B);Ze==4&&Wr(this),this.o&&!this.J&&(Ze==4?qm(this.j,this):(this.o=!1,ka(this)))}else xT(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),Wr(this),js(this)}}}catch{}finally{}};function vm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function lT(a,h){var f=a.C,v=h.indexOf(`
`,f);return v==-1?Ic:(f=Number(h.substring(f,v)),isNaN(f)?ym:(v+=1,v+f>h.length?Ic:(h=h.slice(v,v+f),a.C=v+f,h)))}Gn.prototype.cancel=function(){this.J=!0,Wr(this)};function ka(a){a.S=Date.now()+a.I,wm(a,a.I)}function wm(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Vs(g(a.ba,a),h)}function xc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Gn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(oT(this.i,this.A),this.L!=2&&(Ls(),dt(17)),Wr(this),this.s=2,js(this)):wm(this,this.S-a)};function js(a){a.j.G==0||a.J||qm(a.j,a)}function Wr(a){xc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,lm(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Ac(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Rc(f.h,a))){if(!a.K&&Rc(f.h,a)&&f.G==3){try{var v=f.Da.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var D=v;if(D[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ma(f),La(f);else break e;Nc(f),dt(18)}}else f.za=D[1],0<f.za-f.T&&37500>D[2]&&f.F&&f.v==0&&!f.C&&(f.C=Vs(g(f.Za,f),6e3));if(1>=Im(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Kr(f,11)}else if((a.K||f.g==a)&&Ma(f),!_(h))for(D=f.Da.g.parse(h),h=0;h<D.length;h++){let se=D[h];if(f.T=se[0],se=se[1],f.G==2)if(se[0]=="c"){f.K=se[1],f.ia=se[2];const Je=se[3];Je!=null&&(f.la=Je,f.j.info("VER="+f.la));const Ze=se[4];Ze!=null&&(f.Aa=Ze,f.j.info("SVER="+f.Aa));const Ni=se[5];Ni!=null&&typeof Ni=="number"&&0<Ni&&(v=1.5*Ni,f.L=v,f.j.info("backChannelRequestTimeoutMs_="+v)),v=f;const Wt=a.g;if(Wt){const Ua=Wt.g?Wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ua){var L=v.h;L.g||Ua.indexOf("spdy")==-1&&Ua.indexOf("quic")==-1&&Ua.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(kc(L,L.h),L.h=null))}if(v.D){const bc=Wt.g?Wt.g.getResponseHeader("X-HTTP-Session-Id"):null;bc&&(v.ya=bc,me(v.I,v.D,bc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),v=f;var B=a;if(v.qa=Qm(v,v.J?v.ia:null,v.W),B.K){Sm(v.h,B);var he=B,$e=v.L;$e&&(he.I=$e),he.B&&(xc(he),ka(he)),v.g=B}else Hm(v);0<f.i.length&&Va(f)}else se[0]!="stop"&&se[0]!="close"||Kr(f,7);else f.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Kr(f,7):Pc(f):se[0]!="noop"&&f.l&&f.l.ta(se),f.v=0)}}Ls(4)}catch{}}var uT=class{constructor(a,h){this.g=a,this.map=h}};function Em(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Tm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Im(a){return a.h?1:a.g?a.g.size:0}function Rc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function kc(a,h){a.g?a.g.add(h):a.h=h}function Sm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Em.prototype.cancel=function(){if(this.i=xm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function xm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return P(a.i)}function cT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,v=0;v<f;v++)h.push(a[v]);return h}h=[],f=0;for(v in a)h[f++]=a[v];return h}function hT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const v in a)h[f++]=v;return h}}}function Am(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=hT(a),v=cT(a),D=v.length,L=0;L<D;L++)h.call(void 0,v[L],f&&f[L],a)}var Rm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dT(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var v=a[f].indexOf("="),D=null;if(0<=v){var L=a[f].substring(0,v);D=a[f].substring(v+1)}else L=a[f];h(L,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function qr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof qr){this.h=a.h,Ca(this,a.j),this.o=a.o,this.g=a.g,Pa(this,a.s),this.l=a.l;var h=a.i,f=new Bs;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),km(this,f),this.m=a.m}else a&&(h=String(a).match(Rm))?(this.h=!1,Ca(this,h[1]||"",!0),this.o=Us(h[2]||""),this.g=Us(h[3]||"",!0),Pa(this,h[4]),this.l=Us(h[5]||"",!0),km(this,h[6]||"",!0),this.m=Us(h[7]||"")):(this.h=!1,this.i=new Bs(null,this.h))}qr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Fs(h,Cm,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Fs(h,Cm,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Fs(f,f.charAt(0)=="/"?mT:pT,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Fs(f,yT)),a.join("")};function In(a){return new qr(a)}function Ca(a,h,f){a.j=f?Us(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Pa(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function km(a,h,f){h instanceof Bs?(a.i=h,_T(a.i,a.h)):(f||(h=Fs(h,gT)),a.i=new Bs(h,a.h))}function me(a,h,f){a.i.set(h,f)}function Na(a){return me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Us(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Fs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,fT),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function fT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Cm=/[#\/\?@]/g,pT=/[#\?:]/g,mT=/[#\?]/g,gT=/[#\?@]/g,yT=/#/g;function Bs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Qn(a){a.g||(a.g=new Map,a.h=0,a.i&&dT(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Bs.prototype,t.add=function(a,h){Qn(this),this.i=null,a=Ci(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Pm(a,h){Qn(a),h=Ci(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Nm(a,h){return Qn(a),h=Ci(a,h),a.g.has(h)}t.forEach=function(a,h){Qn(this),this.g.forEach(function(f,v){f.forEach(function(D){a.call(h,D,v,this)},this)},this)},t.na=function(){Qn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let v=0;v<h.length;v++){const D=a[v];for(let L=0;L<D.length;L++)f.push(h[v])}return f},t.V=function(a){Qn(this);let h=[];if(typeof a=="string")Nm(this,a)&&(h=h.concat(this.g.get(Ci(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Qn(this),this.i=null,a=Ci(this,a),Nm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Dm(a,h,f){Pm(a,h),0<f.length&&(a.i=null,a.g.set(Ci(a,h),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var v=h[f];const L=encodeURIComponent(String(v)),B=this.V(v);for(v=0;v<B.length;v++){var D=L;B[v]!==""&&(D+="="+encodeURIComponent(String(B[v]))),a.push(D)}}return this.i=a.join("&")};function Ci(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function _T(a,h){h&&!a.j&&(Qn(a),a.i=null,a.g.forEach(function(f,v){var D=v.toLowerCase();v!=D&&(Pm(this,v),Dm(this,D,f))},a)),a.j=h}function vT(a,h){const f=new Ms;if(l.Image){const v=new Image;v.onload=w(Xn,f,"TestLoadImage: loaded",!0,h,v),v.onerror=w(Xn,f,"TestLoadImage: error",!1,h,v),v.onabort=w(Xn,f,"TestLoadImage: abort",!1,h,v),v.ontimeout=w(Xn,f,"TestLoadImage: timeout",!1,h,v),l.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else h(!1)}function wT(a,h){const f=new Ms,v=new AbortController,D=setTimeout(()=>{v.abort(),Xn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:v.signal}).then(L=>{clearTimeout(D),L.ok?Xn(f,"TestPingServer: ok",!0,h):Xn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),Xn(f,"TestPingServer: error",!1,h)})}function Xn(a,h,f,v,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),v(f)}catch{}}function ET(){this.g=new rT}function TT(a,h,f){const v=f||"";try{Am(a,function(D,L){let B=D;c(D)&&(B=_c(D)),h.push(v+L+"="+encodeURIComponent(B))})}catch(D){throw h.push(v+"type="+encodeURIComponent("_badmap")),D}}function Da(a){this.l=a.Ub||null,this.j=a.eb||!1}x(Da,vc),Da.prototype.g=function(){return new ba(this.l,this.j)},Da.prototype.i=function(a){return function(){return a}}({});function ba(a,h){Ye.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(ba,Ye),t=ba.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,$s(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,$s(this)),this.g&&(this.readyState=3,$s(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function bm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?zs(this):$s(this),this.readyState==3&&bm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,zs(this))},t.Qa=function(a){this.g&&(this.response=a,zs(this))},t.ga=function(){this.g&&zs(this)};function zs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,$s(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function $s(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ba.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Om(a){let h="";return U(a,function(f,v){h+=v,h+=":",h+=f,h+=`\r
`}),h}function Cc(a,h,f){e:{for(v in f){var v=!1;break e}v=!0}v||(f=Om(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):me(a,h,f))}function Ae(a){Ye.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Ae,Ye);var IT=/^https?$/i,ST=["POST","PUT"];t=Ae.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Tc.g(),this.v=this.o?um(this.o):um(Tc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(L){Lm(this,L);return}if(a=f||"",f=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var D in v)f.set(D,v[D]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const L of v.keys())f.set(L,v.get(L));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(f.keys()).find(L=>L.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(ST,h,void 0))||v||D||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,B]of f)this.g.setRequestHeader(L,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jm(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){Lm(this,L)}};function Lm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Vm(a),Oa(a)}function Vm(a){a.A||(a.A=!0,ht(a,"complete"),ht(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ht(this,"complete"),ht(this,"abort"),Oa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Oa(this,!0)),Ae.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Mm(this):this.bb())},t.bb=function(){Mm(this)};function Mm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Sn(a)!=4||a.Z()!=2)){if(a.u&&Sn(a)==4)sm(a.Ea,0,a);else if(ht(a,"readystatechange"),Sn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var v;if(v=B===0){var D=String(a.D).match(Rm)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),v=!IT.test(D?D.toLowerCase():"")}f=v}if(f)ht(a,"complete"),ht(a,"success");else{a.m=6;try{var L=2<Sn(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",Vm(a)}}finally{Oa(a)}}}}function Oa(a,h){if(a.g){jm(a);const f=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ht(a,"ready");try{f.onreadystatechange=v}catch{}}}function jm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Sn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),nT(h)}};function Um(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function xT(a){const h={};a=(a.g&&2<=Sn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(_(a[v]))continue;var f=C(a[v]);const D=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const L=h[D]||[];h[D]=L,L.push(f)}S(h,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hs(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Fm(a){this.Aa=0,this.i=[],this.j=new Ms,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Hs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Hs("baseRetryDelayMs",5e3,a),this.cb=Hs("retryDelaySeedMs",1e4,a),this.Wa=Hs("forwardChannelMaxRetries",2,a),this.wa=Hs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Em(a&&a.concurrentRequestLimit),this.Da=new ET,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Fm.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,v){dt(0),this.W=a,this.H=h||{},f&&v!==void 0&&(this.H.OSID=f,this.H.OAID=v),this.F=this.X,this.I=Qm(this,null,this.W),Va(this)};function Pc(a){if(Bm(a),a.G==3){var h=a.U++,f=In(a.I);if(me(f,"SID",a.K),me(f,"RID",h),me(f,"TYPE","terminate"),Ws(a,f),h=new Gn(a,a.j,h),h.L=2,h.v=Na(In(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Xm(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ka(h)}Gm(a)}function La(a){a.g&&(Dc(a),a.g.cancel(),a.g=null)}function Bm(a){La(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ma(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Va(a){if(!Tm(a.h)&&!a.s){a.s=!0;var h=a.Ga;on||J(),z||(on(),z=!0),K.add(h,a),a.B=0}}function AT(a,h){return Im(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Vs(g(a.Ga,a,h),Km(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new Gn(this,this.j,a);let L=this.o;if(this.S&&(L?(L=y(L),A(L,this.S)):L=this.S),this.m!==null||this.O||(D.H=L,L=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var v=this.i[f];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=$m(this,D,h),f=In(this.I),me(f,"RID",a),me(f,"CVER",22),this.D&&me(f,"X-HTTP-Session-Id",this.D),Ws(this,f),L&&(this.O?h="headers="+encodeURIComponent(String(Om(L)))+"&"+h:this.m&&Cc(f,this.m,L)),kc(this.h,D),this.Ua&&me(f,"TYPE","init"),this.P?(me(f,"$req",h),me(f,"SID","null"),D.T=!0,Sc(D,f,null)):Sc(D,f,h),this.G=2}}else this.G==3&&(a?zm(this,a):this.i.length==0||Tm(this.h)||zm(this))};function zm(a,h){var f;h?f=h.l:f=a.U++;const v=In(a.I);me(v,"SID",a.K),me(v,"RID",f),me(v,"AID",a.T),Ws(a,v),a.m&&a.o&&Cc(v,a.m,a.o),f=new Gn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=$m(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),kc(a.h,f),Sc(f,v,h)}function Ws(a,h){a.H&&U(a.H,function(f,v){me(h,v,f)}),a.l&&Am({},function(f,v){me(h,v,f)})}function $m(a,h,f){f=Math.min(a.i.length,f);var v=a.l?g(a.l.Na,a.l,a):null;e:{var D=a.i;let L=-1;for(;;){const B=["count="+f];L==-1?0<f?(L=D[0].g,B.push("ofs="+L)):L=0:B.push("ofs="+L);let he=!0;for(let $e=0;$e<f;$e++){let se=D[$e].g;const Je=D[$e].map;if(se-=L,0>se)L=Math.max(0,D[$e].g-100),he=!1;else try{TT(Je,B,"req"+se+"_")}catch{v&&v(Je)}}if(he){v=B.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,v}function Hm(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;on||J(),z||(on(),z=!0),K.add(h,a),a.v=0}}function Nc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Vs(g(a.Fa,a),Km(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Wm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Vs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),La(this),Wm(this))};function Dc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Wm(a){a.g=new Gn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=In(a.qa);me(h,"RID","rpc"),me(h,"SID",a.K),me(h,"AID",a.T),me(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&me(h,"TO",a.ja),me(h,"TYPE","xmlhttp"),Ws(a,h),a.m&&a.o&&Cc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Na(In(h)),f.m=null,f.P=!0,_m(f,a)}t.Za=function(){this.C!=null&&(this.C=null,La(this),Nc(this),dt(19))};function Ma(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function qm(a,h){var f=null;if(a.g==h){Ma(a),Dc(a),a.g=null;var v=2}else if(Rc(a.h,h))f=h.D,Sm(a.h,h),v=1;else return;if(a.G!=0){if(h.o)if(v==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var D=a.B;v=xa(),ht(v,new pm(v,f)),Va(a)}else Hm(a);else if(D=h.s,D==3||D==0&&0<h.X||!(v==1&&AT(a,h)||v==2&&Nc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),D){case 1:Kr(a,5);break;case 4:Kr(a,10);break;case 3:Kr(a,6);break;default:Kr(a,2)}}}function Km(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Kr(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),v=a.Xa;const D=!v;v=new qr(v||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ca(v,"https"),Na(v),D?vT(v.toString(),f):wT(v.toString(),f)}else dt(2);a.G=0,a.l&&a.l.sa(h),Gm(a),Bm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function Gm(a){if(a.G=0,a.ka=[],a.l){const h=xm(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ka,h),k(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Qm(a,h,f){var v=f instanceof qr?In(f):new qr(f);if(v.g!="")h&&(v.g=h+"."+v.g),Pa(v,v.s);else{var D=l.location;v=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var L=new qr(null);v&&Ca(L,v),h&&(L.g=h),D&&Pa(L,D),f&&(L.l=f),v=L}return f=a.D,h=a.ya,f&&h&&me(v,f,h),me(v,"VER",a.la),Ws(a,v),v}function Xm(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ae(new Da({eb:f})):new Ae(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ym(){}t=Ym.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ja(){}ja.prototype.g=function(a,h){return new Rt(a,h)};function Rt(a,h){Ye.call(this),this.g=new Fm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!_(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Pi(this)}x(Rt,Ye),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){Pc(this.g)},Rt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=_c(a),a=f);h.i.push(new uT(h.Ya++,a)),h.G==3&&Va(h)},Rt.prototype.N=function(){this.g.l=null,delete this.j,Pc(this.g),delete this.g,Rt.aa.N.call(this)};function Jm(a){wc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}x(Jm,wc);function Zm(){Ec.call(this),this.status=1}x(Zm,Ec);function Pi(a){this.g=a}x(Pi,Ym),Pi.prototype.ua=function(){ht(this.g,"a")},Pi.prototype.ta=function(a){ht(this.g,new Jm(a))},Pi.prototype.sa=function(a){ht(this.g,new Zm)},Pi.prototype.ra=function(){ht(this.g,"b")},ja.prototype.createWebChannel=ja.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,mE=function(){return new ja},pE=function(){return xa()},fE=Hr,Rd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Aa.NO_ERROR=0,Aa.TIMEOUT=8,Aa.HTTP_ERROR=6,Pl=Aa,mm.COMPLETE="complete",dE=mm,cm.EventType=Os,Os.OPEN="a",Os.CLOSE="b",Os.ERROR="c",Os.MESSAGE="d",Ye.prototype.listen=Ye.prototype.K,uo=cm,Ae.prototype.listenOnce=Ae.prototype.L,Ae.prototype.getLastError=Ae.prototype.Ka,Ae.prototype.getLastErrorCode=Ae.prototype.Ba,Ae.prototype.getStatus=Ae.prototype.Z,Ae.prototype.getResponseJson=Ae.prototype.Oa,Ae.prototype.getResponseText=Ae.prototype.oa,Ae.prototype.send=Ae.prototype.ea,Ae.prototype.setWithCredentials=Ae.prototype.Ha,hE=Ae}).apply(typeof sl<"u"?sl:typeof self<"u"?self:typeof window<"u"?window:{});const Qy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new qf("@firebase/firestore");function eo(){return mi.logLevel}function W(t,...e){if(mi.logLevel<=ne.DEBUG){const n=e.map(op);mi.debug(`Firestore (${ks}): ${t}`,...n)}}function Hn(t,...e){if(mi.logLevel<=ne.ERROR){const n=e.map(op);mi.error(`Firestore (${ks}): ${t}`,...n)}}function fs(t,...e){if(mi.logLevel<=ne.WARN){const n=e.map(op);mi.warn(`Firestore (${ks}): ${t}`,...n)}}function op(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${ks}) INTERNAL ASSERTION FAILED: `+t;throw Hn(e),new Error(e)}function ce(t,e){t||Q()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends En{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class FP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class BP{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ce(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Vn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Vn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Vn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string"),new gE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new rt(e)}}class zP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class $P{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new zP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class HP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class WP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ce(this.o===void 0);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string"),this.R=n.token,new HP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=qP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function ps(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ue(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Ue(0,0))}static max(){return new X(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Yo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Yo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ye extends Yo{construct(e,n,r){return new ye(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ye(n)}static emptyPath(){return new ye([])}}const KP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends Yo{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return KP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new $(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ye.fromString(e))}static fromName(e){return new q(ye.fromString(e).popFirst(5))}static empty(){return new q(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ye(e.slice()))}}function GP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new Cr(i,q.empty(),e)}function QP(t){return new Cr(t.readTime,t.key,-1)}class Cr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Cr(X.min(),q.empty(),-1)}static max(){return new Cr(X.max(),q.empty(),-1)}}function XP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class JP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ya(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==YP)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ZP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _a(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ap.oe=-1;function Yu(t){return t==null}function gu(t){return t===0&&1/t==-1/0}function eN(t){return typeof t=="number"&&Number.isInteger(t)&&!gu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ti(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _E(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ol(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ol(this.root,e,this.comparator,!1)}getReverseIterator(){return new ol(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ol(this.root,e,this.comparator,!0)}}class ol{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??We.EMPTY,this.right=s??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return We.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yy(this.data.getIterator())}getIteratorFrom(e){return new Yy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class Yy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new Pt([])}unionWith(e){let n=new Ge(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ps(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new vE("Invalid base64 string: "+s):s}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const tN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pr(t){if(ce(!!t),typeof t=="string"){let e=0;const n=tN.exec(t);if(ce(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gi(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function up(t){const e=t.mapValue.fields.__previous_value__;return lp(e)?up(e):e}function Jo(t){const e=Pr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Zo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Zo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Zo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function yi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lp(t)?4:iN(t)?9007199254740991:rN(t)?10:11:Q()}function vn(t,e){if(t===e)return!0;const n=yi(t);if(n!==yi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Jo(t).isEqual(Jo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Pr(i.timestampValue),l=Pr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return gi(i.bytesValue).isEqual(gi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Pe(i.geoPointValue.latitude)===Pe(s.geoPointValue.latitude)&&Pe(i.geoPointValue.longitude)===Pe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Pe(i.integerValue)===Pe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Pe(i.doubleValue),l=Pe(s.doubleValue);return o===l?gu(o)===gu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ps(t.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Xy(o)!==Xy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!vn(o[u],l[u])))return!1;return!0}(t,e);default:return Q()}}function ea(t,e){return(t.values||[]).find(n=>vn(n,e))!==void 0}function ms(t,e){if(t===e)return 0;const n=yi(t),r=yi(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Pe(s.integerValue||s.doubleValue),u=Pe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Jy(t.timestampValue,e.timestampValue);case 4:return Jy(Jo(t),Jo(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(s,o){const l=gi(s),u=gi(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=oe(l[c],u[c]);if(d!==0)return d}return oe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=oe(Pe(s.latitude),Pe(o.latitude));return l!==0?l:oe(Pe(s.longitude),Pe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Zy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,d;const p=s.fields||{},g=o.fields||{},w=(l=p.value)===null||l===void 0?void 0:l.arrayValue,x=(u=g.value)===null||u===void 0?void 0:u.arrayValue,P=oe(((c=w==null?void 0:w.values)===null||c===void 0?void 0:c.length)||0,((d=x==null?void 0:x.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:Zy(w,x)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===al.mapValue&&o===al.mapValue)return 0;if(s===al.mapValue)return 1;if(o===al.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const g=oe(u[p],d[p]);if(g!==0)return g;const w=ms(l[u[p]],c[d[p]]);if(w!==0)return w}return oe(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Q()}}function Jy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Pr(t),r=Pr(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function Zy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ms(n[i],r[i]);if(s)return s}return oe(n.length,r.length)}function gs(t){return kd(t)}function kd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Pr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return gi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=kd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${kd(n.fields[o])}`;return i+"}"}(t.mapValue):Q()}function e_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Cd(t){return!!t&&"integerValue"in t}function cp(t){return!!t&&"arrayValue"in t}function t_(t){return!!t&&"nullValue"in t}function n_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Nl(t){return!!t&&"mapValue"in t}function rN(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function So(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ti(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=So(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=So(t.arrayValue.values[n]);return e}return Object.assign({},t)}function iN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Nl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=So(n)}setAll(e){let n=qe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=So(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Nl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Nl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ti(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Et(So(this.value))}}function wE(t){const e=[];return Ti(t.fields,(n,r)=>{const i=new qe([n]);if(Nl(r)){const s=wE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Pt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new st(e,0,X.min(),X.min(),X.min(),Et.empty(),0)}static newFoundDocument(e,n,r,i){return new st(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new st(e,2,n,X.min(),X.min(),Et.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,X.min(),X.min(),Et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n){this.position=e,this.inclusive=n}}function r_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=ms(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function i_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n="asc"){this.field=e,this.dir=n}}function sN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{}class Le extends EE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new aN(e,n,r):n==="array-contains"?new cN(e,r):n==="in"?new hN(e,r):n==="not-in"?new dN(e,r):n==="array-contains-any"?new fN(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new lN(e,r):new uN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ms(n,this.value)):n!==null&&yi(this.value)===yi(n)&&this.matchesComparison(ms(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rn extends EE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new rn(e,n)}matches(e){return TE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function TE(t){return t.op==="and"}function IE(t){return oN(t)&&TE(t)}function oN(t){for(const e of t.filters)if(e instanceof rn)return!1;return!0}function Pd(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+gs(t.value);if(IE(t))return t.filters.map(e=>Pd(e)).join(",");{const e=t.filters.map(n=>Pd(n)).join(",");return`${t.op}(${e})`}}function SE(t,e){return t instanceof Le?function(r,i){return i instanceof Le&&r.op===i.op&&r.field.isEqual(i.field)&&vn(r.value,i.value)}(t,e):t instanceof rn?function(r,i){return i instanceof rn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&SE(o,i.filters[l]),!0):!1}(t,e):void Q()}function xE(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${gs(n.value)}`}(t):t instanceof rn?function(n){return n.op.toString()+" {"+n.getFilters().map(xE).join(" ,")+"}"}(t):"Filter"}class aN extends Le{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class lN extends Le{constructor(e,n){super(e,"in",n),this.keys=AE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class uN extends Le{constructor(e,n){super(e,"not-in",n),this.keys=AE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function AE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class cN extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cp(n)&&ea(n.arrayValue,this.value)}}class hN extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ea(this.value.arrayValue,n)}}class dN extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(ea(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ea(this.value.arrayValue,n)}}class fN extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ea(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function s_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new pN(t,e,n,r,i,s,o)}function hp(t){const e=Y(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Pd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Yu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>gs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>gs(r)).join(",")),e.ue=n}return e.ue}function dp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!sN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!SE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!i_(t.startAt,e.startAt)&&i_(t.endAt,e.endAt)}function Nd(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function mN(t,e,n,r,i,s,o,l){return new Cs(t,e,n,r,i,s,o,l)}function fp(t){return new Cs(t)}function o_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function RE(t){return t.collectionGroup!==null}function xo(t){const e=Y(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ge(qe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ta(s,r))}),n.has(qe.keyField().canonicalString())||e.ce.push(new ta(qe.keyField(),r))}return e.ce}function yn(t){const e=Y(t);return e.le||(e.le=gN(e,xo(t))),e.le}function gN(t,e){if(t.limitType==="F")return s_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ta(i.field,s)});const n=t.endAt?new yu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new yu(t.startAt.position,t.startAt.inclusive):null;return s_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Dd(t,e){const n=t.filters.concat([e]);return new Cs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function _u(t,e,n){return new Cs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ju(t,e){return dp(yn(t),yn(e))&&t.limitType===e.limitType}function kE(t){return`${hp(yn(t))}|lt:${t.limitType}`}function bi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>xE(i)).join(", ")}]`),Yu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>gs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>gs(i)).join(",")),`Target(${r})`}(yn(t))}; limitType=${t.limitType})`}function Zu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of xo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=r_(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,xo(r),i)||r.endAt&&!function(o,l,u){const c=r_(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,xo(r),i))}(t,e)}function yN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function CE(t){return(e,n)=>{let r=!1;for(const i of xo(t)){const s=_N(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function _N(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?ms(u,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ti(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return _E(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN=new xe(q.comparator);function Wn(){return vN}const PE=new xe(q.comparator);function co(...t){let e=PE;for(const n of t)e=e.insert(n.key,n);return e}function NE(t){let e=PE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ti(){return Ao()}function DE(){return Ao()}function Ao(){return new Ps(t=>t.toString(),(t,e)=>t.isEqual(e))}const wN=new xe(q.comparator),EN=new Ge(q.comparator);function te(...t){let e=EN;for(const n of t)e=e.add(n);return e}const TN=new Ge(oe);function IN(){return TN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gu(e)?"-0":e}}function bE(t){return{integerValue:""+t}}function SN(t,e){return eN(e)?bE(e):pp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this._=void 0}}function xN(t,e,n){return t instanceof vu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&lp(s)&&(s=up(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof na?LE(t,e):t instanceof ra?VE(t,e):function(i,s){const o=OE(i,s),l=a_(o)+a_(i.Pe);return Cd(o)&&Cd(i.Pe)?bE(l):pp(i.serializer,l)}(t,e)}function AN(t,e,n){return t instanceof na?LE(t,e):t instanceof ra?VE(t,e):n}function OE(t,e){return t instanceof wu?function(r){return Cd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class vu extends ec{}class na extends ec{constructor(e){super(),this.elements=e}}function LE(t,e){const n=ME(e);for(const r of t.elements)n.some(i=>vn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ra extends ec{constructor(e){super(),this.elements=e}}function VE(t,e){let n=ME(e);for(const r of t.elements)n=n.filter(i=>!vn(i,r));return{arrayValue:{values:n}}}class wu extends ec{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function a_(t){return Pe(t.integerValue||t.doubleValue)}function ME(t){return cp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function RN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof na&&i instanceof na||r instanceof ra&&i instanceof ra?ps(r.elements,i.elements,vn):r instanceof wu&&i instanceof wu?vn(r.Pe,i.Pe):r instanceof vu&&i instanceof vu}(t.transform,e.transform)}class kN{constructor(e,n){this.version=e,this.transformResults=n}}class tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Dl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class tc{}function jE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new mp(t.key,tn.none()):new va(t.key,t.data,tn.none());{const n=t.data,r=Et.empty();let i=new Ge(qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Fr(t.key,r,new Pt(i.toArray()),tn.none())}}function CN(t,e,n){t instanceof va?function(i,s,o){const l=i.value.clone(),u=u_(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Fr?function(i,s,o){if(!Dl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=u_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(UE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ro(t,e,n,r){return t instanceof va?function(s,o,l,u){if(!Dl(s.precondition,o))return l;const c=s.value.clone(),d=c_(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fr?function(s,o,l,u){if(!Dl(s.precondition,o))return l;const c=c_(s.fieldTransforms,u,o),d=o.data;return d.setAll(UE(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Dl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function PN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=OE(r.transform,i||null);s!=null&&(n===null&&(n=Et.empty()),n.set(r.field,s))}return n||null}function l_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ps(r,i,(s,o)=>RN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class va extends tc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Fr extends tc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function UE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function u_(t,e,n){const r=new Map;ce(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,AN(o,l,n[i]))}return r}function c_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,xN(s,o,e))}return r}class mp extends tc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class NN extends tc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&CN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ro(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ro(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=DE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=jE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&ps(this.mutations,e.mutations,(n,r)=>l_(n,r))&&ps(this.baseMutations,e.baseMutations,(n,r)=>l_(n,r))}}class gp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length);let i=function(){return wN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new gp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be,re;function LN(t){switch(t){default:return Q();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function FE(t){if(t===void 0)return Hn("GRPC error has no .code"),V.UNKNOWN;switch(t){case be.OK:return V.OK;case be.CANCELLED:return V.CANCELLED;case be.UNKNOWN:return V.UNKNOWN;case be.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case be.INTERNAL:return V.INTERNAL;case be.UNAVAILABLE:return V.UNAVAILABLE;case be.UNAUTHENTICATED:return V.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case be.NOT_FOUND:return V.NOT_FOUND;case be.ALREADY_EXISTS:return V.ALREADY_EXISTS;case be.PERMISSION_DENIED:return V.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case be.ABORTED:return V.ABORTED;case be.OUT_OF_RANGE:return V.OUT_OF_RANGE;case be.UNIMPLEMENTED:return V.UNIMPLEMENTED;case be.DATA_LOSS:return V.DATA_LOSS;default:return Q()}}(re=be||(be={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=new ii([4294967295,4294967295],0);function h_(t){const e=VN().encode(t),n=new cE;return n.update(e),new Uint8Array(n.digest())}function d_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ii([n,r],0),new ii([i,s],0)]}class yp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ho(`Invalid padding: ${n}`);if(r<0)throw new ho(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ho(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ho(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ii.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ii.fromNumber(r)));return i.compare(MN)===1&&(i=new ii([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=h_(e),[r,i]=d_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new yp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=h_(e),[r,i]=d_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ho extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,wa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new nc(X.min(),i,new xe(oe),Wn(),te())}}class wa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new wa(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class BE{constructor(e,n){this.targetId=e,this.me=n}}class zE{constructor(e,n,r=Xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class f_{constructor(){this.fe=0,this.ge=m_(),this.pe=Xe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new wa(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=m_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class jN{constructor(e){this.Le=e,this.Be=new Map,this.ke=Wn(),this.qe=p_(),this.Qe=new xe(oe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Nd(s))if(r===0){const o=new q(s.path);this.Ue(n,o,st.newNoDocument(o,X.min()))}else ce(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=gi(r).toUint8Array()}catch(u){if(u instanceof vE)return fs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new yp(o,i,s)}catch(u){return fs(u instanceof ho?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Nd(l.target)){const u=new q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,st.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=te();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new nc(e,n,this.Qe,this.ke,r);return this.ke=Wn(),this.qe=p_(),this.Qe=new xe(oe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new f_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ge(oe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new f_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function p_(){return new xe(q.comparator)}function m_(){return new xe(q.comparator)}const UN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),FN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),BN=(()=>({and:"AND",or:"OR"}))();class zN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bd(t,e){return t.useProto3Json||Yu(e)?e:{value:e}}function Eu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $E(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $N(t,e){return Eu(t,e.toTimestamp())}function _n(t){return ce(!!t),X.fromTimestamp(function(n){const r=Pr(n);return new Ue(r.seconds,r.nanos)}(t))}function _p(t,e){return Od(t,e).canonicalString()}function Od(t,e){const n=function(i){return new ye(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function HE(t){const e=ye.fromString(t);return ce(QE(e)),e}function Ld(t,e){return _p(t.databaseId,e.path)}function ph(t,e){const n=HE(e);if(n.get(1)!==t.databaseId.projectId)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(qE(n))}function WE(t,e){return _p(t.databaseId,e)}function HN(t){const e=HE(t);return e.length===4?ye.emptyPath():qE(e)}function Vd(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qE(t){return ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function g_(t,e,n){return{name:Ld(t,e),fields:n.value.mapValue.fields}}function WN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ce(d===void 0||typeof d=="string"),Xe.fromBase64String(d||"")):(ce(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Xe.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?V.UNKNOWN:FE(c.code);return new $(d,c.message||"")}(o);n=new zE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ph(t,r.document.name),s=_n(r.document.updateTime),o=r.document.createTime?_n(r.document.createTime):X.min(),l=new Et({mapValue:{fields:r.document.fields}}),u=st.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new bl(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ph(t,r.document),s=r.readTime?_n(r.readTime):X.min(),o=st.newNoDocument(i,s),l=r.removedTargetIds||[];n=new bl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ph(t,r.document),s=r.removedTargetIds||[];n=new bl([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ON(i,s),l=r.targetId;n=new BE(l,o)}}return n}function qN(t,e){let n;if(e instanceof va)n={update:g_(t,e.key,e.value)};else if(e instanceof mp)n={delete:Ld(t,e.key)};else if(e instanceof Fr)n={update:g_(t,e.key,e.data),updateMask:t2(e.fieldMask)};else{if(!(e instanceof NN))return Q();n={verify:Ld(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof vu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof na)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ra)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof wu)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:$N(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function KN(t,e){return t&&t.length>0?(ce(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?_n(i.updateTime):_n(s);return o.isEqual(X.min())&&(o=_n(s)),new kN(o,i.transformResults||[])}(n,e))):[]}function GN(t,e){return{documents:[WE(t,e.path)]}}function QN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=WE(t,i);const s=function(c){if(c.length!==0)return GE(rn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(g){return{field:Oi(g.field),direction:JN(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=bd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function XN(t){let e=HN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const g=KE(p);return g instanceof rn&&IE(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(x){return new ta(Li(x.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Yu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,w=p.values||[];return new yu(w,g)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const g=!p.before,w=p.values||[];return new yu(w,g)}(n.endAt)),mN(e,i,o,s,l,"F",u,c)}function YN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function KE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Li(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Li(n.unaryFilter.field);return Le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Li(n.unaryFilter.field);return Le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Li(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return Le.create(Li(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return rn.create(n.compositeFilter.filters.map(r=>KE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function JN(t){return UN[t]}function ZN(t){return FN[t]}function e2(t){return BN[t]}function Oi(t){return{fieldPath:t.canonicalString()}}function Li(t){return qe.fromServerFormat(t.fieldPath)}function GE(t){return t instanceof Le?function(n){if(n.op==="=="){if(n_(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NAN"}};if(t_(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(n_(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NOT_NAN"}};if(t_(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Oi(n.field),op:ZN(n.op),value:n.value}}}(t):t instanceof rn?function(n){const r=n.getFilters().map(i=>GE(i));return r.length===1?r[0]:{compositeFilter:{op:e2(n.op),filters:r}}}(t):Q()}function t2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function QE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n,r,i,s=X.min(),o=X.min(),l=Xe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e){this.ct=e}}function r2(t){const e=XN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_u(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(){this.un=new s2}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Cr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Cr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class s2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ge(ye.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ge(ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ys(0)}static kn(){return new ys(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(){this.changes=new Ps(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ro(r.mutation,i,Pt.empty(),Ue.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=ti();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=co();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ti();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Wn();const o=Ao(),l=function(){return Ao()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Fr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Ro(d.mutation,c,d.mutation.getFieldMask(),Ue.now())):o.set(c.key,Pt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new a2(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ao();let i=new xe((o,l)=>o-l),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Pt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||te()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=DE();d.forEach(g=>{if(!s.has(g)){const w=jE(n.get(g),r.get(g));w!==null&&p.set(g,w),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):RE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(ti());let l=-1,u=s;return o.next(c=>j.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?j.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,te())).next(d=>({batchId:l,changes:NE(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=co();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=co();return this.indexManager.getCollectionParents(e,s).next(l=>j.forEach(l,u=>{const c=function(p,g){return new Cs(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,st.newInvalidDocument(d)))});let l=co();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Ro(d.mutation,c,Pt.empty(),Ue.now()),Zu(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:_n(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:r2(i.bundledQuery),readTime:_n(i.readTime)}}(n)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(){this.overlays=new xe(q.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ti();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=ti(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new xe((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=ti(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=ti(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return j.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new bN(n,r));let s=this.Ir.get(n);s===void 0&&(s=te(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(){this.sessionToken=Xe.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(){this.Tr=new Ge(Fe.Er),this.dr=new Ge(Fe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Fe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new q(new ye([])),r=new Fe(n,e),i=new Fe(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new q(new ye([])),r=new Fe(n,e),i=new Fe(n,e+1);let s=te();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Fe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return q.comparator(e.key,n.key)||oe(e.wr,n.wr)}static Ar(e,n){return oe(e.wr,n.wr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ge(Fe.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new DN(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Fe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),i=new Fe(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ge(oe);return n.forEach(i=>{const s=new Fe(i,0),o=new Fe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Fe(new q(s),0);let l=new Ge(oe);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),j.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(n.mutations,i=>{const s=new Fe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Fe(n,0),i=this.br.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e){this.Mr=e,this.docs=function(){return new xe(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let r=Wn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():st.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Wn();const o=n.path,l=new q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||XP(QP(d),r)<=0||(i.has(d.key)||Zu(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Or(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new p2(this)}getSize(e){return j.resolve(this.size)}}class p2 extends o2{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(e){this.persistence=e,this.Nr=new Ps(n=>hp(n),dp),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new vp,this.targetCount=0,this.kr=ys.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ys(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e,n){this.qr={},this.overlays={},this.Qr=new ap(0),this.Kr=!1,this.Kr=!0,this.$r=new h2,this.referenceDelegate=e(this),this.Ur=new m2(this),this.indexManager=new i2,this.remoteDocumentCache=function(i){return new f2(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new n2(n),this.Gr=new u2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new c2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new d2(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new y2(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class y2 extends JP{constructor(e){super(),this.currentSequenceNumber=e}}class wp{constructor(e){this.persistence=e,this.Jr=new vp,this.Yr=null}static Zr(e){return new wp(e)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ep(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return sR()?8:ZP(lt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new _2;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(eo()<=ne.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",bi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(eo()<=ne.DEBUG&&W("QueryEngine","Query:",bi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(eo()<=ne.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",bi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yn(n))):j.resolve())}Yi(e,n){if(o_(n))return j.resolve(null);let r=yn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=_u(n,null,"F"),r=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,_u(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return o_(n)||i.isEqual(X.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?j.resolve(null):(eo()<=ne.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),bi(n)),this.rs(e,o,n,GP(i,-1)).next(l=>l))})}ts(e,n){let r=new Ge(CE(e));return n.forEach((i,s)=>{Zu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return eo()<=ne.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",bi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Cr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new xe(oe),this._s=new Ps(s=>hp(s),dp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new l2(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function E2(t,e,n,r){return new w2(t,e,n,r)}async function XE(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=te();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function T2(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,g=p.keys();let w=j.resolve();return g.forEach(x=>{w=w.next(()=>d.getEntry(u,x)).next(P=>{const k=c.docVersions.get(x);ce(k!==null),P.version.compareTo(k)<0&&(p.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function YE(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function I2(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const g=i.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,p)));let w=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(Xe.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),i=i.insert(p,w),function(P,k,I){return P.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(g,w,d)&&l.push(n.Ur.updateTargetData(s,w))});let u=Wn(),c=te();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(S2(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(X.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return j.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function S2(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Wn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function x2(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function A2(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new dr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Md(t,e,n){const r=Y(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!_a(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function y_(t,e,n){const r=Y(t);let i=X.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=Y(u),g=p._s.get(d);return g!==void 0?j.resolve(p.os.get(g)):p.Ur.getTargetData(c,d)}(r,o,yn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:te())).next(l=>(R2(r,yN(e),l),{documents:l,Ts:s})))}function R2(t,e,n){let r=t.us.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class __{constructor(){this.activeTargetIds=IN()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class k2{constructor(){this.so=new __,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new __,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ll=null;function mh(){return ll===null?ll=function(){return 268435456+Math.round(2147483648*Math.random())}():ll++,"0x"+ll.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="WebChannelConnection";class D2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=mh(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(W("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw fs("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ks}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=P2[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=mh();return new Promise((o,l)=>{const u=new hE;u.setWithCredentials(!0),u.listenOnce(dE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Pl.NO_ERROR:const d=u.getResponseJson();W(nt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Pl.TIMEOUT:W(nt,`RPC '${e}' ${s} timed out`),l(new $(V.DEADLINE_EXCEEDED,"Request time out"));break;case Pl.HTTP_ERROR:const p=u.getStatus();if(W(nt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const w=g==null?void 0:g.error;if(w&&w.status&&w.message){const x=function(k){const I=k.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(I)>=0?I:V.UNKNOWN}(w.status);l(new $(x,w.message))}else l(new $(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new $(V.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{W(nt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);W(nt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=mh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=mE(),l=pE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");W(nt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let g=!1,w=!1;const x=new N2({Io:k=>{w?W(nt,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(g||(W(nt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),W(nt,`RPC '${e}' stream ${i} sending:`,k),p.send(k))},To:()=>p.close()}),P=(k,I,_)=>{k.listen(I,E=>{try{_(E)}catch(b){setTimeout(()=>{throw b},0)}})};return P(p,uo.EventType.OPEN,()=>{w||(W(nt,`RPC '${e}' stream ${i} transport opened.`),x.yo())}),P(p,uo.EventType.CLOSE,()=>{w||(w=!0,W(nt,`RPC '${e}' stream ${i} transport closed`),x.So())}),P(p,uo.EventType.ERROR,k=>{w||(w=!0,fs(nt,`RPC '${e}' stream ${i} transport errored:`,k),x.So(new $(V.UNAVAILABLE,"The operation could not be completed")))}),P(p,uo.EventType.MESSAGE,k=>{var I;if(!w){const _=k.data[0];ce(!!_);const E=_,b=E.error||((I=E[0])===null||I===void 0?void 0:I.error);if(b){W(nt,`RPC '${e}' stream ${i} received error:`,b);const M=b.status;let U=function(T){const A=be[T];if(A!==void 0)return FE(A)}(M),S=b.message;U===void 0&&(U=V.INTERNAL,S="Unknown error status: "+M+" with message "+b.message),w=!0,x.So(new $(U,S)),p.close()}else W(nt,`RPC '${e}' stream ${i} received:`,_),x.bo(_)}}),P(l,fE.STAT_EVENT,k=>{k.stat===Rd.PROXY?W(nt,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===Rd.NOPROXY&&W(nt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function gh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(t){return new zN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new JE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Hn(n.toString()),Hn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new $(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class b2 extends ZE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=WN(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?_n(o.readTime):X.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Vd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Nd(u)?{documents:GN(s,u)}:{query:QN(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=$E(s,o.resumeToken);const c=bd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=Eu(s,o.snapshotVersion.toTimestamp());const c=bd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=YN(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Vd(this.serializer),n.removeTarget=e,this.a_(n)}}class O2 extends ZE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ce(!!e.streamToken),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=KN(e.writeResults,e.commitTime),r=_n(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Vd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>qN(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Od(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Od(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class V2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Hn(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ii(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Y(u);c.L_.add(4),await Ea(c),c.q_.set("Unknown"),c.L_.delete(4),await ic(c)}(this))})}),this.q_=new V2(r,i)}}async function ic(t){if(Ii(t))for(const e of t.B_)await e(!0)}async function Ea(t){for(const e of t.B_)await e(!1)}function e1(t,e){const n=Y(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),xp(n)?Sp(n):Ns(n).r_()&&Ip(n,e))}function Tp(t,e){const n=Y(t),r=Ns(n);n.N_.delete(e),r.r_()&&t1(n,e),n.N_.size===0&&(r.r_()?r.o_():Ii(n)&&n.q_.set("Unknown"))}function Ip(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ns(t).A_(e)}function t1(t,e){t.Q_.xe(e),Ns(t).R_(e)}function Sp(t){t.Q_=new jN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ns(t).start(),t.q_.v_()}function xp(t){return Ii(t)&&!Ns(t).n_()&&t.N_.size>0}function Ii(t){return Y(t).L_.size===0}function n1(t){t.Q_=void 0}async function j2(t){t.q_.set("Online")}async function U2(t){t.N_.forEach((e,n)=>{Ip(t,e)})}async function F2(t,e){n1(t),xp(t)?(t.q_.M_(e),Sp(t)):t.q_.set("Unknown")}async function B2(t,e,n){if(t.q_.set("Online"),e instanceof zE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Tu(t,r)}else if(e instanceof bl?t.Q_.Ke(e):e instanceof BE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(X.min()))try{const r=await YE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(Xe.EMPTY_BYTE_STRING,d.snapshotVersion)),t1(s,u);const p=new dr(d.target,u,c,d.sequenceNumber);Ip(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await Tu(t,r)}}async function Tu(t,e,n){if(!_a(e))throw e;t.L_.add(1),await Ea(t),t.q_.set("Offline"),n||(n=()=>YE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await ic(t)})}function r1(t,e){return e().catch(n=>Tu(t,n,e))}async function sc(t){const e=Y(t),n=Nr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;z2(e);)try{const i=await x2(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,$2(e,i)}catch(i){await Tu(e,i)}i1(e)&&s1(e)}function z2(t){return Ii(t)&&t.O_.length<10}function $2(t,e){t.O_.push(e);const n=Nr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function i1(t){return Ii(t)&&!Nr(t).n_()&&t.O_.length>0}function s1(t){Nr(t).start()}async function H2(t){Nr(t).p_()}async function W2(t){const e=Nr(t);for(const n of t.O_)e.m_(n.mutations)}async function q2(t,e,n){const r=t.O_.shift(),i=gp.from(r,e,n);await r1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await sc(t)}async function K2(t,e){e&&Nr(t).V_&&await async function(r,i){if(function(o){return LN(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();Nr(r).s_(),await r1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await sc(r)}}(t,e),i1(t)&&s1(t)}async function w_(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=Ii(n);n.L_.add(3),await Ea(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await ic(n)}async function G2(t,e){const n=Y(t);e?(n.L_.delete(2),await ic(n)):e||(n.L_.add(2),await Ea(n),n.q_.set("Unknown"))}function Ns(t){return t.K_||(t.K_=function(n,r,i){const s=Y(n);return s.w_(),new b2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:j2.bind(null,t),Ro:U2.bind(null,t),mo:F2.bind(null,t),d_:B2.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),xp(t)?Sp(t):t.q_.set("Unknown")):(await t.K_.stop(),n1(t))})),t.K_}function Nr(t){return t.U_||(t.U_=function(n,r,i){const s=Y(n);return s.w_(),new O2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:H2.bind(null,t),mo:K2.bind(null,t),f_:W2.bind(null,t),g_:q2.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await sc(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Ap(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rp(t,e){if(Hn("AsyncQueue",`${e}: ${t}`),_a(t))return new $(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=co(),this.sortedSet=new xe(this.comparator)}static emptySet(e){return new is(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof is)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new is;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(){this.W_=new xe(q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Q():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class _s{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new _s(e,n,is.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ju(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class X2{constructor(){this.queries=T_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Y(n),s=i.queries;i.queries=T_(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new $(V.ABORTED,"Firestore shutting down"))}}function T_(){return new Ps(t=>kE(t),Ju)}async function o1(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new Q2,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Rp(o,`Initialization of query '${bi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&kp(n)}async function a1(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Y2(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&kp(n)}function J2(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function kp(t){t.Y_.forEach(e=>{e.next()})}var jd,I_;(I_=jd||(jd={})).ea="default",I_.Cache="cache";class l1{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new _s(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=_s.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==jd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e){this.key=e}}class c1{constructor(e){this.key=e}}class Z2{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=CE(e),this.Ra=new is(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new E_,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const g=i.get(d),w=Zu(this.query,p)?p:null,x=!!g&&this.mutatedKeys.has(g.key),P=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let k=!1;g&&w?g.data.isEqual(w.data)?x!==P&&(r.track({type:3,doc:w}),k=!0):this.ga(g,w)||(r.track({type:2,doc:w}),k=!0,(u&&this.Aa(w,u)>0||c&&this.Aa(w,c)<0)&&(l=!0)):!g&&w?(r.track({type:0,doc:w}),k=!0):g&&!w&&(r.track({type:1,doc:g}),k=!0,(u||c)&&(l=!0)),k&&(w?(o=o.add(w),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(w,x){const P=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return P(w)-P(x)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new _s(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new E_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new c1(r))}),this.da.forEach(r=>{e.has(r)||n.push(new u1(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return _s.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class eD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class tD{constructor(e){this.key=e,this.va=!1}}class nD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ps(l=>kE(l),Ju),this.Ma=new Map,this.xa=new Set,this.Oa=new xe(q.comparator),this.Na=new Map,this.La=new vp,this.Ba={},this.ka=new Map,this.qa=ys.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function rD(t,e,n=!0){const r=g1(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await h1(r,e,n,!0),i}async function iD(t,e){const n=g1(t);await h1(n,e,!0,!1)}async function h1(t,e,n,r){const i=await A2(t.localStore,yn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await sD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&e1(t.remoteStore,i),l}async function sD(t,e,n,r,i){t.Ka=(p,g,w)=>async function(P,k,I,_){let E=k.view.ma(I);E.ns&&(E=await y_(P.localStore,k.query,!1).then(({documents:S})=>k.view.ma(S,E)));const b=_&&_.targetChanges.get(k.targetId),M=_&&_.targetMismatches.get(k.targetId)!=null,U=k.view.applyChanges(E,P.isPrimaryClient,b,M);return x_(P,k.targetId,U.wa),U.snapshot}(t,p,g,w);const s=await y_(t.localStore,e,!0),o=new Z2(e,s.Ts),l=o.ma(s.documents),u=wa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);x_(t,n,c.wa);const d=new eD(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function oD(t,e,n){const r=Y(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Ju(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Md(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Tp(r.remoteStore,i.targetId),Ud(r,i.targetId)}).catch(ya)):(Ud(r,i.targetId),await Md(r.localStore,i.targetId,!0))}async function aD(t,e){const n=Y(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Tp(n.remoteStore,r.targetId))}async function lD(t,e,n){const r=mD(t);try{const i=await function(o,l){const u=Y(o),c=Ue.now(),d=l.reduce((w,x)=>w.add(x.key),te());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let x=Wn(),P=te();return u.cs.getEntries(w,d).next(k=>{x=k,x.forEach((I,_)=>{_.isValidDocument()||(P=P.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,x)).next(k=>{p=k;const I=[];for(const _ of l){const E=PN(_,p.get(_.key).overlayedDocument);E!=null&&I.push(new Fr(_.key,E,wE(E.value.mapValue),tn.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,I,l)}).next(k=>{g=k;const I=k.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(w,k.batchId,I)})}).then(()=>({batchId:g.batchId,changes:NE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new xe(oe)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ta(r,i.changes),await sc(r.remoteStore)}catch(i){const s=Rp(i,"Failed to persist write");n.reject(s)}}async function d1(t,e){const n=Y(t);try{const r=await I2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ce(o.va):i.removedDocuments.size>0&&(ce(o.va),o.va=!1))}),await Ta(n,r,e)}catch(r){await ya(r)}}function S_(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const g of p.j_)g.Z_(l)&&(c=!0)}),c&&kp(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function uD(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new xe(q.comparator);o=o.insert(s,st.newNoDocument(s,X.min()));const l=te().add(s),u=new nc(X.min(),new Map,new xe(oe),o,l);await d1(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Cp(r)}else await Md(r.localStore,e,!1).then(()=>Ud(r,e,n)).catch(ya)}async function cD(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await T2(n.localStore,e);p1(n,r,null),f1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ta(n,i)}catch(i){await ya(i)}}async function hD(t,e,n){const r=Y(t);try{const i=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ce(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);p1(r,e,n),f1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ta(r,i)}catch(i){await ya(i)}}function f1(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function p1(t,e,n){const r=Y(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Ud(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||m1(t,r)})}function m1(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Tp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Cp(t))}function x_(t,e,n){for(const r of n)r instanceof u1?(t.La.addReference(r.key,e),dD(t,r)):r instanceof c1?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||m1(t,r.key)):Q()}function dD(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),Cp(t))}function Cp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new q(ye.fromString(e)),r=t.qa.next();t.Na.set(r,new tD(n)),t.Oa=t.Oa.insert(n,r),e1(t.remoteStore,new dr(yn(fp(n.path)),r,"TargetPurposeLimboResolution",ap.oe))}}async function Ta(t,e,n){const r=Y(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Ep.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=Y(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>j.forEach(c,g=>j.forEach(g.$i,w=>d.persistence.referenceDelegate.addReference(p,g.targetId,w)).next(()=>j.forEach(g.Ui,w=>d.persistence.referenceDelegate.removeReference(p,g.targetId,w)))))}catch(p){if(!_a(p))throw p;W("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const w=d.os.get(g),x=w.snapshotVersion,P=w.withLastLimboFreeSnapshotVersion(x);d.os=d.os.insert(g,P)}}}(r.localStore,s))}async function fD(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await XE(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new $(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ta(n,r.hs)}}function pD(t,e){const n=Y(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let i=te();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function g1(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=d1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uD.bind(null,e),e.Ca.d_=Y2.bind(null,e.eventManager),e.Ca.$a=J2.bind(null,e.eventManager),e}function mD(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hD.bind(null,e),e}class Iu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return E2(this.persistence,new v2,e.initialUser,this.serializer)}Ga(e){return new g2(wp.Zr,this.serializer)}Wa(e){return new k2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Iu.provider={build:()=>new Iu};class Fd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>S_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fD.bind(null,this.syncEngine),await G2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new X2}()}createDatastore(e){const n=rc(e.databaseInfo.databaseId),r=function(s){return new D2(s)}(e.databaseInfo);return function(s,o,l,u){return new L2(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new M2(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>S_(this.syncEngine,n,0),function(){return v_.D()?new v_:new C2}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new nD(i,s,o,l,u,c);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Y(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ea(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Fd.provider={build:()=>new Fd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Hn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=rt.UNAUTHENTICATED,this.clientId=yE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Rp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yh(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await XE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function A_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yD(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>w_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>w_(e.remoteStore,i)),t._onlineComponents=e}async function yD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await yh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;fs("Error using user provided cache. Falling back to memory cache: "+n),await yh(t,new Iu)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await yh(t,new Iu);return t._offlineComponents}async function _1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await A_(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await A_(t,new Fd))),t._onlineComponents}function _D(t){return _1(t).then(e=>e.syncEngine)}async function v1(t){const e=await _1(t),n=e.eventManager;return n.onListen=rD.bind(null,e.syncEngine),n.onUnlisten=oD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=iD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=aD.bind(null,e.syncEngine),n}function vD(t,e,n={}){const r=new Vn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new y1({next:g=>{d.Za(),o.enqueueAndForget(()=>a1(s,p));const w=g.docs.has(l);!w&&g.fromCache?c.reject(new $(V.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&g.fromCache&&u&&u.source==="server"?c.reject(new $(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new l1(fp(l.path),d,{includeMetadataChanges:!0,_a:!0});return o1(s,p)}(await v1(t),t.asyncQueue,e,n,r)),r.promise}function wD(t,e,n={}){const r=new Vn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new y1({next:g=>{d.Za(),o.enqueueAndForget(()=>a1(s,p)),g.fromCache&&u.source==="server"?c.reject(new $(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new l1(l,d,{includeMetadataChanges:!0,_a:!0});return o1(s,p)}(await v1(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(t,e,n){if(!n)throw new $(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ED(t,e,n,r){if(e===!0&&r===!0)throw new $(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function k_(t){if(!q.isDocumentKey(t))throw new $(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function C_(t){if(q.isDocumentKey(t))throw new $(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function oc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function wn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oc(t);throw new $(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function TD(t,e){if(e<=0)throw new $(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ED("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=w1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ac{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new P_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new P_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new UP;switch(r.type){case"firstParty":return new $P(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=R_.get(n);r&&(W("ComponentProvider","Removing Datastore"),R_.delete(n),r.terminate())}(this),Promise.resolve()}}function ID(t,e,n,r={}){var i;const s=(t=wn(t,ac))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&fs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=rt.MOCK_USER;else{l=Sw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new $(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new rt(c)}t._authCredentials=new FP(new gE(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Br(this.firestore,e,this._query)}}class yt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}}class xr extends Br{constructor(e,n,r){super(e,n,fp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new q(e))}withConverter(e){return new xr(this.firestore,e,this._path)}}function mt(t,e,...n){if(t=Se(t),E1("collection","path",e),t instanceof ac){const r=ye.fromString(e,...n);return C_(r),new xr(t,null,r)}{if(!(t instanceof yt||t instanceof xr))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return C_(r),new xr(t.firestore,null,r)}}function ot(t,e,...n){if(t=Se(t),arguments.length===1&&(e=yE.newId()),E1("doc","path",e),t instanceof ac){const r=ye.fromString(e,...n);return k_(r),new yt(t,null,new q(r))}{if(!(t instanceof yt||t instanceof xr))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return k_(r),new yt(t.firestore,t instanceof xr?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new JE(this,"async_queue_retry"),this.Vu=()=>{const r=gh();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=gh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=gh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Vn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!_a(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Hn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Ap.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Ds extends ac{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new N_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new N_(e),this._firestoreClient=void 0,await e}}}function SD(t,e){const n=typeof t=="object"?t:Gf(),r=typeof t=="string"?t:e||"(default)",i=Ku(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Ew("firestore");s&&ID(i,...s)}return i}function Pp(t){if(t._terminated)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||xD(t),t._firestoreClient}function xD(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new nN(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,w1(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new gD(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vs(Xe.fromBase64String(e))}catch(n){throw new $(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vs(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD=/^__.*__$/;class RD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms):new va(e,this.data,n,this.fieldTransforms)}}class T1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function I1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Op{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Op(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Su(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(I1(this.Cu)&&AD.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class kD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||rc(e)}Qu(e,n,r,i=!1){return new Op({Cu:e,methodName:n,qu:r,path:qe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lp(t){const e=t._freezeSettings(),n=rc(t._databaseId);return new kD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function CD(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Vp("Data must be an object, but it was:",o,r);const l=S1(r,o);let u,c;if(s.merge)u=new Pt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const g=Bd(e,p,n);if(!o.contains(g))throw new $(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);A1(d,g)||d.push(g)}u=new Pt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new RD(new Et(l),u,c)}class uc extends Np{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof uc}}function PD(t,e,n,r){const i=t.Qu(1,e,n);Vp("Data must be an object, but it was:",i,r);const s=[],o=Et.empty();Ti(r,(u,c)=>{const d=Mp(e,u,n);c=Se(c);const p=i.Nu(d);if(c instanceof uc)s.push(d);else{const g=Ia(c,p);g!=null&&(s.push(d),o.set(d,g))}});const l=new Pt(s);return new T1(o,l,i.fieldTransforms)}function ND(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Bd(e,r,n)],u=[i];if(s.length%2!=0)throw new $(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(Bd(e,s[g])),u.push(s[g+1]);const c=[],d=Et.empty();for(let g=l.length-1;g>=0;--g)if(!A1(c,l[g])){const w=l[g];let x=u[g];x=Se(x);const P=o.Nu(w);if(x instanceof uc)c.push(w);else{const k=Ia(x,P);k!=null&&(c.push(w),d.set(w,k))}}const p=new Pt(c);return new T1(d,p,o.fieldTransforms)}function DD(t,e,n,r=!1){return Ia(n,t.Qu(r?4:3,e))}function Ia(t,e){if(x1(t=Se(t)))return Vp("Unsupported field value:",e,t),S1(t,e);if(t instanceof Np)return function(r,i){if(!I1(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Ia(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return SN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ue.fromDate(r);return{timestampValue:Eu(i.serializer,s)}}if(r instanceof Ue){const s=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Eu(i.serializer,s)}}if(r instanceof Dp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof vs)return{bytesValue:$E(i.serializer,r._byteString)};if(r instanceof yt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:_p(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof bp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return pp(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${oc(r)}`)}(t,e)}function S1(t,e){const n={};return _E(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ti(t,(r,i)=>{const s=Ia(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function x1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof Dp||t instanceof vs||t instanceof yt||t instanceof Np||t instanceof bp)}function Vp(t,e,n){if(!x1(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=oc(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Bd(t,e,n){if((e=Se(e))instanceof lc)return e._internalPath;if(typeof e=="string")return Mp(t,e);throw Su("Field path arguments must be of type string or ",t,!1,void 0,n)}const bD=new RegExp("[~\\*/\\[\\]]");function Mp(t,e,n){if(e.search(bD)>=0)throw Su(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new lc(...e.split("."))._internalPath}catch{throw Su(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Su(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(V.INVALID_ARGUMENT,l+t+u)}function A1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new OD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class OD extends R1{data(){return super.data()}}function cc(t,e){return typeof e=="string"?Mp(t,e):e instanceof lc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jp{}class Up extends jp{}function Gi(t,e,...n){let r=[];e instanceof jp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Fp).length,l=s.filter(u=>u instanceof hc).length;if(o>1||o>0&&l>0)throw new $(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class hc extends Up{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new hc(e,n,r)}_apply(e){const n=this._parse(e);return k1(e._query,n),new Br(e.firestore,e.converter,Dd(e._query,n))}_parse(e){const n=Lp(e.firestore);return function(s,o,l,u,c,d,p){let g;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new $(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){L_(p,d);const w=[];for(const x of p)w.push(O_(u,s,x));g={arrayValue:{values:w}}}else g=O_(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||L_(p,d),g=DD(l,o,p,d==="in"||d==="not-in");return Le.create(c,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function fr(t,e,n){const r=e,i=cc("where",t);return hc._create(i,r,n)}class Fp extends jp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Fp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:rn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)k1(o,u),o=Dd(o,u)}(e._query,n),new Br(e.firestore,e.converter,Dd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Bp extends Up{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Bp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ta(s,o)}(e._query,this._field,this._direction);return new Br(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Cs(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function D_(t,e="asc"){const n=e,r=cc("orderBy",t);return Bp._create(r,n)}class zp extends Up{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new zp(e,n,r)}_apply(e){return new Br(e.firestore,e.converter,_u(e._query,this._limit,this._limitType))}}function b_(t){return TD("limit",t),zp._create("limit",t,"F")}function O_(t,e,n){if(typeof(n=Se(n))=="string"){if(n==="")throw new $(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!RE(e)&&n.indexOf("/")!==-1)throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ye.fromString(n));if(!q.isDocumentKey(r))throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return e_(t,new q(r))}if(n instanceof yt)return e_(t,n._key);throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oc(n)}.`)}function L_(t,e){if(!Array.isArray(t)||t.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function k1(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class VD{convertValue(e,n="none"){switch(yi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ti(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Pe(o.doubleValue));return new bp(s)}convertGeoPoint(e){return new Dp(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=up(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Jo(e));default:return null}}convertTimestamp(e){const n=Pr(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ye.fromString(e);ce(QE(r));const i=new Zo(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Hn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class C1 extends R1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ol(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(cc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ol extends C1{data(e={}){return super.data(e)}}class jD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new fo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ol(this._firestore,this._userDataWriter,r.key,r,new fo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Ol(i._firestore,i._userDataWriter,l.doc.key,l.doc,new fo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ol(i._firestore,i._userDataWriter,l.doc.key,l.doc,new fo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:UD(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function UD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(t){t=wn(t,yt);const e=wn(t.firestore,Ds);return vD(Pp(e),t._key).then(n=>FD(e,t,n))}class N1 extends VD{constructor(e){super(),this.firestore=e}convertBytes(e){return new vs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,n)}}function Xt(t){t=wn(t,Br);const e=wn(t.firestore,Ds),n=Pp(e),r=new N1(e);return LD(t._query),wD(n,t._query).then(i=>new jD(e,r,t,i))}function si(t,e,n){t=wn(t,yt);const r=wn(t.firestore,Ds),i=MD(t.converter,e,n);return Hp(r,[CD(Lp(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,tn.none())])}function ia(t,e,n,...r){t=wn(t,yt);const i=wn(t.firestore,Ds),s=Lp(i);let o;return o=typeof(e=Se(e))=="string"||e instanceof lc?ND(s,"updateDoc",t._key,e,n,r):PD(s,"updateDoc",t._key,e),Hp(i,[o.toMutation(t._key,tn.exists(!0))])}function $p(t){return Hp(wn(t.firestore,Ds),[new mp(t._key,tn.none())])}function Hp(t,e){return function(r,i){const s=new Vn;return r.asyncQueue.enqueueAndForget(async()=>lD(await _D(r),i,s)),s.promise}(Pp(t),e)}function FD(t,e,n){const r=n.docs.get(e._key),i=new N1(t);return new C1(t,i,e._key,r,new fo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ks=i})(Ei),di(new kr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Ds(new BP(r.getProvider("auth-internal")),new WP(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new $(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zo(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),mn(Qy,"4.7.3",e),mn(Qy,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1="firebasestorage.googleapis.com",b1="storageBucket",BD=2*60*1e3,zD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends En{constructor(e,n,r=0){super(_h(e),`Firebase Storage: ${n} (${_h(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ce.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _h(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ke;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ke||(ke={}));function _h(t){return"storage/"+t}function Wp(){const t="An unknown error occurred, please check the error payload for server response.";return new Ce(ke.UNKNOWN,t)}function $D(t){return new Ce(ke.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function HD(t){return new Ce(ke.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function WD(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ce(ke.UNAUTHENTICATED,t)}function qD(){return new Ce(ke.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function KD(t){return new Ce(ke.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function GD(){return new Ce(ke.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function QD(){return new Ce(ke.CANCELED,"User canceled the upload/download.")}function XD(t){return new Ce(ke.INVALID_URL,"Invalid URL '"+t+"'.")}function YD(t){return new Ce(ke.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function JD(){return new Ce(ke.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+b1+"' property when initializing the app?")}function ZD(){return new Ce(ke.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function eb(){return new Ce(ke.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function tb(t){return new Ce(ke.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function zd(t){return new Ce(ke.INVALID_ARGUMENT,t)}function O1(){return new Ce(ke.APP_DELETED,"The Firebase app was deleted.")}function nb(t){return new Ce(ke.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ko(t,e){return new Ce(ke.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function to(t){throw new Ce(ke.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Nt.makeFromUrl(e,n)}catch{return new Nt(e,"")}if(r.path==="")return r;throw YD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",w=new RegExp(`^https?://${p}/${d}/b/${i}/o${g}`,"i"),x={bucket:1,path:3},P=n===D1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",I=new RegExp(`^https?://${P}/${i}/${k}`,"i"),E=[{regex:l,indices:u,postModify:s},{regex:w,indices:x,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<E.length;b++){const M=E[b],U=M.regex.exec(e);if(U){const S=U[M.indices.bucket];let y=U[M.indices.path];y||(y=""),r=new Nt(S,y),M.postModify(r);break}}if(r==null)throw XD(e);return r}}class rb{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...k){c||(c=!0,e.apply(null,k))}function p(k){i=setTimeout(()=>{i=null,t(w,u())},k)}function g(){s&&clearTimeout(s)}function w(k,...I){if(c){g();return}if(k){g(),d.call(null,k,...I);return}if(u()||o){g(),d.call(null,k,...I);return}r<64&&(r*=2);let E;l===1?(l=2,E=0):E=(r+Math.random())*1e3,p(E)}let x=!1;function P(k){x||(x=!0,g(),!c&&(i!==null?(k||(l=2),clearTimeout(i),p(0)):k||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function sb(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(t){return t!==void 0}function ab(t){return typeof t=="object"&&!Array.isArray(t)}function qp(t){return typeof t=="string"||t instanceof String}function V_(t){return Kp()&&t instanceof Blob}function Kp(){return typeof Blob<"u"}function M_(t,e,n,r){if(r<e)throw zd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw zd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function L1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var oi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(oi||(oi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,n,r,i,s,o,l,u,c,d,p,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,x)=>{this.resolve_=w,this.reject_=x,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ul(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===oi.NO_ERROR,u=s.getStatus();if(!l||lb(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===oi.ABORT;r(!1,new ul(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new ul(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());ob(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Wp();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?O1():QD();o(u)}else{const u=GD();o(u)}};this.canceled_?n(!1,new ul(!1,null,!0)):this.backoffId_=ib(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&sb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ul{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function cb(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function hb(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function db(t,e){e&&(t["X-Firebase-GMPID"]=e)}function fb(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function pb(t,e,n,r,i,s,o=!0){const l=L1(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return db(c,e),cb(c,n),hb(c,s),fb(c,r),new ub(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function gb(...t){const e=mb();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Kp())return new Blob(t);throw new Ce(ke.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function yb(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(t){if(typeof atob>"u")throw tb("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class vh{constructor(e,n){this.data=e,this.contentType=n||null}}function vb(t,e){switch(t){case dn.RAW:return new vh(V1(e));case dn.BASE64:case dn.BASE64URL:return new vh(M1(t,e));case dn.DATA_URL:return new vh(Eb(e),Tb(e))}throw Wp()}function V1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function wb(t){let e;try{e=decodeURIComponent(t)}catch{throw ko(dn.DATA_URL,"Malformed data URL.")}return V1(e)}function M1(t,e){switch(t){case dn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ko(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case dn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ko(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=_b(e)}catch(i){throw i.message.includes("polyfill")?i:ko(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class j1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ko(dn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Ib(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Eb(t){const e=new j1(t);return e.base64?M1(dn.BASE64,e.rest):wb(e.rest)}function Tb(t){return new j1(t).contentType}function Ib(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n){let r=0,i="";V_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(V_(this.data_)){const r=this.data_,i=yb(r,e,n);return i===null?null:new lr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new lr(r,!0)}}static getBlob(...e){if(Kp()){const n=e.map(r=>r instanceof lr?r.data_:r);return new lr(gb.apply(null,n))}else{const n=e.map(o=>qp(o)?vb(dn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new lr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1(t){let e;try{e=JSON.parse(t)}catch{return null}return ab(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function xb(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function F1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(t,e){return e}class ft{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||Ab}}let cl=null;function Rb(t){return!qp(t)||t.length<2?t:F1(t)}function B1(){if(cl)return cl;const t=[];t.push(new ft("bucket")),t.push(new ft("generation")),t.push(new ft("metageneration")),t.push(new ft("name","fullPath",!0));function e(s,o){return Rb(o)}const n=new ft("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ft("size");return i.xform=r,t.push(i),t.push(new ft("timeCreated")),t.push(new ft("updated")),t.push(new ft("md5Hash",null,!0)),t.push(new ft("cacheControl",null,!0)),t.push(new ft("contentDisposition",null,!0)),t.push(new ft("contentEncoding",null,!0)),t.push(new ft("contentLanguage",null,!0)),t.push(new ft("contentType",null,!0)),t.push(new ft("metadata","customMetadata",!0)),cl=t,cl}function kb(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Nt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function Cb(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return kb(r,t),r}function z1(t,e,n){const r=U1(e);return r===null?null:Cb(t,r,n)}function Pb(t,e,n,r){const i=U1(e);if(i===null||!qp(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,p=t.fullPath,g="/b/"+o(d)+"/o/"+o(p),w=Gp(g,n,r),x=L1({alt:"media",token:c});return w+x})[0]}function Nb(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class $1{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(t){if(!t)throw Wp()}function Db(t,e){function n(r,i){const s=z1(t,i,e);return H1(s!==null),s}return n}function bb(t,e){function n(r,i){const s=z1(t,i,e);return H1(s!==null),Pb(s,i,t.host,t._protocol)}return n}function W1(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=qD():i=WD():n.getStatus()===402?i=HD(t.bucket):n.getStatus()===403?i=KD(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Ob(t){const e=W1(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=$D(t.path)),s.serverResponse=i.serverResponse,s}return n}function Lb(t,e,n){const r=e.fullServerUrl(),i=Gp(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new $1(i,s,bb(t,n),o);return l.errorHandler=Ob(e),l}function Vb(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Mb(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Vb(null,e)),r}function jb(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let E="";for(let b=0;b<2;b++)E=E+Math.random().toString().slice(2);return E}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=Mb(e,r,i),d=Nb(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,g=`\r
--`+u+"--",w=lr.getBlob(p,r,g);if(w===null)throw ZD();const x={name:c.fullPath},P=Gp(s,t.host,t._protocol),k="POST",I=t.maxUploadRetryTime,_=new $1(P,k,Db(t,n),I);return _.urlParams=x,_.headers=o,_.body=w.uploadData(),_.errorHandler=W1(e),_}class Ub{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=oi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=oi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=oi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw to("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw to("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw to("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw to("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw to("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Fb extends Ub{initXhr(){this.xhr_.responseType="text"}}function q1(){return new Fb}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n){this._service=e,n instanceof Nt?this._location=n:this._location=Nt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new _i(e,n)}get root(){const e=new Nt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return F1(this._location.path)}get storage(){return this._service}get parent(){const e=Sb(this._location.path);if(e===null)return null;const n=new Nt(this._location.bucket,e);return new _i(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw nb(e)}}function Bb(t,e,n){t._throwIfRoot("uploadBytes");const r=jb(t.storage,t._location,B1(),new lr(e,!0),n);return t.storage.makeRequestWithTokens(r,q1).then(i=>({metadata:i,ref:t}))}function zb(t){t._throwIfRoot("getDownloadURL");const e=Lb(t.storage,t._location,B1());return t.storage.makeRequestWithTokens(e,q1).then(n=>{if(n===null)throw eb();return n})}function $b(t,e){const n=xb(t._location.path,e),r=new Nt(t._location.bucket,n);return new _i(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(t){return/^[A-Za-z]+:\/\//.test(t)}function Wb(t,e){return new _i(t,e)}function K1(t,e){if(t instanceof Qp){const n=t;if(n._bucket==null)throw JD();const r=new _i(n,n._bucket);return e!=null?K1(r,e):r}else return e!==void 0?$b(t,e):t}function qb(t,e){if(e&&Hb(e)){if(t instanceof Qp)return Wb(t,e);throw zd("To use ref(service, url), the first argument must be a Storage instance.")}else return K1(t,e)}function j_(t,e){const n=e==null?void 0:e[b1];return n==null?null:Nt.makeFromBucketSpec(n,t)}function Kb(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Sw(i,t.app.options.projectId))}class Qp{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=D1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=BD,this._maxUploadRetryTime=zD,this._requests=new Set,i!=null?this._bucket=Nt.makeFromBucketSpec(i,this._host):this._bucket=j_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Nt.makeFromBucketSpec(this._url,e):this._bucket=j_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){M_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){M_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new _i(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new rb(O1());{const o=pb(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const U_="@firebase/storage",F_="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1="storage";function Gb(t,e,n){return t=Se(t),Bb(t,e,n)}function Qb(t){return t=Se(t),zb(t)}function Xb(t,e){return t=Se(t),qb(t,e)}function Yb(t=Gf(),e){t=Se(t);const r=Ku(t,G1).getImmediate({identifier:e}),i=Ew("storage");return i&&Jb(r,...i),r}function Jb(t,e,n,r={}){Kb(t,e,n,r)}function Zb(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Qp(n,r,i,e,Ei)}function eO(){di(new kr(G1,Zb,"PUBLIC").setMultipleInstances(!0)),mn(U_,F_,""),mn(U_,F_,"esm2017")}eO();const tO={apiKey:"AIzaSyBoxEbZW_sHHxFHxUWChljeW8kIHzeIslQ",authDomain:"studio-9484462989-432c2.firebaseapp.com",projectId:"studio-9484462989-432c2",storageBucket:"studio-9484462989-432c2.firebasestorage.app",messagingSenderId:"1098551316889",appId:"1:1098551316889:web:4e4dce65314fbf56664308"},Xp=Rw(tO),no=MP(Xp),de=SD(Xp),nO=Yb(Xp),Q1=Co.createContext();function Si(){return O.useContext(Q1)}function rO({children:t}){const[e,n]=O.useState(null),[r,i]=O.useState(!0);async function s(d,p,g){const w=await wC(no,d,p);return await Jw(w.user,{displayName:g}),await si(ot(de,"users",w.user.uid),{email:w.user.email,displayName:g,role:"user",createdAt:new Date().toISOString()}),w}function o(d,p){return EC(no,d,p)}async function l(){const d=new kn,p=await qC(no,d),g=p.user,w=ot(de,"users",g.uid);return(await P1(w)).exists()||await si(w,{email:g.email,displayName:g.displayName,photoURL:g.photoURL,role:"user",createdAt:new Date().toISOString()}),p}function u(){return AC(no)}O.useEffect(()=>xC(no,async p=>{n(p||null),i(!1)}),[]);const c={currentUser:e,signup:s,login:o,logout:u,googleSignIn:l};return m.jsx(Q1.Provider,{value:c,children:!r&&t})}const iO=O.createContext();function sO({children:t}){const[e,n]=O.useState(localStorage.getItem("theme")||"dark");O.useEffect(()=>{const i=window.document.documentElement;i.classList.remove("light","dark"),i.classList.add(e),localStorage.setItem("theme",e)},[e]);const r=()=>{n(i=>i==="dark"?"light":"dark")};return m.jsx(iO.Provider,{value:{theme:e,toggleTheme:r},children:t})}var oO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const aO=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),lO=(t,e)=>{const n=O.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:l,...u},c)=>O.createElement("svg",{ref:c,...oO,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:`lucide lucide-${aO(t)}`,...u},[...e.map(([d,p])=>O.createElement(d,p)),...(Array.isArray(l)?l:[l])||[]]));return n.displayName=`${t}`,n};var ve=lO;const B_=ve("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),uO=ve("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]),cO=ve("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),hO=ve("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),dO=ve("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),X1=ve("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]),fO=ve("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),pO=ve("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),mO=ve("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),gO=ve("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]),$d=ve("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),yO=ve("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),Yp=ve("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),_O=ve("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),Jp=ve("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]),Y1=ve("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),vO=ve("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]),wO=ve("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Hd=ve("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",key:"3xmgem"}]]),EO=ve("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),Zp=ve("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),TO=ve("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]),xu=ve("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),z_=ve("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),J1=ve("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function IO(){const t=O.useRef(),e=O.useRef(),n=O.useRef(),r=O.useRef(),{signup:i,googleSignIn:s}=Si(),[o,l]=O.useState(""),[u,c]=O.useState(!1),d=As();async function p(w){if(w.preventDefault(),e.current.value!==n.current.value)return l("Passwords do not match");try{l(""),c(!0),await i(t.current.value,e.current.value,r.current.value),le.success("Account created!"),d("/")}catch(x){console.error(x),l("Failed to create an account: "+x.message),le.error("Failed to create account")}c(!1)}async function g(){try{l(""),c(!0),await s(),le.success("Logged in with Google!"),d("/")}catch(w){console.error(w),l("Failed to sign in with Google"),le.error("Google Sign In Failed")}c(!1)}return m.jsx("div",{className:"container flex items-center justify-center",style:{minHeight:"80vh"},children:m.jsxs("div",{className:"glass-card w-full",style:{maxWidth:"400px",padding:"2rem"},children:[m.jsx("h2",{className:"text-center mb-4",children:"Create Account"}),o&&m.jsx("div",{style:{color:"#ef4444",marginBottom:"1rem",textAlign:"center"},children:o}),m.jsxs("form",{onSubmit:p,className:"flex flex-col gap-4",children:[m.jsxs("div",{className:"form-group",children:[m.jsxs("div",{className:"flex items-center gap-2 mb-2",style:{color:"var(--text-secondary)"},children:[m.jsx(xu,{size:16}),m.jsx("label",{children:"Display Name"})]}),m.jsx("input",{type:"text",ref:r,required:!0,placeholder:"John Doe"})]}),m.jsxs("div",{className:"form-group",children:[m.jsxs("div",{className:"flex items-center gap-2 mb-2",style:{color:"var(--text-secondary)"},children:[m.jsx(Yp,{size:16}),m.jsx("label",{children:"Email"})]}),m.jsx("input",{type:"email",ref:t,required:!0,placeholder:"john@example.com"})]}),m.jsxs("div",{className:"form-group",children:[m.jsxs("div",{className:"flex items-center gap-2 mb-2",style:{color:"var(--text-secondary)"},children:[m.jsx($d,{size:16}),m.jsx("label",{children:"Password"})]}),m.jsx("input",{type:"password",ref:e,required:!0,placeholder:"••••••••"})]}),m.jsxs("div",{className:"form-group",children:[m.jsxs("div",{className:"flex items-center gap-2 mb-2",style:{color:"var(--text-secondary)"},children:[m.jsx($d,{size:16}),m.jsx("label",{children:"Confirm Password"})]}),m.jsx("input",{type:"password",ref:n,required:!0,placeholder:"••••••••"})]}),m.jsx("button",{disabled:u,className:"btn btn-primary mt-4",type:"submit",children:"Sign Up"})]}),m.jsx("div",{className:"mt-4 flex flex-col gap-2",children:m.jsxs("button",{disabled:u,onClick:g,className:"btn btn-secondary w-full",children:[m.jsx(X1,{size:18})," Sign up with Google"]})}),m.jsxs("div",{className:"w-full text-center mt-4",style:{color:"var(--text-secondary)"},children:["Already have an account? ",m.jsx($u,{to:"/login",children:"Log In"})]})]})})}function SO(){const t=O.useRef(),e=O.useRef(),{login:n,googleSignIn:r}=Si(),[i,s]=O.useState(""),[o,l]=O.useState(!1),u=As();async function c(p){p.preventDefault();try{s(""),l(!0),await n(t.current.value,e.current.value),le.success("Logged in successfully!"),u("/")}catch(g){console.error(g),s("Failed to sign in: "+g.message),le.error("Failed to sign in")}l(!1)}async function d(){try{s(""),l(!0),await r(),le.success("Logged in with Google!"),u("/")}catch(p){console.error(p),s("Failed to sign in with Google"),le.error("Google Sign In Failed")}l(!1)}return m.jsx("div",{className:"container flex items-center justify-center",style:{minHeight:"80vh"},children:m.jsxs("div",{className:"glass-card w-full",style:{maxWidth:"400px",padding:"2rem"},children:[m.jsx("h2",{className:"text-center mb-4",children:"Log In"}),i&&m.jsx("div",{style:{color:"#ef4444",marginBottom:"1rem",textAlign:"center"},children:i}),m.jsxs("form",{onSubmit:c,className:"flex flex-col gap-4",children:[m.jsxs("div",{className:"form-group",children:[m.jsxs("div",{className:"flex items-center gap-2 mb-2",style:{color:"var(--text-secondary)"},children:[m.jsx(Yp,{size:16}),m.jsx("label",{children:"Email"})]}),m.jsx("input",{type:"email",ref:t,required:!0,placeholder:"john@example.com"})]}),m.jsxs("div",{className:"form-group",children:[m.jsxs("div",{className:"flex items-center gap-2 mb-2",style:{color:"var(--text-secondary)"},children:[m.jsx($d,{size:16}),m.jsx("label",{children:"Password"})]}),m.jsx("input",{type:"password",ref:e,required:!0,placeholder:"••••••••"})]}),m.jsx("button",{disabled:o,className:"btn btn-primary mt-4",type:"submit",children:"Log In"})]}),m.jsx("div",{className:"mt-4 flex flex-col gap-2",children:m.jsxs("button",{disabled:o,onClick:d,className:"btn btn-secondary w-full",children:[m.jsx(X1,{size:18})," Log in with Google"]})}),m.jsxs("div",{className:"w-full text-center mt-4",style:{color:"var(--text-secondary)"},children:["Need an account? ",m.jsx($u,{to:"/signup",children:"Sign Up"})]})]})})}function xO(){var k;const{currentUser:t,logout:e}=Si(),n=O.useRef(),r=O.useRef(),[i,s]=O.useState(null),[o,l]=O.useState(null),[u,c]=O.useState(""),[d,p]=O.useState(!1),g=As();function w(I){I.target.files[0]&&(s(I.target.files[0]),l(URL.createObjectURL(I.target.files[0])))}async function x(){c("");try{await e(),g("/login")}catch{c("Failed to log out")}}async function P(I){I.preventDefault(),p(!0),c("");try{let _=t.photoURL;if(i){const E=Xb(nO,`users/${t.uid}/profile.png`);await Gb(E,i),_=await Qb(E)}if(n.current.value!==t.displayName||i){await Jw(t,{displayName:n.current.value,photoURL:_});const E=ot(de,"users",t.uid);await ia(E,{displayName:n.current.value,photoURL:_}),le.success("Profile updated!")}}catch(_){c("Failed to update profile"),console.error(_)}p(!1)}return m.jsx("div",{className:"container flex items-center justify-center",style:{minHeight:"80vh"},children:m.jsxs("div",{className:"card w-full",style:{maxWidth:"400px",padding:"2rem"},children:[m.jsx("h2",{className:"text-center mb-4",children:"Profile"}),u&&m.jsx("div",{style:{color:"#ef4444",marginBottom:"1rem",textAlign:"center"},children:u}),m.jsxs("div",{className:"flex justify-center mb-6 relative",onClick:()=>r.current.click(),style:{cursor:"pointer"},title:"Click to update profile picture",children:[m.jsx("div",{style:{width:"100px",height:"100px",borderRadius:"50%",background:"var(--accent-light)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem",overflow:"hidden",position:"relative",border:"2px solid var(--bg-secondary)",transition:"transform 0.2s"},className:"hover:scale-105 shadow-md",children:o||t!=null&&t.photoURL?m.jsx("img",{src:o||t.photoURL,alt:"Profile",style:{width:"100%",height:"100%",objectFit:"cover"}}):((k=t==null?void 0:t.displayName)==null?void 0:k[0])||m.jsx(xu,{})}),m.jsx("input",{type:"file",id:"photo-upload",ref:r,onChange:w,style:{display:"none"},accept:"image/*"})]}),m.jsxs("form",{onSubmit:P,className:"flex flex-col gap-4",children:[m.jsxs("div",{className:"form-group",children:[m.jsxs("div",{className:"flex items-center gap-2 mb-2",style:{color:"var(--text-secondary)"},children:[m.jsx(Yp,{size:16}),m.jsx("label",{children:"Email"})]}),m.jsx("input",{type:"email",value:t==null?void 0:t.email,disabled:!0,style:{opacity:.7,cursor:"not-allowed"}})]}),m.jsxs("div",{className:"form-group",children:[m.jsxs("div",{className:"flex items-center gap-2 mb-2",style:{color:"var(--text-secondary)"},children:[m.jsx(xu,{size:16}),m.jsx("label",{children:"Display Name"})]}),m.jsx("input",{type:"text",ref:n,defaultValue:t==null?void 0:t.displayName,placeholder:"Display Name"})]}),m.jsx("button",{disabled:d,className:"btn btn-primary mt-4",type:"submit",children:"Update Profile"})]}),m.jsx("div",{className:"w-full text-center mt-4",children:m.jsx("button",{onClick:x,className:"btn btn-secondary w-full",children:"Log Out"})}),m.jsx("div",{className:"w-full text-center mt-4",children:m.jsx($u,{to:"/",children:"Back to Home"})})]})})}const AO=()=>{const[t,e]=O.useState([]),[n,r]=O.useState(!0),[i,s]=O.useState(null),[o,l]=O.useState(!1),[u,c]=O.useState({name:"",shortName:"",threeLetterName:"",crest:""});O.useEffect(()=>{d()},[]);const d=async()=>{r(!0);try{const I=(await Xt(mt(de,"teams"))).docs.map(_=>({id:_.id,..._.data()}));e(I)}catch(k){console.error("Error fetching teams:",k),le.error("Failed to fetch teams")}finally{r(!1)}},p=k=>{const{name:I,value:_}=k.target;c(E=>({...E,[I]:_}))},g=()=>{c({name:"",shortName:"",threeLetterName:"",crest:""}),s(null),l(!1)},w=async k=>{k.preventDefault();try{const I={name:u.name,short_name:u.shortName,three_letter_name:u.threeLetterName.toUpperCase(),crest:u.crest};if(i)await ia(ot(de,"teams",i.id),I),le.success("Team updated successfully");else{const _=ot(mt(de,"teams"));await si(_,I),le.success("Team created successfully")}d(),g()}catch(I){console.error(I),le.error("Operation failed")}},x=k=>{s(k),c({name:k.name,shortName:k.short_name||k.name,threeLetterName:k.three_letter_name||"",crest:k.crest||""}),l(!0)},P=async k=>{if(window.confirm("Are you sure you want to delete this team?"))try{await $p(ot(de,"teams",k)),le.success("Team deleted successfully"),d()}catch(I){console.error(I),le.error("Failed to delete team")}};return n?m.jsx("div",{className:"p-8 text-center",children:"Loading teams..."}):m.jsxs("div",{className:"space-y-6",children:[m.jsxs("div",{className:"flex justify-between items-center",children:[m.jsxs("div",{children:[m.jsx("h2",{className:"text-xl font-bold text-gray-900",children:"Team Management"}),m.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Manage football teams for the prediction system."})]}),m.jsxs("button",{onClick:()=>l(!0),className:"btn btn-primary",children:[m.jsx(Y1,{className:"h-4 w-4 mr-2"}),"Add Team"]})]}),o&&m.jsxs("div",{className:"card",children:[m.jsx("div",{className:"card-header",children:m.jsx("h3",{className:"text-lg font-medium text-gray-900",children:i?"Edit Team":"Add New Team"})}),m.jsx("div",{className:"card-body",children:m.jsxs("form",{onSubmit:w,className:"space-y-4",children:[m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[m.jsxs("div",{children:[m.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Team Name *"}),m.jsx("input",{type:"text",id:"name",name:"name",value:u.name,onChange:p,className:"input mt-1",placeholder:"e.g., Manchester United",required:!0})]}),m.jsxs("div",{children:[m.jsx("label",{htmlFor:"shortName",className:"block text-sm font-medium text-gray-700",children:"Short Name *"}),m.jsx("input",{type:"text",id:"shortName",name:"shortName",value:u.shortName,onChange:p,className:"input mt-1",placeholder:"e.g., Man Utd",required:!0})]})]}),m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[m.jsxs("div",{children:[m.jsx("label",{htmlFor:"threeLetterName",className:"block text-sm font-medium text-gray-700",children:"Three Letter Code *"}),m.jsx("input",{type:"text",id:"threeLetterName",name:"threeLetterName",value:u.threeLetterName,onChange:p,className:"input mt-1",placeholder:"e.g., MUN",maxLength:3,required:!0})]}),m.jsxs("div",{children:[m.jsx("label",{htmlFor:"crest",className:"block text-sm font-medium text-gray-700",children:"Crest URL"}),m.jsx("input",{type:"url",id:"crest",name:"crest",value:u.crest,onChange:p,className:"input mt-1",placeholder:"https://example.com/crest.png"})]})]}),m.jsxs("div",{className:"flex justify-end space-x-3 pt-4",children:[m.jsxs("button",{type:"button",onClick:g,className:"btn btn-secondary",children:[m.jsx(J1,{className:"h-4 w-4 mr-2"}),"Cancel"]}),m.jsxs("button",{type:"submit",className:"btn btn-primary",children:[m.jsx(vO,{className:"h-4 w-4 mr-2"}),i?"Update Team":"Create Team"]})]})]})})]}),m.jsxs("div",{className:"card",children:[m.jsx("div",{className:"card-header",children:m.jsxs("h3",{className:"text-lg font-medium text-gray-900",children:["Teams (",t.length,")"]})}),m.jsx("div",{className:"card-body",children:m.jsx("div",{className:"overflow-x-auto",children:m.jsxs("table",{className:"w-full text-left border-collapse",children:[m.jsx("thead",{className:"bg-gray-50 border-b",children:m.jsxs("tr",{children:[m.jsx("th",{className:"p-4 text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Team"}),m.jsx("th",{className:"p-4 text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Short Name"}),m.jsx("th",{className:"p-4 text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Code"}),m.jsx("th",{className:"p-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),m.jsx("tbody",{children:t.map(k=>m.jsxs("tr",{className:"border-b last:border-0 hover:bg-gray-50",children:[m.jsx("td",{className:"p-4",children:m.jsxs("div",{className:"flex items-center",children:[k.crest&&m.jsx("img",{className:"h-8 w-8 object-contain mr-3",src:k.crest,alt:`${k.name} crest`,onError:I=>{I.target.style.display="none"}}),m.jsx("div",{children:m.jsx("div",{className:"text-sm font-medium text-gray-900",children:k.name})})]})}),m.jsx("td",{className:"p-4 text-sm text-gray-900",children:k.short_name}),m.jsx("td",{className:"p-4",children:m.jsx("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800",children:k.three_letter_name})}),m.jsx("td",{className:"p-4 text-right",children:m.jsxs("div",{className:"flex justify-end space-x-2",children:[m.jsx("button",{onClick:()=>x(k),className:"p-1 text-blue-600 hover:text-blue-800",title:"Edit team",children:m.jsx(Jp,{size:16})}),m.jsx("button",{onClick:()=>P(k.id),className:"p-1 text-red-600 hover:text-red-800",title:"Delete team",children:m.jsx(Zp,{size:16})})]})})]},k.id))})]})})})]})]})},RO=()=>{const[t,e]=O.useState([]),[n,r]=O.useState([]),[i,s]=O.useState(!0),[o,l]=O.useState(!1),[u,c]=O.useState(null),[d,p]=O.useState(!1);O.useState(1);const[g,w]=O.useState({matchday:"",status:"",team:""}),[x,P]=O.useState({matchday:"",homeTeamId:"",awayTeamId:"",referee:"",startDate:"",status:"TIMED",fullTimeScoreHome:"",fullTimeScoreAway:"",winner:""});O.useEffect(()=>{k()},[]);const k=async()=>{try{s(!0);const T=(await Xt(mt(de,"matches"))).docs.map(N=>({id:N.id,...N.data()})),C=(await Xt(mt(de,"teams"))).docs.map(N=>({id:N.id,...N.data()}));e(T),r(C)}catch(y){console.error(y),le.error("Failed to fetch data")}finally{s(!1)}},I=async()=>{var T,A,C,N,R,ut,sn;if(!window.confirm("This will fetch matches from the Football Data API. Continue?"))return;l(!0);const y="7431be5dbb0d474a8ac3360c14733628";try{const z=(await(await fetch("/api/football/competitions/SA/matches",{headers:{"X-Auth-Token":y}})).json()).matches||[];let K=0,J=0;for(const Z of z){let ae=null,pe=null;const an=ct=>n.find($r=>$r.three_letter_name===ct),Vt=async ct=>{const $r=Gi(mt(de,"teams"),fr("three_letter_name","==",ct.tla)),Ai=await Xt($r);if(Ai.empty){const Ri=ot(mt(de,"teams"));return await si(Ri,{name:ct.name,short_name:ct.shortName||ct.name,three_letter_name:ct.tla,crest:ct.crest}),J++,Ri.id}else return Ai.docs[0].id};ae=await Vt(Z.homeTeam),pe=await Vt(Z.awayTeam);const Ht=Gi(mt(de,"matches"),fr("matchday","==",Z.matchday),fr("home_team","==",ae),fr("away_team","==",pe)),At=await Xt(Ht),dc=Z.status==="FINISHED"?"FINISHED":"TIMED";let xi=null;(T=Z.score)!=null&&T.winner&&(Z.score.winner==="HOME_TEAM"?xi="1":Z.score.winner==="AWAY_TEAM"?xi="2":Z.score.winner==="DRAW"&&(xi="X"));const zr={matchday:Z.matchday,home_team:ae,away_team:pe,referee:((C=(A=Z.referees)==null?void 0:A[0])==null?void 0:C.name)||null,start_date:Z.utcDate,status:dc,full_time_score_home:((R=(N=Z.score)==null?void 0:N.fullTime)==null?void 0:R.home)??null,full_time_score_away:((sn=(ut=Z.score)==null?void 0:ut.fullTime)==null?void 0:sn.away)??null,winner:xi};if(At.empty)await si(ot(mt(de,"matches")),zr),K++;else{const ct=At.docs[0].id;await ia(ot(de,"matches",ct),zr)}}le.success(`Imported ${K} new matches!`),k()}catch(Tn){console.error(Tn),le.error("Failed to fetch external matches: "+Tn.message)}finally{l(!1)}},_=y=>{const T=n.find(A=>A.id===y);return T?T.short_name:"Unknown"},E=y=>{P({...x,[y.target.name]:y.target.value})},b=y=>{c(y),P({matchday:y.matchday,homeTeamId:y.home_team,awayTeamId:y.away_team,referee:y.referee||"",startDate:y.start_date?y.start_date.slice(0,16):"",status:y.status,fullTimeScoreHome:y.full_time_score_home||"",fullTimeScoreAway:y.full_time_score_away||"",winner:y.winner||""}),p(!0)},M=async y=>{y.preventDefault();try{const T={matchday:parseInt(x.matchday),home_team:x.homeTeamId,away_team:x.awayTeamId,referee:x.referee,start_date:new Date(x.startDate).toISOString(),status:x.status,full_time_score_home:parseInt(x.fullTimeScoreHome)||null,full_time_score_away:parseInt(x.fullTimeScoreAway)||null,winner:x.winner||null};u?(await ia(ot(de,"matches",u.id),T),le.success("Match updated")):(await si(ot(mt(de,"matches")),T),le.success("Match created")),p(!1),c(null),k()}catch{le.error("Error saving match")}},U=async y=>{window.confirm("Delete match?")&&(await $p(ot(de,"matches",y)),k())},S=t.filter(y=>!(g.matchday&&y.matchday!=g.matchday||g.status&&y.status!==g.status)).sort((y,T)=>new Date(T.start_date)-new Date(y.start_date));return m.jsxs("div",{className:"space-y-6",children:[m.jsxs("div",{className:"flex justify-between items-center",children:[m.jsxs("div",{children:[m.jsx("h2",{className:"text-xl font-bold",children:"Match Management"}),m.jsx("p",{className:"text-sm text-gray-500",children:"Manage matches and fetch from API"})]}),m.jsxs("div",{className:"flex gap-2",children:[m.jsxs("button",{onClick:I,disabled:o,className:"btn btn-secondary",children:[m.jsx(pO,{size:16}),o?" Fecthing...":" Fetch External"]}),m.jsxs("button",{onClick:()=>{c(null),p(!0)},className:"btn btn-primary",children:[m.jsx(Y1,{size:16})," Add Match"]})]})]}),d&&m.jsxs("div",{className:"card p-4",children:[m.jsxs("h3",{className:"font-bold mb-4",children:[u?"Edit":"Add"," Match"]}),m.jsxs("form",{onSubmit:M,className:"space-y-4",children:[m.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[m.jsxs("div",{children:[m.jsx("label",{children:"Matchday"}),m.jsx("input",{name:"matchday",type:"number",required:!0,value:x.matchday,onChange:E})]}),m.jsxs("div",{children:[m.jsx("label",{children:"Date"}),m.jsx("input",{name:"startDate",type:"datetime-local",required:!0,value:x.startDate,onChange:E})]}),m.jsxs("div",{children:[m.jsx("label",{children:"Status"}),m.jsxs("select",{name:"status",value:x.status,onChange:E,className:"input",children:[m.jsx("option",{value:"TIMED",children:"Scheduled"}),m.jsx("option",{value:"FINISHED",children:"Finished"})]})]})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[m.jsxs("div",{children:[m.jsx("label",{children:"Home Team"}),m.jsxs("select",{name:"homeTeamId",required:!0,value:x.homeTeamId,onChange:E,className:"input",children:[m.jsx("option",{value:"",children:"Select Team"}),n.map(y=>m.jsx("option",{value:y.id,children:y.name},y.id))]})]}),m.jsxs("div",{children:[m.jsx("label",{children:"Away Team"}),m.jsxs("select",{name:"awayTeamId",required:!0,value:x.awayTeamId,onChange:E,className:"input",children:[m.jsx("option",{value:"",children:"Select Team"}),n.map(y=>m.jsx("option",{value:y.id,children:y.name},y.id))]})]})]}),x.status==="FINISHED"&&m.jsxs("div",{className:"grid grid-cols-3 gap-4 border-t pt-4",children:[m.jsx("input",{placeholder:"Home Score",name:"fullTimeScoreHome",type:"number",value:x.fullTimeScoreHome,onChange:E}),m.jsx("input",{placeholder:"Away Score",name:"fullTimeScoreAway",type:"number",value:x.fullTimeScoreAway,onChange:E}),m.jsxs("select",{name:"winner",value:x.winner,onChange:E,className:"input",children:[m.jsx("option",{value:"",children:"Winner"}),m.jsx("option",{value:"1",children:"1 (Home)"}),m.jsx("option",{value:"X",children:"X (Draw)"}),m.jsx("option",{value:"2",children:"2 (Away)"})]})]}),m.jsxs("div",{className:"flex justify-end gap-2",children:[m.jsx("button",{type:"button",onClick:()=>p(!1),className:"btn btn-secondary",children:"Cancel"}),m.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})]})]}),m.jsx("div",{className:"card overflow-hidden",children:m.jsxs("table",{className:"w-full text-left border-collapse",children:[m.jsx("thead",{className:"bg-gray-50 border-b",children:m.jsxs("tr",{children:[m.jsx("th",{className:"p-4",children:"Match"}),m.jsx("th",{className:"p-4",children:"Date"}),m.jsx("th",{className:"p-4",children:"Status"}),m.jsx("th",{className:"p-4 text-right",children:"Actions"})]})}),m.jsx("tbody",{children:S.map(y=>m.jsxs("tr",{className:"border-b last:border-0 hover:bg-gray-50",children:[m.jsxs("td",{className:"p-4",children:[m.jsxs("div",{className:"font-medium",children:[_(y.home_team)," vs ",_(y.away_team)]}),m.jsxs("div",{className:"text-xs text-gray-500",children:["MD ",y.matchday]})]}),m.jsxs("td",{className:"p-4 text-sm text-gray-500",children:[new Date(y.start_date).toLocaleDateString()," ",new Date(y.start_date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]}),m.jsx("td",{className:"p-4",children:m.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${y.status==="FINISHED"?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"}`,children:y.status==="FINISHED"?`${y.full_time_score_home} - ${y.full_time_score_away}`:"Scheduled"})}),m.jsxs("td",{className:"p-4 text-right",children:[m.jsx("button",{onClick:()=>b(y),className:"p-1 hover:text-blue-600",children:m.jsx(Jp,{size:16})}),m.jsx("button",{onClick:()=>U(y.id),className:"p-1 hover:text-red-600",children:m.jsx(Zp,{size:16})})]})]},y.id))})]})})]})};function kO(){const[t,e]=O.useState([]),[n,r]=O.useState(!0),[i,s]=O.useState("overview");O.useEffect(()=>{o()},[]);async function o(){r(!0);try{const w=mt(de,"users"),P=(await Xt(w)).docs.map(k=>({id:k.id,...k.data()}));e(P)}catch(w){console.error("Error fetching users:",w),le.error("Failed to fetch users")}r(!1)}async function l(w,x){if(window.confirm(`Are you sure you want to change this user's role to ${x}?`))try{await ia(ot(de,"users",w),{role:x}),le.success(`User role updated to ${x}`),o()}catch(P){console.error(P),le.error("Failed to update role")}}async function u(w){if(window.confirm("Are you sure you want to delete this user?"))try{await $p(ot(de,"users",w)),le.success("User deleted"),o()}catch(x){console.error(x),le.error("Failed to delete user")}}const c=[{name:"Total Users",value:t.length,icon:z_,change:"+0%",changeType:"increase"},{name:"Active Users",value:t.filter(w=>w.role).length,icon:B_,change:"+0%",changeType:"increase"},{name:"Admins",value:t.filter(w=>w.role==="admin").length,icon:wO,change:"+0",changeType:"increase"},{name:"Managers",value:t.filter(w=>w.role==="manager").length,icon:Hd,change:"+0",changeType:"increase"}],d=[{id:"overview",name:"Overview",icon:B_},{id:"users",name:"User Management",icon:z_},{id:"teams",name:"Team Management",icon:Hd},{id:"matches",name:"Match Management",icon:TO}];if(n)return m.jsx("div",{className:"flex items-center justify-center h-64",children:m.jsx("div",{className:"animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"})});const p=()=>m.jsxs("div",{className:"card",children:[m.jsx("div",{className:"card-header",children:m.jsx("h3",{className:"text-lg leading-6 font-medium text-gray-900",children:"User Management"})}),m.jsx("div",{className:"card-body",children:m.jsx("div",{className:"overflow-x-auto",children:m.jsxs("table",{className:"w-full text-left border-collapse",children:[m.jsx("thead",{className:"bg-gray-50 border-b",children:m.jsxs("tr",{children:[m.jsx("th",{className:"p-4 text-xs font-medium text-gray-500 uppercase tracking-wider",children:"User"}),m.jsx("th",{className:"p-4 text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Role"}),m.jsx("th",{className:"p-4 text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),m.jsx("th",{className:"p-4 text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Joined"}),m.jsx("th",{className:"p-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),m.jsx("tbody",{children:t.map(w=>{var x,P,k,I;return m.jsxs("tr",{className:"border-b last:border-0 hover:bg-gray-50",children:[m.jsx("td",{className:"p-4",children:m.jsxs("div",{className:"flex items-center",children:[m.jsx("div",{className:"flex-shrink-0 h-10 w-10",children:m.jsx("div",{className:"h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center overflow-hidden",children:w.photoURL?m.jsx("img",{src:w.photoURL,alt:"",className:"w-full h-full object-cover"}):m.jsx("span",{className:"text-sm font-medium text-white",children:((P=(x=w.displayName)==null?void 0:x.charAt(0))==null?void 0:P.toUpperCase())||((I=(k=w.email)==null?void 0:k.charAt(0))==null?void 0:I.toUpperCase())||"U"})})}),m.jsxs("div",{className:"ml-4",children:[m.jsx("div",{className:"text-sm font-medium text-gray-900",children:w.displayName||"No Name"}),m.jsx("div",{className:"text-sm text-gray-500",children:w.email})]})]})}),m.jsx("td",{className:"p-4",children:m.jsxs("select",{value:w.role||"user",onChange:_=>l(w.id,_.target.value),className:"text-sm text-gray-900 border border-gray-300 rounded px-2 py-1",children:[m.jsx("option",{value:"user",children:"User"}),m.jsx("option",{value:"manager",children:"Manager"}),m.jsx("option",{value:"admin",children:"Admin"})]})}),m.jsx("td",{className:"p-4",children:m.jsx("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800",children:"Active"})}),m.jsx("td",{className:"p-4 text-sm text-gray-500",children:w.createdAt?new Date(w.createdAt).toLocaleDateString():"N/A"}),m.jsx("td",{className:"p-4 text-right",children:m.jsxs("div",{className:"flex justify-end space-x-2",children:[m.jsx("button",{onClick:()=>{console.log("View user:",w.id)},className:"p-1 text-blue-600 hover:text-blue-800",children:m.jsx(mO,{size:16})}),m.jsx("button",{onClick:()=>{console.log("Edit user:",w.id)},className:"p-1 text-gray-600 hover:text-gray-800",children:m.jsx(Jp,{size:16})}),m.jsx("button",{onClick:()=>u(w.id),className:"p-1 text-red-600 hover:text-red-800",children:m.jsx(Zp,{size:16})})]})})]},w.id)})})]})})})]}),g=()=>{switch(i){case"overview":return m.jsxs("div",{className:"space-y-6",children:[m.jsxs("div",{children:[m.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Admin Dashboard"}),m.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Manage users and monitor application statistics."})]}),m.jsx("div",{className:"grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",children:c.map(w=>m.jsx("div",{className:"card",children:m.jsx("div",{className:"card-body",children:m.jsxs("div",{className:"flex items-center",children:[m.jsx("div",{className:"flex-shrink-0",children:m.jsx(w.icon,{className:"h-6 w-6 text-gray-400"})}),m.jsx("div",{className:"ml-5 w-0 flex-1",children:m.jsxs("dl",{children:[m.jsx("dt",{className:"text-sm font-medium text-gray-500 truncate",children:w.name}),m.jsxs("dd",{className:"flex items-baseline",children:[m.jsx("div",{className:"text-2xl font-semibold text-gray-900",children:w.value}),m.jsx("div",{className:`ml-2 flex items-baseline text-sm font-semibold ${w.changeType==="increase"?"text-green-600":w.changeType==="decrease"?"text-red-600":"text-gray-500"}`,children:w.change})]})]})})]})})},w.name))}),p()]});case"users":return m.jsxs("div",{className:"space-y-6",children:[m.jsxs("div",{children:[m.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"User Management"}),m.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Manage users and their roles in the system."})]}),p()]});case"teams":return m.jsx(AO,{});case"matches":return m.jsx(RO,{});default:return null}};return m.jsxs("div",{className:"space-y-6",children:[m.jsx("div",{className:"border-b border-gray-200",children:m.jsx("nav",{className:"-mb-px flex space-x-8",children:d.map(w=>m.jsxs("button",{onClick:()=>s(w.id),className:`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${i===w.id?"border-primary-600 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`,children:[m.jsx(w.icon,{className:"h-4 w-4"}),m.jsx("span",{children:w.name})]},w.id))})}),g()]})}const CO=()=>{const{currentUser:t}=Si(),[e,n]=O.useState([]),[r,i]=O.useState([]),[s,o]=O.useState({}),[l,u]=O.useState(!0);O.useState([]);const[c,d]=O.useState(1);O.useEffect(()=>{p()},[]),O.useEffect(()=>{c&&g()},[c,t]);const p=async()=>{try{const _=await Xt(mt(de,"teams")),E={};_.docs.forEach(S=>E[S.id]=S.data()),i(E);const b=new Date().toISOString().split("T")[0],M=Gi(mt(de,"matches"),fr("start_date",">=",b),D_("start_date","asc"),b_(1)),U=await Xt(M);if(U.empty){const S=Gi(mt(de,"matches"),D_("matchday","desc"),b_(1)),y=await Xt(S);y.empty?d(1):d(y.docs[0].data().matchday)}else{const S=U.docs[0].data();d(S.matchday)}}catch(_){console.error(_),le.error("Failed to load initial data")}},g=async()=>{u(!0);try{const _=Gi(mt(de,"matches"),fr("matchday","==",c)),b=(await Xt(_)).docs.map(M=>({id:M.id,...M.data()}));if(b.sort((M,U)=>new Date(M.start_date)-new Date(U.start_date)),n(b),t&&b.length>0){const M=b.map(T=>T.id),U=Gi(mt(de,"predictions"),fr("userId","==",t.uid),fr("matchId","in",M)),S=await Xt(U),y={};S.docs.forEach(T=>{y[T.data().matchId]=T.data().prediction}),o(y)}else t||o({})}catch(_){console.error(_),le.error("Failed to load matches")}finally{u(!1)}},w=async(_,E)=>{if(t){o(b=>({...b,[_]:E}));try{const b=`${t.uid}_${_}`;await si(ot(de,"predictions",b),{userId:t.uid,matchId:_,prediction:E,timestamp:new Date().toISOString()}),le.success("Prediction saved")}catch{le.error("Failed to save prediction"),g()}}},x=_=>r[_]||{name:"Unknown",short_name:"UNK"},P=e.filter(_=>_.matchday===c).sort((_,E)=>new Date(_.start_date)-new Date(E.start_date)),k=(_,E)=>{const b=s[_.id]===E,M=_.status==="FINISHED"&&_.winner===E,U=_.status==="FINISHED"&&b&&_.winner===E,S=_.status==="FINISHED"&&b&&_.winner!==E,y="flex-1 py-2 rounded-md text-sm font-bold transition-all border ";if(_.status==="FINISHED")return U?y+" border-green-700 shadow-md cursor-default bg-green-700 text-black":S?y+" border-red-600 shadow-md cursor-default bg-red-600 text-white":M?y+" border-green-300 shadow-md cursor-default bg-green-200 text-black":y+" opacity-50 cursor-not-allowed bg-gray-100 text-gray-400 border-gray-200";if(b){if(E==="1")return y+" bg-blue-600 text-white border-blue-600 shadow-md";if(E==="X")return y+" bg-yellow-500 text-white border-yellow-500 shadow-md";if(E==="2")return y+" bg-green-600 text-white border-green-600 shadow-md"}return y+" bg-white text-gray-700 hover:bg-gray-50 border-gray-200"},I=_=>_.status!=="FINISHED"||!s[_.id]?"":s[_.id]===_.winner?"match-card-correct":"match-card-incorrect";return l?m.jsx("div",{className:"p-8 text-center",children:"Loading matches..."}):m.jsxs("div",{className:"space-y-6",children:[m.jsxs("div",{className:"flex justify-between items-center",children:[m.jsx("h1",{className:"text-2xl font-bold",children:"Make Predictions"}),m.jsxs("div",{className:"flex items-center gap-2 bg-white p-1 rounded-lg border border-gray-200",children:[m.jsx("button",{onClick:()=>d(_=>Math.max(1,_-1)),disabled:c<=1,className:"p-1 hover:bg-gray-100 rounded disabled:opacity-30",children:m.jsx(hO,{size:20})}),m.jsxs("span",{className:"font-mono font-bold px-2",children:["Matchday ",c]}),m.jsx("button",{onClick:()=>d(_=>_+1),className:"p-1 hover:bg-gray-100 rounded",children:m.jsx(dO,{size:20})})]})]}),m.jsxs("div",{className:"flex flex-wrap gap-4",children:[P.map(_=>{const E=x(_.home_team),b=x(_.away_team),M=_.status==="FINISHED";return m.jsxs("div",{className:`card match-card p-4 hover:shadow-md transition-shadow ${I(_)}`,children:[m.jsxs("div",{className:"flex justify-between items-start mb-4 text-xs text-gray-500 uppercase tracking-wide font-semibold",children:[m.jsxs("div",{className:"flex items-center gap-1",children:[m.jsx(fO,{size:14}),new Date(_.start_date).toLocaleString()]}),m.jsx("div",{className:"flex items-center gap-1",children:_.status==="FINISHED"?m.jsxs("span",{className:"text-green-600 flex items-center gap-1",children:[m.jsx(cO,{size:14})," FINISHED"]}):m.jsxs("span",{className:"text-blue-600 flex items-center gap-1",children:[m.jsx(uO,{size:14})," SCHEDULED"]})})]}),_.referee&&m.jsxs("div",{className:"text-xs text-gray-500 mb-5 text-center",children:["Referee: ",m.jsx("span",{className:"font-medium",children:_.referee})]}),m.jsxs("div",{className:"flex items-center justify-between mb-6 px-2",children:[m.jsxs("div",{className:"flex flex-col items-center gap-1 w-1/3",children:[E.crest&&m.jsx("img",{src:E.crest,alt:E.short_name,className:"w-8 h-8 object-contain"}),m.jsx("span",{className:"font-bold text-center leading-tight text-sm",children:E.short_name})]}),m.jsx("div",{className:"flex flex-col items-center justify-center w-1/3",children:_.status==="FINISHED"?m.jsxs("div",{className:"text-2xl font-black text-gray-800 tracking-widest",children:[_.full_time_score_home," - ",_.full_time_score_away]}):m.jsx("span",{className:"text-sm font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full",children:"VS"})}),m.jsxs("div",{className:"flex flex-col items-center gap-1 w-1/3",children:[b.crest&&m.jsx("img",{src:b.crest,alt:b.short_name,className:"w-8 h-8 object-contain"}),m.jsx("span",{className:"font-bold text-center leading-tight text-sm",children:b.short_name})]})]}),m.jsxs("div",{className:"flex gap-2",children:[m.jsx("button",{className:k(_,"1"),onClick:()=>!M&&w(_.id,"1"),disabled:M&&_.winner!=="1",children:"1"}),m.jsx("button",{className:k(_,"X"),onClick:()=>!M&&w(_.id,"X"),disabled:M&&_.winner!=="X",children:"X"}),m.jsx("button",{className:k(_,"2"),onClick:()=>!M&&w(_.id,"2"),disabled:M&&_.winner!=="2",children:"2"})]}),M&&s[_.id]&&s[_.id]===_.winner&&m.jsx("div",{className:"mt-3 text-center text-sm font-bold p-2 rounded bg-green-100 text-green-700",children:"Correct Prediction! (+1 Pt)"})]},_.id)}),P.length===0&&m.jsx("div",{className:"text-center py-10 text-gray-400",children:"No matches scheduled for this matchday."})]})]})};function hl({children:t,adminOnly:e=!1}){const{currentUser:n}=Si();return n?t:m.jsx(uw,{to:"/login"})}function dl({children:t}){const{currentUser:e,logout:n}=Si(),[r,i]=O.useState(!1),[s,o]=O.useState(!1),l=xs();As();const u=Co.useRef(null),c=Co.useRef(null);O.useEffect(()=>{async function x(){if(e){const P=await P1(ot(de,"users",e.uid));P.exists()&&P.data().role==="admin"&&i(!0)}}x()},[e]),O.useEffect(()=>{function x(P){s&&u.current&&!u.current.contains(P.target)&&c.current&&!c.current.contains(P.target)&&o(!1)}return document.addEventListener("mousedown",x),()=>{document.removeEventListener("mousedown",x)}},[s]);const d=[{label:"Dashboard",path:"/",icon:m.jsx(gO,{size:20})},{label:"Matches",path:"/matches",icon:m.jsx(EO,{size:20})},{label:"Profile",path:"/profile",icon:m.jsx(xu,{size:20})}];r&&d.push({label:"Admin Panel",path:"/admin",icon:m.jsx(Hd,{size:20})});const p=x=>l.pathname===x,g=()=>m.jsx(m.Fragment,{children:d.map(x=>m.jsxs($u,{to:x.path,className:`nav-link ${p(x.path)?"active":"inactive"}`,onClick:()=>o(!1),children:[m.jsx("span",{style:{marginRight:"0.75rem"},children:x.icon}),x.label]},x.path))}),w=()=>{var x;return m.jsxs("div",{style:{borderTop:"1px solid var(--border-gray-200)",padding:"1rem"},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[m.jsx("div",{style:{flexShrink:0},children:m.jsx("div",{style:{height:"2rem",width:"2rem",borderRadius:"9999px",backgroundColor:"var(--primary-600)",display:"flex",alignItems:"center",justifyContent:"center"},children:e!=null&&e.photoURL?m.jsx("img",{src:e.photoURL,alt:"User",style:{width:"100%",height:"100%",borderRadius:"9999px",objectFit:"cover"}}):m.jsx("span",{style:{fontSize:"0.875rem",fontWeight:500,color:"white"},children:((x=e==null?void 0:e.displayName)==null?void 0:x[0])||"U"})})}),m.jsxs("div",{style:{marginLeft:"0.75rem"},children:[m.jsx("p",{style:{fontSize:"0.875rem",fontWeight:500,color:"var(--text-gray-700)",margin:0},children:(e==null?void 0:e.displayName)||"User"}),m.jsx("p",{style:{fontSize:"0.75rem",color:"var(--text-gray-500)",margin:0},children:e==null?void 0:e.email})]})]}),m.jsxs("button",{onClick:n,className:"btn btn-secondary",style:{marginTop:"0.75rem",width:"100%",justifyContent:"flex-start",border:"none"},children:[m.jsx(yO,{size:20,style:{marginRight:"0.75rem"}}),"Logout"]})]})};return m.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"var(--bg-gray-50)"},children:[m.jsxs("div",{ref:u,className:`mobile-menu-dropdown ${s?"open":""}`,children:[m.jsx("nav",{style:{padding:"1rem"},children:m.jsx(g,{})}),m.jsx(w,{})]}),m.jsx("div",{className:"desktop-sidebar-wrapper",children:m.jsxs("div",{className:"desktop-sidebar-inner",children:[m.jsx("div",{style:{display:"flex",height:"4rem",alignItems:"center",paddingLeft:"1rem",paddingRight:"1rem"},children:m.jsx("h1",{style:{fontSize:"1.25rem",fontWeight:"bold",color:"var(--text-gray-900)"},children:"Prediction App"})}),m.jsx("nav",{style:{flex:1,padding:"1rem",spaceY:"0.25rem"},children:m.jsx(g,{})}),m.jsx(w,{})]})}),m.jsxs("div",{className:"main-wrapper",children:[m.jsxs("div",{className:"sticky-header",children:[m.jsx("button",{ref:c,type:"button",className:"mobile-menu-btn",onClick:()=>o(!s),style:{background:"none",border:"none",padding:"0.625rem",color:"var(--text-gray-700)",cursor:"pointer"},children:s?m.jsx(J1,{size:24}):m.jsx(_O,{size:24})}),m.jsx("div",{className:"header-separator"}),m.jsx("div",{style:{display:"flex",flex:1,gap:"1rem"},children:m.jsxs("span",{style:{fontSize:"0.875rem",color:"var(--text-gray-500)"},children:["Welcome, ",e==null?void 0:e.displayName,"!"]})})]}),m.jsx("main",{style:{paddingTop:"1.5rem",paddingBottom:"1.5rem"},children:m.jsx("div",{style:{maxWidth:"80rem",margin:"0 auto",paddingLeft:"1rem",paddingRight:"1rem"},children:t})})]})]})}function PO(){const{currentUser:t}=Si();return m.jsxs("div",{children:[m.jsx("h1",{children:"Dashboard"}),m.jsxs("p",{className:"text-[var(--text-secondary)] mt-2",children:["Welcome back, ",t==null?void 0:t.displayName,"!"]}),m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mt-8",children:[m.jsxs("div",{className:"card",children:[m.jsx("h3",{children:"Total Predictions"}),m.jsx("p",{className:"text-3xl font-bold mt-2 text-[var(--accent-primary)]",children:"0"})]}),m.jsxs("div",{className:"card",children:[m.jsx("h3",{children:"Success Rate"}),m.jsx("p",{className:"text-3xl font-bold mt-2 text-[var(--accent-secondary)]",children:"0%"})]}),m.jsxs("div",{className:"card",children:[m.jsx("h3",{children:"Points"}),m.jsx("p",{className:"text-3xl font-bold mt-2 text-green-500",children:"0"})]})]})]})}function NO(){return m.jsx(Zx,{children:m.jsx(sO,{children:m.jsxs(rO,{children:[m.jsx(HA,{position:"top-center",toastOptions:{style:{background:"var(--bg-secondary)",color:"var(--text-primary)",border:"1px solid var(--border-color)"}}}),m.jsxs(qx,{children:[m.jsx(Zn,{path:"/signup",element:m.jsx(IO,{})}),m.jsx(Zn,{path:"/login",element:m.jsx(SO,{})}),m.jsx(Zn,{path:"/",element:m.jsx(hl,{children:m.jsx(dl,{children:m.jsx(PO,{})})})}),m.jsx(Zn,{path:"/matches",element:m.jsx(hl,{children:m.jsx(dl,{children:m.jsx(CO,{})})})}),m.jsx(Zn,{path:"/profile",element:m.jsx(hl,{children:m.jsx(dl,{children:m.jsx(xO,{})})})}),m.jsx(Zn,{path:"/admin",element:m.jsx(hl,{children:m.jsx(dl,{children:m.jsx(kO,{})})})}),m.jsx(Zn,{path:"*",element:m.jsx(uw,{to:"/"})})]})]})})})}wh.createRoot(document.getElementById("root")).render(m.jsx(Co.StrictMode,{children:m.jsx(NO,{})}));
