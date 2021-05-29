import { POST_CHAPTER_COMMENT } from "../../actions/actionTypes";

function postChapterComment(chapterId, mangaId, message) {
    const token = localStorage.getItem("token");

    console.log(chapterId, mangaId, message);

    return (dispatch) => {
        fetch(`/api/manga/${mangaId}/chapter/${chapterId}/comment`, {
            method: "POST",
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
                    type: POST_CHAPTER_COMMENT,
                    payload: response,
                });
            })
            .catch((err) => console.error(err));
    };
}

export default postChapterComment;
