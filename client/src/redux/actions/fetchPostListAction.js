import { FETCH_POST_LIST } from './actionTypes'

export const fetchPostListAction = (postList) => {
    return {
        type: FETCH_POST_LIST,
        payload: {
            postList,
        }
    }
}