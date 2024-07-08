const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name or nickname? ", (name) => {

  rl.question("Do you like root beer? ", (rootBeer) => {

    rl.question('Think about something crazy. What you thinking about?? ', (quirkAnswer) => {

      console.log(`\nHere's your new profile: \n${name} is quirked-up about ${quirkAnswer}. If you ever ask about root beer, he says ${rootBeer}!`);

      process.exit();
    });

  });

});
