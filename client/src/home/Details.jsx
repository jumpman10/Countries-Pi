import React, {useEffect, useState } from 'react'
import { getCountrieName } from '../actions/countriesActions';
import '../App.css';
import Header from '../componentes/Header';
import s from '../styles/stylesComponentes.module.css';
import { useDispatch, useSelector } from "react-redux";
import HeaderEnd from '../componentes/HeaderEnd';






function Details(props){
  const id = props.id;
  const dispatch = useDispatch();
  const countrieName = useSelector((state) => state.country);

  

  useEffect(() => {
      dispatch(getCountrieName((id)))
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
     aux = aux +", "+ element.name
   }
  })
 console.log(aux)
 let aux2=''
 let activities2 =countrieName.tourisms && countrieName.tourisms.map(element => { 
   console.log(element)
  if(aux2===''){ 
    aux2= element.duration
  }else{
    aux2 = aux2 +" horas, " + element.duration +" horas"
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
    dificulty = element.dificulty
  
  }else{
    dificulty = dificulty+" "+ element.dificulty
  }
 })
 
 
 

    return (
      <div className='App Fondoweb'>
      <div>
          <Header/>
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
      <h2 className={s.line}>Actividades</h2>
      <h3 className={`${s.textcard} ${s.column}`}>Nombre = {aux}</h3>
      <h3 className={s.textcard}>Duracion = {aux2}</h3>
      <h3 className={s.textcard}>Estacion = {season}</h3>
      <h3 className={s.textcard}>Dificultad = {dificulty}</h3>
          </div>
          </div>
      
      <div className={s.movenav2}>
          <HeaderEnd/>
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