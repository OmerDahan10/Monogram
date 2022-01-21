const initialState = {
    posts: [],

}


export function postReducer(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case 'LOAD_POSTS':
            // console.log(action)
            newState = { ...state, posts: action.posts }
            break;
        case 'UPDATE_POST':
            newState = {
                ...state, posts: state.posts.map(post => (post._id === action.post._Id) ? action.post : post)
            }
            break;
        case 'DELETE_POST':
            newState = { ...state, posts: state.posts.filter(post => post._id !== action.postId) }
            break;
        default:
            return state
    }

    return newState;
}