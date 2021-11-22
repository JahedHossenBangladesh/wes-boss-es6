let people = {
    name: "John",
    age: 30,
    city: "New York",
    married: true,
    kids: ["John", "Jane", "Mark"],
}

for(const key in people){
    const value = people[key];
    console.log(`${key}: ${value}`);
}
const chlidList = people.kids.join(", ");
console.log(chlidList);

// for of loop with index
for(const [index, value] of people.kids.entries()){
   
    if( value === "Jane"){
        break;

    }
     console.log(value);
     
}