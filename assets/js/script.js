//document.getElementById("btnContraste").addEventListener("click"= cambiarContraste())
//document.getElementById("btnFuente").addEventListener("click"= cambiarFuente())
//document.getElementById("btnRegistrar").addEventListener("click"= validar())


function cambiarContraste() {
    let ebody= document.body;
    let fondo= ebody.style.backgroundColor;
    let eform= document.getElementById("formulario")
    let elabel= document.getElementsByClassName("label1")
    let eh1= document.getElementById("titulo")


    if (fondo == "white"){
    ebody.style.backgroundColor="black";
    eform.style.backgroundColor="purple";
    eh1.style.color= "white";
    for (let index = 0; index < elabel.length; index++) {
        const element = elabel[index];
        element.style.color = "white"
        
    }
    }
    else{
    ebody.style.backgroundColor="white";
    eform.style.backgroundColor="rgb(245, 210, 242)";
    eh1.style.color= "black";
    for (let index = 0; index < elabel.length; index++) {
        const element = elabel[index];
        element.style.color = "black"
        
    }
    
    }
}

function cambiarFuente(){
    var element = document.getElementById("titulo");//tomo el elemento que seria el h1 con el id titulo1
    element.classList.toggle("fuente1");
}


//function validar() {
    //validarvacio(nombre)
    //validarvacio(apellido)
    //validarvacio(rut)
    //validarvacio(fecha)
    //validarvacio(email)
//}

//function ()


//function error() {
//let nombre= documet.getElementById("nombre")
//let apellido= document.getElementById("apellido")
//let rut=document.getElementById("rut")
//let fecha=documet.getElementById("fecha")
//let email=document.getElementById("email")
//let telefono=document.getElementById("telefono")}