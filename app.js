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

// //OBJECTS Demo
// const products = [
//   {
//     name:'Jenga',
//     price: 5,
//     ages: '5+'
//   },
//   {
//     name:'Domino',
//     price: 3.5,
//     ages: '10+'
//   },
//   {
//     name:'Ball',
//     type:{
//       football:{
//         price: 10
//       },
//       basketball:{
//         price: 12
//       },
//       baseball:{
//         price: 8
//       }
//     },
//     ages: '5+'
//   }
// ]

// //Take info of an OBJECT
// console.log(products[2].name + ' price is $'+products[2].type.football.price)

// //To edit things
// products[0].name = 'Risk';

// //To add things
// products.push({name:'Cards',price:5,ages:'18+'})

// console.log(products)

// //To remove things
// products.shift()

// console.log(products)

// //LOOPS
// for (let i = 1; i<=10; i++){
//   console.log('Hello!!!')
// }

// //NESTED FOR
// const passengers=[
//   ['Juan','David','Ignacio',null],
//   ['Karina','Rodrigo','Olivia','Sara'],
//   ['Gabriela','Alex','Dom','Lety']
// ]

// for (let i = 0; i < passengers.length; i++){
//   const row = passengers[i];
//   console.log(`Row #${i + 1}`);
//   for (let j = 0; j < row.length; j++){
//     console.log(row[j]);
//   }
// }

// //FOR...OF
// const subjects = ['math','english','science','spanish']

// for (let sub of subjects){
//   console.log(`I hate ${sub}`)
// }

//FUNCTIONS
function lastElement(arr){
  if (arr.length === 0) {
    return null;
  }
  let num = arr.length - 1

  return arr[num];
}

function capitalize(word) {
  let newWord = word.slice(1,word.length)

  return word[0].toUpperCase() + newWord
}

function sumArray(arr) {
  let sum = 0;
  for (let i of arr) {
      sum += parseInt(i)
  }
  return sum
}

function returnDay(num){
  if (num <= 0 || num > 7){
    return null
  }
  switch (num) {
      case 1:
          // code
          return 'Monday'
          break;
      case 2:
          return 'Tuesday'
          break;
      case 3:
          return 'Wednesday'
          break;
      case 4:
          return 'Thursday'
          break;
      case 5:
          return 'Friday'
          break;
      case 6:
          return 'Saturday'
          break;
      case 7:
          return 'Sunday'
          break;
      default:
          // code
          null
          break;
  }
}