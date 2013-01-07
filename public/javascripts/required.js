
/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,v=e.reduce,h=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.3";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduce===v)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduceRight===h)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?-1!=n.indexOf(t):E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2);return w.map(n,function(n){return(w.isFunction(t)?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t){return w.isEmpty(t)?[]:w.filter(n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var F=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=F(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(e>r||void 0===e)return-1}return n.index<t.index?-1:1}),"value")};var k=function(n,t,r,e){var u={},i=F(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return k(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return k(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:F(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i};var I=function(){};w.bind=function(n,t){var r,e;if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));if(!w.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));I.prototype=n.prototype;var u=new I;I.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},w.bindAll=function(n){var t=o.call(arguments,1);return 0==t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=S(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&S(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return S(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),w.isFunction=function(n){return"function"==typeof n},w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return void 0===n},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+(0|Math.random()*(t-n+1))};var T={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};T.unescape=w.invert(T.escape);var M={escape:RegExp("["+w.keys(T.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(T.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(M[n],function(t){return T[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=""+ ++N;return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){r=w.defaults({},r,w.templateSettings);var e=RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,a,o){return i+=n.slice(u,o).replace(D,function(n){return"\\"+B[n]}),r&&(i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(i+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),a&&(i+="';\n"+a+"\n__p+='"),u=o+t.length,t}),i+="';\n",r.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=Function(r.variable||"obj","_",i)}catch(o){throw o.source=i,o}if(t)return a(t,w);var c=function(n){return a.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+i+"}",c},w.chain=function(n){return w(n).chain()};var z=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
define("underscore", function(){});

// Backbone.js 0.9.9

// (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://backbonejs.org
(function(){var k=this,y=k.Backbone,h=[],z=h.push,r=h.slice,A=h.splice,g;g="undefined"!==typeof exports?exports:k.Backbone={};g.VERSION="0.9.9";var e=k._;!e&&"undefined"!==typeof require&&(e=require("underscore"));g.$=k.jQuery||k.Zepto||k.ender;g.noConflict=function(){k.Backbone=y;return this};g.emulateHTTP=!1;g.emulateJSON=!1;var s=/\s+/,n=function(a,b,c,d){if(!c)return!0;if("object"===typeof c)for(var f in c)a[b].apply(a,[f,c[f]].concat(d));else if(s.test(c)){c=c.split(s);f=0;for(var e=c.length;f<
e;f++)a[b].apply(a,[c[f]].concat(d))}else return!0},t=function(a,b,c){var d,a=-1,f=b.length;switch(c.length){case 0:for(;++a<f;)(d=b[a]).callback.call(d.ctx);break;case 1:for(;++a<f;)(d=b[a]).callback.call(d.ctx,c[0]);break;case 2:for(;++a<f;)(d=b[a]).callback.call(d.ctx,c[0],c[1]);break;case 3:for(;++a<f;)(d=b[a]).callback.call(d.ctx,c[0],c[1],c[2]);break;default:for(;++a<f;)(d=b[a]).callback.apply(d.ctx,c)}},h=g.Events={on:function(a,b,c){if(!n(this,"on",a,[b,c])||!b)return this;this._events||(this._events=
{});(this._events[a]||(this._events[a]=[])).push({callback:b,context:c,ctx:c||this});return this},once:function(a,b,c){if(!n(this,"once",a,[b,c])||!b)return this;var d=this,f=e.once(function(){d.off(a,f);b.apply(this,arguments)});f._callback=b;this.on(a,f,c);return this},off:function(a,b,c){var d,f,l,g,i,m,h,j;if(!this._events||!n(this,"off",a,[b,c]))return this;if(!a&&!b&&!c)return this._events={},this;g=a?[a]:e.keys(this._events);i=0;for(m=g.length;i<m;i++)if(a=g[i],d=this._events[a]){l=[];if(b||
c){h=0;for(j=d.length;h<j;h++)f=d[h],(b&&b!==(f.callback._callback||f.callback)||c&&c!==f.context)&&l.push(f)}this._events[a]=l}return this},trigger:function(a){if(!this._events)return this;var b=r.call(arguments,1);if(!n(this,"trigger",a,b))return this;var c=this._events[a],d=this._events.all;c&&t(this,c,b);d&&t(this,d,arguments);return this},listenTo:function(a,b,c){var d=this._listeners||(this._listeners={}),f=a._listenerId||(a._listenerId=e.uniqueId("l"));d[f]=a;a.on(b,c||this,this);return this},
stopListening:function(a,b,c){var d=this._listeners;if(d){if(a)a.off(b,c,this),!b&&!c&&delete d[a._listenerId];else{for(var f in d)d[f].off(null,null,this);this._listeners={}}return this}}};h.bind=h.on;h.unbind=h.off;e.extend(g,h);var o=g.Model=function(a,b){var c,d=a||{};this.cid=e.uniqueId("c");this.changed={};this.attributes={};this._changes=[];b&&b.collection&&(this.collection=b.collection);b&&b.parse&&(d=this.parse(d));(c=e.result(this,"defaults"))&&e.defaults(d,c);this.set(d,{silent:!0});this._currentAttributes=
e.clone(this.attributes);this._previousAttributes=e.clone(this.attributes);this.initialize.apply(this,arguments)};e.extend(o.prototype,h,{changed:null,idAttribute:"id",initialize:function(){},toJSON:function(){return e.clone(this.attributes)},sync:function(){return g.sync.apply(this,arguments)},get:function(a){return this.attributes[a]},escape:function(a){return e.escape(this.get(a))},has:function(a){return null!=this.get(a)},set:function(a,b,c){var d,f;if(null==a)return this;e.isObject(a)?(f=a,c=
b):(f={})[a]=b;var a=c&&c.silent,l=c&&c.unset;if(!this._validate(f,c))return!1;this.idAttribute in f&&(this.id=f[this.idAttribute]);var g=this.attributes;for(d in f)b=f[d],l?delete g[d]:g[d]=b,this._changes.push(d,b);this._hasComputed=!1;a||this.change(c);return this},unset:function(a,b){return this.set(a,void 0,e.extend({},b,{unset:!0}))},clear:function(a){var b={},c;for(c in this.attributes)b[c]=void 0;return this.set(b,e.extend({},a,{unset:!0}))},fetch:function(a){a=a?e.clone(a):{};void 0===a.parse&&
(a.parse=!0);var b=this,c=a.success;a.success=function(d){if(!b.set(b.parse(d),a))return false;c&&c(b,d,a)};return this.sync("read",this,a)},save:function(a,b,c){var d,f,g;null==a||e.isObject(a)?(d=a,c=b):null!=a&&((d={})[a]=b);c=c?e.clone(c):{};if(c.wait){if(d&&!this._validate(d,c))return!1;f=e.clone(this.attributes)}a=e.extend({},c,{silent:!0});if(d&&!this.set(d,c.wait?a:c)||!d&&!this._validate(null,c))return!1;var q=this,i=c.success;c.success=function(a){g=true;var b=q.parse(a);c.wait&&(b=e.extend(d||
{},b));if(!q.set(b,c))return false;i&&i(q,a,c)};b=this.isNew()?"create":c.patch?"patch":"update";"patch"==b&&(c.attrs=d);b=this.sync(b,this,c);!g&&c.wait&&(this.clear(a),this.set(f,a));return b},destroy:function(a){var a=a?e.clone(a):{},b=this,c=a.success,d=function(){b.trigger("destroy",b,b.collection,a)};a.success=function(f){(a.wait||b.isNew())&&d();c&&c(b,f,a)};if(this.isNew())return a.success(),!1;var f=this.sync("delete",this,a);a.wait||d();return f},url:function(){var a=e.result(this,"urlRoot")||
e.result(this.collection,"url")||u();return this.isNew()?a:a+("/"===a.charAt(a.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},change:function(a){var b=this._changing;this._changing=!0;var c=this._computeChanges(!0);this._pending=!!c.length;for(var d=c.length-2;0<=d;d-=2)this.trigger("change:"+c[d],this,c[d+1],a);if(b)return this;for(;this._pending;)this._pending=!1,this.trigger("change",
this,a),this._previousAttributes=e.clone(this.attributes);this._changing=!1;return this},hasChanged:function(a){this._hasComputed||this._computeChanges();return null==a?!e.isEmpty(this.changed):e.has(this.changed,a)},changedAttributes:function(a){if(!a)return this.hasChanged()?e.clone(this.changed):!1;var b,c=!1,d=this._previousAttributes,f;for(f in a)if(!e.isEqual(d[f],b=a[f]))(c||(c={}))[f]=b;return c},_computeChanges:function(a){this.changed={};for(var b={},c=[],d=this._currentAttributes,f=this._changes,
e=f.length-2;0<=e;e-=2){var g=f[e],i=f[e+1];b[g]||(b[g]=!0,d[g]!==i&&(this.changed[g]=i,a&&(c.push(g,i),d[g]=i)))}a&&(this._changes=[]);this._hasComputed=!0;return c},previous:function(a){return null==a||!this._previousAttributes?null:this._previousAttributes[a]},previousAttributes:function(){return e.clone(this._previousAttributes)},_validate:function(a,b){if(!this.validate)return!0;var a=e.extend({},this.attributes,a),c=this.validate(a,b);if(!c)return!0;b&&b.error&&b.error(this,c,b);this.trigger("error",
this,c,b);return!1}});var p=g.Collection=function(a,b){b||(b={});b.model&&(this.model=b.model);void 0!==b.comparator&&(this.comparator=b.comparator);this._reset();this.initialize.apply(this,arguments);a&&this.reset(a,e.extend({silent:!0},b))};e.extend(p.prototype,h,{model:o,initialize:function(){},toJSON:function(a){return this.map(function(b){return b.toJSON(a)})},sync:function(){return g.sync.apply(this,arguments)},add:function(a,b){var c,d,f,g,h=b&&b.at,i=null==(b&&b.sort)?!0:b.sort,a=e.isArray(a)?
a.slice():[a];for(c=a.length-1;0<=c;c--)(d=this._prepareModel(a[c],b))?(a[c]=d,(f=null!=d.id&&this._byId[d.id])||this._byCid[d.cid]?(b&&(b.merge&&f)&&(f.set(d.attributes,b),g=i),a.splice(c,1)):(d.on("all",this._onModelEvent,this),this._byCid[d.cid]=d,null!=d.id&&(this._byId[d.id]=d))):(this.trigger("error",this,a[c],b),a.splice(c,1));a.length&&(g=i);this.length+=a.length;c=[null!=h?h:this.models.length,0];z.apply(c,a);A.apply(this.models,c);g&&(this.comparator&&null==h)&&this.sort({silent:!0});if(b&&
b.silent)return this;for(;d=a.shift();)d.trigger("add",d,this,b);return this},remove:function(a,b){var c,d,f,g;b||(b={});a=e.isArray(a)?a.slice():[a];c=0;for(d=a.length;c<d;c++)if(g=this.get(a[c]))delete this._byId[g.id],delete this._byCid[g.cid],f=this.indexOf(g),this.models.splice(f,1),this.length--,b.silent||(b.index=f,g.trigger("remove",g,this,b)),this._removeReference(g);return this},push:function(a,b){a=this._prepareModel(a,b);this.add(a,e.extend({at:this.length},b));return a},pop:function(a){var b=
this.at(this.length-1);this.remove(b,a);return b},unshift:function(a,b){a=this._prepareModel(a,b);this.add(a,e.extend({at:0},b));return a},shift:function(a){var b=this.at(0);this.remove(b,a);return b},slice:function(a,b){return this.models.slice(a,b)},get:function(a){return null==a?void 0:this._byId[null!=a.id?a.id:a]||this._byCid[a.cid||a]},at:function(a){return this.models[a]},where:function(a){return e.isEmpty(a)?[]:this.filter(function(b){for(var c in a)if(a[c]!==b.get(c))return!1;return!0})},
sort:function(a){if(!this.comparator)throw Error("Cannot sort a set without a comparator");e.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(e.bind(this.comparator,this));(!a||!a.silent)&&this.trigger("sort",this,a);return this},pluck:function(a){return e.invoke(this.models,"get",a)},update:function(a,b){var c,d,f,g,h=[],i=[],m={},j=this.model.prototype.idAttribute,b=e.extend({add:!0,merge:!0,remove:!0},b);b.parse&&(a=this.parse(a));
e.isArray(a)||(a=a?[a]:[]);if(b.add&&!b.remove)return this.add(a,b);d=0;for(f=a.length;d<f;d++)c=a[d],g=this.get(c.id||c.cid||c[j]),b.remove&&g&&(m[g.cid]=!0),(b.add&&!g||b.merge&&g)&&h.push(c);if(b.remove){d=0;for(f=this.models.length;d<f;d++)c=this.models[d],m[c.cid]||i.push(c)}i.length&&this.remove(i,b);h.length&&this.add(h,b);return this},reset:function(a,b){b||(b={});b.parse&&(a=this.parse(a));for(var c=0,d=this.models.length;c<d;c++)this._removeReference(this.models[c]);b.previousModels=this.models;
this._reset();a&&this.add(a,e.extend({silent:!0},b));b.silent||this.trigger("reset",this,b);return this},fetch:function(a){a=a?e.clone(a):{};void 0===a.parse&&(a.parse=!0);var b=this,c=a.success;a.success=function(d){b[a.update?"update":"reset"](d,a);c&&c(b,d,a)};return this.sync("read",this,a)},create:function(a,b){var c=this,b=b?e.clone(b):{},a=this._prepareModel(a,b);if(!a)return!1;b.wait||c.add(a,b);var d=b.success;b.success=function(a,b,e){e.wait&&c.add(a,e);d&&d(a,b,e)};a.save(null,b);return a},
parse:function(a){return a},clone:function(){return new this.constructor(this.models)},chain:function(){return e(this.models).chain()},_reset:function(){this.length=0;this.models=[];this._byId={};this._byCid={}},_prepareModel:function(a,b){if(a instanceof o)return a.collection||(a.collection=this),a;b||(b={});b.collection=this;var c=new this.model(a,b);return!c._validate(a,b)?!1:c},_removeReference:function(a){this===a.collection&&delete a.collection;a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,
b,c,d){("add"===a||"remove"===a)&&c!==this||("destroy"===a&&this.remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],null!=b.id&&(this._byId[b.id]=b)),this.trigger.apply(this,arguments))}});e.each("forEach each map collect reduce foldl inject reduceRight foldr find detect filter select reject every all some any include contains invoke max min sortedIndex toArray size first head take initial rest tail last without indexOf shuffle lastIndexOf isEmpty".split(" "),
function(a){p.prototype[a]=function(){var b=r.call(arguments);b.unshift(this.models);return e[a].apply(e,b)}});e.each(["groupBy","countBy","sortBy"],function(a){p.prototype[a]=function(b,c){var d=e.isFunction(b)?b:function(a){return a.get(b)};return e[a](this.models,d,c)}});var v=g.Router=function(a){a||(a={});a.routes&&(this.routes=a.routes);this._bindRoutes();this.initialize.apply(this,arguments)},B=/\((.*?)\)/g,C=/:\w+/g,D=/\*\w+/g,E=/[\-{}\[\]+?.,\\\^$|#\s]/g;e.extend(v.prototype,h,{initialize:function(){},
route:function(a,b,c){e.isRegExp(a)||(a=this._routeToRegExp(a));c||(c=this[b]);g.history.route(a,e.bind(function(d){d=this._extractParameters(a,d);c&&c.apply(this,d);this.trigger.apply(this,["route:"+b].concat(d));g.history.trigger("route",this,b,d)},this));return this},navigate:function(a,b){g.history.navigate(a,b);return this},_bindRoutes:function(){if(this.routes)for(var a,b=e.keys(this.routes);null!=(a=b.pop());)this.route(a,this.routes[a])},_routeToRegExp:function(a){a=a.replace(E,"\\$&").replace(B,
"(?:$1)?").replace(C,"([^/]+)").replace(D,"(.*?)");return RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}});var j=g.History=function(){this.handlers=[];e.bindAll(this,"checkUrl");"undefined"!==typeof window&&(this.location=window.location,this.history=window.history)},w=/^[#\/]|\s+$/g,F=/^\/+|\/+$/g,G=/msie [\w.]+/,H=/\/$/;j.started=!1;e.extend(j.prototype,h,{interval:50,getHash:function(a){return(a=(a||this).location.href.match(/#(.*)$/))?a[1]:""},getFragment:function(a,
b){if(null==a)if(this._hasPushState||!this._wantsHashChange||b){var a=this.location.pathname,c=this.root.replace(H,"");a.indexOf(c)||(a=a.substr(c.length))}else a=this.getHash();return a.replace(w,"")},start:function(a){if(j.started)throw Error("Backbone.history has already been started");j.started=!0;this.options=e.extend({},{root:"/"},this.options,a);this.root=this.options.root;this._wantsHashChange=!1!==this.options.hashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!(!this.options.pushState||
!this.history||!this.history.pushState);var a=this.getFragment(),b=document.documentMode,b=G.exec(navigator.userAgent.toLowerCase())&&(!b||7>=b);this.root=("/"+this.root+"/").replace(F,"/");b&&this._wantsHashChange&&(this.iframe=g.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(a));this._hasPushState?g.$(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!b?g.$(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&
(this._checkUrlInterval=setInterval(this.checkUrl,this.interval));this.fragment=a;a=this.location;b=a.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!b)return this.fragment=this.getFragment(null,!0),this.location.replace(this.root+this.location.search+"#"+this.fragment),!0;this._wantsPushState&&(this._hasPushState&&b&&a.hash)&&(this.fragment=this.getHash().replace(w,""),this.history.replaceState({},document.title,this.root+this.fragment+
a.search));if(!this.options.silent)return this.loadUrl()},stop:function(){g.$(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);j.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();a===this.fragment&&this.iframe&&(a=this.getFragment(this.getHash(this.iframe)));if(a===this.fragment)return!1;this.iframe&&this.navigate(a);this.loadUrl()||this.loadUrl(this.getHash())},
loadUrl:function(a){var b=this.fragment=this.getFragment(a);return e.any(this.handlers,function(a){if(a.route.test(b))return a.callback(b),!0})},navigate:function(a,b){if(!j.started)return!1;if(!b||!0===b)b={trigger:b};a=this.getFragment(a||"");if(this.fragment!==a){this.fragment=a;var c=this.root+a;if(this._hasPushState)this.history[b.replace?"replaceState":"pushState"]({},document.title,c);else if(this._wantsHashChange)this._updateHash(this.location,a,b.replace),this.iframe&&a!==this.getFragment(this.getHash(this.iframe))&&
(b.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,a,b.replace));else return this.location.assign(c);b.trigger&&this.loadUrl(a)}},_updateHash:function(a,b,c){c?(c=a.href.replace(/(javascript:|#).*$/,""),a.replace(c+"#"+b)):a.hash="#"+b}});g.history=new j;var x=g.View=function(a){this.cid=e.uniqueId("view");this._configure(a||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()},I=/^(\S+)\s*(.*)$/,J="model collection el id attributes className tagName events".split(" ");
e.extend(x.prototype,h,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},make:function(a,b,c){a=document.createElement(a);b&&g.$(a).attr(b);null!=c&&g.$(a).html(c);return a},setElement:function(a,b){this.$el&&this.undelegateEvents();this.$el=a instanceof g.$?a:g.$(a);this.el=this.$el[0];!1!==b&&this.delegateEvents();return this},delegateEvents:function(a){if(a||(a=e.result(this,
"events"))){this.undelegateEvents();for(var b in a){var c=a[b];e.isFunction(c)||(c=this[a[b]]);if(!c)throw Error('Method "'+a[b]+'" does not exist');var d=b.match(I),f=d[1],d=d[2],c=e.bind(c,this),f=f+(".delegateEvents"+this.cid);""===d?this.$el.bind(f,c):this.$el.delegate(d,f,c)}}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(a){this.options&&(a=e.extend({},e.result(this,"options"),a));e.extend(this,e.pick(a,J));this.options=a},_ensureElement:function(){if(this.el)this.setElement(e.result(this,
"el"),!1);else{var a=e.extend({},e.result(this,"attributes"));this.id&&(a.id=e.result(this,"id"));this.className&&(a["class"]=e.result(this,"className"));this.setElement(this.make(e.result(this,"tagName"),a),!1)}}});var K={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};g.sync=function(a,b,c){var d=K[a];e.defaults(c||(c={}),{emulateHTTP:g.emulateHTTP,emulateJSON:g.emulateJSON});var f={type:d,dataType:"json"};c.url||(f.url=e.result(b,"url")||u());if(null==c.data&&b&&("create"===
a||"update"===a||"patch"===a))f.contentType="application/json",f.data=JSON.stringify(c.attrs||b.toJSON(c));c.emulateJSON&&(f.contentType="application/x-www-form-urlencoded",f.data=f.data?{model:f.data}:{});if(c.emulateHTTP&&("PUT"===d||"DELETE"===d||"PATCH"===d)){f.type="POST";c.emulateJSON&&(f.data._method=d);var h=c.beforeSend;c.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",d);if(h)return h.apply(this,arguments)}}"GET"!==f.type&&!c.emulateJSON&&(f.processData=!1);var j=c.success;
c.success=function(a,d,e){j&&j(a,d,e);b.trigger("sync",b,a,c)};var i=c.error;c.error=function(a){i&&i(b,a,c);b.trigger("error",b,a,c)};a=g.ajax(e.extend(f,c));b.trigger("request",b,a,c);return a};g.ajax=function(){return g.$.ajax.apply(g.$,arguments)};o.extend=p.extend=v.extend=x.extend=j.extend=function(a,b){var c=this,d;d=a&&e.has(a,"constructor")?a.constructor:function(){c.apply(this,arguments)};e.extend(d,c,b);var f=function(){this.constructor=d};f.prototype=c.prototype;d.prototype=new f;a&&e.extend(d.prototype,
a);d.__super__=c.prototype;return d};var u=function(){throw Error('A "url" property or function must be specified');}}).call(this);

define("backbone", ["underscore","jquery"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.Backbone;
    };
}(this)));

define('app',[
  // Libraries.
  "jquery",
  "underscore",
  "backbone"
],

function($, _, Backbone) {

  // Provide a global location to place configuration settings and module
  // creation.
  var app = {
    // The root path to run the application.
    root: "/"
  };

  // Mix Backbone.Events, modules, and layout management into the app object.
  return app;

});
define('now',[], function() {

  (function () {
    var nowObjects = {};
    var noConflict = function (uri, options) {
      uri = uri || '';
      if (nowObjects[uri]) {
        return nowObjects[uri];
      }
      options = options || {};
      options.socketio = options.socketio || {};
      options.socketio.resource = options.socketio.resource || "socket.io";

      var socket;
      var closures = {};
      var nowReady = false;
      var readied = 0;
      var lastTimeout;

      var util, lib;

      var isIE = (function () {
        try {
          Object.defineProperty({}, '', {});
          return false;
        } catch (err) {
          if (Object.prototype.__defineGetter__ && Object.prototype.__defineSetter__) {
            return false;
          } else {
            return true;
          }
        }
      }());

      var fqnMap = {
        data: {},
        arrays: {},
        get: function (fqn) {
          return fqnMap.data[fqn];
        },
        set: function (fqn, val) {
          if (fqnMap.data[fqn] !== undefined) {
            fqnMap.deleteChildren(fqn, val);
          } else {
            var lastIndex = fqn.lastIndexOf('.');
            var parent = fqn.substring(0, lastIndex);
            fqnMap.addParent(parent, fqn.substring(lastIndex + 1));
          }
          return (fqnMap.data[fqn] = val);
        },
        addParent: function (parent, key) {
          if (parent) {
            if (!util.isArray(fqnMap.data[parent])) {
              fqnMap.set(parent, []); // Handle changing a non-object to an object.
            }
            fqnMap.data[parent].push(key);
          }
        },
        deleteChildren: function (fqn) {
          var keys = this.data[fqn];
          var children = [];
          if (util.isArray(this.data[fqn])) {
            // Deleting a child will remove it via splice.
            for (var i = 0; keys.length;) {
              // Recursive delete all children.
              var arr = this.deleteVar(fqn + '.' + keys[i]);
              for (var j = 0; j < arr.length; j++) {
                children.push(arr[j]);
              }
            }
          }
          return children;
        },
        deleteVar: function (fqn) {
          var lastIndex = fqn.lastIndexOf('.');
          var parent = fqn.substring(0, lastIndex);
          if (util.hasProperty(this.data, parent)) {
            var index = util.indexOf(this.data[parent], fqn.substring(lastIndex + 1));
            if (index > -1) {
              this.data[parent].splice(index, 1);
            }
          }
          var children = this.deleteChildren(fqn);
          children.push(fqn);
          delete this.data[fqn];
          this.unflagAsArray(fqn);
          return children;
        },
        flagAsArray: function (val) {
          return (this.arrays[val] = true);
        },
        unflagAsArray: function (val) {
          delete this.arrays[val];
        }
      };
      util = {
        _events: {},
        // Event code from socket.io
        on: function (name, fn) {
          if (!(util.hasProperty(util._events, name))) {
            util._events[name] = [];
          }
          util._events[name].push(fn);
          return util;
        },

        indexOf: function (arr, val) {
          for (var i = 0, ii = arr.length; i < ii; i++) {
            if ("" + arr[i] === val) {
              return i;
            }
          }
          return -1;
        },

        emit: function (name, args) {
          if (util.hasProperty(util._events, name)) {
            var events = util._events[name].slice(0);
            for (var i = 0, ii = events.length; i < ii; i++) {
              events[i].apply(util, args === undefined ? [] : args);
            }
          }
          return util;
        },
        removeEvent: function (name, fn) {
          if (util.hasProperty(util._events, name)) {
            for (var a = 0, l = util._events[name].length; a < l; a++) {
              if (util._events[name][a] === fn) {
                util._events[name].splice(a, 1);
              }
            }
          }
          return util;
        },

        hasProperty: function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(Object(obj), prop);
        },
        isArray: Array.isArray || function (obj) {
          return Object.prototype.toString.call(obj) === '[object Array]';
        },

        createVarAtFqn: function (scope, fqn, value) {
          var path = fqn.split('.');
          var currVar = util.forceGetParentVarAtFqn(scope, fqn);
          var key = path.pop();
          fqnMap.set(fqn, (value && typeof value === 'object') ? [] : value);
          if (util.isArray(value)) {
            fqnMap.flagAsArray(fqn);
          }
          currVar[key] = value;
          if (!(isIE || util.isArray(currVar))) {
            util.watch(currVar, key, fqn);
          }
        },

        forceGetParentVarAtFqn: function (scope, fqn) {
          var path = fqn.split('.');
          path.shift();
          var currVar = scope;
          while (path.length > 1) {
            var prop = path.shift();
            if (!util.hasProperty(currVar, prop)) {
              if (!isNaN(path[0])) {
                currVar[prop] = [];
              } else {
                currVar[prop] = {};
              }
            }
            if(!(currVar[prop] && typeof currVar[prop] === "object")) {
              currVar[prop] = {};
            } 
            currVar = currVar[prop];
          }
          return currVar;
        },

        getVarFromFqn: function (scope, fqn) {
          var path = fqn.split('.');
          path.shift();
          var currVar = scope;
          while (path.length > 0) {
            var prop = path.shift();
            if (util.hasProperty(currVar, prop)) {
              currVar = currVar[prop];
            } else {
              return false;
            }
          }
          return currVar;
        },

        generateRandomString: function () {
          return Math.random().toString().substr(2);
        },

        getValOrFqn: function (val, fqn) {
          if (typeof val === 'function') {
            if (val.remote) {
              return undefined;
            }
            return {fqn: fqn};
          } else {
            return val;
          }
        },

        watch: function (obj, label, fqn) {
          var val = obj[label];

          function getter() {
            return val;
          }
          function setter(newVal) {
            if (val !== newVal && newVal !== fqnMap.get(fqn)) {
              // trigger some sort of change.
              if (val && typeof val === 'object') {
                fqnMap.deleteVar(fqn);
                socket.emit('del', [fqn]);
                val = newVal;
                lib.processScope(obj, fqn.substring(0, fqn.lastIndexOf('.')));
                return newVal;
              }
              if (newVal && typeof newVal === 'object') {
                fqnMap.deleteVar(fqn);
                socket.emit('del', [fqn]);
                val = newVal;
                lib.processScope(obj, fqn.substring(0, fqn.lastIndexOf('.')));
                return newVal;
              }
              fqnMap.set(fqn, newVal);
              val = newVal;
              if (typeof newVal === 'function') {
                newVal = {fqn: fqn};
              }
              var toReplace = {};
              toReplace[fqn] = newVal;
              socket.emit('rv', toReplace);
            }
            return newVal;
          }

          if (Object.defineProperty) {
            Object.defineProperty(obj, label, {get: getter, set: setter});
          } else {
            if (obj.__defineSetter__) {
              obj.__defineSetter__(label, setter);
            }
            if (obj.__defineGetter__) {
              obj.__defineGetter__(label, getter);
            }
          }
        },

        unwatch: function (obj, label) {
          //try {
          if (Object.defineProperty) {
            Object.defineProperty(obj, label, {get: undefined, set: undefined});
          } else {
            if (obj.__defineSetter__) {
              obj.__defineSetter__(label, undefined);
            }
            if (obj.__defineGetter__) {
              obj.__defineGetter__(label, undefined);
            }
          }
          //} catch (e) {}
        }
      };

      var now = {
        ready: function (func) {
          if (arguments.length === 0) {
            util.emit('ready');
          } else {
            if (nowReady) {
              func();
            }
            util.on('ready', func);
          }
        },
        core: {
          on: util.on,
          options: options,
          removeEvent: util.removeEvent,
          clientId: undefined,
          noConflict: noConflict
        }
      };

      lib = {
        deleteVar: function (fqn) {
          var path, currVar, parent, key;
          path = fqn.split('.');
          currVar = now;
          for (var i = 1; i < path.length; i++) {
            key = path[i];
            if (currVar === undefined) {
              // delete from fqnMap, just to be safe.
              fqnMap.deleteVar(fqn);
              return;
            }
            if (i === path.length - 1) {
              delete currVar[path.pop()];
              fqnMap.deleteVar(fqn);
              return;
            }
            currVar = currVar[key];
          }
        },

        replaceVar: function (data) {
          for (var fqn in data) {
            if (util.hasProperty(data[fqn], 'fqn')) {
              data[fqn] = lib.constructRemoteFunction(fqn);
            }
            util.createVarAtFqn(now, fqn, data[fqn]);
          }
        },

        remoteCall: function (data) {
          var func;
          // Retrieve the function, either from closures hash or from the now scope
          if (data.fqn.split('_')[0] === 'closure') {
            func = closures[data.fqn];
          } else {
            func = util.getVarFromFqn(now, data.fqn);
          }
          var i, ii, args = data.args;

          if (typeof args === 'object' && !util.isArray(args)) {
            var newargs = [];
            // Enumeration order is not defined so this might be useless,
            // but there will be cases when it works
            for (i in args) {
              newargs.push(args[i]);
            }
            args = newargs;
          }

          // Search (only at top level) of args for functions parameters,
          // and replace with wrapper remote call function
          for (i = 0, ii = args.length; i < ii; i++) {
            if (util.hasProperty(args[i], 'fqn')) {
              args[i] = lib.constructRemoteFunction(args[i].fqn);
            }
          }
          func.apply({now: now}, args);
        },

        // Handle the ready message from the server
        serverReady: function () {
          nowReady = true;
          lib.processNowScope();
          util.emit('ready');
        },

        constructRemoteFunction: function (fqn) {
          var remoteFn = function () {

            lib.processNowScope();

            var args = [];
            for (var i = 0, ii = arguments.length; i < ii; i++) {
              args[i] = arguments[i];
            }
            for (i = 0, ii = args.length; i < ii; i++) {
              if (typeof args[i] === 'function') {
                var closureId = 'closure_' + args[i].name + '_' + util.generateRandomString();
                closures[closureId] = args[i];
                args[i] = {fqn: closureId};
              }
            }
            socket.emit('rfc', {fqn: fqn, args: args});
          };
          remoteFn.remote = true;
          return remoteFn;
        },
        handleNewConnection: function (socket) {
          if (socket.handled) {
            return;
          }
          socket.handled = true;

          socket.on('rfc', function (data) {
            lib.remoteCall(data);
            util.emit('rfc', data);
          });
          socket.on('rv', function (data) {
            lib.replaceVar(data);
            util.emit('rv', data);
          });
          socket.on('del', function (data) {
            lib.deleteVar(data);
            util.emit('del', data);
          });

          // Handle the ready message from the server
          socket.on('rd', function (data) {
            if (++readied === 2) {
              lib.serverReady();
            }
          });

          socket.on('disconnect', function () {
            readied = 0;
            util.emit('disconnect');
          });
          // Forward planning for socket io 0.7
          socket.on('error', function () {
            util.emit('error');
          });
          socket.on('retry', function () {
            util.emit('retry');
          });
          socket.on('reconnect', function () {
            util.emit('reconnect');
          });
          socket.on('reconnect_failed', function () {
            util.emit('reconnect_failed');
          });
          socket.on('connect_failed', function () {
            util.emit('connect_failed');
          });
        },
        processNowScope: function () {
          lib.processScope(now, 'now');
          clearTimeout(lastTimeout);
          if (socket.socket.connected) {
            lastTimeout = setTimeout(lib.processNowScope, 1000);
          }
        },
        processScope: function (obj, path) {
          var data = {};
          lib.traverseScope(obj, path, data);
          // Send only for non-empty object
          for (var i in data) {
            if (util.hasProperty(data, i) && data[i] !== undefined) {
              socket.emit('rv', data);
              break;
            }
          }
        },
        traverseScope: function (obj, path, data) {

          if (obj && typeof obj === 'object') {
            var objIsArray = util.isArray(obj);
            var keys = fqnMap.get(path);
            for (var key in obj) {
              var fqn = path + '.' + key;

              if (fqn === 'now.core' || fqn === 'now.ready') {
                continue;
              }

              if (util.hasProperty(obj, key)) {

                var val = obj[key];
                var mapVal = fqnMap.get(fqn);
                var wasArray = fqnMap.arrays[fqn];
                var valIsArray = util.isArray(val);
                var valIsObj = val && typeof val === 'object';
                var wasObject = util.isArray(mapVal) && !wasArray;

                if (objIsArray || isIE) {
                  if (valIsObj) {
                    if (valIsArray) {
                      // Value is an array
                      if (!wasArray) {
                        fqnMap.set(fqn, []);
                        fqnMap.flagAsArray(fqn);
                        data[fqn] = [];
                      }
                    } else {
                      // Value is object
                      if (!wasObject) {
                        fqnMap.set(fqn, []);
                        fqnMap.unflagAsArray(fqn);
                        data[fqn] = {};
                      }
                    }
                  } else {
                    // Value is primitive / func
                    if (val !== mapVal) {
                      fqnMap.set(fqn, val);
                      fqnMap.unflagAsArray(fqn);
                      data[fqn] = util.getValOrFqn(val, fqn);
                    }
                  }
                } else if (mapVal === undefined) {
                  util.watch(obj, key, fqn);

                  if (valIsObj) {
                    if (valIsArray) {
                      // Value is array
                      fqnMap.set(fqn, []);
                      fqnMap.flagAsArray(fqn);
                      data[fqn] = [];
                    } else {
                      // Value is object
                      fqnMap.set(fqn, []);
                      data[fqn] = {};
                    }
                  } else {
                    // Value is primitive / func
                    fqnMap.set(fqn, val);
                    data[fqn] = util.getValOrFqn(val, fqn);
                  }
                }
                if (valIsObj) {
                  lib.traverseScope(val, fqn, data);
                }
              }
            }

            if (keys && typeof keys === 'object') {
              var toDelete = [];
              // Scan for deleted keys.
              for (var i = 0; i < keys.length; i++) {
                if (keys[i] !== undefined && obj[keys[i]] === undefined) {
                  toDelete.push(path + '.' + keys[i]);
                  fqnMap.deleteVar(path + '.' + keys[i]);
                  --i;
                }
              }
              // Send message to server to delete from its database.
              if (toDelete.length > 0) {
                socket.emit('del', toDelete);
              }
            }
          }

        },

        traverseScopeIE: function (obj, path, data) {
        }


      };

      var dependencies = [
        { key: 'io', path: '/' + now.core.options.socketio.resource + '/socket.io.js'}
      ];
      var dependenciesLoaded = 0;

      var scriptLoaded = function () {
        dependenciesLoaded++;
        if (dependenciesLoaded !== dependencies.length) {
          return;
        }
        socket = io.connect(uri + '/', now.core.options.socketio || {});
        now.core.socketio = socket;
        socket.on('connect', function () {
          now.core.clientId = socket.socket.sessionid;
          lib.handleNewConnection(socket);
          // Begin intermittent scope traversal

          setTimeout(function () {
            lib.processNowScope();
            socket.emit('rd');
            if (++readied === 2) {
              nowReady = true;
              util.emit('ready');
            }
          }, 100);

          util.emit('connect');
        });
        socket.on('disconnect', function () {
          // y-combinator trick
          (function (y) {
            y(y, now);
          }(function (fn, obj) {
            for (var i in obj) {
              if (obj[i] && typeof obj[i] === 'object' &&
                  obj[i] !== document && obj[i] !== now.core) {
                fn(fn, obj[i]);
              }
              else if (typeof obj[i] === 'function' && obj[i].remote) {
                delete obj[i];
              }
            }
          }));
          // Clear all sorts of stuff in preparation for reconnecting.
          fqnMap.data = {};
        });
      };

      for (var i = 0, ii = dependencies.length; i < ii; i++) {
        if (window[dependencies[i]['key']]) {
          scriptLoaded();
          continue;
        }
        var fileref = document.createElement('script');
        fileref.setAttribute('type', 'text/javascript');
        fileref.setAttribute('src', uri + dependencies[i]['path']);
        fileref.onload = scriptLoaded;
        if (isIE) {
          fileref.onreadystatechange = function () {
            if (fileref.readyState === 'loaded' || fileref.readyState === 'complete') {
              scriptLoaded();
            }
          };
        }
        document.getElementsByTagName('head')[0].appendChild(fileref);
      }
      return (nowObjects[uri] = now);
    };
    window.nowInitialize = noConflict;
  }());

  return window.nowInitialize();
});
define('Models/Mission',['backbone'], function(Backbone) {
  
  var Mission = Backbone.Model.extend({

  });
  return Mission;
  
});
define('Models/Platform',['backbone'], function(Backbone) {

  var Platform = Backbone.Model.extend({

    defaults: {
      
      speed: 0, // kph.  Who the hell sets this?? TODO =P

      // Set by mavlink.global_position_int packets
      lat: undefined,
      lon: undefined,
      alt: undefined,
      relative_alt: undefined,
      vx: undefined,
      vy: undefined,
      vz: undefined,
      hdg: undefined,

      // Set by mavlink.gps_raw_int packets
      fix_type: undefined,
      satellites_visible: undefined,

      // set by mavlink.attitude packets
      pitch: undefined,
      roll: undefined,
      yaw: undefined,
      pitchspeed: undefined, // acceleration
      rollspeed: undefined, // acceleration
      yawspeed: undefined, // acceleration

      // Set by mavlink.HEARTBEAT packets
      type: undefined,
      autopilot: undefined,
      base_mode: undefined,
      custom_mode: undefined,
      system_status: undefined,
      mavlink_version: undefined,

      // Set by mavlink.SYS_STATUS packets
      voltage_battery: undefined,
      current_battery: undefined,
      battery_remaining: undefined,
      drop_rate_comm: undefined,
      errors_comm: undefined,

      // Set by mavlink.vfr_hud packets
      airspeed: undefined,
      groundspeed: undefined,
      heading: undefined,
      throttle: undefined,
      climb: undefined

    },

    initialize: function() {
      this.on('change', function() {
      }, this);
    },

    validate: function(attrs) {
      attrs.lat /= 1e07;
      attrs.lon /= 1e07;
      attrs.alt /=100;
    }

  });

  return Platform;
  
});
define('jade',[], function() {
var 
jade = (function(exports){
/*!
 * Jade - runtime
 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Lame Array.isArray() polyfill for now.
 */

if (!Array.isArray) {
  Array.isArray = function(arr){
    return '[object Array]' == Object.prototype.toString.call(arr);
  };
}

/**
 * Lame Object.keys() polyfill for now.
 */

if (!Object.keys) {
  Object.keys = function(obj){
    var arr = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        arr.push(key);
      }
    }
    return arr;
  }
}

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = function merge(a, b) {
  var ac = a['class'];
  var bc = b['class'];

  if (ac || bc) {
    ac = ac || [];
    bc = bc || [];
    if (!Array.isArray(ac)) ac = [ac];
    if (!Array.isArray(bc)) bc = [bc];
    ac = ac.filter(nulls);
    bc = bc.filter(nulls);
    a['class'] = ac.concat(bc).join(' ');
  }

  for (var key in b) {
    if (key != 'class') {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Filter null `val`s.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function nulls(val) {
  return val != null;
}

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} escaped
 * @return {String}
 * @api private
 */

exports.attrs = function attrs(obj, escaped){
  var buf = []
    , terse = obj.terse;

  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;

  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];

      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if (0 == key.indexOf('data') && 'string' != typeof val) {
        buf.push(key + "='" + JSON.stringify(val) + "'");
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + exports.escape(val.join(' ')) + '"');
      } else if (escaped && escaped[key]) {
        buf.push(key + '="' + exports.escape(val) + '"');
      } else {
        buf.push(key + '="' + val + '"');
      }
    }
  }

  return buf.join(' ');
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

exports.escape = function escape(html){
  return String(html)
    .replace(/&(?!(\w+|\#\d+);)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};

/**
 * Re-throw the given `err` in context to the
 * the jade in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @api private
 */

exports.rethrow = function rethrow(err, filename, lineno){
  if (!filename) throw err;

  var context = 3
    , str = require('fs').readFileSync(filename, 'utf8')
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};

  return exports;

})({});

return jade;
});

define('Templates',['jade'], function(jade) {
this["Templates"] = this["Templates"] || {};

this["Templates"]["app/Templates/altitudeWidget.jade"] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<span class="value">' + ((interp = alt) == null ? '' : interp) + '</span><span class="units">&nbsp;meters</span>');
}
return buf.join("");
};

this["Templates"]["app/Templates/missionLayout.jade"] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div id="speedWidget" class="widget"></div><div id="batteryWidget" class="widget"></div><div id="altitudeWidget" class="widget"></div><div id="mapWidget" class="widget"></div><div id="commsWidget" class="widget"></div><div id="gpsWidget" class="widget"></div><div id="healthWidget" class="widget"></div><div id="stateWidget" class="widget"></div>');
}
return buf.join("");
};

this["Templates"]["app/Templates/speedWidget.jade"] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<span class="value">' + ((interp = speed) == null ? '' : interp) + '</span><span class="units">&nbsp;km/h</span>');
}
return buf.join("");
};
return this["Templates"];
});
define('Views/Widgets/Speed',['backbone', 'Templates'], function(Backbone, template) {
  
  var SpeedWidget = Backbone.View.extend({
    
    el: '#speedWidget',
    className: 'widget',
    
    render: function() {

      this.$el.html(template['app/Templates/speedWidget.jade']({speed: this.model.get('speed')}));
    
    }
    
  });
  return SpeedWidget;

});
/*
 Copyright (c) 2010-2012, CloudMade, Vladimir Agafonkin
 Leaflet is an open-source JavaScript library for mobile-friendly interactive maps.
 http://leaflet.cloudmade.com
*/
(function(e,t){var n,r;typeof exports!=t+""?n=exports:(r=e.L,n={},n.noConflict=function(){return e.L=r,this},e.L=n),n.version="0.4.5",n.Util={extend:function(e){var t=Array.prototype.slice.call(arguments,1);for(var n=0,r=t.length,i;n<r;n++){i=t[n]||{};for(var s in i)i.hasOwnProperty(s)&&(e[s]=i[s])}return e},bind:function(e,t){var n=arguments.length>2?Array.prototype.slice.call(arguments,2):null;return function(){return e.apply(t,n||arguments)}},stamp:function(){var e=0,t="_leaflet_id";return function(n){return n[t]=n[t]||++e,n[t]}}(),limitExecByInterval:function(e,t,n){var r,i;return function s(){var o=arguments;if(r){i=!0;return}r=!0,setTimeout(function(){r=!1,i&&(s.apply(n,o),i=!1)},t),e.apply(n,o)}},falseFn:function(){return!1},formatNum:function(e,t){var n=Math.pow(10,t||5);return Math.round(e*n)/n},splitWords:function(e){return e.replace(/^\s+|\s+$/g,"").split(/\s+/)},setOptions:function(e,t){return e.options=n.Util.extend({},e.options,t),e.options},getParamString:function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+"="+e[n]);return"?"+t.join("&")},template:function(e,t){return e.replace(/\{ *([\w_]+) *\}/g,function(e,n){var r=t[n];if(!t.hasOwnProperty(n))throw Error("No value provided for variable "+e);return r})},emptyImageUrl:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="},function(){function t(t){var n,r,i=["webkit","moz","o","ms"];for(n=0;n<i.length&&!r;n++)r=e[i[n]+t];return r}function r(t){return e.setTimeout(t,1e3/60)}var i=e.requestAnimationFrame||t("RequestAnimationFrame")||r,s=e.cancelAnimationFrame||t("CancelAnimationFrame")||t("CancelRequestAnimationFrame")||function(t){e.clearTimeout(t)};n.Util.requestAnimFrame=function(t,s,o,u){t=n.Util.bind(t,s);if(!o||i!==r)return i.call(e,t,u);t()},n.Util.cancelAnimFrame=function(t){t&&s.call(e,t)}}(),n.Class=function(){},n.Class.extend=function(e){var t=function(){this.initialize&&this.initialize.apply(this,arguments)},r=function(){};r.prototype=this.prototype;var i=new r;i.constructor=t,t.prototype=i;for(var s in this)this.hasOwnProperty(s)&&s!=="prototype"&&(t[s]=this[s]);return e.statics&&(n.Util.extend(t,e.statics),delete e.statics),e.includes&&(n.Util.extend.apply(null,[i].concat(e.includes)),delete e.includes),e.options&&i.options&&(e.options=n.Util.extend({},i.options,e.options)),n.Util.extend(i,e),t},n.Class.include=function(e){n.Util.extend(this.prototype,e)},n.Class.mergeOptions=function(e){n.Util.extend(this.prototype.options,e)};var i="_leaflet_events";n.Mixin={},n.Mixin.Events={addEventListener:function(e,t,r){var s=this[i]=this[i]||{},o,u,a;if(typeof e=="object"){for(o in e)e.hasOwnProperty(o)&&this.addEventListener(o,e[o],t);return this}e=n.Util.splitWords(e);for(u=0,a=e.length;u<a;u++)s[e[u]]=s[e[u]]||[],s[e[u]].push({action:t,context:r||this});return this},hasEventListeners:function(e){return i in this&&e in this[i]&&this[i][e].length>0},removeEventListener:function(e,t,r){var s=this[i],o,u,a,f,l;if(typeof e=="object"){for(o in e)e.hasOwnProperty(o)&&this.removeEventListener(o,e[o],t);return this}e=n.Util.splitWords(e);for(u=0,a=e.length;u<a;u++)if(this.hasEventListeners(e[u])){f=s[e[u]];for(l=f.length-1;l>=0;l--)(!t||f[l].action===t)&&(!r||f[l].context===r)&&f.splice(l,1)}return this},fireEvent:function(e,t){if(!this.hasEventListeners(e))return this;var r=n.Util.extend({type:e,target:this},t),s=this[i][e].slice();for(var o=0,u=s.length;o<u;o++)s[o].action.call(s[o].context||this,r);return this}},n.Mixin.Events.on=n.Mixin.Events.addEventListener,n.Mixin.Events.off=n.Mixin.Events.removeEventListener,n.Mixin.Events.fire=n.Mixin.Events.fireEvent,function(){var r=navigator.userAgent.toLowerCase(),i=!!e.ActiveXObject,s=i&&!e.XMLHttpRequest,o=r.indexOf("webkit")!==-1,u=r.indexOf("gecko")!==-1,a=r.indexOf("chrome")!==-1,f=e.opera,l=r.indexOf("android")!==-1,c=r.search("android [23]")!==-1,h=typeof orientation!=t+""?!0:!1,p=document.documentElement,d=i&&"transition"in p.style,v=o&&"WebKitCSSMatrix"in e&&"m11"in new e.WebKitCSSMatrix,m=u&&"MozPerspective"in p.style,g=f&&"OTransition"in p.style,y=!e.L_NO_TOUCH&&function(){var e="ontouchstart";if(e in p)return!0;var t=document.createElement("div"),n=!1;return t.setAttribute?(t.setAttribute(e,"return;"),typeof t[e]=="function"&&(n=!0),t.removeAttribute(e),t=null,n):!1}(),b="devicePixelRatio"in e&&e.devicePixelRatio>1||"matchMedia"in e&&e.matchMedia("(min-resolution:144dpi)").matches;n.Browser={ua:r,ie:i,ie6:s,webkit:o,gecko:u,opera:f,android:l,android23:c,chrome:a,ie3d:d,webkit3d:v,gecko3d:m,opera3d:g,any3d:!e.L_DISABLE_3D&&(d||v||m||g),mobile:h,mobileWebkit:h&&o,mobileWebkit3d:h&&v,mobileOpera:h&&f,touch:y,retina:b}}(),n.Point=function(e,t,n){this.x=n?Math.round(e):e,this.y=n?Math.round(t):t},n.Point.prototype={add:function(e){return this.clone()._add(n.point(e))},_add:function(e){return this.x+=e.x,this.y+=e.y,this},subtract:function(e){return this.clone()._subtract(n.point(e))},_subtract:function(e){return this.x-=e.x,this.y-=e.y,this},divideBy:function(e,t){return new n.Point(this.x/e,this.y/e,t)},multiplyBy:function(e,t){return new n.Point(this.x*e,this.y*e,t)},distanceTo:function(e){e=n.point(e);var t=e.x-this.x,r=e.y-this.y;return Math.sqrt(t*t+r*r)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},clone:function(){return new n.Point(this.x,this.y)},toString:function(){return"Point("+n.Util.formatNum(this.x)+", "+n.Util.formatNum(this.y)+")"}},n.point=function(e,t,r){return e instanceof n.Point?e:e instanceof Array?new n.Point(e[0],e[1]):isNaN(e)?e:new n.Point(e,t,r)},n.Bounds=n.Class.extend({initialize:function(e,t){if(!e)return;var n=t?[e,t]:e;for(var r=0,i=n.length;r<i;r++)this.extend(n[r])},extend:function(e){return e=n.point(e),!this.min&&!this.max?(this.min=e.clone(),this.max=e.clone()):(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(e.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(e.y,this.max.y)),this},getCenter:function(e){return new n.Point((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,e)},getBottomLeft:function(){return new n.Point(this.min.x,this.max.y)},getTopRight:function(){return new n.Point(this.max.x,this.min.y)},contains:function(e){var t,r;return typeof e[0]=="number"||e instanceof n.Point?e=n.point(e):e=n.bounds(e),e instanceof n.Bounds?(t=e.min,r=e.max):t=r=e,t.x>=this.min.x&&r.x<=this.max.x&&t.y>=this.min.y&&r.y<=this.max.y},intersects:function(e){e=n.bounds(e);var t=this.min,r=this.max,i=e.min,s=e.max,o=s.x>=t.x&&i.x<=r.x,u=s.y>=t.y&&i.y<=r.y;return o&&u}}),n.bounds=function(e,t){return!e||e instanceof n.Bounds?e:new n.Bounds(e,t)},n.Transformation=n.Class.extend({initialize:function(e,t,n,r){this._a=e,this._b=t,this._c=n,this._d=r},transform:function(e,t){return this._transform(e.clone(),t)},_transform:function(e,t){return t=t||1,e.x=t*(this._a*e.x+this._b),e.y=t*(this._c*e.y+this._d),e},untransform:function(e,t){return t=t||1,new n.Point((e.x/t-this._b)/this._a,(e.y/t-this._d)/this._c)}}),n.DomUtil={get:function(e){return typeof e=="string"?document.getElementById(e):e},getStyle:function(e,t){var n=e.style[t];!n&&e.currentStyle&&(n=e.currentStyle[t]);if(!n||n==="auto"){var r=document.defaultView.getComputedStyle(e,null);n=r?r[t]:null}return n==="auto"?null:n},getViewportOffset:function(e){var t=0,r=0,i=e,s=document.body;do{t+=i.offsetTop||0,r+=i.offsetLeft||0;if(i.offsetParent===s&&n.DomUtil.getStyle(i,"position")==="absolute")break;if(n.DomUtil.getStyle(i,"position")==="fixed"){t+=s.scrollTop||0,r+=s.scrollLeft||0;break}i=i.offsetParent}while(i);i=e;do{if(i===s)break;t-=i.scrollTop||0,r-=i.scrollLeft||0,i=i.parentNode}while(i);return new n.Point(r,t)},create:function(e,t,n){var r=document.createElement(e);return r.className=t,n&&n.appendChild(r),r},disableTextSelection:function(){document.selection&&document.selection.empty&&document.selection.empty(),this._onselectstart||(this._onselectstart=document.onselectstart,document.onselectstart=n.Util.falseFn)},enableTextSelection:function(){document.onselectstart=this._onselectstart,this._onselectstart=null},hasClass:function(e,t){return e.className.length>0&&RegExp("(^|\\s)"+t+"(\\s|$)").test(e.className)},addClass:function(e,t){n.DomUtil.hasClass(e,t)||(e.className+=(e.className?" ":"")+t)},removeClass:function(e,t){function n(e,n){return n===t?"":e}e.className=e.className.replace(/(\S+)\s*/g,n).replace(/(^\s+|\s+$)/,"")},setOpacity:function(e,t){if("opacity"in e.style)e.style.opacity=t;else if(n.Browser.ie){var r=!1,i="DXImageTransform.Microsoft.Alpha";try{r=e.filters.item(i)}catch(s){}t=Math.round(t*100),r?(r.Enabled=t!==100,r.Opacity=t):e.style.filter+=" progid:"+i+"(opacity="+t+")"}},testProp:function(e){var t=document.documentElement.style;for(var n=0;n<e.length;n++)if(e[n]in t)return e[n];return!1},getTranslateString:function(e){var t=n.Browser.webkit3d,r="translate"+(t?"3d":"")+"(",i=(t?",0":"")+")";return r+e.x+"px,"+e.y+"px"+i},getScaleString:function(e,t){var r=n.DomUtil.getTranslateString(t.add(t.multiplyBy(-1*e))),i=" scale("+e+") ";return r+i},setPosition:function(e,t,r){e._leaflet_pos=t,!r&&n.Browser.any3d?(e.style[n.DomUtil.TRANSFORM]=n.DomUtil.getTranslateString(t),n.Browser.mobileWebkit3d&&(e.style.WebkitBackfaceVisibility="hidden")):(e.style.left=t.x+"px",e.style.top=t.y+"px")},getPosition:function(e){return e._leaflet_pos}},n.Util.extend(n.DomUtil,{TRANSITION:n.DomUtil.testProp(["transition","webkitTransition","OTransition","MozTransition","msTransition"]),TRANSFORM:n.DomUtil.testProp(["transform","WebkitTransform","OTransform","MozTransform","msTransform"])}),n.LatLng=function(e,t,n){var r=parseFloat(e),i=parseFloat(t);if(isNaN(r)||isNaN(i))throw Error("Invalid LatLng object: ("+e+", "+t+")");n!==!0&&(r=Math.max(Math.min(r,90),-90),i=(i+180)%360+(i<-180||i===180?180:-180)),this.lat=r,this.lng=i},n.Util.extend(n.LatLng,{DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,MAX_MARGIN:1e-9}),n.LatLng.prototype={equals:function(e){if(!e)return!1;e=n.latLng(e);var t=Math.max(Math.abs(this.lat-e.lat),Math.abs(this.lng-e.lng));return t<=n.LatLng.MAX_MARGIN},toString:function(){return"LatLng("+n.Util.formatNum(this.lat)+", "+n.Util.formatNum(this.lng)+")"},distanceTo:function(e){e=n.latLng(e);var t=6378137,r=n.LatLng.DEG_TO_RAD,i=(e.lat-this.lat)*r,s=(e.lng-this.lng)*r,o=this.lat*r,u=e.lat*r,a=Math.sin(i/2),f=Math.sin(s/2),l=a*a+f*f*Math.cos(o)*Math.cos(u);return t*2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l))}},n.latLng=function(e,t,r){return e instanceof n.LatLng?e:e instanceof Array?new n.LatLng(e[0],e[1]):isNaN(e)?e:new n.LatLng(e,t,r)},n.LatLngBounds=n.Class.extend({initialize:function(e,t){if(!e)return;var n=t?[e,t]:e;for(var r=0,i=n.length;r<i;r++)this.extend(n[r])},extend:function(e){return typeof e[0]=="number"||e instanceof n.LatLng?e=n.latLng(e):e=n.latLngBounds(e),e instanceof n.LatLng?!this._southWest&&!this._northEast?(this._southWest=new n.LatLng(e.lat,e.lng,!0),this._northEast=new n.LatLng(e.lat,e.lng,!0)):(this._southWest.lat=Math.min(e.lat,this._southWest.lat),this._southWest.lng=Math.min(e.lng,this._southWest.lng),this._northEast.lat=Math.max(e.lat,this._northEast.lat),this._northEast.lng=Math.max(e.lng,this._northEast.lng)):e instanceof n.LatLngBounds&&(this.extend(e._southWest),this.extend(e._northEast)),this},pad:function(e){var t=this._southWest,r=this._northEast,i=Math.abs(t.lat-r.lat)*e,s=Math.abs(t.lng-r.lng)*e;return new n.LatLngBounds(new n.LatLng(t.lat-i,t.lng-s),new n.LatLng(r.lat+i,r.lng+s))},getCenter:function(){return new n.LatLng((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new n.LatLng(this._northEast.lat,this._southWest.lng,!0)},getSouthEast:function(){return new n.LatLng(this._southWest.lat,this._northEast.lng,!0)},contains:function(e){typeof e[0]=="number"||e instanceof n.LatLng?e=n.latLng(e):e=n.latLngBounds(e);var t=this._southWest,r=this._northEast,i,s;return e instanceof n.LatLngBounds?(i=e.getSouthWest(),s=e.getNorthEast()):i=s=e,i.lat>=t.lat&&s.lat<=r.lat&&i.lng>=t.lng&&s.lng<=r.lng},intersects:function(e){e=n.latLngBounds(e);var t=this._southWest,r=this._northEast,i=e.getSouthWest(),s=e.getNorthEast(),o=s.lat>=t.lat&&i.lat<=r.lat,u=s.lng>=t.lng&&i.lng<=r.lng;return o&&u},toBBoxString:function(){var e=this._southWest,t=this._northEast;return[e.lng,e.lat,t.lng,t.lat].join(",")},equals:function(e){return e?(e=n.latLngBounds(e),this._southWest.equals(e.getSouthWest())&&this._northEast.equals(e.getNorthEast())):!1}}),n.latLngBounds=function(e,t){return!e||e instanceof n.LatLngBounds?e:new n.LatLngBounds(e,t)},n.Projection={},n.Projection.SphericalMercator={MAX_LATITUDE:85.0511287798,project:function(e){var t=n.LatLng.DEG_TO_RAD,r=this.MAX_LATITUDE,i=Math.max(Math.min(r,e.lat),-r),s=e.lng*t,o=i*t;return o=Math.log(Math.tan(Math.PI/4+o/2)),new n.Point(s,o)},unproject:function(e){var t=n.LatLng.RAD_TO_DEG,r=e.x*t,i=(2*Math.atan(Math.exp(e.y))-Math.PI/2)*t;return new n.LatLng(i,r,!0)}},n.Projection.LonLat={project:function(e){return new n.Point(e.lng,e.lat)},unproject:function(e){return new n.LatLng(e.y,e.x,!0)}},n.CRS={latLngToPoint:function(e,t){var n=this.projection.project(e),r=this.scale(t);return this.transformation._transform(n,r)},pointToLatLng:function(e,t){var n=this.scale(t),r=this.transformation.untransform(e,n);return this.projection.unproject(r)},project:function(e){return this.projection.project(e)},scale:function(e){return 256*Math.pow(2,e)}},n.CRS.EPSG3857=n.Util.extend({},n.CRS,{code:"EPSG:3857",projection:n.Projection.SphericalMercator,transformation:new n.Transformation(.5/Math.PI,.5,-0.5/Math.PI,.5),project:function(e){var t=this.projection.project(e),n=6378137;return t.multiplyBy(n)}}),n.CRS.EPSG900913=n.Util.extend({},n.CRS.EPSG3857,{code:"EPSG:900913"}),n.CRS.EPSG4326=n.Util.extend({},n.CRS,{code:"EPSG:4326",projection:n.Projection.LonLat,transformation:new n.Transformation(1/360,.5,-1/360,.5)}),n.Map=n.Class.extend({includes:n.Mixin.Events,options:{crs:n.CRS.EPSG3857,fadeAnimation:n.DomUtil.TRANSITION&&!n.Browser.android23,trackResize:!0,markerZoomAnimation:n.DomUtil.TRANSITION&&n.Browser.any3d},initialize:function(e,r){r=n.Util.setOptions(this,r),this._initContainer(e),this._initLayout(),this._initHooks(),this._initEvents(),r.maxBounds&&this.setMaxBounds(r.maxBounds),r.center&&r.zoom!==t&&this.setView(n.latLng(r.center),r.zoom,!0),this._initLayers(r.layers)},setView:function(e,t){return this._resetView(n.latLng(e),this._limitZoom(t)),this},setZoom:function(e){return this.setView(this.getCenter(),e)},zoomIn:function(){return this.setZoom(this._zoom+1)},zoomOut:function(){return this.setZoom(this._zoom-1)},fitBounds:function(e){var t=this.getBoundsZoom(e);return this.setView(n.latLngBounds(e).getCenter(),t)},fitWorld:function(){var e=new n.LatLng(-60,-170),t=new n.LatLng(85,179);return this.fitBounds(new n.LatLngBounds(e,t))},panTo:function(e){return this.setView(e,this._zoom)},panBy:function(e){return this.fire("movestart"),this._rawPanBy(n.point(e)),this.fire("move"),this.fire("moveend")},setMaxBounds:function(e){e=n.latLngBounds(e),this.options.maxBounds=e;if(!e)return this._boundsMinZoom=null,this;var t=this.getBoundsZoom(e,!0);return this._boundsMinZoom=t,this._loaded&&(this._zoom<t?this.setView(e.getCenter(),t):this.panInsideBounds(e)),this},panInsideBounds:function(e){e=n.latLngBounds(e);var t=this.getBounds(),r=this.project(t.getSouthWest()),i=this.project(t.getNorthEast()),s=this.project(e.getSouthWest()),o=this.project(e.getNorthEast()),u=0,a=0;return i.y<o.y&&(a=o.y-i.y),i.x>o.x&&(u=o.x-i.x),r.y>s.y&&(a=s.y-r.y),r.x<s.x&&(u=s.x-r.x),this.panBy(new n.Point(u,a,!0))},addLayer:function(e){var t=n.Util.stamp(e);if(this._layers[t])return this;this._layers[t]=e,e.options&&!isNaN(e.options.maxZoom)&&(this._layersMaxZoom=Math.max(this._layersMaxZoom||0,e.options.maxZoom)),e.options&&!isNaN(e.options.minZoom)&&(this._layersMinZoom=Math.min(this._layersMinZoom||Infinity,e.options.minZoom)),this.options.zoomAnimation&&n.TileLayer&&e instanceof n.TileLayer&&(this._tileLayersNum++,this._tileLayersToLoad++,e.on("load",this._onTileLayerLoad,this));var r=function(){e.onAdd(this),this.fire("layeradd",{layer:e})};return this._loaded?r.call(this):this.on("load",r,this),this},removeLayer:function(e){var t=n.Util.stamp(e);if(!this._layers[t])return;return e.onRemove(this),delete this._layers[t],this.options.zoomAnimation&&n.TileLayer&&e instanceof n.TileLayer&&(this._tileLayersNum--,this._tileLayersToLoad--,e.off("load",this._onTileLayerLoad,this)),this.fire("layerremove",{layer:e})},hasLayer:function(e){var t=n.Util.stamp(e);return this._layers.hasOwnProperty(t)},invalidateSize:function(e){var t=this.getSize();this._sizeChanged=!0,this.options.maxBounds&&this.setMaxBounds(this.options.maxBounds);if(!this._loaded)return this;var r=t.subtract(this.getSize()).divideBy(2,!0);return e===!0?this.panBy(r):(this._rawPanBy(r),this.fire("move"),clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(n.Util.bind(this.fire,this,"moveend"),200)),this},addHandler:function(e,t){if(!t)return;return this[e]=new t(this),this.options[e]&&this[e].enable(),this},getCenter:function(){return this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var e=this.getPixelBounds(),t=this.unproject(e.getBottomLeft()),r=this.unproject(e.getTopRight());return new n.LatLngBounds(t,r)},getMinZoom:function(){var e=this.options.minZoom||0,t=this._layersMinZoom||0,n=this._boundsMinZoom||0;return Math.max(e,t,n)},getMaxZoom:function(){var e=this.options.maxZoom===t?Infinity:this.options.maxZoom,n=this._layersMaxZoom===t?Infinity:this._layersMaxZoom;return Math.min(e,n)},getBoundsZoom:function(e,t){e=n.latLngBounds(e);var r=this.getSize(),i=this.options.minZoom||0,s=this.getMaxZoom(),o=e.getNorthEast(),u=e.getSouthWest(),a,f,l,c=!0;t&&i--;do i++,f=this.project(o,i),l=this.project(u,i),a=new n.Point(Math.abs(f.x-l.x),Math.abs(l.y-f.y)),t?c=a.x<r.x||a.y<r.y:c=a.x<=r.x&&a.y<=r.y;while(c&&i<=s);return c&&t?null:t?i:i-1},getSize:function(){if(!this._size||this._sizeChanged)this._size=new n.Point(this._container.clientWidth,this._container.clientHeight),this._sizeChanged=!1;return this._size},getPixelBounds:function(){var e=this._getTopLeftPoint();return new n.Bounds(e,e.add(this.getSize()))},getPixelOrigin:function(){return this._initialTopLeftPoint},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(e){var t=this.options.crs;return t.scale(e)/t.scale(this._zoom)},getScaleZoom:function(e){return this._zoom+Math.log(e)/Math.LN2},project:function(e,r){return r=r===t?this._zoom:r,this.options.crs.latLngToPoint(n.latLng(e),r)},unproject:function(e,r){return r=r===t?this._zoom:r,this.options.crs.pointToLatLng(n.point(e),r)},layerPointToLatLng:function(e){var t=n.point(e).add(this._initialTopLeftPoint);return this.unproject(t)},latLngToLayerPoint:function(e){var t=this.project(n.latLng(e))._round();return t._subtract(this._initialTopLeftPoint)},containerPointToLayerPoint:function(e){return n.point(e).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(e){return n.point(e).add(this._getMapPanePos())},containerPointToLatLng:function(e){var t=this.containerPointToLayerPoint(n.point(e));return this.layerPointToLatLng(t)},latLngToContainerPoint:function(e){return this.layerPointToContainerPoint(this.latLngToLayerPoint(n.latLng(e)))},mouseEventToContainerPoint:function(e){return n.DomEvent.getMousePosition(e,this._container)},mouseEventToLayerPoint:function(e){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e))},mouseEventToLatLng:function(e){return this.layerPointToLatLng(this.mouseEventToLayerPoint(e))},_initContainer:function(e){var t=this._container=n.DomUtil.get(e);if(t._leaflet)throw Error("Map container is already initialized.");t._leaflet=!0},_initLayout:function(){var e=this._container;e.innerHTML="",n.DomUtil.addClass(e,"leaflet-container"),n.Browser.touch&&n.DomUtil.addClass(e,"leaflet-touch"),this.options.fadeAnimation&&n.DomUtil.addClass(e,"leaflet-fade-anim");var t=n.DomUtil.getStyle(e,"position");t!=="absolute"&&t!=="relative"&&t!=="fixed"&&(e.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var e=this._panes={};this._mapPane=e.mapPane=this._createPane("leaflet-map-pane",this._container),this._tilePane=e.tilePane=this._createPane("leaflet-tile-pane",this._mapPane),this._objectsPane=e.objectsPane=this._createPane("leaflet-objects-pane",this._mapPane),e.shadowPane=this._createPane("leaflet-shadow-pane"),e.overlayPane=this._createPane("leaflet-overlay-pane"),e.markerPane=this._createPane("leaflet-marker-pane"),e.popupPane=this._createPane("leaflet-popup-pane");var t=" leaflet-zoom-hide";this.options.markerZoomAnimation||(n.DomUtil.addClass(e.markerPane,t),n.DomUtil.addClass(e.shadowPane,t),n.DomUtil.addClass(e.popupPane,t))},_createPane:function(e,t){return n.DomUtil.create("div",e,t||this._objectsPane)},_initializers:[],_initHooks:function(){var e,t;for(e=0,t=this._initializers.length;e<t;e++)this._initializers[e].call(this)},_initLayers:function(e){e=e?e instanceof Array?e:[e]:[],this._layers={},this._tileLayersNum=0;var t,n;for(t=0,n=e.length;t<n;t++)this.addLayer(e[t])},_resetView:function(e,t,r,i){var s=this._zoom!==t;i||(this.fire("movestart"),s&&this.fire("zoomstart")),this._zoom=t,this._initialTopLeftPoint=this._getNewTopLeftPoint(e),r?this._initialTopLeftPoint._add(this._getMapPanePos()):n.DomUtil.setPosition(this._mapPane,new n.Point(0,0)),this._tileLayersToLoad=this._tileLayersNum,this.fire("viewreset",{hard:!r}),this.fire("move"),(s||i)&&this.fire("zoomend"),this.fire("moveend",{hard:!r}),this._loaded||(this._loaded=!0,this.fire("load"))},_rawPanBy:function(e){n.DomUtil.setPosition(this._mapPane,this._getMapPanePos().subtract(e))},_initEvents:function(){if(!n.DomEvent)return;n.DomEvent.on(this._container,"click",this._onMouseClick,this);var t=["dblclick","mousedown","mouseup","mouseenter","mouseleave","mousemove","contextmenu"],r,i;for(r=0,i=t.length;r<i;r++)n.DomEvent.on(this._container,t[r],this._fireMouseEvent,this);this.options.trackResize&&n.DomEvent.on(e,"resize",this._onResize,this)},_onResize:function(){n.Util.cancelAnimFrame(this._resizeRequest),this._resizeRequest=n.Util.requestAnimFrame(this.invalidateSize,this,!1,this._container)},_onMouseClick:function(e){if(!this._loaded||this.dragging&&this.dragging.moved())return;this.fire("preclick"),this._fireMouseEvent(e)},_fireMouseEvent:function(e){if(!this._loaded)return;var t=e.type;t=t==="mouseenter"?"mouseover":t==="mouseleave"?"mouseout":t;if(!this.hasEventListeners(t))return;t==="contextmenu"&&n.DomEvent.preventDefault(e);var r=this.mouseEventToContainerPoint(e),i=this.containerPointToLayerPoint(r),s=this.layerPointToLatLng(i);this.fire(t,{latlng:s,layerPoint:i,containerPoint:r,originalEvent:e})},_onTileLayerLoad:function(){this._tileLayersToLoad--,this._tileLayersNum&&!this._tileLayersToLoad&&this._tileBg&&(clearTimeout(this._clearTileBgTimer),this._clearTileBgTimer=setTimeout(n.Util.bind(this._clearTileBg,this),500))},_getMapPanePos:function(){return n.DomUtil.getPosition(this._mapPane)},_getTopLeftPoint:function(){if(!this._loaded)throw Error("Set map center and zoom first.");return this._initialTopLeftPoint.subtract(this._getMapPanePos())},_getNewTopLeftPoint:function(e,t){var n=this.getSize().divideBy(2);return this.project(e,t)._subtract(n)._round()},_latLngToNewLayerPoint:function(e,t,n){var r=this._getNewTopLeftPoint(n,t).add(this._getMapPanePos());return this.project(e,t)._subtract(r)},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize().divideBy(2))},_getCenterOffset:function(e){return this.latLngToLayerPoint(e).subtract(this._getCenterLayerPoint())},_limitZoom:function(e){var t=this.getMinZoom(),n=this.getMaxZoom();return Math.max(t,Math.min(n,e))}}),n.Map.addInitHook=function(e){var t=Array.prototype.slice.call(arguments,1),n=typeof e=="function"?e:function(){this[e].apply(this,t)};this.prototype._initializers.push(n)},n.map=function(e,t){return new n.Map(e,t)},n.Projection.Mercator={MAX_LATITUDE:85.0840591556,R_MINOR:6356752.3142,R_MAJOR:6378137,project:function(e){var t=n.LatLng.DEG_TO_RAD,r=this.MAX_LATITUDE,i=Math.max(Math.min(r,e.lat),-r),s=this.R_MAJOR,o=this.R_MINOR,u=e.lng*t*s,a=i*t,f=o/s,l=Math.sqrt(1-f*f),c=l*Math.sin(a);c=Math.pow((1-c)/(1+c),l*.5);var h=Math.tan(.5*(Math.PI*.5-a))/c;return a=-o*Math.log(h),new n.Point(u,a)},unproject:function(e){var t=n.LatLng.RAD_TO_DEG,r=this.R_MAJOR,i=this.R_MINOR,s=e.x*t/r,o=i/r,u=Math.sqrt(1-o*o),a=Math.exp(-e.y/i),f=Math.PI/2-2*Math.atan(a),l=15,c=1e-7,h=l,p=.1,d;while(Math.abs(p)>c&&--h>0)d=u*Math.sin(f),p=Math.PI/2-2*Math.atan(a*Math.pow((1-d)/(1+d),.5*u))-f,f+=p;return new n.LatLng(f*t,s,!0)}},n.CRS.EPSG3395=n.Util.extend({},n.CRS,{code:"EPSG:3395",projection:n.Projection.Mercator,transformation:function(){var e=n.Projection.Mercator,t=e.R_MAJOR,r=e.R_MINOR;return new n.Transformation(.5/(Math.PI*t),.5,-0.5/(Math.PI*r),.5)}()}),n.TileLayer=n.Class.extend({includes:n.Mixin.Events,options:{minZoom:0,maxZoom:18,tileSize:256,subdomains:"abc",errorTileUrl:"",attribution:"",zoomOffset:0,opacity:1,unloadInvisibleTiles:n.Browser.mobile,updateWhenIdle:n.Browser.mobile},initialize:function(e,t){t=n.Util.setOptions(this,t),t.detectRetina&&n.Browser.retina&&t.maxZoom>0&&(t.tileSize=Math.floor(t.tileSize/2),t.zoomOffset++,t.minZoom>0&&t.minZoom--,this.options.maxZoom--),this._url=e;var r=this.options.subdomains;typeof r=="string"&&(this.options.subdomains=r.split(""))},onAdd:function(e){this._map=e,this._initContainer(),this._createTileProto(),e.on({viewreset:this._resetCallback,moveend:this._update},this),this.options.updateWhenIdle||(this._limitedUpdate=n.Util.limitExecByInterval(this._update,150,this),e.on("move",this._limitedUpdate,this)),this._reset(),this._update()},addTo:function(e){return e.addLayer(this),this},onRemove:function(e){e._panes.tilePane.removeChild(this._container),e.off({viewreset:this._resetCallback,moveend:this._update},this),this.options.updateWhenIdle||e.off("move",this._limitedUpdate,this),this._container=null,this._map=null},bringToFront:function(){var e=this._map._panes.tilePane;return this._container&&(e.appendChild(this._container),this._setAutoZIndex(e,Math.max)),this},bringToBack:function(){var e=this._map._panes.tilePane;return this._container&&(e.insertBefore(this._container,e.firstChild),this._setAutoZIndex(e,Math.min)),this},getAttribution:function(){return this.options.attribution},setOpacity:function(e){return this.options.opacity=e,this._map&&this._updateOpacity(),this},setZIndex:function(e){return this.options.zIndex=e,this._updateZIndex(),this},setUrl:function(e,t){return this._url=e,t||this.redraw(),this},redraw:function(){return this._map&&(this._map._panes.tilePane.empty=!1,this._reset(!0),this._update()),this},_updateZIndex:function(){this._container&&this.options.zIndex!==t&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(e,t){var n=e.getElementsByClassName("leaflet-layer"),r=-t(Infinity,-Infinity),i;for(var s=0,o=n.length;s<o;s++)n[s]!==this._container&&(i=parseInt(n[s].style.zIndex,10),isNaN(i)||(r=t(r,i)));this._container.style.zIndex=isFinite(r)?r+t(1,-1):""},_updateOpacity:function(){n.DomUtil.setOpacity(this._container,this.options.opacity);var e,t=this._tiles;if(n.Browser.webkit)for(e in t)t.hasOwnProperty(e)&&(t[e].style.webkitTransform+=" translate(0,0)")},_initContainer:function(){var e=this._map._panes.tilePane;if(!this._container||e.empty)this._container=n.DomUtil.create("div","leaflet-layer"),this._updateZIndex(),e.appendChild(this._container),this.options.opacity<1&&this._updateOpacity()},_resetCallback:function(e){this._reset(e.hard)},_reset:function(e){var t,n=this._tiles;for(t in n)n.hasOwnProperty(t)&&this.fire("tileunload",{tile:n[t]});this._tiles={},this._tilesToLoad=0,this.options.reuseTiles&&(this._unusedTiles=[]),e&&this._container&&(this._container.innerHTML=""),this._initContainer()},_update:function(e){if(this._map._panTransition&&this._map._panTransition._inProgress)return;var t=this._map.getPixelBounds(),r=this._map.getZoom(),i=this.options.tileSize;if(r>this.options.maxZoom||r<this.options.minZoom)return;var s=new n.Point(Math.floor(t.min.x/i),Math.floor(t.min.y/i)),o=new n.Point(Math.floor(t.max.x/i),Math.floor(t.max.y/i)),u=new n.Bounds(s,o);this._addTilesFromCenterOut(u),(this.options.unloadInvisibleTiles||this.options.reuseTiles)&&this._removeOtherTiles(u)},_addTilesFromCenterOut:function(e){var t=[],r=e.getCenter(),i,s,o;for(i=e.min.y;i<=e.max.y;i++)for(s=e.min.x;s<=e.max.x;s++)o=new n.Point(s,i),this._tileShouldBeLoaded(o)&&t.push(o);var u=t.length;if(u===0)return;t.sort(function(e,t){return e.distanceTo(r)-t.distanceTo(r)});var a=document.createDocumentFragment();this._tilesToLoad||this.fire("loading"),this._tilesToLoad+=u;for(s=0;s<u;s++)this._addTile(t[s],a);this._container.appendChild(a)},_tileShouldBeLoaded:function(e){if(e.x+":"+e.y in this._tiles)return!1;if(!this.options.continuousWorld){var t=this._getWrapTileNum();if(this.options.noWrap&&(e.x<0||e.x>=t)||e.y<0||e.y>=t)return!1}return!0},_removeOtherTiles:function(e){var t,n,r,i;for(i in this._tiles)this._tiles.hasOwnProperty(i)&&(t=i.split(":"),n=parseInt(t[0],10),r=parseInt(t[1],10),(n<e.min.x||n>e.max.x||r<e.min.y||r>e.max.y)&&this._removeTile(i))},_removeTile:function(e){var t=this._tiles[e];this.fire("tileunload",{tile:t,url:t.src}),this.options.reuseTiles?(n.DomUtil.removeClass(t,"leaflet-tile-loaded"),this._unusedTiles.push(t)):t.parentNode===this._container&&this._container.removeChild(t),n.Browser.android||(t.src=n.Util.emptyImageUrl),delete this._tiles[e]},_addTile:function(e,t){var r=this._getTilePos(e),i=this._getTile();n.DomUtil.setPosition(i,r,n.Browser.chrome||n.Browser.android23),this._tiles[e.x+":"+e.y]=i,this._loadTile(i,e),i.parentNode!==this._container&&t.appendChild(i)},_getZoomForUrl:function(){var e=this.options,t=this._map.getZoom();return e.zoomReverse&&(t=e.maxZoom-t),t+e.zoomOffset},_getTilePos:function(e){var t=this._map.getPixelOrigin(),n=this.options.tileSize;return e.multiplyBy(n).subtract(t)},getTileUrl:function(e){return this._adjustTilePoint(e),n.Util.template(this._url,n.Util.extend({s:this._getSubdomain(e),z:this._getZoomForUrl(),x:e.x,y:e.y},this.options))},_getWrapTileNum:function(){return Math.pow(2,this._getZoomForUrl())},_adjustTilePoint:function(e){var t=this._getWrapTileNum();!this.options.continuousWorld&&!this.options.noWrap&&(e.x=(e.x%t+t)%t),this.options.tms&&(e.y=t-e.y-1)},_getSubdomain:function(e){var t=(e.x+e.y)%this.options.subdomains.length;return this.options.subdomains[t]},_createTileProto:function(){var e=this._tileImg=n.DomUtil.create("img","leaflet-tile");e.galleryimg="no";var t=this.options.tileSize;e.style.width=t+"px",e.style.height=t+"px"},_getTile:function(){if(this.options.reuseTiles&&this._unusedTiles.length>0){var e=this._unusedTiles.pop();return this._resetTile(e),e}return this._createTile()},_resetTile:function(e){},_createTile:function(){var e=this._tileImg.cloneNode(!1);return e.onselectstart=e.onmousemove=n.Util.falseFn,e},_loadTile:function(e,t){e._layer=this,e.onload=this._tileOnLoad,e.onerror=this._tileOnError,e.src=this.getTileUrl(t)},_tileLoaded:function(){this._tilesToLoad--,this._tilesToLoad||this.fire("load")},_tileOnLoad:function(e){var t=this._layer;this.src!==n.Util.emptyImageUrl&&(n.DomUtil.addClass(this,"leaflet-tile-loaded"),t.fire("tileload",{tile:this,url:this.src})),t._tileLoaded()},_tileOnError:function(e){var t=this._layer;t.fire("tileerror",{tile:this,url:this.src});var n=t.options.errorTileUrl;n&&(this.src=n),t._tileLoaded()}}),n.tileLayer=function(e,t){return new n.TileLayer(e,t)},n.TileLayer.WMS=n.TileLayer.extend({defaultWmsParams:{service:"WMS",request:"GetMap",version:"1.1.1",layers:"",styles:"",format:"image/jpeg",transparent:!1},initialize:function(e,t){this._url=e;var r=n.Util.extend({},this.defaultWmsParams);t.detectRetina&&n.Browser.retina?r.width=r.height=this.options.tileSize*2:r.width=r.height=this.options.tileSize;for(var i in t)this.options.hasOwnProperty(i)||(r[i]=t[i]);this.wmsParams=r,n.Util.setOptions(this,t)},onAdd:function(e){var t=parseFloat(this.wmsParams.version)>=1.3?"crs":"srs";this.wmsParams[t]=e.options.crs.code,n.TileLayer.prototype.onAdd.call(this,e)},getTileUrl:function(e,t){var r=this._map,i=r.options.crs,s=this.options.tileSize,o=e.multiplyBy(s),u=o.add(new n.Point(s,s)),a=i.project(r.unproject(o,t)),f=i.project(r.unproject(u,t)),l=[a.x,f.y,f.x,a.y].join(","),c=n.Util.template(this._url,{s:this._getSubdomain(e)});return c+n.Util.getParamString(this.wmsParams)+"&bbox="+l},setParams:function(e,t){return n.Util.extend(this.wmsParams,e),t||this.redraw(),this}}),n.tileLayer.wms=function(e,t){return new n.TileLayer.WMS(e,t)},n.TileLayer.Canvas=n.TileLayer.extend({options:{async:!1},initialize:function(e){n.Util.setOptions(this,e)},redraw:function(){var e,t=this._tiles;for(e in t)t.hasOwnProperty(e)&&this._redrawTile(t[e])},_redrawTile:function(e){this.drawTile(e,e._tilePoint,e._zoom)},_createTileProto:function(){var e=this._canvasProto=n.DomUtil.create("canvas","leaflet-tile"),t=this.options.tileSize;e.width=t,e.height=t},_createTile:function(){var e=this._canvasProto.cloneNode(!1);return e.onselectstart=e.onmousemove=n.Util.falseFn,e},_loadTile:function(e,t,n){e._layer=this,e._tilePoint=t,e._zoom=n,this.drawTile(e,t,n),this.options.async||this.tileDrawn(e)},drawTile:function(e,t,n){},tileDrawn:function(e){this._tileOnLoad.call(e)}}),n.tileLayer.canvas=function(e){return new n.TileLayer.Canvas(e)},n.ImageOverlay=n.Class.extend({includes:n.Mixin.Events,options:{opacity:1},initialize:function(e,t,r){this._url=e,this._bounds=n.latLngBounds(t),n.Util.setOptions(this,r)},onAdd:function(e){this._map=e,this._image||this._initImage(),e._panes.overlayPane.appendChild(this._image),e.on("viewreset",this._reset,this),e.options.zoomAnimation&&n.Browser.any3d&&e.on("zoomanim",this._animateZoom,this),this._reset()},onRemove:function(e){e.getPanes().overlayPane.removeChild(this._image),e.off("viewreset",this._reset,this),e.options.zoomAnimation&&e.off("zoomanim",this._animateZoom,this)},addTo:function(e){return e.addLayer(this),this},setOpacity:function(e){return this.options.opacity=e,this._updateOpacity(),this},bringToFront:function(){return this._image&&this._map._panes.overlayPane.appendChild(this._image),this},bringToBack:function(){var e=this._map._panes.overlayPane;return this._image&&e.insertBefore(this._image,e.firstChild),this},_initImage:function(){this._image=n.DomUtil.create("img","leaflet-image-layer"),this._map.options.zoomAnimation&&n.Browser.any3d?n.DomUtil.addClass(this._image,"leaflet-zoom-animated"):n.DomUtil.addClass(this._image,"leaflet-zoom-hide"),this._updateOpacity(),n.Util.extend(this._image,{galleryimg:"no",onselectstart:n.Util.falseFn,onmousemove:n.Util.falseFn,onload:n.Util.bind(this._onImageLoad,this),src:this._url})},_animateZoom:function(e){var t=this._map,r=this._image,i=t.getZoomScale(e.zoom),s=this._bounds.getNorthWest(),o=this._bounds.getSouthEast(),u=t._latLngToNewLayerPoint(s,e.zoom,e.center),a=t._latLngToNewLayerPoint(o,e.zoom,e.center).subtract(u),f=t.latLngToLayerPoint(o).subtract(t.latLngToLayerPoint(s)),l=u.add(a.subtract(f).divideBy(2));r.style[n.DomUtil.TRANSFORM]=n.DomUtil.getTranslateString(l)+" scale("+i+") "},_reset:function(){var e=this._image,t=this._map.latLngToLayerPoint(this._bounds.getNorthWest()),r=this._map.latLngToLayerPoint(this._bounds.getSouthEast()).subtract(t);n.DomUtil.setPosition(e,t),e.style.width=r.x+"px",e.style.height=r.y+"px"},_onImageLoad:function(){this.fire("load")},_updateOpacity:function(){n.DomUtil.setOpacity(this._image,this.options.opacity)}}),n.imageOverlay=function(e,t,r){return new n.ImageOverlay(e,t,r)},n.Icon=n.Class.extend({options:{className:""},initialize:function(e){n.Util.setOptions(this,e)},createIcon:function(){return this._createIcon("icon")},createShadow:function(){return this._createIcon("shadow")},_createIcon:function(e){var t=this._getIconUrl(e);if(!t){if(e==="icon")throw Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(t);return this._setIconStyles(n,e),n},_setIconStyles:function(e,t){var r=this.options,i=n.point(r[t+"Size"]),s;t==="shadow"?s=n.point(r.shadowAnchor||r.iconAnchor):s=n.point(r.iconAnchor),!s&&i&&(s=i.divideBy(2,!0)),e.className="leaflet-marker-"+t+" "+r.className,s&&(e.style.marginLeft=-s.x+"px",e.style.marginTop=-s.y+"px"),i&&(e.style.width=i.x+"px",e.style.height=i.y+"px")},_createImg:function(e){var t;return n.Browser.ie6?(t=document.createElement("div"),t.style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+e+'")'):(t=document.createElement("img"),t.src=e),t},_getIconUrl:function(e){return this.options[e+"Url"]}}),n.icon=function(e){return new n.Icon(e)},n.Icon.Default=n.Icon.extend({options:{iconSize:new n.Point(25,41),iconAnchor:new n.Point(13,41),popupAnchor:new n.Point(1,-34),shadowSize:new n.Point(41,41)},_getIconUrl:function(e){var t=e+"Url";if(this.options[t])return this.options[t];var r=n.Icon.Default.imagePath;if(!r)throw Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");return r+"/marker-"+e+".png"}}),n.Icon.Default.imagePath=function(){var e=document.getElementsByTagName("script"),t=/\/?leaflet[\-\._]?([\w\-\._]*)\.js\??/,n,r,i,s;for(n=0,r=e.length;n<r;n++){i=e[n].src,s=i.match(t);if(s)return i.split(t)[0]+"/images"}}(),n.Marker=n.Class.extend({includes:n.Mixin.Events,options:{icon:new n.Icon.Default,title:"",clickable:!0,draggable:!1,zIndexOffset:0,opacity:1},initialize:function(e,t){n.Util.setOptions(this,t),this._latlng=n.latLng(e)},onAdd:function(e){this._map=e,e.on("viewreset",this.update,this),this._initIcon(),this.update(),e.options.zoomAnimation&&e.options.markerZoomAnimation&&e.on("zoomanim",this._animateZoom,this)},addTo:function(e){return e.addLayer(this),this},onRemove:function(e){this._removeIcon(),this.closePopup&&this.closePopup(),e.off({viewreset:this.update,zoomanim:this._animateZoom},this),this._map=null},getLatLng:function(){return this._latlng},setLatLng:function(e){this._latlng=n.latLng(e),this.update(),this._popup&&this._popup.setLatLng(e)},setZIndexOffset:function(e){this.options.zIndexOffset=e,this.update()},setIcon:function(e){this._map&&this._removeIcon(),this.options.icon=e,this._map&&(this._initIcon(),this.update())},update:function(){if(!this._icon)return;var e=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(e)},_initIcon:function(){var e=this.options,t=this._map,r=t.options.zoomAnimation&&t.options.markerZoomAnimation,i=r?"leaflet-zoom-animated":"leaflet-zoom-hide",s=!1;this._icon||(this._icon=e.icon.createIcon(),e.title&&(this._icon.title=e.title),this._initInteraction(),s=this.options.opacity<1,n.DomUtil.addClass(this._icon,i)),this._shadow||(this._shadow=e.icon.createShadow(),this._shadow&&(n.DomUtil.addClass(this._shadow,i),s=this.options.opacity<1)),s&&this._updateOpacity();var o=this._map._panes;o.markerPane.appendChild(this._icon),this._shadow&&o.shadowPane.appendChild(this._shadow)},_removeIcon:function(){var e=this._map._panes;e.markerPane.removeChild(this._icon),this._shadow&&e.shadowPane.removeChild(this._shadow),this._icon=this._shadow=null},_setPos:function(e){n.DomUtil.setPosition(this._icon,e),this._shadow&&n.DomUtil.setPosition(this._shadow,e),this._icon.style.zIndex=e.y+this.options.zIndexOffset},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center);this._setPos(t)},_initInteraction:function(){if(!this.options.clickable)return;var e=this._icon,t=["dblclick","mousedown","mouseover","mouseout"];n.DomUtil.addClass(e,"leaflet-clickable"),n.DomEvent.on(e,"click",this._onMouseClick,this);for(var r=0;r<t.length;r++)n.DomEvent.on(e,t[r],this._fireMouseEvent,this);n.Handler.MarkerDrag&&(this.dragging=new n.Handler.MarkerDrag(this),this.options.draggable&&this.dragging.enable())},_onMouseClick:function(e){n.DomEvent.stopPropagation(e);if(this.dragging&&this.dragging.moved())return;if(this._map.dragging&&this._map.dragging.moved())return;this.fire(e.type,{originalEvent:e})},_fireMouseEvent:function(e){this.fire(e.type,{originalEvent:e}),e.type!=="mousedown"&&n.DomEvent.stopPropagation(e)},setOpacity:function(e){this.options.opacity=e,this._map&&this._updateOpacity()},_updateOpacity:function(){n.DomUtil.setOpacity(this._icon,this.options.opacity),this._shadow&&n.DomUtil.setOpacity(this._shadow,this.options.opacity)}}),n.marker=function(e,t){return new n.Marker(e,t)},n.DivIcon=n.Icon.extend({options:{iconSize:new n.Point(12,12),className:"leaflet-div-icon"},createIcon:function(){var e=document.createElement("div"),t=this.options;return t.html&&(e.innerHTML=t.html),t.bgPos&&(e.style.backgroundPosition=-t.bgPos.x+"px "+ -t.bgPos.y+"px"),this._setIconStyles(e,"icon"),e},createShadow:function(){return null}}),n.divIcon=function(e){return new n.DivIcon(e)},n.Map.mergeOptions({closePopupOnClick:!0}),n.Popup=n.Class.extend({includes:n.Mixin.Events,options:{minWidth:50,maxWidth:300,maxHeight:null,autoPan:!0,closeButton:!0,offset:new n.Point(0,6),autoPanPadding:new n.Point(5,5),className:""},initialize:function(e,t){n.Util.setOptions(this,e),this._source=t},onAdd:function(e){this._map=e,this._container||this._initLayout(),this._updateContent();var t=e.options.fadeAnimation;t&&n.DomUtil.setOpacity(this._container,0),e._panes.popupPane.appendChild(this._container),e.on("viewreset",this._updatePosition,this),n.Browser.any3d&&e.on("zoomanim",this._zoomAnimation,this),e.options.closePopupOnClick&&e.on("preclick",this._close,this),this._update(),t&&n.DomUtil.setOpacity(this._container,1)},addTo:function(e){return e.addLayer(this),this},openOn:function(e){return e.openPopup(this),this},onRemove:function(e){e._panes.popupPane.removeChild(this._container),n.Util.falseFn(this._container.offsetWidth),e.off({viewreset:this._updatePosition,preclick:this._close,zoomanim:this._zoomAnimation},this),e.options.fadeAnimation&&n.DomUtil.setOpacity(this._container,0),this._map=null},setLatLng:function(e){return this._latlng=n.latLng(e),this._update(),this},setContent:function(e){return this._content=e,this._update(),this},_close:function(){var e=this._map;e&&(e._popup=null,e.removeLayer(this).fire("popupclose",{popup:this}))},_initLayout:function(){var e="leaflet-popup",t=this._container=n.DomUtil.create("div",e+" "+this.options.className+" leaflet-zoom-animated"),r;this.options.closeButton&&(r=this._closeButton=n.DomUtil.create("a",e+"-close-button",t),r.href="#close",r.innerHTML="&#215;",n.DomEvent.on(r,"click",this._onCloseButtonClick,this));var i=this._wrapper=n.DomUtil.create("div",e+"-content-wrapper",t);n.DomEvent.disableClickPropagation(i),this._contentNode=n.DomUtil.create("div",e+"-content",i),n.DomEvent.on(this._contentNode,"mousewheel",n.DomEvent.stopPropagation),this._tipContainer=n.DomUtil.create("div",e+"-tip-container",t),this._tip=n.DomUtil.create("div",e+"-tip",this._tipContainer)},_update:function(){if(!this._map)return;this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan()},_updateContent:function(){if(!this._content)return;if(typeof this._content=="string")this._contentNode.innerHTML=this._content;else{while(this._contentNode.hasChildNodes())this._contentNode.removeChild(this._contentNode.firstChild);this._contentNode.appendChild(this._content)}this.fire("contentupdate")},_updateLayout:function(){var e=this._contentNode,t=e.style;t.width="",t.whiteSpace="nowrap";var r=e.offsetWidth;r=Math.min(r,this.options.maxWidth),r=Math.max(r,this.options.minWidth),t.width=r+1+"px",t.whiteSpace="",t.height="";var i=e.offsetHeight,s=this.options.maxHeight,o="leaflet-popup-scrolled";s&&i>s?(t.height=s+"px",n.DomUtil.addClass(e,o)):n.DomUtil.removeClass(e,o),this._containerWidth=this._container.offsetWidth},_updatePosition:function(){var e=this._map.latLngToLayerPoint(this._latlng),t=n.Browser.any3d,r=this.options.offset;t&&n.DomUtil.setPosition(this._container,e),this._containerBottom=-r.y-(t?0:e.y),this._containerLeft=-Math.round(this._containerWidth/2)+r.x+(t?0:e.x),this._container.style.bottom=this._containerBottom+"px",this._container.style.left=this._containerLeft+"px"},_zoomAnimation:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center);n.DomUtil.setPosition(this._container,t)},_adjustPan:function(){if(!this.options.autoPan)return;var e=this._map,t=this._container.offsetHeight,r=this._containerWidth,i=new n.Point(this._containerLeft,-t-this._containerBottom);n.Browser.any3d&&i._add(n.DomUtil.getPosition(this._container));var s=e.layerPointToContainerPoint(i),o=this.options.autoPanPadding,u=e.getSize(),a=0,f=0;s.x<0&&(a=s.x-o.x),s.x+r>u.x&&(a=s.x+r-u.x+o.x),s.y<0&&(f=s.y-o.y),s.y+t>u.y&&(f=s.y+t-u.y+o.y),(a||f)&&e.panBy(new n.Point(a,f))},_onCloseButtonClick:function(e){this._close(),n.DomEvent.stop(e)}}),n.popup=function(e,t){return new n.Popup(e,t)},n.Marker.include({openPopup:function(){return this._popup&&this._map&&(this._popup.setLatLng(this._latlng),this._map.openPopup(this._popup)),this},closePopup:function(){return this._popup&&this._popup._close(),this},bindPopup:function(e,t){var r=n.point(this.options.icon.options.popupAnchor)||new n.Point(0,0);return r=r.add(n.Popup.prototype.options.offset),t&&t.offset&&(r=r.add(t.offset)),t=n.Util.extend({offset:r},t),this._popup||this.on("click",this.openPopup,this),this._popup=(new n.Popup(t,this)).setContent(e),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this.openPopup)),this}}),n.Map.include({openPopup:function(e){return this.closePopup(),this._popup=e,this.addLayer(e).fire("popupopen",{popup:this._popup})},closePopup:function(){return this._popup&&this._popup._close(),this}}),n.LayerGroup=n.Class.extend({initialize:function(e){this._layers={};var t,n;if(e)for(t=0,n=e.length;t<n;t++)this.addLayer(e[t])},addLayer:function(e){var t=n.Util.stamp(e);return this._layers[t]=e,this._map&&this._map.addLayer(e),this},removeLayer:function(e){var t=n.Util.stamp(e);return delete this._layers[t],this._map&&this._map.removeLayer(e),this},clearLayers:function(){return this.eachLayer(this.removeLayer,this),this},invoke:function(e){var t=Array.prototype.slice.call(arguments,1),n,r;for(n in this._layers)this._layers.hasOwnProperty(n)&&(r=this._layers[n],r[e]&&r[e].apply(r,t));return this},onAdd:function(e){this._map=e,this.eachLayer(e.addLayer,e)},onRemove:function(e){this.eachLayer(e.removeLayer,e),this._map=null},addTo:function(e){return e.addLayer(this),this},eachLayer:function(e,t){for(var n in this._layers)this._layers.hasOwnProperty(n)&&e.call(t,this._layers[n])}}),n.layerGroup=function(e){return new n.LayerGroup(e)},n.FeatureGroup=n.LayerGroup.extend({includes:n.Mixin.Events,addLayer:function(e){return this._layers[n.Util.stamp(e)]?this:(e.on("click dblclick mouseover mouseout mousemove contextmenu",this._propagateEvent,this),n.LayerGroup.prototype.addLayer.call(this,e),this._popupContent&&e.bindPopup&&e.bindPopup(this._popupContent),this)},removeLayer:function(e){return e.off("click dblclick mouseover mouseout mousemove contextmenu",this._propagateEvent,this),n.LayerGroup.prototype.removeLayer.call(this,e),this._popupContent?this.invoke("unbindPopup"):this},bindPopup:function(e){return this._popupContent=e,this.invoke("bindPopup",e)},setStyle:function(e){return this.invoke("setStyle",e)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var e=new n.LatLngBounds;return this.eachLayer(function(t){e.extend(t instanceof n.Marker?t.getLatLng():t.getBounds())},this),e},_propagateEvent:function(e){e.layer=e.target,e.target=this,this.fire(e.type,e)}}),n.featureGroup=function(e){return new n.FeatureGroup(e)},n.Path=n.Class.extend({includes:[n.Mixin.Events],statics:{CLIP_PADDING:n.Browser.mobile?Math.max(0,Math.min(.5,(1280/Math.max(e.innerWidth,e.innerHeight)-1)/2)):.5},options:{stroke:!0,color:"#0033ff",dashArray:null,weight:5,opacity:.5,fill:!1,fillColor:null,fillOpacity:.2,clickable:!0},initialize:function(e){n.Util.setOptions(this,e)},onAdd:function(e){this._map=e,this._container||(this._initElements(),this._initEvents()),this.projectLatlngs(),this._updatePath(),this._container&&this._map._pathRoot.appendChild(this._container),e.on({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},addTo:function(e){return e.addLayer(this),this},onRemove:function(e){e._pathRoot.removeChild(this._container),this._map=null,n.Browser.vml&&(this._container=null,this._stroke=null,this._fill=null),e.off({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},projectLatlngs:function(){},setStyle:function(e){return n.Util.setOptions(this,e),this._container&&this._updateStyle(),this},redraw:function(){return this._map&&(this.projectLatlngs(),this._updatePath()),this}}),n.Map.include({_updatePathViewport:function(){var e=n.Path.CLIP_PADDING,t=this.getSize(),r=n.DomUtil.getPosition(this._mapPane),i=r.multiplyBy(-1)._subtract(t.multiplyBy(e)),s=i.add(t.multiplyBy(1+e*2));this._pathViewport=new n.Bounds(i,s)}}),n.Path.SVG_NS="http://www.w3.org/2000/svg",n.Browser.svg=!!document.createElementNS&&!!document.createElementNS(n.Path.SVG_NS,"svg").createSVGRect,n.Path=n.Path.extend({statics:{SVG:n.Browser.svg},bringToFront:function(){return this._container&&this._map._pathRoot.appendChild(this._container),this},bringToBack:function(){if(this._container){var e=this._map._pathRoot;e.insertBefore(this._container,e.firstChild)}return this},getPathString:function(){},_createElement:function(e){return document.createElementNS(n.Path.SVG_NS,e)},_initElements:function(){this._map._initPathRoot(),this._initPath(),this._initStyle()},_initPath:function(){this._container=this._createElement("g"),this._path=this._createElement("path"),this._container.appendChild(this._path)},_initStyle:function(){this.options.stroke&&(this._path.setAttribute("stroke-linejoin","round"),this._path.setAttribute("stroke-linecap","round")),this.options.fill&&this._path.setAttribute("fill-rule","evenodd"),this._updateStyle()},_updateStyle:function(){this.options.stroke?(this._path.setAttribute("stroke",this.options.color),this._path.setAttribute("stroke-opacity",this.options.opacity),this._path.setAttribute("stroke-width",this.options.weight),this.options.dashArray?this._path.setAttribute("stroke-dasharray",this.options.dashArray):this._path.removeAttribute("stroke-dasharray")):this._path.setAttribute("stroke","none"),this.options.fill?(this._path.setAttribute("fill",this.options.fillColor||this.options.color),this._path.setAttribute("fill-opacity",this.options.fillOpacity)):this._path.setAttribute("fill","none")},_updatePath:function(){var e=this.getPathString();e||(e="M0 0"),this._path.setAttribute("d",e)},_initEvents:function(){if(this.options.clickable){(n.Browser.svg||!n.Browser.vml)&&this._path.setAttribute("class","leaflet-clickable"),n.DomEvent.on(this._container,"click",this._onMouseClick,this);var e=["dblclick","mousedown","mouseover","mouseout","mousemove","contextmenu"];for(var t=0;t<e.length;t++)n.DomEvent.on(this._container,e[t],this._fireMouseEvent,this)}},_onMouseClick:function(e){if(this._map.dragging&&this._map.dragging.moved())return;this._fireMouseEvent(e),n.DomEvent.stopPropagation(e)},_fireMouseEvent:function(e){if(!this.hasEventListeners(e.type))return;e.type==="contextmenu"&&n.DomEvent.preventDefault(e);var t=this._map,r=t.mouseEventToContainerPoint(e),i=t.containerPointToLayerPoint(r),s=t.layerPointToLatLng(i);this.fire(e.type,{latlng:s,layerPoint:i,containerPoint:r,originalEvent:e})}}),n.Map.include({_initPathRoot:function(){this._pathRoot||(this._pathRoot=n.Path.prototype._createElement("svg"),this._panes.overlayPane.appendChild(this._pathRoot),this.options.zoomAnimation&&n.Browser.any3d?(this._pathRoot.setAttribute("class"," leaflet-zoom-animated"),this.on({zoomanim:this._animatePathZoom,zoomend:this._endPathZoom})):this._pathRoot.setAttribute("class"," leaflet-zoom-hide"),this.on("moveend",this._updateSvgViewport),this._updateSvgViewport())},_animatePathZoom:function(e){var t=this.getZoomScale(e.zoom),r=this._getCenterOffset(e.center).divideBy(1-1/t),i=this.containerPointToLayerPoint(this.getSize().multiplyBy(-n.Path.CLIP_PADDING)),s=i.add(r).round();this._pathRoot.style[n.DomUtil.TRANSFORM]=n.DomUtil.getTranslateString(s.multiplyBy(-1).add(n.DomUtil.getPosition(this._pathRoot)).multiplyBy(t).add(s))+" scale("+t+") ",this._pathZooming=!0},_endPathZoom:function(){this._pathZooming=!1},_updateSvgViewport:function(){if(this._pathZooming)return;this._updatePathViewport();var e=this._pathViewport,t=e.min,r=e.max,i=r.x-t.x,s=r.y-t.y,o=this._pathRoot,u=this._panes.overlayPane;n.Browser.mobileWebkit&&u.removeChild(o),n.DomUtil.setPosition(o,t),o.setAttribute("width",i),o.setAttribute("height",s),o.setAttribute("viewBox",[t.x,t.y,i,s].join(" ")),n.Browser.mobileWebkit&&u.appendChild(o)}}),n.Path.include({bindPopup:function(e,t){if(!this._popup||this._popup.options!==t)this._popup=new n.Popup(t,this);return this._popup.setContent(e),this._openPopupAdded||(this.on("click",this._openPopup,this),this._openPopupAdded=!0),this},openPopup:function(e){return this._popup&&(e=e||this._latlng||this._latlngs[Math.floor(this._latlngs.length/2)],this._openPopup({latlng:e})),this},_openPopup:function(e){this._popup.setLatLng(e.latlng),this._map.openPopup(this._popup)}}),n.Browser.vml=function(){try{var e=document.createElement("div");e.innerHTML='<v:shape adj="1"/>';var t=e.firstChild;return t.style.behavior="url(#default#VML)",t&&typeof t.adj=="object"}catch(n){return!1}}(),n.Path=n.Browser.svg||!n.Browser.vml?n.Path:n.Path.extend({statics:{VML:!0,CLIP_PADDING:.02},_createElement:function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(e){return document.createElement("<lvml:"+e+' class="lvml">')}}catch(e){return function(e){return document.createElement("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),_initPath:function(){var e=this._container=this._createElement("shape");n.DomUtil.addClass(e,"leaflet-vml-shape"),this.options.clickable&&n.DomUtil.addClass(e,"leaflet-clickable"),e.coordsize="1 1",this._path=this._createElement("path"),e.appendChild(this._path),this._map._pathRoot.appendChild(e)},_initStyle:function(){this._updateStyle()},_updateStyle:function(){var e=this._stroke,t=this._fill,n=this.options,r=this._container;r.stroked=n.stroke,r.filled=n.fill,n.stroke?(e||(e=this._stroke=this._createElement("stroke"),e.endcap="round",r.appendChild(e)),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=n.dashArray.replace(/ *, */g," "):e.dashStyle=""):e&&(r.removeChild(e),this._stroke=null),n.fill?(t||(t=this._fill=this._createElement("fill"),r.appendChild(t)),t.color=n.fillColor||n.color,t.opacity=n.fillOpacity):t&&(r.removeChild(t),this._fill=null)},_updatePath:function(){var e=this._container.style;e.display="none",this._path.v=this.getPathString()+" ",e.display=""}}),n.Map.include(n.Browser.svg||!n.Browser.vml?{}:{_initPathRoot:function(){if(this._pathRoot)return;var e=this._pathRoot=document.createElement("div");e.className="leaflet-vml-container",this._panes.overlayPane.appendChild(e),this.on("moveend",this._updatePathViewport),this._updatePathViewport()}}),n.Browser.canvas=function(){return!!document.createElement("canvas").getContext}(),n.Path=n.Path.SVG&&!e.L_PREFER_CANVAS||!n.Browser.canvas?n.Path:n.Path.extend({statics:{CANVAS:!0,SVG:!1},redraw:function(){return this._map&&(this.projectLatlngs(),this._requestUpdate()),this},setStyle:function(e){return n.Util.setOptions(this,e),this._map&&(this._updateStyle(),this._requestUpdate()),this},onRemove:function(e){e.off("viewreset",this.projectLatlngs,this).off("moveend",this._updatePath,this),this._requestUpdate(),this._map=null},_requestUpdate:function(){this._map&&(n.Util.cancelAnimFrame(this._fireMapMoveEnd),this._updateRequest=n.Util.requestAnimFrame(this._fireMapMoveEnd,this._map))},_fireMapMoveEnd:function(){this.fire("moveend")},_initElements:function(){this._map._initPathRoot(),this._ctx=this._map._canvasCtx},_updateStyle:function(){var e=this.options;e.stroke&&(this._ctx.lineWidth=e.weight,this._ctx.strokeStyle=e.color),e.fill&&(this._ctx.fillStyle=e.fillColor||e.color)},_drawPath:function(){var e,t,r,i,s,o;this._ctx.beginPath();for(e=0,r=this._parts.length;e<r;e++){for(t=0,i=this._parts[e].length;t<i;t++)s=this._parts[e][t],o=(t===0?"move":"line")+"To",this._ctx[o](s.x,s.y);this instanceof n.Polygon&&this._ctx.closePath()}},_checkIfEmpty:function(){return!this._parts.length},_updatePath:function(){if(this._checkIfEmpty())return;var e=this._ctx,t=this.options;this._drawPath(),e.save(),this._updateStyle(),t.fill&&(t.fillOpacity<1&&(e.globalAlpha=t.fillOpacity),e.fill()),t.stroke&&(t.opacity<1&&(e.globalAlpha=t.opacity),e.stroke()),e.restore()},_initEvents:function(){this.options.clickable&&this._map.on("click",this._onClick,this)},_onClick:function(e){this._containsPoint(e.layerPoint)&&this.fire("click",e)}}),n.Map.include(n.Path.SVG&&!e.L_PREFER_CANVAS||!n.Browser.canvas?{}:{_initPathRoot:function(){var e=this._pathRoot,t;e||(e=this._pathRoot=document.createElement("canvas"),e.style.position="absolute",t=this._canvasCtx=e.getContext("2d"),t.lineCap="round",t.lineJoin="round",this._panes.overlayPane.appendChild(e),this.options.zoomAnimation&&(this._pathRoot.className="leaflet-zoom-animated",this.on("zoomanim",this._animatePathZoom),this.on("zoomend",this._endPathZoom)),this.on("moveend",this._updateCanvasViewport),this._updateCanvasViewport())},_updateCanvasViewport:function(){if(this._pathZooming)return;this._updatePathViewport();var e=this._pathViewport,t=e.min,r=e.max.subtract(t),i=this._pathRoot;n.DomUtil.setPosition(i,t),i.width=r.x,i.height=r.y,i.getContext("2d").translate(-t.x,-t.y)}}),n.LineUtil={simplify:function(e,t){if(!t||!e.length)return e.slice();var n=t*t;return e=this._reducePoints(e,n),e=this._simplifyDP(e,n),e},pointToSegmentDistance:function(e,t,n){return Math.sqrt(this._sqClosestPointOnSegment(e,t,n,!0))},closestPointOnSegment:function(e,t,n){return this._sqClosestPointOnSegment(e,t,n)},_simplifyDP:function(e,n){var r=e.length,i=typeof Uint8Array!=t+""?Uint8Array:Array,s=new i(r);s[0]=s[r-1]=1,this._simplifyDPStep(e,s,n,0,r-1);var o,u=[];for(o=0;o<r;o++)s[o]&&u.push(e[o]);return u},_simplifyDPStep:function(e,t,n,r,i){var s=0,o,u,a;for(u=r+1;u<=i-1;u++)a=this._sqClosestPointOnSegment(e[u],e[r],e[i],!0),a>s&&(o=u,s=a);s>n&&(t[o]=1,this._simplifyDPStep(e,t,n,r,o),this._simplifyDPStep(e,t,n,o,i))},_reducePoints:function(e,t){var n=[e[0]];for(var r=1,i=0,s=e.length;r<s;r++)this._sqDist(e[r],e[i])>t&&(n.push(e[r]),i=r);return i<s-1&&n.push(e[s-1]),n},clipSegment:function(e,t,n,r){var i=n.min,s=n.max,o=r?this._lastCode:this._getBitCode(e,n),u=this._getBitCode(t,n);this._lastCode=u;for(;;){if(!(o|u))return[e,t];if(o&u)return!1;var a=o||u,f=this._getEdgeIntersection(e,t,a,n),l=this._getBitCode(f,n);a===o?(e=f,o=l):(t=f,u=l)}},_getEdgeIntersection:function(e,t,r,i){var s=t.x-e.x,o=t.y-e.y,u=i.min,a=i.max;if(r&8)return new n.Point(e.x+s*(a.y-e.y)/o,a.y);if(r&4)return new n.Point(e.x+s*(u.y-e.y)/o,u.y);if(r&2)return new n.Point(a.x,e.y+o*(a.x-e.x)/s);if(r&1)return new n.Point(u.x,e.y+o*(u.x-e.x)/s)},_getBitCode:function(e,t){var n=0;return e.x<t.min.x?n|=1:e.x>t.max.x&&(n|=2),e.y<t.min.y?n|=4:e.y>t.max.y&&(n|=8),n},_sqDist:function(e,t){var n=t.x-e.x,r=t.y-e.y;return n*n+r*r},_sqClosestPointOnSegment:function(e,t,r,i){var s=t.x,o=t.y,u=r.x-s,a=r.y-o,f=u*u+a*a,l;return f>0&&(l=((e.x-s)*u+(e.y-o)*a)/f,l>1?(s=r.x,o=r.y):l>0&&(s+=u*l,o+=a*l)),u=e.x-s,a=e.y-o,i?u*u+a*a:new n.Point(s,o)}},n.Polyline=n.Path.extend({initialize:function(e,t){n.Path.prototype.initialize.call(this,t),this._latlngs=this._convertLatLngs(e),n.Handler.PolyEdit&&(this.editing=new n.Handler.PolyEdit(this),this.options.editable&&this.editing.enable())},options:{smoothFactor:1,noClip:!1},projectLatlngs:function(){this._originalPoints=[];for(var e=0,t=this._latlngs.length;e<t;e++)this._originalPoints[e]=this._map.latLngToLayerPoint(this._latlngs[e])},getPathString:function(){for(var e=0,t=this._parts.length,n="";e<t;e++)n+=this._getPathPartStr(this._parts[e]);return n},getLatLngs:function(){return this._latlngs},setLatLngs:function(e){return this._latlngs=this._convertLatLngs(e),this.redraw()},addLatLng:function(e){return this._latlngs.push(n.latLng(e)),this.redraw()},spliceLatLngs:function(e,t){var n=[].splice.apply(this._latlngs,arguments);return this._convertLatLngs(this._latlngs),this.redraw(),n},closestLayerPoint:function(e){var t=Infinity,r=this._parts,i,s,o=null;for(var u=0,a=r.length;u<a;u++){var f=r[u];for(var l=1,c=f.length;l<c;l++){i=f[l-1],s=f[l];var h=n.LineUtil._sqClosestPointOnSegment(e,i,s,!0);h<t&&(t=h,o=n.LineUtil._sqClosestPointOnSegment(e,i,s))}}return o&&(o.distance=Math.sqrt(t)),o},getBounds:function(){var e=new n.LatLngBounds,t=this.getLatLngs();for(var r=0,i=t.length;r<i;r++)e.extend(t[r]);return e},onAdd:function(e){n.Path.prototype.onAdd.call(this,e),this.editing&&this.editing.enabled()&&this.editing.addHooks()},onRemove:function(e){this.editing&&this.editing.enabled()&&this.editing.removeHooks(),n.Path.prototype.onRemove.call(this,e)},_convertLatLngs:function(e){var t,r;for(t=0,r=e.length;t<r;t++){if(e[t]instanceof Array&&typeof e[t][0]!="number")return;e[t]=n.latLng(e[t])}return e},_initEvents:function(){n.Path.prototype._initEvents.call(this)},_getPathPartStr:function(e){var t=n.Path.VML;for(var r=0,i=e.length,s="",o;r<i;r++)o=e[r],t&&o._round(),s+=(r?"L":"M")+o.x+" "+o.y;return s},_clipPoints:function(){var e=this._originalPoints,t=e.length,r,i,s;if(this.options.noClip){this._parts=[e];return}this._parts=[];var o=this._parts,u=this._map._pathViewport,a=n.LineUtil;for(r=0,i=0;r<t-1;r++){s=a.clipSegment(e[r],e[r+1],u,r);if(!s)continue;o[i]=o[i]||[],o[i].push(s[0]);if(s[1]!==e[r+1]||r===t-2)o[i].push(s[1]),i++}},_simplifyPoints:function(){var e=this._parts,t=n.LineUtil;for(var r=0,i=e.length;r<i;r++)e[r]=t.simplify(e[r],this.options.smoothFactor)},_updatePath:function(){if(!this._map)return;this._clipPoints(),this._simplifyPoints(),n.Path.prototype._updatePath.call(this)}}),n.polyline=function(e,t){return new n.Polyline(e,t)},n.PolyUtil={},n.PolyUtil.clipPolygon=function(e,t){var r=t.min,i=t.max,s,o=[1,4,2,8],u,a,f,l,c,h,p,d,v=n.LineUtil;for(u=0,h=e.length;u<h;u++)e[u]._code=v._getBitCode(e[u],t);for(f=0;f<4;f++){p=o[f],s=[];for(u=0,h=e.length,a=h-1;u<h;a=u++)l=e[u],c=e[a],l._code&p?c._code&p||(d=v._getEdgeIntersection(c,l,p,t),d._code=v._getBitCode(d,t),s.push(d)):(c._code&p&&(d=v._getEdgeIntersection(c,l,p,t),d._code=v._getBitCode(d,t),s.push(d)),s.push(l));e=s}return e},n.Polygon=n.Polyline.extend({options:{fill:!0},initialize:function(e,t){n.Polyline.prototype.initialize.call(this,e,t),e&&e[0]instanceof Array&&typeof e[0][0]!="number"&&(this._latlngs=this._convertLatLngs(e[0]),this._holes=e.slice(1))},projectLatlngs:function(){n.Polyline.prototype.projectLatlngs.call(this),this._holePoints=[];if(!this._holes)return;for(var e=0,t=this._holes.length,r;e<t;e++){this._holePoints[e]=[];for(var i=0,s=this._holes[e].length;i<s;i++)this._holePoints[e][i]=this._map.latLngToLayerPoint(this._holes[e][i])}},_clipPoints:function(){var e=this._originalPoints,t=[];this._parts=[e].concat(this._holePoints);if(this.options.noClip)return;for(var r=0,i=this._parts.length;r<i;r++){var s=n.PolyUtil.clipPolygon(this._parts[r],this._map._pathViewport);if(!s.length)continue;t.push(s)}this._parts=t},_getPathPartStr:function(e){var t=n.Polyline.prototype._getPathPartStr.call(this,e);return t+(n.Browser.svg?"z":"x")}}),n.polygon=function(e,t){return new n.Polygon(e,t)},function(){function e(e){return n.FeatureGroup.extend({initialize:function(e,t){this._layers={},this._options=t,this.setLatLngs(e)},setLatLngs:function(t){var n=0,r=t.length;this.eachLayer(function(e){n<r?e.setLatLngs(t[n++]):this.removeLayer(e)},this);while(n<r)this.addLayer(new e(t[n++],this._options));return this}})}n.MultiPolyline=e(n.Polyline),n.MultiPolygon=e(n.Polygon),n.multiPolyline=function(e,t){return new n.MultiPolyline(e,t)},n.multiPolygon=function(e,t){return new n.MultiPolygon(e,t)}}(),n.Rectangle=n.Polygon.extend({initialize:function(e,t){n.Polygon.prototype.initialize.call(this,this._boundsToLatLngs(e),t)},setBounds:function(e){this.setLatLngs(this._boundsToLatLngs(e))},_boundsToLatLngs:function(e){return e=n.latLngBounds(e),[e.getSouthWest(),e.getNorthWest(),e.getNorthEast(),e.getSouthEast(),e.getSouthWest()]}}),n.rectangle=function(e,t){return new n.Rectangle(e,t)},n.Circle=n.Path.extend({initialize:function(e,t,r){n.Path.prototype.initialize.call(this,r),this._latlng=n.latLng(e),this._mRadius=t},options:{fill:!0},setLatLng:function(e){return this._latlng=n.latLng(e),this.redraw()},setRadius:function(e){return this._mRadius=e,this.redraw()},projectLatlngs:function(){var e=this._getLngRadius(),t=new n.LatLng(this._latlng.lat,this._latlng.lng-e,!0),r=this._map.latLngToLayerPoint(t);this._point=this._map.latLngToLayerPoint(this._latlng),this._radius=Math.max(Math.round(this._point.x-r.x),1)},getBounds:function(){var e=this._map,t=this._radius*Math.cos(Math.PI/4),r=e.project(this._latlng),i=new n.Point(r.x-t,r.y+t),s=new n.Point(r.x+t,r.y-t),o=e.unproject(i),u=e.unproject(s);return new n.LatLngBounds(o,u)},getLatLng:function(){return this._latlng},getPathString:function(){var e=this._point,t=this._radius;return this._checkIfEmpty()?"":n.Browser.svg?"M"+e.x+","+(e.y-t)+"A"+t+","+t+",0,1,1,"+(e.x-.1)+","+(e.y-t)+" z":(e._round(),t=Math.round(t),"AL "+e.x+","+e.y+" "+t+","+t+" 0,"+23592600)},getRadius:function(){return this._mRadius},_getLngRadius:function(){var e=40075017,t=e*Math.cos(n.LatLng.DEG_TO_RAD*this._latlng.lat);return this._mRadius/t*360},_checkIfEmpty:function(){if(!this._map)return!1;var e=this._map._pathViewport,t=this._radius,n=this._point;return n.x-t>e.max.x||n.y-t>e.max.y||n.x+t<e.min.x||n.y+t<e.min.y}}),n.circle=function(e,t,r){return new n.Circle(e,t,r)},n.CircleMarker=n.Circle.extend({options:{radius:10,weight:2},initialize:function(e,t){n.Circle.prototype.initialize.call(this,e,null,t),this._radius=this.options.radius},projectLatlngs:function(){this._point=this._map.latLngToLayerPoint(this._latlng)},setRadius:function(e){return this._radius=e,this.redraw()}}),n.circleMarker=function(e,t){return new n.CircleMarker(e,t)},n.Polyline.include(n.Path.CANVAS?{_containsPoint:function(e,t){var r,i,s,o,u,a,f,l=this.options.weight/2;n.Browser.touch&&(l+=10);for(r=0,o=this._parts.length;r<o;r++){f=this._parts[r];for(i=0,u=f.length,s=u-1;i<u;s=i++){if(!t&&i===0)continue;a=n.LineUtil.pointToSegmentDistance(e,f[s],f[i]);if(a<=l)return!0}}return!1}}:{}),n.Polygon.include(n.Path.CANVAS?{_containsPoint:function(e){var t=!1,r,i,s,o,u,a,f,l;if(n.Polyline.prototype._containsPoint.call(this,e,!0))return!0;for(o=0,f=this._parts.length;o<f;o++){r=this._parts[o];for(u=0,l=r.length,a=l-1;u<l;a=u++)i=r[u],s=r[a],i.y>e.y!=s.y>e.y&&e.x<(s.x-i.x)*(e.y-i.y)/(s.y-i.y)+i.x&&(t=!t)}return t}}:{}),n.Circle.include(n.Path.CANVAS?{_drawPath:function(){var e=this._point;this._ctx.beginPath(),this._ctx.arc(e.x,e.y,this._radius,0,Math.PI*2,!1)},_containsPoint:function(e){var t=this._point,n=this.options.stroke?this.options.weight/2:0;return e.distanceTo(t)<=this._radius+n}}:{}),n.GeoJSON=n.FeatureGroup.extend({initialize:function(e,t){n.Util.setOptions(this,t),this._layers={},e&&this.addData(e)},addData:function(e){var t=e instanceof Array?e:e.features,r,i;if(t){for(r=0,i=t.length;r<i;r++)this.addData(t[r]);return this}var s=this.options;if(s.filter&&!s.filter(e))return;var o=n.GeoJSON.geometryToLayer(e,s.pointToLayer);return o.feature=e,this.resetStyle(o),s.onEachFeature&&s.onEachFeature(e,o),this.addLayer(o)},resetStyle:function(e){var t=this.options.style;t&&this._setLayerStyle(e,t)},setStyle:function(e){this.eachLayer(function(t){this._setLayerStyle(t,e)},this)},_setLayerStyle:function(e,t){typeof t=="function"&&(t=t(e.feature)),e.setStyle&&e.setStyle(t)}}),n.Util.extend(n.GeoJSON,{geometryToLayer:function(e,t){var r=e.type==="Feature"?e.geometry:e,i=r.coordinates,s=[],o,u,a,f,l;switch(r.type){case"Point":return o=this.coordsToLatLng(i),t?t(e,o):new n.Marker(o);case"MultiPoint":for(a=0,f=i.length;a<f;a++)o=this.coordsToLatLng(i[a]),l=t?t(e,o):new n.Marker(o),s.push(l);return new n.FeatureGroup(s);case"LineString":return u=this.coordsToLatLngs(i),new n.Polyline(u);case"Polygon":return u=this.coordsToLatLngs(i,1),new n.Polygon(u);case"MultiLineString":return u=this.coordsToLatLngs(i,1),new n.MultiPolyline(u);case"MultiPolygon":return u=this.coordsToLatLngs(i,2),new n.MultiPolygon(u);case"GeometryCollection":for(a=0,f=r.geometries.length;a<f;a++)l=this.geometryToLayer(r.geometries[a],t),s.push(l);return new n.FeatureGroup(s);default:throw Error("Invalid GeoJSON object.")}},coordsToLatLng:function(e,t){var r=parseFloat(e[t?0:1]),i=parseFloat(e[t?1:0]);return new n.LatLng(r,i,!0)},coordsToLatLngs:function(e,t,n){var r,i=[],s,o;for(s=0,o=e.length;s<o;s++)r=t?this.coordsToLatLngs(e[s],t-1,n):this.coordsToLatLng(e[s],n),i.push(r);return i}}),n.geoJson=function(e,t){return new n.GeoJSON(e,t)},n.DomEvent={addListener:function(e,t,r,i){var s=n.Util.stamp(r),o="_leaflet_"+t+s,u,a,f;return e[o]?this:(u=function(t){return r.call(i||e,t||n.DomEvent._getEvent())},n.Browser.touch&&t==="dblclick"&&this.addDoubleTapListener?this.addDoubleTapListener(e,u,s):("addEventListener"in e?t==="mousewheel"?(e.addEventListener("DOMMouseScroll",u,!1),e.addEventListener(t,u,!1)):t==="mouseenter"||t==="mouseleave"?(a=u,f=t==="mouseenter"?"mouseover":"mouseout",u=function(t){if(!n.DomEvent._checkMouse(e,t))return;return a(t)},e.addEventListener(f,u,!1)):e.addEventListener(t,u,!1):"attachEvent"in e&&e.attachEvent("on"+t,u),e[o]=u,this))},removeListener:function(e,t,r){var i=n.Util.stamp(r),s="_leaflet_"+t+i,o=e[s];if(!o)return;return n.Browser.touch&&t==="dblclick"&&this.removeDoubleTapListener?this.removeDoubleTapListener(e,i):"removeEventListener"in e?t==="mousewheel"?(e.removeEventListener("DOMMouseScroll",o,!1),e.removeEventListener(t,o,!1)):t==="mouseenter"||t==="mouseleave"?e.removeEventListener(t==="mouseenter"?"mouseover":"mouseout",o,!1):e.removeEventListener(t,o,!1):"detachEvent"in e&&e.detachEvent("on"+t,o),e[s]=null,this},stopPropagation:function(e){return e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,this},disableClickPropagation:function(e){var t=n.DomEvent.stopPropagation;return n.DomEvent.addListener(e,n.Draggable.START,t).addListener(e,"click",t).addListener(e,"dblclick",t)},preventDefault:function(e){return e.preventDefault?e.preventDefault():e.returnValue=!1,this},stop:function(e){return n.DomEvent.preventDefault(e).stopPropagation(e)},getMousePosition:function(e,t){var r=document.body,i=document.documentElement,s=e.pageX?e.pageX:e.clientX+r.scrollLeft+i.scrollLeft,o=e.pageY?e.pageY:e.clientY+r.scrollTop+i.scrollTop,u=new n.Point(s,o);return t?u._subtract(n.DomUtil.getViewportOffset(t)):u},getWheelDelta:function(e){var t=0;return e.wheelDelta&&(t=e.wheelDelta/120),e.detail&&(t=-e.detail/3),t},_checkMouse:function(e,t){var n=t.relatedTarget;if(!n)return!0;try{while(n&&n!==e)n=n.parentNode}catch(r){return!1}return n!==e},_getEvent:function(){var t=e.event;if(!t){var n=arguments.callee.caller;while(n){t=n.arguments[0];if(t&&e.Event===t.constructor)break;n=n.caller}}return t}},n.DomEvent.on=n.DomEvent.addListener,n.DomEvent.off=n.DomEvent.removeListener,n.Draggable=n.Class.extend({includes:n.Mixin.Events,statics:{START:n.Browser.touch?"touchstart":"mousedown",END:n.Browser.touch?"touchend":"mouseup",MOVE:n.Browser.touch?"touchmove":"mousemove",TAP_TOLERANCE:15},initialize:function(e,t){this._element=e,this._dragStartTarget=t||e},enable:function(){if(this._enabled)return;n.DomEvent.on(this._dragStartTarget,n.Draggable.START,this._onDown,this),this._enabled=!0},disable:function(){if(!this._enabled)return;n.DomEvent.off(this._dragStartTarget,n.Draggable.START,this._onDown),this._enabled=!1,this._moved=!1},_onDown:function(e){if(!n.Browser.touch&&e.shiftKey||e.which!==1&&e.button!==1&&!e.touches)return;this._simulateClick=!0;if(e.touches&&e.touches.length>1){this._simulateClick=!1;return}var t=e.touches&&e.touches.length===1?e.touches[0]:e,r=t.target;n.DomEvent.preventDefault(e),n.Browser.touch&&r.tagName.toLowerCase()==="a"&&n.DomUtil.addClass(r,"leaflet-active"),this._moved=!1;if(this._moving)return;this._startPos=this._newPos=n.DomUtil.getPosition(this._element),this._startPoint=new n.Point(t.clientX,t.clientY),n.DomEvent.on(document,n.Draggable.MOVE,this._onMove,this),n.DomEvent.on(document,n.Draggable.END,this._onUp,this)},_onMove:function(e){if(e.touches&&e.touches.length>1)return;var t=e.touches&&e.touches.length===1?e.touches[0]:e,r=new n.Point(t.clientX,t.clientY),i=r.subtract(this._startPoint);if(!i.x&&!i.y)return;n.DomEvent.preventDefault(e),this._moved||(this.fire("dragstart"),this._moved=!0,n.Browser.touch||(n.DomUtil.disableTextSelection(),this._setMovingCursor())),this._newPos=this._startPos.add(i),this._moving=!0,n.Util.cancelAnimFrame(this._animRequest),this._animRequest=n.Util.requestAnimFrame(this._updatePosition,this,!0,this._dragStartTarget)},_updatePosition:function(){this.fire("predrag"),n.DomUtil.setPosition(this._element,this._newPos),this.fire("drag")},_onUp:function(e){if(this._simulateClick&&e.changedTouches){var t=e.changedTouches[0],r=t.target,i=this._newPos&&this._newPos.distanceTo(this._startPos)||0;r.tagName.toLowerCase()==="a"&&n.DomUtil.removeClass(r,"leaflet-active"),i<n.Draggable.TAP_TOLERANCE&&this._simulateEvent("click",t)}n.Browser.touch||(n.DomUtil.enableTextSelection(),this._restoreCursor()),n.DomEvent.off(document,n.Draggable.MOVE,this._onMove),n.DomEvent.off(document,n.Draggable.END,this._onUp),this._moved&&(n.Util.cancelAnimFrame(this._animRequest),this.fire("dragend")),this._moving=!1},_setMovingCursor:function(){n.DomUtil.addClass(document.body,"leaflet-dragging")},_restoreCursor:function(){n.DomUtil.removeClass(document.body,"leaflet-dragging")},_simulateEvent:function(t,n){var r=document.createEvent("MouseEvents");r.initMouseEvent(t,!0,!0,e,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),n.target.dispatchEvent(r)}}),n.Handler=n.Class.extend({initialize:function(e){this._map=e},enable:function(){if(this._enabled)return;this._enabled=!0,this.addHooks()},disable:function(){if(!this._enabled)return;this._enabled=!1,this.removeHooks()},enabled:function(){return!!this._enabled}}),n.Map.mergeOptions({dragging:!0,inertia:!n.Browser.android23,inertiaDeceleration:3e3,inertiaMaxSpeed:1500,inertiaThreshold:n.Browser.touch?32:14,worldCopyJump:!0}),n.Map.Drag=n.Handler.extend({addHooks:function(){if(!this._draggable){this._draggable=new n.Draggable(this._map._mapPane,this._map._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this);var e=this._map.options;e.worldCopyJump&&(this._draggable.on("predrag",this._onPreDrag,this),this._map.on("viewreset",this._onViewReset,this))}this._draggable.enable()},removeHooks:function(){this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){var e=this._map;e.fire("movestart").fire("dragstart"),e._panTransition&&e._panTransition._onTransitionEnd(!0),e.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(){if(this._map.options.inertia){var e=this._lastTime=+(new Date),t=this._lastPos=this._draggable._newPos;this._positions.push(t),this._times.push(e),e-this._times[0]>200&&(this._positions.shift(),this._times.shift())}this._map.fire("move").fire("drag")},_onViewReset:function(){var e=this._map.getSize().divideBy(2),t=this._map.latLngToLayerPoint(new n.LatLng(0,0));this._initialWorldOffset=t.subtract(e).x,this._worldWidth=this._map.project(new n.LatLng(0,180)).x},_onPreDrag:function(){var e=this._map,t=this._worldWidth,n=Math.round(t/2),r=this._initialWorldOffset,i=this._draggable._newPos.x,s=(i-n+r)%t+n-r,o=(i+n+r)%t-n-r,u=Math.abs(s+r)<Math.abs(o+r)?s:o;this._draggable._newPos.x=u},_onDragEnd:function(){var e=this._map,r=e.options,i=+(new Date)-this._lastTime,s=!r.inertia||i>r.inertiaThreshold||this._positions[0]===t;if(s)e.fire("moveend");else{var o=this._lastPos.subtract(this._positions[0]),u=(this._lastTime+i-this._times[0])/1e3,a=o.multiplyBy(.58/u),f=a.distanceTo(new n.Point(0,0)),l=Math.min(r.inertiaMaxSpeed,f),c=a.multiplyBy(l/f),h=l/r.inertiaDeceleration,p=c.multiplyBy(-h/2).round(),d={duration:h,easing:"ease-out"};n.Util.requestAnimFrame(n.Util.bind(function(){this._map.panBy(p,d)},this))}e.fire("dragend"),r.maxBounds&&n.Util.requestAnimFrame(this._panInsideMaxBounds,e,!0,e._container)},_panInsideMaxBounds:function(){this.panInsideBounds(this.options.maxBounds)}}),n.Map.addInitHook("addHandler","dragging",n.Map.Drag),n.Map.mergeOptions({doubleClickZoom:!0}),n.Map.DoubleClickZoom=n.Handler.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick)},_onDoubleClick:function(e){this.setView(e.latlng,this._zoom+1)}}),n.Map.addInitHook("addHandler","doubleClickZoom",n.Map.DoubleClickZoom),n.Map.mergeOptions({scrollWheelZoom:!n.Browser.touch}),n.Map.ScrollWheelZoom=n.Handler.extend({addHooks:function(){n.DomEvent.on(this._map._container,"mousewheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){n.DomEvent.off(this._map._container,"mousewheel",this._onWheelScroll)},_onWheelScroll:function(e){var t=n.DomEvent.getWheelDelta(e);this._delta+=t,this._lastMousePos=this._map.mouseEventToContainerPoint(e),clearTimeout(this._timer),this._timer=setTimeout(n.Util.bind(this._performZoom,this),40),n.DomEvent.preventDefault(e)},_performZoom:function(){var e=this._map,t=Math.round(this._delta),n=e.getZoom();t=Math.max(Math.min(t,4),-4),t=e._limitZoom(n+t)-n,this._delta=0;if(!t)return;var r=n+t,i=this._getCenterForScrollWheelZoom(this._lastMousePos,r);e.setView(i,r)},_getCenterForScrollWheelZoom:function(e,t){var n=this._map,r=n.getZoomScale(t),i=n.getSize().divideBy(2),s=e.subtract(i).multiplyBy(1-1/r),o=n._getTopLeftPoint().add(i).add(s);return n.unproject(o)}}),n.Map.addInitHook("addHandler","scrollWheelZoom",n.Map.ScrollWheelZoom),n.Util.extend(n.DomEvent,{addDoubleTapListener:function(e,t,n){function l(e){if(e.touches.length!==1)return;var t=Date.now(),n=t-(r||t);o=e.touches[0],i=n>0&&n<=s,r=t}function c(e){i&&(o.type="dblclick",t(o),r=null)}var r,i=!1,s=250,o,u="_leaflet_",a="touchstart",f="touchend";return e[u+a+n]=l,e[u+f+n]=c,e.addEventListener(a,l,!1),e.addEventListener(f,c,!1),this},removeDoubleTapListener:function(e,t){var n="_leaflet_";return e.removeEventListener(e,e[n+"touchstart"+t],!1),e.removeEventListener(e,e[n+"touchend"+t],!1),this}}),n.Map.mergeOptions({touchZoom:n.Browser.touch&&!n.Browser.android23}),n.Map.TouchZoom=n.Handler.extend({addHooks:function(){n.DomEvent.on(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){n.DomEvent.off(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(e){var t=this._map;if(!e.touches||e.touches.length!==2||t._animatingZoom||this._zooming)return;var r=t.mouseEventToLayerPoint(e.touches[0]),i=t.mouseEventToLayerPoint(e.touches[1]),s=t._getCenterLayerPoint();this._startCenter=r.add(i).divideBy(2,!0),this._startDist=r.distanceTo(i),this._moved=!1,this._zooming=!0,this._centerOffset=s.subtract(this._startCenter),n.DomEvent.on(document,"touchmove",this._onTouchMove,this).on(document,"touchend",this._onTouchEnd,this),n.DomEvent.preventDefault(e)},_onTouchMove:function(e){if(!e.touches||e.touches.length!==2)return;var t=this._map,r=t.mouseEventToLayerPoint(e.touches[0]),i=t.mouseEventToLayerPoint(e.touches[1]);this._scale=r.distanceTo(i)/this._startDist,this._delta=r.add(i).divideBy(2,!0).subtract(this._startCenter);if(this._scale===1)return;this._moved||(n.DomUtil.addClass(t._mapPane,"leaflet-zoom-anim leaflet-touching"),t.fire("movestart").fire("zoomstart")._prepareTileBg(),this._moved=!0),n.Util.cancelAnimFrame(this._animRequest),this._animRequest=n.Util.requestAnimFrame(this._updateOnMove,this,!0,this._map._container),n.DomEvent.preventDefault(e)},_updateOnMove:function(){var e=this._map,t=this._getScaleOrigin(),r=e.layerPointToLatLng(t);e.fire("zoomanim",{center:r,zoom:e.getScaleZoom(this._scale)}),e._tileBg.style[n.DomUtil.TRANSFORM]=n.DomUtil.getTranslateString(this._delta)+" "+n.DomUtil.getScaleString(this._scale,this._startCenter)},_onTouchEnd:function(e){if(!this._moved||!this._zooming)return;var t=this._map;this._zooming=!1,n.DomUtil.removeClass(t._mapPane,"leaflet-touching"),n.DomEvent.off(document,"touchmove",this._onTouchMove).off(document,"touchend",this._onTouchEnd);var r=this._getScaleOrigin(),i=t.layerPointToLatLng(r),s=t.getZoom(),o=t.getScaleZoom(this._scale)-s,u=o>0?Math.ceil(o):Math.floor(o),a=t._limitZoom(s+u);t.fire("zoomanim",{center:i,zoom:a}),t._runAnimation(i,a,t.getZoomScale(a)/this._scale,r,!0)},_getScaleOrigin:function(){var e=this._centerOffset.subtract(this._delta).divideBy(this._scale);return this._startCenter.add(e)}}),n.Map.addInitHook("addHandler","touchZoom",n.Map.TouchZoom),n.Map.mergeOptions({boxZoom:!0}),n.Map.BoxZoom=n.Handler.extend({initialize:function(e){this._map=e,this._container=e._container,this._pane=e._panes.overlayPane},addHooks:function(){n.DomEvent.on(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){n.DomEvent.off(this._container,"mousedown",this._onMouseDown)},_onMouseDown:function(e){if(!e.shiftKey||e.which!==1&&e.button!==1)return!1;n.DomUtil.disableTextSelection(),this._startLayerPoint=this._map.mouseEventToLayerPoint(e),this._box=n.DomUtil.create("div","leaflet-zoom-box",this._pane),n.DomUtil.setPosition(this._box,this._startLayerPoint),this._container.style.cursor="crosshair",n.DomEvent.on(document,"mousemove",this._onMouseMove,this).on(document,"mouseup",this._onMouseUp,this).preventDefault(e),this._map.fire("boxzoomstart")},_onMouseMove:function(e){var t=this._startLayerPoint,r=this._box,i=this._map.mouseEventToLayerPoint(e),s=i.subtract(t),o=new n.Point(Math.min(i.x,t.x),Math.min(i.y,t.y));n.DomUtil.setPosition(r,o),r.style.width=Math.abs(s.x)-4+"px",r.style.height=Math.abs(s.y)-4+"px"},_onMouseUp:function(e){this._pane.removeChild(this._box),this._container.style.cursor="",n.DomUtil.enableTextSelection(),n.DomEvent.off(document,"mousemove",this._onMouseMove).off(document,"mouseup",this._onMouseUp);var t=this._map,r=t.mouseEventToLayerPoint(e),i=new n.LatLngBounds(t.layerPointToLatLng(this._startLayerPoint),t.layerPointToLatLng(r));t.fitBounds(i),t.fire("boxzoomend",{boxZoomBounds:i})}}),n.Map.addInitHook("addHandler","boxZoom",n.Map.BoxZoom),n.Map.mergeOptions({keyboard:!0,keyboardPanOffset:80,keyboardZoomOffset:1}),n.Map.Keyboard=n.Handler.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61],zoomOut:[189,109]},initialize:function(e){this._map=e,this._setPanOffset(e.options.keyboardPanOffset),this._setZoomOffset(e.options.keyboardZoomOffset)},addHooks:function(){var e=this._map._container;e.tabIndex===-1&&(e.tabIndex="0"),n.DomEvent.addListener(e,"focus",this._onFocus,this).addListener(e,"blur",this._onBlur,this).addListener(e,"mousedown",this._onMouseDown,this),this._map.on("focus",this._addHooks,this).on("blur",this._removeHooks,this)},removeHooks:function(){this._removeHooks();var e=this._map._container;n.DomEvent.removeListener(e,"focus",this._onFocus,this).removeListener(e,"blur",this._onBlur,this).removeListener(e,"mousedown",this._onMouseDown,this),this._map.off("focus",this._addHooks,this).off("blur",this._removeHooks,this)},_onMouseDown:function(){this._focused||this._map._container.focus()},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanOffset:function(e){var t=this._panKeys={},n=this.keyCodes,r,i;for(r=0,i=n.left.length;r<i;r++)t[n.left[r]]=[-1*e,0];for(r=0,i=n.right.length;r<i;r++)t[n.right[r]]=[e,0];for(r=0,i=n.down.length;r<i;r++)t[n.down[r]]=[0,e];for(r=0,i=n.up.length;r<i;r++)t[n.up[r]]=[0,-1*e]},_setZoomOffset:function(e){var t=this._zoomKeys={},n=this.keyCodes,r,i;for(r=0,i=n.zoomIn.length;r<i;r++)t[n.zoomIn[r]]=e;for(r=0,i=n.zoomOut.length;r<i;r++)t[n.zoomOut[r]]=-e},_addHooks:function(){n.DomEvent.addListener(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){n.DomEvent.removeListener(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(e){var t=e.keyCode;if(this._panKeys.hasOwnProperty(t))this._map.panBy(this._panKeys[t]);else{if(!this._zoomKeys.hasOwnProperty(t))return;this._map.setZoom(this._map.getZoom()+this._zoomKeys[t])}n.DomEvent.stop(e)}}),n.Map.addInitHook("addHandler","keyboard",n.Map.Keyboard),n.Handler.MarkerDrag=n.Handler.extend({initialize:function(e){this._marker=e},addHooks:function(){var e=this._marker._icon;this._draggable||(this._draggable=(new n.Draggable(e,e)).on("dragstart",this._onDragStart,this).on("drag",this._onDrag,this).on("dragend",this._onDragEnd,this)),this._draggable.enable()},removeHooks:function(){this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(e){this._marker.closePopup().fire("movestart").fire("dragstart")},_onDrag:function(e){var t=n.DomUtil.getPosition(this._marker._icon);this._marker._shadow&&n.DomUtil.setPosition(this._marker._shadow,t),this._marker._latlng=this._marker._map.layerPointToLatLng(t),this._marker.fire("move").fire("drag")},_onDragEnd:function(){this._marker.fire("moveend").fire("dragend")}}),n.Handler.PolyEdit=n.Handler.extend({options:{icon:new n.DivIcon({iconSize:new n.Point(8,8),className:"leaflet-div-icon leaflet-editing-icon"})},initialize:function(e,t){this._poly=e,n.Util.setOptions(this,t)},addHooks:function(){this._poly._map&&(this._markerGroup||this._initMarkers(),this._poly._map.addLayer(this._markerGroup))},removeHooks:function(){this._poly._map&&(this._poly._map.removeLayer(this._markerGroup),delete this._markerGroup,delete this._markers)},updateMarkers:function(){this._markerGroup.clearLayers(),this._initMarkers()},_initMarkers:function(){this._markerGroup||(this._markerGroup=new n.LayerGroup),this._markers=[];var e=this._poly._latlngs,t,r,i,s;for(t=0,i=e.length;t<i;t++)s=this._createMarker(e[t],t),s.on("click",this._onMarkerClick,this),this._markers.push(s);var o,u;for(t=0,r=i-1;t<i;r=t++){if(t===0&&!(n.Polygon&&this._poly instanceof n.Polygon))continue;o=this._markers[r],u=this._markers[t],this._createMiddleMarker(o,u),this._updatePrevNext(o,u)}},_createMarker:function(e,t){var r=new n.Marker(e,{draggable:!0,icon:this.options.icon});return r._origLatLng=e,r._index=t,r.on("drag",this._onMarkerDrag,this),r.on("dragend",this._fireEdit,this),this._markerGroup.addLayer(r),r},_fireEdit:function(){this._poly.fire("edit")},_onMarkerDrag:function(e){var t=e.target;n.Util.extend(t._origLatLng,t._latlng),t._middleLeft&&t._middleLeft.setLatLng(this._getMiddleLatLng(t._prev,t)),t._middleRight&&t._middleRight.setLatLng(this._getMiddleLatLng(t,t._next)),this._poly.redraw()},_onMarkerClick:function(e){if(this._poly._latlngs.length<3)return;var t=e.target,n=t._index;t._prev&&t._next&&(this._createMiddleMarker(t._prev,t._next),this._updatePrevNext(t._prev,t._next)),this._markerGroup.removeLayer(t),t._middleLeft&&this._markerGroup.removeLayer(t._middleLeft),t._middleRight&&this._markerGroup.removeLayer(t._middleRight),this._markers.splice(n,1),this._poly.spliceLatLngs(n,1),this._updateIndexes(n,-1),this._poly.fire("edit")},_updateIndexes:function(e,t){this._markerGroup.eachLayer(function(n){n._index>e&&(n._index+=t)})},_createMiddleMarker:function(e,t){var n=this._getMiddleLatLng(e,t),r=this._createMarker(n),i,s,o;r.setOpacity(.6),e._middleRight=t._middleLeft=r,s=function(){var s=t._index;r._index=s,r.off("click",i).on("click",this._onMarkerClick,this),n.lat=r.getLatLng().lat,n.lng=r.getLatLng().lng,this._poly.spliceLatLngs(s,0,n),this._markers.splice(s,0,r),r.setOpacity(1),this._updateIndexes(s,1),t._index++,this._updatePrevNext(e,r),this._updatePrevNext(r,t)},o=function(){r.off("dragstart",s,this),r.off("dragend",o,this),this._createMiddleMarker(e,r),this._createMiddleMarker(r,t)},i=function(){s.call(this),o.call(this),this._poly.fire("edit")},r.on("click",i,this).on("dragstart",s,this).on("dragend",o,this),this._markerGroup.addLayer(r)},_updatePrevNext:function(e,t){e._next=t,t._prev=e},_getMiddleLatLng:function(e,t){var n=this._poly._map,r=n.latLngToLayerPoint(e.getLatLng()),i=n.latLngToLayerPoint(t.getLatLng());return n.layerPointToLatLng(r._add(i).divideBy(2))}}),n.Control=n.Class.extend({options:{position:"topright"},initialize:function(e){n.Util.setOptions(this,e)},getPosition:function(){return this.options.position},setPosition:function(e){var t=this._map;return t&&t.removeControl(this),this.options.position=e,t&&t.addControl(this),this},addTo:function(e){this._map=e;var t=this._container=this.onAdd(e),r=this.getPosition(),i=e._controlCorners[r];return n.DomUtil.addClass(t,"leaflet-control"),r.indexOf("bottom")!==-1?i.insertBefore(t,i.firstChild):i.appendChild(t),this},removeFrom:function(e){var t=this.getPosition(),n=e._controlCorners[t];return n.removeChild(this._container),this._map=null,this.onRemove&&this.onRemove(e),this}}),n.control=function(e){return new n.Control(e)},n.Map.include({addControl:function(e){return e.addTo(this),this},removeControl:function(e){return e.removeFrom(this),this},_initControlPos:function(){function i(i,s){var o=t+i+" "+t+s;e[i+s]=n.DomUtil.create("div",o,r)}var e=this._controlCorners={},t="leaflet-",r=this._controlContainer=n.DomUtil.create("div",t+"control-container",this._container);i("top","left"),i("top","right"),i("bottom","left"),i("bottom","right")}}),n.Control.Zoom=n.Control.extend({options:{position:"topleft"},onAdd:function(e){var t="leaflet-control-zoom",r=n.DomUtil.create("div",t);return this._createButton("Zoom in",t+"-in",r,e.zoomIn,e),this._createButton("Zoom out",t+"-out",r,e.zoomOut,e),r},_createButton:function(e,t,r,i,s){var o=n.DomUtil.create("a",t,r);return o.href="#",o.title=e,n.DomEvent.on(o,"click",n.DomEvent.stopPropagation).on(o,"click",n.DomEvent.preventDefault).on(o,"click",i,s).on(o,"dblclick",n.DomEvent.stopPropagation),o}}),n.Map.mergeOptions({zoomControl:!0}),n.Map.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new n.Control.Zoom,this.addControl(this.zoomControl))}),n.control.zoom=function(e){return new n.Control.Zoom(e)},n.Control.Attribution=n.Control.extend({options:{position:"bottomright",prefix:'Powered by <a href="http://leaflet.cloudmade.com">Leaflet</a>'},initialize:function(e){n.Util.setOptions(this,e),this._attributions={}},onAdd:function(e){return this._container=n.DomUtil.create("div","leaflet-control-attribution"),n.DomEvent.disableClickPropagation(this._container),e.on("layeradd",this._onLayerAdd,this).on("layerremove",this._onLayerRemove,this),this._update(),this._container},onRemove:function(e){e.off("layeradd",this._onLayerAdd).off("layerremove",this._onLayerRemove)},setPrefix:function(e){return this.options.prefix=e,this._update(),this},addAttribution:function(e){if(!e)return;return this._attributions[e]||(this._attributions[e]=0),this._attributions[e]++,this._update(),this},removeAttribution:function(e){if(!e)return;return this._attributions[e]--,this._update(),this},_update:function(){if(!this._map)return;var e=[];for(var t in this._attributions)this._attributions.hasOwnProperty(t)&&this._attributions[t]&&e.push(t);var n=[];this.options.prefix&&n.push(this.options.prefix),e.length&&n.push(e.join(", ")),this._container.innerHTML=n.join(" &#8212; ")},_onLayerAdd:function(e){e.layer.getAttribution&&this.addAttribution(e.layer.getAttribution())},_onLayerRemove:function(e){e.layer.getAttribution&&this.removeAttribution(e.layer.getAttribution())}}),n.Map.mergeOptions({attributionControl:!0}),n.Map.addInitHook(function(){this.options.attributionControl&&(this.attributionControl=(new n.Control.Attribution).addTo(this))}),n.control.attribution=function(e){return new n.Control.Attribution(e)},n.Control.Scale=n.Control.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0,updateWhenIdle:!1},onAdd:function(e){this._map=e;var t="leaflet-control-scale",r=n.DomUtil.create("div",t),i=this.options;return this._addScales(i,t,r),e.on(i.updateWhenIdle?"moveend":"move",this._update,this),this._update(),r},onRemove:function(e){e.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(e,t,r){e.metric&&(this._mScale=n.DomUtil.create("div",t+"-line",r)),e.imperial&&(this._iScale=n.DomUtil.create("div",t+"-line",r))},_update:function(){var e=this._map.getBounds(),t=e.getCenter().lat,n=6378137*Math.PI*Math.cos(t*Math.PI/180),r=n*(e.getNorthEast().lng-e.getSouthWest().lng)/180,i=this._map.getSize(),s=this.options,o=0;i.x>0&&(o=r*(s.maxWidth/i.x)),this._updateScales(s,o)},_updateScales:function(e,t){e.metric&&t&&this._updateMetric(t),e.imperial&&t&&this._updateImperial(t)},_updateMetric:function(e){var t=this._getRoundNum(e);this._mScale.style.width=this._getScaleWidth(t/e)+"px",this._mScale.innerHTML=t<1e3?t+" m":t/1e3+" km"},_updateImperial:function(e){var t=e*3.2808399,n=this._iScale,r,i,s;t>5280?(r=t/5280,i=this._getRoundNum(r),n.style.width=this._getScaleWidth(i/r)+"px",n.innerHTML=i+" mi"):(s=this._getRoundNum(t),n.style.width=this._getScaleWidth(s/t)+"px",n.innerHTML=s+" ft")},_getScaleWidth:function(e){return Math.round(this.options.maxWidth*e)-10},_getRoundNum:function(e){var t=Math.pow(10,(Math.floor(e)+"").length-1),n=e/t;return n=n>=10?10:n>=5?5:n>=3?3:n>=2?2:1,t*n}}),n.control.scale=function(e){return new n.Control.Scale(e)},n.Control.Layers=n.Control.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0},initialize:function(e,t,r){n.Util.setOptions(this,r),this._layers={},this._lastZIndex=0;for(var i in e)e.hasOwnProperty(i)&&this._addLayer(e[i],i);for(i in t)t.hasOwnProperty(i)&&this._addLayer(t[i],i,!0)},onAdd:function(e){return this._initLayout(),this._update(),this._container},addBaseLayer:function(e,t){return this._addLayer(e,t),this._update(),this},addOverlay:function(e,t){return this._addLayer(e,t,!0),this._update(),this},removeLayer:function(e){var t=n.Util.stamp(e);return delete this._layers[t],this._update(),this},_initLayout:function(){var e="leaflet-control-layers",t=this._container=n.DomUtil.create("div",e);n.Browser.touch?n.DomEvent.on(t,"click",n.DomEvent.stopPropagation):n.DomEvent.disableClickPropagation(t);var r=this._form=n.DomUtil.create("form",e+"-list");if(this.options.collapsed){n.DomEvent.on(t,"mouseover",this._expand,this).on(t,"mouseout",this._collapse,this);var i=this._layersLink=n.DomUtil.create("a",e+"-toggle",t);i.href="#",i.title="Layers",n.Browser.touch?n.DomEvent.on(i,"click",n.DomEvent.stopPropagation).on(i,"click",n.DomEvent.preventDefault).on(i,"click",this._expand,this):n.DomEvent.on(i,"focus",this._expand,this),this._map.on("movestart",this._collapse,this)}else this._expand();this._baseLayersList=n.DomUtil.create("div",e+"-base",r),this._separator=n.DomUtil.create("div",e+"-separator",r),this._overlaysList=n.DomUtil.create("div",e+"-overlays",r),t.appendChild(r)},_addLayer:function(e,t,r){var i=n.Util.stamp(e);this._layers[i]={layer:e,name:t,overlay:r},this.options.autoZIndex&&e.setZIndex&&(this._lastZIndex++,e.setZIndex(this._lastZIndex))},_update:function(){if(!this._container)return;this._baseLayersList.innerHTML="",this._overlaysList.innerHTML="";var e=!1,t=!1;for(var n in this._layers)if(this._layers.hasOwnProperty(n)){var r=this._layers[n];this._addItem(r),t=t||r.overlay,e=e||!r.overlay}this._separator.style.display=t&&e?"":"none"},_createRadioElement:function(e,t){var n='<input type="radio" name="'+e+'"';t&&(n+=' checked="checked"'),n+="/>";var r=document.createElement("div");return r.innerHTML=n,r.firstChild},_addItem:function(e){var t=document.createElement("label"),r,i=this._map.hasLayer(e.layer);e.overlay?(r=document.createElement("input"),r.type="checkbox",r.defaultChecked=i):r=this._createRadioElement("leaflet-base-layers",i),r.layerId=n.Util.stamp(e.layer),n.DomEvent.on(r,"click",this._onInputClick,this);var s=document.createTextNode(" "+e.name);t.appendChild(r),t.appendChild(s);var o=e.overlay?this._overlaysList:this._baseLayersList;o.appendChild(t)},_onInputClick:function(){var e,t,n,r=this._form.getElementsByTagName("input"),i=r.length;for(e=0;e<i;e++)t=r[e],n=this._layers[t.layerId],t.checked?this._map.addLayer(n.layer,!n.overlay):this._map.removeLayer(n.layer)},_expand:function(){n.DomUtil.addClass(this._container,"leaflet-control-layers-expanded")},_collapse:function(){this._container.className=this._container.className.replace(" leaflet-control-layers-expanded","")}}),n.control.layers=function(e,t,r){return new n.Control.Layers(e,t,r)},n.Transition=n.Class.extend({includes:n.Mixin.Events,statics:{CUSTOM_PROPS_SETTERS:{position:n.DomUtil.setPosition},implemented:function(){return n.Transition.NATIVE||n.Transition.TIMER}},options:{easing:"ease",duration:.5},_setProperty:function(e,t){var r=n.Transition.CUSTOM_PROPS_SETTERS;e in r?r[e](this._el,t):this._el.style[e]=t}}),n.Transition=n.Transition.extend({statics:function(){var e=n.DomUtil.TRANSITION,t=e==="webkitTransition"||e==="OTransition"?e+"End":"transitionend";return{NATIVE:!!e,TRANSITION:e,PROPERTY:e+"Property",DURATION:e+"Duration",EASING:e+"TimingFunction",END:t,CUSTOM_PROPS_PROPERTIES:{position:n.Browser.any3d?n.DomUtil.TRANSFORM:"top, left"}}}(),options:{fakeStepInterval:100},initialize:function(e,t){this._el=e,n.Util.setOptions(this,t),n.DomEvent.on(e,n.Transition.END,this._onTransitionEnd,this),this._onFakeStep=n.Util.bind(this._onFakeStep,this)},run:function(e){var t,r=[],i=n.Transition.CUSTOM_PROPS_PROPERTIES;for(t in e)e.hasOwnProperty(t)&&(t=i[t]?i[t]:t,t=this._dasherize(t),r.push(t));this._el.style[n.Transition.DURATION]=this.options.duration+"s",this._el.style[n.Transition.EASING]=this.options.easing,this._el.style[n.Transition.PROPERTY]="all";for(t in e)e.hasOwnProperty(t)&&this._setProperty(t,e[t]);n.Util.falseFn(this._el.offsetWidth),this._inProgress=!0,n.Browser.mobileWebkit&&(this.backupEventFire=setTimeout(n.Util.bind(this._onBackupFireEnd,this),this.options.duration*1.2*1e3)),n.Transition.NATIVE?(clearInterval(this._timer),this._timer=setInterval(this._onFakeStep,this.options.fakeStepInterval)):this._onTransitionEnd()},_dasherize:function(){function t(e){return"-"+e.toLowerCase()}var e=/([A-Z])/g;return function(n){return n.replace(e,t)}}(),_onFakeStep:function(){this.fire("step")},_onTransitionEnd:function(e){this._inProgress&&(this._inProgress=!1,clearInterval(this._timer),this._el.style[n.Transition.TRANSITION]="",clearTimeout(this.backupEventFire),delete this.backupEventFire,this.fire("step"),e&&e.type&&this.fire("end"))},_onBackupFireEnd:function(){var e=document.createEvent("Event");e.initEvent(n.Transition.END,!0,!1),this._el.dispatchEvent(e)}}),n.Transition=n.Transition.NATIVE?n.Transition:n.Transition.extend({statics:{getTime:Date.now||function(){return+(new Date)},TIMER:!0,EASINGS:{linear:function(e){return e},"ease-out":function(e){return e*(2-e)}},CUSTOM_PROPS_GETTERS:{position:n.DomUtil.getPosition},UNIT_RE:/^[\d\.]+(\D*)$/},options:{fps:50},initialize:function(e,t){this._el=e,n.Util.extend(this.options,t),this._easing=n.Transition.EASINGS[this.options.easing]||n.Transition.EASINGS["ease-out"],this._step=n.Util.bind(this._step,this),this._interval=Math.round(1e3/this.options.fps)},run:function(e){this._props={};var t=n.Transition.CUSTOM_PROPS_GETTERS,r=n.Transition.UNIT_RE;this.fire("start");for(var i in e)if(e.hasOwnProperty(i)){var s={};if(i in t)s.from=t[i](this._el);else{var o=this._el.style[i].match(r);s.from=parseFloat(o[0]),s.unit=o[1]}s.to=e[i],this._props[i]=s}clearInterval(this._timer),this._timer=setInterval(this._step,this._interval),this._startTime=n.Transition.getTime()},_step:function(){var e=n.Transition.getTime(),t=e-this._startTime,r=this.options.duration*1e3;t<r?this._runFrame(this._easing(t/r)):(this._runFrame(1),this._complete())},_runFrame:function(e){var t=n.Transition.CUSTOM_PROPS_SETTERS,r,i,s;for(r in this._props)this._props.hasOwnProperty(r)&&(i=this._props[r],r in t?(s=i.to.subtract(i.from).multiplyBy(e).add(i.from),t[r](this._el,s)):this._el.style[r]=(i.to-i.from)*e+i.from+i.unit);this.fire("step")},_complete:function(){clearInterval(this._timer),this.fire("end")}}),n.Map.include(!n.Transition||!n.Transition.implemented()?{}:{setView:function(e,t,n){t=this._limitZoom(t);var r=this._zoom!==t;if(this._loaded&&!n&&this._layers){var i=r?this._zoomToIfClose&&this._zoomToIfClose(e,t):this._panByIfClose(e);if(i)return clearTimeout(this._sizeTimer),this}return this._resetView(e,t),this},panBy:function(e,t){return e=n.point(e),!e.x&&!e.y?this:(this._panTransition||(this._panTransition=new n.Transition(this._mapPane),this._panTransition.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),n.Util.setOptions(this._panTransition,n.Util.extend({duration:.25},t)),this.fire("movestart"),n.DomUtil.addClass(this._mapPane,"leaflet-pan-anim"),this._panTransition.run({position:n.DomUtil.getPosition(this._mapPane).subtract(e)}),this)},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){n.DomUtil.removeClass(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_panByIfClose:function(e){var t=this._getCenterOffset(e)._floor();return this._offsetIsWithinView(t)?(this.panBy(t),!0):!1},_offsetIsWithinView:function(e,t){var n=t||1,r=this.getSize();return Math.abs(e.x)<=r.x*n&&Math.abs(e.y)<=r.y*n}}),n.Map.mergeOptions({zoomAnimation:n.DomUtil.TRANSITION&&!n.Browser.android23&&!n.Browser.mobileOpera}),n.DomUtil.TRANSITION&&n.Map.addInitHook(function(){n.DomEvent.on(this._mapPane,n.Transition.END,this._catchTransitionEnd,this)}),n.Map.include(n.DomUtil.TRANSITION?{_zoomToIfClose:function(e,t){if(this._animatingZoom)return!0;if(!this.options.zoomAnimation)return!1;var r=this.getZoomScale(t),i=this._getCenterOffset(e).divideBy(1-1/r);if(!this._offsetIsWithinView(i,1))return!1;n.DomUtil.addClass(this._mapPane,"leaflet-zoom-anim"),this.fire("movestart").fire("zoomstart"),this.fire("zoomanim",{center:e,zoom:t});var s=this._getCenterLayerPoint().add(i);return this._prepareTileBg(),this._runAnimation(e,t,r,s),!0},_catchTransitionEnd:function(e){this._animatingZoom&&this._onZoomTransitionEnd()},_runAnimation:function(e,t,r,i,s){this._animateToCenter=e,this._animateToZoom=t,this._animatingZoom=!0;var o=n.DomUtil.TRANSFORM,u=this._tileBg;clearTimeout(this._clearTileBgTimer),n.Util.falseFn(u.offsetWidth);var a=n.DomUtil.getScaleString(r,i),f=u.style[o];u.style[o]=s?f+" "+a:a+" "+f},_prepareTileBg:function(){var e=this._tilePane,t=this._tileBg;if(t&&this._getLoadedTilesPercentage(t)>.5&&this._getLoadedTilesPercentage(e)<.5){e.style.visibility="hidden",e.empty=!0,this._stopLoadingImages(e);return}t||(t=this._tileBg=this._createPane("leaflet-tile-pane",this._mapPane),t.style.zIndex=1),t.style[n.DomUtil.TRANSFORM]="",t.style.visibility="hidden",t.empty=!0,e.empty=!1,this._tilePane=this._panes.tilePane=t;var r=this._tileBg=e;n.DomUtil.addClass(r,"leaflet-zoom-animated"),this._stopLoadingImages(r)},_getLoadedTilesPercentage:function(e){var t=e.getElementsByTagName("img"),n,r,i=0;for(n=0,r=t.length;n<r;n++)t[n].complete&&i++;return i/r},_stopLoadingImages:function(e){var t=Array.prototype.slice.call(e.getElementsByTagName("img")),r,i,s;for(r=0,i=t.length;r<i;r++)s=t[r],s.complete||(s.onload=n.Util.falseFn,s.onerror=n.Util.falseFn,s.src=n.Util.emptyImageUrl,s.parentNode.removeChild(s))},_onZoomTransitionEnd:function(){this._restoreTileFront(),n.Util.falseFn(this._tileBg.offsetWidth),this._resetView(this._animateToCenter,this._animateToZoom,!0,!0),n.DomUtil.removeClass(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1},_restoreTileFront:function(){this._tilePane.innerHTML="",this._tilePane.style.visibility="",this._tilePane.style.zIndex=2,this._tileBg.style.zIndex=1},_clearTileBg:function(){!this._animatingZoom&&!this.touchZoom._zooming&&(this._tileBg.innerHTML="")}}:{}),n.Map.include({_defaultLocateOptions:{watch:!1,setView:!1,maxZoom:Infinity,timeout:1e4,maximumAge:0,enableHighAccuracy:!1},locate:function(e){e=this._locationOptions=n.Util.extend(this._defaultLocateOptions,e);if(!navigator.geolocation)return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var t=n.Util.bind(this._handleGeolocationResponse,this),r=n.Util.bind(this._handleGeolocationError,this);return e.watch?this._locationWatchId=navigator.geolocation.watchPosition(t,r,e):navigator.geolocation.getCurrentPosition(t,r,e),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch(this._locationWatchId),this},_handleGeolocationError:function(e){var t=e.code,n=e.message||(t===1?"permission denied":t===2?"position unavailable":"timeout");this._locationOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:t,message:"Geolocation error: "+n+"."})},_handleGeolocationResponse:function(e){var t=180*e.coords.accuracy/4e7,r=t*2,i=e.coords.latitude,s=e.coords.longitude,o=new n.LatLng(i,s),u=new n.LatLng(i-t,s-r),a=new n.LatLng(i+t,s+r),f=new n.LatLngBounds(u,a),l=this._locationOptions;if(l.setView){var c=Math.min(this.getBoundsZoom(f),l.maxZoom);this.setView(o,c)}this.fire("locationfound",{latlng:o,bounds:f,accuracy:e.coords.accuracy})}})})(this);


  /*
  This is a Leaflet plugin, TODO need to make this auto-build prior to the RequireJS compilation phase.
  Source: https://github.com/shramov/leaflet-plugins
  */
  L.BingLayer = L.TileLayer.extend({
  options: {
    subdomains: [0, 1, 2, 3],
    type: 'Aerial',
    attribution: 'Bing',
    culture: ''
  },

  initialize: function(key, options) {
    L.Util.setOptions(this, options);

    this._key = key;
    this._url = null;
    this.meta = {};
    this.loadMetadata();
  },

  tile2quad: function(x, y, z) {
    var quad = '';
    for (var i = z; i > 0; i--) {
      var digit = 0;
      var mask = 1 << (i - 1);
      if ((x & mask) != 0) digit += 1;
      if ((y & mask) != 0) digit += 2;
      quad = quad + digit;
    }
    return quad;
  },

  getTileUrl: function(p, z) {
    var z = this._getZoomForUrl();
    var subdomains = this.options.subdomains,
      s = this.options.subdomains[Math.abs((p.x + p.y) % subdomains.length)];
    return this._url.replace('{subdomain}', s)
        .replace('{quadkey}', this.tile2quad(p.x, p.y, z))
        .replace('{culture}', this.options.culture);
  },

  loadMetadata: function() {
    var _this = this;
    var cbid = '_bing_metadata_' + L.Util.stamp(this);
    window[cbid] = function (meta) {
      _this.meta = meta;
      window[cbid] = undefined;
      var e = document.getElementById(cbid);
      e.parentNode.removeChild(e);
      if (meta.errorDetails) {
        alert("Got metadata" + meta.errorDetails);
        return;
      }
      _this.initMetadata();
    };
    var url = "http://dev.virtualearth.net/REST/v1/Imagery/Metadata/" + this.options.type + "?include=ImageryProviders&jsonp=" + cbid + "&key=" + this._key;
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.id = cbid;
    document.getElementsByTagName("head")[0].appendChild(script);
  },

  initMetadata: function() {
    var r = this.meta.resourceSets[0].resources[0];
    this.options.subdomains = r.imageUrlSubdomains;
    this._url = r.imageUrl;
    this._providers = [];
    for (var i = 0; i < r.imageryProviders.length; i++) {
      var p = r.imageryProviders[i];
      for (var j = 0; j < p.coverageAreas.length; j++) {
        var c = p.coverageAreas[j];
        var coverage = {zoomMin: c.zoomMin, zoomMax: c.zoomMax, active: false};
        var bounds = new L.LatLngBounds(
            new L.LatLng(c.bbox[0]+0.01, c.bbox[1]+0.01),
            new L.LatLng(c.bbox[2]-0.01, c.bbox[3]-0.01)
        );
        coverage.bounds = bounds;
        coverage.attrib = p.attribution;
        this._providers.push(coverage);
      }
    }
    this._update();
  },

  _update: function() {
    if (this._url == null || !this._map) return;
    this._update_attribution();
    L.TileLayer.prototype._update.apply(this, []);
  },

  _update_attribution: function() {
    var bounds = this._map.getBounds();
    var zoom = this._map.getZoom();
    for (var i = 0; i < this._providers.length; i++) {
      var p = this._providers[i];
      if ((zoom <= p.zoomMax && zoom >= p.zoomMin) &&
          bounds.intersects(p.bounds)) {
        if (!p.active)
          this._map.attributionControl.addAttribution(p.attrib);
        p.active = true;
      } else {
        if (p.active)
          this._map.attributionControl.removeAttribution(p.attrib);
        p.active = false;
      }
    }
  },

  onRemove: function(map) {
    for (var i = 0; i < this._providers.length; i++) {
      var p = this._providers[i];
      if (p.active) {
        this._map.attributionControl.removeAttribution(p.attrib);
        p.active = false;
      }
    }
    L.TileLayer.prototype.onRemove.apply(this, [map]);
  }
});   

/*
This is needed to identify the correct path to find images for Leaflet.
*/
L.Icon.Default.imagePath = '../stylesheets/images/';

define("leaflet", (function (global) {
    return function () {
        var ret, fn;
        return ret || global.L;
    };
}(this)));

define('Views/Widgets/Map',['backbone', 'leaflet'], function(Backbone, L) {
  
  var MapWidget = Backbone.View.extend({
    
    el: '#mapWidget',
    className: 'widget',
    hasRendered: false,
    map: undefined, // will be Leaflet map object

    initialize: function() {

      _.bindAll(this);
      this.model.on('change:lat change:lon', this.render);
      this.model.on('change:alt', this.render);
      this.breadcrumb = [];
    },

    render: function() {
      lat = this.model.get('lat') || 64.88317;
      lon = this.model.get('lon') || -147.6137;
      console.log(this.model.toJSON());
      
      if( false === this.hasRendered ) {
        // Do initial map setup
        this.renderLayout();
        this.hasRendered = true;
      }

      var LatLng = new L.LatLng(lat, lon);

      var m = new L.CircleMarker(LatLng).setRadius(10);
      this.breadcrumb.unshift(m);
      
      if(this.breadcrumb.length>50){
        this.breadcrumb[1].addTo(this.map);
        this.map.removeLayer(this.breadcrumb.pop());
        _.each(this.breadcrumb, function(e, i, l) {
          e.setStyle({
            fillOpacity: 1/ (i + 1),
            opacity: 2 * (1/ (1 + i))
          });
        }, this);
      }

      this.map.panTo( LatLng );
      
      this.marker.setLatLng( LatLng );

      
    },

    renderLayout: function() {

      // create a map in the "map" div, set the view to a given place and zoom
      this.map = L.map('mapWidget', {
        minZoom: 1,
        maxZoom: 22
      }).setView([64.9, -147.1], 16);

      this.myIcon = L.icon({
          iconUrl: 'images/jet.svg',
          iconSize: [25, 50],
          iconAnchor: [12, 25],
          popupAnchor: [-3, -76]
      });

      this.marker = L.marker([64.9, -147.1], {icon: this.myIcon}).addTo(this.map);

      var bing = new L.BingLayer("ArSmVTJNY8ZXaAjsxCHf989sG9OqZW3Qf0t1SAdM43Rn9pZpFyWU1jfYv_FFQlLO", {
        zIndex: 0
      });
      this.map.addLayer(bing);
      this.map.on('click', function(e) {
        alert(e.latlng);
      });

    }
  });
  return MapWidget;

});
define('Views/Widgets/Comms',['backbone', 'Templates'], function(Backbone, template) {
  
  var CommsWidget = Backbone.View.extend({
    
    el: '#commsWidget',
    className: 'widget',
    
    render: function() {

      this.$el.html(template['app/Templates/commsWidget.jade']());
    
    }
    
  });
  return CommsWidget;

});
define('Views/Widgets/Altitude',['backbone', 'Templates'], function(Backbone, template) {
  
  var AltitudeWidget = Backbone.View.extend({
    
    el: '#altitudeWidget',
    className: 'widget',

    initialize: function(){
      _.bindAll(this);
      this.model.on("change:alt", this.render, this);
    },
    render: function() {
      console.log("rendering alt");
      this.$el.html(template['app/Templates/altitudeWidget.jade']({alt: this.model.get('alt')}));
    }
    
  });
  return AltitudeWidget;

});
define('Views/Widgets/Gps',['backbone', 'Templates'], function(Backbone, template) {
  
  var GpsWidget = Backbone.View.extend({
    
    el: '#gpsWidget',
    className: 'widget',
    
    render: function() {

      this.$el.html(template['app/Templates/gpsWidget.jade']());
    
    }
    
  });
  return GpsWidget;

});
define('Views/Widgets/Health',['backbone', 'Templates'], function(Backbone, template) {
  
  var HealthWidget = Backbone.View.extend({
    
    el: '#healthWidget',
    className: 'widget',
    
    render: function() {

      this.$el.html(template['app/Templates/healthWidget.jade']());
    
    }
    
  });
  return HealthWidget;

});
define('Views/Widgets/State',['backbone', 'Templates'], function(Backbone, template) {
  
  var StateWidget = Backbone.View.extend({
    
    el: '#StateWidget',
    className: 'widget',
    
    render: function() {

      this.$el.html(template['app/Templates/stateWidget.jade']());
    
    }
    
  });
  return StateWidget;

});
define('Views/Widgets/Battery',['backbone', 'Templates'], function(Backbone, template) {
  
  var BatteryWidget = Backbone.View.extend({
    
    el: '#batteryWidget',
    className: 'widget',
    
    render: function() {

      this.$el.html(template['app/Templates/batteryWidget.jade']());
    
    }
    
  });
  return BatteryWidget;

});
define('Views/Mission',['backbone', 'Templates',

  // Models
  'Models/Mission',

  // Widgets (subviews)
  'Views/Widgets/Speed',
  'Views/Widgets/Map',
  'Views/Widgets/Comms',
  'Views/Widgets/Altitude',
  'Views/Widgets/Gps',
  'Views/Widgets/Health',
  'Views/Widgets/State',
  'Views/Widgets/Battery'

  ], function(Backbone, template,
    // Models
    Mission,

    // Widgets (subviews)
    SpeedWidget,
    MapWidget,
    CommsWidget,
    AltitudeWidget,
    GpsWidget,
    HealthWidget,
    StateWidget,
    BatteryWidget
  ) {
  
  var MissionView = Backbone.View.extend({

    model: Mission,
    el: '#missionView',
    hasRendered: false,

    initialize: function() {
      _.bindAll(this);
    },
    
    render: function() {
      
      if(false === this.hasRendered) { this.renderLayout(); }
      
    },

    // Meant to be run only once; renders scaffolding and subviews.
    renderLayout: function() {

      // Render scaffolding
      this.$el.html(template['app/Templates/missionLayout.jade']());
      
      // Instantiate subviews, now that their elements are present on the page
      this.speedWidget = new SpeedWidget({model: this.model.get('platform')});
      this.mapWidget = new MapWidget({model: this.model.get('platform')});
      this.altitudeWidget = new AltitudeWidget({model: this.model.get('platform')});

      // Render party
      this.speedWidget.render();
      this.mapWidget.render();
      this.altitudeWidget.render();

      this.model.get('platform').on('change', function(e) {
      });
    }

  });

  return MissionView;

});
define('router',[

  // Application + dependencies
  "app",
  "now",

  // Models
  "Models/Mission",
  "Models/Platform",

  // Dependent views
  "Views/Mission"
],

function(app, now,
  Mission,
  Platform,
  MissionView) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({

    routes: {
      "": "mission",
      "mission": "mission"
    },
    
    mission: function() {

      this.platform = new Platform();
      this.mission = new Mission({
        platform: this.platform
      });

      this.missionView = new MissionView({
        model: this.mission
      });

      this.missionView.render();

      var self = this; // preserve my context for some calls, below.

      // Handle message events as they are provided from the server
      // This won't scale =P
      now.ready(function(){
        
        now.heartbeat = function(message) {
          self.platform.set({
            type: message.type,
            autopilot: message.autopilot,
            base_mode: message.base_mode,
            custom_mode: message.custom_mode,
            system_status: message.system_status,
            mavlink_version: message.mavlink_version
          });
        };

        now.global_position_int = function(message) {
          self.platform.set({
            lat: message.lat/10000000,
            lon: message.lon/10000000,
            alt: message.alt/1000,
            relative_alt: message.relative_alt/1000,
            vx: message.vx/100,
            vy: message.vy/100,
            vz: message.vz/100,
            hdg: message.hdg/100
          });
        };

        now.sys_status = function(message) {
          self.platform.set({
            voltage_battery: message.voltage_battery,
            current_battery: message.current_battery,
            battery_remaining: message.battery_remaining,
            drop_rate_comm: message.drop_rate_comm,
            errors_comm: message.errors_comm
          });
        };

        now.attitude = function(message) {
          self.platform.set({
            pitch: message.pitch,
            roll: message.roll,
            yaw: message.yaw,
            pitchspeed: message.pitchspeed,
            rollspeed: message.rollspeed,
            yawspeed: message.yawspeed
          });
        };

        now.vfr_hud = function(message) {
          self.platform.set({
            airspeed: message.airspeed,
            groundspeed: message.groundspeed,
            heading: message.heading,
            throttle: message.throttle,
            climb: message.climb
          });
        };

        now.gps_raw_int = function(message) {
          self.platform.set({
            fix_type: message.fix_type,
            satellites_visible: message.satellites_visible
          });
        };

      });

    }

  });

  return Router;

});
require([
  // Application.
  "app",

  // Main Router.
  "router"
],

function(app, Router) {

  // Define your master router on the application namespace and trigger all
  // navigation from this instance.
  app.router = new Router();

  // Trigger the initial route and enable HTML5 History API support, set the
  // root folder to '/' by default.  Change in app.js.
  Backbone.history.start({ pushState: true, root: app.root });

  // All navigation that is relative should be passed through the navigate
  // method, to be processed by the router. If the link has a `data-bypass`
  // attribute, bypass the delegation completely.
  $(document).on("click", "a[href]:not([data-bypass])", function(evt) {
    // Get the absolute anchor href.
    var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
    // Get the absolute root.
    var root = location.protocol + "//" + location.host + app.root;

    // Ensure the root is part of the anchor href, meaning it's relative.
    if (href.prop.slice(0, root.length) === root) {
      // Stop the default event to ensure the link will not cause a page
      // refresh.
      evt.preventDefault();

      // `Backbone.history.navigate` is sufficient for all Routers and will
      // trigger the correct events. The Router's internal `navigate` method
      // calls this anyways.  The fragment is sliced from the root.
      Backbone.history.navigate(href.attr, true);
    }
  });

});

define("main", function(){});
