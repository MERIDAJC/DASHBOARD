
const url ="https://jsonplaceholder.typicode.com/users"

fetch(url)
.then(respuesta => respuesta.json())
.then(students => nombre(students))

 const lab = []

function nombre(students){
    students.forEach(element => {
       
       lab.push(element.name) 
        // console.log(students)
    });
}

console.log (lab)

const ctx = document.getElementById('myChart');
 new Chart(ctx, {
    type: 'bar',
    data: {
      labels: lab,
      datasets: [{
        label: 'Años laborales',
        data: [12, 19, 3, 5, 2, 3 , 8, 15, 8, 15],
        fill: true,
    backgroundColor: [
      'rgba(255, 99, 132, 0.8)',
      'rgba(255, 159, 100, 0.8)',
      'rgba(255, 205, 86, 0.8)',
      'rgba(75, 192, 192, 0.8)',
      'rgba(54, 162, 235, 0.8)',
      'rgba(126, 118, 202, 0.8)',
      'rgba(260, 203, 207, 0.8)',
      'rgba(255, 159, 96, 0.8)',
      'rgba(255, 205, 86, 0.8)',

    ],
    
        }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });





























/*
const url ="https://jsonplaceholder.typicode.com/users"

fetch(url)
.then(response => response.json())
.then(datos => nombre(datos))
 
 
const lab = []

function nombre(datos){
    datos.forEach(element => {
       
       lab.push(element.name) 
        // console.log(students)
    });
}

console.log (lab)




//let a = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']

const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: lab,
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3,9,11,18,15],
        //borderWidth: 1
        //borderColor: '#36A2EB',
       // backgroundColor: 'rgba(54, 162, 235, 0.5)',
       
       fill: false,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(255, 205, 86, 0.2)',

    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)',
      'rgb(255, 205, 86)',
      'rgb(255, 205, 86)',
    ]

      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });*/