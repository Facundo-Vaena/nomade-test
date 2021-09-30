import axios from 'axios';

export const SET_DATA = 'SET_DATA';
const baseURL = 'https://api.themoviedb.org/3/search/person?api_key=30db1237b9167f8afaf9e065b90d16b8&language=en-US&page=1&include_adult=false'

export function setData(name) {
    return function(dispatch) {
        if(!name) {
            console.log('esta vacio')
            dispatch({type: SET_DATA, payload: ''})
        } else {
            // let info = await axios.get(`${baseURL}&query=${name}`)
            // let res = info.data;
            // console.log('results',res.results[0])
            // return dispatch({type:SET_DATA, payload:res.results[0]})

            return axios.get(`${baseURL}&query=${name}`)
            .then((response) =>{
                let res = response.data;
                console.log('results',res.results[0])
                dispatch({type:SET_DATA, payload:{...res.results[0]}})
            })
        }
        // .then(response =>{
        //     let res = response.data;
        //     dispatch({type:SET_DATA, payload: res.results});
        // })
    }
}

