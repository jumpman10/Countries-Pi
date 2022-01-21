import React from 'react';
import { Link } from 'react-router-dom';
import s from '../styles/stylesComponentes.module.css'



function  HeaderEnd(){
    
        return(
            
            <div className={s.container}>
              <ul className={`${s.uli} ${s.letranav}`}>
              <li className={s.titulo}><a>Countries</a></li>
              <li className={s.move}><a>by Juan Pablo</a></li>
              <Link to='https://github.com/jumpman10'>
              <button className={`${s.btnmove} ${s.btnnav}`}>GitHub</button>
              </Link>
              <button className={`${s.btnmove2} ${s.btnnav}`}>jpmoyano10@gmail.com</button>
              <button className={`${s.btnmove2} ${s.btnnav}`}>:)</button>
              </ul>
            </div>
         
            
        )
    
        }

export default HeaderEnd;