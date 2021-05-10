import { fetchMangaDataAction } from '../actions/fetchMangaDataAction'

function fetchMangaData(id) {

    return dispatch => {
        fetch('http://localhost:8080/manga/' + id)
        .then(res =>  res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }

            dispatch(fetchMangaDataAction(res))
         
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchMangaData;