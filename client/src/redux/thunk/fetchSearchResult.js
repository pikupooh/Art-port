import * as ActionTypes from "../actions/actionTypes"

export function searchPosts (tags) {

    return (dispatch) => {
        fetch(`http://localhost:8080//search/posts/tags`, {
            method: 'GET',
            body: tags        
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
                dispatch(searchResultAction(res));

                return res;
            })
            .catch((error) => {
                console.log(error);
            });
    };
}

export function searchCategory (category) {

    return (dispatch) => {
        fetch(`http://localhost:8080//search`, {
            method: 'GET',
            body: category        
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
                dispatch(searchResultAction(res));

                return res;
            })
            .catch((error) => {
                console.log(error);
            });
    };
}

function searchResultAction (result) {
    return {
        type: ActionTypes.SEARCH_RESULT,
        result: result
    };
}

export default fetchUserData;
