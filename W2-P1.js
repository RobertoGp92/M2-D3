/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

per scrivere un algoritmo per trovare un numero piu grande tra due numeri interi utilizziamo una funzione

function trovaIlPiuGrande(num1, num2) {
  if (num1 > num2) { //la condizione if(num1 maggiore num2) verifica se il primo numero è maggiore del secondo
    return num1; //se la condizione è vera la funzione restituisce il valore del primo numero
  } else {
    return num2; //altrimenti la funzione restituisce il valore del secondo numero
  }
}

console.log(trovaIlPiuGrande(10, 5)) //stampa 10
console.log(trovaIlPiuGrande(20, 25)) //stampa 25

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function controllaSeUguale(num) { //la funzione controllaSeUguale accetta un argomento num che rappresenta il numero da verificare
  if (num !== 5) //utilizza l'operatore di confronto "non uguale ! a (!==) ! per verificare se il numero è diverso da 5
    console.log("not equal") //se la condizione è vera viene stampato non equal in console altrimenti non viene eseguita alcuna azione
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function controllaSeDivisibilePerCinque(num) { //la funzione controllaSeDivisibilePerCinque accetta un argomento num che rappresenta il numero da verificare
  if (num % 5 === 0) { //si utilizza l'operatore di modulo (%) per verificare se il numero è perfettamente divisibile per 5
    console.log("divisibile by 5") //se il resto della divisione è uguale a 0 viene stampato "divisibile by 5" in console altrimenti non viene eseguita alcuna azione
  }
}

controllaSeDivisibilePerCinque(10) //stampa "divisibile by 5)

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function controllaSeUgualeAOtto(num1 , num2) { //la funzione controllaSeUgualeAOtto accetta due argomenti num1 e num2 che rappresentano i numeri da verificare (dichiarando una funzione)
  if(num1 === 8 ǀǀ num2 === 8 ǀǀ num1 + num2 === 8 ǀǀ num1 - num2 === 8) { //utilizziamo una struttura di controllo if e else con una condizione composta (num1 === 8 ǀǀ num2 === 8 ǀǀ num1 + num2 === 8 ǀǀ num1 - num2 === 8) per verificare se uno dei numeri è uguale a 8 o se la loro somma o differenza è uguale a 8 
    return true; //l'operatore di OR ǀǀ verifica se almeno una condizione è vera. Se la condizione è vera la funzione restituisce true 
  } else {
    return false; //altrimenti la funzione restituisce falso
  }
}

l'operatore di OR ǀǀ è un operatore di confronto che restituisce true se almeno una delle condizioni è vera altrimenti restituisce false.

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function calcolaTotaleCheckout(totalShoppingCart) { // la funzione calcolatotalecheckout accetta un argomento totalshoppingcart che rappresenta il totale del carrello 
  let costoSpedizione; //stiamo dichiarando una variabile locale di costoSpedizione
  if (totalShoppingCart > 50) { //se il totale del carrello supera 50 , se la condizione è vera 
    costoSpedizione = 0; //il costo di spedizione è 0
  } else { //se il totale del carrello non supera 50, se la condizione è falsa
    costoSpedizione = 10; //il costo di spedizione è 10
  }
  return totalShoppingCart + costoSpedizione; //la funzione restituisce il totale del carrello + il costo di spedizione
}

console.log(calcolaTotaleCheckout(40)) //stampa 50 
console.log(calcolaTotaleCheckout(60)) //stampa 60


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function calcolaTotaleCheckout(totalShoppingCart) { //la funzione calcolatotalecheckout accetta un argomento totalshoppingcart che rappresenta il totale del carrello 
  let costoSpedizione;
  if (totalShoppingCart > 50) {
    costoSpedizione = 0;
  } else {
    costoSpedizione = 10;
  }
  const sconto = totalShoppingCart * 0.20; //dichiariamo una costante "sconto" che calcola il valore dello sconto da applicare
  return totalShoppingCart - sconto + costoSpedizione; 
}

console.log(calcolaTotaleCheckout(40)); //42
console.log(calcolaTotaleCheckout(60)); 

/* ESERCIZIO 7
  Crea tre variabili e assegna un valore numerico a ciascuna di esse. Utilizzando un blocco condizionale crea un algoritmo per ordinarle secondo il loro valore dal più alto al più basso e alla fine mostra il
  risultato al console.log
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function OrdinaNumeri(num1, num2, num3) {
  let NumeriOrdinati = [num1, num2, num3]; //ARRAY
  NumeriOrdinati.sort(function(a, b){ //il metodo sort utilizzato in questa occasione accetta una funzione di confronto come argomento che specifica come gli elementi degli array devono essere ordinati. 
                                      //In questo caso la funzione di confronto restituisce la differenza tra A e B e causa l'ordinamento dei numeri in ordine decrescente
  return b - a;
  })
  console.log(NumeriOrdinati); 
}

OrdinaNumeri(10,5,8)

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function ControllaSeDispari(num) {
  if (typeof num === "number" && Number.isInteger(num)) {
    return true;
  } else {
    return false;
  }
}
console.log(ControllaSeDispari(5));


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function ControllaSeDispari(num) {
  if (num % 2 === 0) {
    return "pari";
  } else {
    return "dispari";
  }
}

console.log(ControllaSeDispari(5))

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function valore(val){
  if (val > 5 && val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
}
console.log(valore(4));

/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function messaggio(num) {
  if (num < 5) {
    return "tiny";
  } else if (num > 5 && num < 10) {
    return "Small";
  } else if (num > 10 && num < 15) {
    return "Medium"; 
  } else if (num > 15 && num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}

  console.log(messaggio(8))

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let isMale = true;
                    // if      else
let gender = isMale ? "male" : "female"; //alternativa ad if

console.log(gender);

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var n = 0;
while (n < 6) {
  console.log(n++);
}

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let i = 0; i <= 10; i++) {
  console.log(i);
}


/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let i = 0; i <= 10; i++) {
  if (i === 3 || i === 8) {
    continue;
  }
  console.log(i);
}

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " pari");
  } else {
    console.log(i + " dispari");
  }
}

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. 
  Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". 
  Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0)  {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
  console.log(i)
  }
}

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let day = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < 7; i++) {
  switch(day[i]) {
    case 1: 
    console.log("Lunedì");
    break;
    case 2: console.log("Martedì");
    break;
    case 3: console.log("Mercoledì");
    break;
    case 4: console.log("Giovedì");
    break;
    case 5: console.log("Venerdì");
    break;
    case 6: console.log("Sabato");
    break;
    case 7: console.log("Domenica");
    break;
    default: console.log("Non è un giorno della settimana");
    break;
  }
} 