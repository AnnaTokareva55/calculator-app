(function(t){function e(e){for(var r,s,a=e[0],o=e[1],l=e[2],d=0,p=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==i[o]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},c=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=o;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"2fc4":function(t,e,n){},"3d81":function(t,e,n){"use strict";var r=n("94cc"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"app d-flex"},[n("Calculator",{staticClass:"calc"}),n("History",{staticClass:"hist"})],1)])},c=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"calc-wrap"},[n("div",[n("div",{staticClass:"result-field"},[t._v(t._s(t.result))])]),n("md-content",[n("div",{staticClass:"d-flex"},[n("md-button",{staticClass:"md-primary cell cell-border",on:{click:t.allClean}},[t._v("AC")]),n("md-button",{staticClass:"md-primary cell cell-border",on:{click:t.changeSign}},[t._v("+/-")]),n("md-button",{staticClass:"md-primary cell cell-border",on:{click:t.percent}},[t._v("%")]),n("md-button",{staticClass:"md-raised md-primary cell",on:{click:function(e){return t.makeOperation("divide")}}},[t._v("÷")])],1),n("div",{staticClass:"d-flex"},[n("md-button",{staticClass:"cell cell-border",on:{click:function(e){return t.inputNumber("7")}}},[t._v("7")]),n("md-button",{staticClass:"cell cell-border",on:{click:function(e){return t.inputNumber("8")}}},[t._v("8")]),n("md-button",{staticClass:"cell cell-border",on:{click:function(e){return t.inputNumber("9")}}},[t._v("9")]),n("md-button",{staticClass:"md-raised md-primary cell",on:{click:function(e){return t.makeOperation("multiply")}}},[t._v("×")])],1),n("div",{staticClass:"d-flex"},[n("md-button",{staticClass:"cell cell-border",on:{click:function(e){return t.inputNumber("4")}}},[t._v("4")]),n("md-button",{staticClass:"cell cell-border",on:{click:function(e){return t.inputNumber("5")}}},[t._v("5")]),n("md-button",{staticClass:"cell cell-border",on:{click:function(e){return t.inputNumber("6")}}},[t._v("6")]),n("md-button",{staticClass:"md-raised md-primary cell",on:{click:function(e){return t.makeOperation("subtract")}}},[t._v("-")])],1),n("div",{staticClass:"d-flex"},[n("md-button",{staticClass:"cell cell-border",on:{click:function(e){return t.inputNumber("1")}}},[t._v("1")]),n("md-button",{staticClass:"cell cell-border",on:{click:function(e){return t.inputNumber("2")}}},[t._v("2")]),n("md-button",{staticClass:"cell cell-border",on:{click:function(e){return t.inputNumber("3")}}},[t._v("3")]),n("md-button",{staticClass:"md-raised md-primary cell",on:{click:function(e){return t.makeOperation("add")}}},[t._v("+")])],1),n("div",{staticClass:"d-flex"},[n("md-button",{staticClass:"cell cell-border cell-zero",on:{click:function(e){return t.inputNumber("0")}}},[t._v("0")]),n("md-button",{staticClass:"cell cell-border",on:{click:t.decimal}},[t._v(",")]),n("md-button",{staticClass:"md-raised md-primary cell",on:{click:t.calculation}},[t._v("=")])],1)])],1)},a=[],o=(n("99af"),n("c975"),n("5530")),l=n("2f62"),u={name:"Calculator",data:function(){return{prevResult:null,result:"0",operation:null,operationClicked:!1}},computed:Object(o["a"])({},Object(l["c"])("history",["operator"]),{dateTime:function(){var t=new Date;return"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate()," ").concat(t.getHours(),":").concat(t.getMinutes(),":").concat(t.getSeconds()," ")}}),methods:Object(o["a"])({},Object(l["b"])("history",["addToHistory"]),{_clean:function(){this.operationClicked=!1,this.operation=null,this.prevResult=null},allClean:function(){this.result="0",this.operationClicked=!1,this.operation=null,this.prevResult=null},changeSign:function(){this.result&&"0"!==this.result&&(this.result="".concat(-1*this.result))},percent:function(){this.result="".concat(parseFloat(this.result)/100)},inputNumber:function(t){this.operationClicked&&(this.result="",this.operationClicked=!1),"0"===this.result?this.result=t:this.result+=t},decimal:function(){""===this.result&&(this.result+="0."),-1===this.result.indexOf(".")&&(this.result+=".")},makeOperation:function(t){this.operationClicked=!0,this.operation=t,this.prevResult=this.result},calculation:function(){if(this.operation){var t=this.dateTime,e="".concat(this.prevResult," ").concat(this.operator[this.operation]," ").concat(this.result," = "),n=null;switch(this.operation){case"divide":n=parseFloat(this.prevResult)/parseFloat(this.result);break;case"multiply":n=parseFloat(this.prevResult)*parseFloat(this.result);break;case"subtract":n=parseFloat(this.prevResult)-parseFloat(this.result);break;case"add":n=parseFloat(this.prevResult)+parseFloat(this.result);break}this.result="".concat(n),e+=this.result;var r=t+e;this.addToHistory(r),this._clean()}}})},d=u,p=(n("d6b2"),n("2877")),f=Object(p["a"])(d,s,a,!1,null,"21a29bf4",null),m=f.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("md-toolbar",{staticClass:"md-primary md-dense d-flex justify-content-center",attrs:{"md-elevation":"0"}},[n("div",{staticClass:"title"},[t._v("Журнал")])]),n("md-content",{staticClass:"content"},t._l(t.historyList,(function(e,r){return n("div",{key:r},[t._v(t._s(e))])})),0)],1)},h=[],v={name:"History",computed:Object(o["a"])({},Object(l["c"])("history",["historyList"])),mounted:function(){this.getHistory()},methods:Object(o["a"])({},Object(l["b"])("history",["getHistory"]))},y=v,C=(n("3d81"),n("6037")),_=n.n(C),k=Object(p["a"])(y,b,h,!1,null,"54f12b03",null);"function"===typeof _.a&&_()(k);var O=k.exports,g={name:"App",components:{Calculator:m,History:O}},j=g,w=(n("034f"),Object(p["a"])(j,i,c,!1,null,null,null)),x=w.exports,R=(n("07ac"),n("96cf"),n("1da1")),N=n("bc3a"),T=n.n(N),H={namespaced:!0,state:{operator:{divide:"/",multiply:"*",subtract:"-",add:"+"},history:[]},getters:{operator:function(t){var e=t.operator;return e},historyList:function(t){var e=t.history;return e}},mutations:{LOAD_HISTORY:function(t,e){t.history=Object.values(e)},ADD_OPERATION:function(t,e){t.history.push(e)}},actions:{getHistory:function(t){var e=t.commit;T.a.get("/api/history").then((function(t){return e("LOAD_HISTORY",t.data)}))},addToHistory:function(){var t=Object(R["a"])(regeneratorRuntime.mark((function t(e,n){var r,i,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,T.a.post("/api/history",{newEl:n});case 3:i=t.sent,c=i.data,1===c.result&&r("ADD_OPERATION",n);case 6:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()}},S=H;r["default"].use(l["a"]);var F=new l["a"].Store({state:{},mutations:{},actions:{},modules:{history:S}}),M=(n("4160"),n("159b"),n("9c30")),P=(n("51de"),n("e094"),[M["MdButton"],M["MdContent"],M["MdToolbar"]]);P.forEach((function(t){return r["default"].use(t)}));n("2fc4");r["default"].config.productionTip=!1,new r["default"]({store:F,render:function(t){return t(x)}}).$mount("#app")},6037:function(t,e){},"85ec":function(t,e,n){},"94cc":function(t,e,n){},c212:function(t,e,n){},d6b2:function(t,e,n){"use strict";var r=n("c212"),i=n.n(r);i.a}});
//# sourceMappingURL=app.ca4c9ba8.js.map