import React, { useState } from 'react';
import s from '../styles/stylesComponentes.module.css'
import { Link } from 'react-router-dom';



function Card({name, region, capital, subregion, population, flags, area,tourisms, id }){

  
const [ countrieName, setCountrieName ] = useState('');

const handleInputChange = (e) => {
  const value = e.target.value
  setCountrieName(value)
}

    
        return(
            
            
            <div className={`${s.containerCard} ${s.bordercard} ${s.tamañocard}`}>
            
            
              <div>
              <img src = {flags} alt = "Img not found" className={s.img}/>
              <h2 className={s.line}>{name}</h2>
              <h3 className={s.textcard}>Region = {region}  </h3> 
              <h3 className={s.textcard}>Capital = {capital} </h3>
              <h3 className={s.textcard}>Subregión = {subregion} </h3> 
              <h3 className={s.textcard}>Área = {area}mt2</h3>
              <h3 className={s.textcard}>Población = {population} </h3>
              <Link to={`/details/${id}`}>
              <button onChange={e =>handleInputChange(e)}className={s.btn}>Ir a pais</button>
              </Link>
                  </div>
                  </div>
                  
                  

        )
    
}

export default Card;