const LisaaPelaaja = (pelaaja, pelaaja2, questionNumber) => {
  const questions = [
    pelaaja + " juo 5 huikkaa",
    pelaaja + " anna 3 huikkaa",
    "Vesiputous alkaa pelaajasta " + pelaaja,
    pelaaja + " juo kymmenen huikkaa",
    "Tarina. " + pelaaja + " aloita",
    pelaaja + " anna 2 huikkaa",
    pelaaja + " keksi sääntö",
    "Kategoriat alkaa pelaajasta " + pelaaja,
    pelaaja + " anna 10 huikkaa",
    pelaaja + " juo 2 huikkaa",
    pelaaja + " juo 2 huikaa",
    "Pelaajan " + pelaaja + " oikealla puolella istuva. Anna 5 huikkaa",
    pelaaja + " juo 4 huikkaa",
    pelaaja + " anna 4 huikkaa",
    "Never have I ever. " + pelaaja + " keksi kysymys",
    "Tytöt juo 5 huikkaa",
    "Pojat juo 5 huikkaa",
    "Tytöt juo 2 huikkaa",
    "Pojat juo 2 huikkaa",
    "Jos olet parisuhteessa juo 2",
    pelaaja + ". Totuus vai tehtävä?",
    pelaaja + " juo 6 huikkaa",
    pelaaja + " anna 6 huikkaa",
    "Pelaajan " + pelaaja + " vasemmalla puolella istuva. Juo 4 huikkaa",
    pelaaja + " juo 10 huikkaa tai juoma loppuun",
    pelaaja + " anna 2 huikkaa",
    pelaaja + " anna 8 huikkaa",
    pelaaja + " juo 8 huikkaa",
    "Nuorin pelaaja juo 5 huikkaa",
    "Vanhin pelaaja 5 huikkaa",
    "Sinkut juo 2 huikkaa",
    pelaaja + " valitse itsellesi huora",
    pelaaja + " ja " + pelaaja2 + " ottakaa peukkutappelu",
    pelaaja + " ja " + pelaaja2 + " juo 5 huikkaa",
    pelaaja +
      " ja " +
      pelaaja2 +
      " ottakaa kivi-sakset-paperi. Häviäjä juo 4 huikkaa",
  ];

  return questions[questionNumber];
};

export default LisaaPelaaja;
