const initialState = {
    posts: [],
    showAdd: false,
    connectedUserPosts: [],
    showNewPostBtn: false

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
                ...state, posts: state.posts.map(post => (post._id === action.post._id) ? action.post : post)
            }
            break;
        case 'DELETE_POST':
            newState = { ...state, posts: state.posts.filter(post => post._id !== action.postId) }
            break;
        case 'SHOW_ADD':
            newState = { ...state, showAdd: action.show }
            break;
        case 'ADD_POST':
            newState = { ...state, posts: [action.newPost, ...state.posts] }
            break;
        case 'SET_USER_POSTS':
            newState = { ...state, connectedUserPosts: action.userPosts }
            break;
        case 'CLEAR_POSTS':
            newState = { ...state, posts: [] }
            break;
        case 'FOLLOWING-ADDED-POST':
            console.log(action);
            newState = { ...state, showNewPostBtn: action.show }
            break;
        default:
            return state
    }

    return newState;
}