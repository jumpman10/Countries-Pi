import React, { useEffect, useState } from 'react'
import '../App.css';
import Header from '../componentes/Header';
import s from '../styles/stylesComponentes.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from '../actions/countriesActions';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import HeaderEnd from '../componentes/HeaderEnd';


function Activities(){
const dispatch =useDispatch();
const countries= useSelector((state)=>(state.countries));
const history = useHistory()
const [name, setName] = useState("");
const[idcountry,setIdcountry]= useState([])
const[currentCountries, setCurrentCountries] = useState('')
const [errors,setErrors] = useState({})
const [input,setInput]= useState({
    
    name:"",
    dificulty: 0,
    duration: 0,
    season:"",
})

useEffect(()=>{
    dispatch(getCountries())
},[])

function validateName(input){
    let errors={};
    if(!input.name){
        errors.name = 'Se requiere un nombre de actividad'
    }
    return errors 
    
}
function validateDificulty(input){
    let errors={};
    if(isNaN(input.dificulty)){
        errors.dificulty = 'SE REQUIERE SOLO UN NUMERO'
    }
    return errors 
    
}

function  handleChange(e){
    const value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)

setInput({
    ...input,
    [e.target.name] : value
})
setErrors(validateName({
    ...input,
    [e.target.name] : e.target.value
}))

} 





function handleSelectSeason(e){
    
        setInput({
            ...input,
            season:e.target.value
        })
    
}
 function  handleSelectDuration(e){
     setInput({
         ...input,
         duration: e.target.value,
   })
 }
 function  handleDificulty(e){
     
     e.preventDefault()
    setInput({
        ...input,
        dificulty: e.target.value,
  })
  setErrors(validateDificulty({
    ...input,
    [e.target.dificulty] : e.target.value
}))
}


function  handleSelectCountry(e){
    e.preventDefault()
    if(idcountry.includes(e.target.value)){
        setIdcountry([...idcountry.filter(elem => elem !== e.target.value)])
      }else{
        setIdcountry([...idcountry, e.target.value])
      }
    
}

const handleSubmit= async (e)=> {
    e.preventDefault()
    let idActivity = 0
    if(!input.name || !input.dificulty || input.dificulty < 1 || input.dificulty > 5 || isNaN(input.dificulty)){
        alert('Ingrese dato faltante para crear actividad o ingrese la dificultad adecuada')
        history.push('/activities')

    }else{
    const tourism = await  axios.post("http://localhost:3001/tourism",input)
    .then((activity)=>{
        idActivity = activity.data.id
        console.log("ssssssss" , idActivity)
    })
    idcountry.forEach(act => {
        console.log("aca estoy", act)
    const activity2= axios.post(`http://localhost:3001/tourism/${idActivity}/countries/${act}`)
    })
  setInput({
   name:"",
  dificulty: 0,
  duration: 0,
  season:""})
  alert("Actividad creada")
  history.push('/home')
  
 
} 
}

function handleDelete(e){

   setIdcountry([idcountry.filter(elem => elem !== e)]) 
    console.log("aca estoy", idcountry)
}

    return(
        <div className='App Fondoact'>
<div>
    <Header/>
</div>
<div>
<div className={s.form}>
            <h1>Crear Actividad</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <div className={`${s.borderform} ${s.floatform}`}>
            <label className={`${s.moveh3} ${s.ltform}`}>Nombre</label>
            <input 
                    type="text" 
                    placeholder='Ingrese nombre'
                    className={`${s.tamañoinput} ${s.borderinput} ${s.inputform}`}
                    value={input.name}
                    name="name"
                    onChange={(e)=>handleChange(e)}/>   
                    {errors.name &&(
                        <p>{errors.name}</p>
                    )}
                    <div className={` ${s.floatform}`}>
                    <label className={`${s.moveh3} ${s.ltform}`}>Dificultad (1-5)</label>
            <input 
                    type="text" 
                    placeholder='Ingrese dificultad (1-5)'
                    className={`${s.tamañoinput} ${s.borderinput} ${s.inputform}`}
                   
                    onChange={(e)=>handleDificulty(e)}/>   
                    {errors.dificulty &&(
                        <p>{errors.dificulty}</p>
                    )}
                    </div>

            <label className={`${s.moveh3} ${s.ltform}`}>Duracion</label>
            <select className={s.formselect} onChange={(e)=>handleSelectDuration(e)}>
                        <option value="">Seleccione una opcion</option>
                        <option value="1">1 hora</option>
                        <option value="2">2 horas</option>
                        <option value="3">3 horas</option>
                        <option value="4">4 horas</option>
                        <option value="5">5 horas</option>
                    </select>
             
            <label className={`${s.moveh3} ${s.ltform}`}>Season</label>
            <select className={s.formselect} onChange={(e)=>handleSelectSeason(e)}>
                        <option value="">Seleccione una opcion</option>
                        <option value="summer">Verano</option>
                        <option value="winter">Invierno</option>
                        <option value="autumn">Otoño</option>
                        <option value="spring">Primavera</option>
                    </select>
            <div >
            <label className={`${s.moveh3} ${s.ltform}`}>Paises</label>
            <select className={s.formselect} onChange={(e)=>handleSelectCountry(e)}>
                <option>Seleccione un pais</option>
                {countries.map((el)=>(
                    <option value= {el.id}>{el.name}</option>
                                ))}
            </select>
           
            {idcountry.map(el =>
            <div className={s.movepaises} >
                <p>{el}</p>
                <button className={s.xbtn} onClick={el=>handleDelete(el)}>X</button>
                </div>
                
            )}
            
            </div>

                    <div>
                    <button type='submit'  
                    className={`${s.formbtn}`}>Crear</button>  
                    </div>
                    </div>
                      
                    </form>

        </div>
</div>

<div className={s.movenav2}>
    <HeaderEnd/>
</div>
</div>

    )
}

export default Activities