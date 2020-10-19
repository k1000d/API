

let url ="https://api.harvardartmuseums.org?key=4f3abebb-afe4-47fd-9ea6-df3b33742735"


fetch(url).then(function cogerRespuesta(res)

{
return res.json();
}).then (function resultado(datos) {
console.log(datos);
})