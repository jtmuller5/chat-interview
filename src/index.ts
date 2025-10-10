import * as readline from "readline";

/*
To read input from the command line:
rl.question('Enter something: ', (answer) => {
    console.log(`You entered: ${answer}`);
    rl.close();
});

Notes:
- rl.question() uses a callback to handle the user's input asynchronously (it is not a Promise).
- rl.question() can only process one question at a time.
- rl.close() closes the input stream permanently.
*/

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptUser(message: string) {
  rl.question(message + "\n", async (answer) => {
    console.log("Echo: " + answer);
  });
}

promptUser("What message would you like to leave?");
