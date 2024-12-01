function parseInput(input) {
  const lines = input.trim().split("\n");
  const firstList = [];
  const secondList = [];

  for (const line of lines) {
    const [firstNumber, secondNumber] = line.split(/\s+/).map(Number);
    firstList.push(firstNumber);
    secondList.push(secondNumber);
  }

  return { firstList: firstList.sort(), secondList: secondList.sort() };
}

module.exports = function (input) {
  // Parse the input into 2 lists
  // Sort each list
  const { firstList, secondList } = parseInput(input);

  // Loop over list and sum differences
  const result = firstList.reduce((sum, current, index) => {
    const diff = Math.abs(current - secondList[index]);
    return sum + diff;
  }, 0);

  console.log(result);
};
