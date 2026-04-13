"use strict";exports.id=935,exports.ids=[935],exports.modules={71872:(e,a,o)=>{o.d(a,{siteConfig:()=>i});let i={name:"BigBets Studio",logoPath:"/photos/logo.png",shortDescription:"Podcast and video recording studio in Crossing Republik, Ghaziabad — book online, record with pro audio and multi-cam switching.",phone:"8368871848",phoneE164:"918368871848",phoneDisplay:"+91 83688 71848",email:"contact.bigbetsai@gmail.com",whatsappE164:"918368871848",address:{line1:"803B Tower 2A, Panchsheel Wellington",line2:"Crossing Republik, Ghaziabad",postal:"UP 201016",full:"803B Tower 2A, Panchsheel Wellington, Crossing Republik, Ghaziabad, UP 201016",mapsSearchUrl:"https://www.google.com/maps/search/?api=1&query=803B+Tower+2A+Panchsheel+Wellington+Crossing+Republik+Ghaziabad",mapsEmbedUrl:"https://maps.google.com/maps?q=803B+Tower+2A,+Panchsheel+Wellington,+Crossing+Republik,+Ghaziabad,+201016&t=&z=15&ie=UTF8&iwloc=&output=embed"},equipment:["ATEM Mini Pro"],equipmentDetails:["Blackmagic ATEM Mini Pro","Studio condenser & dynamic microphones","4K camera pipeline with professional framing","Acoustic treatment & sound-isolated recording space","Studio lighting (soft LED / key-fill)","Headphones & audio interface for monitoring"],gallery:[{src:"/photos/studio-1.jpeg",alt:"Podcast microphones and studio desk at BigBets Studio",caption:"Recording desk & microphones"},{src:"/photos/studio-2.jpeg",alt:"Professional microphone close-up in treated studio",caption:"Vocal capture"},{src:"/photos/studio-3.jpeg",alt:"Podcast recording studio interior with lighting",caption:"Studio interior"},{src:"/photos/studio-4.jpeg",alt:"Video and podcast production setup",caption:"Production setup"}],social:{instagram:"https://www.instagram.com/",youtube:"https://www.youtube.com/",twitter:"https://twitter.com/"},urls:{booking:"/booking"}}},540:(e,a,o)=>{o.d(a,{bg:()=>n,e1:()=>l,uW:()=>r,vp:()=>t});var i=o(87070);let s="[api]";function t(e,a,o,i){void 0!==i?console.error(`${s} ${e} ${a} — ${o}`,i):console.error(`${s} ${e} ${a} — ${o}`)}function n(e,a){return i.NextResponse.json({success:!1,message:e,error:e},{status:a})}function r(e,a=200){return i.NextResponse.json({success:!0,...e},{status:a})}async function l(e){try{let a=await e.json();return{ok:!0,data:a}}catch{return{ok:!1,response:n("Invalid or empty JSON body.",400)}}}},95456:(e,a,o)=>{o.d(a,{L:()=>l});var i=o(53797),s=o(13538),t=o(69402);let n=(()=>{let e=Number(process.env.JWT_PROFILE_REFRESH_MS);return Number.isFinite(e)&&e>0?e:3e5})();function r(e,a){if(!e)return a;let o=e.toLowerCase().trim();return!!(a||(process.env.ADMIN_EMAILS||"").split(",").map(e=>e.trim().toLowerCase()).filter(Boolean).includes(o))}let l={trustHost:!0,useSecureCookies:process.env.NEXTAUTH_URL?.startsWith("https://")===!0,debug:!1,providers:[(0,i.Z)({id:"email-otp",name:"email-otp",credentials:{email:{label:"Email",type:"email"},otpLoginToken:{label:"Login token",type:"text"}},async authorize(e){let a=e?.email?.toLowerCase().trim(),o=e?.otpLoginToken?.trim();if(!a||!o||!await (0,t.Q)(a,o))return null;let i=await s._.user.findUnique({where:{email:a}});return i?{id:i.id,name:i.name,email:i.email,image:i.image??void 0,isAdmin:r(a,i.isAdmin)}:null}})],callbacks:{async jwt({token:e,user:a,trigger:o}){if(a)return a.email&&(e.email=a.email.toLowerCase().trim()),a.id&&(e.id=a.id),e.isAdmin=!!a.isAdmin,e.profileRefreshedAt=Date.now(),e;let i="string"==typeof e.email?e.email:void 0;if(!i)return e;let t=e.profileRefreshedAt,l="number"==typeof t?Date.now()-t:Number.POSITIVE_INFINITY;if(!("update"===o||l>n))return e;let d=await s._.user.findUnique({where:{email:i},select:{id:!0,isAdmin:!0}});return d?(e.id=d.id,e.isAdmin=r(i,d.isAdmin)):(delete e.id,e.isAdmin=r(i,!1)),e.profileRefreshedAt=Date.now(),e},session:async({session:e,token:a})=>(e.user&&(e.user.id=a.id,e.user.isAdmin=!!a.isAdmin),e),async redirect({url:e,baseUrl:a}){if(e.startsWith("/"))return`${a}${e}`;try{let o=new URL(e),i=new URL(a);if(o.origin===a)return e;if(("localhost"===o.hostname||"127.0.0.1"===o.hostname)&&("localhost"===i.hostname||"127.0.0.1"===i.hostname))return`${i.origin}${o.pathname}${o.search}`}catch{}return`${a}/dashboard`}},pages:{signIn:"/auth/signin",error:"/auth/error"},session:{strategy:"jwt",maxAge:86400,updateAge:3600},secret:process.env.NEXTAUTH_SECRET||process.env.AUTH_SECRET}},24461:(e,a,o)=>{o.d(a,{Wp:()=>u,jJ:()=>r});var i=o(55245),s=o(71872);function t(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}let n=i.createTransport({host:process.env.EMAIL_HOST||"smtp.gmail.com",port:Number(process.env.EMAIL_PORT)||587,secure:!1,auth:{user:process.env.EMAIL_USER,pass:process.env.EMAIL_PASS}});async function r(e){if(!process.env.EMAIL_USER||!process.env.EMAIL_PASS){console.warn("[email] Skipping booking confirmation email: EMAIL_USER or EMAIL_PASS not configured");return}let a=`${function(){let e=process.env.NEXT_PUBLIC_SITE_URL?.trim()||process.env.NEXT_PUBLIC_BASE_URL?.trim()||process.env.NEXTAUTH_URL?.trim()||"";if(e)return e.replace(/\/$/,"");if(process.env.VERCEL_URL){let e=process.env.VERCEL_URL.replace(/^https?:\/\//,"");return`https://${e}`}return"http://localhost:3000"}()}/dashboard`,o=`
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #0a0a0a; margin: 0; padding: 20px; }
      .container { max-width: 560px; margin: 0 auto; background: #111; border: 1px solid #222; border-radius: 16px; overflow: hidden; }
      .header { background: linear-gradient(135deg, #0a0a0a, #111111); padding: 32px; text-align: center; border-bottom: 2px solid #27272a; }
      .logo { font-size: 28px; font-weight: 900; color: #fafafa; letter-spacing: -1px; }
      .confirmed-badge { background: #fafafa; color: #000000; font-size: 11px; letter-spacing: 2px; font-weight: 700; padding: 4px 12px; border-radius: 20px; display: inline-block; margin-top: 12px; }
      .body { padding: 40px 32px; }
      .title { color: #fff; font-size: 22px; font-weight: 700; text-align: center; margin-bottom: 8px; }
      .subtitle { color: #888; font-size: 14px; text-align: center; margin-bottom: 32px; }
      .booking-card { background: #1a1a1a; border: 1px solid #333; border-radius: 12px; padding: 24px; }
      .booking-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #222; }
      .booking-row:last-child { border-bottom: none; }
      .row-label { color: #888; font-size: 13px; }
      .row-value { color: #fff; font-size: 13px; font-weight: 600; }
      .amount-row { background: #0a0a0a; border: 1px solid #27272a; border-radius: 8px; padding: 16px; margin-top: 16px; display: flex; justify-content: space-between; }
      .amount-label { color: #a1a1aa; font-size: 14px; }
      .amount-value { color: #fafafa; font-size: 18px; font-weight: 900; }
      .cta { text-align: center; margin-top: 32px; }
      .cta-btn { background: #fafafa; color: #000000; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 700; font-size: 14px; display: inline-block; border: 1px solid #e4e4e7; }
      .footer { background: #0a0a0a; padding: 24px 32px; text-align: center; border-top: 1px solid #222; }
      .footer-text { color: #555; font-size: 11px; line-height: 1.6; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <div class="logo">BigBets Studio</div>
        <div class="confirmed-badge">BOOKING CONFIRMED</div>
      </div>
      <div class="body">
        <div class="title">You're all set, ${t(e.userName)}!</div>
        <div class="subtitle">Your podcast session has been confirmed. See you at the studio!</div>
        
        <div class="booking-card">
          <div class="booking-row">
            <span class="row-label">Booking ID</span>
            <span class="row-value">#${e.bookingId.slice(-8).toUpperCase()}</span>
          </div>
          <div class="booking-row">
            <span class="row-label">Package</span>
            <span class="row-value">${e.packageName}</span>
          </div>
          <div class="booking-row">
            <span class="row-label">Date</span>
            <span class="row-value">${e.date}</span>
          </div>
          <div class="booking-row">
            <span class="row-label">Time</span>
            <span class="row-value">${e.timeSlot}</span>
          </div>
          <div class="booking-row">
            <span class="row-label">Location</span>
            <span class="row-value">803B Tower2A, Crossing Republik, Ghaziabad</span>
          </div>
        </div>
        
        <div class="amount-row">
          <span class="amount-label">Amount Paid</span>
          <span class="amount-value">₹${e.amount.toLocaleString("en-IN")}</span>
        </div>
        
        <div class="cta">
          <a href="${a}" class="cta-btn">View My Booking</a>
        </div>
      </div>
      <div class="footer">
        <div class="footer-text">
          803B Tower2A Panchsheel Wellington, Crossing Republik, Ghaziabad<br>
          ${s.siteConfig.email}<br><br>
          Need to reschedule? Contact us at least 24 hours before your session.
        </div>
      </div>
    </div>
  </body>
  </html>
  `,i=[`${s.siteConfig.name} — booking confirmed`,"",`Hi ${e.userName},`,"",`Booking reference: #${e.bookingId.slice(-8).toUpperCase()}`,`Package: ${e.packageName}`,`Date: ${e.date}`,`Time: ${e.timeSlot}`,`Amount paid: ₹${e.amount.toLocaleString("en-IN")}`,"",`View your booking: ${a}`,"",s.siteConfig.address.full,s.siteConfig.email].join("\n");try{await n.sendMail({from:process.env.EMAIL_FROM||`"${s.siteConfig.name}" <${s.siteConfig.email}>`,to:e.userEmail,subject:`Booking confirmed — ${e.date} \xb7 ${e.timeSlot}`,text:i,html:o}),console.log("[email] Booking confirmation sent",{to:e.userEmail,bookingId:e.bookingId})}catch(a){throw console.error("[email] Booking confirmation send failed",{to:e.userEmail,err:a}),a}}let l=`
  body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #0a0a0a; margin: 0; padding: 20px; }
  .container { max-width: 560px; margin: 0 auto; background: #111; border: 1px solid #222; border-radius: 16px; overflow: hidden; }
  .header { background: linear-gradient(135deg, #0a0a0a, #111111); padding: 28px; text-align: center; border-bottom: 1px solid #27272a; }
  .logo { font-size: 24px; font-weight: 900; color: #fafafa; letter-spacing: -1px; }
  .badge { background: #27272a; color: #a1a1aa; font-size: 11px; letter-spacing: 2px; font-weight: 700; padding: 4px 12px; border-radius: 20px; display: inline-block; margin-top: 12px; }
  .body { padding: 36px 28px; }
  .title { color: #fff; font-size: 20px; font-weight: 700; text-align: center; margin-bottom: 10px; }
  .subtitle { color: #888; font-size: 14px; text-align: center; margin-bottom: 28px; line-height: 1.5; }
  .booking-card { background: #1a1a1a; border: 1px solid #333; border-radius: 12px; padding: 20px; }
  .booking-row { display: flex; justify-content: space-between; gap: 12px; padding: 10px 0; border-bottom: 1px solid #222; }
  .booking-row:last-child { border-bottom: none; }
  .row-label { color: #888; font-size: 13px; flex-shrink: 0; }
  .row-value { color: #fff; font-size: 13px; font-weight: 600; text-align: right; }
  .footer { background: #0a0a0a; padding: 22px 28px; text-align: center; border-top: 1px solid #222; }
  .footer-text { color: #555; font-size: 11px; line-height: 1.6; }
`;async function d(e,a){let o={name:t(e.userName),email:t(e.userEmail),pkg:t(e.packageName),date:t(e.dateFormatted),time:t(e.timeSlot),ref:t(e.bookingRef)},i=`₹${e.amount.toLocaleString("en-IN")}`,r=`
  <!DOCTYPE html>
  <html>
  <head><meta charset="utf-8"><style>${l}</style></head>
  <body>
    <div class="container">
      <div class="header">
        <div class="logo">BigBets Studio</div>
        <div class="badge">BOOKING CANCELLED</div>
      </div>
      <div class="body">
        <div class="title">Your booking has been cancelled</div>
        <div class="subtitle">Hi ${o.name}, we've cancelled your session as requested. If this was a mistake, you can book a new slot anytime.</div>
        <div class="booking-card">
          <div class="booking-row"><span class="row-label">Reference</span><span class="row-value">#${o.ref}</span></div>
          <div class="booking-row"><span class="row-label">Package</span><span class="row-value">${o.pkg}</span></div>
          <div class="booking-row"><span class="row-label">Date</span><span class="row-value">${o.date}</span></div>
          <div class="booking-row"><span class="row-label">Time</span><span class="row-value">${o.time}</span></div>
          <div class="booking-row"><span class="row-label">Amount (record)</span><span class="row-value">${i}</span></div>
          <div class="booking-row"><span class="row-label">Cancelled at</span><span class="row-value">${t(a)}</span></div>
        </div>
        <div class="subtitle" style="margin-top:24px;margin-bottom:0;text-align:left;">
          <strong style="color:#e4e4e7;">Next steps</strong><br/>
          Browse packages on our site and pick a new date, or reply to this thread if you need help.
        </div>
      </div>
      <div class="footer">
        <div class="footer-text">
          803B Tower2A Panchsheel Wellington, Crossing Republik, Ghaziabad<br/>
          ${t(s.siteConfig.email)}
        </div>
      </div>
    </div>
  </body>
  </html>`,d=[`Hi ${e.userName}, your booking has been cancelled.`,"",`Reference: #${e.bookingRef}`,`Package: ${e.packageName}`,`Date: ${e.dateFormatted}`,`Time: ${e.timeSlot}`,`Amount (record): ${i}`,`Cancelled at: ${a}`,"","You can book again anytime on our website.","",s.siteConfig.email].join("\n");await n.sendMail({from:process.env.EMAIL_FROM||`"${s.siteConfig.name}" <${s.siteConfig.email}>`,to:e.userEmail,subject:"Your Booking Has Been Cancelled",text:d,html:r})}async function c(e,a,o){let i={userEmail:t(e.userEmail),userName:t(e.userName),pkg:t(e.packageName),date:t(e.dateFormatted),time:t(e.timeSlot),ref:t(e.bookingRef),at:t(a)},r=`
  <!DOCTYPE html>
  <html>
  <head><meta charset="utf-8"><style>${l}</style></head>
  <body>
    <div class="container">
      <div class="header">
        <div class="logo">BigBets Studio</div>
        <div class="badge">OWNER NOTICE</div>
      </div>
      <div class="body">
        <div class="title">Booking cancelled by user</div>
        <div class="subtitle">A customer cancelled their booking from the dashboard.</div>
        <div class="booking-card">
          <div class="booking-row"><span class="row-label">User email</span><span class="row-value">${i.userEmail}</span></div>
          <div class="booking-row"><span class="row-label">User name</span><span class="row-value">${i.userName}</span></div>
          <div class="booking-row"><span class="row-label">Reference</span><span class="row-value">#${i.ref}</span></div>
          <div class="booking-row"><span class="row-label">Package</span><span class="row-value">${i.pkg}</span></div>
          <div class="booking-row"><span class="row-label">Date</span><span class="row-value">${i.date}</span></div>
          <div class="booking-row"><span class="row-label">Time</span><span class="row-value">${i.time}</span></div>
          <div class="booking-row"><span class="row-label">Cancellation time (UTC)</span><span class="row-value">${i.at}</span></div>
        </div>
      </div>
      <div class="footer">
        <div class="footer-text">Automated message — do not reply unless you use this inbox for support.</div>
      </div>
    </div>
  </body>
  </html>`,d=`Booking cancelled by user

User email: ${e.userEmail}
User name: ${e.userName}
Reference: #${e.bookingRef}
Package: ${e.packageName}
Date: ${e.dateFormatted}
Time: ${e.timeSlot}
Cancellation timestamp (UTC): ${a}`;await n.sendMail({from:process.env.EMAIL_FROM||`"${s.siteConfig.name}" <${s.siteConfig.email}>`,to:o,subject:"Booking Cancelled by User",text:d,html:r})}async function p(e){if(!process.env.EMAIL_USER||!process.env.EMAIL_PASS){console.warn("[email] Skipping cancellation emails: EMAIL_USER or EMAIL_PASS not configured");return}let a=new Date().toISOString(),o=`${a} (UTC)`;try{await d(e,o)}catch(e){console.error("[email] User cancellation email failed",e)}for(let a of function(){let e=process.env.ADMIN_BOOKING_EMAIL?.split(",").map(e=>e.trim()).filter(Boolean)??[];if(e.length)return e;let a=process.env.ADMIN_EMAILS?.split(",").map(e=>e.trim()).filter(Boolean)??[];return a.length?a:[s.siteConfig.email]}())try{await c(e,o,a)}catch(e){console.error("[email] Owner cancellation email failed",{to:a,err:e})}}function u(e){p(e).catch(e=>{console.error("[email] Cancellation email batch unexpected error",e)})}},69402:(e,a,o)=>{o.d(a,{B:()=>n,Q:()=>r});var i=o(6113),s=o(13538);function t(e){return(0,i.createHash)("sha256").update(e,"utf8").digest("hex")}async function n(e){let a=(0,i.randomBytes)(32).toString("base64url"),o=t(a),n=new Date(Date.now()+12e4);return await s._.emailLoginToken.create({data:{email:e,tokenHash:o,expiresAt:n}}),a}async function r(e,a){if(!a||a.length<20)return!1;let o=t(a),n=new Date,r=await s._.emailLoginToken.findFirst({where:{email:e,tokenHash:o,used:!1,expiresAt:{gt:n}},orderBy:{createdAt:"desc"}});if(!r)return!1;let l=Buffer.from(r.tokenHash,"utf8"),d=Buffer.from(o,"utf8");return!!(l.length===d.length&&(0,i.timingSafeEqual)(l,d))&&(await s._.emailLoginToken.update({where:{id:r.id},data:{used:!0}}),!0)}},13538:(e,a,o)=>{o.d(a,{_:()=>s});var i=o(53524);let s=globalThis.prisma??new i.PrismaClient({log:["error"]})},46350:(e,a,o)=>{o.d(a,{b:()=>s});var i=o(13538);async function s(e){if(!e?.user)return null;let a=e.user.id;if(a)return a;let o=e.user.email?.toLowerCase().trim();if(!o)return null;let s=await i._.user.findUnique({where:{email:o},select:{id:!0}});return s?.id??null}}};