self.Flatted=function(n){"use strict";function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},t(n)}var r=JSON.parse,e=JSON.stringify,o=Object.keys,u=String,f="string",i={},c="object",a=function(n,t){return t},l=function(n){return n instanceof u?u(n):n},s=function(n,r){return t(r)===f?new u(r):r},y=function(n,r,e,f){for(var a=[],l=o(e),s=l.length,p=0;p<s;p++){var v=l[p],S=e[v];if(S instanceof u){var b=n[S];t(b)!==c||r.has(b)?e[v]=f.call(e,v,b):(r.add(b),e[v]=i,a.push({k:v,a:[n,r,b,f]}))}else e[v]!==i&&(e[v]=f.call(e,v,S))}for(var m=a.length,g=0;g<m;g++){var h=a[g],O=h.k,d=h.a;e[O]=f.call(e,O,y.apply(null,d))}return e},p=function(n,t,r){var e=u(t.push(r)-1);return n.set(r,e),e},v=function(n,e){var o=r(n,s).map(l),u=o[0],f=e||a,i=t(u)===c&&u?y(o,new Set,u,f):u;return f.call({"":i},"",i)},S=function(n,r,o){for(var u=r&&t(r)===c?function(n,t){return""===n||-1<r.indexOf(n)?t:void 0}:r||a,i=new Map,l=[],s=[],y=+p(i,l,u.call({"":n},"",n)),v=!y;y<l.length;)v=!0,s[y]=e(l[y++],S,o);return"["+s.join(",")+"]";function S(n,r){if(v)return v=!v,r;var e=u.call(this,n,r);switch(t(e)){case c:if(null===e)return e;case f:return i.get(e)||p(i,l,e)}return e}};return n.fromJSON=function(n){return v(e(n))},n.parse=v,n.stringify=S,n.toJSON=function(n){return r(S(n))},n}({});