let max = parseInt(prompt('Write a maximum number:'));

while (!max) {
  max = parseInt(prompt('Write a valid number.'))
}

const target = Math.floor(Math.random() * max) + 1

let guess = parseInt(prompt('Write your guess.'));
let attempt = 1;

while( parseInt(guess) !== target){
  if (guess === 'q') break;
  while(!parseInt(guess)){
    guess = prompt('Enter a valid number.')
  }
  attempt += 1;
  if(guess < target){
    guess = prompt('Is more than that.')
  } else if (guess > target){
    guess = prompt('Is less than that.')
  }
}
if (guess==='q'){
  console.log('Ok, you quit.')
} else {
  console.log(`Congrats you find the number in ${attempt} attempts.`)
}