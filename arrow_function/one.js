const names = [
    'Alex',
    'John',
    'Mary',
]
const fullNames = names.map(name => `${name} bos`)
console.log(fullNames)
const fullNames2 = names.map(() => `cool bos`);
console.log(fullNames2)

// function declaration
const sayMyName = (name) =>{
    console.log(`Hello ${name}`)
}
sayMyName("Jahed")