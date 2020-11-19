import {SET_COUNTRY,  SET_COUNTRIES, POPULATE_LEAGUES }  from './actions'
import { combineReducers } from 'redux'

const defaultState ={
    country: '',
    countries: [],
    leagues: []
}

export function countryReducer(state=defaultState,action){
    switch (action.type){

        case SET_COUNTRY:
            return {
                ...state,
                country: action.payload.country
            }
        case SET_COUNTRIES:
            return {
                ...state,
                countries: action.payload.countries
        }


        default:
            return state;
        
    }   

}

export function leaguesReducer(state=[],action){
    switch (action.type){
        case POPULATE_LEAGUES:
            return action.payload.leagues

        default:
            return state;
    }

}

export const rootReducer = combineReducers({
    country: countryReducer,
    leagues: leaguesReducer

})
