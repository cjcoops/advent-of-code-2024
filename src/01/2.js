function parseInput(input) {
  const lines = input.trim().split("\n");
  const firstList = [];
  const secondList = [];

  for (const line of lines) {
    const [firstNumber, secondNumber] = line.split("   ").map(Number);
    firstList.push(firstNumber);
    secondList.push(secondNumber);
  }

  return { firstList, secondList };
}

module.exports = function (input) {
  // Parse the input into 2 lists
  const { firstList, secondList } = parseInput(input);

  // Initialze the count
  const count = {};

  for (const number of firstList) {
    count[number] = 0;
  }

  // Loop over second list and add to count
  for (const number of secondList) {
    if (count.hasOwnProperty(number)) {
      count[number] += 1;
    }
  }

  let similarityScore = 0;

  for (const number of firstList) {
    similarityScore += number * count[number];
  }

  console.log(similarityScore);
};
