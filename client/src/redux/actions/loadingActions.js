import { SET_LOADING} from './actionTypes'

export const setLoadingAction = (status, message) => {
  
    return {
        type: SET_LOADING,
        status: status,
        message: message
    }
}