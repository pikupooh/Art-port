import { setLoadingAction } from "../actions/loadingActions";
import fetchUserData from "./fetchUserData";

export default function registerUser(imageFormData, userId) {

    const token = localStorage.getItem("token");
    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));
        fetch(`/api/users/${userId}`, {
            method: "PUT",
            body: imageFormData,
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        })
            .then(
                (res) => {
                    if (res.ok) {
                        fetchUserData(userId)
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
                
            })

            .catch((error) => console.log(error));
            dispatch(setLoadingAction(false, "Loading..."));
    };
}