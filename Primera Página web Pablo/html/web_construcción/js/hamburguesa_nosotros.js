const navToggle=document.querySelector(".nav-toggle");
const navMenu=document.querySelector(".navigation");
const titulo=document.querySelector(".titulo");
const buscadora=document.querySelector(".barra-buscadora-padre");
const girar=document.querySelector(".girar");
const nosotros=document.querySelector(".nosotros");
const footer=document.querySelector(".footer");
const galeria=document.querySelector(".galerilla");
function aplastar() {
    navMenu.classList.toggle("navigation-responsive");
    titulo.classList.toggle("aplastar");
    girar.classList.toggle("aplastar");
    buscadora.classList.toggle("aplastar");
    nosotros.classList.toggle("aplastar");
    footer.classList.toggle("aplastar");
    galeria.classList.toggle("aplastar");
}
navToggle.addEventListener("click",aplastar);

// Scroll up

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 10));
    }
}


///

buttonUp = document.getElementById("button-up");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }

}