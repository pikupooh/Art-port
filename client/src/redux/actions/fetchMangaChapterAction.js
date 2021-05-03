import {FETCH_MANGA_CHAPTER} from './actionTypes'
export const fetchMangaChapterAction = (mangaChapter) => {
        

    return {
        type :FETCH_MANGA_CHAPTER,
        payload:{
            mangaChapter,
        }
    };
};