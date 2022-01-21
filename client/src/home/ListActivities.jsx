import React, {useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getActivities } from '../actions/countriesActions';
import '../App.css';
import ss from '../styles/stylesApp.module.css';
import s from '../styles/stylesComponentes.module.css';
import Header from '../componentes/Header';
import HeaderEnd from '../componentes/HeaderEnd';





function ListActivities(props){
    const dispatch = useDispatch()
    const activities = useSelector((state)=>state.activities)

    useEffect (()  => {
        dispatch(getActivities(activities))
      },[dispatch]);

      return(
        <div className='App Fondoweb'>
        <div>
            <Header/>
        </div>
        <div className={ss.moveCard}>
          {activities.slice().reverse().map(el=>{
            return(
              <div className={`${s.containerCard} ${s.bordercard} ${s.tamañocarddetailact} ${s.movecardetail}`}>
              <h2 className={s.line}>{el.name}</h2>
              <h3 className={s.textcard}>Dificultad = {el.dificulty} </h3> 
              <h3 className={s.textcard}>Duracion ={el.duration} </h3>
              <h3 className={s.textcard}>Estacion = {el.season}</h3> 
              </div>
            )
          })
        }   
        </div>
        <div className={s.movenav2}>
            <HeaderEnd/>
        </div>
        </div>
        
)


}




export default ListActivities