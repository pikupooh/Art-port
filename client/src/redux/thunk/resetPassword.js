import * as ActionTypes from "../actions/actionTypes";
import { setLoadingAction } from "../actions/loadingActions";


export default function resetPassword(email, password) {
    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));
        fetch(`/api/auth/forgot-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password}),
        })
            .then(
                (res) => {
                    
                    if (res.ok) {
                        dispatch({type: ActionTypes.RESET_PASSWORD_SUCCESS})
                        dispatch(setLoadingAction(false, "Loading..."));
                    } else{
                        dispatch({type: ActionTypes.RESET_PASSWORD_FAILED})
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
                dispatch(setLoadingAction(false, "Loading..."));
            })

            .catch((error) => {
                                dispatch({type: ActionTypes.RESET_PASSWORD_FAILED})
                                dispatch(setLoadingAction(false, "Loading..."));
                                console.log(error);
                            });
    };
}
