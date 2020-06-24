// - Creare un oggetto che descriva uno studente con le seguenti proprietà:
// nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti.
//  Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

$(document).ready(function(){
  // creo un oggetto studente
  var studente = {
    "nome":"daniele",
    "cognome": "fontana",
    "eta": 29
  };
  // stampo i valori delle proprietà con il ciclo for in
  for (var chiave in studente) {
    console.log(studente[chiave]);
  }


  var arrayStudenti = [

    {
      "nome":"freddie",
      "cognome": "mercury",
      "eta": 74
    },
    {
      "nome":"solid",
      "cognome": "snake",
      "eta": 30
    },
    {
      "nome":"frank",
      "cognome": "sinatra",
      "eta": 80
    },
    {
      "nome":"david",
      "cognome": "bowie",
      "eta": 70
    },
    {
      "nome":"ernesto",
      "cognome": "pippo",
      "eta": 35
    },

  ];

  for (var i = 0; i < arrayStudenti.length; i++) {
    var studenti = arrayStudenti[i];
    var studentiNome = studenti.nome;
    var studentiCognome = studenti.cognome;
    console.log("nome : " + studentiNome + " - cognome: " + studentiCognome);
  }

  //creo oggetto vuoto
  var nuovoUtente = {
  'nome': "",
  'cognome': "",
  'eta': "",
  };

  var nome = prompt("Inserisci il nome");
  var cognome = prompt('Inserisci il cognome');
  var eta = parseInt(prompt('inserisci età'));

  // utilizzo la dot notanion per assegnare i dati utente con il prompt
  nuovoUtente.nome = nome;
  nuovoUtente.cognome = cognome;
  nuovoUtente.eta = eta;

  //pusho il nuovoUtente dentro l array di oggetti
  arrayStudenti.push(nuovoUtente);

  console.log(arrayStudenti);

  // BONUS
  for (var i = 0; i < arrayStudenti.length; i++) {
    // sintassi handlebars
    var source = $("#template").html();
    var template = Handlebars.compile(source);
    // stampo nell html i singoli stuendi + quello aggiunto dal prompt
    var singoloStudente = arrayStudenti[i];
    var messaggioHtml = template(singoloStudente);
    console.log(messaggioHtml);
    $(".container").append(messaggioHtml);

  }


});
