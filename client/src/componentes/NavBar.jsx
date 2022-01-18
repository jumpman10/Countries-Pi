import React from 'react';
import { Link } from 'react-router-dom';
import s from '../styles/stylesComponentes.module.css'



function  Nav(){
    
        return(
            <nav>
            <div className={s.container}>
              <ul className={`${s.uli} ${s.letranav}`}>
              <li className={s.titulo}><a>Countries</a></li>
              <li className={s.move}><a>by Juan Pablo</a></li>
              <Link to={'/home'} >
              <button className={`${s.btnmove} ${s.btnnav}`}>Countries</button>
              </Link>
              <Link to={'/activities'}>
              <button className={`${s.btnmove2} ${s.btnnav}`}>Crear actividad</button>
              </Link>
              </ul>
            </div>
          </nav>
            
        )
    
}

export default Nav;