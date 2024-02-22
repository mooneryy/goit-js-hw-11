import{S as f,i as l}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="42472601-e2efb745d6431960b7108569a",y=document.getElementById("search-form"),g=document.getElementById("search-input"),a=document.getElementById("loader"),c=document.getElementById("gallery"),v=new f(".gallery a");y.addEventListener("submit",function(i){i.preventDefault();const s=g.value.trim();if(s===""){l.error({title:"Error",message:"Please enter a search term!"});return}a.style.display="block",c.innerHTML="",E(s).then(r=>{setTimeout(()=>{a.style.display="none"},1500),r.hits.length===0?l.warning({title:"No results",message:"Sorry, there are no images matching your search.Please try again!"}):L(r.hits)}).catch(r=>{a.style.display="none",l.error({title:"Error",message:"An error occurred while fetching images. Please try again!"}),console.error("Error fetching images:",r)})});function E(i){const s=`https://pixabay.com/api/?key=${h}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(r=>{if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return r.json()})}function L(i){const s=i.map(({webformatURL:e,largeImageURL:t,tags:o,likes:d,views:u,comments:m,downloads:p})=>`<div class="card">
      <a href="${t}" data-lightbox="gallery" data-title="${o}">
        <img src="${e}" alt="${o}" title="${o}"/>
      </a>
      <div class="card-border">
      <div class="param">
      <p class="title">Likes:</p>
      <p class="title">Views:</p>
      <p class="title">Comments:</p>
      <p class="title">Downloads:</p>
       </div>
        <div class="param">
      <p class="title-value">${d}</p>
      <p class="title-value">${u}</p>
      <p class="title-value">${m}</p>
      <p class="title-value">${p}</p>
       </div>
      </div>
    </div>`);c.innerHTML=s.join("");const r=c.querySelectorAll("img"),n=Array.from(r).map(e=>new Promise((t,o)=>{e.onload=t,e.onerror=o}));Promise.all(n).then(()=>{a.style.display="none"}).catch(e=>{console.error("Error loading images:",e)}),v.refresh()}
//# sourceMappingURL=commonHelpers.js.map
