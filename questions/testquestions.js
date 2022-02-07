const LisaaPelaaja = (pelaaja) => {
  const questions = [
    pelaaja + " Juo viisi",
    pelaaja + " Anna kolme",
    pelaaja + " Vesiputous",
    pelaaja + " Juo kymmenen",
    pelaaja + " Tarina",
    pelaaja + " Anna kaksi",
    pelaaja + " Sääntö",
    pelaaja + " Kategoriat",
    pelaaja + " Anna kymmenen",
    pelaaja + " Juo yksi",
    pelaaja + " Juo kaksi",
    pelaaja + "Joku vähän pidempi kysymys kokeillaan mitä tämä tuottaa",
  ];

  const random = Math.floor(Math.random() * 11);
  console.log(random);

  return questions[random];
};

export default LisaaPelaaja;
