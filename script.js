
document.addEventListener("DOMContentLoaded",()=>{
 const t=document.querySelector(".toggle"),n=document.querySelector(".links");
 if(t)t.onclick=()=>n.classList.toggle("open");
 const page=location.pathname.split("/").pop()||"index.html";
 document.querySelectorAll(".links a").forEach(a=>{if(a.getAttribute("href")===page)a.classList.add("active")});
 const f=document.querySelector("#contact-form");
 if(f)f.addEventListener("submit",e=>{e.preventDefault();document.querySelector("#msg").textContent="Thank you. The enquiry form is ready to be connected to your preferred email/form service.";});
});
