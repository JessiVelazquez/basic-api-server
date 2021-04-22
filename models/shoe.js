'use strict';

const FoodModel = require('./food.js')

class ShoeModel extends FoodModel {
  constructor(id, record) {
    super(0, []);
  };
};

module.exports = ShoeModel;