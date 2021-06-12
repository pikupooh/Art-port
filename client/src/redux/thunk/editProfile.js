import { setLoadingAction } from "../actions/loadingActions";
import { UPDATE_PROFILE_PHOTO } from "../actions/actionTypes";
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
                        if (imageFormData.has("files")) {
                            fetch(`/api/users/${userId}/upload`, {
                                method: "POST",
                                body: imageFormData,
                                headers: {
                                    Authorization: token,
                                },
                            })
                                .then((res) => res.json())
                                .then((response) => {
                                    dispatch(
                                        setLoadingAction(false, "Loading...")
                                    );
                                    let user = response;
                                    localStorage.setItem(
                                        "profilePhoto",
                                        user.profilePhoto.link
                                    );
                                    dispatch({
                                        type: UPDATE_PROFILE_PHOTO,
                                        profilePhoto: user.profilePhoto.link,
                                    });
                                    dispatch(fetchUserData(userId));
                                    console.log(response);
                                    return response;
                                })
                                .catch((error) => {
                                    console.log(error.message);
                                });
                        } else {
                            dispatch(setLoadingAction(false, "Loading..."));
                            dispatch(fetchUserData(userId));
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
