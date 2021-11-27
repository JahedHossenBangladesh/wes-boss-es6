const deepDish = {
  pizzaName: "Deep Dish",
  size: "Medium",
  ingredients: ["Marinara", "Italian Sausage", "Dough", "Cheese"],
};

const shoppingList = ['milk','sugar',...deepDish.ingredients]

const comments = [
  { id: 209384, text: "I love your dog!" },
  { id: 523423, text: "Cuuute! 🐐" },
  { id: 632429, text: "You are so dumb" },
  { id: 192834, text: "Nice work on this wes!" },
];

const id = 632429;

const findTheComment =  comments.findIndex(comment => comment.id === id);

const newComments = [...comments.slice(0,findTheComment ), ...comments.slice(findTheComment + 1)];
console.log(newComments);
