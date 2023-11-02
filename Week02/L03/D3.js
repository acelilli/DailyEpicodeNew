const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 277,
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male"
  },
  {
    name: "C-3PO",
    height: 167,
    mass: 75,
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a"
  },
  {
    name: "R2-D2",
    height: 96,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a"
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male"
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female"
  },
  {
    name: "Owen Lars",
    height: 178,
    mass: 120,
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male"
  },
  {
    name: "Beru Whitesun lars",
    height: 165,
    mass: 75,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female"
  },
  {
    name: "R5-D4",
    height: 97,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a"
  },
  {
    name: "Biggs Darklighter",
    height: 183,
    mass: 84,
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male"
  },
  {
    name: "Obi-Wan Kenobi",
    height: 182,
    mass: 77,
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male"
  }
];

/* ESERCIZIO 1
  Crea una variabile chiamata "characters" e assegnale un array vuoto
*/
let characters = []; 

/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters".
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "characters" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/
//for (inizializzazione, condizione, modifica) {
  //associare singola variabile in collezione
// //accedere alla proprietà con dot notation
// inserire con push la dot notation nell'arrai precedente 
//}
//per controllare console.log 
/* for (var characters = 0; characters = starWarsCharacters.name; characters++) {
    characters.push(starWarsCharacters.name);
    console.log(characters)
} */
for (var i=0; i < starWarsCharacters.length; i++) { // giusto
    const swcharacter = starWarsCharacters[i]; // praticamente creo una sorta di array virtuale in cui mettere gli indici dei pg
    characters.push(swcharacter.name);
} 
console.log(characters);


/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno tutti gli oggetti femminili.
*/
//Nuovo array, inserendo gli oggetti con la proprietà femminile
//con if accedo alla proprietà e verifico la condizione per il genere female
// se il genere è female costruisco un oggetto con i tre dati che dice lui
//push nell'array nuovo
let femaleCharacters = []; 

for (var i=0; i < starWarsCharacters.length; i++) { // giusto
    const swcharacter = starWarsCharacters[i];
    if (swcharacter.gender==="female") {
        femaleCharacters.push(swcharacter);
    }
} 
console.log(femaleCharacters);


/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/
//creo oggetto eyecolor {[array vuoto], [proprietà]}
let eyeColor = {
    blue: [],
    yellow: [],
    brown: [],
    blue_gray: [],
};

/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/
//switch (leggo le caratteristiche di eye color e in ciascun array lo riempio inserisco con push)
for (var i=0; i < starWarsCharacters.length; i++) { // giusto
    const swcharacter = starWarsCharacters[i];

    switch(swcharacter.eye_color) {
        case "blue":
            eyeColor.blue.push(swcharacter);
            break;
        case "yellow":
            eyeColor.yellow.push(swcharacter);
            break;
        case "brown":
            eyeColor.brown.push(swcharacter);
            break;
        case "blue-gray":
            eyeColor.blue_gray.push(swcharacter);
            break;
        default:
            console.log("colore non riconosciuto")
    }
}
console.log(eyeColor)

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/
// uso while (crew mass variabile vuota in cui sommo le proprietà crew mass)
// la stampo con la console
//tip: ParseInt modificare una stringa in un numero??

/* ESERCIZIO 7
  Crea uno switch per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è superiore a 500 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/

//crew mass come termine di confronto
//faccio uno switch e verifico il valore di crewMass e verifico il valore di Crewmass in quale case finisce

/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/
// for ()
//utilizzo il ciclo for
// - o utilizzando un nuovo array
// - oppure riassegnando il valore corrispondente (if (gender n/a) 
//                                                  {riassegno il valore})

/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome.
  Una volta fatto crea un console.log per controllare la proprietà length di "characters" prima e dopo l'operazione.
*/
//utilizzare splice

/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/
// metodi matematici che sono floor, random (spoilerini)