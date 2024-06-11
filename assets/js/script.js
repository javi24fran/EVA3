document.getElementById("btnContraste").addEventListener("click"= cambiarContraste())
document.getElementById("btnFuente").addEventListener("click"= cambiarFuente())
document.getElementById("btnRegistrar").addEventListener("click"= validar())


function cambiarContraste() {
let ebody= document.style.backgroundcolor;
let fondo= ebody.style;

if (fondo == "black")
{ebody.style.backgroundcolor="aliceblue"}

else{
ebody.style.backgroundcolor="white"
}
}

function cambiarFuente() {
    var element = document.getElementById("titulo")
    element.classList.toggle("Fuente1")
    element.classList.toogle("Fuente2")
}


function validar() {
    validarvacio(nombre)
    validarvacio(apellido)
    validarvacio(rut)
    validarvacio(fecha)
    validarvacio(email)
}

//function ()


//function error() {
//let nombre= documet.getElementById("nombre")
//let apellido= document.getElementById("apellido")
//let rut=document.getElementById("rut")
//let fecha=documet.getElementById("fecha")
//let email=document.getElementById("email")
//let telefono=document.getElementById("telefono")}