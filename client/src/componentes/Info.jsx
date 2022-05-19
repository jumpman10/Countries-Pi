import React from 'react'
import '../styles/Info.css'

function Info(){
return (
    <div class='position-info'>
    <div className="card--ligth">
    <h2>Educación</h2>
    <h4>Bootcamp Henry</h4>
    <div class='certificado'>
    <a href="https://certificates.soyhenry.com/cert?id=5d5358a6-9810-48d5-87e3-d3535ed50451" 
  target="_blank" rel="noopener noreferrer" class='brand-certificado'></a>
  <h3>Certificado</h3>
  </div>
  </div>
  <div className="card--ligth" >
  <h2>Idiomas</h2>
    <h4>Ingles - B2 UPPER INTERMEDIATE</h4>
    <div class='certificado'>
    <a href="https://www.efset.org/cert/c8uwm2" 
  target="_blank" rel="noopener noreferrer" class='brand-certificado'></a>
  <h3>Certificado</h3>
  </div>
  </div>
  </div>
)
}
export default Info