function esercizio1() {
  // Creare un array di oggetti: ogni oggetto descriverà
// una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bici = [
    {
        'nome': 'bici1',
        'peso': 5
    },
    {
        'nome': 'bici2',
        'peso': 7
    },
    {
        'nome': 'bici3',
        'peso': 2.5
    },
    {
        'nome': 'bici4',
        'peso': 8
    },
];
  let small = {
    nome: '',
    peso: Number.MAX_SAFE_INTEGER
  };
  for (let i=0;i<bici.length;i++) {
    const bike = bici[i];
    let {nome, peso} = bike;
    if (peso < small.peso) {
        small = bike;
    }
  }
  console.log(small);
}


function esercizio2() {
  // Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà:
// nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare,
// le altre saranno tutte settate a 0.

  let squadre = [
    {
      "nome" : "Milan",
      "punti" : 0,
      "falli" :0
    },
    {
      "nome" : "Juventus",
      "punti" : 0,
      "falli" :0
    },
    {
      "nome" : "Inter",
      "punti" : 0,
      "falli" :0
    },
    {
      "nome" : "Roma",
      "punti" : 0,
      "falli" :0
    },
    ];


    // Generare numeri random al posto degli 0 nelle proprietà:
    // punti fatti e falli subiti

    for (let i = 0; i < squadre.length; i++) {

      const elem = squadre[i];
      elem.punti = getRandomNmb(0,100);
      elem.falli = getRandomNmb(0,100);
    }
    console.log(squadre);

    // Usando la destrutturazione creiamo un nuovo array
    // i cui elementi contengono solo nomi e falli subiti
    // e stampiamo tutto in console.
    let fouls = [];

    for (var i = 0; i < squadre.length; i++) {

      const elem = squadre[i];
      let {nome , falli} = elem;

      let resObj = {nome,falli};
      fouls.push(resObj);
    }

    console.log(fouls);
  }





function getRandomNmb(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var rndNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return rndNum;
}



function init() {
  esercizio1();
  esercizio2();
}


$(document).ready(init);
