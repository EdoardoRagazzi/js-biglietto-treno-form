// Javascript
// VARIABILE CHE RACCHIUDE LA FUNCTION SUBMIT LA QUALE A SUA VOLTA RACCHIUDE VARI CALCOLI
var submit = document.getElementById('submit');
submit.addEventListener("click", function () {

    // Take the name 
    var value = document.getElementById('name').value;
    console.log(value);
    // Take the Km 
    var km = document.getElementById('km').value;
    console.log(km);
    //  Take the Range Age
    var rangeAge = document.getElementById('range-age').value;
    console.log(rangeAge);

    var cab = Math.floor(Math.random() * 10) + 1;
    var cod = Math.floor(Math.random() * 1000) + 1;
    var price = km * 0.5;
    // OUTPUT
    document.getElementById('cab').innerHTML = cab;
    document.getElementById('cod').innerHTML = cod;
    document.getElementById('price').innerHTML = price;
});