var reservar=document.getElementById("reservar");
var reiniciar=document.getElementById("reiniciar");
var form=document.getElementById("form")
function reserva() {
    var nombre=document.getElementById("nombre")
    var telefono=document.getElementById("telefono");
    var correo=document.getElementById("correo");
    var fecha=document.getElementById("fecha");
    var personas=document.getElementById("personas");
    if (nombre.value=="") {
        alert("Fill the name");
    } 
    if (telefono.value=="") {
        alert("Fill the number");
    }
    if (correo.value=="") {
        alert("Fill the email");
    }
    if (fecha.value=="") {
        alert("Fill the date");
    }
    if (personas.value=="") {
        alert("Fill the diners");
    }
}
function reinicio() {
    alert("Restarting form")
}
reservar.addEventListener("click",reserva)
reiniciar.addEventListener("click",reinicio)