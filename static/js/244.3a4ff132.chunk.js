"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[244],{5506:function(n,r,t){t.d(r,{Mn:function(){return p},h$:function(){return s},qj:function(){return u},aQ:function(){return c},WB:function(){return f}});var e=t(5861),a=t(4687),o=t.n(a),i=t(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/",i.Z.defaults.params={api_key:"eabf3be64fad896cb931bdc5f8933714"};var c=function(){var n=(0,e.Z)(o().mark((function n(r,t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/".concat(r),{params:{page:t}});case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),u=function(){var n=(0,e.Z)(o().mark((function n(r){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(r));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(o().mark((function n(r,t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie",{params:{query:r,page:t}});case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(o().mark((function n(r){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(r,"/credits"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(o().mark((function n(r){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(r,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},3559:function(n,r,t){t.d(r,{Z:function(){return h}});var e,a,o,i=t(168),c=t(7402),u=t(6355),s=c.Z.div(e||(e=(0,i.Z)(["\n  margin-top: 100px;\n  margin-bottom: 50px;\n  text-align: center;\n"]))),p=c.Z.h3(a||(a=(0,i.Z)(["\n  margin-bottom: 50px;\n  font-size: 40px;\n  text-shadow: 2px 3px var(--primary-color);\n"]))),f=(0,c.Z)(u.onh)(o||(o=(0,i.Z)(["\n  width: 130px;\n  height: 130px;\n  color: var(--primary-color);\n"]))),d=t(184),h=function(n){var r=n.message;return(0,d.jsxs)(s,{children:[(0,d.jsx)(p,{children:r}),(0,d.jsx)(f,{})]})}},6244:function(n,r,t){t.r(r),t.d(r,{default:function(){return z}});var e,a,o,i,c,u,s,p=t(9439),f=t(2791),d=t(7689),h=t(8977),x=t(5506),v=t(3559),m=t(6445),l=t(168),Z=t(7402),g=Z.Z.div(e||(e=(0,l.Z)([""]))),b=Z.Z.ul(a||(a=(0,l.Z)([""]))),w=Z.Z.li(o||(o=(0,l.Z)(["\n  &:not(:last-child) {\n    padding-bottom: 10px;\n    border-bottom: 2px solid var(--primary-color);\n    margin-bottom: 10px;\n  }\n"]))),y=Z.Z.h4(i||(i=(0,l.Z)(["\n  margin-bottom: 5px;\n\n  font-size: 18px;\n  text-decoration: underline;\n  text-decoration-color: var(--primary-color);\n"]))),j=Z.Z.p(c||(c=(0,l.Z)(["\n  margin-bottom: 5px;\n\n  font-size: 16px;\n  font-weight: 400;\n"]))),k=Z.Z.p(u||(u=(0,l.Z)(["\n  font-size: 14px;\n  font-weight: 400;\n"]))),_=Z.Z.div(s||(s=(0,l.Z)(["\n  padding-bottom: 50vh;\n"]))),M=t(184),z=function(){var n=(0,d.UO)().movieId,r=(0,f.useState)([]),t=(0,p.Z)(r,2),e=t[0],a=t[1],o=(0,f.useState)("loading"),i=(0,p.Z)(o,2),c=i[0],u=i[1];return(0,f.useEffect)((function(){u("loading"),(0,x.WB)(n).then((function(n){0!==n.data.results.length?(a(n.data.results),u("good")):u("error")})).catch((function(){u("error")}))}),[n]),(0,M.jsxs)(g,{children:["loading"===c&&(0,M.jsx)(_,{children:(0,M.jsx)(m.Z,{})}),e&&(0,M.jsx)(b,{children:e.map((function(n){var r=(0,h.Z)(new Date(n.created_at),"dd MMMM yyyy");return(0,M.jsxs)(w,{children:[(0,M.jsx)(y,{children:n.author}),(0,M.jsx)(j,{children:r}),(0,M.jsx)(k,{children:n.content})]},n.id)}))}),"error"===c&&(0,M.jsx)(v.Z,{message:"Sorry, we didn't find this information"})]})}}}]);
//# sourceMappingURL=244.3a4ff132.chunk.js.map