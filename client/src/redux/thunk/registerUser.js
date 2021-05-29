import * as ActionTypes from "../actions/actionTypes";
import { setLoadingAction } from "../actions/loadingActions";

export const requestSignUp = () => {
    return {
        type: ActionTypes.SIGNUP_REQUEST,
    };
};

export const receiveSignUp = () => {
    return {
        type: ActionTypes.SIGNUP_SUCCESS,
    };
};

export const signUpError = (message) => {
    return {
        type: ActionTypes.SIGNUP_FAILURE,
        message,
    };
};

export default function registerUser(imageFormData) {
    return (dispatch) => {
        dispatch(requestSignUp());
        dispatch(setLoadingAction(true, "Loading..."));
        fetch(`/api/auth/signup`, {
            method: "POST",
            body: imageFormData,
        })
            .then(
                (res) => {
                    console.log(res);
                    if (res.ok) {
                        dispatch(receiveSignUp());
                        dispatch(setLoadingAction(false, "Loading..."));
                    } else if (res.status === 409) {
                        return res.text();
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
            .then((res) => {
                console.log(res);
                dispatch(setLoadingAction(false, "Loading..."));
                if (res !== undefined) dispatch(signUpError(res));
            })

            .catch((error) => console.log(error));
    };
}
