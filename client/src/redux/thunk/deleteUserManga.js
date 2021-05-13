import { deleteUserMangaAction } from '../actions/fetchProfileDataAction'

function deleteUserManga(userId, mangaId){

    const token = localStorage.getItem("token")
    console.log(mangaId);
    return dispatch => {
        fetch(`http://localhost:8080/users/${userId}/manga/${mangaId}`, {
            method: 'DELETE',
            headers: {
                Authorization: token,
            },
            body: ""
        })
        .then(response => {
            if(response.ok){
                dispatch(deleteUserMangaAction(mangaId));
            }
        })
        .catch((error) => console.log(error));
    }
}

export default deleteUserManga