import{b as ut,c as R,d as P,e as pt,f as dt,g as lt,h as C,j as mt,k as p,l as b,m as y,n as j,o as x,p as vt,q as Et}from"./chunk-6DVTH745.js";import{$ as J,A as z,Aa as _,B as K,C as A,D as W,F as X,H as N,Hb as rt,I as Y,Kb as nt,Lb as it,Mb as st,Ob as ct,Rb as at,V as c,Va as tt,X as v,Y as f,Yb as ft,Z as d,a as s,b as u,d as G,e as B,ka as Z,l,la as q,n as m,nb as et,p as h,v as $,w as I,wb as ot,y as g,ya as Q}from"./chunk-QXF6JL4R.js";var ht=[{path:"login",loadChildren:()=>import("./chunk-TNHFPGNN.js").then(t=>t.LoginModule)},{path:"",loadChildren:()=>import("./chunk-LVUHQA4O.js").then(t=>t.MainModule)},{path:"**",redirectTo:"",pathMatch:"full"}];var gt=(()=>{let e=class e{constructor(){this.http=d(nt)}getTranslation(o){return this.http.get(`/assets/i18n/${o}.json`)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Ut={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},M="__@ngrx/effects_create__";function T(t,e={}){let n=e.functional?t:t(),o=s(s({},Ut),e);return Object.defineProperty(n,M,{value:o}),n}function Vt(t){return Object.getOwnPropertyNames(t).filter(o=>t[o]&&t[o].hasOwnProperty(M)?t[o][M].hasOwnProperty("dispatch"):!1).map(o=>{let r=t[o][M];return s({propertyName:o},r)})}function Gt(t){return Vt(t)}function Rt(t){return Object.getPrototypeOf(t)}function Bt(t){return!!t.constructor&&t.constructor.name!=="Object"&&t.constructor.name!=="Function"}function Ct(t){return typeof t=="function"}function zt(t){return t.filter(Ct)}function Kt(t,e,n){let o=Rt(t),a=!!o&&o.constructor.name!=="Object"?o.constructor.name:null,i=Gt(t).map(({propertyName:E,dispatch:Nt,useEffectsErrorHandler:Pt})=>{let U=typeof t[E]=="function"?t[E]():t[E],V=Pt?n(U,e):U;return Nt===!1?V.pipe(K()):V.pipe(Y()).pipe(m(Ht=>({effect:t[E],notification:Ht,propertyName:E,sourceName:a,sourceInstance:t})))});return $(...i)}var Wt=10;function yt(t,e,n=Wt){return t.pipe(g(o=>(e&&e.handleError(o),n<=1?t:yt(t,e,n-1))))}var O=(()=>{let e=class e extends G{constructor(o){super(),o&&(this.source=o)}lift(o){let r=new e;return r.source=this,r.operator=o,r}};e.\u0275fac=function(r){return new(r||e)(f(lt))},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function w(...t){return I(e=>t.some(n=>typeof n=="string"?n===e.type:n.type===e.type))}var ke=new v("@ngrx/effects Internal Root Guard"),$e=new v("@ngrx/effects User Provided Effects"),Ne=new v("@ngrx/effects Internal Root Effects"),Pe=new v("@ngrx/effects Internal Root Effects Instances"),He=new v("@ngrx/effects Internal Feature Effects"),Le=new v("@ngrx/effects Internal Feature Effects Instance Groups"),Xt=new v("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>yt}),Yt="@ngrx/effects/init",Jt=R(Yt);function Zt(t,e){if(t.notification.kind==="N"){let n=t.notification.value;!qt(n)&&e.handleError(new Error(`Effect ${Qt(t)} dispatched an invalid action: ${_t(n)}`))}}function qt(t){return typeof t!="function"&&t&&t.type&&typeof t.type=="string"}function Qt({propertyName:t,sourceInstance:e,sourceName:n}){let o=typeof e[t]=="function";return!!n?`"${n}.${String(t)}${o?"()":""}"`:`"${String(t)}()"`}function _t(t){try{return JSON.stringify(t)}catch{return t}}var te="ngrxOnIdentifyEffects";function ee(t){return H(t,te)}var oe="ngrxOnRunEffects";function re(t){return H(t,oe)}var ne="ngrxOnInitEffects";function ie(t){return H(t,ne)}function H(t,e){return t&&e in t&&typeof t[e]=="function"}var St=(()=>{let e=class e extends B{constructor(o,r){super(),this.errorHandler=o,this.effectsErrorHandler=r}addEffects(o){this.next(o)}toActions(){return this.pipe(N(o=>Bt(o)?Rt(o):o),h(o=>o.pipe(N(se))),h(o=>{let r=o.pipe(X(i=>ce(this.errorHandler,this.effectsErrorHandler)(i)),m(i=>(Zt(i,this.errorHandler),i.notification)),I(i=>i.kind==="N"&&i.value!=null),W()),a=o.pipe(z(1),I(ie),m(i=>i.ngrxOnInitEffects()));return $(r,a)}))}};e.\u0275fac=function(r){return new(r||e)(f(Q),f(Xt))},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function se(t){return ee(t)?t.ngrxOnIdentifyEffects():""}function ce(t,e){return n=>{let o=Kt(n,t,e);return re(n)?n.ngrxOnRunEffects(o):o}}var ae=(()=>{let e=class e{get isStarted(){return!!this.effectsSubscription}constructor(o,r){this.effectSources=o,this.store=r,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}};e.\u0275fac=function(r){return new(r||e)(f(St),f(C))},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Ft(...t){let e=t.flat(),n=zt(e);return q([n,{provide:Z,multi:!0,useValue:()=>{d(pt),d(dt,{optional:!0});let o=d(ae),r=d(St),a=!o.isStarted;a&&o.start();for(let i of e){let E=Ct(i)?d(i):i;r.addEffects(E)}a&&d(C).dispatch(Jt())}}])}var At=(()=>{let e=class e{getAll(o){return l([{_id:"ji349m93c2423",startAt:new Date,endAt:new Date,concept:{_id:"a4dg6x1",name:"Work station",positions:[{name:"1",enabled:!1}]},user:"javi"}]).pipe(A(2e3))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var jt=(()=>{let e=class e{constructor(o,r){this.actions$=o,this.reservationService=r,this.loadReservations$=T(()=>this.actions$.pipe(w(y),h(a=>this.reservationService.getAll(a.userId).pipe(m(i=>j({reservations:i})),g(i=>l(x({error:i.message})))))))}};e.\u0275fac=function(r){return new(r||e)(f(O),f(At))},e.\u0275prov=c({token:e,factory:e.\u0275fac});let t=e;return t})();var ue={reservations:[],loading:!1,error:""},xt=b(ue,p(y,t=>u(s({},t),{loading:!0})),p(j,(t,{reservations:e})=>u(s({},t),{reservations:e,loading:!1})),p(x,(t,{error:e})=>u(s({},t),{error:e,loading:!1})),p(vt,(t,{reservation:e})=>u(s({},t),{reservations:[...t.reservations,e]})),p(Et,(t,{date:e,concept:n})=>u(s({},t),{reservations:t.reservations.filter(o=>!(o.concept._id===n._id&&o.startAt.toDateString()===e.toDateString()))})));var F=R("[Concept] Load Concepts"),D=R("[Concept] Load Concepts Success",P()),k=R("[Concept] Load Concepts Failure",P());var pe={concepts:[],loading:!1,error:""},Mt=b(pe,p(F,t=>u(s({},t),{loading:!0})),p(D,(t,{concepts:e})=>u(s({},t),{concepts:e,loading:!1})),p(k,(t,{error:e})=>u(s({},t),{error:e,loading:!1})));var Tt=(()=>{let e=class e{getAll(){return l([{_id:"a4dg6x1",name:"Work station",positions:[{name:"1",enabled:!0},{name:"2",enabled:!1},{name:"3",enabled:!0},{name:"4",enabled:!1},{name:"5",enabled:!0},{name:"6",enabled:!0},{name:"7",enabled:!0}],enabled:!0},{_id:"n21f256",name:"Parking",positions:[{name:"A",enabled:!0},{name:"B",enabled:!1},{name:"C",enabled:!0},{name:"D",enabled:!0}],enabled:!0}]).pipe(A(1e3))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Ot=(()=>{let e=class e{constructor(o,r){this.actions$=o,this.conceptService=r,this.loadConcepts$=T(()=>this.actions$.pipe(w(F),h(()=>this.conceptService.getAll().pipe(m(a=>D({concepts:a})),g(a=>l(k({error:a.message})))))))}};e.\u0275fac=function(r){return new(r||e)(f(O),f(Tt))},e.\u0275prov=c({token:e,factory:e.\u0275fac});let t=e;return t})();var wt={reservation:xt,concept:Mt},Dt=[jt,Ot];var kt={providers:[at(ht),ft(),it(),ut({config:{availableLangs:["en","es"],defaultLang:"en",reRenderOnLangChange:!0,prodMode:!ot()},loader:gt}),mt(wt),Ft(Dt)]};var $t=(()=>{let e=class e{constructor(o){this.store=o,this.loadConcepts(),this.loadReservations()}loadConcepts(){this.store.dispatch(F())}loadReservations(){this.store.dispatch(y({userId:"xXx"}))}};e.\u0275fac=function(r){return new(r||e)(_(C))},e.\u0275cmp=J({type:e,selectors:[["app-root"]],standalone:!0,features:[et],decls:1,vars:0,template:function(r,a){r&1&&tt(0,"router-outlet")},dependencies:[rt,ct]});let t=e;return t})();st($t,kt).catch(t=>console.error(t));