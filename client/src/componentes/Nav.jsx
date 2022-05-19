import React from 'react'
import '../styles/Nav.css'
import cv from '../archivos/CvMoyano,JuanPablo.pdf'
function Nav (){
    function myFunction(e) {
        e.preventDefault();       
        var copyText = document.getElementById("myInput")     
        copyText.select();
        copyText.setSelectionRange(0, 99999); 
        navigator.clipboard.writeText(copyText.value);       
        alert("Mi email ya fue copiado = " + copyText.value);
      }
return(
    <div class='nav'>
    <div class='contacto'>
      <div class='botones'>
    <a href="https://www.linkedin.com/in/juanpablo-moyano/" 
    target="_blank" rel="noopener noreferrer" class='brand-logo-linkedin'></a>
    <h5>Linkedin</h5>
    </div>
    <div class='botones'> 
    <a href="https://github.com/jumpman10" 
    target="_blank" rel="noopener noreferrer" class='brand-logo-github'></a>
    <h5>Github</h5>
    </div>
    <div class='botones'>
    <button  onClick={e => myFunction(e)} class='brand-logo-gmail'></button>
    <h5>Gmail</h5>
    </div >
    <div class='botones'>
    <a href={cv} download='Cv-Moyano-Juan-Pablo.pdf' class='brand-cv'></a>
    <h5>CV</h5>
    </div>
    </div>
</div> 
)
}

export default Nav