(window["webpackJsonppicture-selected"]=window["webpackJsonppicture-selected"]||[]).push([[0],[,,,,,function(e,n,t){e.exports=t(13)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(3),i=t.n(r),o=(t(10),t(4)),l=t(1);t(11);var s=function(e){var n=e.pictures,t=e.value,a=e.onChange;function r(e){var n=e.target.id;if(t.indexOf(n)<0)a([].concat(Object(l.a)(t),[n]));else{var c=Object(l.a)(t).filter(function(e){return e!==n});a(c)}}return c.a.createElement("div",{className:"pictures"},n.map(function(e){return c.a.createElement("div",{className:"container",key:e.id},c.a.createElement("input",{className:"cb",type:"checkbox",name:e.name,id:e.id,checked:!(t.indexOf(e.id)<0),onChange:function(e){return r(e)}}),c.a.createElement("label",{for:e.id},c.a.createElement("img",{style:{width:"100%"},src:e.url,alt:e.url}),c.a.createElement("p",{className:"info"},e.id,".jpg")))}))};t(12);var u=function(){var e=c.a.useState(["1"]),n=Object(o.a)(e,2),t=n[0],a=n[1],r=[{id:"1",name:"foo",url:"https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"},{id:"2",name:"foo",url:"https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"},{id:"3",name:"foo",url:"https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"}];return c.a.createElement("div",{className:"contain"},c.a.createElement("div",{className:"total"},c.a.createElement("input",{type:"checkbox",id:"cb",onChange:function(){return function(){if(t.length===r.length)a([]);else{var e=[];r.map(function(n){return e.push(n.id)}),a(e)}}()},checked:t.length===r.length}),c.a.createElement("label",{for:"cb"},c.a.createElement("span",null,"\u5df2\u9009\u4e2d",t.length,"\u4e2a\u56fe\u7247"))),c.a.createElement(s,{pictures:r,value:t,onChange:function(e){return a(e)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[5,1,2]]]);
//# sourceMappingURL=main.d0c2f127.chunk.js.map