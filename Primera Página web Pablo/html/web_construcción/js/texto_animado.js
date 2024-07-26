var contador2=0;
var contador3=0;
var contador4=0;
var contador5=0;
var contador6=0;
var contador7=0;
var intervalo2;
var intervalo3;
var intervalo4;
var intervalo5;
var intervalo6;
var intervalo7;
var array2=["I","n","i","c","i","o"];
var array3=["N","o","s","o","t","r","o","s"];
var array4=["P","r","o","d","u","c","t","o","s"];
var array5=["R","e","s","e","r","v","a"];
var array6=["C","R","E","P","A","S:"];
var array7=["P","O","S","T","R","E","M","U","S"," ","D","E","L","I","C","I","O","S","U","S"];
var inicio=document.querySelector(".i");
var sobre=document.querySelector(".s");
var productos=document.querySelector(".p");
var reserva=document.querySelector(".r");
var letrillas=document.getElementById("logo_letra");
var letrillas2=document.getElementById("letra2");
function pintar2() {
    inicio.innerHTML=inicio.innerHTML+array2[contador2];
    contador2++;
    if (contador2==array2.length) {
        clearInterval(intervalo2);
    }
}
function animar2() {
    intervalo2=setInterval(pintar2,150);
}
function pintar3() {
    sobre.innerHTML=sobre.innerHTML+array3[contador3];
    contador3++;
    if (contador3==array3.length) {
        clearInterval(intervalo3);
    }
}
function animar3() {
    intervalo3=setInterval(pintar3,150);
}
function pintar4() {
    productos.innerHTML=productos.innerHTML+array4[contador4];
    contador4++;
    if (contador4==array4.length) {
        clearInterval(intervalo4);
    }
}
function animar4() {
    intervalo4=setInterval(pintar4,150);
}
function pintar5() {
    reserva.innerHTML=reserva.innerHTML+array5[contador5];
    contador5++;
    if (contador5==array5.length) {
        clearInterval(intervalo5);
    }
}
function animar5() {
    intervalo5=setInterval(pintar5,150);
}
function pintar6() {
    letrillas.innerHTML=letrillas.innerHTML+array6[contador6];
    contador6++;
    if (contador6==array6.length) {
        clearInterval(intervalo6);
    }
}
function animar6() {
    intervalo6=setInterval(pintar6,150);
}
function pintar7() {
    letrillas2.innerHTML=letrillas2.innerHTML+array7[contador7];
    contador7++;
    if (contador7==array7.length) {
        clearInterval(intervalo7);
    }
}
function animar7() {
    intervalo7=setInterval(pintar7,150);
}
window.addEventListener("load",animar2);
window.addEventListener("load",animar3);
window.addEventListener("load",animar4);
window.addEventListener("load",animar5);
window.addEventListener("load",animar6);
window.addEventListener("load",animar7);