"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[369],{528:function(e,t,r){r.r(t);var n=r(439),a=r(791),s=r(689),i=r(87),u=r(565),c=r(483),o=r(184);t.default=function(){var e=(0,a.useState)(null),t=(0,n.Z)(e,2),r=t[0],p=t[1],l=(0,a.useState)(!1),f=(0,n.Z)(l,2),d=f[0],h=f[1],v=(0,s.UO)().movieId,m=(0,s.s0)(),x=(0,s.TH)();(0,a.useEffect)((function(){h(!0),(0,u.f4)(v).then(p).catch((function(e){console.log(e.message)})).finally((function(){h(!1)}))}),[v]);return(0,o.jsxs)("section",{children:[d&&(0,o.jsx)(c.a,{}),!d&&r&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{type:"button",onClick:function(){var e,t;m(null!==(e=null===x||void 0===x||null===(t=x.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/")},children:"Go back"}),(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/original"+r.poster_path,alt:r.original_title,width:"300"}),(0,o.jsx)("h1",{children:r.original_title}),(0,o.jsxs)("p",{children:["User Score: ",r.vote_average]}),(0,o.jsx)("h2",{children:"Overview"}),(0,o.jsx)("p",{children:r.overview}),(0,o.jsx)("h3",{children:"Genres"}),(0,o.jsx)("p",{children:r.genres.map((function(e){return e.name})).join(" ")}),(0,o.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(function(){var e=r.videos.results;return e.find((function(e){return"Trailer"===e.type}))?e.find((function(e){return"Trailer"===e.type})).key:e[0].key}()),title:r.original_title,frameBorder:"0",allowFullScreen:!0}),(0,o.jsx)("hr",{}),(0,o.jsx)(i.rU,{to:"cast",state:x.state,children:"Cast"}),(0,o.jsx)(i.rU,{to:"reviews",state:x.state,children:"Revievs"}),(0,o.jsx)("hr",{}),(0,o.jsx)(a.Suspense,{fallback:(0,o.jsx)(c.a,{}),children:(0,o.jsx)(s.j3,{})})]})]})}},565:function(e,t,r){r.d(t,{Hx:function(){return h},I2:function(){return m},f4:function(){return p},uV:function(){return f},vw:function(){return c}});var n=r(861),a=r(757),s=r.n(a),i=r(388),u="abb31a7bed98d036dc34aaa5b39687ea";function c(){return o.apply(this,arguments)}function o(){return(o=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("trending/movie/day",{params:{api_key:u}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/movie/".concat(t),{params:{api_key:u,append_to_response:"videos"}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/movie/".concat(t,"/credits"),{params:{api_key:u}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/movie/".concat(t,"/reviews"),{params:{api_key:u}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/search/movie",{params:{api_key:u,query:t}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=movie-full-info-page.9139008d.chunk.js.map