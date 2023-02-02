const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("what is your name? ", (name) => {
  rl.question("please input your age..", (age) => {
    console.log(`welcome ${name}`);
    if(age>16){
      console.log("you are allowed to have driver license in iowa.");
      
    }
    else{
      console.log("you are not allowed to have driver license in iowa.");
    }
      rl.close();
  });
});

