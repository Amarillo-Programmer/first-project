var classes = ["f0", "f1", "f2", "f3", "f4"];
var classIndex = 2;
const aumentar_letra=document.getElementById("aumentar");
const disminuir_letra=document.getElementById("disminuir");
const restablecer=document.getElementById("restablecer");
const legibilidad=document.getElementById("fuente");
const subrayar=document.getElementById("subrayar");
const links=document.querySelectorAll("a");
function changeClass(previous, next) {
    if(previous != next) {
      var htmlElement = document.querySelector('html')
      htmlElement.classList.remove(classes[previous]);
      htmlElement.classList.add(classes[next]);
    }
}
function aumentar_tamaño() {
    let previousClass = classIndex;
    classIndex++;
    classIndex = (classIndex == classes.length) ? classes.length - 1 : classIndex;
    changeClass(previousClass, classIndex);
}
function disminuir_tamaño() {
    let previousClass = classIndex;
    classIndex--;
    classIndex = (classIndex < 0) ? 0 : classIndex;
    changeClass(previousClass, classIndex);
}
function fuente_legible() {
    document.body.classList.toggle("franklin");
}
function subrayar_enlaces() {
    links.forEach(enlace => {
        if (enlace.style.textDecoration=="underline") 
            enlace.style.textDecoration="none"
        else enlace.style.textDecoration = 'underline';
    });
}
function restablecer_pagina() {
    document.body.classList.remove("franklin");
    links.forEach(enlace =>{
        enlace.style.textDecoration="none"
    })
    let previousClass = classIndex;
    classIndex = 2;
    changeClass(previousClass, classIndex);
}
aumentar_letra.addEventListener("click",aumentar_tamaño);
disminuir_letra.addEventListener("click",disminuir_tamaño);
legibilidad.addEventListener("click",fuente_legible);
subrayar.addEventListener("click",subrayar_enlaces);
restablecer.addEventListener("click",restablecer_pagina);