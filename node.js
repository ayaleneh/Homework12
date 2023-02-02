const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let sum = 0;

let wait=function(){
  rl.question("Enter a number or 'stop' to end: ", function(answer) {
  if (answer === 'stop') {
    console.log(`The sum of the numbers is: ${sum}`);
    rl.close();
  } else {
    sum += parseInt(answer);
   wait();
  }
});
};
wait();

