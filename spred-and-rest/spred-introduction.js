const featured = ['Deep Dish','pepperoni','Hawaiian'];
const specialty = ['Meatzza','Spicy Mama','Margherita'];

const pizzas = [...featured,...specialty];
console.log(pizzas);

const fridayPizzas = [...featured,...specialty];
fridayPizzas[0] = 'veggie';
console.log(fridayPizzas);
