import { fetchComicDataAction } from '../actions/fetchComicDataAction'

function fetchComicData(comicId) {
    return dispatch => {
        fetch('http://localhost:8080/manga/' + comicId)
        .then(res =>  res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }

            dispatch(fetchComicDataAction(res))
         
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchComicData;