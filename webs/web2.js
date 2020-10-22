let request = new XMLHttpRequest()
let stringfilm;
let movies;
function buscar() {
    

  movies = document.getElementById("movie").value;
 
  




request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  

  if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
      stringfilm += ` 
      <h1>${movie.title}</h1>
      <h3>${movie.description}</h3>
      <h3>Date: ${movie.release_date}</h3>`
    })
    document.getElementById("movie-detail").innerHTML= stringfilm ;
  } else {
    console.log('error')
  }
  
}
 
 

 request.send()

}
