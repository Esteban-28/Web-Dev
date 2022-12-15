let input = prompt('What would you like to do?');

const todoList = []

while (input !== 'quit'){
  if ( input === 'new') {
    let add = prompt('Enter new todo.')
    console.log(`${add} added to list`)
    todoList.push(add)
  } else if (input === 'remove') {
    let rem = prompt('Enter (the index of) what you want to remove.')
    todoList.splice(rem,1)
    console.log(`${rem} removed of list`)
  } else if (input == 'list'){
    console.log('********')
    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i}: ${todoList[i]}`)
    }
    console.log('********')
  } else if ( input === 'quit') {
    break
  }
  input = prompt('What would you like to do?')  
}
console.log('Make your To Do list.')