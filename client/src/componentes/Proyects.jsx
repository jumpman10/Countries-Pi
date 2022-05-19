import React from 'react'
import '../styles/Proyects.css'


function Proyects(){
return(
    <div className="proyectos--ligth">
    <h2>Proyectos</h2>
       <div class='line-proyectos'>
         <div class='card2--ligth'>
           <h2>PetCare</h2>
           <h5>Desarrollo de una plataforma online de servicio que da la posibilidad de comprar, reservar y 
             visualizar posteos, podes elegir ser una persona que brinda servicios o busca servicios específicos 
             para el cuidado de su mascota, crear posteos, editarlos y eliminarlos, además de contar con un 
             panel de administrador y un mapa. Desarrollada por un equipo de 7 personas bajo la metodología SCRUM.  
             </h5>
             <div class='proyects'>
             <div class='botones'>
                   <a href="https://github.com/jumpman10/Pet-Care-React-Js" 
                    target="_blank" rel="noopener noreferrer" class='brand-repositorio'></a>
                   <h5>Repositorio</h5>
                </div>
                <div class='botones'>
                   <a href=" https://demopetcare.vercel.app/" 
                    target="_blank" rel="noopener noreferrer" class='brand-app'></a>
                   <h5>Demo</h5>
                </div>
             </div>
         </div>
         <div class='card2--ligth'>
         <h2>Countries</h2>
           <h5>La idea general de la aplicación es analizar la información de distintos 
               paises utilizando la api externa restcountries y a partir de ella poder, 
               entre otras cosas:
               </h5>
               <h5>-Buscar paises</h5>
                <h5>-Filtrarlos / Ordenarlos</h5>
                <h5>-Crear actividades turísticas </h5>

             
             <div class='proyects'>
             <div class='botones'>
                   <a href="https://github.com/jumpman10/Countries-Pi " 
                    target="_blank" rel="noopener noreferrer" class='brand-repositorio'></a>
                   <h5>Repositorio</h5>
                </div>
             </div>
         </div>
       </div>

  </div>
)
}

export default Proyects