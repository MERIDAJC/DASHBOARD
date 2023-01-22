
import {agregarNuevo,url} from "./Nuempl.js"

document.getElementById("agregarNuevo").addEventListener("click",agregarNuevo)

//const url ="https://jsonplaceholder.typicode.com/users"
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
   
