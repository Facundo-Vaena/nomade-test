import { SET_DATA } from "../actions/index"

const initialState = {
    data: '',
}

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case SET_DATA: {
            console.log('payload', action.payload);
            return {
            ...state,
            data : {...action.payload},
        }}
        default: return state;
    }

}