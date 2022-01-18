import React from 'react';
import s from '../styles/stylesComponentes.module.css';



function Header() {



        return(
            <header className={`${s.containerHeader} ${s.flexheader} ${s.moveheader} ${s.borderheader}`}>
                
                <div className={`${s.flexbtninput} ${s.line2}`}>
                <form>
                    <input 
                    type="text" 
                    placeholder='Ingrese pais' 
                    
                    className={`${s.tamañoinput} ${s.borderinput}`}/>
                    <button type='submit'  
                    
                    className={s.btn}>Buscar</button>
                </form>
                <div>

                </div>
                </div>
                
                <div className={s.moveselect}>
                    <h4>Continente</h4>
                    <select className={s.select}>
                        <option value="All">Seleccione una opcion</option>
                        <option value="Europe">Europa</option>
                        <option value="Asia">Asia</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Africa">África</option>
                        <option value="America">América </option>
                    </select>
                </div>
              <div className={s.moveselect}>
                    <h4>Orden</h4>
                    <div>
                
                        <button >A-Z</button>
                        <button >Z-A</button>
                    </div>
                </div>
            </header>
            
        )
    
}


export default Header;