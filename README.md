# Order Pizza

##### _A Pizza Restaurant Website to Practice JavaScript Objects_

#### By **Phil Mass**

## Description

_This website allows users to . You can view the deployed page [here](https://philrmass.github.io/order-pizza)._

## Setup and Installation

* Clone the project from https://github.com/philrmass/order-pizza.git to a local directory
* Open index.html in a browser

## Support and Contact Details

If you have any issues or questions, please email me at philrmass@gmail.com

## Test Specs

The following expectations were used to hand-test the project

Basic functionality
- [ ] create Pizza object with size and toppings properties
 * new Pizza() -> {size: 0, toppings: []}
- [ ] set Pizza size from constructor size parameter
 * new Pizza(sizeInches) -> {size: sizeInches, toppings: []}
- [ ] add Pizza prototype method to add a topping
 * pizza.addTopping("pepperoni") -> pizza.toppings = ["pepperoni"]
- [ ] add Pizza prototype method to calculate pizza cost
 * pizza.calculateCost() === 15.00
- [ ] include size in calculating pizza cost
 * 10 inch = $15.00, 12 inch == $20.00
- [ ] include toppings in calculating pizza cost
 * 2 toppings = $4.00 extra


## Objectives

This project was created as an independent project for Epicodus, Intro to Programming Course, Week 4 and completes the following objectives:

- [ ] Code meets standards from previous weeks.
- [ ] Constructors and prototypes are used successfully.
- [ ] Application works as expected.
- [ ] Plain English specs are included in your README.
- [ ] Required functionality is in place by the 5:00pm Friday deadline.
- [ ] Project is in a polished, portfolio-quality state.
- [ ] Project demonstrates an understanding of this week's concepts. If prompted, you can discuss your code with an instructor using correct terminology.

## Legal

Copyright (c) 2018 Phil Mass

Licensed under the MIT License