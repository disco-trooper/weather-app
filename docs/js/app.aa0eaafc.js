(function(t){function e(e){for(var n,s,o=e[0],c=e[1],u=e[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/weather-app/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"deep-orange lighten-1"}},[a("v-toolbar-title",{staticClass:"display-1 font-weight-light"},[t._v("Weather Forecast")])],1),a("v-content",[a("v-container",[a("v-card",{staticClass:"mx-auto mt-2",attrs:{"max-width":"400"}},[a("app-search",{key:t.appId+"-"+t.apiKey,attrs:{type:t.type,"api-key":t.apiKey,"app-id":t.appId},on:{change:function(e){return t.getData(e.suggestion.name)}}})],1),a("v-card",{staticClass:"mx-auto mt-1",attrs:{"max-width":"400"}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-content",{staticClass:"mt-2"},[a("v-list-item-title",{staticClass:"headline text-no-wrap"},[t._v(" "+t._s(t.weatherData.name)+" ")]),a("v-list-item-subtitle",[t._v(t._s(t.formattedDate)+", "+t._s(t.weatherDescription))])],1)],1),a("v-card-text",[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"ml-4",attrs:{cols:"7"}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"display-2"},[t._v(t._s(t.roundedTemperature)+"°"+t._s(t.isCelsius?"C":"F"))]),a("v-list-item-subtitle",{staticClass:"mt-3 subtitle-2"},[t._v("Feels like "+t._s(t.feelsLikeTemperature)+"°"+t._s(t.isCelsius?"C":"F"))]),a("v-list-item-subtitle",{staticClass:"mt-3 subtitle-2"},[t._v("Min: "+t._s(t.minTemperature)+"°"+t._s(t.isCelsius?"C":"F")+" / Max: "+t._s(t.maxTemperature)+"°"+t._s(t.isCelsius?"C":"F"))])],1)],1)],1),a("v-col",{attrs:{cols:"4"}},[a("v-img",{attrs:{src:"https://openweathermap.org/img/wn/"+t.weatherData.weather[0].icon+"@2x.png",alt:"Weather Image",width:"122"}})],1)],1)],1),a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v("mdi-weather-windy")])],1),a("v-list-item-subtitle",{staticClass:"subtitle-2"},[t._v(t._s(t.windSpeed)+" km/h")])],1),a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v("mdi-water-percent")])],1),a("v-list-item-subtitle",{staticClass:"subtitle-2"},[t._v(t._s(t.weatherData.main.humidity)+"%")])],1),a("v-divider"),a("v-card-actions",[a("v-btn",{attrs:{text:""},on:{click:function(e){t.isCelsius=!0}}},[t._v("°C")]),t._v("/ "),a("v-btn",{attrs:{text:""},on:{click:function(e){t.isCelsius=!1}}},[t._v("°F")])],1)],1)],1)],1)],1)},r=[],s=(a("a4d3"),a("e01a"),a("99af"),a("fb6a"),a("96cf"),a("1da1")),o=a("bc3a"),c=a.n(o),u=a("b166"),l=a("2cf3"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},d=[],h=a("8f2f"),m=a.n(h),f={data:function(){return{instance:null}},mounted:function(){var t=this;this.input=document.createElement("input"),this.$el.appendChild(this.input),this.instance=m()({apiKey:this.apiKey,appId:this.appId,type:this.type,container:this.input}),this.instance.on("change",(function(e){t.$emit("change",e)}))},beforeDestroy:function(){this.instance.off("change"),this.instance.destroy()}},v=f,w=a("2877"),b=Object(w["a"])(v,p,d,!1,null,null,null),y=b.exports,_={name:"App",components:{appSearch:y},data:function(){return{appId:"plDV9YZ8G0XP",apiKey:"69cd7249a1a110e76132da2541db49d6",type:"city",isCelsius:!0,currentDate:Object(u["a"])(new Date,"yyyy-MM-dd HH:mm:ss"),icon:"10d",weatherData:{main:{temp:null,feels_like:null,humidity:null},weather:[{icon:"02d",description:"Sunny"}],wind:{speed:null}}}},computed:{weatherDescription:function(){return this.weatherData.weather[0].description.charAt(0).toUpperCase()+this.weatherData.weather[0].description.slice(1)},minTemperature:function(){return this.isCelsius?Math.round(this.weatherData.main.temp_min):Math.round(9*this.weatherData.main.temp_min/5+32)},maxTemperature:function(){return this.isCelsius?Math.round(this.weatherData.main.temp_max):Math.round(9*this.weatherData.main.temp_max/5+32)},roundedTemperature:function(){return this.isCelsius?Math.round(this.weatherData.main.temp):Math.round(9*this.weatherData.main.temp/5+32)},feelsLikeTemperature:function(){return this.isCelsius?Math.round(this.weatherData.main.feels_like):Math.round(9*this.weatherData.main.feels_like/5+32)},windSpeed:function(){return Math.round(3.6*this.weatherData.wind.speed)},formattedDate:function(){return Object(u["a"])(Object(l["a"])(this.currentDate,"yyyy-MM-dd HH:mm:ss",new Date),"iii, H:mm")}},created:function(){this.getData("Prague")},methods:{getData:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=metric&APPID=5528d9bb37a327d3c11bcaa0d374750f"));case 3:return n=a.sent,e.weatherData=n.data,a.next=7,c.a.get("https://api.timezonedb.com/v2.1/get-time-zone?key=DKGJLVWEORBI&format=json&by=position&lng=".concat(e.weatherData.coord.lon,"&lat=").concat(e.weatherData.coord.lat));case 7:i=a.sent,e.currentDate=i.data.formatted,a.next=14;break;case 11:throw a.prev=11,a.t0=a["catch"](0),new Error(a.t0);case 14:case"end":return a.stop()}}),a,null,[[0,11]])})))()}}},g=_,C=a("6544"),D=a.n(C),x=a("7496"),V=a("40dc"),M=a("8336"),O=a("b0af"),k=a("99d9"),j=a("62ad"),I=a("a523"),T=a("a75b"),P=a("ce7e"),S=a("132d"),L=a("adda"),F=a("da13"),A=a("5d23"),K=a("34c3"),E=a("0fd9"),H=a("2a7f"),$=Object(w["a"])(g,i,r,!1,null,null,null),R=$.exports;D()($,{VApp:x["a"],VAppBar:V["a"],VBtn:M["a"],VCard:O["a"],VCardActions:k["a"],VCardText:k["b"],VCol:j["a"],VContainer:I["a"],VContent:T["a"],VDivider:P["a"],VIcon:S["a"],VImg:L["a"],VListItem:F["a"],VListItemContent:A["a"],VListItemIcon:K["a"],VListItemSubtitle:A["b"],VListItemTitle:A["c"],VRow:E["a"],VToolbarTitle:H["a"]});var B=a("f309");n["a"].use(B["a"]);var J=new B["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:J,render:function(t){return t(R)}}).$mount("#app")}});
//# sourceMappingURL=app.aa0eaafc.js.map