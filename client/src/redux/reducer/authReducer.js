import * as ActionTypes from "../actions/actionTypes";

const initState = {
    userId: localStorage.getItem("userId"),
    token: localStorage.getItem("token"),
    isAuthenticated: localStorage.getItem("token") ? true : false,
    profilePhoto: localStorage.getItem("profilePhoto"),
    profile: {},
    errmess: "",
};

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                userId: action.userId,
                token: action.token,
                profilePhoto: action.profilePhoto,
            };
        case ActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                errmess: action.message,
            };
        case ActionTypes.LOGIN_INTERRUPT:
            return {
                ...state,
                errmess: "",
            };
        case ActionTypes.LOGOUT_REQUEST:
            return {
                ...state,
                isAuthenticated: true,
            };
        case ActionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                userId: null,
                token: null,
                profile: {},
            };
        case ActionTypes.USER_PROFILE_FETCH:
            return {
                ...state,
                profile: action.payload,
            };

        case ActionTypes.REMOVE_FOLLOWING:
            let newProfile = { ...state.profile };
            let newFollowing = state.profile.following.filter(
                (user) => user.id != action.payload.userId
            );
            newProfile.following = newFollowing;
            console.log(newProfile);
            return {
                ...state,
                profile: newProfile,
            };

        case ActionTypes.ADD_FOLLOWING:
            let updateProfile = { ...state.profile };
            updateProfile.following = [
                ...state.profile.following,
                action.payload,
            ];
            return {
                ...state,
                profile: updateProfile,
            };
        default:
            return state;
    }
};
