import { FETCH_BLOG_LIST } from './actionTypes'

export const fetchBlogListAction = (blogList) => {
    return {
        type: FETCH_BLOG_LIST,
        payload: {
            blogList,
        }
    }
}