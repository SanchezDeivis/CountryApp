import{L as c,M as l,N as d,P as u,S as s,T as f,U as h,V as M,Y as C,g as e,i as a,j as r,r as n,s as p,t as m}from"./chunk-6CNKBKWZ.js";var A=(()=>{class t{constructor(){this.title="countryApp"}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=a({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"row","mt-4"],[1,"col-3"],[1,"col"]],template:function(o,w){o&1&&(n(0,"div",0)(1,"div",1),m(2,"shared-sidebar"),p(),n(3,"div",2),m(4,"router-outlet"),p()())},dependencies:[u,f]})}}return t})();var v=[{path:"about",component:h},{path:"contact",component:M},{path:"countries",loadChildren:()=>import("./chunk-QF5SMNZV.js").then(t=>t.CountriesModule)},{path:"**",redirectTo:"countries"}],b=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=r({type:t})}static{this.\u0275inj=e({imports:[s.forRoot(v),s]})}}return t})();var y=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=r({type:t,bootstrap:[A]})}static{this.\u0275inj=e({imports:[d,b,C,c]})}}return t})();l().bootstrapModule(y).catch(t=>console.error(t));
