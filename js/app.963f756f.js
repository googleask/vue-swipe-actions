(function(t){function i(i){for(var n,r,a=i[0],l=i[1],c=i[2],h=0,u=[];h<a.length;h++)r=a[h],s[r]&&u.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);f&&f(i);while(u.length)u.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,i=0;i<o.length;i++){for(var e=o[i],n=!0,a=1;a<e.length;a++){var l=e[a];0!==s[l]&&(n=!1)}n&&(o.splice(i--,1),t=r(r.s=e[0]))}return t}var n={},s={1:0},o=[];function r(i){if(n[i])return n[i].exports;var e=n[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=n,r.d=function(t,i,e){r.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,i){if(1&i&&(t=r(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)r.d(e,n,function(i){return t[i]}.bind(null,n));return e},r.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(i,"a",i),i},r.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},r.p="/vue-swipe-actions/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=i,a=a.slice();for(var c=0;c<a.length;c++)i(a[c]);var f=l;o.push([0,0]),e()})({0:function(t,i,e){t.exports=e("Vtdi")},V8Rf:function(t,i,e){i=t.exports=e("I1BE")(!1),i.push([t.i,"@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);",""]),i.push([t.i,".swipeout-list{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.swipeout-action,.swipeout-action>div,.swipeout-list{display:-webkit-box;display:-ms-flexbox;display:flex}.swipeout-action>div{-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 3rem;cursor:pointer}.swipeout-action.action-panel-right>div{background-color:#1e90ff;color:#fff}.swipeout-action.action-panel-right>div:hover{background-color:#0583ff}.swipeout-action.action-panel-left>div:nth-of-type(2n){background-color:#9932cc;color:#fff}.swipeout-action.action-panel-left>div:nth-of-type(2n):hover{background-color:#8a2db8}.swipeout-action.action-panel-left>div:nth-of-type(odd){background-color:#1e90ff;color:#fff}.swipeout-action.action-panel-left>div:nth-of-type(odd):hover{background-color:#0583ff}.swipeout-list-item{-webkit-box-flex:1;-ms-flex:1;flex:1;border-bottom:1px solid #d3d3d3}.swipeout-list-item:last-of-type{border-bottom:none}.card{width:100%;background-color:#fff;border-radius:3px;-webkit-box-shadow:none;box-shadow:none;border:1px solid #d3d3d3}.card-content{padding:1rem}",""])},V8it:function(t,i,e){"use strict";var n=e("j+ab"),s=e.n(n);s.a},Vtdi:function(t,i,e){"use strict";e.r(i);e("VRzm");var n=e("Kw5r"),s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("swipe-list",{staticClass:"card",attrs:{items:t.mockSwipeList,"transition-key":"id"},on:{"swipeout:contentclick":t.contentClick,"swipeout:click":t.itemClick,"swipeout:doubleclick":t.itemDblClick},scopedSlots:t._u([{key:"default",fn:function(i){var n=i.item,s=i.index;i.revealLeft,i.revealRight,i.close;return[e("div",{staticClass:"card-content"},[e("h2",[t._v(t._s(n.title))]),e("p",[t._v(t._s(n.description))]),e("span",[t._v(t._s(s))])])]}},{key:"left",fn:function(t){t.item;return[e("div",{staticClass:"swipeout-action action-panel-left"},[e("div",[e("i",{staticClass:"fa fa-cloud"})]),e("div",[e("i",{staticClass:"fa fa-file"})])])]}},{key:"right",fn:function(t){t.item;return[e("div",{staticClass:"swipeout-action action-panel-right"},[e("div",[e("i",{staticClass:"fa fa-heart"})])])]}}])},[e("div",{attrs:{slot:"empty"},slot:"empty"},[t._v("\n      list is empty ( filtered or just empty )\n    ")])])],1)},o=[],r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"swipeout",class:{"swipeout--transitioning":t.isTransitioning}},[t.hasLeft?e("div",{ref:"left",staticClass:"swipeout-left"},[t._t("left")],2):t._e(),t.hasRight?e("div",{ref:"right",staticClass:"swipeout-right"},[t._t("right")],2):t._e(),e("div",{ref:"content",staticClass:"swipeout-content",on:{click:t.contentClick}},[t._t("default",null,{revealRight:t.revealRight,revealLeft:t.revealLeft,close:t.closeActions})],2)])},a=[],l=(e("xfY5"),e("yLV6")),c=e.n(l);function f(t){return Math.pow(t,.65)}function h(t){return 0===t?"":"translate3d(".concat(t,"px, 0, 0)")}var u={name:"swipe-item",data:function(){return{hammer:null,startLeft:0,isActive:!1,isTransitioning:!1,direction:null,hasLeft:"left"in this.$slots,hasRight:"right"in this.$slots,leftOpen:!1,rightOpen:!1}},props:{threshold:{type:Number,default:45}},mounted:function(){(this.hasLeft||this.hasRight)&&this._createHammer()},computed:{leftActionsWidth:function(){return this.$refs.left?this.$refs.left.clientWidth:0},rightActionsWidth:function(){return this.$refs.right?this.$refs.right.clientWidth:0}},beforeDestroy:function(){this.hammer&&this.hammer.destroy(),this.hammer=null},methods:{closeActions:function(){this.isActive||(this._animateSlide(0,this._distanceSwiped()),this.leftOpen=!1,this.rightOpen=!1,this.startLeft=0)},revealLeft:function(){if(!this.isActive){var t=this.$refs.content.getBoundingClientRect().left;this.leftOpen=!0,this._animateSlide(this.leftActionsWidth,t)}},revealRight:function(){if(!this.isActive){var t=this.$refs.content.getBoundingClientRect().left;this.rightOpen=!0,this._animateSlide(-this.rightActionsWidth,t)}},clickReveal:function(){!this.hasLeft&&this.hasRight&&(this.rightOpen?this.closeActions():this.revealRight()),this.hasLeft&&!this.hasRight&&(this.leftOpen?this.closeActions():this.revealLeft())},_createHammer:function(){var t=this;this.hammer=new c.a.Manager(this.$el,{touchAction:"pan-y"});var i=new c.a.Tap({event:"doubletap",taps:2});this.hammer.add(i);var e=new c.a.Tap({event:"singletap"});this.hammer.add(e),i.recognizeWith(e),e.requireFailure(i);var n=new c.a.Pan({event:"pan"});this.hammer.add(n),this.hammer.on("singletap",function(i){return t._singleTap(i)}),this.hammer.on("doubletap",function(i){return t._doubleTap(i)}),this.hammer.get("pan").set({threshold:0}),this.hammer.on("panstart",this._startListener),this.hammer.on("panleft panright",this._swipeListener),this.hammer.on("panend",this._stopListener)},_distanceSwiped:function(){var t=this.$refs.content.getBoundingClientRect(),i=this.$el.getBoundingClientRect();return t.left-i.left},_startListener:function(t){this.isTransitioning=!1,t.deltaY>=-5&&t.deltaY<=5&&(this.startLeft=this._distanceSwiped(),this.isActive=!0,t.deltaX>0&&(this.direction="ltr"),t.deltaX<0&&(this.direction="rtl")),this.closeActions()},_swipeListener:function(t){if(!this.isActive)return null;var i=this.startLeft+t.deltaX;return 0===this.startLeft&&"ltr"===this.direction&&i<0?this._animateSlide(-f(-i)):0===this.startLeft&&"rtl"===this.direction&&i>0?this._animateSlide(f(i)):this.startLeft<0&&i>0?this._animateSlide(f(i)):this.startLeft>0&&i<0?this._animateSlide(-f(-i)):i<-this.rightActionsWidth?this._animateSlide(-(this.rightActionsWidth+f(Math.abs(i+this.rightActionsWidth)))):i>this.leftActionsWidth?this._animateSlide(+(this.leftActionsWidth+f(i-this.leftActionsWidth))):this._animateSlide(i)},_stopListener:function(t){if(!this.isActive)return null;var i=this.$refs.content.getBoundingClientRect().left;if(this.isActive=!1,this.startLeft>0&&t.deltaX<=-this.threshold)return this.closeActions();if(this.startLeft<0&&t.deltaX>=this.threshold)return this.closeActions();var e=this.startLeft+t.deltaX;return 0===this.startLeft&&"ltr"===this.direction&&e>=this.threshold?this._animateSlide(this.leftActionsWidth,i):0===this.startLeft&&"rtl"===this.direction&&e<=-this.threshold?this._animateSlide(-this.rightActionsWidth,i):this._animateSlide(this.startLeft,i)},_shiftLeftActions:function(t){if(this.hasLeft&&!(t<0))for(var i=this.$refs.left,e=this.leftActionsWidth,n=1-Math.min(t/e,1),s=Math.min(t,e),o=i.children,r=o.length,a=0;a<r;a++){var l=o[a],c=e-l.offsetLeft-l.offsetWidth;l.style.transform=h(s+c*n),r>1&&(l.style.zIndex="".concat(r-a))}},_shiftRightActions:function(t){if(this.hasRight&&!(t>0))for(var i=this.$refs.right,e=this.rightActionsWidth,n=1+Math.min(t/e,-1),s=Math.max(t,-e),o=i.children,r=0;r<o.length;r++){var a=o[r];a.style.transform=h(s-a.offsetLeft*n)}},_animateSlide:function(t,i){var e=this;if(i){if(t-i===0)return;this.isTransitioning=!0}window.requestAnimationFrame(function(){e.$refs.content.style.transform=h(t),e._shiftLeftActions(t,e.leftActionsWidth),e._shiftRightActions(t,e.rightActionsWidth)})},_singleTap:function(t){this.$emit("swipeout:click",t)},_doubleTap:function(t){this.$emit("swipeout:dobuleclick",t)},contentClick:function(t){this.$emit("swipeout:contentclick",t)}}},d=u,p=(e("V8it"),e("KHd+")),m=Object(p["a"])(d,r,a,!1,null,"04989324",null),v=m.exports,w=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"swipeout-list card"},[e("transition-group",{attrs:{name:t.transitionString}},t._l(t.items,function(i,n){return e("swipe-out",{key:i[t.transitionKey],ref:"list-item-"+n,refInFor:!0,staticClass:"swipeout-list-item",on:{"swipeout:click":function(e){t._emitClick(e,i,n)},"swipeout:dobuleclick":function(e){t._emitDblClick(e,i)},"swipeout:contentclick":function(e){t._contentClick(e,i)}},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.close,o=e.revealRight,r=e.revealLeft;return[t._t("default",null,{item:i,index:n,close:s,revealRight:o,revealLeft:r})]}}])},[e("template",{slot:"left"},[t._t("left",null,{item:i})],2),e("template",{slot:"right"},[t._t("right",null,{item:i})],2)],2)})),t.items.length?t._e():[t._t("empty",[t._v("No results !")])]],2)},g=[],b={name:"vue-swipe-list",props:{items:{type:Array,required:!0},transitionKey:{type:String,default:"id"},transitionString:{type:String,default:"swipe-list-item"}},methods:{_emitClick:function(t,i){this.$emit("swipeout:click",{event:t,item:i})},_emitDblClick:function(t,i){this.$emit("swipeout:doubleclick",{event:t,item:i})},_contentClick:function(t,i){this.$emit("swipeout:contentclick",{event:t,item:i})}},components:{SwipeOut:v}},_=b,k=Object(p["a"])(_,w,g,!1,null,null,null),y=k.exports,x={name:"app",components:{SwipeOut:v,SwipeList:y},data:function(){return{mockSwipeList:[{id:0,title:"Some title",description:"some description"},{id:1,title:"Some title",description:"some description"},{id:2,title:"Some title",description:"some description"}]}},methods:{contentClick:function(t){console.log(t,"content click")},itemClick:function(t){console.log(t,"item click")},itemDblClick:function(t){console.log(t,"item double click")},fbClick:function(t){console.log(t,"First Button Click")},sbClick:function(t){console.log(t,"Second Button Click")}}},L=x,S=(e("nNx0"),Object(p["a"])(L,s,o,!1,null,null,null)),A=S.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(A)}}).$mount("#app")},YtmN:function(t,i,e){i=t.exports=e("I1BE")(!1),i.push([t.i,".swipeout[data-v-04989324]{position:relative;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-box;display:-ms-flexbox;display:flex}.swipeout .swipeout-left[data-v-04989324],.swipeout .swipeout-right[data-v-04989324]{position:absolute;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;z-index:1}.swipeout.swipeout--transitioning .swipeout-action[data-v-04989324],.swipeout.swipeout--transitioning .swipeout-content[data-v-04989324]{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.swipeout .swipeout-content[data-v-04989324]{width:100%}.swipeout .swipeout-action[data-v-04989324],.swipeout .swipeout-content[data-v-04989324]{will-change:transform}.swipeout .swipeout-left[data-v-04989324]{left:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}.swipeout .swipeout-right[data-v-04989324]{right:0;-webkit-transform:translateX(100%);transform:translateX(100%)}.swipeout-list-item[data-v-04989324]{outline:none}",""])},"j+ab":function(t,i,e){var n=e("YtmN");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=e("SZ7m").default;s("f0cfdfd6",n,!0,{sourceMap:!1,shadowMode:!1})},nNx0:function(t,i,e){"use strict";var n=e("pQy4"),s=e.n(n);s.a},pQy4:function(t,i,e){var n=e("V8Rf");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=e("SZ7m").default;s("2a7c14de",n,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.963f756f.js.map