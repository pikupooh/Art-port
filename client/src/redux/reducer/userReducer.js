import * as ActionTypes from '../actions/actionTypes'

const initState = {
    userId: "607593dfd20d7954a45a502e",
    email: "hodgesdavid@xsports.com",
    username: "Meyer Sims",
    followers: 600,
    following: 884,
    user_photo: "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
    postList: {}
}

export const userReducer = (state = initState, action) => {
    switch(action.type){
        case ActionTypes.UPDATE_USER_INFO:
            return {
                ...state,
                email: action.payload.userData.email,
                username: action.payload.userData.username,
                followers: action.payload.userData.followers,
                following: action.payload.userData.following,
                user_photo: action.payload.userData.user_photo,
                postList: action.payload.userData.posts
            }
        default:
            return state
    }
}
