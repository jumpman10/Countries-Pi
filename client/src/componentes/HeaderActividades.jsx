import React from 'react';
import s from '../styles/stylesComponentes.module.css'



function HeaderAct() {
    return(
        <header className={`${s.containerHeader} ${s.flexheader} ${s.moveheader} ${s.borderheader}`}>
            
            <div className={`${s.flexbtninput} ${s.line2}`}>
            <form>
                <input type="text" placeholder='Ingrese pais' className={`${s.tamañoinput} ${s.borderinput}`}/>
            </form>
            <div>
                <button className={s.btn}>Buscar</button>
            </div>
            </div>
            
            <div className={s.moveselect}>
                <h4>Continente</h4>
                <select className={s.select}>
                    <option value="">Seleccione una opcion</option>
                    <option value="">Europa</option>
                    <option value="">Asia</option>
                    <option value="">Oceania</option>
                    <option value="">África</option>
                    <option value="">América </option>
                </select>
            </div>
            <div className={s.moveselect}>
                <h4>Orden</h4>
                <select className={s.select}>
                    <option value="">Seleccione una opcion</option>
                    <option value="">A-Z</option>
                    <option value="">Z-A</option>
                    <option value="">Mayor a menor Población</option>
                    <option value="">Menor a mayor Población</option>
                    <option value="">Mayor a menor Área</option>
                    <option value="">Menor a mayor Área</option>
                </select>
            </div>
            <div className={`${s.borderact} ${s.flexact} ${s.moveact}`}>
                <div>
                <h4 className={s.moveh4}>Actividades</h4>
                <button className={`${s.btnact} ${s.flexbtnheader}`}>Buscar</button>
                </div>
                <div className={`${s.flexselect} ${s.moveselect2}`}>
                <select className={s.select}>
                    <option value="">Seleccione una opcion</option>
                    <option value="">Z-A</option>
                </select>
                <select className={`${s.select} ${s.select2}`}>
                    <option value="">Seleccione una opcion</option>
                    <option value="">Z-A</option>

                </select>
                <select className={`${s.select} ${s.select2}`}>
                    <option value="">Seleccione una opcion</option>
                    <option value="">Z-A</option>

                </select>
                <select className={`${s.select} ${s.select2}`}>
                    <option value="">Seleccione una opcion</option>
                    <option value="">Z-A</option>

                </select>
                <select className={`${s.select} ${s.select2}`}>
                    <option value="">Seleccione una opcion</option>
                    <option value="">Z-A</option>

                </select>
               
                </div>
            </div>
        </header>
        
    )

}

export default HeaderAct;