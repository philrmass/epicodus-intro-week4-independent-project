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

Pizza.prototype.getBasicToppings = function() {
  return ["Mushrooms", "Olives", "Pepperonchini", "Pineapple", "Roasted Red Pepper"];
}

Pizza.prototype.getPremiumToppings = function() {
  return ["Bacon", "Chicken", "Pepperoni", "Sausage"];
}

Pizza.prototype.addTopping = function(topping) {
  if(!this.toppings.includes(topping)) {
    this.toppings.push(topping);
    return true;
  }
  return false;
}

Pizza.prototype.removeTopping = function(topping) {
  let index = this.toppings.indexOf(topping);
  if(index != -1) {
    this.toppings.splice(index, 1);
    return true;
  }
  return false;
}

Pizza.prototype.calculateBaseCost = function(size) {
  const radius = (size / 2);
  const area = Math.PI * radius * radius;
  const costPerSquareInch = 0.12;
  const cost = Math.floor(costPerSquareInch * area);

  return cost;
}

Pizza.prototype.getToppingCost = function(isPremium) {
  const basicCost = 1.0;
  const premiumRatio = 1.5;

  if(isPremium) {
    return premiumRatio * basicCost;
  } else {
    return basicCost;
  }
}

Pizza.prototype.calculateToppingsCost = function(toppings) {
  const premiums = this.getPremiumToppings();
  const basicCost = this.getToppingCost(false);
  const premiumCost = this.getToppingCost(true);
  let cost = 0;

  toppings.forEach(function(topping) {
    cost += (premiums.includes(topping) ? premiumCost : basicCost);
  });

  console.log(toppings, "  $" + cost);
  return cost;
}

Pizza.prototype.calculateCost = function() {
  const baseCost = this.calculateBaseCost(this.size);
  const toppingsCost = this.calculateToppingsCost(this.toppings);

  return baseCost + toppingsCost;
}


// UI logic
function displayPizzaText(pizza) {
  let text = "Pizza, " + pizza.size + " in,";
  if(pizza.toppings.length !== 0) {
    for(let i = 0; i < pizza.toppings.length; i++) {
      text += " " + pizza.toppings[i];
    }
    text + ",";
  }
  text += " $" + pizza.calculateCost();
  console.log(text);
}

let pizza = new Pizza();
pizza.setSize(12);
displayPizzaText(pizza);

pizza.addTopping("Olives");
displayPizzaText(pizza);

pizza.addTopping("Pepperoni");
pizza.addTopping("Pepperoncini");
pizza.addTopping("Roasted Red Peppers");
displayPizzaText(pizza);

pizza.removeTopping("Olives");
displayPizzaText(pizza);

pizza.addTopping("Pepperoncini");
displayPizzaText(pizza);
