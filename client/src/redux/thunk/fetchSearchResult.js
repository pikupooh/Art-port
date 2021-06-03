import { SEARCH_RESULT } from "../actions/actionTypes";
import { setLoadingAction } from "../actions/loadingActions";

export function searchTags(tags) {
  

    let tagsBody = JSON.stringify(tags);


    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));
        fetch(`/api/search`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: tagsBody,
        })
            .then(
                (res) => {
                    if (res.ok) return res;
                    else {
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
                
                dispatch({
                    type: SEARCH_RESULT,
                    payload: res,
                });
                dispatch(setLoadingAction(false, "Loading..."));
                return res;
            })
            .catch((error) => {
                
            });
    };
}
