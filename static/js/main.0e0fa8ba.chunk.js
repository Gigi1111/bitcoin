(this.webpackJsonpbitcoin=this.webpackJsonpbitcoin||[]).push([[0],{153:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(47),s=a.n(o),i=(a(55),a(16)),c=a(17),u=a(19),l=a(18),h=a(20),p=(a(56),a(9)),d=a.n(p),f=a(30),m=a(48),g=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={chartData:{},currentRate:0},a.state.datesFormatted=a.getPass14DatesFormatted(new Date),a}return Object(h.a)(e,t),Object(c.a)(e,[{key:"componentWillMount",value:function(){this.getCurrent(),this.getChartData()}},{key:"formatChartDate",value:function(t){var e=t.split(""),a=e[5]+e[6],n=e[8]+e[9];return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][Number(a)-1]+" "+Number(n)}},{key:"getChartData",value:function(){var t=Object(f.a)(d.a.mark((function t(){var e,a,n=this;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],a=[],t.next=4,fetch("https://api.coindesk.com/v1/bpi/historical/close.json?currency=EUR&start=".concat(this.state.datesFormatted[0],"&end=").concat(this.state.datesFormatted[this.state.datesFormatted.length-1])).then((function(t){return t.json()})).then((function(t){for(var r=0;r<n.state.datesFormatted.length;r++)e.push(n.formatChartDate(n.state.datesFormatted[r])),a.push(t.bpi[n.state.datesFormatted[r]])}));case 4:return t.sent,t.next=7,fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then((function(t){return t.json()})).then((function(t){t.bpi.EUR.rate,n.setState({today:n.getDateFormatted(new Date,0),currentRate:t.bpi.EUR.rate});var r=n.formatChartDate(n.getDateFormatted(new Date,0)),o=t.bpi.EUR.rate||n.state.currentRate;console.log("todayData"+r+":"+o+"(type)"+typeof o),o.indexOf(",")&&(o=o.split("").filter((function(t){return","!==t})).join("")),console.log("num:"+o),e.push(r),a.push(parseFloat(o)),console.log(e+a)}));case 7:t.sent,this.setState({chartData:{labels:e,datasets:[{lable:"rate",data:a}]}}),console.log(this.state);case 10:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getPass14DatesFormatted",value:function(t){for(var e=[],a=13;a>=1;a--){var n=t-864e5*a,r=(n=new Date(n)).getFullYear(),o=n.getMonth()+1,s=n.getDate(),i=r+"-"+(o>=10?o:"0"+o)+"-"+(s>=10?s:"0"+s);e.push(i)}return e}},{key:"getDateFormatted",value:function(t,e){var a=t-864e5*e,n=(a=new Date(a)).getFullYear(),r=a.getMonth()+1,o=a.getDate();return n+"-"+(r>=10?r:"0"+r)+"-"+(o>=10?o:"0"+o)}},{key:"getCurrent",value:function(){var t=Object(f.a)(d.a.mark((function t(){var e,a,n=this;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return new Date,t.next=3,fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then((function(t){return t.json()})).then((function(t){n.setState({today:n.getDateFormatted(new Date,0),currentRate:t.bpi.EUR.rate}),e=n.formatChartDate(n.getDateFormatted(new Date,0)),a=t.bpi.EUR.rate,console.log("~~"+e+":"+a)}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"data"},r.a.createElement(m.a,{width:600,height:250,data:this.state.chartData,options:{title:{display:this.props.displayTitle,text:"Bitcoin Price Index(EUR)currrent:\u20ac".concat(this.state.currentRate),fontSize:25},bezierCurve:!1,elements:{line:{tension:.1}},legend:{display:this.props.displayLegend,position:this.props.legendPosition}}}))}}]),e}(r.a.Component);g.defaultProps={displayTitle:!0,displayLegend:!0,legendPosition:"right"};var v=g,b=function(t){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,{legendPosition:"bottom"}))}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},50:function(t,e,a){t.exports=a(153)},55:function(t,e,a){},56:function(t,e,a){}},[[50,1,2]]]);
//# sourceMappingURL=main.0e0fa8ba.chunk.js.map