import {GET_COUNTRIES, GET_COUNTRIES_ERROR, 
    GET_COUNTRIES_NAMES, GET_COUNTRIE_NAME_ERROR,
    GET_COUNTRIE_ID, GET_COUNTRIE_ID_ERROR,
    CREATED_ACTIVITY,CREATED_ACTIVITY_ERROR,COUNTRIES_ACTIVITY,POST_ACTIVITY, GET_ACTIVITIES
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

  case CREATED_ACTIVITY:
    return{
      ...state,
      countries: action.payload
    }
  case POST_ACTIVITY:
    return{
      ...state
    }

    case COUNTRIES_ACTIVITY:
      return { ...state, 
        countries:action.payload};
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