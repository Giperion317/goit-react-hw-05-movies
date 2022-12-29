"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[945],{1328:function(n,t,r){r.r(t),r.d(t,{default:function(){return g}});var e,a,u,s,c,i=r(9439),o=r(2791),p=r(7689),f=r(1892),h=r(8565),l=r(2483),d=r(168),x=r(6444),m=x.ZP.p(e||(e=(0,d.Z)(["\n  text-align: center;\n  font-size: 18px;\n  padding: 20px 0;\n  color: ",";\n"])),(function(n){return n.theme.colors.black})),v=x.ZP.ul(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]))),Z=x.ZP.li(u||(u=(0,d.Z)(["\n  width: 100px;\n  margin-bottom: 20px;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 2px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n"]))),y=x.ZP.b(s||(s=(0,d.Z)(["\n  font-size: 16px;\n  color: ",";\n"])),(function(n){return n.theme.colors.primory})),w=x.ZP.span(c||(c=(0,d.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  color: ",";\n"])),(function(n){return n.theme.colors.accent})),b=r(184),g=function(){var n=(0,o.useState)([]),t=(0,i.Z)(n,2),r=t[0],e=t[1],a=(0,o.useState)(!1),u=(0,i.Z)(a,2),s=u[0],c=u[1],d=(0,p.UO)().movieId;return(0,o.useEffect)((function(){c(!0),(0,h.uV)(d).then((function(n){var t=n.cast;t.length&&e(t)})).catch((function(n){console.log(n.message)})).finally((function(){c(!1)}))}),[d]),(0,b.jsxs)(b.Fragment,{children:[s&&(0,b.jsx)(l.a,{}),s||0!==r.length?(0,b.jsx)(v,{children:r.map((function(n){var t=n.character,r=n.name,e=n.profile_path,a=n.id;return(0,b.jsxs)(Z,{children:[e?(0,b.jsx)("img",{src:"https://image.tmdb.org/t/p/original"+e,alt:r,width:"100"}):(0,b.jsx)(f.ZP,{name:r,round:!0,style:{marginTop:25,marginBottom:25}}),(0,b.jsx)(y,{children:r}),(0,b.jsxs)("p",{children:["Character: ",(0,b.jsx)(w,{children:t})]})]},a)}))}):(0,b.jsx)(m,{children:"We don't have cast for this movie!"})]})}},8565:function(n,t,r){r.d(t,{Hx:function(){return d},I2:function(){return m},f4:function(){return p},uV:function(){return h},vw:function(){return i},zU:function(){return Z}});var e=r(5861),a=r(7757),u=r.n(a),s=r(2388),c="abb31a7bed98d036dc34aaa5b39687ea";function i(){return o.apply(this,arguments)}function o(){return(o=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("trending/movie/day",{params:{api_key:c}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("/movie/".concat(t),{params:{api_key:c,append_to_response:"videos"}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("/movie/".concat(t,"/credits"),{params:{api_key:c}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("/movie/".concat(t,"/reviews"),{params:{api_key:c}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("/search/movie",{params:{api_key:c,query:t}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(n){return y.apply(this,arguments)}function y(){return(y=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("/movie/".concat(t,"/videos"),{params:{api_key:c}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=cast-subpage.f6d66597.chunk.js.map