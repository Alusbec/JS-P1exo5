document.getElementById('clickbutton').onclick = showAlert;
function showAlert(){

var dividende = document.getElementById('dividende').value;
var diviseur = document.getElementById('diviseur').value;
var result = (dividende%diviseur);

alert('reste de la division :' +result);
}