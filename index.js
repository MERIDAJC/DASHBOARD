
/*
const aplicacion = document.querySelector(".captura")
const aplicacion2 = document.querySelector(".captura2")

const url ="https://jsonplaceholder.typicode.com/users"


fetch(url)
.then(respuesta => respuesta.json())
.then(datos => {
      datos.forEach(usuarios => {
        console.log(usuarios.id);
        console.log(usuarios.name);

        const tabla = document.createElement("tr")
        tabla.innerHTML = usuarios.id
        //tabla.innerHTML = usuarios.name

        aplicacion.appendChild(tabla)
        aplicacion2.appendChild(tabla)



      });

}).catch(err =>console.log(err))*/





const url ="https://jsonplaceholder.typicode.com/users"
const captura = document.querySelector("#captura")


document.addEventListener("DOMContentLoaded", llamarapi);


function llamarapi(){

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => datosTabla(datos))
    }

function datosTabla(datos){
    datos.forEach(elemento => {
       console.log(elemento)
        const columnas = document.createElement("tr")
        columnas.setAttribute("id", elemento.id) 
          
        columnas.innerHTML= `
               <td>${elemento.name}</td>
               <td>${elemento.username}</td> 
               <td>${elemento.email}</td> `
         columnas.addEventListener(`click`, function(){ 
            window.location.href =`./card.html?id=${elemento.id}`                  
                      
           
            
        })
              captura.appendChild(columnas)
    });
    
}       
       
   function agregarNuevo() {
 
  console.log("Entro a agregarUsuario");
 
  let nuevoUs = new FormData();
  nuevoUs.append("nombre", document.getElementById("nombre").value);
  nuevoUs.append("apellido", document.getElementById("apellido").value);
  nuevoUs.append("email", document.getElementById("email").value);

  fetch(url, {method: "POST", body: nuevoUs,
  })
    .then((response) => response.json()) 
    .then((result) => {
      console.log(result);
      limpiarFormulario();
      //llamarapi();
    }) 
    .catch((error) => {
      console.log("Error detectado!" + error);
    }); 
   }
   
function limpiarFormulario() {
  
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("email").value = "";
}
   

