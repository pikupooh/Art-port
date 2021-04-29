import * as ActionTypes from '../actions/actionTypes'

const initState = {
    userId: "",
    email: "",
    userName: "",
    firstName: "",
    lastName: "",
    profilePhoto: "",
    dob: "",
    about: "",
}

export const userReducer = (state = initState, action) => {
    switch(action.type){
        case ActionTypes.FETCH_USER_DATA:
            return {
                ...state,
                userId: action.payload.userData.UserId,
                email: action.payload.userData.email,
                userName: action.payload.userData.Username,
                firstName: action.payload.userData.firstname,
                lastName: action.payload.userData.lastname,
                profilePhoto: action.payload.userData.ProfilePhoto,
                dob: action.payload.userData.DOB,
                about: action.payload.userData.about,
            }
        default:
            return state
    }
}
