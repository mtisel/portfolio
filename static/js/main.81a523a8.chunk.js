(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(t,e,n){t.exports=n(30)},23:function(t,e,n){},24:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(3),r=n.n(i),s=(n(23),n(9)),c=n(5),l=n(4),p=n(7),u=n(6),m=(n(24),n(29),n(10));function d(){var t=Object(s.a)(["\n      visibility: hidden;\n      align-items: center;\n      justify-content: center;\n      position: fixed;\n      /* top:0;\n  left:0; */\n      /* display: inline; */\n      background-color: rgba(0, 0, 0, 0);\n      ",':hover & {\n        visibility: visible;\n        /* font-family: "canela"; */\n      }\n    ']);return d=function(){return t},t}function h(){var t=Object(s.a)(['\n      text-decoration: none;\n      /* text-decoration: none !important; */\n      border-bottom: none !important;\n      margin: 5px;\n      display: inline;\n      /* font-family: "canela"; */\n      /* color: black; */\n    ']);return h=function(){return t},t}var b=function(t){Object(p.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).onStart=function(){a.setState({activeDrags:++a.state.activeDrags})},a.onStop=function(){a.setState({activeDrags:--a.state.activeDrags})},a.state={projects:[{id:0,title:"project1",subtitle:"sub1",url:"xxx.com",image:"https://picsum.photos/100",posX:300,posY:100},{id:1,title:"project2",subtitle:"sub2",url:"yyy.com",image:"https://picsum.photos/150",posX:650,posY:220},{id:2,title:"project3",subtitle:"sub3",url:"zzz.com",image:"https://picsum.photos/150",posX:175,posY:80},{id:3,title:"project4",subtitle:"sub4",url:"xyz.com",image:"https://picsum.photos/250",posX:20,posY:400},{id:4,title:"project5",subtitle:"sub5",url:"zyx.com",image:"https://picsum.photos/400",posX:300,posY:100}],activeDrags:0},a}return Object(l.a)(n,[{key:"render",value:function(){this.onStart,this.onStop;var t=m.a.div(h()),e=m.a.div(d(),t);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"App-header"},o.a.createElement("div",null,o.a.createElement("p",null," Maja ")),o.a.createElement("div",null,o.a.createElement("p",null,"Info"))),o.a.createElement("div",{className:"projectList"},this.state.projects.map((function(n){return o.a.createElement(t,{key:n.id,className:"projectTitle"},o.a.createElement("a",{href:n.url,className:"unstyledLink"},n.title),o.a.createElement("span",null," \u2192 "),o.a.createElement("a",{className:"unstyledLinkSubtitle"},n.subtitle),o.a.createElement(e,null,o.a.createElement("img",{src:n.image,style:{position:"fixed",left:n.posX,top:n.posY}})))}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.81a523a8.chunk.js.map