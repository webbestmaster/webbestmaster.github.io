!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){t(1),e.exports=t(2)},function(e,n,t){},function(e,n,t){"use strict";function r(e,n){if(e){if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,n):void 0}}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e){return""!==e.trim()}function a(e){return e.trim().replace(/\s+/g," ")}function l(e){if(0===e.length)return!0;var n,t,o=(t=e,1,function(e){if(Array.isArray(e))return e}(t)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(t.push(a.value),1!==t.length);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return t}}(t)||r(t,1)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],i=function(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=r(e))){t&&(e=t);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return l=e.done,e},e:function(e){c=!0,a=e},f:function(){try{l||null==t.return||t.return()}finally{if(c)throw a}}}}(e);try{for(i.s();!(n=i.n()).done;)if(n.value!==o)return!1}catch(e){i.e(e)}finally{i.f()}return!0}function c(e,n,t){var r=e.selector,o=function e(n,t,r){var o=t.indexOf(n);if(-1===o)return null;var i=o+r,a=i in t?t[i]:null;return a?""===a.trimmedLine?e(n,t,r+(r>=0?1:-1)):a:null}(e,n,t);return!o||o.selector!==r}t.r(n);var u=["# ","## ","### ","#### ","##### ","###### "],f=["> "],s=["---","***","___"],d=["|"],p=["```"],y=["+ ","- ","* "],h=[{selector:"0. ",regExpSearchSelector:/^\d+\.\s/,olAttributeType:"1"},{selector:"I. ",regExpSearchSelector:/^[CDILMVX]+\.\s/,olAttributeType:"I"},{selector:"i. ",regExpSearchSelector:/^[cdilmvx]+\.\s/,olAttributeType:"i"},{selector:"A. ",regExpSearchSelector:/^[A-Z]+\.\s/,olAttributeType:"A"},{selector:"a. ",regExpSearchSelector:/^[a-z]+\.\s/,olAttributeType:"a"}],v=[].concat(u,y,d,p,f).sort((function(e,n){return n.length-e.length})),b=[{selector:"***",openTag:"<b><i>",closeTag:"</i></b>",equal:/\*+/},{selector:"**",openTag:"<b>",closeTag:"</b>",equal:/\*+/},{selector:"__",openTag:"<u>",closeTag:"</u>",equal:/_+/},{selector:"_",openTag:"<i>",closeTag:"</i>",equal:/_+/},{selector:"*",openTag:"<i>",closeTag:"</i>",equal:/\*+/},{selector:"~~",openTag:"<strike>",closeTag:"</strike>",equal:/~+/},{selector:"~",openTag:"<sub>",closeTag:"</sub>",equal:/~+/},{selector:"^",openTag:"<sup>",closeTag:"</sup>",equal:/\^+/},{selector:"`",openTag:'<code data-type="inline">',closeTag:"</code>",equal:/`+/}];function m(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return g(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?g(e,void 0):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==t.return||t.return()}finally{if(l)throw i}}}}function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function S(e,n,t,r,o,i){var c=e.trim(),u=""===c,f=u?o[o.length-1].spaceCount:e.search(/\S/),y=f<0?0:f,b=u?{selector:"",lineContent:""}:function(e){var n,t=m(v);try{for(t.s();!(n=t.n()).done;){var r=n.value;if(e.startsWith(r))return{selector:r,lineContent:a(e.replace(r,""))}}}catch(e){t.e(e)}finally{t.f()}var o,i=m(s);try{for(i.s();!(o=i.n()).done;){var c=o.value;if(e.startsWith(c)&&l(e))return{selector:c,lineContent:""}}}catch(e){i.e(e)}finally{i.f()}var u,f=m(h);try{for(f.s();!(u=f.n()).done;){var d=u.value,p=d.selector,y=d.regExpSearchSelector;if(0===e.search(y))return{selector:p,lineContent:a(e.replace(y,""))}}}catch(e){f.e(e)}finally{f.f()}return{selector:"",lineContent:a(e)}}(c),g=b.selector,S=b.lineContent,w={lineIndex:n,spaceCount:y,selector:g,line:u?"":e,trimmedLine:c,lineContent:S,childList:[],additionalLineList:[],config:i.config};if(p.includes(g)){if(i.codeLineData&&""===S)return i.codeLineData=null,!0;i.codeLineData=w}var A=i.codeLineData;if(A&&A!==w)return A.additionalLineList.push(w.line),!0;if(d.includes(g)){if(i.tableLineData)return i.tableLineData.additionalLineList.push(w.line),!0;i.tableLineData=w}else i.tableLineData=null;if(""===w.selector&&S.length>0){var T=o[o.length-1];if(T&&T.lineContent.length>0&&!d.includes(T.selector))return T.additionalLineList.push(S),!0}var j=function(e,n){for(var t=n.length-1;t>=0;t-=1){var r=n[t];if(r.spaceCount<e.spaceCount)return r}return null}(w,o);return!!j&&(j.childList.push(w),o.push(w),!0)}function w(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var A=/<(\w+)[^>]*>[\S\s]*?<\/\1>/,T=/<\w+[^>]*?\s*\/>/;function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var L=/\s*?\\$/;function x(e){return e.replace(L,"<br/>")}function O(e,n){return n||L.test(e)}function k(e,n,t,r){var o="string"==typeof r&&r.trim()?' title="'+r+'"':"",i="string"==typeof n&&n.trim()?' alt="'+n+'"':"";return'<img loading="lazy" src="'.concat(t,'"').concat(i).concat(o,"/>")}var I=/!\[([\S\s]*?)]\((\S+?)(?:\s+"([\S\s]+?)")?\)/g;function C(e){return e.replace(I,k)}var E=/\[x]/gi,_=/\[\s]/g;function M(e){return e.replace(E,'<input type="checkbox" checked="checked" disabled="disabled"/>').replace(_,'<input type="checkbox" disabled="disabled"/>')}var q=/\[([\S\s]*?)]\((\S+?)\)/g;function D(e,n,t){var r=n.length>0?n:t;return'<a href="'.concat(t,'">').concat(r,"</a>")}function P(e){return e.replace(q,D)}function H(e){return function(e){if(Array.isArray(e))return R(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||B(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=B(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==t.return||t.return()}finally{if(l)throw i}}}}function $(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return t}}(e,n)||B(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,n){if(e){if("string"==typeof e)return R(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?R(e,n):void 0}}function R(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function N(e,n){var t=$(e,2),r=t[0],o=t[1],i=$(n,2),a=i[0],l=i[1];return!(o<a||l<r)}function W(e,n){var t,r=U(n);try{for(r.s();!(t=r.n()).done;)if(N(e,t.value))return!0}catch(e){r.e(e)}finally{r.f()}return!1}var X=/(<\w+[\S\s]*?>)|(<\/\w+?>)|(<\w+[\S\s]*?\/>)/g;function z(e){var n,t=[],r=U(H(e.matchAll(X)));try{for(r.s();!(n=r.n()).done;){var o=n.value,i=o.index,a=i+o[0].length-1;t.push([i,a])}}catch(e){r.e(e)}finally{r.f()}return t}var V=/(<a\s*?>[\S\s]*?<\/a>)|(<a\s[\S\s]*?>[\S\s]*?<\/a>)|(<a\s+[\S\s]*?\/>)/g,Q=/(https?:\/\/[\w.]+\.\w+[\w+/]*)/gi;function Y(e){var n=function(e){var n,t=[],r=U(H(e.matchAll(V)));try{for(r.s();!(n=r.n()).done;){var o=n.value,i=o.index,a=i+o[0].length-1;t.push([i,a])}}catch(e){r.e(e)}finally{r.f()}return t}(e),t=z(e);return e.replace(Q,(function(e,r,o,i){var a=[o,o];return W(a,t)||W(a,n)?e:'<a href="'.concat(e,'">').concat(e,"</a>")}))}function Z(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=F(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==t.return||t.return()}finally{if(l)throw i}}}}function F(e,n){if(e){if("string"==typeof e)return G(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?G(e,n):void 0}}function G(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function J(e,n){var t=n.selector,r=n.openTag,o=n.closeTag,i=t.length;if(!e.includes(t))return e;var a=z(e),l=function(e,n){var t,r=n.selector,o=n.equal,i=[],a=r.length;if(0===a)return i;for(var l=e.indexOf(r,0);-1!==l;){var c=(t=e.slice(l).match(o),1,function(e){if(Array.isArray(e))return e}(t)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(t.push(a.value),1!==t.length);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return t}}(t)||F(t,1)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0].length;c===a&&i.push(l),l=e.indexOf(r,l+c)}return i.length%2==1?i.slice(0,-1):i}(e,n),c=(l=l.filter((function(e){var n,t=Z(a);try{for(t.s();!(n=t.n()).done;)if(N(n.value,[e,e+i-1]))return!1}catch(e){t.e(e)}finally{t.f()}return!0}))).length;if(0===c)return e;for(var u=e.slice(0,l[0]),f=1;f<=c;f+=1){var s=l[f],d=e.slice(l[f-1]+i,s);u+=f%2==1?r+d+o:d}return u}function K(e){var n,t=e,r=Z(b);try{for(r.s();!(n=r.n()).done;)t=J(t,n.value)}catch(e){r.e(e)}finally{r.f()}return t}function ee(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ne(e){return""===e.replace(/[\s:|-]/g,"")}function te(e){var n,t=e.trim(),r=(n=t,1,function(e){if(Array.isArray(e))return e}(n)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(t.push(a.value),1!==t.length);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return t}}(n)||function(e,n){if(e){if("string"==typeof e)return ee(e,1);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ee(e,1):void 0}}(n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],o=t[t.length-1];return r===o&&":"===r?"center":":"===o?"right":"left"}function re(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function oe(e,n,t,r){return n.map((function(n){return"<tr>".concat(function(e,n,t,r){var o=e.selector;return n.split(o).filter(i).map((function(n,o){var i=t[o]||"left";return"<".concat(r,' align="').concat(i,'">').concat(function(e,n){var t=e.config.parseLink,r=C(n);return r=P(r),t&&(r=Y(r)),(r=K(r=M(r))).trim()}(e,n),"</").concat(r,">")})).join("")}(e,n,t,r),"</tr>")})).join("")}function ie(e){return e.map(ae).map(x).join("")}function ae(e,n,t){var r=e.selector,o=e.childList,a=e.lineContent,l=e.trimmedLine,v=e.additionalLineList,b=e.config,m=b.codeHighlight,g=b.parseLink,S=function(e){var n=e.additionalLineList,t=e.config.useLineBreak;if(0===n.length)return"";for(var r=O(e.lineContent,t)?"<br/>":" ",o=n.length,i=o-1,a=new Array(o).fill(""),l=0;l<o;l+=1){var c=n[l];if(O(c,t)){var u=c.replace(L,"");a[l]=l===i?u:u+"<br/>"}else a[l]=l===i?c:c+" "}return r+a.join("")}(e),x=ie(o),k=a.replace(L,"")+S;if(k=P(k=C(k)),g&&(k=Y(k)),k=K(k=M(k)),k+=x,function(e){return s.includes(e.selector)}(e))return"<hr/>";if(function(e){return d.includes(e.selector)}(e))return function(e){var n,t=e.selector,r=e.additionalLineList,o=[e.line].concat(function(e){if(Array.isArray(e))return re(e)}(n=r)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(n)||function(e,n){if(e){if("string"==typeof e)return re(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?re(e,void 0):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o.find(ne);if(!a){var l=oe(e,o,[],"td");return"<table><tbody>".concat(l,"</tbody></table>")}var c=o.indexOf(a),u=o.slice(0,c),f=o.slice(c+1),s=function(e,n){return n.split(e).filter(i).map(te)}(t,a),d=oe(e,u,s,"th"),p=oe(e,f,s,"td");return"<table><thead>".concat(d,"</thead><tbody>").concat(p,"</tbody></table>")}(e);if(function(e){return p.includes(e.selector)}(e)){var E=m(a,v.join("\n"));return a?'<code data-lang="'.concat(a,'">').concat(E,"</code>"):"<code>".concat(E,"</code>")}if(""===a&&0===o.length)return"";if(function(e){return u.includes(e.selector)}(e)){var _=r.length-1;return"<h".concat(_,">").concat(k,"</h").concat(_,">")}if(function(e){return f.includes(e.selector)}(e))return"<blockquote>".concat(k,"</blockquote>");if(function(e){return y.includes(e.selector)}(e)){var q=c(e,t,-1),D=c(e,t,1)?"</ul>":"";return"".concat(q?"<ul>":"","<li>").concat(k,"</li>").concat(D)}if(function(e){var n,t=function(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return w(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?w(e,void 0):void 0}}(e))){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==t.return||t.return()}finally{if(l)throw i}}}}(h);try{for(t.s();!(n=t.n()).done;)if(n.value.selector===e.selector)return!0}catch(e){t.e(e)}finally{t.f()}return!1}(e)){var H=c(e,t,-1),U=c(e,t,1),$=H?'<ol type="'.concat(function(e){var n,t=function(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return j(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?j(e,void 0):void 0}}(e))){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==t.return||t.return()}finally{if(l)throw i}}}}(h);try{for(t.s();!(n=t.n()).done;){var r=n.value,o=r.selector,i=r.olAttributeType;if(e===o)return i}}catch(e){t.e(e)}finally{t.f()}return"1"}(e.selector),'" start="').concat(function(e){var n=e.indexOf(".");return e.slice(0,n)}(l),'">'):"",B=U?"</ol>":"";return"".concat($,"<li>").concat(k,"</li>").concat(B)}return""===a||function(e){var n=e.trimmedLine;return 0===n.search(A)||0===n.search(T)}(e)||function(e){return""===e.replace(I,"").trim()}(a)?k:"<p>".concat(k,"</p>")}var le={useLineBreak:!1,wrapperClassName:"md-pro",parseLink:!0,codeHighlight:function(e,n){return n},useWrapper:!0};function ce(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ue(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ce(Object(t),!0).forEach((function(n){fe(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ce(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function fe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var se=[];function de(e){var n=se.find((function(n){return n.node===e}));if(n)return n;var t=e.scrollHeight,r=e.clientHeight,o={scrollHeight:t,clientHeight:r,maxScrollTop:t-r,node:e};return se.push(o),o}function pe(e){se.splice(0),e.forEach(de)}function ye(e,n){var t=de(e),r=de(n),o=t.node.scrollTop/t.maxScrollTop*r.maxScrollTop;Math.abs(o-r.node.scrollTop)<1||n.scrollTo(0,o)}var he=document.querySelector(".js-input"),ve=document.querySelector(".js-output"),be=document.querySelector(".js-output-debug"),me=document.querySelector(".js-use-line-break"),ge=document.querySelector(".js-parse-link");he instanceof HTMLTextAreaElement&&ve instanceof HTMLDivElement&&be instanceof HTMLPreElement&&me instanceof HTMLInputElement&&ge instanceof HTMLInputElement&&(he.textContent='## Welcome\n\nMarkdown pro - easy to use!\n\n<p>Use any html tags</p>\n<p>Ever\nMulti\nLine</p>\n\nUse option `useLineBreak` to\nbreak\nline\neverywhere.\n\nOr use `\\` at the end of line \\\nto break it.\n\n---\nTo make line use `---`, `***` or `___`.\n***\n\n\n### Emphasis\n\n**This is bold text**\n\n__This is underline text__\n\n_This is italic text_\n\n*This is italic text __too__*\n\n***This is bold and italic text***\n\n~~This is strikethrough text~~\n\n*__**~~Combine styles!~~**__*\n\n\n### Subscript/Superscript\n\n- 25^th^\n- C~2~H~5~OH\n\n\n### Images\n\n![](https://placekitten.com/100/100)\n![Cat](https://placekitten.com/110/110)\n![One more cat](https://placekitten.com/120/120 "The one more cat")\n\nAlso, use image ![](https://placekitten.com/100/25) inline.\n\n\n### Checkboxes\n\n- [X] Checked checkbox\n- [x] Checked checkbox too\n- [ ] Unchecked checkbox\n\n[x] And one more checkbox\n\n\n### Links\n\nYou can use like this [link](http://example.com), like this [](http://example.com) or just http://like.this (last method is configurable).\n\n\n### Unordered list\n\n+ Create an unordered list by starting a line with `+`, `-` or `*`\n+ Sub-lists are made by indenting space(s):\n    + Lorem ipsum dolor\n    + Alias animi autem beatae\n\n\n### Ordered lists\n\n5. Create a Numeric list\n1. by starting a line with\n2. any number(s) with a dot, for example: `1.`\n\nB. Create a Big Alphabet list\nO. by starting a line with\nP. any Big Letter(s) with a dot, for example: `A.`\nQ. PS: avoid Roman number - I, V, X, L, C, D, M\n\nf. The same rule\no. for Small Alphabet list\nq. PS: avoid Roman number - i, v, x, l, c, d, m\n\nI. Create a Big Roman Number list\nII. by starting a line with\nV. any Big Roman Number(s) with a dot, for example: `I.`\n\nii. The same rule\nv. for Small Roman Number list\n\n\n### Blockquote\n\n> One Markdown, One Specification, One Blockquote\n\n\n### Table\n\nTable with different cell aligns\n| Left     | Center   | Right  | Default (left)          |\n| :------- | :------: | -----: | ----------------------- |\n| [ ] beep | _123_    | abc    | `:---` - left           |\n| [X] boop | `let a`  | def    | `:--:` - center         |\n| [ ] foo  | **bold** | 123    | `---:` - right          |\n| [x] bar  | H~2~0    | 456    | `----` - default (left) |\n\n\n### Code\n\n```bash\n$ npm i markdown-pro\n$ sudo be happy\n```\n',function(e,n,t,r,o){function i(){pe([e,n]),ye(e,n)}function a(){var a,l,c=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:le,t=ue(ue({},le),n),r={lineIndex:-1,spaceCount:-1,selector:"",line:"",trimmedLine:"",lineContent:"",childList:[],additionalLineList:[],config:t},o=[r],i=[r],a={tableLineData:null,codeLineData:null,config:t};e.split("\n").forEach((function(e,n,t){S(e,n,0,0,i,a)}));var l=t.wrapperClassName,c=le.wrapperClassName,u=ie(o);if(!1===t.useWrapper)return u;var f=l===c?c:"".concat(c," ").concat(l);return'<div class="'.concat(f,'">').concat(u,"</div>")}(e.value,{useLineBreak:r.checked,parseLink:o.checked});n.innerHTML=c,t.textContent=(a="",l="",c.split(/>\s*</).forEach((function(e){e.match(/^\/\w/)&&(l=l.slice("\t".length)),a+=l+"<"+e+">\r\n",e.match(/^<?\w[^>]*[^/]$/)&&(l+="\t")})),a.slice(1,-3)),i()}function l(t){t.currentTarget===e?ye(e,n):ye(n,e)}var c,u;e.addEventListener("input",a,!1),e.addEventListener("scroll",l,{passive:!0}),n.addEventListener("scroll",l,{passive:!0}),n.addEventListener("scroll",(c=function(t){pe([e,n]),l(t)},u=null,function(){var e=this,n=Array.prototype.slice.call(arguments);function t(){u=null,Reflect.apply(c,e,n)}var r=void 0;clearTimeout(u),u=setTimeout(t,200),r&&Reflect.apply(c,e,n)}),{passive:!0}),r.addEventListener("change",a,!1),o.addEventListener("change",a,!1),window.addEventListener("resize",i,!1)}(he,ve,be,me,ge),he.dispatchEvent(new Event("input")))}]);