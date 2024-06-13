//document.getElementById("btnContraste").addEventListener("click"= cambiarContraste())
//document.getElementById("btnFuente").addEventListener("click"= cambiarFuente())
//document.getElementById("btnRegistrar").addEventListener("click"= validar())

function validar() {
    validarVacio(nombre)
    validarVacio(apellido)
    validarVacio(rut)
    validarVacio(fecha)
    validarVacio(email)
    validarVacio(telefono)
    validarVacio(genero)
    validarVacio(texto)   
}

function validarVacio(idCampo){
    //REcupera el elemento
    let elemento = document.getElementById(idCampo);
    console.log(elemento);
    //Recuperar valor del campo
    let valor = elemento.value;
    console.log(valor);
    let eParrafo = document.getElementById("p"+idCampo);
    if(valor.trim()==""){
        console.log("Debes escribir algo")
        elemento.style.borderColor = "red";
        eParrafo.style.display = "block";
    }else{
        console.log("algo Hay")
        elemento.style.borderColor = "green";
        eParrafo.style.display = "none";
    }
}

function validarLongitud(idCampo){
    //REcupera el elemento
    let elemento = document.getElementById(idCampo);
    console.log(elemento);
    //Recuperar valor del campo
    let valor = elemento.value;
    console.log(valor);
    console.log(isNaN(valor))
    let eParrafo = document.getElementById("p"+idCampo);
    if(isNaN(valor)){//true si es un caracter
        eParrafo.innerText = "Debes ingresar un numero";
        eParrafo.style.display = "block";
    }
    else{
        if(valor.trim().length == 9 || valor.trim().length == 0 ){
            console.log("algo Hay")
            elemento.style.borderColor = "green";
            eParrafo.style.display = "none";
        }else{
            
            console.log("No hay nada")
            elemento.style.borderColor = "red";
            eParrafo.style.display = "block";
       
        }
    }
    
}


function cambiarFuente(){
    var element = document.getElementById("titulo");
    element.classList.toggle("fuente1");
}

function cambiarContraste() {
    let ebody= document.body;
    let fondo= ebody.style.backgroundColor;
    let eform= document.getElementById("formulario")
    let elabel= document.getElementsByClassName("label1")
    let eh1= document.getElementById("titulo")


    if (fondo == "black"){
        ebody.style.backgroundColor="white";
        eform.style.backgroundColor="rgb(245, 210, 242)";
        eh1.style.color= "black";
        for (let index = 0; index < elabel.length; index++) {
            const element = elabel[index];
            element.style.color = "black"
            
        }
    }else{
        ebody.style.backgroundColor="black";
        eform.style.backgroundColor="purple";
        eh1.style.color= "white";
        for (let index = 0; index < elabel.length; index++) {
            const element = elabel[index];
            element.style.color = "white";
        }
    
    }
}
