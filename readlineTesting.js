// Testing using different variables for "readline" in the same code //
const readline = require("readline");
const something = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

something.question("If there was a walrus? ", (answer) => {
  console.log(`You decided: ${answer}`);
  something.close();

  // Can declare it again, just have to move the closing brackets to the end of the lase .close() statement.//

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("What will happen with this line? ", (answer) => {
    console.log(`OKOK`);
    rl.close();
  });
});