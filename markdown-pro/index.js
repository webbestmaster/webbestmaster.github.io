!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){t(1),e.exports=t(2)},function(e,n,t){},function(e,n,t){"use strict";function r(e,n){if(e){if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,n):void 0}}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e){return e.trim().replace(/\s+/g," ")}function a(e){if(0===e.length)return!0;var n,t,o=(t=e,1,function(e){if(Array.isArray(e))return e}(t)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(t.push(a.value),1!==t.length);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return t}}(t)||r(t,1)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],i=function(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=r(e))){t&&(e=t);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return l=e.done,e},e:function(e){c=!0,a=e},f:function(){try{l||null==t.return||t.return()}finally{if(c)throw a}}}}(e);try{for(i.s();!(n=i.n()).done;)if(n.value!==o)return!1}catch(e){i.e(e)}finally{i.f()}return!0}function l(e,n,t){var r=e.selector,o=function e(n,t,r){var o=t.indexOf(n);if(-1===o)return null;var i=o+r,a=i in t?t[i]:null;return a?""===a.trimmedLine?e(n,t,r+(r>=0?1:-1)):a:null}(e,n,t);return!o||o.selector!==r}t.r(n);var c=["# ","## ","### ","#### ","##### ","###### "],u=["> "],s=["---","***","___"],f=["```"],d=["+ ","- ","* "],p=[{selector:"0. ",regExpSearchSelector:/^\d+\.\s/,olAttributeType:"1"},{selector:"I. ",regExpSearchSelector:/^[CDILMVX]+\.\s/,olAttributeType:"I"},{selector:"i. ",regExpSearchSelector:/^[cdilmvx]+\.\s/,olAttributeType:"i"},{selector:"A. ",regExpSearchSelector:/^[A-Z]+\.\s/,olAttributeType:"A"},{selector:"a. ",regExpSearchSelector:/^[a-z]+\.\s/,olAttributeType:"a"}],y=[].concat(c,d,f,u).sort((function(e,n){return n.length-e.length})),h=[{selector:"***",openTag:"<b><i>",closeTag:"</i></b>",equal:/\*+/},{selector:"**",openTag:"<b>",closeTag:"</b>",equal:/\*+/},{selector:"__",openTag:"<u>",closeTag:"</u>",equal:/_+/},{selector:"_",openTag:"<i>",closeTag:"</i>",equal:/_+/},{selector:"*",openTag:"<i>",closeTag:"</i>",equal:/\*+/},{selector:"~~",openTag:"<strike>",closeTag:"</strike>",equal:/~+/},{selector:"~",openTag:"<sub>",closeTag:"</sub>",equal:/~+/},{selector:"^",openTag:"<sup>",closeTag:"</sup>",equal:/\^+/},{selector:"`",openTag:'<code data-type="inline">',closeTag:"</code>",equal:/`+/}];function v(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return m(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?m(e,void 0):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==t.return||t.return()}finally{if(l)throw i}}}}function m(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function b(e,n,t,r,o,l){var c=e.trim(),u=""===c,d=u?o[o.length-1].spaceCount:e.search(/\S/),h=d<0?0:d,m=u?{selector:"",lineContent:""}:function(e){var n,t=v(y);try{for(t.s();!(n=t.n()).done;){var r=n.value;if(e.startsWith(r))return{selector:r,lineContent:i(e.replace(r,""))}}}catch(e){t.e(e)}finally{t.f()}var o,l=v(s);try{for(l.s();!(o=l.n()).done;){var c=o.value;if(e.startsWith(c)&&a(e))return{selector:c,lineContent:""}}}catch(e){l.e(e)}finally{l.f()}var u,f=v(p);try{for(f.s();!(u=f.n()).done;){var d=u.value,h=d.selector,m=d.regExpSearchSelector;if(0===e.search(m))return{selector:h,lineContent:i(e.replace(m,""))}}}catch(e){f.e(e)}finally{f.f()}return{selector:"",lineContent:i(e)}}(c),b=m.selector,g=m.lineContent,S={lineIndex:n,spaceCount:h,selector:b,line:u?"":e,trimmedLine:c,lineContent:g,childList:[],additionalLineList:[],useLineBreak:l.useLineBreak};if(f.includes(b)){if(l.codeLineData&&""===g)return l.codeLineData=null,!0;l.codeLineData=S}var w=l.codeLineData;if(w&&w!==S)return w.additionalLineList.push(S.line),!0;if(""===S.selector&&g.length>0){var T=o[o.length-1];if(T&&T.lineContent.length>0)return T.additionalLineList.push(g),!0}var A=function(e,n){for(var t=n.length-1;t>=0;t-=1){var r=n[t];if(r.spaceCount<e.spaceCount)return r}return null}(S,o);return!!A&&(A.childList.push(S),o.push(S),!0)}function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var S=/<(\w+)[^>]*>[\S\s]*?<\/\1>/,w=/<\w+[^>]*?\s*\/>/;function T(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var A=/\s*?\\$/;function x(e){return e.replace(A,"<br/>")}function L(e,n){return n||A.test(e)}function O(e,n,t,r){var o="string"==typeof r&&r.trim()?' title="'+r+'"':"",i="string"==typeof n&&n.trim()?' alt="'+n+'"':"";return'<img loading="lazy" src="'.concat(t,'"').concat(i).concat(o,"/>")}var j=/!\[([\S\s]*?)]\((\S+?)(?:\s+"([\S\s]+?)")?\)/g,k=/\[x]/gi,C=/\[\s]/g,E=/\[([\S\s]*?)]\((\S+?)\)/g;function I(e,n,t){var r=n.length>0?n:t;return'<a href="'.concat(t,'">').concat(r,"</a>")}function _(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=q(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==t.return||t.return()}finally{if(l)throw i}}}}function M(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return t}}(e,n)||q(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,n){if(e){if("string"==typeof e)return P(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?P(e,n):void 0}}function P(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var B=/(<\w+[\S\s]*?>)|(<\/\w+?>)|(<\w+[\S\s]*?\/>)/g;function D(e,n){var t=n.selector,r=n.openTag,o=n.closeTag,i=t.length;if(!e.includes(t))return e;var a=function(e){var n,t,r=[],o=_(function(e){if(Array.isArray(e))return P(e)}(t=e.matchAll(B))||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||q(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());try{for(o.s();!(n=o.n()).done;){var i=n.value,a=i.index,l=a+i[0].length-1;r.push([a,l])}}catch(e){o.e(e)}finally{o.f()}return r}(e),l=function(e,n){var t=n.selector,r=n.equal,o=[],i=t.length;if(0===i)return o;for(var a=e.indexOf(t,0);-1!==a;){var l=M(e.slice(a).match(r),1)[0].length;l===i&&o.push(a),a=e.indexOf(t,a+l)}return o.length%2==1?o.slice(0,-1):o}(e,n),c=(l=l.filter((function(e){var n,t,r,o,l,c,u,s,f=_(a);try{for(f.s();!(n=f.n()).done;){var d=n.value;if(t=[e,e+i-1],o=(r=M(d,2))[0],l=r[1],u=(c=M(t,2))[0],s=c[1],!(l<u||s<o))return!1}}catch(e){f.e(e)}finally{f.f()}return!0}))).length;if(0===c)return e;for(var u=e.slice(0,l[0]),s=1;s<=c;s+=1){var f=l[s],d=e.slice(l[s-1]+i,f);u+=s%2==1?r+d+o:d}return u}function H(e){return e.map(U).map(x).join("")}function U(e,n,t){var r=e.selector,o=e.childList,i=e.lineContent,a=e.additionalLineList,y=e.trimmedLine,v=function(e){var n=e.additionalLineList,t=e.useLineBreak;if(0===n.length)return"";for(var r=L(e.lineContent,t)?"<br/>":" ",o=n.length,i=o-1,a=new Array(o).fill(""),l=0;l<o;l+=1){var c=n[l];if(L(c,t)){var u=c.replace(A,"");a[l]=l===i?u:u+"<br/>"}else a[l]=l===i?c:c+" "}return r+a.join("")}(e),m=H(o),b=i.replace(A,"")+v;if(b=function(e){return e.replace(k,'<input type="checkbox" checked="checked" disabled="disabled"/>').replace(C,'<input type="checkbox" disabled="disabled"/>')}(b=function(e){var n,t=e,r=_(h);try{for(r.s();!(n=r.n()).done;)t=D(t,n.value)}catch(e){r.e(e)}finally{r.f()}return t}(b=function(e){return e.replace(E,I)}(b=b.replace(j,O)))),b+=m,function(e){return s.includes(e.selector)}(e))return"<hr/>";if(function(e){return f.includes(e.selector)}(e))return'<code data-lang="'.concat(i,'">').concat(a.join("\n"),"</code>");if(""===i&&0===o.length)return"";if(function(e){return c.includes(e.selector)}(e)){var x=r.length-1;return"<h".concat(x,">").concat(b,"</h").concat(x,">")}if(function(e){return u.includes(e.selector)}(e))return"<blockquote>".concat(b,"</blockquote>");if(function(e){return d.includes(e.selector)}(e)){var M=l(e,t,-1),q=l(e,t,1)?"</ul>":"";return"".concat(M?"<ul>":"","<li>").concat(b,"</li>").concat(q)}if(function(e){var n,t=function(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return g(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?g(e,void 0):void 0}}(e))){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==t.return||t.return()}finally{if(l)throw i}}}}(p);try{for(t.s();!(n=t.n()).done;)if(n.value.selector===e.selector)return!0}catch(e){t.e(e)}finally{t.f()}return!1}(e)){var P=l(e,t,-1),B=l(e,t,1),U=P?'<ol type="'.concat(function(e){var n,t=function(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return T(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?T(e,void 0):void 0}}(e))){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==t.return||t.return()}finally{if(l)throw i}}}}(p);try{for(t.s();!(n=t.n()).done;){var r=n.value,o=r.selector,i=r.olAttributeType;if(e===o)return i}}catch(e){t.e(e)}finally{t.f()}return"1"}(e.selector),'" start="').concat(function(e){var n=e.indexOf(".");return e.slice(0,n)}(y),'">'):"",$=B?"</ol>":"";return"".concat(U,"<li>").concat(b,"</li>").concat($)}return""===i||function(e){var n=e.trimmedLine;return 0===n.search(S)||0===n.search(w)}(e)||function(e){return""===e.replace(j,"").trim()}(i)?b:"<p>".concat(b,"</p>")}var $={useLineBreak:!1,wrapperClassName:"md-pro"};function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?N(Object(t),!0).forEach((function(n){z(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function z(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var V=[];function W(e){var n=V.find((function(n){return n.node===e}));if(n)return n;var t=e.scrollHeight,r=e.clientHeight,o={scrollHeight:t,clientHeight:r,maxScrollTop:t-r,node:e};return V.push(o),o}function X(e){V.splice(0),e.forEach(W)}function Q(e,n){var t=W(e),r=W(n),o=t.node.scrollTop/t.maxScrollTop*r.maxScrollTop;Math.abs(o-r.node.scrollTop)<1||n.scrollTo(0,o)}var Y=document.querySelector(".js-input"),Z=document.querySelector(".js-output"),F=document.querySelector(".js-output-debug"),G=document.querySelector(".js-use-line-break");Y instanceof HTMLTextAreaElement&&Z instanceof HTMLDivElement&&F instanceof HTMLPreElement&&G instanceof HTMLInputElement&&(Y.textContent='## Welcome\n\nMarkdown pro - easy to use!\n\n<p>Use any html tags</p>\n<p>Ever\nMulti\nLine</p>\n\nUse option `useLineBreak` to\nbreak\nline\neverywhere.\n\nOr use `\\` at the end of line \\\nto break it.\n\n---\nTo make line use `---`, `***` or `___`.\n***\n\n\n### Emphasis\n\n**This is bold text**\n\n__This is underline text__\n\n_This is italic text_\n\n*This is italic text __too__*\n\n***This is bold and italic text***\n\n~~This is strikethrough text~~\n\n*__**~~Combine styles!~~**__*\n\n\n### Subscript/Superscript\n\n- 25^th^\n- C~2~H~5~OH\n\n\n### Images\n\n![](https://placekitten.com/100/100)\n![Cat](https://placekitten.com/110/110)\n![One more cat](https://placekitten.com/120/120 "The one more cat")\n\nAlso, use image ![](https://placekitten.com/100/25) inline.\n\n\n### Checkboxes\n\n- [X] Checked checkbox\n- [x] Checked checkbox too\n- [ ] Unchecked checkbox\n\n[x] And one more checkbox\n\n\n### Links\n\nYou can use like this [link](http://example.com) or like this [](http://example.com).\n\n\n### Unordered list\n\n+ Create an unordered list by starting a line with `+`, `-` or `*`\n+ Sub-lists are made by indenting space(s):\n    + Lorem ipsum dolor\n    + Alias animi autem beatae\n\n\n### Ordered lists\n\n5. Create a Numeric list\n1. by starting a line with\n2. any number(s) with a dot, for example: `1.`\n\nB. Create a Big Alphabet list\nO. by starting a line with\nP. any Big Letter(s) with a dot, for example: `A.`\nQ. PS: avoid Roman number - I, V, X, L, C, D, M\n\nf. The same rule\no. for Small Alphabet list\nq. PS: avoid Roman number - i, v, x, l, c, d, m\n\nI. Create a Big Roman Number list\nII. by starting a line with\nV. any Big Roman Number(s) with a dot, for example: `I.`\n\nii. The same rule\nv. for Small Roman Number list\n\n\n### Blockquote\n\n> One Markdown, One Specification, One Blockquote\n\n\n### Code\n\n```bash\n$ npm i markdown-pro\n$ sudo be happy\n```\n',function(e,n,t,r){function o(){X([e,n]),Q(e,n)}function i(){var i,a,l=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:$,t=R(R({},$),n),r={lineIndex:-1,spaceCount:-1,selector:"",line:"",trimmedLine:"",lineContent:"",childList:[],additionalLineList:[],useLineBreak:t.useLineBreak},o=[r],i=[r],a={codeLineData:null,useLineBreak:t.useLineBreak};e.split("\n").forEach((function(e,n,t){b(e,n,0,0,i,a)}));var l=t.wrapperClassName,c=$.wrapperClassName,u=l===c?c:"".concat(c," ").concat(l);return'<div class="'.concat(u,'">').concat(H(o),"</div>")}(e.value,{useLineBreak:r.checked});n.innerHTML=l,t.textContent=(i="",a="",l.split(/>\s*</).forEach((function(e){e.match(/^\/\w/)&&(a=a.slice("\t".length)),i+=a+"<"+e+">\r\n",e.match(/^<?\w[^>]*[^/]$/)&&(a+="\t")})),i.slice(1,-3)),o()}function a(t){t.currentTarget===e?Q(e,n):Q(n,e)}var l,c;e.addEventListener("input",i,!1),e.addEventListener("scroll",a,{passive:!0}),n.addEventListener("scroll",a,{passive:!0}),n.addEventListener("scroll",(l=function(t){X([e,n]),a(t)},c=null,function(){var e=this,n=Array.prototype.slice.call(arguments);function t(){c=null,Reflect.apply(l,e,n)}var r=void 0;clearTimeout(c),c=setTimeout(t,200),r&&Reflect.apply(l,e,n)}),{passive:!0}),r.addEventListener("change",i,!1),window.addEventListener("resize",o,!1)}(Y,Z,F,G),Y.dispatchEvent(new Event("input")))}]);