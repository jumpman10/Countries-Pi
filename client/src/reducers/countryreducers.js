import {GET_COUNTRIES, 
    GET_COUNTRIES_NAMES,
  GET_ACTIVITIES
} from '../constants/countrysConstants'

const initialState ={
  countries : [],
  country:[],
  activities:[],
}

function rootReducer(state = initialState, action){
switch (action.type) {
  case GET_COUNTRIES:
  return{
    ...state,
    countries:action.payload 
  } 

  case GET_COUNTRIES_NAMES:
    return{
      ...state,
      country:action.payload
    }    
    case GET_ACTIVITIES:
          return{
            ...state,
            activities:action.payload 
          } 

    default:
      return state


  
}
}


export default rootReducer 