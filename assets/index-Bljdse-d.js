(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const l=document.getElementById("projects-container");async function p(){try{const o=await fetch("projects.json");if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);const c=await o.json();u(c.projects)}catch(o){console.error("Could not load projects:",o),l.innerHTML='<p class="error-message">Failed to load projects. Please try again later.</p>'}}function u(o){l.innerHTML=o.map((t,s)=>`
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
  `).join(""),document.querySelectorAll(".project-card").forEach(t=>{t.addEventListener("click",s=>{const e=t.getBoundingClientRect(),r=s.clientX-e.left,n=s.clientY-e.top,i=document.createElement("div");i.classList.add("ripple"),i.style.left=`${r}px`,i.style.top=`${n}px`,t.appendChild(i);const d=t.getAttribute("data-index"),a=o[d];setTimeout(()=>{i.remove(),console.log("Navigating to "+a.link),window.location.href=a.link},600)})})}p();
