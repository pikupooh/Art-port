import { FETCH_CATEGORY_LIST } from './actionTypes'

export const fetchCategoryListAction = (categoryList) => {
    return {
        type: FETCH_CATEGORY_LIST,
        payload: {
            categoryList,
        }
    }
}