'use strict';

const express = require('express');

const Shoe = require('../models/shoe.js');
const shoe = new Shoe();

const routerShoe = express.Router();

routerShoe.get('/shoe', getShoe);
routerShoe.get('/shoe/:id', getOneShoe);
routerShoe.post('/shoe', createShoe);
routerShoe.put('/shoe/:id', updateShoe);
routerShoe.delete('/shoe/:id', deleteShoe);


function getShoe(req, res) {
  let getAllShoe = shoe.read();
  res.status(200).json(getAllShoe);
}

function getOneShoe(req, res) {
  const id = parseInt(req.params.id);
  let theShoe = shoe.read(id);
  res.status(200).json(theShoe);
}

function createShoe(req, res) {
  let content = req.body;
  let createdShoe = shoe.create(content);
  res.status(201).json(createdShoe);
}

function updateShoe(req, res) {
  const id = parseInt(req.params.id);
  let content = req.body;
  let newShoe = shoe.update(id, content);
  res.status(200).json(newShoe);
}

function deleteShoe(req, res) {
  const id = parseInt(req.params.id);
  shoe.delete(id);
  res.status(200).send({msg: 'shoe deleted'});
}

module.exports = routerShoe;