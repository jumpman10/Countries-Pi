import axios from "axios";

import { GET_COUNTRIES,
    GET_COUNTRIES_ERROR,
    GET_COUNTRIES_NAMES,
    GET_COUNTRIE_NAME_ERROR,
    CREATED_ACTIVITY,
CREATED_ACTIVITY_ERROR,COUNTRIES_ACTIVITY,COUNTRIES_ACTIVITY_ERROR,GET_ACTIVITIES,GET_ACTIVITIES_ERROR
} from '../constants/countrysConstants'

    const url = "http://localhost:3001/";
    

    export const getCountries = () => async (dispatch) => {
        try{
            const json = await axios.get(`${url}countries`)
    
        dispatch({
            type: GET_COUNTRIES,
            payload: json.data,
        })
        
        } catch(error) {
            dispatch({
                type: GET_COUNTRIES_ERROR,
                payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
            })
        }
    };


    export const getCountrieName = (id) => async (dispatch) => {
        try{
            
    
            const json = await axios.get("http://localhost:3001/countries/" + id)

        dispatch({
            type: GET_COUNTRIES_NAMES,
            payload: json.data,
        })
        
        } catch(error) {
console.log(error)
        }
    };


    export const createdActivity = (countrie) => async (dispatch) => {
        try{
    
            const json  = await axios.post(`${url}countries/tourism`,countrie)
           
    
        dispatch({
            type: CREATED_ACTIVITY,
            payload: json.data,
        })
        
        } catch(error) {
            dispatch({
                type: CREATED_ACTIVITY_ERROR,
                payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
            })
        }

    };
    export const addCountriesActivity = (idTourism,idCountry) => async (dispatch) => {
        try{
    
            const json = await axios.post(`${url}tourism/${idTourism}}/countries/${idCountry}`)
            
    
        dispatch({
            type: COUNTRIES_ACTIVITY,
            payload: json.data,
        })
        
        } catch(error) {
            dispatch({
                type: COUNTRIES_ACTIVITY_ERROR,
                payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
            })
        }

    }




    export const getActivities = () => async (dispatch) =>{
        try{
            const json = await axios.get("http://localhost:3001/tourism")
    
        dispatch({
            type: GET_ACTIVITIES,
            payload: json.data,
        })
        
        } catch(error) {
            dispatch({
                type: GET_ACTIVITIES_ERROR,
                payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
            })
        }

    }


