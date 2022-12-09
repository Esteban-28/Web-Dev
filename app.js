//AND operatior demostration 
// const password = prompt('Write a password:')

// if (password.length >= 6 && password.indexOf(' ') === -1){
//     console.log('Valid password');
// } else {
//     console.log('Invalid password.');
// }

// OR operator demo
//0-5 FREE
//5-12 $10
//12-65 $20
//65+ FREE

// const age = 10;

// if((age >=0 && age < 5) || age > 65){
//     console.log('You enter for FREE')
// } else if (age >=5 && age < 12){
//     console.log('You enter for $10')
// } else if(age >=12 && age < 65){
//     console.log('Ypu enter for $20')
// } else {
//     console.log('Invalid age.')
// }

// NOT operator Demo
// const age = 10;

// if(!(age >=0 && age < 5 || age > 65)){
//     console.log('You dont enter for FREE')
// }

//SWITCH statement Demo

const day = 6;

switch(day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
    case 7:
        console.log('Weekend')
        break;
    default:
        console.log('Invalid number')
}