import{a as J}from"./chunk-GQ2ZFTK7.js";import{A as vt,B as ht,C as j,D as B,E as Y,F as gt,G as _t,H as N,I as Mt,J as St,K as yt,L as bt,M as Dt,N as wt,O as Tt,P as Et,Q as f,a as O,b as ut,c as L,d as R,e as ft,t as A,u as q,v as V,w as z,x as Ct,y as H,z as xt}from"./chunk-VSHMV2X7.js";import{$a as P,Aa as S,Ab as T,Ba as y,Ca as a,Da as r,Ea as Z,Fa as w,Ia as u,Ja as x,L as E,Ma as at,Q as m,Qa as rt,R as k,Ra as st,Sa as ct,Ta as Q,U as _,Ua as c,V as M,Va as pt,Wa as b,Ya as v,a as et,ab as F,b as it,ja as p,ka as C,na as D,nb as W,ob as h,sa as $,ta as ot,ua as d,vb as lt,wb as mt,xb as I,ya as G,yb as dt,za as nt}from"./chunk-BDA2P7AG.js";var Ft=(()=>{let t=class t{constructor(i){this.router=i}logout(){this.router.navigate(["/login"])}};t.\u0275fac=function(e){return new(e||t)(C(I))},t.\u0275cmp=m({type:t,selectors:[["app-main"]],standalone:!0,features:[v],decls:15,vars:1,consts:[["color","primary","fxLayout","row","fxLayoutAlign","space-between center"],["routerLink","/",2,"display","flex"],["src","assets/images/logo-white.svg",2,"width","150px"],["fxLayout","row"],["mat-icon-button","",3,"mat-menu-trigger-for"],["x-position","before"],["menu","matMenu"],["mat-menu-item","",3,"click"]],template:function(e,n){if(e&1&&(a(0,"mat-toolbar",0)(1,"span")(2,"a",1),Z(3,"img",2),r()(),a(4,"div",3)(5,"button",4)(6,"mat-icon"),c(7,"person"),r()()()(),a(8,"mat-menu",5,6)(10,"button",7),u("click",function(){return n.logout()}),a(11,"mat-icon"),c(12,"exit_to_app"),r(),c(13," Logout "),r()(),Z(14,"router-outlet")),e&2){let s=Q(9);p(5),d("mat-menu-trigger-for",s)}},dependencies:[h,mt,f,O,R,ft,vt,xt,ht,j,Y,T,dt]});let o=t;return o})();var U=[{_id:"a4dg6x1",name:"Work station",positions:[{name:"1",enabled:!0},{name:"2",enabled:!1},{name:"3",enabled:!0},{name:"4",enabled:!1},{name:"5",enabled:!0},{name:"6",enabled:!0},{name:"7",enabled:!0}],enabled:!0},{_id:"n21f256",name:"Parking",positions:[{name:"A",enabled:!0},{name:"B",enabled:!1},{name:"C",enabled:!0},{name:"D",enabled:!0}],enabled:!0}];var It=[{_id:"ji349m93c2423",startAt:new Date,endAt:new Date,concept:{_id:"a4dg6x1",name:"Work station",positions:[{name:"1",enabled:!1}]},user:"javi"}];var Qt=["conceptsSelector"],Wt=(o,t)=>t._id;function qt(o,t){if(o&1&&(a(0,"mat-list-option",3),c(1),r()),o&2){let l=t.$implicit;d("value",l._id),p(),pt(l.name)}}var Rt=(()=>{let t=class t{constructor(i){this.router=i,this.concepts=[...U]}onSchedule(){if(!this.conceptsSelector.selectedOptions.isEmpty()){let e=this.conceptsSelector.selectedOptions.selected.map(n=>n.value);this.router.navigate(["/schedule"],{queryParams:{concepts:e}})}}};t.\u0275fac=function(e){return new(e||t)(C(I))},t.\u0275cmp=m({type:t,selectors:[["app-select-concept"]],viewQuery:function(e,n){if(e&1&&rt(Qt,5),e&2){let s;st(s=ct())&&(n.conceptsSelector=s.first)}},standalone:!0,features:[v],decls:14,vars:1,consts:[["conceptsSelector",""],["align","end"],["mat-flat-button","","color","primary","matTooltip","Schedule the selected concepts",3,"disabled","click"],[3,"value"]],template:function(e,n){if(e&1&&(a(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),c(3,"Concepts"),r(),a(4,"mat-card-subtitle"),c(5,"Select the concepts you want to schedule"),r()(),a(6,"mat-card-content")(7,"mat-selection-list",null,0),S(9,qt,2,2,"mat-list-option",3,Wt),r()(),a(11,"mat-card-actions",1)(12,"button",2),u("click",function(){return n.onSchedule()}),c(13," Schedule "),r()()()),e&2){let s=Q(8);p(9),y(n.concepts),p(3),d("disabled",s.selectedOptions.isEmpty())}},dependencies:[h,f,A,Ct,V,H,z,q,B,_t,gt,N,T,J],styles:["mat-card[_ngcontent-%COMP%]{max-width:400px;margin:1em auto}"]});let o=t;return o})();var At=(()=>{let t=class t{constructor(i){this.dialogRef=i}};t.\u0275fac=function(e){return new(e||t)(C(yt))},t.\u0275cmp=m({type:t,selectors:[["app-confirm"]],standalone:!0,features:[v],decls:9,vars:2,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions","","align","end"],["mat-button","",3,"mat-dialog-close"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(e,n){e&1&&(a(0,"h1",0),c(1,"Remove reservation"),r(),a(2,"div",1),c(3,"Would you like to remove the reservation?"),r(),a(4,"div",2)(5,"button",3),c(6,"No"),r(),a(7,"button",4),c(8,"Yes"),r()()),e&2&&(p(5),d("mat-dialog-close",!1),p(2),d("mat-dialog-close",!0))},dependencies:[f,B,Dt,wt,Et,Tt]});let o=t;return o})();var Yt=(o,t)=>t._id;function Jt(o,t){o&1&&(a(0,"mat-icon",6),c(1,"check"),r())}function Kt(o,t){if(o&1){let l=w();a(0,"button",5),u("click",function(){let n=_(l).$implicit,s=x();return M(s.onSelectionChange(s.date,n))}),$(1,Jt,2,0,"mat-icon",6),c(2),r()}if(o&2){let l=t.$implicit,i=x();p(),G(1,i.isReserved(i.date,l)?1:-1),p(),b(" ",i.renderConcept(i.date,l)," ")}}var Vt=(()=>{let t=class t{constructor(i){this.dialog=i,this.date=new Date,this.concepts=[],this.reservations=[],this.selectedConcept=new D,this.deselectConcept=new D}onSelectionChange(i,e){this.isReserved(i,e)?this.dialog.open(At).afterClosed().subscribe(s=>{s&&this.deselectConcept.emit({date:i,concept:e})}):this.selectedConcept.emit({date:i,concept:e})}renderConcept(i,e){let n=this.isReserved(i,e),s=`Select ${e.name.toLowerCase()}`;return n&&(s=n.concept.positions[0].name),s}isReserved(i,e){return this.reservations.find(n=>n.concept._id===e._id&&n.startAt.toDateString()===i.toDateString())}};t.\u0275fac=function(e){return new(e||t)(C(bt))},t.\u0275cmp=m({type:t,selectors:[["app-date-item"]],inputs:{date:"date",concepts:"concepts",reservations:"reservations"},outputs:{selectedConcept:"selectedConcept",deselectConcept:"deselectConcept"},standalone:!0,features:[v],decls:15,vars:12,consts:[["fxLayout","row","fxLayoutGap","10px"],["fxLayout","column","fxLayoutAlign","center center",1,"date-container",3,"matTooltip"],[1,"day"],["fxFlex",""],["fxLayout","column","fxLayoutGap","5px",1,"mat-mdc-chip-set-stacked"],["mat-stroked-button","",3,"click"],["color","primary"],["mat-stroked-button",""]],template:function(e,n){e&1&&(a(0,"mat-card")(1,"mat-card-content")(2,"div",0)(3,"div",1),P(4,"date"),a(5,"div",2),c(6),P(7,"date"),r(),a(8,"div"),c(9),P(10,"date"),r()(),a(11,"div",3)(12,"div",4),S(13,Kt,3,2,"button",7,Yt),r()()()()()),e&2&&(p(3),at("matTooltip",F(4,3,n.date,"fullDate")),p(3),b(" ",F(7,6,n.date,"dd")," "),p(3),b(" ",F(10,9,n.date,"EE")," "),p(4),y(n.concepts))},dependencies:[h,W,f,O,ut,R,L,A,V,j,B,N,J],styles:[".date-container[_ngcontent-%COMP%]{text-align:center;color:#323c3c}.day[_ngcontent-%COMP%]{font-size:28px;font-weight:500}mat-card[_ngcontent-%COMP%]{margin-bottom:10px}button[_ngcontent-%COMP%]{width:100%;align-items:left;justify-content:left;font-weight:400!important}"]});let o=t;return o})();var jt=(()=>{let t=class t{constructor(){this.positionSelected=new D}onClick(){this.position.enabled&&this.positionSelected.emit(this.position)}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=m({type:t,selectors:[["app-position"]],inputs:{position:"position"},outputs:{positionSelected:"positionSelected"},decls:3,vars:2,consts:[["fxLayoutAlign","center","fxFlex","",1,"position-card",3,"click"]],template:function(e,n){e&1&&(a(0,"div",0),u("click",function(){return n.onClick()}),a(1,"span"),c(2),r()()),e&2&&(ot("disabled",n.position.enabled?null:!0),p(2),b(" ",n.position.name," "))},dependencies:[R,L],styles:[".position-card[_ngcontent-%COMP%]{border-radius:5px;border-top:3px solid #00b096;padding:15px 10px;cursor:pointer;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f}.position-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#323c3c;font-size:18px;font-weight:500}.position-card[_ngcontent-%COMP%]:hover{box-shadow:0 3px 5px -1px #0003,0 5px 8px #00000024,0 1px 14px #0000001f}.position-card[disabled][_ngcontent-%COMP%]{cursor:default;border-top:3px solid #45bfa8;background-color:#efefef}.position-card[disabled][_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:gray}.position-card[disabled][_ngcontent-%COMP%]:hover{box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f}"]});let o=t;return o})();var Xt=(o,t)=>t.name;function Zt(o,t){if(o&1){let l=w();a(0,"div",3)(1,"app-position",4),u("positionSelected",function(e){_(l);let n=x();return M(n.onPositionSelected(e))}),r()()}if(o&2){let l=t.$implicit;p(),d("position",l)}}var Bt=(()=>{let t=class t{constructor(){this.positionSelected=new D}onPositionSelected(i){this.positionSelected.emit(i)}goBack(){this.positionSelected.emit()}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=m({type:t,selectors:[["app-position-list"]],inputs:{date:"date",concept:"concept"},outputs:{positionSelected:"positionSelected"},decls:14,vars:4,consts:[[1,"card-header-actions"],["mat-icon-button","","aria-label","Go back","color","accent","matTooltip","Go back",3,"click"],["fxLayout","row wrap"],["fxFlex","20","fxFlex.xs","25",1,"item"],[3,"position","positionSelected"],["class","item","fxFlex","20","fxFlex.xs","25"]],template:function(e,n){e&1&&(a(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),c(3,"Work station"),r(),a(4,"mat-card-subtitle"),c(5),P(6,"date"),r(),a(7,"div",0)(8,"button",1),u("click",function(){return n.goBack()}),a(9,"mat-icon"),c(10,"arrow_back"),r()()()(),a(11,"mat-card-content",2),S(12,Zt,2,1,"div",5,Xt),r()()),e&2&&(p(5),b("Select a work station for the date ",F(6,1,n.date,"mediumDate"),""),p(7),y(n.concept.positions))},dependencies:[O,L,A,V,H,z,q,j,Y,N,jt,W],styles:[".item[_ngcontent-%COMP%]{padding:5px}.card-header-actions[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-end}"]});let o=t;return o})();var Nt=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=k({type:t}),t.\u0275inj=E({imports:[h,f]});let o=t;return o})();function ee(o,t){if(o&1){let l=w();a(0,"app-date-item",4),u("selectedConcept",function(e){_(l);let n=x();return M(n.onSelectedConcept(e))})("deselectConcept",function(e){_(l);let n=x();return M(n.onDeselectConcept(e))}),r()}if(o&2){let l=t.$implicit,i=x();d("date",l)("concepts",i.concepts)("reservations",i.reservations)}}function ie(o,t){if(o&1){let l=w();a(0,"app-position-list",5),u("positionSelected",function(e){_(l);let n=x();return M(n.onPositionSelected(e))}),r()}if(o&2){let l=x();d("date",l.selectedConcept.date)("concept",l.selectedConcept.concept)}}var $t=(()=>{let t=class t{constructor(i,e){this.router=i,this.activatedRoute=e,this.dateRange=[],this.concepts=[],this.reservations=[],this.activeTab=0,this.selectedConcept=null;let n=e.snapshot.queryParams;this.concepts=this.loadConcepts(n.concepts),this.reservations=this.loadReservations(n.concepts);let s=new Date,X=new Date;X.setDate(X.getDate()+15),this.dateRange=this.createDateRange(s,X)}loadConcepts(i){if(!i?.length)throw this.router.navigate(["/"]),new Error("Concept ids where not provided");return U.filter(n=>typeof i=="string"?n._id===i:i.includes(n._id))}loadReservations(i){return It}createDateRange(i,e){let n=[];for(let s=new Date(i);s<new Date(e);s.setDate(s.getDate()+1))s.getDay()!=6&&s.getDay()!=0&&n.push(new Date(s));return n}onSelectedConcept(i){this.selectedConcept=i,this.activeTab=1}onPositionSelected(i){if(this.activeTab=0,i&&this.selectedConcept){let e={_id:"x"+Math.floor(Math.random()*1e10),startAt:this.selectedConcept.date,endAt:this.selectedConcept.date,concept:it(et({},this.selectedConcept.concept),{positions:[i]}),user:"xavi"};this.reservations.push(e)}}onDeselectConcept(i){this.reservations=[...this.reservations.filter(e=>!(e.concept._id===i.concept._id&&e.startAt.toDateString()===i.date.toDateString()))]}};t.\u0275fac=function(e){return new(e||t)(C(I),C(lt))},t.\u0275cmp=m({type:t,selectors:[["app-select-date"]],standalone:!0,features:[v],decls:11,vars:2,consts:[[1,"container"],[3,"selectedIndex"],[1,"tab-container"],[3,"date","concept"],[3,"date","concepts","reservations","selectedConcept","deselectConcept"],[3,"date","concept","positionSelected"],[3,"date","concepts","reservations"]],template:function(e,n){e&1&&(a(0,"div",0)(1,"mat-tab-group",1)(2,"mat-tab")(3,"div",2)(4,"h3"),c(5,"Lorem ipsum"),r(),S(6,ee,1,3,"app-date-item",6,nt),r()(),a(8,"mat-tab")(9,"div",2),$(10,ie,1,2,"app-position-list",3),r()()()()),e&2&&(p(),d("selectedIndex",n.activeTab),p(5),y(n.dateRange),p(4),G(10,n.selectedConcept?10:-1))},dependencies:[Vt,f,Mt,St,Nt,Bt],styles:[".container[_ngcontent-%COMP%]{max-width:600px;margin:1em auto;padding:0 5px}[_nghost-%COMP%]     mat-tab-header{display:none!important}.tab-container[_ngcontent-%COMP%]{padding:5px}"]});let o=t;return o})();var oe=[{path:"",component:Ft,children:[{path:"",component:Rt},{path:"schedule",component:$t}]}],Gt=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=k({type:t}),t.\u0275inj=E({imports:[T.forChild(oe),T]});let o=t;return o})();var li=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=k({type:t}),t.\u0275inj=E({imports:[h,Gt]});let o=t;return o})();export{li as MainModule};
