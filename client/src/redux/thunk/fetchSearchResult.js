import { SEARCH_RESULT } from "../actions/actionTypes"

export function searchTags (tags) {

    console.log(tags);

    let tagsBody = JSON.stringify(tags)
    console.log(tagsBody);

    return (dispatch) => {
        fetch(`http://localhost:8080/search`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
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
                console.log(res);
                dispatch({
                    type: SEARCH_RESULT,
                    payload: res
                })
                return res;
            })
            .catch((error) => {
                console.log(error);
            });
    };
}

