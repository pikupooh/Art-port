import fetchUserData from "./fetchUserData";
import * as ActionTypes from "../actions/actionTypes";

export default function signInUser(user, pass) {
    var creds = {
        username: user,
        password: pass,
    };
    return (dispatch) => {
        fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(creds),
        })
            .then(
                (res) => {
                    console.log(res);
                    if (res.ok) {
                        return res;
                    } else {
                        var error = new Error(
                            "Error " + res.status + ": " + res.statusText
                        );
                        error.res = res;
                        dispatch(loginError("Invalid username or password"));
                        throw error;
                    }
                },
                (error) => {
                    throw error;
                }
            )
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                var token = res.tokenType + " " + res.accessToken;
                var userId = res.id;
                let profilePhoto = res.profilePhoto;

                localStorage.setItem("token", token);
                localStorage.setItem("userId", userId);
                localStorage.setItem("profilePhoto", profilePhoto);
                dispatch(setUserLogin({ token, userId, profilePhoto }));
                dispatch(fetchUserData(userId));
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
