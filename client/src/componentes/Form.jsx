import React from 'react';
import { Link } from 'react-router-dom';
import s from '../styles/stylesComponentes.module.css'


function Form(){
    return(
        <div className={s.form}>
            <h1>Crear Actividad</h1>
            <div className={`${s.borderform} ${s.floatform}`}>
            <h3 className={s.moveh3}>Nombre</h3>
            <input 
                    type="text" 
                    placeholder='Ingrese pais'
                    className={`${s.tamañoinput} ${s.borderinput} ${s.inputform}`}/>   
            <h3 className={s.moveh3}>Dificultad (1 - 5)</h3>
            <select className={s.formselect}>
                        <option value="">Seleccione una opcion</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                    </select>

            <h3 className={s.moveh3}>Duracion</h3>
            <input 
                    type="text" 
                    placeholder='Ingrese pais'
                    className={`${s.tamañoinput} ${s.borderinput} ${s.inputform}`}/>

            <h3 className={s.moveh3}>Season</h3>
            <select className={s.formselect}>
                        <option value="">Seleccione una opcion</option>
                        <option value="">Winter</option>
                        <option value="">Summer</option>
                        <option value="">Fall</option>
                        <option value="">Spring</option>
                    </select>
                    <div>
                    <button type='submit'  
                    className={`${s.formbtn}`}>Crear</button>  
                    </div>
                    </div>
                      

        </div>
    )
}




export default Form