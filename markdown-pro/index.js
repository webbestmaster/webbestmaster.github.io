(()=>{"use strict";(()=>{const e="",n="<br/>";function t(n){return n.trim()!==e}function r(e){return e.trim().replace(/\s+/g," ")}function i(e){const n=[...e],[t]=n;if(!t)return!0;for(const e of n)if(e!==t)return!1;return!0}function o(n,t,r){const i=t.indexOf(n);if(-1===i)return null;const l=i+r,c=l in t?t[l]:null;return c?c.trimmedLine===e?o(n,t,r+(r>=0?1:-1)):c:null}function l(e,n,t){const{selector:r}=e,i=o(e,n,t);return!i||i.selector!==r}const c=["# ","## ","### ","#### ","##### ","###### "],s=["> "],a=["---","***","___"],u=["|"],f=["```"],d=["+ ","- ","* "],p=[{olAttributeType:"1",regExpSearchSelector:/^\d+\.\s/,selector:"0. "},{olAttributeType:"I",regExpSearchSelector:/^[CDILMVX]+\.\s/,selector:"I. "},{olAttributeType:"i",regExpSearchSelector:/^[cdilmvx]+\.\s/,selector:"i. "},{olAttributeType:"A",regExpSearchSelector:/^[A-Z]+\.\s/,selector:"A. "},{olAttributeType:"a",regExpSearchSelector:/^[a-z]+\.\s/,selector:"a. "}],m=[...c,...d,...u,...f,...s].sort(((e,n)=>n.length-e.length)),h=[{closeTag:"</i></b>",equal:/\*+/,openTag:"<b><i>",selector:"***"},{closeTag:"</b>",equal:/\*+/,openTag:"<b>",selector:"**"},{closeTag:"</u>",equal:/_+/,openTag:"<u>",selector:"__"},{closeTag:"</i>",equal:/_+/,openTag:"<i>",selector:"_"},{closeTag:"</i>",equal:/\*+/,openTag:"<i>",selector:"*"},{closeTag:"</strike>",equal:/~+/,openTag:"<strike>",selector:"~~"},{closeTag:"</sub>",equal:/~+/,openTag:"<sub>",selector:"~"},{closeTag:"</sup>",equal:/\^+/,openTag:"<sup>",selector:"^"},{closeTag:"</code>",equal:/`+/,openTag:'<code data-type="inline">',selector:"`"}],g="super",b=/\S\[\^[^\]]+?]|\S\^\[[^\]]+?]/g;function L(e){return/^\[\^[^\]]+]:/.test(e)}function $(e,n){return n.find((n=>n.id===e))}function k(e){return e.slice(3,-1).trim()}function x(e){return k(e).toLowerCase().replace(/\W/g," ").trim().replace(/\s+/g,"-")}function T(e){const n=x(e),t=k(e);return 1===e.indexOf("[^")?{descriptionLineData:null,id:n,inlineLineContent:t,type:g}:{descriptionLineData:null,id:n,inlineLineContent:t,type:"inline"}}const S=/<(\w+)[^>]*>[\S\s]*?<\/\1>/,y=/<\w+[^>]*?\s*\/>/;function v(e){return"string"==typeof e&&e.trim().length>0}function C(e){return e.includes("@")}var w;!function(e){e.auto="auto",e.dark="dark",e.light="light"}(w||(w={}));const E={codeHighlight:(e,n)=>n,parseLink:!0,themeName:w.auto,useLineBreak:!1,useWrapper:!0,wrapperClassName:"md-pro"},_={[w.auto]:`${E.wrapperClassName}-theme-${w.auto}`,[w.dark]:`${E.wrapperClassName}-theme-${w.dark}`,[w.light]:`${E.wrapperClassName}-theme-${w.light}`},D="mailto:";function q(e,n){const[t,r]=e,[i,o]=n;return!(r<i||o<t)}function O(e,n){for(const t of n)if(q(e,t))return!0;return!1}function j(e,n){const t=[],r=e.match(n);if(!r)return[];let i=0;for(const n of r){const r=e.indexOf(n,i),o=r+n.length-1;i=o,t.push([r,o])}return t}const A=/(<\w+[\S\s]*?>)|(<\/\w+?>)|(<\w+[\S\s]*?\/>)/g;function H(e){return j(e,A)}const N=/(<a\s*?>[\S\s]*?<\/a>)|(<a\s[\S\s]*?>[\S\s]*?<\/a>)|(<a\s+[\S\s]*?\/>)/g,I=/(\w+:\/\/[\w.]+\.\w+[\w+/]*)/gi,M=/([\w.-]+@[\w.]+\.\w+[\w+/]*)/gi;function B(e,n,t){const r=function(e){return j(e,N)}(e),i=H(e);return e.replace(n,((e,n,o)=>{const l=[o,o];return O(l,i)||O(l,r)?e:`<a href="${t}${e}">${e}</a>`}))}function W(e,n){const{selector:t,openTag:r,closeTag:i}=n,o=t.length;if(!e.includes(t))return e;const l=H(e);let c=function(e,n){const{selector:t,equal:r}=n,i=[],o=t.length;if(0===o)return i;let l=e.indexOf(t,0);for(;-1!==l;){const n=e.slice(l).match(r);if(!n)return[];const[c]=n,s=c.length;s===o&&i.push(l),l=e.indexOf(t,l+s)}return i.length%2==1?i.slice(0,-1):i}(e,n);c=c.filter((e=>{for(const n of l)if(q(n,[e,e+o-1]))return!1;return!0}));const s=c.length;if(0===s)return e;let a=e.slice(0,c[0]);for(let n=1;n<=s;n+=1){const t=c[n],l=e.slice(c[n-1]+o,t);a+=n%2==1?r+l+i:l}return a}const F=/\s*?\\$/;function R(e){return e.replace(F,"<br/>")}function z(e,n){return n||F.test(e)}function P(e,n,t,r){const i=v(r)?' title="'+r+'"':"";return`<img loading="lazy" src="${t}"${v(n)?' alt="'+n+'"':""}${i}/>`}const U=/!\[([\S\s]*?)]\((\S+?)(?:\s+"([\S\s]+?)")?\)/g,V=/!\[([\S\s]*?)]\[([\S\s]+?)]/g,X=/\[x]/gi,Y=/\[\s]/g,Q=/\[([\S\s]*?)]\((\S+?)(?:\s+"([\S\s]+?)")?(?:\s+"([\S\s]+?)")?\)/g,Z=/\[([\S\s]*?)]\((\S+?)(?:\s+"([\S\s]+?)")?\)/g,G=/\[([\S\s]*?)]\[([\S\s]+?)]/g;function J(e,n,t,r,i){const o=v(r)?' title="'+r+'"':"",l=v(i)?"?subject="+i:"",c=n.length>0?n:t;return C(e)?`<a href="mailto:${t}${l}"${o}>${c}</a>`:e}function K(e,n,t,r){return`<a href="${t}"${v(r)?' title="'+r+'"':""}>${n.length>0?n:t}</a>`}function ee(e){return C(e)?D:""}function ne(e,n){const{config:t}=n,{parseLink:r}=t;let i=function(e,n){return e.replace(b,(e=>{const t=[...e],[r]=t,{footnoteList:i}=n,o=x(e),l=$(o,i);return l?`${r}<a href="#${o}"><sup>[${i.indexOf(l)+1}]</sup></a>`:""}))}(e,n);return i=function(e,n){return e.replace(U,P).replace(V,((e,t,r)=>function(e,n,t,r){const i=v(n)?' alt="'+n+'"':"",{variable:o}=r;return t in o?`<img loading="lazy" src="${o[t].value}"${i}/>`:`<img loading="lazy" src="${t}"${i}/>`}(0,t,r,n)))}(i,n),i=function(e){return e.replace(Q,J)}(i),r&&(i=function(e){return B(e,M,D)}(i)),i=function(e){return e.replace(Z,K)}(i),r&&(i=function(e){return B(e,I,"")}(i)),i=function(e,n){return e.replace(G,((e,t,r)=>function(e,n,t,r){const{variable:i}=r;if(t in i){const e=i[t].value,r=n.length>0?n:e;return`<a href="${ee(e)}${e}">${r}</a>`}const o=n.length>0?n:t;return`<a href="${ee(t)}${t}">${o}</a>`}(0,t,r,n)))}(i,n),i=function(e){return e.replace(X,'<input type="checkbox" checked="checked" disabled="disabled"/>').replace(Y,'<input type="checkbox" disabled="disabled"/>')}(i),function(e){let n=e;for(const e of h)n=W(n,e);return n}(i)}function te(n){return n.replace(/[\s:|-]/g,"")===e}function re(e){const n=e.trim(),t=[...n],[r]=t,i=n[n.length-1];return r===i&&":"===r?"center":":"===i?"right":"left"}function ie(n,r,i,o,l){return r.map((r=>`<tr>${function(n,r,i,o,l){const{selector:c}=n;return r.split(c).filter(t).map(((e,n)=>{const t=i[n]||"left";return`<${o} align="${t}">${function(e,n){return ne(e,n).trim()}(e,l)}</${o}>`})).join(e)}(n,r,i,o,l)}</tr>`)).join(e)}function oe(r,i){return r.map(((o,m)=>function(r,i,o,m){const{selector:h,childList:g,lineContent:b,trimmedLine:$,additionalLineList:k,config:x}=r,{codeHighlight:T}=x,v=function(t){const{additionalLineList:r,config:i}=t,{lineContent:o}=t,{useLineBreak:l}=i;if(0===r.length)return e;const c=z(o,l)?n:" ",s=r.length,a=s-1,u=Array.from({length:s}).fill("");for(let t=0;t<s;t+=1){const i=r[t];if(z(i,l)){const r=i.replace(F,e);u[t]=t===a?r:r+n}else u[t]=t===a?i:i+" "}return c+u.join(e)}(r),C=oe(g,m);let w=b.replace(F,e)+v;if(w=ne(w,m),w+=C,L(b))return"";if(function(e){return a.includes(e.selector)}(r))return"<hr/>";if(function(e){return u.includes(e.selector)}(r))return function(e,n){const{selector:r,additionalLineList:i,line:o}=e,l=[o,...i],c=l.find(te);if(!c)return`<table><tbody>${ie(e,l,[],"td",n)}</tbody></table>`;const s=l.indexOf(c),a=l.slice(0,s),u=l.slice(s+1),f=function(e,n){return n.split(e).filter(t).map(re)}(r,c);return`<table><thead>${ie(e,a,f,"th",n)}</thead><tbody>${ie(e,u,f,"td",n)}</tbody></table>`}(r,m);if(function(e){return f.includes(e.selector)}(r)){const e=T(b,k.join("\n"));return b?`<code data-lang="${b}">${e}</code>`:`<code>${e}</code>`}if(b===e&&0===g.length)return e;if(function(e){return c.includes(e.selector)}(r)){const e=h.length-1;return`<h${e}>${w}</h${e}>`}if(function(e){return s.includes(e.selector)}(r))return`<blockquote>${w}</blockquote>`;if(function(e){return d.includes(e.selector)}(r))return`${l(r,o,-1)?"<ul>":""}<li>${w}</li>${l(r,o,1)?"</ul>":""}`;if(function(e){for(const n of p)if(n.selector===e.selector)return!0;return!1}(r)){const e=l(r,o,-1),n=l(r,o,1),{selector:t}=r,i=e?`<ol type="${function(e){for(const n of p){const{selector:t,olAttributeType:r}=n;if(e===t)return r}return"1"}(t)}" start="${function(e){const n=e.indexOf(".");return e.slice(0,n)}($)}">`:"";return`${i}<li>${w}</li>${n?"</ol>":""}`}return b===e||function(e){const{trimmedLine:n}=e;return 0===n.search(S)||0===n.search(y)}(r)||function(n){return n.replace(U,"").trim()===e}(b)?w:`<p>${w}</p>`}(o,0,r,i))).map(R).join(e)}function le(n,t=E){const o={...E,...t},{useWrapper:l}=o,c={...E,...t,useWrapper:!1},s={additionalLineList:[],childList:[],config:o,line:e,lineContent:"",lineIndex:-1,selector:e,spaceCount:-1,trimmedLine:""},d=[s],h=[s],k={codeLineData:null,config:o,footnoteList:[],tableLineData:null,variable:{}};n.split("\n").forEach(((n,t,o)=>{!function(n,t,o,l,c,s){const d=n.trim(),h=d===e,k=h?c[c.length-1].spaceCount:n.search(/\S/),x=Math.max(0,k),S={lineContent:e,selector:e},{selector:y,lineContent:v}=h?S:function(n){for(const t of m)if(n.startsWith(t))return{lineContent:r(n.replace(t,e)),selector:t};for(const t of a)if(n.startsWith(t)&&i(n))return{lineContent:e,selector:t};for(const t of p){const{selector:i,regExpSearchSelector:o}=t;if(0===n.search(o))return{lineContent:r(n.replace(o,e)),selector:i}}return{lineContent:r(n),selector:e}}(d),C={additionalLineList:[],childList:[],config:s.config,line:h?e:n,lineContent:v,lineIndex:t,selector:y,spaceCount:x,trimmedLine:d};if(f.includes(y)){if(s.codeLineData&&v===e)return s.codeLineData=null,!0;s.codeLineData=C}const{codeLineData:w}=s;if(w&&w!==C)return w.additionalLineList.push(C.line),!0;const E=function(e){const n=e.match(b);return n?n.map(T):[]}(v),{footnoteList:_,tableLineData:D,variable:q}=s;if(function(e,n){for(const t of e){const{id:e,descriptionLineData:r}=t,i=n.find((n=>n.id===e));i?i.descriptionLineData||(i.descriptionLineData=r):n.push(t)}}(E,_),u.includes(y)){if(D)return D.additionalLineList.push(C.line),!0;s.tableLineData=C}else s.tableLineData=null;const O=function(e){const n=e.match(/\[([^^][\S\s]+?)]:\s+?\S/);return n?{key:n[1],value:e.slice(e.indexOf("]:")+3).trim()}:null}(v);if(C.selector===e&&v.length>0){const e=c[c.length-1],n=u.includes(e.selector);if(O&&(q[O.key]=O),e&&e.lineContent.length>0&&!n&&!O)return e.additionalLineList.push(v),!0}const j=function(e,n){for(let t=n.length-1;t>=0;t-=1){const r=n[t];if(r.spaceCount<e.spaceCount)return r}return null}(C,c);j&&(O||(j.childList.push(C),c.push(C),L(v)&&function(e,n){const{lineContent:t}=e,r=t.match(/\[\^[^\]]+?]:/);if(!r)return;const[i]=r,o=i.slice(2,-2).trim(),l=$(o,n);l?l.descriptionLineData=e:n.push({descriptionLineData:e,id:o,inlineLineContent:t,type:g})}(C,_)))}(n,t,0,0,h,k)}));const x=oe(d,k),S=k.footnoteList.map((e=>{const{id:n}=e,t=function(e){const{inlineLineContent:n,descriptionLineData:t}=e;if(t){const{lineContent:e,additionalLineList:n}=t,r=e.indexOf("]:")+2;return e.slice(r)+"\n"+n.join("\n")}return n}(e);return`<li id="${n}">${le(t,c)}</li>`})),y=[x,0===S.length?"":["<hr/>",'<ol type="1">',...S,"</ol>"].join("")].join("");if(!l)return y;const v=function(e){const{wrapperClassName:n,themeName:t}=e,{wrapperClassName:r}=E;return`${n===r?r:`${r} ${n}`} ${_[t]}`}(o);return`<div class="${v}">${y}</div>`}const ce=[];function se(e){const n=ce.find((n=>n.node===e));if(n)return n;const{scrollHeight:t,clientHeight:r}=e,i={clientHeight:r,maxScrollTop:t-r,node:e,scrollHeight:t};return ce.push(i),i}function ae(e){ce.splice(0),e.forEach(se)}function ue(e,n){const t=se(e),r=se(n),i=t.node.scrollTop/t.maxScrollTop*r.maxScrollTop;Math.abs(i-r.node.scrollTop)<1||n.scrollTo(0,i)}function fe(e){switch(e){case w.auto:return w.auto;case w.dark:return w.dark;case w.light:return w.light;default:console.warn("[getThemeName] can not detect theme name.")}return console.warn("[getThemeName] use ThemeNameEnum.auto."),w.auto}const de=document.querySelector(".js-input"),pe=document.querySelector(".js-output"),me=document.querySelector(".js-output-debug"),he=document.querySelector(".js-use-line-break"),ge=document.querySelector(".js-parse-link"),be=document.querySelector(".js-theme-name");de instanceof HTMLTextAreaElement&&pe instanceof HTMLDivElement&&me instanceof HTMLPreElement&&he instanceof HTMLInputElement&&ge instanceof HTMLInputElement&&be instanceof HTMLSelectElement&&(de.textContent='## Welcome\r\n\r\nMarkdown pro - easy to use!\r\n\r\n<p>Use any html tags</p>\r\n<p>Ever\r\nMulti\r\nLine</p>\r\n\r\nUse option `useLineBreak` to\r\nbreak\r\nline\r\neverywhere.\r\n\r\nOr use `\\` at the end of line \\\r\nto break it.\r\n\r\n---\r\nTo make line use `---`, `***` or `___`.\r\n***\r\n\r\n\r\n### Emphasis\r\n\r\n**This is bold text**\r\n\r\n__This is underline text__\r\n\r\n_This is italic text_\r\n\r\n*This is italic text __too__*\r\n\r\n***This is bold and italic text***\r\n\r\n~~This is strikethrough text~~\r\n\r\n*__**~~Combine styles!~~**__*\r\n\r\n\r\n### Subscript/Superscript\r\n\r\n- 25^th^\r\n- C~2~H~5~OH\r\n\r\n\r\n### Images\r\n\r\n![](https://placekitten.com/100/100)\r\n![Cat](https://placekitten.com/110/110)\r\n![One more cat](https://placekitten.com/120/120 "The one more cat")\r\n![One more cat](https://placekitten.com/130/130 "The one more cat" your-attribute="my value")\r\n\r\nAlso, use image ![](https://placekitten.com/100/25) inline.\r\n\r\n\r\n### Checkboxes\r\n\r\n- [X] Checked checkbox\r\n- [x] Checked checkbox too\r\n- [ ] Unchecked checkbox\r\n\r\n[x] And one more checkbox\r\n\r\n\r\n### Links\r\n\r\nYou can use like this [link](http://example.com),\r\nlike this [](http://example.com "go to site"),\r\nlike this [go to site](http://example.com "go to site again"),\r\nlike this [](http://example.com)\r\nor http://like.this even (last method is configurable).\r\n\r\n\r\n### Emails\r\n\r\nYou can use Email this [send a email](my-email@example.com),\r\nlike this [](my-email@example.com "send a email"),\r\nlike this [send a email](my-email@example.com "send a email"),\r\nlike this [send a email with subject](my-email@example.com "send a email" "Subject of Email"),\r\nlike this [](my-email@example.com)\r\nor my-email@example.com even (last method is configurable).\r\n\r\n\r\n### Unordered list\r\n\r\n+ Create an unordered list by starting a line with `+`, `-` or `*`\r\n+ Sub-lists are made by indenting space(s):\r\n    + Lorem ipsum dolor\r\n    + Alias animi autem beatae\r\n\r\n\r\n### Ordered lists\r\n\r\n5. Create a Numeric list\r\n1. by starting a line with\r\n2. any number(s) with a dot, for example: `1.`\r\n\r\nB. Create a Big Alphabet list\r\nO. by starting a line with\r\nP. any Big Letter(s) with a dot, for example: `A.`\r\nQ. PS: avoid Roman number - I, V, X, L, C, D, M\r\n\r\nf. The same rule\r\no. for Small Alphabet list\r\nq. PS: avoid Roman number - i, v, x, l, c, d, m\r\n\r\nI. Create a Big Roman Number list\r\nII. by starting a line with\r\nV. any Big Roman Number(s) with a dot, for example: `I.`\r\n\r\nii. The same rule\r\nv. for Small Roman Number list\r\n\r\n\r\n### Footnote\r\n\r\nFootnote 1 link[^first].\r\n\r\nFootnote 2 link[^second].\r\n\r\nFootnote 1 link[^first] and 2 link[^second].\r\n\r\nInline footnote^[Text of inline footnote] definition.\r\n\r\nDuplicated footnote reference[^second].\r\n\r\n[^first]: Footnote **can have markdown**\r\nand\r\n_multiple_\r\nlines.\r\n\r\n[^second]: Footnote text.\r\n\r\n\r\n### Blockquote\r\n\r\n> One Markdown, One Specification, One Blockquote\r\n\r\n\r\n### Table\r\n\r\nTable with different cell aligns\r\n| Left     | Center   | Right         | Default (left)          |\r\n| :------- | :------: | ------------: | ----------------------- |\r\n| [ ] beep | _123_    | abc^[fn text] | `:---` - left           |\r\n| [X] boop | `let a`  | link[^first]  | `:--:` - center         |\r\n| [ ] foo  | **bold** | 123           | `---:` - right          |\r\n| [x] bar  | H~2~0    | 456           | `----` - default (left) |\r\n\r\n\r\n### Code\r\n\r\n```bash\r\n$ npm i markdown-pro\r\n$ sudo be happy\r\n```\r\n\r\n\r\n### Variables\r\n\r\n[image-variable]: https://placekitten.com/100/100\r\n[url variable]: http://example.com\r\n[email variable]: email@example.com\r\n\r\n![][image-variable]\r\n![cat][image-variable]\r\n\r\n[][url variable]\r\n[to site][url variable]\r\n[send email][email variable]\r\n',function(e,n,t,r,i,o){function l(){ae([e,n]),ue(e,n)}function c(){const c=le(e.value,{parseLink:i.checked,themeName:fe(o.value),useLineBreak:r.checked});n.innerHTML=c,t.textContent=function(e){let n="",t="";return e.split(/>\s*</).forEach((e=>{/^\/\w/.test(e)&&(t=t.slice("\t".length)),n+=t+"<"+e+">\r\n",/^<?\w[^>]*[^/]$/.test(e)&&(t+="\t")})),n.slice(1,-3)}(c),l()}function s(t){t.currentTarget===e?ue(e,n):ue(n,e)}e.addEventListener("input",c,!1),e.addEventListener("scroll",s,{passive:!0}),n.addEventListener("scroll",s,{passive:!0}),n.addEventListener("scroll",function(t,r){let i=null;return function(...t){null!==i&&clearTimeout(i),i=setTimeout((()=>{(t=>{ae([e,n]),s(t)})(...t)}),200)}}(),{passive:!0}),r.addEventListener("change",c,!1),i.addEventListener("change",c,!1),o.addEventListener("change",c,!1),window.addEventListener("resize",l,!1)}(de,pe,me,he,ge,be),de.dispatchEvent(new Event("input")))})()})();