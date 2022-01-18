import React from 'react';
import s from '../styles/stylesComponentes.module.css'




function CardDetail({name, region, capital, subregion, population, flags, area }){
    
        return(
            
            
            <div className={`${s.containerCard} ${s.bordercard} ${s.tamañocarddetail}`}>
            
            
              <div>
              <img src = {flags} alt = "Img not found" className={s.img}/>
              <h2 className={s.line}>{name}</h2>
              <h3 className={s.textcard}>Continente = {region}  </h3> 
              <h3 className={s.textcard}>Capital = {capital} </h3>
              <h3 className={s.textcard}>Subregión = {subregion} </h3> 
              <h3 className={s.textcard}>Área = {area}mt2</h3>
              <h3 className={s.textcard}>Población = {population} </h3>
              <button className={s.btn}>Ir a pais</button>
                  </div>
                  </div>
                  
                  

        )
    
}

export default CardDetail;