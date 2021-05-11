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
                        console.log(res);
                        return res;
                    } else {
                        var error = new Error(
                            "Error " + res.status + ": " + res.statusText
                        );
                        error.res = res;
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

                localStorage.setItem("token", token);
                localStorage.setItem("userId", userId);
                dispatch(setUserLogin({ token, userId }));
                dispatch(fetchUserData());
            })
            .catch((error) => console.log(error));
    };
}

function setUserLogin(token, userId) {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: token,
        userId: userId,
    };
}

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
