import {FETCH_MANGA_DATA} from './actionTypes'
export const fetchMangaDataAction = (mangaData) => {
        

    return {
        type :FETCH_MANGA_DATA,
        payload:{
            mangaData,
        }
    };
};