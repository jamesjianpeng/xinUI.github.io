!function(t){function e(e){for(var r,s,i=e[0],l=e[1],u=e[2],p=0,m=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(c&&c(e);m.length;)m.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==o[l]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},o={5:0},n=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="./";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=l;n.push([38,0]),a()}({11:function(t,e,a){var r=a(23);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a(4).default)("f306920a",r,!1,{})},2:function(t,e,a){var r=a(8);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a(4).default)("fdda9ab2",r,!1,{})},22:function(t,e,a){"use strict";var r=a(11);a.n(r).a},23:function(t,e,a){(t.exports=a(3)(!1)).push([t.i,".em[data-v-c593e0b6]{font-size:50px}.em .em-one[data-v-c593e0b6]{font-size:.24em}\n",""])},38:function(t,e,a){"use strict";a.r(e);var r=a(1),o=function(){var t=this.$createElement;this._self._c;return this._m(0)};o._withStripped=!0;var n=a(5),s={name:"App",data:()=>({num:0}),components:{Toast:n.a},mounted(){},methods:{add(){n.a.show({time:1500,text:this.num+++"one"})}}},i=(a(22),a(0)),l=Object(i.a)(s,o,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{attrs:{href:"./toast.html"}},[this._v(" toast 组件")]),this._v(" "),e("a",{attrs:{href:"./date-picker.html"}},[this._v(" date-picker 组件")])])}],!1,null,"c593e0b6",null);l.options.__file="src/example/app/App.vue";var u=l.exports;if(!document.querySelector("#app")){let t=document.createElement("div");t.id="app";let e=document.getElementsByName("script")[0];console.log(e),document.body.insertBefore(t,e)}new r.a({el:"#app",render:t=>t(u)})},5:function(t,e,a){"use strict";var r=a(1),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"james-toast_wrap",class:{"james-toast_wrap-mobile":t.isMobile,"v2-james-toast_wrap_top-center_animation":t.show},style:{top:10+36*t.num+10*t.num+"px","background-color":t.getBgColor,"border-radius":"LargeRoundedCorner"===t.borderRadius?".5em":".08em"}},[a("span",{staticClass:"james-toast_wrap-text"},[t._v(t._s(t.text))])])};o._withStripped=!0;var n={color:{genral:"#5654a2",success:"#007b43",fail:"#df7163",warning:"#f8b500"}};const s=/iPad/.test(navigator.userAgent),i=/iPhone/.test(navigator.userAgent),l=/iPod/.test(navigator.userAgent),u=/Android/.test(navigator.userAgent),c=s||i||l||u;var p={name:"Toast",props:{text:{type:String,required:!0,default:()=>""},state:{type:String,required:!1,default:()=>""},borderRadius:{type:String,required:!1,default:()=>"auto"},time:{type:Number,required:!1,default:()=>1800},num:{type:Number,required:!0,default:()=>0}},data:()=>({show:!1,baseConfig:n,isMobile:c}),computed:{getBgColor(){return"genral"===this.state?n.color.genral:"success"===this.state?n.color.success:"fail"===this.state?n.color.fail:n.color.warning}},mounted(){const t=setTimeout(()=>{this.show=!0,clearTimeout(t)},100)}},m=(a(7),a(0)),d=Object(m.a)(p,o,[],!1,null,null,null);d.options.__file="src/components/toast/Toast.vue";var f=d.exports;let h;const v=r.a.extend(f),b=[];let g=null,w=!0;const _={show(t){const e=document.createElement("div");h=new v({el:e,propsData:{...t,num:b.length}}),document.body.appendChild(h.$el),b.push(h.$el);const a=()=>{w=!1,g=setTimeout(()=>{Array.prototype.map.call(document.querySelectorAll(".james-toast_wrap"),(t,e)=>{t.style.top=Number.parseInt(t.style.top)-46+"px"});const t=b.shift();let e=null;t&&(e=t.parentNode),e&&e.removeChild(t),clearTimeout(g),w=!0,b.length&&a()},t.time||2e3)};w&&a()}};e.a=_},7:function(t,e,a){"use strict";var r=a(2);a.n(r).a},8:function(t,e,a){(t.exports=a(3)(!1)).push([t.i,".james-toast_wrap{font-size:50px;position:fixed;top:10px;left:50%;height:.72em;line-height:.25em;transform:translateX(-50%);border-radius:.08em;box-shadow:0 2px 10px 0 #eee;min-width:200px;background:#fff;transition:.2s ease-in;padding:0 .2em;color:#f0f0f0}.james-toast_wrap-mobile{width:90%}.james-toast_wrap-text{font-size:.24em}.james-toast_wrap-animation-enter-active,.james-toast_wrap-animation-leave-active{transition:opacity .2s;transform:translateX(-50%) scale(0)}.james-toast_wrap-animation-enter,.james-toast_wrap-animation-leave-to{opacity:0;transform:translateX(-50%) scale(1)}.v2-james-toast_wrap_top-center_animation{animation-duration:.2s;animation-name:top-center_animation;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards}@keyframes top-center_animation{0%{opacity:0;transform:translateX(-50%) scale(0)}100%{opacity:1;transform:translateX(-50%) scale(1)}}\n",""])}});