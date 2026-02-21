(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();const p=document.getElementById("projects-container");async function h(){try{const o=await fetch(`projects.json?v=${new Date().getTime()}`);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);const r=await o.json();y(r.projects)}catch(o){console.error("Could not load projects:",o),p.innerHTML='<p class="error-message">Failed to load projects. Please try again later.</p>'}}function y(o){p.innerHTML=o.map((t,s)=>`
    <article class="project-card" data-index="${s}">
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
  `).join(""),document.querySelectorAll(".project-card").forEach(t=>{t.addEventListener("click",s=>{const e=t.getBoundingClientRect(),n=s.clientX-e.left,c=s.clientY-e.top,i=document.createElement("div");i.classList.add("ripple"),i.style.left=`${n}px`,i.style.top=`${c}px`,t.appendChild(i);const f=t.getAttribute("data-index"),d=o[f];setTimeout(()=>{i.remove(),console.log("Navigating to "+d.link),window.location.href=d.link},600)})})}h();const g=document.querySelector(".background-globes");window.addEventListener("scroll",()=>{window.requestAnimationFrame(()=>{const o=window.scrollY,r=(document.documentElement.scrollHeight||document.body.scrollHeight)-window.innerHeight;if(r<=0)return;const t=o/r,s=85-t*30,e=30+t*60;g.style.setProperty("--globe-2-x",`${s}%`),g.style.setProperty("--globe-2-y",`${e}%`)})});const a=document.getElementById("theme-toggle"),u=a.querySelector(".toggle-icon"),m=a.querySelector(".toggle-text"),v="🌙",w="☀️";function l(o){o?(document.body.classList.add("light-mode"),u.textContent=w,m.textContent="Lunch Service"):(document.body.classList.remove("light-mode"),u.textContent=v,m.textContent="Dinner Service")}const L=localStorage.getItem("theme");l(L==="light");a.addEventListener("click",()=>{document.body.classList.toggle("light-mode")?(l(!0),localStorage.setItem("theme","light")):(l(!1),localStorage.setItem("theme","dark"))});
