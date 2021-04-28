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

export const artistUserDataReducer = (state = initState, action) => {
    switch(action.type){
        case ActionTypes.FETCH_ARTIST_USER_DATA:
            return {
                ...state,
                userId: action.payload.userData.UserId,
                email: action.payload.userData.Email,
                username: action.payload.userData.Username,
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
