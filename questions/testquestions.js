const LisaaPelaaja = (pelaaja, pelaaja2, questionNumber) => {
  const questions = [
    pelaaja + " juo 5",
    pelaaja + " anna 3",
    "Vesiputous alkaa pelaajasta " + pelaaja,
    pelaaja + " juo kymmenen",
    "Tarina. " + pelaaja + " aloita",
    pelaaja + " anna 2",
    pelaaja + " keksi sääntö",
    "Kategoriat alkaa pelaajasta " + pelaaja,
    pelaaja + " anna 10",
    pelaaja + " juo 2",
    pelaaja + " juo 2",
    "Pelaajan " + pelaaja + " oikealla puolella istuva. Anna 5",
    pelaaja + " juo 4",
    pelaaja + " anna 4",
    "Never have I ever. " + pelaaja + " keksi kysymys",
    "Tytöt juo 5",
    "Pojat juo 5",
    "Tytöt juo 2",
    "Pojat juo 2",
    "Jos olet parisuhteessa juo 2",
    pelaaja + ". Totuus vai tehtävä?",
    pelaaja + " juo kuusi",
    pelaaja + " anna kuusi",
    "Pelaajan " + pelaaja + " vasemmalla puolella istuva. Juo 4",
    pelaaja + " juo 10 tai juoma loppuun",
    pelaaja + " anna 2",
    pelaaja + " anna 8",
    pelaaja + " juo 8",
    "Nuorin pelaaja juo 5",
    "Vanhin pelaaja 5",
    "Sinkut juo 2",
    pelaaja + " valitse itsellesi huora",
    pelaaja + " ja " + pelaaja2 + " ottakaa peukkutappelu",
    pelaaja + " ja " + pelaaja2 + " juo 5",
    pelaaja + " ja " + pelaaja2 + " ottakaa kivi-sakset-paperi. Häviäjä juo 4",
  ];

  return questions[questionNumber];
};

export default LisaaPelaaja;
