import { FETCH_MANGA_LIST } from './actionTypes'

export const fetchMangaListAction = (mangaList) => {
    return {
        type: FETCH_MANGA_LIST,
        payload: {
            mangaList,
        }
    }
}