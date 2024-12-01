const fs = require("fs");
const path = require("path");

function runSolution() {
  // Get file paths from arguments
  const day = process.argv[2].padStart(2, "0");
  const solutionFile = process.argv[3];
  const inputFile = process.argv[4] || "input";

  // Read input file
  const input = fs.readFileSync(
    path.join(process.cwd(), "src", day, `${inputFile}.txt`),
    "utf8"
  );

  // Import and run the solution
  const solution = require(path.join(
    process.cwd(),
    "src",
    day,
    `${solutionFile}.js`
  ));
  solution(input);
}

runSolution();
