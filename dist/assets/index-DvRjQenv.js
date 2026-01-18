(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=[{title:"Speed Reader App",description:"Allows users to speed up their WPM count by pasting text that they want to consume fast. Efficient and focused.",image:"/speed_reader_screenshot.png",link:"https://flowthis.github.io/speed-reader-app/",tag:"Productivity"}],d=document.getElementById("projects-container");function p(){d.innerHTML=l.map((n,r)=>`
    <article class="project-card" data-index="${r}">
      <div class="card-image-wrapper">
        <img src="${n.image}" alt="${n.title}" class="card-image" />
      </div>
      <div class="card-content">
        <h2 class="project-title">${n.title}</h2>
        <p class="project-desc">${n.description}</p>
        <div class="card-footer">
          <span class="tag">${n.tag}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-primary)">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </article>
  `).join(""),u()}function u(){document.querySelectorAll(".project-card").forEach(r=>{r.addEventListener("click",s=>{const o=r.getBoundingClientRect(),e=s.clientX-o.left,t=s.clientY-o.top,i=document.createElement("div");i.classList.add("click-ripple"),i.style.left=`${e}px`,i.style.top=`${t}px`,i.style.width=`${o.width}px`,i.style.height=`${o.width}px`,i.style.marginTop=`-${o.width/2}px`,i.style.marginLeft=`-${o.width/2}px`,r.appendChild(i);const a=r.getAttribute("data-index"),c=l[a];setTimeout(()=>{i.remove(),console.log("Navigating to "+c.link),window.location.href=c.link},600)})})}p();
