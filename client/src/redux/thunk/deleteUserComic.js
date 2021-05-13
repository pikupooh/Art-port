import { deleteUserComicAction } from '../actions/fetchProfileDataAction'

function deleteUserComic(userId, comicId){

    const token = localStorage.getItem("token")
    console.log(comicId);
    return dispatch => {
        fetch(`http://localhost:8080/users/${userId}/manga/${comicId}`, {
            method: 'DELETE',
            headers: {
                Authorization: token,
            },
            body: ""
        })
        .then(response => {
            if(response.ok){
                dispatch(deleteUserComicAction(comicId));
            }
        })
        .catch((error) => console.log(error));
    }
}

export default deleteUserComic