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
        alert("Rellena el nombre");
    } 
    if (telefono.value=="") {
        alert("Rellena el teléfono");
    }
    if (correo.value=="") {
        alert("Rellena el correo");
    }
    if (fecha.value=="") {
        alert("Rellena la fecha");
    }
    if (personas.value=="") {
        alert("Rellena los comensales");
    }
}
function reinicio() {
    alert("Reiniciando formulario")
}
reservar.addEventListener("click",reserva)
reiniciar.addEventListener("click",reinicio)