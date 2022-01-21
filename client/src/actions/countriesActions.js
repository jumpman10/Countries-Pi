import axios from "axios";

import { GET_COUNTRIES,
    GET_COUNTRIES_ERROR,
    GET_COUNTRIES_NAMES,
 GET_ACTIVITIES,GET_ACTIVITIES_ERROR
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


