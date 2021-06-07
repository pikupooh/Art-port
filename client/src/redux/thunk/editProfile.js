import { setLoadingAction } from "../actions/loadingActions";
import fetchUserData from "./fetchUserData";
import { customfetch } from "./customFetch";

export default function registerUser(postFormData, imageFormData, userId) {

    const token = localStorage.getItem("token");
    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));
        customfetch(`/api/auth/users/${userId}`, {
            method: "PUT",
            body: JSON.stringify(postFormData),
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        })
            .then(
                (res) => {
                    if (res.ok) {
                        console.log(res);

                        if(imageFormData.has("files")){
                            fetch(`/api/users/${userId}/upload`, {
                                method: "POST",
                                body: imageFormData,
                                headers: {
                                    Authorization: token,
                                },
                            })
                                .then(
                                    (response) => {
                                        console.log(response);
                                        if (response.ok){
                                            dispatch(setLoadingAction(false, "Loading..."));
                                            dispatch(fetchUserData(userId))
                                        }
                                        else {
                                            var error = new Error(
                                                "Error " +
                                                    response.status +
                                                    ": " +
                                                    response.statusText
                                            );
                                            error.response = response;
                                            throw error;
                                        }
                                    },
                                    (error) => {
                                        var errmess = new Error(error.message);
                                        throw errmess;
                                    }
                                )
                                .catch((error) => {
                                    console.log(error.message);
                                });
                        }
                        else {
                            dispatch(setLoadingAction(false, "Loading..."));
                            dispatch(fetchUserData(userId))
                        }     
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

            .catch((error) => console.log(error));
    };
}