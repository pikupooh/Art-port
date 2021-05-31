import { fetchMangaDataAction } from "../actions/fetchMangaDataAction";
import { addUserManga } from "../actions/fetchProfileDataAction";
import { setLoadingAction } from "../actions/loadingActions";
import { customfetch } from "./customFetch";

function fetchMangaData(id) {
    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));
        fetch("/api/manga/" + id)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }

                dispatch(fetchMangaDataAction(res));
                dispatch(setLoadingAction(false, "Loading..."));
                return res;
            })
            .catch((error) => {
                console.log(error);
            });
    };
}

export const createManga = (userId, postFormData, imageFormData, profileId) => {
    console.log("hello manga");

    console.log(userId, profileId);
    const token = localStorage.getItem("token");

    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));
        customfetch(`/api/users/${userId}/manga`, {
            method: "POST",
            body: JSON.stringify(postFormData),
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        })
            .then(
                (response) => {
                    if (response.ok) return response;
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
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                let mangaId = response.id;

                fetch(`/api/mangas/${mangaId}/images/upload`, {
                    method: "POST",
                    body: imageFormData,
                    headers: {
                        Authorization: token,
                    },
                })
                    .then(
                        (response) => {
                            if (response.ok) return response.json();
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
                    .then((response) => {
                        dispatch(setLoadingAction(false, "Loading..."));
                        if (userId === profileId) {
                            console.log("Same");
                            dispatch(addUserManga(response));
                        }
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
};

export default fetchMangaData;
