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

// const day = 6;

// switch(day){
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//     case 7:
//         console.log('Weekend')
//         break;
//     default:
//         console.log('Invalid number')
// }

//ARRAYS Demo
// const demo = ['a','b','c']
// const demo2 = ['d','e','f']

// console.log(demo)
// console.log(demo[0])
// console.log(demo2)
// console.log(demo2[2])
// //PUSH
// demo.push('1')
// console.log(demo)
// //POP
// demo.pop()
// console.log(demo)
// //SHIFT
// demo2.shift()
// console.log(demo2)
// //UNSHIFT
// demo2.unshift('2')
// console.log(demo2)

//// ARRAYS concat Demo
// const cats = ['manchitas','akira']
// const dogs = ['zeus','hera']
// const pets = cats.concat(dogs)

// console.log(cats)
// console.log(dogs)
//// With concat
// console.log(cats.concat(dogs))
//// In a variable
// console.log(pets)

// //ARRAY includes Demo
// console.log(pets.includes('zeus'));
// console.log(pets.includes('something'))

// //ARRAY indexOf Demo
// console.log(pets.indexOf('zeus'))
// console.log(pets.indexOf('negrita'))

// //ARRAY reverse Demo
// //Re ordena el array a la inversa, y lo sutituye. 
// console.log(pets.reverse())

// //ARRAY slice Demo
// const colors = ['red','blue','yellow','white','green','grey']

// // console.log(colors.slice(1))
// // console.log(colors.slice(1,4))

// //ARRAY splice Demo
// //funciona para eliminar o incluir entre las diferentes cosas del array
// colors.splice(3,1)
// colors.splice(3,0,'light-yellow')
// console.log(colors) 

// // NESTED ARRAY Demo
// const airplaneSeats = [
//     ['Ruth', 'Anthony', 'Stevie'],
//     ['Amelia', 'Pedro', 'Maya'],
//     ['Xavier', 'Ananya', 'Luis'],
//     ['Luke', null, 'Deniz'],
//     ['Rin', 'Sakura', 'Francisco']
// ];

// airplaneSeats[3].splice(1,1,'Hugo')
// console.log(airplaneSeats[3])