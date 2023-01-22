

export const url ="https://jsonplaceholder.typicode.com/users"


 export function agregarNuevo() {
 
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
     
  export function limpiarFormulario() {
    
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
  }
     
  
  