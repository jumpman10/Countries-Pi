import React, { useEffect, useState } from 'react'
import '../App.css';
import Nav from '../componentes/NavBar';
import ss from '../styles/stylesApp.module.css';
import s from '../styles/stylesComponentes.module.css'
import Nav2 from '../componentes/NavBar2';
import { useDispatch, useSelector } from "react-redux";
import { getCountries,addCountriesActivity,getCountrieName } from '../actions/countriesActions';
import axios from 'axios';
import Form from '../componentes/Form'
import { Link, useHistory } from 'react-router-dom';


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
    dificulty: 1,
    duration: 1,
    season:"",
})

useEffect(()=>{
    dispatch(getCountries())
},[])

function validate(input){
    let errors={};
    if(!input.name){
        errors.name = 'Se requiere un nombre de actividad'
    }
    return errors
}

function  handleChange(e){
setInput({
    ...input,
    [e.target.name] : e.target.value
})
setErrors(validate({
    ...input,
    [e.target.name] : e.target.value
}))
} 

function handleCheck(e){
    if(e.target.checked){
        setInput({
            ...input,
            season:e.target.value
        })
    }
}
 function  handleSelectDuration(e){
     setInput({
         ...input,
         duration: e.target.value,
   })
 }
 function  handleSelectDificulty(e){
     e.preventDefault()
    setInput({
        ...input,
        dificulty: e.target.value,
  })
}


function  handleSelectCountry(e){
    e.preventDefault()
    setIdcountry([...idcountry, e.target.value])
}
console.log(idcountry)



const handleSubmit= async (e)=> {
    e.preventDefault()
    let idActivity = 0
    const tourism = await  axios.post("http://localhost:3001/tourism",input)
    .then((activity)=>{
        console.log("jooooooolaaaa",activity.data)
        idActivity = activity.data.id
    })
    idcountry.forEach(act => {
        console.log(act)
    const activity2= axios.post(`http://localhost:3001/tourism/${idActivity}/countries/${act}`)
    
  })
  setInput({
   name:"",
  dificulty: 1,
  duration: 1,
  season:""})
  alert("Actividad creada")
  history.push('/activities')

 
} 

function handleDelete(el){
    setIdcountry(
        [idcountry.filter(cou=>cou !==el)]
    )
}

function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value)
    
    
    }
    function handleSubmitName(e){
        e.preventDefault()    
        dispatch(getCountrieName(e))
        setCurrentCountries(getCountrieName(e))
        console.log(name)
    }


    return(
        <div className='App Fondoact'>
<div>
    <Nav/>
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
            <label className={`${s.moveh3} ${s.ltform}`}>Dificultad (1 - 5)</label>
            <select className={s.formselect} onChange={(e)=>handleSelectDificulty(e)}>
                        <option value="">Seleccione una opcion</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
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
            <div className={s.movecheck}>
            <label ><input
            type="checkbox"
            name="summer"
            value="summer"
            onChange={(e)=>handleCheck(e)}/> Verano
            </label>
            <label><input
            type="checkbox"
            name="winter"
            value="winter"
            onChange={(e)=>handleCheck(e)}/> Winter
            </label>
            <label><input
            type="checkbox"
            name="spring"
            value="spring"
            onChange={(e)=>handleCheck(e)}/> Spring
            </label>
            <label><input
            type="checkbox"
            name="autumn"
            value="autumn"
            onChange={(e)=>handleCheck(e)}/> Autumn
            </label>
            </div>
            <div >
            <label className={`${s.moveh3} ${s.ltform}`}>Paises</label>
            <select className={s.formselect} onChange={(e)=>handleSelectCountry(e)}>
                {countries.map((el)=>(
                    <option value= {el.id}>{el.name}</option>
                                ))}
            </select>
           
            {idcountry.map(el =>
            <div className={s.movepaises} >
                <p>{el}</p>
                <button className={s.xbtn} >X</button>
            </div>
            )}
            </div>
                    <div>
                    <button type='submit'  
                    className={`${s.formbtn}`}>Crear</button>  
                    </div>
                    <div>
                    <Link to='/home'>
                    <button  
                    className={`${s.formbtn}`}>Home</button>  
                    </Link>
                    </div>
                    </div>
                      
                    </form>

        </div>
</div>

<div className={s.movenav2}>
    <Nav2/>
</div>
</div>

    )
}

export default Activities