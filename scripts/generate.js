const fs = require("fs");
const path = require("path");

function generateFiles() {
  // Get day number from arguments
  const day = process.argv[2];
  if (!day) {
    console.error("Please provide a day number");
    process.exit(1);
  }

  // Create padded day number (e.g., "03" instead of "3")
  const paddedDay = day.padStart(2, "0");
  const dirPath = path.join(process.cwd(), "src", paddedDay);

  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  // Template for solution file
  const solutionTemplate = `module.exports = function(input) {
    const lines = input.trim().split('\\n');
    
    console.log('Input lines:', lines);
};
`;

  // Create files
  fs.writeFileSync(path.join(dirPath, "1.js"), solutionTemplate);
  fs.writeFileSync(path.join(dirPath, "example.txt"), "");
  fs.writeFileSync(path.join(dirPath, "input.txt"), "");

  console.log(
    `Created directory ${paddedDay} with solution file and input files`
  );
}

generateFiles();
