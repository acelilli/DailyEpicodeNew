// 1. funzione che genera la tabella con tutti i numeri
// 2. funzione che scrive i numeri (push in un array)
// 3. funzione (associata al bottone) che genera dei numeri randomi
// 4. funzione che aggiunge una class classList.add('highlight')
// 5. funzione che generale delle tabelline da 24
// funzioni vanno dichiarate e invocate
const numbers = []

const createTable = function(totalNumbers) {// 1. funzione che genera la tabella con tutti i numeri
    const tabellone = document.getElementById('bigtabellone') //aggancio html
    for (let i = 1; i < 89; i++) {
        const EachNum = document.createElement('div');
        EachNum.innerText = Math.floor(Math.random() * 89);
         //per ogni numero => creo una cella
        const numberCellDiv = document.createElement('div')
        numberCellDiv.classList.add('numero')
        const cellValue = document.createElement('h4')
       cellValue.innerText = i + 1  //lo andiamo ad appentere nel suo div
       numberCellDiv.appendChild(cellValue) // appendo il value alla cella del numero
       tabellone.appendChild(numberCellDiv) //appendo la cella del numero al tabellone
       //aggiungo l'array vuoto per ogni numero???
       numbers.push([])
        /* printExtractedNumber(i)
        if (extractedNumeber[i] > 0) {
            addClassList(i)
        } */

    }

} //funzione lanciata sotto

const writeNumbers = function() { // 2. funzione che scrive i numeri (push in un array)

    for (let i = 0; i < 89; i++) { }
}


const randombutton = function () {// 3. funzione (associata al bottone) che genera dei numeri random
}

const addClassList = function () { // 4. funzione che aggiunge una class classList.add('highlight')
}

const createLilTable = function () { // 5. funzione che genera le delle tabelline da 24
}


// funzioni vanno dichiarate e invocate

createTable()
writeNumbers()
randombutton()
addClassList()
createLilTable()



















/* const handleSubmit = function (e) {   /* Le funzioni possono partire tutte contemporaneamente con questo handle che li gestisce -> ossia quando si carica la finestra partono! */
/*    e.preventDefault() // previene il comportamento default
    generateTable()
    tableNumbers()
    extractNumber()
    numHighligth()
    generateLilTable()
}  */


/*
const generateTable = function (cellnumeretti) { // 1. funzione che genera la tabella con tutti i numeri -> cosa c'è nella tabella? E' divisa per numeri
    let tabellone = document.getElementById('bigtabellone') //aggancio html
    for(var i=0; i < cellnumeretti; i++) {         //devo ciclare dentro le celle del tabellone
    const numberCellDiv = document.createElement('div')       // <div></div>
    numberCellDiv.classList.add('number')         // <div class="number"></div>
    const numCell = document.createElement('p')  // <p>
    numCell.innerText = ' ' + i + 1;
    numberCellDiv.appendChild(numCell);
    tabellone.appendChild(numberCellDiv)
    }
}

const tableNumbers = function () { // 2. funzione che scrive i numeri (push in un array)
    for (let i = 1; i < 89; i++) {
        const randoNumero = document.createElement('div');
        randoNumero.innerText = Math.floor(Math.random() * 89);
        console.log('numero random' randoNumero)
    }
}


generateTable()
const tuttiNumeri = tableNumbers()
    /* getNumberMin = Math.ceil(min);
    getNumberMax = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); */
