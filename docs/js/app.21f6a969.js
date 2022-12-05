(function(t){function e(e){for(var r,i,c=e[0],u=e[1],o=e[2],p=0,h=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&h.push(n[i][0]),n[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(h.length)h.shift()();return s.push.apply(s,o||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,c=1;c<a.length;c++){var u=a[c];0!==n[u]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},s=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/weather-app/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var l=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2b93":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=a("7496"),s=a("40dc"),i=a("8336"),c=a("b0af"),u=a("99d9"),o=a("62ad"),l=a("a523"),p=a("a75b"),h=a("ce7e"),d=a("132d"),f=a("adda"),m=a("da13"),w=a("5d23"),b=a("34c3"),v=a("0fd9"),_=a("8654"),y=a("2a7f"),D=(a("b0c0"),function(){var t=this,e=t._self._c;return e(n["a"],[e(s["a"],{attrs:{app:"",color:"deep-orange lighten-1"}},[e(y["a"],{staticClass:"display-1 font-weight-light"},[t._v("Weather Forecast")])],1),e(p["a"],[e(l["a"],[e(c["a"],{staticClass:"mx-auto mt-1",attrs:{"max-width":"400"}},[e("div",{staticClass:"flex-column-baseline"},[e(_["a"],{staticClass:"padding",attrs:{label:"City"},model:{value:t.searchInput,callback:function(e){t.searchInput=e},expression:"searchInput"}}),e(i["a"],{attrs:{outlined:""},on:{click:function(e){return t.getData(t.searchInput)}}},[t._v("Search")])],1),e(m["a"],{attrs:{"two-line":""}},[e(w["a"],{staticClass:"mt-2"},[e(w["c"],{staticClass:"headline text-no-wrap"},[t._v(" "+t._s(t.weatherData.name)+" ")]),e(w["b"],[t._v(t._s(t.formattedDate)+", "+t._s(t.weatherDescription))])],1)],1),e(u["b"],{staticClass:"weather-data-card"},[e(v["a"],{attrs:{align:"center"}},[e(o["a"],{staticClass:"ml-4",attrs:{cols:"7"}},[e(m["a"],{attrs:{"three-line":""}},[e(w["a"],[e(w["c"],{staticClass:"display-2"},[t._v(t._s(t.roundedTemperature)+"°"+t._s(t.isCelsius?"C":"F"))]),e(w["b"],{staticClass:"mt-3 subtitle-2"},[t._v("Feels like "+t._s(t.feelsLikeTemperature)+"°"+t._s(t.isCelsius?"C":"F"))]),e(w["b"],{staticClass:"mt-3 subtitle-2"},[t._v("Min: "+t._s(t.minTemperature)+"°"+t._s(t.isCelsius?"C":"F")+" / Max: "+t._s(t.maxTemperature)+"°"+t._s(t.isCelsius?"C":"F"))])],1)],1)],1),e(o["a"],{attrs:{cols:"4"}},[e(f["a"],{attrs:{src:"https://openweathermap.org/img/wn/".concat(t.weatherData.weather[0].icon,"@2x.png"),alt:"Weather Image",width:"122"}})],1)],1)],1),e(m["a"],[e(b["a"],[e(d["a"],[t._v("mdi-weather-windy")])],1),e(w["b"],{staticClass:"subtitle-2"},[t._v(t._s(t.windSpeed)+" km/h")])],1),e(m["a"],[e(b["a"],[e(d["a"],[t._v("mdi-water-percent")])],1),e(w["b"],{staticClass:"subtitle-2"},[t._v(t._s(t.weatherData.main.humidity)+"%")])],1),e(h["a"]),e(u["a"],[e(i["a"],{attrs:{text:""},on:{click:function(e){t.isCelsius=!0}}},[t._v("°C")]),t._v("/ "),e(i["a"],{attrs:{text:""},on:{click:function(e){t.isCelsius=!1}}},[t._v("°F")])],1)],1)],1)],1)],1)}),g=[],C=a("c7eb"),x=a("1da1"),M=(a("a4d3"),a("e01a"),a("fb6a"),a("99af"),a("bc3a")),O=a.n(M),j=a("b166"),k=a("2cf3"),T={name:"App",data:function(){return{searchInput:"",type:"city",isCelsius:!0,currentDate:Object(j["a"])(new Date,"yyyy-MM-dd HH:mm:ss"),icon:"10d",weatherData:{main:{temp:null,feels_like:null,humidity:null},weather:[{icon:"02d",description:"Sunny"}],wind:{speed:null}}}},computed:{weatherDescription:function(){return this.weatherData.weather[0].description.charAt(0).toUpperCase()+this.weatherData.weather[0].description.slice(1)},minTemperature:function(){return this.isCelsius?Math.round(this.weatherData.main.temp_min):Math.round(9*this.weatherData.main.temp_min/5+32)},maxTemperature:function(){return this.isCelsius?Math.round(this.weatherData.main.temp_max):Math.round(9*this.weatherData.main.temp_max/5+32)},roundedTemperature:function(){return this.isCelsius?Math.round(this.weatherData.main.temp):Math.round(9*this.weatherData.main.temp/5+32)},feelsLikeTemperature:function(){return this.isCelsius?Math.round(this.weatherData.main.feels_like):Math.round(9*this.weatherData.main.feels_like/5+32)},windSpeed:function(){return Math.round(3.6*this.weatherData.wind.speed)},formattedDate:function(){return Object(j["a"])(Object(k["a"])(this.currentDate,"yyyy-MM-dd HH:mm:ss",new Date),"iii, H:mm")}},created:function(){this.getData("Prague")},methods:{getData:function(t){var e=this;return Object(x["a"])(Object(C["a"])().mark((function a(){var r,n;return Object(C["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,O.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=metric&APPID=5528d9bb37a327d3c11bcaa0d374750f"));case 3:return r=a.sent,e.weatherData=r.data,a.next=7,O.a.get("https://api.timezonedb.com/v2.1/get-time-zone?key=DKGJLVWEORBI&format=json&by=position&lng=".concat(e.weatherData.coord.lon,"&lat=").concat(e.weatherData.coord.lat));case 7:n=a.sent,e.currentDate=n.data.formatted,e.searchInput="",a.next=15;break;case 12:throw a.prev=12,a.t0=a["catch"](0),a.t0;case 15:case"end":return a.stop()}}),a,null,[[0,12]])})))()}}},P=T,I=(a("67fa"),a("2877")),S=Object(I["a"])(P,D,g,!1,null,null,null),F=S.exports,H=a("f309");r["a"].use(H["a"]);var A=new H["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:A,render:function(t){return t(F)}}).$mount("#app")},"67fa":function(t,e,a){"use strict";a("2b93")}});
//# sourceMappingURL=app.21f6a969.js.map