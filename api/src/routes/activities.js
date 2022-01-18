const server = require('express').Router();
const {Tourism, Country} = require('../db.js');
const axios = require('axios');
const { request, response } = require('express');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


server.post('/', async (req, res, next) => {
    try {
      const result = await Tourism.create(req.body);

      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  });


server.get('/', async (req, res, next) => {
    try {const result = await Tourism.findAll()
    res.status(201).json(result);
} catch (error) {
  next(error);
}

})
server.post('/:idTourism/countries/:idCountry', async(req, res, next) => {
    const {idTourism,idCountry} = req.params
    
    Tourism.findByPk(idTourism).then((oneTourism) => {
      Country.findByPk(idCountry)
        .then((newcountry) => {
          oneTourism.addCountry(newcountry);
        })
        .then((tourism) => {
          return res.status(201).json(tourism);
        })
        .catch((error) => {
          return res.status(400).json( console.log(error));
        });
    });
  });



module.exports = server;