(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(e,t,a){e.exports=a(286)},285:function(e,t,a){},286:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(36),i=a.n(l),o=a(133),s=a(18),c=a(19),u=a(22),d=a(20),m=a(23),h=a(24),p=a(121),f=a.n(p),y=a(293),b=a(59),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={stats:null},a.fileReader=new FileReader,a.handleFileChosen=a.handleFileChosen.bind(Object(h.a)(Object(h.a)(a))),a.handleFileRead=a.handleFileRead.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleFileRead",value:function(e){var t,a=e.currentTarget.result;f.a.parse(a,{complete:function(e){return t=e}}),this.props.onData(t)}},{key:"handleFileChosen",value:function(e){var t=new FileReader;t.onloadend=this.handleFileRead,t.readAsText(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(y.a,{type:"file",id:"file",className:"input-file",accept:".csv",onChange:function(t){return e.handleFileChosen(t.target.files[0])}}),r.a.createElement(b.a,{pointing:"left"},"Choose a CSV file with CurseForge analytics data"))}}]),t}(r.a.Component),w=a(132);var E=a(294),O=a(38),j=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{style:{minHeight:"50px"},inverted:!0,attached:!0},r.a.createElement(E.a.Item,null,r.a.createElement(O.a,{name:"pie graph"}),"CurseForge Analtytics Viewer"),r.a.createElement(E.a.Menu,{position:"right"},r.a.createElement(E.a.Item,{href:"//github.com/antoinegag/curseforge-analytics-viewer"},r.a.createElement(O.a,{name:"github",size:"big"})," Source Code")))}}]),t}(r.a.Component),g=a(292),D=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.fields,a=e.stats;return r.a.createElement(g.a,null,r.a.createElement(g.a.Header,null,r.a.createElement(g.a.Row,null,t.map(function(e){return r.a.createElement(g.a.HeaderCell,null,e)}))),r.a.createElement(g.a.Body,null,a.map(function(e){return r.a.createElement(g.a.Row,null,Object.entries(e).map(function(e){return r.a.createElement(g.a.Cell,null,e[1])}))})))}}]),t}(r.a.Component),k=a(84),C=a.n(k),F=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderPlot",value:function(e,t,a,n){return r.a.createElement("div",{className:"plot-container"},r.a.createElement(C.a,{useResizeHandler:!0,data:[{x:t,y:a,type:"scatter",mode:"lines+points",marker:{color:n||"red"}}],layout:{title:e,autosize:!0}}))}},{key:"renderDailyPoints",value:function(e){var t=this.props.stats;return this.renderPlot("Daily points",e,t.map(function(e){return e.points}))}},{key:"renderDownloads",value:function(e){var t=this.props.stats;return r.a.createElement("div",{className:"plot-container"},r.a.createElement(C.a,{useResizeHandler:!0,data:[{x:e,y:t.map(function(e){return e.dailyDownload}),name:"Daily downloads",type:"scatter",mode:"lines+points",marker:{color:"green"}},{x:e,y:t.map(function(e){return e.dailyCurseForgeDownload}),name:"Daily CurseForge Download",type:"scatter",mode:"lines+points",marker:{color:"orange"}},{x:e,y:t.map(function(e){return e.dailyTwitchAppDownload}),name:"Daily Twitch App Download",type:"scatter",mode:"lines+points",marker:{color:"purple"}}],layout:{title:"Downloads",autosize:!0}}))}},{key:"renderHistoricalDownload",value:function(e){var t=this.props.stats;return this.renderPlot("Historical Download",e,t.map(function(e){return e.historicalDownload}),"red")}},{key:"render",value:function(){var e=this.props.stats.map(function(e){return e.date});return r.a.createElement("div",null,this.renderDailyPoints(e),this.renderDownloads(e),this.renderHistoricalDownload(e))}}]),t}(r.a.Component),A=a(295),R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={fields:null,stats:null},a.handleAnalytics=a.handleAnalytics.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleAnalytics",value:function(e){this.setState(Object(o.a)({},function(e){var t=Object(w.a)(e),a=t[0];a.splice(1,2),t.shift(),t.pop();var n=[];return t.forEach(function(e){var t={date:e[0],points:parseFloat(e[3]),historicalDownload:e[4],dailyDownload:e[5],dailyUniqueDownload:e[6],dailyTwitchAppDownload:e[7],dailyCurseForgeDownload:e[8]};n.push(t)}),{fields:a,stats:n}}(e.data)))}},{key:"renderAnalytics",value:function(){var e=this.state,t=e.fields,a=e.stats;return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(A.a,null,r.a.createElement(O.a,{name:"chart line"}),"Your stats"),r.a.createElement(F,{fields:t,stats:a}),r.a.createElement(A.a,null,r.a.createElement(O.a,{name:"database"}),"Raw data"),r.a.createElement(D,{fields:t,stats:a}))}},{key:"render",value:function(){var e=this.state.stats;return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(v,{onData:this.handleAnalytics}),r.a.createElement("b",null,"Note:")," your file is ",r.a.createElement("strong",null,"NOT")," uploaded to any server.",e&&this.renderAnalytics())}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(285);i.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[142,1,2]]]);
//# sourceMappingURL=main.953daec3.chunk.js.map