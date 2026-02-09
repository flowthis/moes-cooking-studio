(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const d=document.getElementById("projects-container");async function u(){try{const r=await fetch(`projects.json?v=${new Date().getTime()}`);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);const s=await r.json();g(s.projects)}catch(r){console.error("Could not load projects:",r),d.innerHTML='<p class="error-message">Failed to load projects. Please try again later.</p>'}}function g(r){d.innerHTML=r.map((t,n)=>`
    <article class="project-card" data-index="${n}">
      <div class="card-image-wrapper">
        <img 
          src="${t.image}" 
          alt="${t.title}" 
          class="card-image" 
          style="object-position: ${t.objectPosition||"center"}"
        >
      </div>
      <div class="card-content">
        <div class="card-header">
          <span class="project-tag">${t.tag}</span>
          <h2 class="project-title">${t.title}</h2>
        </div>
        <p class="project-description">${t.description}</p>
      </div>
    </article>
  `).join(""),document.querySelectorAll(".project-card").forEach(t=>{t.addEventListener("click",n=>{const e=t.getBoundingClientRect(),o=n.clientX-e.left,c=n.clientY-e.top,i=document.createElement("div");i.classList.add("ripple"),i.style.left=`${o}px`,i.style.top=`${c}px`,t.appendChild(i);const p=t.getAttribute("data-index"),a=r[p];setTimeout(()=>{i.remove(),console.log("Navigating to "+a.link),window.location.href=a.link},600)})})}u();const l=document.querySelector(".background-globes");window.addEventListener("scroll",()=>{window.requestAnimationFrame(()=>{const r=window.scrollY,s=(document.documentElement.scrollHeight||document.body.scrollHeight)-window.innerHeight;if(s<=0)return;const t=r/s,n=15+t*30,e=50-t*40,o=85-t*30,c=30+t*60;l.style.setProperty("--globe-1-x",`${n}%`),l.style.setProperty("--globe-1-y",`${e}%`),l.style.setProperty("--globe-2-x",`${o}%`),l.style.setProperty("--globe-2-y",`${c}%`)})});
