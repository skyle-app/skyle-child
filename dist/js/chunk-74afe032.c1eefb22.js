(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74afe032"],{"8840d":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("a-row",{attrs:{gutter:24,type:"flex"}},[e("a-col",{staticClass:"mb-24",attrs:{span:24}},[e("a-card",{staticClass:"header-solid h-full",attrs:{bordered:!1,bodyStyle:{padding:0}}},[e("h3",{staticStyle:{"text-align":"center",margin:"15px 15px 15px 15px"}},[t._v("실시간 위치 전송 중입니다.")])])],1)],1)],1)},n=[],i=e("bc3a"),c=e.n(i),r={methods:{getLocation:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){var a=new FormData;a.append("token",$cookies.get("token")),a.append("latitude",t.coords.latitude),a.append("longitude",t.coords.longitude),c.a.post("https://api.skyle.kr/api/v1/add_maps",a).then((function(t){console.log(t),console.log(t.data),t.data.status})).catch((function(t){alert("서버에 오류가 발생해 일시적으로 로그인에 실패했습니다. 나중에 다시 시도해 주십시오."),console.error("통신 오류: ",t)}))}),(function(t){t&&(alert("GPS 권한이 없습니다. 앱 권한을 변경해 주세요."),location.hash="#/error")}),{enableHighAccuracy:!1,maximumAge:0,timeout:1/0}):alert("GPS를 사용할 수 없습니다.")}},created:function(){var t=this;$cookies.isKey("token")?(this.getLocation(),setInterval((function(){t.getLocation()}),3e5)):(alert("로그인을 해주세요."),location.hash="#/sign-in")}},s=r,l=e("2877"),d=Object(l["a"])(s,o,n,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-74afe032.c1eefb22.js.map