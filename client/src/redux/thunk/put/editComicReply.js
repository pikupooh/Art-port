import { EDIT_COMIC_REPLY } from "../../actions/actionTypes";

function editComicReply(replyId, message) {
    const token = localStorage.getItem("token");
    console.log(replyId, message);
    return (dispatch) => {
        fetch(`/api/reply/${replyId}`, {
            method: "PUT",
            body: JSON.stringify({
                content: message,
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((response) => {
                console.log(response);
                dispatch({
                    type: EDIT_COMIC_REPLY,
                    payload: { response },
                });
            })
            .catch((err) => console.error(err));
    };
}

export default editComicReply;
