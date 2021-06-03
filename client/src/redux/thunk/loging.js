import fetchUserData from "./fetchUserData";
import * as ActionTypes from "../actions/actionTypes";
import { fetchUserProfileData } from "../../redux/thunk/fetchProfileData";
import { setLoadingAction } from "../actions/loadingActions";

export default function signInUser(user, pass, pathname = "") {

    pathname = pathname.substring(1, 5)
  

    var creds = {
        username: user,
        password: pass,
    };
    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));
        fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(creds),
        })
            .then(
                (res) => {
                    
                    if (res.ok) {
                        return res;
                    } else {
                        var error = new Error(
                            "Error " + res.status + ": " + res.statusText
                        );
                        error.res = res;
                        dispatch(loginError("Invalid username or password"));
                        dispatch( setLoadingAction(false, "Error..."));
                        throw error;
                    }
                },
                (error) => {
                    throw error;
                }
            )
            .then((res) => res.json())
            .then((res) => {
                
                var token = res.tokenType + " " + res.accessToken;
                var userId = res.id;
                let profilePhoto = res.profilePhoto;

                localStorage.setItem("token", token);
                localStorage.setItem("refreshToken", res.refreshToken);
                localStorage.setItem("userId", userId);
                localStorage.setItem("profilePhoto", profilePhoto);
                dispatch(setUserLogin({ token, userId, profilePhoto }));
                if(pathname !== "user"){
                    dispatch(fetchUserData(userId));
                }
                dispatch(fetchUserProfileData());
                dispatch(setLoadingAction(false, "Loading..."));
            })
            .catch((error) => console.log(error));
    };
}

function setUserLogin({ token, userId, profilePhoto }) {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: token,
        userId: userId,
        profilePhoto: profilePhoto,
    };
}

export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message,
    };
};

function requestLogout() {
    return {
        type: ActionTypes.LOGOUT_REQUEST,
    };
}

function successLogout() {
    return {
        type: ActionTypes.LOGOUT_SUCCESS,
    };
}

export function logoutUser() {
    return (dispatch) => {
        dispatch(requestLogout());

        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        dispatch(successLogout());
    };
}
