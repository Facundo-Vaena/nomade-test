import axios from 'axios';

export const SET_DATA = 'SET_DATA';
const baseURL = 'https://api.themoviedb.org/3/search/person?api_key=30db1237b9167f8afaf9e065b90d16b8&language=es-ES&page=1&include_adult=false'

export function setData(name) {
    return function(dispatch) {
        if(!name) {
            dispatch({type: SET_DATA, payload: ''})
        } else {
            return axios.get(`${baseURL}&query=${name}`)
            .then((response) =>{
                let res = response.data;
                dispatch({type:SET_DATA, payload:{...res.results[0]}})
            })
        }
    }
}

