import{S as d,i as n}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="42472601-e2efb745d6431960b7108569a";function h(i){const o=`https://pixabay.com/api/?key=${g}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(r=>{if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return r.json()})}const y=document.getElementById("loader"),c=document.getElementById("gallery"),E=new d(".gallery a");function v(i){const o=i.map(({webformatURL:e,largeImageURL:t,tags:s,likes:m,views:u,comments:p,downloads:f})=>`<div class="card">
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
      <p class="title-value">${m}</p>
      <p class="title-value">${u}</p>
      <p class="title-value">${p}</p>
      <p class="title-value">${f}</p>
       </div>
      </div>
    </div>`);c.innerHTML=o.join("");const r=c.querySelectorAll("img"),a=Array.from(r).map(e=>new Promise((t,s)=>{e.onload=t,e.onerror=s}));Promise.all(a).then(()=>{y.style.display="none"}).catch(e=>{console.error("Error loading images:",e)}),E.refresh()}const l=document.getElementById("loader"),L=document.getElementById("gallery");new d(".gallery a");const b=document.getElementById("search-form"),$=document.getElementById("search-input");b.addEventListener("submit",function(i){i.preventDefault();const o=$.value.trim();if(o===""){n.error({title:"Error",message:"Please enter a search term!",theme:"dark",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb",iconUrl:"../img/error.svg"});return}l.style.display="block",L.innerHTML="",h(o).then(r=>{setTimeout(()=>{l.style.display="none"},1500),r.hits.length===0?n.warning({title:"No results",message:"Sorry, there are no images matching your search.Please try again!",theme:"dark",position:"topRight",backgroundColor:"#ffa000",messageColor:"#fafafb",iconUrl:"../img/caution.svg"}):v(r.hits)}).catch(r=>{l.style.display="none",n.error({title:"Error",message:"An error occurred while fetching images. Please try again!"}),console.error("Error fetching images:",r)})});
//# sourceMappingURL=commonHelpers.js.map
