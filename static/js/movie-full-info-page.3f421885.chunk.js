"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[369],{6853:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var r,i,a,o,s,c,u,p,l,h,d=t(9439),x=t(2791),f=t(7689),m=t(8565),v=t(2483),w=t(168),g=t(6444),b=t(1087),Z=g.ZP.button(r||(r=(0,w.Z)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  height: 25px;\n  margin-left: 30px;\n  margin-bottom: 20px;\n  color: ",";\n  background-color: #e4e7e7;\n  border-radius: 2px;\n  border-color: transparent;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  :focus {\n    background-color: ",";\n    color: ",";\n    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),\n      0px 2px 2px rgba(0, 0, 0, 0.12);\n  }\n"])),(function(n){return n.theme.colors.primory}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white})),y=g.ZP.div(i||(i=(0,w.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-bottom: 20px;\n"]))),j=g.ZP.div(a||(a=(0,w.Z)(["\n  width: 300px;\n  flex-wrap: wrap;\n  margin-left: 20px;\n  @media screen and (min-width: 768px) {\n    width: 350px;\n  }\n  @media screen and (min-width: 1200px) {\n    width: 600px;\n  }\n"]))),k=g.ZP.h1(o||(o=(0,w.Z)(["\n  font-size: 40px;\n  font-weight: 700;\n  color: ",";\n  margin-bottom: 20px;\n"])),(function(n){return n.theme.colors.accent})),_=g.ZP.img(s||(s=(0,w.Z)(["\n  width: 300px;\n  height: 100%;\n  @media screen and (min-width: 768px) {\n    width: 350px;\n  }\n  @media screen and (min-width: 1200px) {\n    width: 400px;\n  }\n"]))),P=g.ZP.h1(c||(c=(0,w.Z)(["\n  font-size: 30px;\n  font-weight: 500;\n  color: ",";\n  margin-bottom: 10px;\n"])),(function(n){return n.theme.colors.primory})),z=g.ZP.h1(u||(u=(0,w.Z)(["\n  font-size: 18px;\n  color: ",";\n  margin-bottom: 10px;\n"])),(function(n){return n.theme.colors.accent})),S=g.ZP.iframe(p||(p=(0,w.Z)(["\n  width: 250px;\n  @media screen and (min-width: 1200px) {\n    width: 400px;\n    height: 230px;\n  }\n"]))),U=(0,g.ZP)(b.rU)(l||(l=(0,w.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  color: ",";\n  margin-right: 60px;\n  margin-bottom: 20px;\n"])),(function(n){return n.theme.colors.primory})),C=g.ZP.hr(h||(h=(0,w.Z)(["\n  color: ",";\n  margin: 20px 0;\n"])),(function(n){return n.theme.colors.primory})),F=t(9983),G=t(7692),H=t(184),I=function(){var n=(0,x.useState)(null),e=(0,d.Z)(n,2),t=e[0],r=e[1],i=(0,x.useState)(null),a=(0,d.Z)(i,2),o=a[0],s=a[1],c=(0,x.useState)(!1),u=(0,d.Z)(c,2),p=u[0],l=u[1],h=(0,f.UO)().movieId,w=(0,f.s0)(),g=(0,f.TH)();return(0,x.useEffect)((function(){l(!0),(0,m.f4)(h).then(r).catch((function(n){console.log(n.message)})).finally((function(){l(!1)})),(0,m.zU)(h).then(s).catch((function(n){console.log(n.message)}))}),[h]),(0,H.jsxs)(H.Fragment,{children:[p&&(0,H.jsx)(v.a,{}),!p&&t&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(Z,{type:"button",onClick:function(){var n,e;w(null!==(n=null===g||void 0===g||null===(e=g.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/")},children:[(0,H.jsx)(F.Pd.Provider,{value:{size:30,color:"#e31e28"},children:(0,H.jsx)(G.Wpx,{})}),"Go back"]}),(0,H.jsx)(k,{children:t.original_title}),(0,H.jsxs)(y,{children:[(0,H.jsx)(_,{src:"https://image.tmdb.org/t/p/original"+t.poster_path,alt:t.original_title}),(0,H.jsxs)(j,{children:[(0,H.jsxs)(z,{children:["User Score: ",10*t.vote_average,"%"]}),(0,H.jsx)("hr",{}),(0,H.jsx)(P,{children:"Overview"}),(0,H.jsx)(z,{children:t.overview}),(0,H.jsx)("hr",{}),(0,H.jsx)(P,{children:"Genres"}),(0,H.jsx)(z,{children:t.genres.map((function(n){return n.name})).join(" ")}),(0,H.jsx)("hr",{}),(0,H.jsx)(P,{children:"Trailer"}),o&&(0,H.jsx)(S,{src:"https://www.youtube.com/embed/".concat(o[0].key),title:t.original_title,allowFullScreen:!0})]})]}),(0,H.jsx)(C,{}),(0,H.jsx)(U,{to:"cast",state:g.state,children:"Cast"}),(0,H.jsx)(U,{to:"reviews",state:g.state,children:"Revievs"}),(0,H.jsx)(C,{}),(0,H.jsx)(x.Suspense,{fallback:(0,H.jsx)(v.a,{}),children:(0,H.jsx)(f.j3,{})})]})]})}},8565:function(n,e,t){t.d(e,{Hx:function(){return x},I2:function(){return m},f4:function(){return p},uV:function(){return h},vw:function(){return c},zU:function(){return w}});var r=t(5861),i=t(7757),a=t.n(i),o=t(2388),s="abb31a7bed98d036dc34aaa5b39687ea";function c(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("trending/movie/day",{params:{api_key:s}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/movie/".concat(e),{params:{api_key:s,append_to_response:"videos"}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/movie/".concat(e,"/credits"),{params:{api_key:s}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/movie/".concat(e,"/reviews"),{params:{api_key:s}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/search/movie",{params:{api_key:s,query:e}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/movie/".concat(e,"/videos"),{params:{api_key:s}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=movie-full-info-page.3f421885.chunk.js.map