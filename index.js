import{a as f,S as m,i as n}from"./assets/vendor-BLPZKqeQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="50342970-c77e3a3b99b31ba7a45091d0e",g="https://pixabay.com/api/";async function h(a){try{return(await f.get(g,{params:{key:y,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}})).data}catch(r){throw console.error("Sorry, there are no images matching your search query. Please try again!",r),r}}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(a){const r=a.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:i,comments:d,downloads:p})=>`
    <div class="photo-card">
      <a class="gallery__item" href="${o}">
        <img class="gallery__image" src="${s}" alt="${e}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${t}</p>
        <p><b>Views:</b> ${i}</p>
        <p><b>Comments:</b> ${d}</p>
        <p><b>Downloads:</b> ${p}</p>
      </div>
    </div>
  `).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function q(){c.innerHTML=""}function v(){l.classList.remove("hidden")}function w(){l.classList.add("hidden")}const u=document.querySelector("#search-form"),S=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async a=>{a.preventDefault();const r=S.value.trim();if(!r){n.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}q(),v();try{const o=(await h(r)).hits;o.length===0?n.info({title:"No results",message:"No images found for this query.",position:"topRight"}):L(o)}catch(s){n.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"}),console.error(s)}finally{w()}});
//# sourceMappingURL=index.js.map
