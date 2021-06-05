import { faLess } from "@fortawesome/free-brands-svg-icons";
import * as ActionTypes from "../actions/actionTypes";

const initState = {
    delete: undefined,
    show: false,
    message: ""
}

export const deleteModalReducer = (state = initState, action) => {
    switch(action.type){
        case ActionTypes.SHOW_DELETE_MODAL:
            return{
                ...state,
                delete: action.payload.delete,
                message: action.payload.message,
                show: true
            }
        
        case ActionTypes.CANCEL_DELETE_MODAL:
            return initState

        default: return initState
    }
}