(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(91)},34:function(e,t,n){},35:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),l=n(18),i=n.n(l),o=(n(34),n(12)),c=n(13),s=n(15),u=n(14),d=n(16),h=(n(35),n(27)),f=n(7),p=n(26),m=n.n(p),v=(n(36),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={stats:null},n.fileReader=new FileReader,n.handleFileChosen=n.handleFileChosen.bind(Object(f.a)(Object(f.a)(n))),n.handleFileRead=n.handleFileRead.bind(Object(f.a)(Object(f.a)(n))),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleData",value:function(e){console.log(e);var t=Object(h.a)(e.data),n=t[0].filter(function(e){return"Project ID"!==e&&"Name"!==e});t.shift(),t.pop();var a=[];t.forEach(function(e){var t={date:e[0],points:parseFloat(e[3]),historicalDownload:e[4],dailyDownload:e[5],dailyUniqueDownload:e[6],dailyTwitchAppDownload:e[7],dailyCurseForgeDownload:e[8]};a.push(t)}),this.setState({stats:a,headers:n})}},{key:"handleFileRead",value:function(e){var t,n=e.currentTarget.result;m.a.parse(n,{complete:function(e){return t=e}}),this.handleData(t)}},{key:"handleFileChosen",value:function(e){var t=new FileReader;t.onloadend=this.handleFileRead,t.readAsText(e)}},{key:"renderStats",value:function(){var e=this.state,t=e.stats,n=e.headers;return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("tr",null,n.map(function(e){return r.a.createElement("th",null,e)})),t.map(function(e){return r.a.createElement("tr",null,Object.entries(e).map(function(e){return r.a.createElement("td",null,e[1])}))})))}},{key:"render",value:function(){var e=this,t=this.state.stats;return r.a.createElement("div",null,r.a.createElement("input",{type:"file",id:"file",className:"input-file",accept:".csv",onChange:function(t){return e.handleFileChosen(t.target.files[0])}}),t&&this.renderStats())}}]),t}(r.a.Component)),b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.5dd0d13a.chunk.js.map