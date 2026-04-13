(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[220],{1182:function(e,t,n){Promise.resolve().then(n.bind(n,85))},8030:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(2265);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&n.indexOf(e)===t).join(" ")};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let u=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:s=24,strokeWidth:u=2,absoluteStrokeWidth:c,className:l="",children:o,iconNode:d,...f}=e;return(0,r.createElement)("svg",{ref:t,...i,width:s,height:s,stroke:n,strokeWidth:c?24*Number(u)/Number(s):u,className:a("lucide",l),...f},[...d.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(o)?o:[o]])}),c=(e,t)=>{let n=(0,r.forwardRef)((n,i)=>{let{className:c,...l}=n;return(0,r.createElement)(u,{ref:i,iconNode:t,className:a("lucide-".concat(s(e)),c),...l})});return n.displayName="".concat(e),n}},3274:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(8030).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},6463:function(e,t,n){"use strict";var r=n(1169);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})},85:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(7437),s=n(2265),a=n(998),i=n(6463),u=n(3274);function c(){let{data:e,status:t,update:n}=(0,a.useSession)(),c=(0,i.useRouter)(),l=(0,i.useSearchParams)().get("next"),[o,d]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{n().finally(()=>d(!0))},[n]),(0,s.useEffect)(()=>{if(o&&"loading"!==t){if("unauthenticated"===t){c.replace("/auth/signin");return}if("authenticated"===t&&(null==e?void 0:e.user)){let t=!!e.user.isAdmin,n=t?"/admin":"/dashboard";!t&&l&&l.startsWith("/")&&!l.startsWith("//")&&!l.startsWith("/admin")&&(n=l),c.replace(n)}}},[o,t,e,c,l]),(0,r.jsx)("div",{className:"min-h-screen animated-bg flex items-center justify-center",children:(0,r.jsxs)("div",{className:"flex flex-col items-center gap-4 text-white/60",children:[(0,r.jsx)(u.Z,{className:"w-10 h-10 animate-spin text-zinc-400"}),(0,r.jsx)("p",{className:"text-sm",children:"Signing you in…"})]})})}function l(){return(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)("div",{className:"min-h-screen animated-bg flex items-center justify-center",children:(0,r.jsx)(u.Z,{className:"w-10 h-10 animate-spin text-zinc-400"})}),children:(0,r.jsx)(c,{})})}}},function(e){e.O(0,[998,971,23,744],function(){return e(e.s=1182)}),_N_E=e.O()}]);