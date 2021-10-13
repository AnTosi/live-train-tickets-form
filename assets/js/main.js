// Selezionare elementi della DOM
const result = document.getElementById('result');

const fullNameInputElement = document.getElementById('full-name');
const distanceInputElement = document.getElementById('distance');
const ageSelectElement = document.getElementById('age');
const generateButtonElement = document.getElementById('generate');
const cancelButtonElement = document.getElementById('cancel');




let message;






// Al click genera dati biglietto
generateButtonElement.addEventListener('click', function () {
  /*
  Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
  */
  const fullName = fullNameInputElement.value;
  const age = ageSelectElement.value;

  const km_da_percorrere = distanceInputElement.value;

  console.log(km_da_percorrere, age);

//   inserisco nome passeggero nel biglietto

  document.getElementById("passName").innerHTML = fullName;


  // generatore automatico per carrozza
  document.getElementById("wagonNumber").innerHTML = Math.floor((Math.random() * 6) + 1);

  // generatore automatico per cpCode
  document.getElementById("cpCode").innerHTML = Math.floor((Math.random() * 9999) + 90000);

  

  /* Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
  - il prezzo del biglietto è definito in base ai km (0.21 € al km)
  - va applicato uno sconto del 20% per i minorenni
  - va applicato uno sconto del 40% per gli over 65.
  */

  let price = km_da_percorrere * 0.21
  console.log(price);



  if (isNaN(km_da_percorrere)) {
    console.log("Sorry you need to type two numbers");
  } else if (age == 'minorenne') {
    // qui prezzo per i minori con sconto del 20%
    //prezzo = prezzo - prezzo * 0.2
    price -= price * 0.2
    document.getElementById("discountType").innerHTML = "Ridotto Minorenni";
    //console.log(price);
    //console.log(message);

  } else if (age == 'over65') {
    // qui prezzo per gli over con sconto del 40%
    price -= price * 0.4
    document.getElementById("discountType").innerHTML = "Ridotto Anziani";
    //console.log(price);
    //console.log(message);

  } else {
    // mostriamo prezzo standard
    document.getElementById("discountType").innerHTML = "Biglietto Standard";
    //console.log(price);
    //console.log(message);
  }
    if (km_da_percorrere == 0) {
        document.getElementById("ticketCost").innerHTML = "Sorry you need to type a number > 0";
    } else {
        document.getElementById("ticketCost").innerHTML = price.toFixed(2) + " €";
    }
  // L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

});




// Al click annulla tutto
cancelButtonElement.addEventListener('click', function () {
  fullNameInputElement.value = ""
  ageSelectElement.value = 'minorenne'
  distanceInputElement.value = ''

  document.getElementById("passName").innerHTML = "";
  document.getElementById("discountType").innerHTML = "";
  document.getElementById("wagonNumber").innerHTML = "";
  document.getElementById("cpCode").innerHTML = "";
  document.getElementById("ticketCost").innerHTML = "";


});


// metto nome immesso nella casella nome
// document.getElementById("passName").innerHTML = fullName;
// faccio lo stesso per il tipo di biglietto, ma lo inserisco negli if adeguati per cambiarlo in base a option scelta

//per carrozza e codice cp devo creare 2 generatori random 
