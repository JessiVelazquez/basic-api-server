'use strict';

const express = require('express');

const Food = require('../models/food.js');
const food = new Food();

const routerFood = express.Router();

routerFood.get('/food', getFood);
routerFood.get('/food/:id', getOneFood);
routerFood.post('/food', createFood)
routerFood.put('/food/:id', updateFood);
routerFood.delete('/food/:id', deleteFood);


function getFood(req, res) {
  let getAllFood = food.read();
  res.status(200).json(getAllFood);
}

function getOneFood(req, res) {
  const id = parseInt(req.params.id);
  let theFood = food.read(id);
  res.status(200).json(theFood);
}

function createFood(req, res) {
  let content = req.body;
  let createdFood = food.create(content);
  res.status(201).json(createdFood);
}

function updateFood(req, res) {
  const id = parseInt(req.params.id);
  let content = req.body;
  let newFood = food.update(id, content);
  res.status(200).json(newFood);
}

function deleteFood(req, res) {
  const id = parseInt(req.params.id);
  food.delete(id);
  res.status(200).send({msg: 'food item deleted'});
}

module.exports = routerFood;