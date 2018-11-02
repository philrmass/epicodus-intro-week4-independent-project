// Business logic
function Pizza(sizeInches) {
  this.size = sizeInches;
  this.toppings = [];
}


// UI logic
var pizza = new Pizza(10);
console.log(pizza);
