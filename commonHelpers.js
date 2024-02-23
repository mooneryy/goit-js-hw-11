import{S as d,i as l}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="42472601-e2efb745d6431960b7108569a";function g(n){const o=`https://pixabay.com/api/?key=${y}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(r=>{if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return r.json()})}const h=document.getElementById("loader"),c=document.getElementById("gallery"),E=new d(".gallery a");function v(n){const o=n.map(({webformatURL:e,largeImageURL:t,tags:s,likes:u,views:m,comments:p,downloads:f})=>`<div class="card">
      <a href="${t}" data-lightbox="gallery" data-title="${s}">
        <img src="${e}" alt="${s}" title="${s}"/>
      </a>
      <div class="card-border">
      <div class="param">
      <p class="title">Likes:</p>
      <p class="title">Views:</p>
      <p class="title">Comments:</p>
      <p class="title">Downloads:</p>
       </div>
        <div class="param">
      <p class="title-value">${u}</p>
      <p class="title-value">${m}</p>
      <p class="title-value">${p}</p>
      <p class="title-value">${f}</p>
       </div>
      </div>
    </div>`);c.innerHTML=o.join("");const r=c.querySelectorAll("img"),i=Array.from(r).map(e=>new Promise((t,s)=>{e.onload=t,e.onerror=s}));Promise.all(i).then(()=>{h.style.display="none"}).catch(e=>{console.error("Error loading images:",e)}),E.refresh()}const a=document.getElementById("loader"),L=document.getElementById("gallery");new d(".gallery a");const $=document.getElementById("search-form"),b=document.getElementById("search-input");$.addEventListener("submit",function(n){n.preventDefault();const o=b.value.trim();if(o===""){l.error({title:"Error",message:"Please enter a search term!"});return}a.style.display="block",L.innerHTML="",g(o).then(r=>{setTimeout(()=>{a.style.display="none"},1500),r.hits.length===0?l.warning({title:"No results",message:"Sorry, there are no images matching your search.Please try again!"}):v(r.hits)}).catch(r=>{a.style.display="none",l.error({title:"Error",message:"An error occurred while fetching images. Please try again!"}),console.error("Error fetching images:",r)})});
//# sourceMappingURL=commonHelpers.js.map
