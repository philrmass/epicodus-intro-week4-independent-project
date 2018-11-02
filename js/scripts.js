// Business logic
function Pizza(sizeInches) {
  this.size = sizeInches;
  this.toppings = [];
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}


// UI logic
var pizza = new Pizza(10);
pizza.addTopping("pepperoni");
pizza.addTopping("olives");
console.log(pizza);
