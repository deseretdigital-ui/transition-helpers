!function(n,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define(t);else{var e=t();for(var i in e)("object"==typeof exports?exports:n)[i]=e[i]}}(this,function(){return function(n){function t(i){if(e[i])return e[i].exports;var r=e[i]={exports:{},id:i,loaded:!1};return n[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var e={};return t.m=n,t.c=e,t.p="",t(0)}([function(n){var t={supported:function(){return this.styleName()!==!1},styleName:function(){for(var n=["transition","WebkitTransition","MozTransition","OTransition","msTransition"],t=document.createElement("div").style,e=!1,i=0;i<n.length;i++){var r=n[i];if(r in t){e=r;break}}return e},endEventName:function(){if(!this.supported())return!1;var n={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"};return"TransitionEvent"in window||delete n.transition,n[this.styleName()]},addEndEventListener:function(n,t,e,i){if(!this.supported())return!1;if(e&&(t=function(n){return function(t){t.propertyName===e&&n(t)}}(t)),i!==!1){var r=this.removeEndEventListener.bind(this);t=function(e){return function(i){e(i),r(n,t)}}(t)}return n.addEventListener(this.endEventName(),t,!1),t},removeEndEventListener:function(n,t){return this.supported()?void n.removeEventListener(this.endEventName(),t):!1},setDuration:function(n,t){return this.supported()?void(n.style[this.styleName()+"Duration"]=t):!1}};n.exports=t}])});