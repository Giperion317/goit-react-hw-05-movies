"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[223],{564:function(n,t,r){r.d(t,{T:function(){return b}});var e,a,i,o,s,c=r(689),u=r(168),p=r(87),f=r(444),l=f.ZP.ul(e||(e=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]))),d=f.ZP.li(a||(a=(0,u.Z)(["\n  width: 270px;\n  margin-bottom: 20px;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 2px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 500ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 8px 12px 14px 2px rgba(71, 71, 71, 0.6);\n  }\n"]))),x=(0,f.ZP)(p.rU)(i||(i=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n"]))),h=f.ZP.div(o||(o=(0,u.Z)(["\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 5px;\n  background-color: #e4e7e7;\n"]))),m=f.ZP.h2(s||(s=(0,u.Z)(["\n  font-size: 24px;\n  font-weight: 500;\n  color: ",";\n"])),(function(n){return n.theme.colors.primory})),v=r(184),b=function(n){var t=n.movies,r=(0,c.TH)();return console.log(t),(0,v.jsx)(l,{children:t&&t.map((function(n){var t=n.original_title,e=n.id,a=n.poster_path;return(0,v.jsx)(d,{children:(0,v.jsxs)(x,{to:"/movies/".concat(e),state:{from:r},children:[(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/original"+a,alt:t,width:"270"}),(0,v.jsx)(h,{children:(0,v.jsx)(m,{children:t})})]})},e)}))})}},156:function(n,t,r){r.r(t),r.d(t,{default:function(){return l}});var e,a=r(439),i=r(791),o=r(565),s=r(564),c=r(483),u=r(168),p=r(444).ZP.h1(e||(e=(0,u.Z)(["\n  font-weight: 700;\n  font-size: 50px;\n  color: ",";\n  margin-bottom: 30px;\n"])),(function(n){return n.theme.colors.accent})),f=r(184),l=function(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),r=t[0],e=t[1],u=(0,i.useState)(!1),l=(0,a.Z)(u,2),d=l[0],x=l[1];return(0,i.useEffect)((function(){x(!0),(0,o.vw)().then(e).catch((function(n){console.log(n.message)})).finally((function(){x(!1)}))}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{children:"Trending today"}),d&&(0,f.jsx)(c.a,{}),!d&&r.length&&(0,f.jsx)(s.T,{movies:r})]})}},565:function(n,t,r){r.d(t,{Hx:function(){return x},I2:function(){return m},f4:function(){return p},uV:function(){return l},vw:function(){return c}});var e=r(861),a=r(757),i=r.n(a),o=r(388),s="abb31a7bed98d036dc34aaa5b39687ea";function c(){return u.apply(this,arguments)}function u(){return(u=(0,e.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("trending/movie/day",{params:{api_key:s}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/movie/".concat(t),{params:{api_key:s,append_to_response:"videos"}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/movie/".concat(t,"/credits"),{params:{api_key:s}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/movie/".concat(t,"/reviews"),{params:{api_key:s}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/search/movie",{params:{api_key:s,query:t}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=home-page.5a8858fb.chunk.js.map