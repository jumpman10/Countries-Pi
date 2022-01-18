import React, {useEffect, useState } from 'react'
import { getCountrieName } from '../actions/countriesActions';
import '../App.css';
import Nav from '../componentes/NavBar';
import Nav2 from '../componentes/NavBar2';
import ss from '../styles/stylesApp.module.css';
import s from '../styles/stylesComponentes.module.css';
import HeaderAct from '../componentes/HeaderActividades';
import CardDetail from '../componentes/CardDetail';

import { useDispatch, useSelector } from "react-redux";






function Details(props){
  const id = props.id;
  const dispatch = useDispatch();
  const countrieName = useSelector((state) => state.country);

  

  useEffect(() => {
      dispatch(getCountrieName(parseInt(id)))
    }, [dispatch,id]);
  
console.log(countrieName)
  let aux=''
  let activities =countrieName.tourisms && countrieName.tourisms.map(element => { 
    console.log(element)
   if(aux===''){ 
     console.log("entrea al if" , element.name)
     aux = element.name
     console.log(aux)
   }else{
     aux = aux +" "+ element.name
   }
  })
 console.log(aux)
 let aux2=''
 let activities2 =countrieName.tourisms && countrieName.tourisms.map(element => { 
   console.log(element)
  if(aux2===''){ 
    console.log("entrea al if" , element.duration)
    aux2= element.duration
    console.log(aux2)
  }else{
    aux2 = aux2 +" horas"+" "+ element.duration + " horas"
  }
 })

 let season=''
 let activities3 =countrieName.tourisms && countrieName.tourisms.map(element => { 
   console.log(element)
  if(season===''){ 
    console.log("entrea al if" , element.season)
    season = element.season
    console.log(aux2)
  }else{
    season = season +" "+ element.season
  }
 })

 
 let dificulty=''
 let activities4 =countrieName.tourisms && countrieName.tourisms.map(element => { 
   console.log(element)
  if(dificulty===''){ 
    console.log("entrea al if" , element.dificulty)
    dificulty = element.dificulty
    console.log(aux2)
  }else{
    dificulty = dificulty+" "+ element.dificulty
  }
 })
 
 
 

    return (
      <div className='App Fondoweb'>
      <div>
          <Nav/>
      </div>
      <div className={`${s.containerCard} ${s.bordercard} ${s.tamañocarddetail} ${s.movecardetail}`}>
        <div>
      <img src ={countrieName.flag} alt = "Img not found" className={s.img}/>
      <h2 className={s.line}>{countrieName.name}</h2>
      <h3 className={s.textcard}>Continente =  {countrieName.region}</h3> 
      <h3 className={s.textcard}>Capital = {countrieName.capital}</h3>
      <h3 className={s.textcard}>Subregión = {countrieName.subregion}</h3> 
      <h3 className={s.textcard}>Área = {countrieName.area} mt2</h3>
      <h3 className={s.textcard}>Población = {countrieName.population} </h3>
      <h2 className={s.line}>.</h2>
      <h3 className={s.textcard}>Actividades = {aux}</h3>
      <h3 className={s.textcard}>Actividades = {aux2}</h3>
      <h3 className={s.textcard}>Actividades = {season}</h3>
      <h3 className={s.textcard}>Actividades = {dificulty}</h3>
          </div>
          </div>
      
      <div className={s.movenav2}>
          <Nav2/>
      </div>
      </div>
      
      
      
      
      
      
      
      
      
      

          
      );
}







/*<div className='App Fondoweb'  >
<div>
  <Nav/>
</div>
  <div className={s.moveCard}>
   {
  countrie?.map(el=>{
        
        return(
       <CardDetail
        name={el.name}
        flags={el.flag} 
        region={el.region}
        subregion={el.subregion}
        capital={el.capital}
        population={el.population} 
        area={el.area}
        key={el.id}/> 
        )
      })
    }
    </div>
  <div className={ss.movenav2}>
      <Nav2/>
      </div>
</div>*/





export default Details