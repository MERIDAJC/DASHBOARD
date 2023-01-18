
console.log("conectando card")
const card = document.querySelector(".contenedor")

const getUrl = new URLSearchParams(window.location.search)

id = getUrl.get(`id`)
console.log(id)

const url = `https://jsonplaceholder.typicode.com/users`

console.log(`${url}/${id}`)

fetch (`${url}/${id}`)
.then(respuesta => respuesta.json())
.then(datos => {
     
    const name = document.createElement("p")
    name.innerHTML = `
    <p><h2>${datos.name}</h2></p> 
    <p><h4> Ciudad: ${datos.address.city}</h4></p>
    <p><h4> Calle: ${datos.address.street}</h4></p>
    <p><h4> Codigo: ${datos.address.zipcode}</h4></p> 
    <p><h4> Telefono: ${datos.phone}</h4></p> 
    <p><h4> Sitio web: ${datos.website}</h4></p> 
    `
        
    card.appendChild(name)
})
.catch(err => console.log(err))