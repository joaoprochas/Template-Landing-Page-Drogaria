const serviceBtn = document.querySelector(".service-container h1");
const serviceContainer = document.querySelector(".services");

serviceBtn.addEventListener("click", ()=>{
    serviceContainer.classList.toggle("active");
})