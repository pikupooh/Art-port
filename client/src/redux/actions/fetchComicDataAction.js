import {FETCH_COMIC_DATA} from './actionTypes'
export const fetchComicDataAction = (comicData) => {
    return {
        type :FETCH_COMIC_DATA,
        payload:{
            comicData,
        }
    };
};