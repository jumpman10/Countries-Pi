import React from 'react'
import s from '../styles/stylesComponentes.module.css';
import aa from '../styles/stylesApp.module.css';
import '../App.css';
import { Link } from 'react-router-dom';
import Nav2 from './NavBar2';

function Landing() {
    return(
        <div className='App Fondolanding'>
            <div className={` ${s.containerlanding}`}>
            <li className={`${s.tituloLanding} `}>Countries</li>
            <li className={s.h4landing}>by Juan Pablo</li>
            </div>
            <div className={`${s.container} ${s.movebtnentrar}`}>
            <Link to={'/home'} >
                <button className={`${s.btnentrar}`}>Entrar</button>
            </Link>
            </div>
            <Nav2/>
            
        </div>
    )
}




export default Landing