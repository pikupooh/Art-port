import {FETCH_COMIC_DATA} from './actionTypes'
export const fetchComicDataAction = (mangaData) => {
    return {
        type :FETCH_COMIC_DATA,
        payload:{
            mangaData,
        }
    };
};