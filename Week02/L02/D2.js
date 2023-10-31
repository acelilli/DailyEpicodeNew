/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let num1 = 5;
let num2 = 10;
if (num1 >= num2) {
  console.log("num1 è maggiore di num2")
} else {
  console.log("num2 è maggiore di num1")
};
/* In console viene mostrata l'istruzione contenuta in else */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let num3 = 7;
if (num3 !== 5) {
  console.log("num3 è diverso da 5")
};
/* Non so se ho capito che dovevo fare ma ok */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let num4 = 25;
if (num4 % 5 == 0) {
  console.log(" num4 è divisibile per 5 ")
};

/*Poichè 25 è divisibile per 5, nella console del browser mostra il messaggio dentro if*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
//if (serie di condizioni if > la verifica === )
let numA = 10;
let numB = 2;
if (numA === 8) {
  console.log("numA è 8")
} else if (numB === 8) {
  console.log("numB è 8")
} else (numA - numB === 8); {
  console.log("sottraendo numB a numA otteniamo 8")
};
/*Per funzionare mi ha fatto mettere un punto e virgola tra la condizione di else e la parentesi graffa?? */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. 
  Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
//dichiaro 3 variabili: totale, costo, pagamento=totale; if se un valore > soglia x = aggiungo spese (costrutto if)
let totale = 55;
let costo = 10;
let pagamento = totale;
if (totale <= 50) {
  console.log(totale + costo)
} else {
  console.log(pagamento = totale)
};
/*Funziona, ma ancora non ho capito se lo sto facendo bene??? Mi sembra troppo semplice.*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
// simile a quello sopra, invece che aggiungere spesa (sconto + 0.8)
let totaleBF = 55;
let costoBF = 10;
let sconto = 0.8;
let pagamentoBF = totaleBF;
if (totaleBF <= 50) {
  console.log((totaleBF + costoBF) *sconto)
} else {
  console.log(pagamentoBF = (totaleBF + costoBF) *sconto)
};
/*Non so calcolare le percentuali, ripperoni*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
// annido una serie di if > controllo le condizioni e con la console stampo la condizione true
let letA = 1;
let letB = 2;
let letC = 3;
if ( letA + letC === 5) {
  console.log(true)
} else {
  if(letA + letB === 4) {
    console.log(true)
  } else (letA + letB + letC === 6); {
    console.log (true)
  }
};

/* Di nuovo mi fa inserire un ; che non so perché ma ok*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let ciao = "Ciao!"
if ((typeof ciao)=== "number") {
  console.log(ciao + " non è un numero")
} else ((typeof ciao) === "string"); {
  console.log(ciao + " è una stringa")
}
/*Ariecco il ; a casaccio vbb cya*/

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
//modulo di 2 ( n  %2) if else
let n = 12;
if (n %2 === 0) {
  console.log(n + " è modulo di 2")
}
/* 12 è divisibile per 2 */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/

  let val = 3
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
/* Sembra troppo facile, non so se ho capito??? */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "toronto"
/* Ok, nonostante sia una costante sono riuscita ad aggiungere la proprietà city */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
/* Modificato, lastName non è più visibile in console */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop();
/* cancellato l'ultimo elemento tramite pop */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const myArray = [];
myArray.push("one piece", " dragon ball", "naruto");
// inseriti elementi nell'array inizialmente vuoto

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
const newArray = [0, 5, 10]
newArray.pop();
newArray.push(100);
// sostituisco l'ultimo elemento dell'array e assegnargli un nuovo valore
/* SCRIVI QUI LA TUA RISPOSTA */
