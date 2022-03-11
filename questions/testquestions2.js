const Clicked = () => {
  const questions = [
    "juo 4",
    "juo 5",
    "juo 3",
    "juo 2",
    "juo 1",
    "juo 5",
    "juo 7",
    "juo 8",
    "juo 10",
    "juo 4",
    "juo 3",
    "juo 6",
    "juo 4",
    "anna 2",
    "anna 10",
    "anna 12",
    "anna 3",
    "anna 7",
    "anna 8",
    "anna 4",
    "anna 5",
    "anna 6",
    "anna 7",
    "anna 8",
    "anna 4",
    "anna 3",
    "anna 2",
    "anna 3",
    "anna 5",
    "anna 6",
    "anna 7",
    "anna 8",
    "anna 23",
    "anna 22",
    "anna 1",
    "anna 3",
  ];

  let randomized = questions
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return randomized[0];
};

export default Clicked;
