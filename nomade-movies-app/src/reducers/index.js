import { SET_DATA } from "../actions/index"

const initialState = {
    data: '',
}

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case SET_DATA: {
            return {
            ...state,
            data : {...action.payload},
        }}
        default: return state;
    }

}