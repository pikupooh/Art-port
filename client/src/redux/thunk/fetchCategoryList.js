import { fetchCategoryListAction } from '../actions/fetchCategoryListAction'

function fetchCategoryList() {
    return dispatch => {
        fetch('dummy2/categories.json')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchCategoryListAction(res))
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchCategoryList;