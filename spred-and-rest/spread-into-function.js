const list = [1, 2, 3, 4, 5];
const list2 = [6, 7, 8, 9, 10];
list.push(...list2);
console.log(list); 

const name = ['Jahed','boss']

function sayHi(firstName, lastName) {
    console.log(`Hi ${firstName} ${lastName}`);
}
sayHi(...name);