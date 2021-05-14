import * as ActionTypes from "../actions/actionTypes";

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

        fetch(`http://localhost:8080/api/auth/signup`, {
            method: "POST",
            body: imageFormData,
        })
            .then(
                (res) => {
                    console.log(res);
                    if (res.ok) {
                        dispatch(receiveSignUp());
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

                if (res !== undefined) dispatch(signUpError(res));
            })

            .catch((error) => console.log(error));
    };
}
