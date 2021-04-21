import { fetchComicDataAction } from '../actions/fetchComicDataAction'

function fetchComicData(comicId) {
    return dispatch => {
        fetch('http://localhost:3000/dummy/comics.json')
        .then(res =>  res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            
            res = res.filter(comic => comic.comicid === comicId)
            dispatch(fetchComicDataAction(res[0]))
         
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchComicData;