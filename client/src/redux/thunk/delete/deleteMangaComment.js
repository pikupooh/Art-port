import { DELETE_MANGA_COMMENT } from '../../actions/actionTypes'

function deleteMangaComment(commentId){

    const token = localStorage.getItem("token")

    return dispatch => {
        fetch(`http://localhost:8080/comment/${commentId}`, {
            method: 'DELETE',
            headers: {
                Authorization: token,
            },
            body: ""
        })
        .then(response => {
            if(response.ok){
                dispatch(
                    {
                        type: DELETE_MANGA_COMMENT,
                        payload: {
                            commentId
                        }
                    }
                );
            }
        })
        .catch((error) => console.log(error));
    }
}

export default deleteMangaComment