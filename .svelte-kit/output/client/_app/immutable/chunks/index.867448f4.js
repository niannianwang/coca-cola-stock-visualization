function $(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function C(){return Object.create(null)}function g(t){t.forEach(B)}function L(t){return typeof t=="function"}function lt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function I(t){return Object.keys(t).length===0}function G(t,...n){if(t==null)return $;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function st(t,n,e){t.$$.on_destroy.push(G(n,e))}function ot(t,n,e,i){if(t){const r=O(t,n,e,i);return t[0](r)}}function O(t,n,e,i){return t[1]&&i?H(e.ctx.slice(),t[1](i(n))):e.ctx}function at(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(n.dirty.length,r.length);for(let s=0;s<c;s+=1)o[s]=n.dirty[s]|r[s];return o}return n.dirty|r}return n.dirty}function ft(t,n,e,i,r,o){if(r){const c=O(n,e,i,o);t.p(c,r)}}function _t(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let w=!1;function J(){w=!0}function K(){w=!1}function W(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let l=0;l<n.length;l++){const f=n[l];f.claim_order!==void 0&&u.push(f)}n=u}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let u=0;u<n.length;u++){const l=n[u].claim_order,f=(r>0&&n[e[r]].claim_order<=l?r+1:W(1,r,x=>n[e[x]].claim_order,l))-1;i[u]=e[f]+1;const a=f+1;e[a]=u,r=Math.max(a,r)}const o=[],c=[];let s=n.length-1;for(let u=e[r]+1;u!=0;u=i[u-1]){for(o.push(n[u-1]);s>=u;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);o.reverse(),c.sort((u,l)=>u.claim_order-l.claim_order);for(let u=0,l=0;u<c.length;u++){for(;l<o.length&&c[u].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(c[u],f)}}function R(t,n){if(w){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function dt(t,n,e){w&&!e?R(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function V(t){return document.createElement(t)}function X(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function ht(){return S(" ")}function mt(){return S("")}function pt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function yt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,i,r=!1){Z(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(n(s)){const u=e(s);return u===void 0?t.splice(c,1):t[c]=u,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(n(s)){const u=e(s);return u===void 0?t.splice(c,1):t[c]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function T(t,n,e,i){return P(t,r=>r.nodeName===n,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];e[s.name]||o.push(s.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(n))}function gt(t,n,e){return T(t,n,e,V)}function xt(t,n,e){return T(t,n,e,X)}function tt(t,n){return P(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function bt(t){return tt(t," ")}function $t(t,n){n=""+n,t.data!==n&&(t.data=n)}function wt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function vt(t,n){return new t(n)}let y;function p(t){y=t}function q(){if(!y)throw new Error("Function called outside component initialization");return y}function Et(t){q().$$.on_mount.push(t)}function Nt(t){q().$$.after_update.push(t)}const h=[],M=[];let m=[];const k=[],z=Promise.resolve();let E=!1;function D(){E||(E=!0,z.then(F))}function St(){return D(),z}function N(t){m.push(t)}const v=new Set;let d=0;function F(){if(d!==0)return;const t=y;do{try{for(;d<h.length;){const n=h[d];d++,p(n),nt(n.$$)}}catch(n){throw h.length=0,d=0,n}for(p(null),h.length=0,d=0;M.length;)M.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];v.has(e)||(v.add(e),e())}m.length=0}while(h.length);for(;k.length;)k.pop()();E=!1,v.clear(),p(t)}function nt(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}function et(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const b=new Set;let _;function At(){_={r:0,c:[],p:_}}function jt(){_.r||g(_.c),_=_.p}function it(t,n){t&&t.i&&(b.delete(t),t.i(n))}function Ct(t,n,e,i){if(t&&t.o){if(b.has(t))return;b.add(t),_.c.push(()=>{b.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Mt(t){t&&t.c()}function kt(t,n){t&&t.l(n)}function rt(t,n,e,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(n,e),i||N(()=>{const c=t.$$.on_mount.map(B).filter(L);t.$$.on_destroy?t.$$.on_destroy.push(...c):g(c),t.$$.on_mount=[]}),o.forEach(N)}function ct(t,n){const e=t.$$;e.fragment!==null&&(et(e.after_update),g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(h.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Bt(t,n,e,i,r,o,c,s=[-1]){const u=y;p(t);const l=t.$$={fragment:null,ctx:[],props:o,update:$,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(u?u.$$.context:[])),callbacks:C(),dirty:s,skip_bound:!1,root:n.target||u.$$.root};c&&c(l.root);let f=!1;if(l.ctx=e?e(t,n.props||{},(a,x,...A)=>{const j=A.length?A[0]:x;return l.ctx&&r(l.ctx[a],l.ctx[a]=j)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](j),f&&ut(t,a)),x}):[],l.update(),f=!0,g(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){J();const a=Y(n.target);l.fragment&&l.fragment.l(a),a.forEach(U)}else l.fragment&&l.fragment.c();n.intro&&it(t.$$.fragment),rt(t,n.target,n.anchor,n.customElement),K(),F()}p(u)}class Lt{$destroy(){ct(this,1),this.$destroy=$}$on(n,e){if(!L(e))return $;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!I(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{rt as A,ct as B,ot as C,ft as D,_t as E,at as F,R as G,$ as H,st as I,X as J,xt as K,pt as L,g as M,Lt as S,ht as a,dt as b,bt as c,Ct as d,mt as e,jt as f,it as g,U as h,Bt as i,Nt as j,V as k,gt as l,Y as m,yt as n,Et as o,wt as p,S as q,tt as r,lt as s,St as t,$t as u,At as v,M as w,vt as x,Mt as y,kt as z};
