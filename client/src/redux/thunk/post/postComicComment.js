import { POST_COMIC_COMMENT } from "../../actions/actionTypes";

function postComicComment(comicId, message) {
    
    const token = localStorage.getItem("token");

    return (dispatch) => {
        fetch(`http://localhost:8080/manga/${comicId}/comment`, {
            method: "POST",
            body: JSON.stringify({
                content: message
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then((response) => {
                console.log(response);
                dispatch({
                    type: POST_COMIC_COMMENT,
                    payload: response
                })
            })
            .catch((err) => console.error(err));
    };
}

export default postComicComment;