(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&f(l)}).observe(document,{childList:!0,subtree:!0});function g(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function f(e){if(e.ep)return;e.ep=!0;const o=g(e);fetch(e.href,o)}})();const d=document.querySelectorAll(".square");document.querySelectorAll(".mole");const i=document.querySelector("#time-left"),y=document.querySelector("#score"),c=document.body.querySelector("#playAgain"),u=document.body.querySelector("#stopGame"),h=document.querySelector("#difficulty");let r=0,s=i.textContent,a,p,L,m=500;function S(){d.forEach(n=>{n.classList.remove("mole")});let t=d[Math.floor(Math.random()*9)];t.classList.add("mole"),a=t.id}const q=()=>setInterval(S,m);d.forEach(t=>{t.addEventListener("mouseup",()=>{t.id===a&&(t.classList.add("catched"),setTimeout(()=>{t.classList.remove("catched")},m-100),r=r+1,y.textContent=r,a=null)})});const v=()=>{i.textContent=0,clearInterval(p),clearInterval(L),u.classList.add("hidden"),c.classList.remove("hidden"),h.classList.remove("hidden")},C=()=>{s--,i.textContent=s,s===0&&(v(),alert(`Round finished! Your final score is ${r}`))},I=()=>setInterval(C,1e3),x=()=>{const t=document.getElementsByName("difficulty");for(let n=0;n<t.length;n++)if(t[n].checked){m=parseInt(t[n].value);break}},E=()=>{x(),s=60,i.textContent=s,r=0,y.textContent=r,L=q(),p=I()};u.addEventListener("click",()=>{v()});c.addEventListener("click",()=>{u.classList.remove("hidden"),c.classList.add("hidden"),c.textContent="Play Again!",h.classList.add("hidden"),E()});