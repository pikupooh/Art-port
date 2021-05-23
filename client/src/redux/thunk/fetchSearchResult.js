import * as ActionTypes from "../actions/actionTypes"

export function searchPosts (tags) {
   const token = localStorage.getItem("token");
   console.log(tags);
  
    return (dispatch) => {
        fetch(`http://localhost:8080/search/posts/tags`,{
            method: 'POST',
            body:  JSON.stringify(tags),
         headers: {
              "Content-Type": "application/json",
                Authorization: token,
            }, 
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
                dispatch(searchResultAction(res));

                return res;
            })
            .catch((error) => {
                console.log(error);
            });
    };
}
export function searchCategory (category) {
     const token = localStorage.getItem("token");
    return (dispatch) => {
        fetch(`http://localhost:8080/search`, {
            method: 'POST',
            body: category,
           headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },     
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

export default searchPosts;
