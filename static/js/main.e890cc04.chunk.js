(this.webpackJsonpcollege=this.webpackJsonpcollege||[]).push([[0],{24:function(e,n,t){e.exports=t.p+"static/media/college_00.619ee97e.jpg"},25:function(e,n,t){e.exports=t.p+"static/media/college_01.8793ec0e.jpg"},26:function(e,n,t){e.exports={Promoted:"Promoted_Promoted__3oyoN"}},30:function(e,n,t){e.exports={Rating:"Rating_Rating__2d8EK"}},32:function(e,n,t){e.exports={content:"Tag_content__3yXXz"}},33:function(e,n,t){e.exports=t(62)},38:function(e,n,t){},39:function(e,n,t){},4:function(e,n,t){e.exports={Footer:"Footer_Footer__3KmGm",Left:"Footer_Left__2WpWz",Rating:"Footer_Rating__3fmHN",holder:"Footer_holder__2xaXQ",Right:"Footer_Right__SJ5Ty",Tag:"Footer_Tag__1-vF9"}},62:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(22),i=t.n(o),c=(t(38),t(9)),l=t(6),s=(t(39),t(23)),u=t.n(s),d=t(2),m=t(3),g=t(24),f=t.n(g),p=t(25),h=t.n(p),b=t(26),E=t.n(b);function _(){var e=Object(d.a)(["\nwidth: 152px;\nheight: 0;\nborder-top: 18px solid #68a7ff;\nborder-left: 20px solid transparent;\nborder-bottom: 18px solid #68a7ff;\nposition:absolute;\nbox-sizing: border-box;\ndisplay:inline-block;\n:After {\n    content: 'PROMOTED';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    transform: translate(28px, -9px);\n    color:white;\n    font-size: 15px;\n    font-weight: 500;\n  }\n  \n}"]);return _=function(){return e},e}var v=m.a.div(_());function x(){return r.a.createElement(v,{className:E.a.Promoted})}var k=t(30),j=t.n(k);function w(e){return r.a.createElement("div",{className:j.a.Rating},r.a.createElement("div",null,r.a.createElement("h3",null,e.rating,"/"),r.a.createElement("h4",null,"5"),r.a.createElement("p",null,e.remark)))}function O(){var e=Object(d.a)(["\ndisplay:inline;\nheight: 34px;\nborder-radius:21px;\npadding:10px 15px;\nbackground-color:white;\nfont-size:13.5px;\ncolor:#444444;\nfont-weight:500;\nmargin-left:10px;\ntext-align:center;\n"]);return O=function(){return e},e}function y(){var e=Object(d.a)(["\nwidth: 100%;\nheight: 45px;\nposition: absolute;\nbottom:0px;"]);return y=function(){return e},e}function F(){var e=Object(d.a)(["\nwidth: 637.3px;\nbox-sizing: border-box;\nheight: 233.2px;\nposition:relative;\nbackground: url('","') no-repeat center center/cover;\npadding-left:10px;\n\n:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0.7;\n    background-color: #000000;\n  }\n  "]);return F=function(){return e},e}var N=m.a.div(F(),(function(e){return e.id%2===1?h.a:f.a})),R=m.a.div(y()),z=m.a.div(O());function C(e){return console.log(e),r.a.createElement(N,{id:e.id},e.promoted?r.a.createElement(x,null):null,r.a.createElement(w,{rating:e.rating,remark:e.remark}),r.a.createElement(R,null,e.tags.map((function(e,n){return r.a.createElement(z,{key:n},e)}))),r.a.createElement(z,{style:{color:"white",background:"transparent",right:0,bottom:-5,position:"absolute"}},e.ranking))}var P=t(4),T=t.n(P),S=t(31),M=t.n(S),W=t(32),I=t.n(W);function J(e){return r.a.createElement("div",{className:I.a.content},"\u2022",e.children)}function L(){var e=Object(d.a)(["\ndisplay:inline;\nwidth:347px;\nborder-top-right-radius:21px;\nborder-bottom-right-radius:21px;\npadding:10px 5px;\nbackground-color:#ccf5e7;\nfont-size:13.5px;\nline-height: 1.33;\nfont-weight:500;\ntext-align:center;\n"]);return L=function(){return e},e}var X=m.a.div(L());function B(e){return r.a.createElement("div",{className:T.a.Footer},r.a.createElement("div",{className:T.a.Left},r.a.createElement("div",{className:T.a.holder},r.a.createElement("h3",null,e.name),r.a.createElement(M.a,{classNames:T.a.Rating,count:5,size:16,activeColor:"#444444",value:e.rating,edit:!1})),r.a.createElement("p",null,e.nearestPlace.join(" | ")),r.a.createElement("p",null,r.a.createElement("span",null,"93% Match : "),e.fnp),r.a.createElement(X,null,e.offer)),r.a.createElement("div",{className:T.a.Right},r.a.createElement("div",{className:T.a.Tag},r.a.createElement("p",null,"\u20b9 ",e.originalFee),r.a.createElement(J,null,e.discount)),r.a.createElement("h2",null,"\u20b9 ",e.discountedFee),r.a.createElement("p",null,e.feeCycle),r.a.createElement(X,{style:{background:"transparent",color:"teal",width:"fit-content",padding:0,display:"inline"}},e.amenties.join(" , "))))}var G=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],i=Object(a.useState)(!1),s=Object(l.a)(i,2),d=s[0],m=s[1],g=Object(a.useState)(1),f=Object(l.a)(g,2),p=f[0],h=f[1],b=Object(a.useState)(!0),E=Object(l.a)(b,2),_=E[0],v=E[1];Object(a.useEffect)((function(){u()({method:"GET",url:"/colleges.json"}).then((function(e){var n=Object(c.a)(e.data.colleges.slice(10*(p-1),10*p));0===n.length?v(!1):o((function(e){return[].concat(Object(c.a)(e),Object(c.a)(n))}))})).catch((function(e){m(!0)}))}),[p]);var x=Object(a.useRef)(),k=Object(a.useCallback)((function(e){x.current&&x.current.disconnect(),x.current=new IntersectionObserver((function(e){e[0].isIntersecting&&_&&h((function(e){return e+1}))})),e&&x.current.observe(e)}),[_]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"MainClass"},t.map((function(e,n){return t.length===n+1?r.a.createElement("div",{ref:k,className:"Card",key:n},r.a.createElement(C,{promoted:e.promoted,id:n,ranking:e.ranking,tags:e.tags,rating:e.rating,remark:e.rating_remarks}),r.a.createElement(B,{name:e.college_name,discount:e.discount,originalFee:e.original_fees,discountedFee:e.discounted_fees,feeCycle:e.fees_cycle,amenties:e.amenties,rating:e.rating,fnp:e.famous_nearest_places,nearestPlace:e.nearest_place})):r.a.createElement("div",{key:n,className:"Card"},r.a.createElement(C,{promoted:e.promoted,id:n,ranking:e.ranking,tags:e.tags,rating:e.rating,remark:e.rating_remarks}),r.a.createElement(B,{name:e.college_name,discount:e.discount,originalFee:e.original_fees,discountedFee:e.discounted_fees,feeCycle:e.fees_cycle,amenties:e.amenties,rating:e.rating,fnp:e.famous_nearest_places,nearestPlace:e.nearest_place,offer:e.offertext}))}))),r.a.createElement("div",null,d&&"...Error"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.e890cc04.chunk.js.map