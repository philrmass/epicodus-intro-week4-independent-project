// Business logic
function Pizza(sizeInches = 10) {
  this.size = sizeInches;
  this.toppings = [];
}

Pizza.prototype.getSizeNames = function() {
  return ["Small", "Medium", "Large"];
}

Pizza.prototype.getSizeByName = function(name) {
  if(name === "Large") {
    return 14;
  } else if(name === "Medium") {
    return 12;
  } else {
    return 10;
  }
}

Pizza.prototype.setSize = function(size) {
  this.size = size;
}

Pizza.prototype.getSize = function() {
  return this.size;
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
  const costPerSquareInch = 0.12;

  const radius = (size / 2);
  const area = Math.PI * radius * radius;
  const cost = Math.floor(costPerSquareInch * area);

  return cost;
}

Pizza.prototype.getToppingCost = function(size, isPremium) {
  const basicCostPerSquareInch = 0.0095;
  const premiumRatio = 1.5;

  const radius = (size / 2);
  const area = Math.PI * radius * radius;
  const toFiveCents = 20;
  const basicCost = Math.round(toFiveCents * basicCostPerSquareInch * area) / toFiveCents;

  if(isPremium) {
    return (Math.round(toFiveCents * premiumRatio * basicCost) / toFiveCents);
  } else {
    return basicCost;
  }
}

Pizza.prototype.calculateToppingsCost = function(toppings) {
  const premiums = this.getPremiumToppings();
  const basicCost = this.getToppingCost(this.size, false);
  const premiumCost = this.getToppingCost(this.size, true);
  let cost = 0;

  toppings.forEach(function(topping) {
    cost += (premiums.includes(topping) ? premiumCost : basicCost);
  });

  return cost;
}

Pizza.prototype.calculateCost = function() {
  const baseCost = this.calculateBaseCost(this.size);
  const toppingsCost = this.calculateToppingsCost(this.toppings);

  return baseCost + toppingsCost;
}


// UI logic
let pizza = new Pizza();

function getPizzaSummary(pizza) {
  let text = "Pizza, " + pizza.size + " in,";
  if(pizza.toppings.length !== 0) {
    for(let i = 0; i < pizza.toppings.length; i++) {
      text += " " + pizza.toppings[i];
    }
    text + ",";
  }
  text += " $" + pizza.calculateCost();

  return text;
}

document.addEventListener("DOMContentLoaded", function() {
  let orderForm = document.getElementById("order-form");
  let orderSize = document.getElementById("order-size");
  let orderSummary = document.getElementById("order-summary");

  orderForm.onsubmit = function(event) {
    event.preventDefault();
    let sizeName = orderSize.options[orderSize.selectedIndex].value;
    let size = pizza.getSizeByName(sizeName);
    pizza.setSize(size);

    let cost = pizza.calculateCost();

    let summary = getPizzaSummary(pizza);
    orderSummary.innerHTML = summary;

    console.log(summary);
  }
});
/*
let pizza = new Pizza();
pizza.setSize(12);
getPizzaSummary(pizza);

pizza.addTopping("Olives");
getPizzaSummary(pizza);

pizza.addTopping("Pepperoni");
pizza.addTopping("Pepperoncini");
pizza.addTopping("Roasted Red Peppers");
getPizzaSummary(pizza);

pizza.removeTopping("Olives");
getPizzaSummary(pizza);

pizza.addTopping("Pepperoncini");
getPizzaSummary(pizza);
*/
