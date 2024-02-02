/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
  */
let sum = 10 + 20;
console.log("---Es A---" + sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21);
console.log("---Es B---" + random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {
  name: "Luljeta",
  surname: "Sota",
  age: 33,
};
console.log("---Es C--- ");
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log("---Es D---");
console.log(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["HTML", "CSS"];
console.log("---Es E---", me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("JavaScript");
console.log("---Es F---", me.skills);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log("---Es G---", me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
let dice = function () {
  return Math.floor(Math.random() * 6) + 1;
};
console.log("---Es 1---", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log("---Es 2---", whoIsBigger(13, 44));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(inputString) {
  return inputString.split(" ");
}

const result = splitMe("Il weekend è vicino");
console.log("---Es 3---", result);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(str, first) {
  if (first) {
    console.log(str.slice(1));
  } else {
    console.log(str.slice(0, -1));
  }
}
deleteOne("Hello", true);
deleteOne("World", false);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"

  const sentence = "I have 4 dogs";
  */
console.log("---ES 5---");
const sentence = "I ha89ve 4 d0ogs";

function onlyLetters(sentence) {
  let stringSplitted = sentence.split("");
  let stringSplittedFiltered = stringSplitted.filter(filterStringToRemoveNumbers);
  return stringSplittedFiltered.join("");
}

function filterStringToRemoveNumbers(char) {
  return !Number(char) && char !== "0";
}

console.log(onlyLetters(sentence));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail(str) {
  if (str.includes("@")) {
    return "è un'email valida";
  }
  return "non è un'email valida";
}
console.log("---Es 6---");
console.log(isThisAnEmail("nonsonounamail.com"));
console.log(isThisAnEmail("sonouna@mail.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("---Es 7---");
function whatDayIsIt() {
  const giorniDellaSettimana = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
  const oggi = new Date().getDay();
  return giorniDellaSettimana[oggi];
}

console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("---Es 8---");
function rollTheDices(x) {
  let sum = 0;
  for (let i = 0; i < x; i++) {
    const result = dice();
    sum += result;
  }
  return sum;
}
console.log(rollTheDices(2));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("---Es 9---");
function howManyDays(data) {
  const today = new Date();
  data = new Date(data);
  let milliseconds = today - data;
  return Math.floor(milliseconds / (24 * 60 * 60 * 1000));
}

console.log(howManyDays("2024-10-11"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday(dataNascita) {
  const oggi = new Date();
  const compleanno = new Date(dataNascita);
  const giornoCompleanno = compleanno.getDate();
  const meseCompleanno = compleanno.getMonth();
  const giornoAttuale = oggi.getDate();
  const meseAttuale = oggi.getMonth();

  return giornoCompleanno === giornoAttuale && meseCompleanno === meseAttuale;
}

console.log(isTodayMyBirthday("1990-11-25"));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("---ES 11--- da fare");

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("---ES 12--- da fare");

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(arr) {
  return arr.length;
}

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(arr) {
  const yearsArray = [];

  for (let i = 0; i < arr.length; i++) {
    yearsArray.push(arr[i].Year);
  }

  return yearsArray;
}

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium(arr) {
  const lastMillenniumMovies = [];

  for (let i = 0; i < arr.length; i++) {
    const year = parseInt(arr[i].Year, 10);

    if (year >= 1000 && year <= 1999) {
      lastMillenniumMovies.push(arr[i]);
    }
  }

  return lastMillenniumMovies;
}
console.log("---Es 15---");
console.log(onlyInLastMillennium(movies));
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const year = parseInt(arr[i].Year, 10);
    sum += year;
  }

  return sum;
}

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(arr, str) {
  let matchingMovies = arr.filter(function (movie) {
    return movie.Title.toLowerCase().includes(str.toLowerCase());
  });

  return matchingMovies;
}
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(arr, str) {
  let obj = { match: [], unmatch: [] };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].Title.toLowerCase().includes(str.toLowerCase())) {
      obj.match.push(arr[i]);
    } else obj.unmatch.push(arr[i]);
  }
  return obj;
}

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(arr, index) {
  if (index > 0 && index < arr.length) {
    arr.splice(index, 1);
  } else {
    console.log("Questo array non contiene l'indice fornito");
  }

  return arr;
}

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const selectContainer = function () {
  const container = document.getElementById("container");
  return container;
};
console.log(selectContainer());

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function allTds() {
  const tds = document.querySelectorAll("td");
  console.log(tds);
}
allTds();

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function tdTexts() {
  const tds = document.querySelectorAll("td");

  for (let i = 0; i < tds.length; i++) {
    console.log(tds[i].innerText);
  }
}
tdTexts();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function addRedBackground() {
  let links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = "red";
  }
}
addRedBackground();

/* ESERCIZIO 24
Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function addNewElement(noOfElements) {
  noOfElements = noOfElements || 1;
  let list = document.getElementById("myList");
  for (let i = 0; i < noOfElements; i++) {
    let newItem = document.createElement("li");
    newItem.textContent = "New item";
    list.appendChild(newItem);
  }
}
addNewElement(5);

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function clearList() {
  let list = document.getElementById("myList");
  list.innerHTML = "";
}
clearList();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function addTestClass() {
  let table = document.getElementsByTagName("table")[0];
  let rows = table.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    rows[i].classList.add("test");
  }
}
addTestClass();
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
