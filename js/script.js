// Javascript
// VARIABILE CHE RACCHIUDE LA FUNCTION SUBMIT LA QUALE A SUA VOLTA RACCHIUDE VARI CALCOLI
var submit = document.getElementById('submit');
submit.addEventListener("click", function () {

    // Take the name 
    var name = document.getElementById('name').value;
    console.log(name);
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
    document.getElementById('nome').innerHTML = name;
    document.getElementById('sconto').innerHTML = rangeAge;
    document.getElementById('cab').innerHTML = cab;
    document.getElementById('cod').innerHTML = cod;
    document.getElementById('price').innerHTML = price + '$';
});

var cancel = document.getElementById('delete');
cancel.addEventListener("click", function () {

    // HIDDEN the value of the Output
    var name = document.getElementById('name');
    nome.remove();
    document.getElementById('cab');
    cab.remove();
    document.getElementById('sconto');
    sconto.remove();
    document.getElementById('cod');
    cod.remove();
    document.getElementById('price');
    price.remove();
    //  REFRESH PAGE
    location.reload();


});