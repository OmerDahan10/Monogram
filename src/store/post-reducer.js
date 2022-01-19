const initialState = {
    posts: [],

}


export function postReducer(state = initialState, action) {
    let newState = state;
    switch (state.type) {
        case 'LOAD_POSTS':
            newState = { ...state, posts: action.posts }
            break;
        case 'LIKE_POST':
            newState = {
                ...state, posts: state.posts.map(post => {
                    if (post._id === action.postId) {
                        post.likedBy.push(action.user);
                        return post;
                    } else return post;
                })
            }
            break;
        case 'UNLIKE_POST':
            newState = {
                ...state, posts: state.posts.map(post => {
                    if (post._id === action.postId) {
                        post.likedBy = post.likedBy.filter(user => user._id !== action.user._id);
                        return post;
                    } else return post;
                })
            }
            break;
    }
}