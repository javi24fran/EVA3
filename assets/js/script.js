import {registrarPersona,obtenerPersonas,actualizarPersona, eliminarPersona} from "./promesas.js";
window.addEventListener ("load",()=>{
    document.getElementById("btnRegistrar").addEventListener("click", function (event) {
        event.preventDefault();
        validar();
        registrar();
    });

    cargarDatos();
    document.getElementById("btnRegistrar").addEventListener("click",validar);
    document.getElementById("btnRegistrar").addEventListener("click",registrar);
    cargarDatos();
    document.getElementById("btnContraste").addEventListener("click",cambiarContraste);
    document.getElementById("btnFuente").addEventListener("click",cambiarFuente);
    document.getElementById("btnActualizar").addEventListener("click",actualizar);
    })
    
    
    function validar() {
        //Validar campos qeu no esten vacios cuando se haga el registro ("Crear cuenta")
        validarVacio("nombre");
        validarVacio("apellido");
        validarVacio("rut");
        validarVacio("fecha");
        validarVacio("email");
        validarVacio("telefono");
        validarVacio("genero");
        validarVacio("texto");
        validarVacio("aceptar");
    }
    
    function validarVacio(idCampo){
        //Recupera el elemento
        let elemento = document.getElementById(idCampo);
        console.log(elemento);
        //Recuperar valor del campo
        let valor = elemento.value;
        console.log(valor);
        let eParrafo = document.getElementById("p"+idCampo);
        if(valor.trim()==""){
            console.log("No hay nada")
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
    function validarCheckbox(idCampo){
        //Recupera el elemento en base al id
        let element = document.getElementById(idCampo);
        let eParrafo = document.getElementById("p" + idCampo);
    
        if (element.checked) { //Verifica que el checkbox este seleccionado 
            eParrafo.style.display = "none";
        
        } else {
            eParrafo.innerText = "Debe marcar la casilla para aceptar los términos";
            eParrafo.style.display = "block";
    
         
        
        }
    }
     
    
    const registrar = ()=>{
        //recupero elemento
        let eNombre = document.getElementById("nombre");
        let eApellido = document.getElementById("apellido");
        let eRut = document.getElementById("rut");
        let efecha = document.getElementById("fecha");
        let eemail= document.getElementById("email");
        let etelefono= document.getElementById("telefono");
        let egenero= document.getElementById("genero");
        let etexto= document.getElementById("texto");
        let eaceptar= document.getElementById("aceptar");
        //recupero el valor del elemento
        let vNombre = eNombre.value;
        let vApellido = eApellido.value;
        let vRut = eRut.value;
        let vFecha = efecha.value;
        let vEmail =eemail.value;
        let vTelefono= etelefono.value;
        let vGenero= egenero.value;
        let vTexto= etexto.value;
        let vAceptar= eaceptar.checked;//devolvera true o false
         //creo un objeto en base al elemento con los datos recuperados
        let objeto = {nombre:vNombre,apellido:vApellido,rut:vRut,fecha:vFecha,email:vEmail,telefono:vTelefono,genero:vGenero,texto:vTexto,aceptar:vAceptar};
    
        // envio a una funcion que registre
        console.log(objeto);
    
        registrarPersona(objeto).then(()=>{//el then funciona como un activador si se cumple la funcion cuando la promesa se cumple o se ejecuta
            alert("se registra con exito");
            cargarDatos();
        }).catch((error)=>{// es un activador cuando la promesa no se activa sale un error o mensaje de error 
            console.log(error);
        });
        
    }
    const cargarDatos = ()=>{
        //traer de las promesas todo lo registrado
        obtenerPersonas().then((personas) =>{
            console.log ("hola")
            console.log(personas)
            //cargarlo en la tabla del html
            let estructura = ""
            personas.forEach((p) =>{
                estructura += "<tr>"
                estructura += "<td>" +p.nombre+"</td>"
                estructura += "<td>" +p.apellido+"</td>"
                estructura += "<td>" +p.rut+"</td>"
                estructura += "<td>" +p.fecha+"</td>"
                estructura += "<td>" +p.email+"</td>"
                estructura += "<td>" +p.telefono+"</td>"
                estructura += "<td>" +p.genero+"</td>"
                estructura += "<td>" +p.texto+"</td>"
                estructura += "<td>" +p.aceptar+"</td>"
                estructura += "<td><button id='UPD"+p.id+"'>actualizar</button></td>"
                estructura += "<td><button id='DEL"+p.id+"'>eliminar</button></td>"
                estructura +="</tr>";
                
            })
            document.getElementById("cuerpoTabla").innerHTML=estructura; // Agrega eventos a los botones de actualizar y eliminar
            personas.forEach((p)=>{
                let elemento = document.getElementById("UPD"+p.id);
                elemento.addEventListener("click",()=>{
                    document.getElementById("UPDnombre").value = p.nombre;
                    document.getElementById("UPDapellido").value = p.apellido;
                    document.getElementById("UPDrut").value = p.rut;
                    document.getElementById("UPDfecha").value = p.fecha;
                    document.getElementById("UPDemail").value = p.email;
                    document.getElementById("UPDtelefono").value = p.telefono;
                    document.getElementById("UPDgenero").value = p.genero;
                    document.getElementById("UPDtexto").value = p.texto;
                    document.getElementById("UPDaceptar").value = p.aceptar;
                    document.getElementById("btnActualizar").value = p.id;
                });
                let btnEliminar = document.getElementById("DEL"+p.id);
                btnEliminar.addEventListener("click",()=>{
                    if(confirm("desea eliminar a:\n"+p.nombre+""+p.apellido)){
                        console.log("vamos a eliminar")
                        eliminarPersona(p.id).then (()=>{
                            alert ("eliminaste con exito")
                            cargarDatos();
                        }).catch((e)=>{
                            console.log(e);
                        })
    
                    }else{
                        console.log("cancelaste la eliminacion")
                    }
                })
            })
        })
    }
    document.getElementById
    const actualizar= ()=>{
       //recuperar campos del formulario
        //recupero elemento
        let eNombre = document.getElementById("UPDnombre");
        let eApellido = document.getElementById("UPDapellido");
        let eRut = document.getElementById("UPDrut")
        let eFecha = document.getElementById("UPDfecha")
        let eEmail = document.getElementById("UPDemail")
        let eTelefono = document.getElementById("UPDtelefono")
        let eGenero = document.getElementById("UPDgenero")
        let eTexto= document.getElementById("UPDtexto")
        //recupero el valor del elemento
        let vNombre = eNombre.value;
        let vApellido = eApellido.value;
        let vRut = eRut.value;
        let vFecha= eFecha.value;
        let vEmail= eEmail.value;
        let vTelefono= eTelefono.value;
        let vGenero= eGenero.value;
        let vTexto= eTexto.value;
         //creo un objeto en base al elemento con los datos recuperados
        let objeto = {nombre:vNombre,apellido:vApellido,rut:vRut,fecha:vFecha,email:vEmail,telefono:vTelefono,genero:vGenero,texto:vTexto};
       //creo un objeto
        console.log(objeto)
        let id = document.getElementById("btnActualizar").value;
       //envio el objeto y el id a las promesas
        document.getElementById("btnActualizar").disabled= "True";
        actualizarPersona(objeto,id).then(()=>{
        alert ("se actualiza con exito")
        cargarDatos()
        document.getElementById("btnActualizar").disabled= "";
        }).catch((e)=>{
        console.log(e);
        })
    };
    
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
    