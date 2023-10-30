/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

//dati primitivi (5 tipi di tati) e dati complessi (oggetti).
//i dati primitivi sono:
var numero = 1; //possono essere interi positivi|negativi, decimali (divisi dal punto) positivi|negativi, e zero.
var booleana = true; //oppure false
var x = null; //solo valore possibile è null, non è nè uguale a 0 nè uguale a false
var y = undefined; //indefinito, è un valore indefinito, quindi non ha un valore assegnato. > Si può assegnare in seguito.
var z = "hello"; //il valore di z è la stringa di testo

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
var name = 'Alice';
/* Un esempio di valore stringa di testo*/


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

var x = 12;
console.log((x += 20)) 

/* Oppure +++++++++++++++++++++++++
var x = 12;
var y = 20;
console.log((x+y)) 
nel secondo caso ho assegnato a y un valore, ma potevo sommare anche solo il numero 20 senza assegnarlo a una var y,
come ho fatto invece nell'esempio sopra!
In entrambi i casi si ottiene come risultato 32 */


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/*
const NAME = Alice;
var name = Alessandrini;
*/
/* la console in questo caso mi da errore poichè la costante NAME non può essere sovrascritta dalla variabile name */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log((x += 4));


/* senza aggiungere una variabile y con valore 4 è possibile sommare direttamente 4 alla var x ottenendo 16 come risultato */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
var name1 = "john";
var name2 = "John";
console.log ((name1 === name2));
console.log ((name1 == name2))
console.log (name1.toLowerCase() === name2.toLowerCase())
/* anche se name1 è già in lowercase, con lo script method posso fare la comparazione
ossia, se sono entrambe "trasformate" in lowercase allora la console mi da true come risultato. */
