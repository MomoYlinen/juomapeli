const Clicked = () => {
  const questions = [
    "Mikä on suurin fantasiasi?",
    "Kuinka monta seksilelua omistat?",
    "Kerro lempi seksiasento",
    "Oletko koskaan kokeillut huumeita?",
    "Harrastatko seksiä mielummin valot päällä vai pois?",
    "Minkälaista pornoa tykkäät katsoa?",
    "Tissit vai peppu?",
    "Oletko koskaan pettänyt?",
    "Juo kymmenen huikkaa",
    "Juo neljä huikkaa",
    "Juo kolme huikkaa",
    "Juo kuusi huikkaa",
    "Juo neljä huikkaa",
    "anna kaksi huikkaa",
    "Yritä iskeä vieressäsi olevaa pelaajaa",
    "Anna sylitanssi jollekkin",
    "Anna kolme huikkaa",
    "Anna seitsemän huikkaa",
    "Anna kahdeksan huikkaa",
    "Anna neljä huikkaa",
    "Tee viisi punnerrusta tai juo 10 huikkaa",
    "Anna kuusi huikkaa",
    "Juo neljä huikkaa",
    "Juo kolme huikkaa",
    "Juo kuusi huikkaa",
    "Juo neljä huikkaa",
  ];

  let randomized = questions
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return randomized[0];
};

export default Clicked;
