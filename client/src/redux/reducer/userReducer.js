import * as ActionTypes from "../actions/actionTypes";

const initState = {
    userId: "",
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    profilePhoto: "",
    dob: "",
    about: "",
};

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_USER_DATA:
            return {
                ...state,
                userId: action.payload.userData.id,
                email: action.payload.userData.email,
                username: action.payload.userData.username,
                firstName: action.payload.userData.firstName,
                lastName: action.payload.userData.lastName,
                profilePhoto: action.payload.userData.profilePhoto,
                dob: action.payload.userData.dateOfBirth,
                about: action.payload.userData.about,
            };
        default:
            return state;
    }
};
