import React, { useEffect, useState} from 'react'
import { getCountries,filterCountrybyRegion, orderByName,getCountrieName,filterCountrybySubregion,getActivities} from '../actions/countriesActions';
import '../App.css';
import Card from '../componentes/Card';
import Header from '../componentes/Header';
import Nav from '../componentes/NavBar';
import s from '../styles/stylesApp.module.css';
import ss from '../styles/stylesComponentes.module.css';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Nav2 from '../componentes/NavBar2';
import Paginado from '../componentes/Paginado';




function Home() {

 const dispatch = useDispatch();
 const allCountries = useSelector((state) => state.countries);
 const [input, setInput] = useState("");
 const countrie =useSelector((state)=> state.country)
 const activities = useSelector((state)=>state.activities)
 
 
 useEffect (()  => {
  dispatch(getActivities())
},[dispatch,getActivities]);





 useEffect (()  => {
  dispatch(getCountries())
},[dispatch,getCountries]);
//setCurrentCountries(allCountries)

const[currentCountries, setCurrentCountries] = useState('')
 const[currentPage, setCurrentPage] = useState(1);
 const[countriesPerPage] = useState(10);
 const indexOfLastCountrie = currentPage * countriesPerPage; //10
 const indexOfFirstCountrie = indexOfLastCountrie - countriesPerPage; //0
 
const paginado = (pageNumbers) =>{
   setCurrentPage(pageNumbers) 
}
useEffect (()  => {
  setCurrentCountries(allCountries)
},[setCurrentCountries,allCountries]);
//setCurrentCountries(allCountries)

function handlerFilterRegion(e){
  e.preventDefault(e)
  setCurrentPage(1)
  const filtroregion = allCountries.filter(country=> country.region === e.target.value)
   
  //dispatch(filterCountrybyRegion(e.target.value))
  setCurrentCountries(filtroregion)
  
  
}
function handlerFilterSubregion(e){
  e.preventDefault(e)
  setCurrentPage(1)
  
  const filtrosubregion = allCountries.filter(country=> country.subregion === e.target.value)
   
  //dispatch(filterCountrybyRegion(e.target.value))
  setCurrentCountries(filtrosubregion)

  
  
}



 function handlerSort(e){
  e.preventDefault(e);
  setCurrentPage(1)
  if(e.target.value === 'asc'){ 
    const ordenado = [...currentCountries].sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0)) 
  setCurrentCountries(ordenado)}
  else if(e.target.value === 'desc'){
    const ordenado = [...currentCountries].sort((a, b) => (a.name < b.name ? 1 : a.name > b.name ? -1 : 0))
    setCurrentCountries(ordenado)
  }
  else if(e.target.value === 'men'){ 
    const ordenado = [...currentCountries].sort((a, b) => (a.population > b.population  ? 1 : a.population  < b.population  ? -1 : 0)) 
  setCurrentCountries(ordenado)}  
  else if(e.target.value === 'may'){
    const ordenado = [...currentCountries].sort((a, b) => (a.population < b.population ? 1 : a.population  > b.population  ? -1 : 0))
    setCurrentCountries(ordenado)
  }
  else if(e.target.value === 'mena'){ 
    const ordenado = [...currentCountries].sort((a, b) => (a.area > b.area  ? 1 : a.area  < b.area  ? -1 : 0)) 
  setCurrentCountries(ordenado)}  
  else if(e.target.value === 'maya'){
    const ordenado = [...currentCountries].sort((a, b) => (a.area < b.area ? 1 : a.area  > b.area  ? -1 : 0))
    setCurrentCountries(ordenado)
  }
 }

 function handlerActivity(e){
   console.log(e.target.value)
   console.log(allCountries.filter(country=>country.tourisms.find(activity=>activity.id === 1)))
const filtrado = allCountries.filter(country=>country.tourisms.find(activity=>activity.id === parseInt(e.target.value)))
console.log(filtrado)
setCurrentCountries(filtrado)
 }

function handleInputChange(e){
    const datos = allCountries.filter(country=>country.name === e.target.value)    
    setCurrentCountries(datos)
  }

    
    return (
        <div className='App Fondoweb'  >
          <div>
            <Nav/>
          </div>
          <div>
          <header className={`${ss.containerHeader} ${ss.flexheader} ${ss.moveheader} ${ss.borderheader}`}>
                
                <div className={`${ss.flexbtninput} ${ss.line2}`}>
                <form  >
                    <input 
                    type="text" 
                    placeholder='Ingrese pais' 
                    onChange={(e)=> handleInputChange(e)} 
                    className={`${ss.tamañoinput} ${ss.borderinput}`}/>
                    <button
                    
                    className={ss.btn}>Buscar</button>
                </form>
                <div>

                </div>
                </div>
                
                <div className={ss.moveselect}>
                    <h4>Region</h4>
                    <select className={ss.select} onChange={e => handlerFilterRegion(e)} >
                        <option value="All">Seleccione una opcion</option>
                        <option value="Europe">Europe</option>
                        <option value="Asia">Asia</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Africa">África</option>
                        <option value="Americas">América </option>
                        <option value="Antarctic">Antartic</option>
                    </select>
                </div>
                <div className={ss.moveselect}>
                    <h4>Subregion</h4>
                    <select className={ss.select} onChange={e => handlerFilterSubregion(e)} >
                        <option value="All">Seleccione una opcion</option>
                        <optgroup label='Europe'>
                        <option value="Western Europe">Western Europe</option>
                        <option value="Central Europe">Central Europe</option>
                        <option value="Northern Europe">Northern Europe</option>
                        <option value="Eastern Europe">Eastern Europe</option>
                        <option value="Southeast Europe">Southeast Europe</option>
                        <option value="Southern Europe">Southern Europe</option>
                        </optgroup>
                        <optgroup label='Asia'>
                        <option value="Southern Asia">Southern Asia</option>
                        <option value="Western Asia">Western Asia</option>
                        <option value="Eastern Asia">Eastern Asia</option>
                        <option value="South-Eastern Asia">South-Eastern Asia</option>
                        <option value="Central Asia">Central Asia</option>
                        </optgroup>
                        <optgroup label='Africa'>
                        <option value="Eastern Africa">Eastern Africa</option>
                        <option value="Middle Africa">Middle Africa</option>
                        <option value="Southern Africa">Southern Africa</option>
                        <option value="Western Africa">Western Africa</option>
                        <option value="Northern Africa">Northern Africa</option>
                        </optgroup>
                        <optgroup label='Oceania'>
                        <option value="Micronesia">Micronesia</option>
                        <option value="Melanesia">Melanesia</option>
                        <option value="Polynesia">Polynesia</option>
                        <option value="Australia and New Zealand">Polynesia</option>
                        <option value="Australia and New Zealand">Australia and New Zealand</option>
                        </optgroup>
                        <optgroup label='Americas'>
                        <option value="North America">North America</option>
                        <option value="Caribbean">Caribbean</option>
                        <option value="Central America">Central America</option>
                        <option value="South America">South America </option>
                        </optgroup>
                    </select>
                </div>
              <div className={ss.moveselect}>
                    <h4>Orden</h4>
                    <select  className={ss.select} onChange={e => handlerSort(e)}>
                      <option value="All">Seleccione una opcion</option>
                      <option value="asc">A-Z</option>
                      <option value= "desc">Z-A</option>
                      <option value= "men">Menor a mayor poblacion</option>
                      <option value= "may">Mayor a menor poblacion</option>
                      <option value= "mena">Menor a mayor area</option>
                      <option value= "maya">Mayor a menor area</option>
                    </select>
                </div>
                <div className={ss.moveselect}>
                    <h4>Actividades</h4>
                    <select  className={ss.select} onChange={e => handlerActivity(e)}>
                      <option value="All">Seleccione una opcion</option>
                      { 
                         activities.map(activity=>(

                          <option value={activity.id}>{activity.name}</option> 
                        ))

                      }
                      
                    </select>
                </div>
            </header>
          </div>
            <div className={s.moveCard}>
              {
                currentCountries? currentCountries.slice(indexOfFirstCountrie, indexOfLastCountrie).map(el=>{
                  return(
                <Card
                id={el.id}
                name={el.name}
                flags={el.flag}
                region={el.region}
                subregion={el.subregion}
                capital={el.capital}
                population={el.population} 
                area={el.area}
                tourisms={el.tourisms}
                key={el.id}/> )
               }):
              <span></span>
              }
              </div>
              <div>
               <Paginado
                 countriesPerPage={countriesPerPage}
                 allCountries={currentCountries && currentCountries.length}
                 paginado={paginado}
                 />
               </div>
               <div className={ss.movenav2}>
               
                <Nav2/>
                </div>
        </div>
      );

}

export default Home
