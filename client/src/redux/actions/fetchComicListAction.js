import { FETCH_COMIC_LIST } from './actionTypes'

export const fetchComicListAction = (comicList) => {
    return {
        type: FETCH_COMIC_LIST,
        payload: {
            comicList,
        }
    }
}