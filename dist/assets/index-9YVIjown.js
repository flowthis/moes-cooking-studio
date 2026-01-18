(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const c=[{title:"Speed Reader App",description:"Allows users to speed up their WPM count by pasting text that they want to consume fast. Efficient and focused.",image:"speed_reader_screenshot.png",link:"https://flowthis.github.io/speed-reader-app/",tag:"Productivity"},{title:"Keto Flow Coach",description:"Your personal guide to keto success. Track macros, plan meals, and stay in flow.",image:"keto_flow_recipes_screenshot.png",link:"https://keto-flow-coach.lovable.app/",tag:"Health"},{title:"SnapKey",description:"Fun Typing Tutor. Learn to type with speed and accuracy.",image:"snapkey_screenshot.png",link:"https://flowthis.github.io/snapkey/",tag:"Education"},{title:"Sauerteig Meister",description:"Dein Begleiter fürs Brotbacken. Schritt-für-Schritt-Anleitungen, Timer und hilfreiche Tipps für das perfekte Sauerteigbrot.",image:"sauerteig_meister_thumbnail.png",link:"https://sauerteig-meister.replit.app",tag:"Cooking"},{title:"Arbitrage Scanner",description:"Real-time prediction market arbitrage detection and analysis tool.",image:"arbitrage_scanner_thumbnail.png",link:"https://flowthis.github.io/prediction-market-arbitrage/",tag:"Fintech"},{title:"SipSavvy",description:"Die mobile App für Weineinsteiger. Lerne Geschmacksprofile, Aromen und die Kunst der Weinverkostung.",image:"sipsavvy_thumbnail.png",link:"https://sipsavvy.lovable.app",tag:"Education"},{title:"Kids Sushi Explorer",description:"An interactive educational app for kids to explore the world of Sushi. Built with Expo.",image:"kids_sushi_explorer_thumbnail.png",link:"https://kids-sushi-explorer.replit.app",tag:"Fun"},{title:"RoboTask",description:"Train robots with POV videos, earn crypto rewards, and shape the future of humanoid robotics.",image:"robotask_thumbnail.png",link:"https://robotask.lovable.app",tag:"AI & Crypto",objectPosition:"top"},{title:"Bassd Scho Sticker",description:"A sticker campaign for a good cause. 100% proceeds go to the Children's Hospice Bamberg.",image:"bassd_scho_thumbnail.png",link:"https://bassd-scho-spenden.lovable.app",tag:"Charity"}],p=document.getElementById("projects-container");function d(){p.innerHTML=c.map((s,o)=>`
    <article class="project-card" data-index="${o}">
      <div class="card-image-wrapper">
        <img 
          src="${s.image}" 
          alt="${s.title}" 
          class="card-image" 
          style="object-position: ${s.objectPosition||"center"}"
        />
      </div>
      <div class="card-content">
        <h2 class="project-title">${s.title}</h2>
        <p class="project-desc">${s.description}</p>
        <div class="card-footer">
          <span class="tag">${s.tag}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-primary)">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </article>
  `).join(""),u()}function u(){document.querySelectorAll(".project-card").forEach(o=>{o.addEventListener("click",n=>{const r=o.getBoundingClientRect(),e=n.clientX-r.left,t=n.clientY-r.top,i=document.createElement("div");i.classList.add("click-ripple"),i.style.left=`${e}px`,i.style.top=`${t}px`,i.style.width=`${r.width}px`,i.style.height=`${r.width}px`,i.style.marginTop=`-${r.width/2}px`,i.style.marginLeft=`-${r.width/2}px`,o.appendChild(i);const l=o.getAttribute("data-index"),a=c[l];setTimeout(()=>{i.remove(),console.log("Navigating to "+a.link),window.location.href=a.link},600)})})}d();
