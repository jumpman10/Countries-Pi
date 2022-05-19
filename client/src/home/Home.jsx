import React from 'react'
import '../styles/Home.css'
import Nav from '../componentes/Nav';
import About from '../componentes/About';
import Info from '../componentes/Info';
import Skills from '../componentes/Skills';
import Proyects from '../componentes/Proyects';
import Footer from '../componentes/Footer';


function Home() {   
    return (
  <div>
    <div class='position-nav'>
      <Nav/>
    </div>   
        <div class='position-about'>
        <About/>
        </div>
  <div >
    <Info/>
  </div>
  <div class='position-about'>
      <Skills/>
  </div>
  <div class='position-about'>
     <Proyects/>
    </div>
  <div class='position-footer'>
  <Footer/>
  </div>

</div>   
);
}

export default Home

