import { fetchComicDataAction } from '../actions/fetchComicDataAction'
import { addUserComic } from "../actions/fetchProfileDataAction";
import { setLoadingAction } from "../actions/loadingActions";

function fetchComicData(comicId) {
    return dispatch => {
        dispatch(setLoadingAction(true, "Loading..."));

        fetch('http://localhost:8080/manga/' + comicId)
        .then(res =>  res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }

            dispatch(fetchComicDataAction(res))
            dispatch(setLoadingAction(false, "Loading..."));

            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const createComic = (userId, postFormData, imageFormData, profileId) => {
    console.log("hello comic");

    console.log(userId, profileId);
    const token = localStorage.getItem("token");

    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));

        fetch(`http://localhost:8080/users/${userId}/comic`, {
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
                let comicId = response.id;

                fetch(`http://localhost:8080/mangas/${comicId}/images/upload`, {
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
                            dispatch(addUserComic(response));
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
export default fetchComicData;