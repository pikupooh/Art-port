import { fetchMangaDataAction } from '../actions/fetchMangaDataAction'

function fetchMangaData(id) {

    return dispatch => {
        fetch('http://localhost:3000/dummy2/mangas.json')
        .then(res =>  res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            res = res.filter((mangaData) => mangaData.id === id)
            dispatch(fetchMangaDataAction(res[0]))
         
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchMangaData;