(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[590],{3366:function(e,t,r){Promise.resolve().then(r.bind(r,3212))},8030:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(2265);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:i=24,strokeWidth:c=2,absoluteStrokeWidth:o,className:l="",children:u,iconNode:d,...f}=e;return(0,n.createElement)("svg",{ref:t,...s,width:i,height:i,stroke:r,strokeWidth:o?24*Number(c)/Number(i):c,className:a("lucide",l),...f},[...d.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(u)?u:[u]])}),o=(e,t)=>{let r=(0,n.forwardRef)((r,s)=>{let{className:o,...l}=r;return(0,n.createElement)(c,{ref:s,iconNode:t,className:a("lucide-".concat(i(e)),o),...l})});return r.displayName="".concat(e),r}},5137:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},6780:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]])},7138:function(e,t,r){"use strict";r.d(t,{default:function(){return i.a}});var n=r(231),i=r.n(n)},6463:function(e,t,r){"use strict";var n=r(1169);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})},3212:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(7437),i=r(2265),a=r(7138),s=r(6463),c=r(6780),o=r(5137);let l={Configuration:"Check NEXTAUTH_URL and NEXTAUTH_SECRET in .env.local. Restart the dev server after changes.",AccessDenied:"Sign-in was cancelled or blocked. Try again with a fresh code from your email.",CredentialsSignin:"That sign-in link or code was invalid or expired. Request a new OTP.",SessionRequired:"You need to sign in to view this page.",Default:"Something went wrong during sign-in. Try again or request a new email code."};function u(){let e=(0,s.useSearchParams)().get("error")||"Default",t=l[e]||l.Default;return(0,n.jsxs)("div",{className:"w-full max-w-md glass border border-zinc-800 rounded-3xl p-8 text-center",children:[(0,n.jsx)("div",{className:"w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center mx-auto mb-5",children:(0,n.jsx)(c.Z,{className:"w-7 h-7 text-zinc-400"})}),(0,n.jsx)("h1",{className:"heading-page mb-2",children:"Sign-in problem"}),"Default"!==e&&(0,n.jsx)("p",{className:"mb-3 break-all font-sans text-sm text-zinc-400",children:e}),(0,n.jsx)("p",{className:"mb-6 text-sm leading-relaxed text-zinc-500",children:t}),(0,n.jsxs)(a.default,{href:"/auth/signin",className:"inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition-colors text-sm font-medium",children:[(0,n.jsx)(o.Z,{className:"w-4 h-4"}),"Back to sign in"]})]})}function d(){return(0,n.jsx)(i.Suspense,{fallback:(0,n.jsx)("div",{className:"w-full max-w-md glass border border-white/8 rounded-3xl p-8 text-center text-white/40 text-sm",children:"Loading…"}),children:(0,n.jsx)(u,{})})}}},function(e){e.O(0,[231,971,23,744],function(){return e(e.s=3366)}),_N_E=e.O()}]);