const wes = Symbol("Wes");
const person = Symbol("Wes");
console.log(wes,person)
const classRoom = {
  [Symbol("Mark")]: { grade: 50, gender: "male" },
  [Symbol("olivia")]: { grade: 80, gender: "female" },
  [Symbol("olivia")]: { grade: 80, gender: "female" },
};

for (const person in classRoom) {
  console.log(person);
  console.log(person)
}

const syms = Object.getOwnPropertySymbols(classRoom);
const data = syms.map((sym) => classRoom[sym]);
console.log(data);



let people = {
  name: "John",
  age: 30,
  city: "New York",
  married: true,
  kids: ["John", "Jane", "Mark"],
};

for (const key in people) {
  const value = people[key];
  console.log(`${key}: ${value}`);
}
const chlidList = people.kids.join(", ");
console.log(chlidList);

// for of loop with index
for (const [index, value] of people.kids.entries()) {
  if (value === "Jane") {
    break;
  }
  console.log(value);
}