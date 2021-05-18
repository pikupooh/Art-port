const initState = {
    show: false
}

export const signInModalReducer = (state = initState, action) => {
    switch(action.type){
        case 'SHOW_MODAL': 
            return{
                ...state,
                show: true
            }
        case 'HIDE_MODAL':
            return{
                ...state,
                show: false
        }
        default:
            return state
    }
}