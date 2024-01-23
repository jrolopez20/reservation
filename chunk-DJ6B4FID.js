import{B as te,E as M,Ea as he,G as ne,J as S,K as ie,L as v,M as b,N as L,O as T,Oa as _,P as se,Q as re,R as ae,S as oe,Ya as ge,Z as O,a as h,b as j,e as Y,ea as ce,f as U,ga as le,h as Z,ha as ue,i as $,j as I,l as A,m as q,ma as D,o as E,ra as fe,t as Q,ua as de,v as X,z as ee}from"./chunk-SK7EVYSD.js";function pe(t){return t&&t.constructor&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function ve(t){return t}function P(t,s){s=s||{};let e=s.delimiter||".",n=s.maxDepth,i=s.transformKey||ve,r={};function a(o,f,l){l=l||1,Object.keys(o).forEach(function(c){let u=o[c],d=s.safe&&Array.isArray(u),g=Object.prototype.toString.call(u),p=pe(u),F=g==="[object Object]"||g==="[object Array]",C=f?f+e+i(c):i(c);if(!d&&!p&&F&&Object.keys(u).length&&(!s.maxDepth||l<n))return a(u,C,l+1);r[C]=u})}return a(t),r}function x(t,s){s=s||{};let e=s.delimiter||".",n=s.overwrite||!1,i=s.transformKey||ve,r={};if(pe(t)||Object.prototype.toString.call(t)!=="[object Object]")return t;function o(c){let u=Number(c);return isNaN(u)||c.indexOf(".")!==-1||s.object?c:u}function f(c,u,d){return Object.keys(d).reduce(function(g,p){return g[c+e+p]=d[p],g},u)}function l(c){let u=Object.prototype.toString.call(c),d=u==="[object Array]",g=u==="[object Object]";if(c){if(d)return!c.length;if(g)return!Object.keys(c).length}else return!0}return t=Object.keys(t).reduce(function(c,u){let d=Object.prototype.toString.call(t[u]);return!(d==="[object Object]"||d==="[object Array]")||l(t[u])?(c[u]=t[u],c):f(u,c,P(t[u],s))},{}),Object.keys(t).forEach(function(c){let u=c.split(e).map(i),d=o(u.shift()),g=o(u[0]),p=r;for(;g!==void 0;){if(d==="__proto__")return;let F=Object.prototype.toString.call(p[d]),C=F==="[object Object]"||F==="[object Array]";if(!n&&!C&&typeof p[d]<"u")return;(n&&!C||!n&&p[d]==null)&&(p[d]=typeof g=="number"&&!s.object?[]:{}),p=p[d],u.length>0&&(d=o(u.shift()),g=o(u[0]))}p[d]=x(t[c],s)}),r}var K=class{translations;constructor(s){this.translations=s}getTranslation(s){return I(this.translations.get(s)||{})}},Te=new v("TRANSLOCO_LOADER");function Le(t,s){return t&&(Object.prototype.hasOwnProperty.call(t,s)?t[s]:s.split(".").reduce((e,n)=>e?.[n],t))}function Re(t,s,e){t=h({},t);let n=s.split("."),i=n.length-1;return n.reduce((r,a,o)=>(o===i?r[a]=e:r[a]=Array.isArray(r[a])?r[a].slice():h({},r[a]),r&&r[a]),t),t}function Oe(t){return t?Array.isArray(t)?t.length:J(t)?Object.keys(t).length:t?t.length:0:0}function Ne(t){return Oe(t)===0}function Fe(t){return typeof t=="function"}function m(t){return typeof t=="string"}function J(t){return!!t&&typeof t=="object"&&!Array.isArray(t)}function Ae(t){return t.replace(/(?:^\w|[A-Z]|\b\w)/g,(s,e)=>e==0?s.toLowerCase():s.toUpperCase()).replace(/\s+|_|-|\//g,"")}function H(t){return t==null}function be(t){return H(t)===!1}function W(t){return t&&typeof t.scope=="string"}function Ie(t){return Array.isArray(t)&&t.every(W)}function $e(t){return t&&J(t.loader)}function Ee(t){return x(t)}function ye(t){return P(t,{safe:!0})}var w=new v("TRANSLOCO_CONFIG",{providedIn:"root",factory:()=>R}),R={defaultLang:"en",reRenderOnLangChange:!1,prodMode:!1,failedRetries:2,fallbackLang:[],availableLangs:[],missingHandler:{logMissingKey:!0,useFallbackTranslation:!1,allowEmpty:!1},flatten:{aot:!1},interpolation:["{{","}}"]};function De(t={}){return j(h(h({},R),t),{missingHandler:h(h({},R.missingHandler),t.missingHandler),flatten:h(h({},R.flatten),t.flatten)})}var Se=new v("TRANSLOCO_TRANSPILER"),_e=(()=>{class t{interpolationMatcher;constructor(e){this.interpolationMatcher=Pe(e??R)}transpile(e,n={},i,r){return m(e)?e.replace(this.interpolationMatcher,(a,o)=>(o=o.trim(),be(n[o])?n[o]:be(i[o])?this.transpile(i[o],n,i,r):"")):(n&&(J(e)?e=this.handleObject(e,n,i,r):Array.isArray(e)&&(e=this.handleArray(e,n,i,r))),e)}handleObject(e,n={},i,r){let a=e;return Object.keys(n).forEach(o=>{let f=Le(a,o),l=Le(n,o),c=this.transpile(f,l,i,r);a=Re(a,o,c)}),a}handleArray(e,n={},i,r){return e.map(a=>this.transpile(a,n,i,r))}static \u0275fac=function(n){return new(n||t)(b(w,8))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})();function Pe(t){let[s,e]=t.interpolation;return new RegExp(`${s}(.*?)${e}`,"g")}var me=new v("TRANSLOCO_MISSING_HANDLER"),xe=(()=>{class t{handle(e,n){if(n.missingHandler.logMissingKey&&!n.prodMode){let i=`Missing translation for '${e}'`;console.warn(`%c ${i}`,"font-size: 12px; color: red")}return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),we=new v("TRANSLOCO_INTERCEPTOR"),Ve=(()=>{class t{preSaveTranslation(e){return e}preSaveTranslationKey(e,n){return n}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),Ce=new v("TRANSLOCO_FALLBACK_STRATEGY"),Ke=(()=>{class t{userConfig;constructor(e){this.userConfig=e}getNextLangs(){let e=this.userConfig.fallbackLang;if(!e)throw new Error("When using the default fallback, a fallback language must be provided in the config!");return Array.isArray(e)?e:[e]}static \u0275fac=function(n){return new(n||t)(b(w))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})();function N(t){if(!t)return"";let s=t.split("/");return s.pop(),s.join("/")}function y(t){return t?t.split("/").pop():""}function k(t,s,e="|"){if(m(t)){let n=t.split(e),i=n.pop();return i===s?[!0,n.toString()]:[!1,i]}return[!1,""]}function He(t,s){let[e]=k(s,"static");return e?!1:!!t.config.reRenderOnLangChange}function ke(t){return t?s=>s:X(1)}function Be(t,s){return Object.keys(t).reduce((e,n)=>(e[`${s}/${n}`]=t[n],e),{})}function je(t,s){return $e(t)?Be(t.loader,s):void 0}function V(t){return{scope:N(t)||null,langName:y(t)}}function Me(t){let{path:s,inlineLoader:e,mainLoader:n,data:i}=t;if(e){let r=e[s];if(Fe(r)===!1)throw`You're using an inline loader but didn't provide a loader for ${s}`;return e[s]().then(a=>a.default?a.default:a)}return n.getTranslation(s,i)}function Ge({mainLoader:t,path:s,data:e,fallbackPath:n,inlineLoader:i}){return(n?[s,n]:[s]).map(a=>{let o=Me({path:a,mainLoader:t,inlineLoader:i,data:e});return $(o).pipe(A(f=>({translation:f,lang:a})))})}var ze;var Je=(()=>{class t{loader;parser;missingHandler;interceptor;fallbackStrategy;langChanges$;subscription=null;translations=new Map;cache=new Map;firstFallbackLang;defaultLang="";availableLangs=[];isResolvedMissingOnce=!1;lang;failedLangs=new Set;events=new Y;events$=this.events.asObservable();config;constructor(e,n,i,r,a,o){this.loader=e,this.parser=n,this.missingHandler=i,this.interceptor=r,this.fallbackStrategy=o,this.loader||(this.loader=new K(this.translations)),ze=this,this.config=JSON.parse(JSON.stringify(a)),this.setAvailableLangs(this.config.availableLangs||[]),this.setFallbackLangForMissingTranslation(this.config),this.setDefaultLang(this.config.defaultLang),this.lang=new U(this.getDefaultLang()),this.langChanges$=this.lang.asObservable(),this.subscription=this.events$.subscribe(f=>{f.type==="translationLoadSuccess"&&f.wasFailure&&this.setActiveLang(f.payload.langName)})}getDefaultLang(){return this.defaultLang}setDefaultLang(e){this.defaultLang=e}getActiveLang(){return this.lang.getValue()}setActiveLang(e){return this.parser.onLangChanged?.(e),this.lang.next(e),this.events.next({type:"langChanged",payload:V(e)}),this}setAvailableLangs(e){this.availableLangs=e}getAvailableLangs(){return this.availableLangs}load(e,n={}){let i=this.cache.get(e);if(i)return i;let r,a=this._isLangScoped(e),o;a&&(o=N(e));let f={path:e,mainLoader:this.loader,inlineLoader:n.inlineLoader,data:a?{scope:o}:void 0};if(this.useFallbackTranslation(e)){let c=a?`${o}/${this.firstFallbackLang}`:this.firstFallbackLang,u=Ge(j(h({},f),{fallbackPath:c}));r=E(u)}else{let c=Me(f);r=$(c)}let l=r.pipe(ee(this.config.failedRetries),ne(c=>{if(Array.isArray(c)){c.forEach(u=>{this.handleSuccess(u.lang,u.translation),u.lang!==e&&this.cache.set(u.lang,I({}))});return}this.handleSuccess(e,c)}),Q(c=>(this.config.prodMode||console.error(`Error while trying to load "${e}"`,c),this.handleFailure(e,n))),te(1));return this.cache.set(e,l),l}translate(e,n={},i=this.getActiveLang()){if(!e)return e;let{scope:r,resolveLang:a}=this.resolveLangAndScope(i);if(Array.isArray(e))return e.map(l=>this.translate(r?`${r}.${l}`:l,n,a));e=r?`${r}.${e}`:e;let o=this.getTranslation(a),f=o[e];return f?this.parser.transpile(f,n,o,e):this._handleMissingKey(e,f,n)}selectTranslate(e,n,i,r=!1){let a,o=(l,c)=>this.load(l,c).pipe(A(()=>r?this.translateObject(e,n,l):this.translate(e,n,l)));if(H(i))return this.langChanges$.pipe(M(l=>o(l)));if(Ie(i)||W(i)){let l=Array.isArray(i)?i[0]:i;i=l.scope,a=je(l,l.scope)}if(i=i,this.isLang(i)||this.isScopeWithLang(i))return o(i);let f=i;return this.langChanges$.pipe(M(l=>o(`${f}/${l}`,{inlineLoader:a})))}isScopeWithLang(e){return this.isLang(y(e))}translateObject(e,n={},i=this.getActiveLang()){if(m(e)||Array.isArray(e)){let{resolveLang:a,scope:o}=this.resolveLangAndScope(i);if(Array.isArray(e))return e.map(c=>this.translateObject(o?`${o}.${c}`:c,n,a));let f=this.getTranslation(a);e=o?`${o}.${e}`:e;let l=Ee(this.getObjectByKey(f,e));return Ne(l)?this.translate(e,n,i):this.parser.transpile(l,n,f,e)}let r=[];for(let[a,o]of this.getEntries(e))r.push(this.translateObject(a,o,i));return r}selectTranslateObject(e,n,i){if(m(e)||Array.isArray(e))return this.selectTranslate(e,n,i,!0);let[[r,a],...o]=this.getEntries(e);return this.selectTranslateObject(r,a,i).pipe(A(f=>{let l=[f];for(let[c,u]of o)l.push(this.translateObject(c,u,i));return l}))}getTranslation(e){if(e){if(this.isLang(e))return this.translations.get(e)||{};{let{scope:n,resolveLang:i}=this.resolveLangAndScope(e),r=this.translations.get(i)||{};return this.getObjectByKey(r,n)}}return this.translations}selectTranslation(e){let n=this.langChanges$;if(e){let i=y(e)!==e;this.isLang(e)||i?n=I(e):n=this.langChanges$.pipe(A(r=>`${e}/${r}`))}return n.pipe(M(i=>this.load(i).pipe(A(()=>this.getTranslation(i)))))}setTranslation(e,n=this.getActiveLang(),i={}){let a=h(h({},{merge:!0,emitChange:!0}),i),o=N(n),f=e;if(o){let g=this.getMappedScope(o);f=ye({[g]:e})}let l=o?y(n):n,c=h(h({},a.merge&&this.getTranslation(l)),f),u=this.config.flatten.aot?c:ye(c),d=this.interceptor.preSaveTranslation(u,l);this.translations.set(l,d),a.emitChange&&this.setActiveLang(this.getActiveLang())}setTranslationKey(e,n,i=this.getActiveLang(),r={}){let a=this.interceptor.preSaveTranslationKey(e,n,i),o={[e]:a};this.setTranslation(o,i,j(h({},r),{merge:!0}))}setFallbackLangForMissingTranslation({fallbackLang:e}){let n=Array.isArray(e)?e[0]:e;e&&this.useFallbackTranslation(n)&&(this.firstFallbackLang=n)}_handleMissingKey(e,n,i){if(this.config.missingHandler.allowEmpty&&n==="")return"";if(!this.isResolvedMissingOnce&&this.useFallbackTranslation()){this.isResolvedMissingOnce=!0;let r=this.translate(e,i,this.firstFallbackLang);return this.isResolvedMissingOnce=!1,r}return this.missingHandler.handle(e,this.getMissingHandlerData(),i)}_isLangScoped(e){return this.getAvailableLangsIds().indexOf(e)===-1}isLang(e){return this.getAvailableLangsIds().indexOf(e)!==-1}_loadDependencies(e,n){let i=y(e);return this._isLangScoped(e)&&!this.isLoadedTranslation(i)?q([this.load(i),this.load(e,{inlineLoader:n})]):this.load(e,{inlineLoader:n})}_completeScopeWithLang(e){return this._isLangScoped(e)&&!this.isLang(y(e))?`${e}/${this.getActiveLang()}`:e}_setScopeAlias(e,n){this.config.scopeMapping||(this.config.scopeMapping={}),this.config.scopeMapping[e]=n}ngOnDestroy(){this.subscription&&(this.subscription.unsubscribe(),this.subscription=null),this.cache.clear()}isLoadedTranslation(e){return Oe(this.getTranslation(e))}getAvailableLangsIds(){let e=this.getAvailableLangs()[0];return m(e)?this.getAvailableLangs():this.getAvailableLangs().map(n=>n.id)}getMissingHandlerData(){return j(h({},this.config),{activeLang:this.getActiveLang(),availableLangs:this.availableLangs,defaultLang:this.defaultLang})}useFallbackTranslation(e){return this.config.missingHandler.useFallbackTranslation&&e!==this.firstFallbackLang}handleSuccess(e,n){this.setTranslation(n,e,{emitChange:!1}),this.events.next({wasFailure:!!this.failedLangs.size,type:"translationLoadSuccess",payload:V(e)}),this.failedLangs.forEach(i=>this.cache.delete(i)),this.failedLangs.clear()}handleFailure(e,n){H(n.failedCounter)&&(n.failedCounter=0,n.fallbackLangs||(n.fallbackLangs=this.fallbackStrategy.getNextLangs(e)));let i=e.split("/"),a=n.fallbackLangs[n.failedCounter];if(this.failedLangs.add(e),this.cache.has(a))return this.handleSuccess(a,this.getTranslation(a)),Z;let o=a===i[i.length-1];if(!a||o){let l="Unable to load translation and all the fallback languages";throw i.length>1&&(l+=", did you misspelled the scope name?"),new Error(l)}let f=a;return i.length>1&&(i[i.length-1]=a,f=i.join("/")),n.failedCounter++,this.events.next({type:"translationLoadFailure",payload:V(e)}),this.load(f,n)}getMappedScope(e){let{scopeMapping:n={}}=this.config;return n[e]||Ae(e)}resolveLangAndScope(e){let n=e,i;if(this._isLangScoped(e)){let r=y(e),a=this.isLang(r);n=a?r:this.getActiveLang(),i=this.getMappedScope(a?N(e):e)}return{scope:i,resolveLang:n}}getObjectByKey(e,n){let i={},r=`${n}.`;for(let a in e)a.startsWith(r)&&(i[a.replace(r,"")]=e[a]);return i}getEntries(e){return e instanceof Map?e.entries():Object.entries(e)}static \u0275fac=function(n){return new(n||t)(b(Te,8),b(Se),b(me),b(we),b(w),b(Ce))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),We=(()=>{class t{html;static \u0275fac=function(n){return new(n||t)};static \u0275cmp=se({type:t,selectors:[["ng-component"]],inputs:{html:"html"},standalone:!0,features:[ge],decls:1,vars:1,consts:[[1,"transloco-loader-template",3,"innerHTML"]],template:function(n,i){n&1&&he(0,"div",0),n&2&&de("innerHTML",i.html,ce)},encapsulation:2})}return t})(),B=class{view;vcr;constructor(s,e){this.view=s,this.vcr=e}attachView(){if(this.view instanceof _)this.vcr.createEmbeddedView(this.view);else if(m(this.view)){let s=this.vcr.createComponent(We);s.instance.html=this.view,s.hostView.detectChanges()}else this.vcr.createComponent(this.view)}detachView(){this.vcr.clear()}},Ye=new v("TRANSLOCO_LANG"),Ue=new v("TRANSLOCO_LOADING_TEMPLATE"),Ze=new v("TRANSLOCO_SCOPE"),G=class{initialized=!1;resolve({inline:s,provider:e,active:n}){let i=n;if(this.initialized)return i=n,i;if(e){let[,r]=k(e,"static");i=r}if(s){let[,r]=k(s,"static");i=r}return this.initialized=!0,i}resolveLangBasedOnScope(s){return N(s)?y(s):s}resolveLangPath(s,e){return e?`${e}/${s}`:s}},z=class{service;constructor(s){this.service=s}resolve(s){let{inline:e,provider:n}=s;if(e)return e;if(n){if(W(n)){let{scope:i,alias:r=Ae(i)}=n;return this.service._setScopeAlias(i,r),i}return n}}},Ot=(()=>{class t{service=L(Je);tpl=L(_,{optional:!0});providerLang=L(Ye,{optional:!0});providerScope=L(Ze,{optional:!0});providedLoadingTpl=L(Ue,{optional:!0});cdr=L(D);host=L(le);vcr=L(fe);renderer=L(ue);subscription=null;view;translationMemo={};key;params={};inlineScope;inlineRead;inlineLang;inlineTpl;currentLang;loaderTplHandler;initialized=!1;path;langResolver=new G;scopeResolver=new z(this.service);strategy=this.tpl===null?"attribute":"structural";static ngTemplateContextGuard(e,n){return!0}ngOnInit(){let e=He(this.service,this.providerLang||this.inlineLang);if(this.subscription=this.service.langChanges$.pipe(M(n=>{let i=this.langResolver.resolve({inline:this.inlineLang,provider:this.providerLang,active:n});return Array.isArray(this.providerScope)?E(this.providerScope.map(r=>this.resolveScope(i,r))):this.resolveScope(i,this.providerScope)}),ke(e)).subscribe(()=>{this.currentLang=this.langResolver.resolveLangBasedOnScope(this.path),this.strategy==="attribute"?this.attributeStrategy():this.structuralStrategy(this.currentLang,this.inlineRead),this.cdr.markForCheck(),this.initialized=!0}),!this.initialized){let n=this.resolveLoadingContent();n&&(this.loaderTplHandler=new B(n,this.vcr),this.loaderTplHandler.attachView())}}ngOnChanges(e){this.strategy==="attribute"&&Object.keys(e).some(i=>!e[i].firstChange)&&this.attributeStrategy()}attributeStrategy(){this.detachLoader(),this.renderer.setProperty(this.host.nativeElement,"innerText",this.service.translate(this.key,this.params,this.currentLang))}structuralStrategy(e,n){this.translationMemo={},this.view?(this.view.context.$implicit=this.getTranslateFn(e,n),this.view.context.currentLang=this.currentLang):(this.detachLoader(),this.view=this.vcr.createEmbeddedView(this.tpl,{$implicit:this.getTranslateFn(e,n),currentLang:this.currentLang}))}getTranslateFn(e,n){return(i,r)=>{let a=n?`${n}.${i}`:i,o=r?`${a}${JSON.stringify(r)}`:a;return Object.prototype.hasOwnProperty.call(this.translationMemo,o)?this.translationMemo[o].value:(this.translationMemo[o]={params:r,value:this.service.translate(a,r,e)},this.translationMemo[o].value)}}resolveLoadingContent(){return this.inlineTpl||this.providedLoadingTpl}ngOnDestroy(){this.subscription&&(this.subscription.unsubscribe(),this.subscription=null)}detachLoader(){this.loaderTplHandler?.detachView()}resolveScope(e,n){let i=this.scopeResolver.resolve({inline:this.inlineScope,provider:n});this.path=this.langResolver.resolveLangPath(e,i);let r=je(n,i);return this.service._loadDependencies(this.path,r)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=ae({type:t,selectors:[["","transloco",""]],inputs:{key:[T.None,"transloco","key"],params:[T.None,"translocoParams","params"],inlineScope:[T.None,"translocoScope","inlineScope"],inlineRead:[T.None,"translocoRead","inlineRead"],inlineLang:[T.None,"translocoLang","inlineLang"],inlineTpl:[T.None,"translocoLoadingTpl","inlineTpl"]},standalone:!0,features:[oe]})}return t})();var At=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ie({})}return t})();function St(t){let s=[Xe(_e),tt(xe),nt(Ve),et(Ke)];return t.config&&s.push(qe(t.config)),t.loader&&s.push(Qe(t.loader)),s}function qe(t){return O([{provide:w,useValue:De(t)}])}function Qe(t){return O([{provide:Te,useClass:t}])}function Xe(t){return O([{provide:Se,useClass:t,deps:[w]}])}function et(t){return O([{provide:Ce,useClass:t,deps:[w]}])}function tt(t){return O([{provide:me,useClass:t}])}function nt(t){return O([{provide:we,useClass:t}])}var mt=new v("TRANSLOCO_TEST_LANGS - Available testing languages"),wt=new v("TRANSLOCO_TEST_OPTIONS - Testing options");export{Ot as a,At as b,St as c};
