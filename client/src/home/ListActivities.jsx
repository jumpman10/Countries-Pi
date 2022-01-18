import React, {useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getActivities } from '../actions/countriesActions';
import '../App.css';
import s from '../styles/stylesComponentes.module.css';
import Nav from '../componentes/NavBar';
import Nav2 from '../componentes/NavBar2';




function ListActivities(props){
    const dispatch = useDispatch()
    const activities = useSelector((state)=>state.activities)
    console.log(activities)
    const[currentActivities, setCurrentActivities] = useState('')
    useEffect (()  => {
        dispatch(getActivities())
      },[dispatch,getActivities]);

      return(
        <div className='App Fondoweb'>
        <div>
            <Nav/>
        </div>
        <div className={`${s.containerCard} ${s.bordercard} ${s.tamañocarddetail} ${s.movecardetail}`}>
          <div>
        <h2 className={s.line}>Activities= {activities.name}</h2>
        <h3 className={s.textcard}>Dificulty = {activities.dificulty} </h3> 
        <h3 className={s.textcard}>Duration ={activities.duration} </h3>
        <h3 className={s.textcard}>Season = {activities.season}</h3> 
        <h2 className={s.line}>.</h2>
            </div>
            </div>
        
        <div className={s.movenav2}>
            <Nav2/>
        </div>
        </div>
        
)


}




export default ListActivities