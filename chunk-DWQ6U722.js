import{a as ze,d as ae,f as se,g as Ue,j as We,m as qe}from"./chunk-UAZJNPXO.js";import{A as H,B as ke,D as Ee,E as Le,F as Oe,G as I,H as Pe,I as Ae,J as U,K as $e,L as je,M as Be,N as Ve,O as Ye,P as Ne,Q as Ge,R as He,S as Qe,T as g,a as j,b as Te,c as B,d as V,e as Re,v as Y,w as N,x as G,y as re,z as Ie}from"./chunk-Y4STISLT.js";import{$ as y,$a as be,Ba as ge,Da as ee,Ea as _e,Fa as w,Ga as F,Gb as we,Ha as r,Hb as ie,Ia as a,Ib as Fe,Ja as J,Ka as T,Kb as L,Oa as u,Q as he,Qa as f,Qb as A,R as O,Rb as $,T as xe,W as v,Wa as Se,X as P,Xa as Me,Ya as ye,Za as te,_ as M,_a as c,ab as b,cb as _,e as ce,ec as ne,fb as h,gb as D,hb as K,id as Q,jd as z,o as Z,p as Ce,pa as l,qa as m,rb as De,sa as k,tb as R,vb as oe,wb as x,xa as E,za as d}from"./chunk-3IOVUQRB.js";var Ze=(()=>{let e=class e{constructor(i,t){this.store=i,this.authFacade=t,this.user$=this.authFacade.user$,this.loadConcepts()}loadConcepts(){this.store.dispatch(ze())}logout(){this.authFacade.logout()}};e.\u0275fac=function(t){return new(t||e)(m(A),m(ne))},e.\u0275cmp=v({type:e,selectors:[["app-main"]],standalone:!0,features:[_],decls:16,vars:4,consts:[["color","primary","fxLayout","row","fxLayoutAlign","space-between center"],["routerLink","/",2,"display","flex"],["src","assets/images/logo-white.svg",2,"width","150px"],["fxLayout","row"],["mat-icon-button","",3,"mat-menu-trigger-for","matTooltip"],["x-position","before"],["menu","matMenu"],["mat-menu-item","","routerLink","/profile"],["mat-menu-item","",3,"click"]],template:function(t,n){if(t&1&&(r(0,"mat-toolbar",0)(1,"span")(2,"a",1),J(3,"img",2),a()(),r(4,"div",3)(5,"button",4),h(6,"async"),r(7,"mat-icon"),c(8,"person"),a()()()(),r(9,"mat-menu",5,6)(11,"a",7),c(12," My profile "),a(),r(13,"button",8),u("click",function(){return n.logout()}),c(14," Logout "),a()(),J(15,"router-outlet")),t&2){let s=te(10),C;l(5),d("mat-menu-trigger-for",s)("matTooltip",((C=D(6,2,n.user$))==null?null:C.account)||"")}},dependencies:[x,R,we,g,j,V,Re,Le,Ee,Oe,I,z,U,L,Fe]});let o=e;return o})();var vt=o=>o.concept,et=$(vt,o=>o.concepts);var Ct=["conceptsSelector"],ht=(o,e)=>e.id;function xt(o,e){if(o&1&&(r(0,"mat-list-option",4),c(1),a()),o&2){let p=e.$implicit;d("value",p),l(),be(p.code)}}function gt(o,e){o&1&&(r(0,"mat-card-footer"),J(1,"mat-progress-bar",5),a())}var tt=(()=>{let e=class e{constructor(i,t){this.store=i,this.router=t,this.concepts$=this.store.select(et),this.isLoading$=this.store.select(n=>n.concept.loading)}onSchedule(){if(!this.conceptsSelector.selectedOptions.isEmpty()){let t=this.conceptsSelector.selectedOptions.selected.map(n=>n.value);this.router.navigateByUrl("/schedule",{state:{selectedConcepts:t}})}}};e.\u0275fac=function(t){return new(t||e)(m(A),m(ie))},e.\u0275cmp=v({type:e,selectors:[["app-select-concept"]],viewQuery:function(t,n){if(t&1&&Se(Ct,5),t&2){let s;Me(s=ye())&&(n.conceptsSelector=s.first)}},standalone:!0,features:[_],decls:17,vars:6,consts:[["conceptsSelector",""],["align","end"],["mat-flat-button","","color","primary",3,"disabled","click"],[4,"ngIf"],[3,"value"],["mode","indeterminate","color","primary"]],template:function(t,n){if(t&1&&(r(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),c(3,"Concepts"),a(),r(4,"mat-card-subtitle"),c(5,"Select the concepts you want to schedule"),a()(),r(6,"mat-card-content")(7,"mat-selection-list",null,0),w(9,xt,2,2,"mat-list-option",4,ht),h(11,"async"),a()(),r(12,"mat-card-actions",1)(13,"button",2),u("click",function(){return n.onSchedule()}),c(14," Schedule "),a()(),E(15,gt,2,0,"mat-card-footer",3),h(16,"async"),a()),t&2){let s=te(8);l(9),F(D(11,2,n.concepts$)),l(4),d("disabled",s.selectedOptions.isEmpty()),l(2),d("ngIf",D(16,4,n.isLoading$))}},dependencies:[x,De,R,g,Y,Ie,G,ke,H,re,N,Q,Ae,Pe,Qe,L,ae],styles:["mat-card[_ngcontent-%COMP%]{max-width:400px;margin:1em auto}"]});let o=e;return o})();var ot=(()=>{let e=class e{constructor(i){this.dialogRef=i}};e.\u0275fac=function(t){return new(t||e)(m(Be))},e.\u0275cmp=v({type:e,selectors:[["app-confirm"]],standalone:!0,features:[_],decls:9,vars:2,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions","","align","end"],["mat-button","",3,"mat-dialog-close"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(t,n){t&1&&(r(0,"h1",0),c(1,"Remove reservation"),a(),r(2,"div",1),c(3,"Would you like to remove the reservation?"),a(),r(4,"div",2)(5,"button",3),c(6,"No"),a(),r(7,"button",4),c(8,"Yes"),a()()),t&2&&(l(5),d("mat-dialog-close",!1),l(2),d("mat-dialog-close",!0))},dependencies:[g,Q,Ye,Ne,He,Ge]});let o=e;return o})();var at=ce(se());var ue=o=>o.reservation,it=$(ue,o=>o.reservations),nt=$(ue,o=>o.error),rt=$(ue,o=>o.loading);var fe=ce(se());var W=(()=>{let e=class e{constructor(i){this.store=i,this.reservations$=this.store.select(it),this.loading$=this.store.select(rt),this.error$=this.store.select(nt)}getAll(i,t){this.store.dispatch(Ue({concept:i,startDate:t}))}isSlotReserved(i,t,n){return this.reservations$.pipe(Z(s=>s.find(C=>(console.log(C.date.toString(),(0,fe.default)(i).format("YYYY-MM-DD")),C.concept===t.code&&C.date.toString()===(0,fe.default)(i).format("YYYY-MM-DD")&&C.slot===n.code))))}add(i){this.store.dispatch(We({reservation:i}))}remove(i){this.store.dispatch(qe({id:i}))}};e.\u0275fac=function(t){return new(t||e)(xe(A))},e.\u0275prov=he({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();var Mt=(o,e)=>e.id;function yt(o,e){if(o&1){let p=T();r(0,"button",6),u("click",function(){let n=M(p),s=f(2);return y(s.onRemoveReservation(n.id))}),r(1,"mat-icon",7),c(2,"check"),a(),r(3,"span"),c(4),a()()}o&2&&(ge("reserved",e),l(4),b(" ",e.slot," "))}function bt(o,e){if(o&1){let p=T();r(0,"button",6),u("click",function(){M(p);let t=f().$implicit,n=f();return y(n.selectConcept(n.date,t))}),c(1),a()}if(o&2){let p=f().$implicit;l(),b(" Select ",p.code.toLowerCase()," ")}}function Dt(o,e){if(o&1&&(E(0,yt,5,3,"button",5),h(1,"async"),E(2,bt,2,1)),o&2){let p=e.$implicit,i=f(),t;ee(0,(t=D(1,1,i.isReserved(i.date,p)))?0:2,t)}}var ct=(()=>{let e=class e{constructor(i,t,n){this.dialog=i,this.reservationFacade=t,this.authFacade=n,this.date=new Date,this.concepts=[],this.selectedConcept=new k,this.removeReservation=new k,this.reservations$=this.reservationFacade.reservations$}onRemoveReservation(i){this.dialog.open(ot).afterClosed().subscribe(n=>{n&&this.removeReservation.emit(i)})}selectConcept(i,t){this.selectedConcept.emit({date:i,concept:t})}isReserved(i,t){return Ce([this.reservations$,this.authFacade.user$]).pipe(Z(([s,C])=>s.find(q=>q.account===C?.account&&q.concept===t.code&&q.date.toString()===(0,at.default)(i).format("YYYY-MM-DD"))))}};e.\u0275fac=function(t){return new(t||e)(m(Ve),m(W),m(ne))},e.\u0275cmp=v({type:e,selectors:[["app-date-item"]],inputs:{date:"date",concepts:"concepts"},outputs:{selectedConcept:"selectedConcept",removeReservation:"removeReservation"},standalone:!0,features:[_],decls:14,vars:8,consts:[["fxLayout","row","fxLayoutGap","10px"],["fxLayout","column","fxLayoutAlign","center center",1,"date-container"],[1,"day"],["fxFlex",""],["fxLayout","column","fxLayoutGap","5px",1,"mat-mdc-chip-set-stacked"],["mat-stroked-button","",3,"reserved"],["mat-stroked-button","",3,"click"],["color","primary"]],template:function(t,n){t&1&&(r(0,"mat-card")(1,"mat-card-content")(2,"div",0)(3,"div",1)(4,"div",2),c(5),h(6,"date"),a(),r(7,"div"),c(8),h(9,"date"),a()(),r(10,"div",3)(11,"div",4),w(12,Dt,3,3,null,null,Mt),a()()()()()),t&2&&(l(5),b(" ",K(6,2,n.date,"dd")," "),l(3),b(" ",K(9,5,n.date,"EE")," "),l(4),F(n.concepts))},dependencies:[x,R,oe,g,j,Te,V,B,Y,G,I,Q,ae],styles:[".date-container[_ngcontent-%COMP%]{text-align:center;color:#323c3c}.day[_ngcontent-%COMP%]{font-size:28px;font-weight:500}mat-card[_ngcontent-%COMP%]{margin-bottom:10px}button[_ngcontent-%COMP%]{width:100%;align-items:left;justify-content:left;font-weight:400!important}.reserved[_ngcontent-%COMP%]{border-right:4px solid #00a184!important}"]});let o=e;return o})();var st=(()=>{let e=class e{constructor(){this.reserved=!1,this.slotSelected=new k}onClick(){this.slot.enabled&&!this.reserved&&this.slotSelected.emit(this.slot)}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=v({type:e,selectors:[["app-slot"]],inputs:{slot:"slot",reserved:"reserved"},outputs:{slotSelected:"slotSelected"},decls:3,vars:2,consts:[["fxLayoutAlign","center","fxFlex","",1,"slot-card",3,"disabled","click"]],template:function(t,n){t&1&&(r(0,"button",0),u("click",function(){return n.onClick()}),r(1,"span"),c(2),a()()),t&2&&(d("disabled",(n.reserved?!0:null)||(n.slot.enabled?null:!0)),l(2),b(" ",n.slot.code," "))},dependencies:[V,B],styles:[".slot-card[_ngcontent-%COMP%]{border:0;border-radius:5px;border-top:3px solid #00b096;padding:15px 10px;cursor:pointer;background-color:#fff;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f}.slot-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#323c3c;font-size:18px;font-weight:500}.slot-card[_ngcontent-%COMP%]:hover{box-shadow:0 3px 5px -1px #0003,0 5px 8px #00000024,0 1px 14px #0000001f}.slot-card[disabled][_ngcontent-%COMP%]{cursor:default;border-top:3px solid #45bfa8;background-color:#efefef}.slot-card[disabled][_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:gray}.slot-card[disabled][_ngcontent-%COMP%]:hover{box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f}"]});let o=e;return o})();var Ft=(o,e)=>e.code;function Tt(o,e){if(o&1){let p=T();r(0,"div",3)(1,"app-slot",4),u("slotSelected",function(t){M(p);let n=f();return y(n.onSlotSelected(t))}),h(2,"async"),a()()}if(o&2){let p=e.$implicit,i=f();l(),d("slot",p)("reserved",!!D(2,2,i.reservationFacade.isSlotReserved(i.date,i.concept,p)))}}var lt=(()=>{let e=class e{constructor(i){this.reservationFacade=i,this.slotSelected=new k}onSlotSelected(i){this.slotSelected.emit(i)}goBack(){this.slotSelected.emit()}};e.\u0275fac=function(t){return new(t||e)(m(W))},e.\u0275cmp=v({type:e,selectors:[["app-slot-list"]],inputs:{date:"date",concept:"concept"},outputs:{slotSelected:"slotSelected"},decls:14,vars:4,consts:[[1,"card-header-actions"],["mat-icon-button","","aria-label","Go back","color","accent","matTooltip","Go back",3,"click"],["fxLayout","row wrap"],["fxFlex","20","fxFlex.xs","25",1,"item"],[3,"slot","reserved","slotSelected"],["class","item","fxFlex","20","fxFlex.xs","25"]],template:function(t,n){t&1&&(r(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),c(3,"Work station"),a(),r(4,"mat-card-subtitle"),c(5),h(6,"date"),a(),r(7,"div",0)(8,"button",1),u("click",function(){return n.goBack()}),r(9,"mat-icon"),c(10,"arrow_back"),a()()()(),r(11,"mat-card-content",2),w(12,Tt,3,4,"div",5,Ft),a()()),t&2&&(l(5),b("Select a work station for the date ",K(6,1,n.date,"mediumDate"),""),l(7),F(n.concept.slots))},dependencies:[j,B,Y,G,H,re,N,I,z,U,st,R,oe],styles:[".item[_ngcontent-%COMP%]{padding:5px}.card-header-actions[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-end}"]});let o=e;return o})();var pt=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=P({type:e}),e.\u0275inj=O({imports:[x,g]});let o=e;return o})();var mt=ce(se());function It(o,e){if(o&1){let p=T();r(0,"app-date-item",6),u("selectedConcept",function(t){M(p);let n=f();return y(n.onSelectedConcept(t))})("removeReservation",function(t){M(p);let n=f();return y(n.onRemoveReservation(t))}),a()}if(o&2){let p=e.$implicit,i=f();d("date",p)("concepts",i.concepts)}}function kt(o,e){if(o&1){let p=T();r(0,"app-slot-list",7),u("slotSelected",function(t){M(p);let n=f();return y(n.onSlotSelected(t))}),a()}if(o&2){let p=f();d("date",p.selectedConcept.date)("concept",p.selectedConcept.concept)}}var dt=(()=>{let e=class e{constructor(i,t){this.router=i,this.reservationFacade=t,this.activeTab=0,this.selectedConcept=null;let n=this.router.getCurrentNavigation()?.extras?.state;if(n&&n.selectedConcepts){this.concepts=n.selectedConcepts;let s=new Date,C=new Date;C.setDate(C.getDate()+15),this.dateRange=this.createDateRange(s,C),this.loadReservations(this.concepts.map(q=>q.code))}else this.goHome()}loadReservations(i){let t=i[0];this.reservationFacade.getAll(t,new Date)}createDateRange(i,t){let n=[];for(let s=new Date(i);s<new Date(t);s.setDate(s.getDate()+1))s.getDay()!=6&&s.getDay()!=0&&n.push(new Date(s));return n}onSelectedConcept(i){this.selectedConcept=i,this.activeTab=1}onSlotSelected(i){if(this.activeTab=0,i&&this.selectedConcept){let t={date:(0,mt.default)(this.selectedConcept.date).format("YYYY-MM-DD"),concept:this.selectedConcept.concept.code,slot:i.code};this.reservationFacade.add(t)}}onRemoveReservation(i){this.reservationFacade.remove(i)}goHome(){this.router.navigateByUrl("")}};e.\u0275fac=function(t){return new(t||e)(m(ie),m(W))},e.\u0275cmp=v({type:e,selectors:[["app-select-date"]],standalone:!0,features:[_],decls:16,vars:2,consts:[[1,"container"],[3,"selectedIndex"],[1,"tab-container"],[1,"card-header-actions"],["mat-icon-button","","aria-label","Go back","color","accent","matTooltip","Go back",3,"click"],[3,"date","concept"],[3,"date","concepts","selectedConcept","removeReservation"],[3,"date","concept","slotSelected"],[3,"date","concepts"]],template:function(t,n){t&1&&(r(0,"div",0)(1,"mat-tab-group",1)(2,"mat-tab")(3,"div",2)(4,"mat-card-header")(5,"mat-card-title"),c(6,"Select the dates"),a(),r(7,"div",3)(8,"button",4),u("click",function(){return n.goHome()}),r(9,"mat-icon"),c(10,"arrow_back"),a()()()(),w(11,It,1,2,"app-date-item",8,_e),a()(),r(13,"mat-tab")(14,"div",2),E(15,kt,1,2,"app-slot-list",5),a()()()()),t&2&&(l(),d("selectedIndex",n.activeTab),l(10),F(n.dateRange),l(4),ee(15,n.selectedConcept?15:-1))},dependencies:[x,ct,g,H,N,I,z,U,$e,je,pt,lt],styles:[".container[_ngcontent-%COMP%]{max-width:600px;margin:1em auto;padding:0 5px}[_nghost-%COMP%]     mat-tab-header{display:none!important}.tab-container[_ngcontent-%COMP%]{padding:5px}.card-header-actions[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-end}"]});let o=e;return o})();var Et=[{path:"",component:Ze,children:[{path:"",component:tt},{path:"schedule",component:dt},{path:"profile",loadChildren:()=>import("./chunk-FRPZ7HC6.js").then(o=>o.ProfileModule)}]}],ut=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=P({type:e}),e.\u0275inj=O({imports:[L.forChild(Et),L]});let o=e;return o})();var Yo=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=P({type:e}),e.\u0275inj=O({imports:[x,ut]});let o=e;return o})();export{Yo as MainModule};
