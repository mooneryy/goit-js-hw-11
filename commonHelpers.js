import{S as d,i as a}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="42472601-e2efb745d6431960b7108569a",p=document.getElementById("search-form"),h=document.getElementById("search-input"),c=document.getElementById("loader"),l=document.getElementById("gallery"),g=new d(".gallery a");p.addEventListener("submit",function(s){s.preventDefault();const o=h.value.trim();if(o===""){a.error({title:"Error",message:"Please enter a search term!"});return}c.style.display="block",l.innerHTML="",y(o).then(r=>{setTimeout(()=>{c.style.display="none"},500),r.hits.length===0?a.warning({title:"No results",message:"Sorry, there are no images matching your search.Please try again!"}):E(r.hits)}).catch(r=>{c.style.display="none",a.error({title:"Error",message:"An error occurred while fetching images. Please try again!"}),console.error("Error fetching images:",r)})});function y(s){const o=`https://pixabay.com/api/?key=${f}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(r=>{if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return r.json()})}function E(s){const o=s.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:n,comments:u,downloads:m})=>`<div class="card">
      <a href="${i}" data-lightbox="gallery" data-title="${e}">
        <img src="${r}" alt="${e}" title="${e}"/>
      </a>
      <p>Likes: ${t}</p>
      <p>Views: ${n}</p>
      <p>Comments: ${u}</p>
      <p>Downloads: ${m}</p>
    </div>)`);l.innerHTML=o.join(""),g.refresh()}
//# sourceMappingURL=commonHelpers.js.map
