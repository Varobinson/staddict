
export const SET_COUNTRY= 'SET_COUNTRY';
export const SET_COUNTRIES= 'SET_COUNTRIES';
export const POPULATE_LEAGUES = 'POPULATE_LEAGUES';


export function setCountry(country){
    return{
        type: SET_COUNTRY,
        payload: {
            country
        }
    }

}


export const loadCountries=()=>(dispatch) =>{

 return fetch("https://api-football-v1.p.rapidapi.com/v2/countries", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "485a97902cmsh9f440b97a659a79p17b839jsnb6f760410161",
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
    }
})
.then(response => response.json())
.then(data => {
	dispatch({
        type: SET_COUNTRIES,
        payload:{
            countries: data.api.countries
        }
    })
})
.catch(err => {
	console.error(err);
});
  


}
export const populateLeagues = (id) => (dispatch) => {

return fetch(`https://api-football-v1.p.rapidapi.com/v2/leagues/country/${id}/2020`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "485a97902cmsh9f440b97a659a79p17b839jsnb6f760410161",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
        }
    })
            .then(response => response.json())
.then(data => {
	dispatch({
        type: POPULATE_LEAGUES,
        payload:{
            leagues: data.api.leagues || 'US'
        }
    })
})
.catch(err => {
	console.error(err);
});
  

}
