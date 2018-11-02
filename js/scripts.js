// Business logic
function Pizza(sizeInches = 10) {
  this.size = sizeInches;
  this.toppings = [];
}

Pizza.prototype.getSize = function() {
  return this.size;
}

Pizza.prototype.setSize = function(size) {
  this.size = size;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.calculateBaseCost = function(size) {
  const radius = (size / 2);
  const area = Math.PI * radius * radius;
  const costPerSquareInch = 0.12;
  const cost = Math.floor(costPerSquareInch * area);

  return cost;
}

Pizza.prototype.calculateToppingsCost = function(toppings) {
  let cost = 0;

  toppings.forEach(function(topping) {
    cost += 2;
  })

  return cost;
}

Pizza.prototype.calculateCost = function() {
  const baseCost = this.calculateBaseCost(this.size);
  const toppingsCost = this.calculateToppingsCost(this.toppings);

  return baseCost + toppingsCost;
}


// UI logic
let pizza = new Pizza();
pizza.setSize(12);
pizza.addTopping("pepperoni");
pizza.addTopping("olives");
const cost = pizza.calculateCost();
console.log(pizza, " cost=", cost);
