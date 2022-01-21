const server = require('express').Router();
const axios = require('axios');
const { request, response, Router } = require('express');
const {Country, Tourism } = require('../db.js');





server.get('/', async (req, res, next) => {
    try {
        let allApi=[];
        
    const count = await axios.get(`https://restcountries.com/v3/all`)
    .then(all => {
      
        allApi=all.data;
      })

      const country = await Country.findAll({    
        include:[{model:Tourism}] 
      })
       
    if(country.length < 1){
      
     allApi.forEach(element=>{
      const obj = { id: element.cca3,
                   name: element.name.common,
                   flag: element.flags[0],
                   region: element.region,
                   capital: element.capital && element.capital[0] ? element.capital[0] : '-',
                   subregion:element.subregion ? element.subregion :'-' ,
                   area:element.area,
                   population: element.population,
                  }
           
     const countryCreated = Country.create(obj);
     })
      }
       return res.json(country)
    } catch (error) {
      next(error);
    }
  });

  server.get('/:id',async (req, res, next) =>{
    try {
      
      const {id} = req.params
      const pais = await Country.findOne({
        where: {id:id},
        include:[{model:Tourism}] 
     });

         return res.status(200).json(pais);
       
    } catch (error) {
      console.log(error)
      return res.send(error)
    }
  })

                    





  server.get('/prueba/:code',async (req, res, next) =>{
    try {
      const {code} = req.params
      const pais = await axios.get(`https://restcountries.com/v3/alpha/${code}`)
      
      .then( element=>{
        console.log(element.data)
        // const obj = {  
        //   name: element.data[0].name.common,
        //   flag: element.data[0].flags[0],
        //   region: element.data[0].region,
        //   capital: element.data[0].capital && element.data[0].capital[0] ? element.data[0].capital[0] : ' ',
        //   subregion:element.data[0].subregion,
          
        //   population: element.data[0].population,
        //  }
         return res.status(200).json(element.data);
        })
    } catch (error) {
      return res.send(error)
    }
  })


  const getDBinfo = async ()=>{
    return await Country.findAll({
      include:{
        model:Tourism,
        attributes: ['name'],
        through:{
          attributes:[],
        }
    }
  })
}







  module.exports = server;