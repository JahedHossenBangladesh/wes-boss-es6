const race = '100m Dash';
const winners = ["wesbos","Mosh","Sumit shaha", "Jonkar mahmud"]

// map function with arrow function and object also the index
const win = winners.map((winer,index) => ({
    name : winer,
    race,
    place:index +1
}))
console.log(win)

// filter with arrow function  
const ages = [12, 17, 8, 21, 14, 11];
const old = ages.filter((age) => age >= 10);
console.log(old);

// how to write a function
function getResult 