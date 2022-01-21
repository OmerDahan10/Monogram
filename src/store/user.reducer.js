import { userService } from '../services/user.service.js'
// import { storageService } from '../services/async-storage.service.js'

// const users = require("../data/user.json")
// storageService.saveToStorage("users", users)
// const posts = require("../data/post.json")
// storageService.saveToStorage("posts", posts)

const initialState = {
    user: userService.getLoggedinUser() || null
}


export function userReducer(state = initialState, action) {

    let newState = state

    switch (action.type) {
        case 'SET_USER':
            newState = { ...state, user: action.user }
            break;
        // case 'UPDATE_USER_INFO':
        //     newState = { ...state, user: action.user }
        //     break;
        // case 'UPDATE_USER_FOLLOWINGS':
        //     newState = { ...state, user: action.user }
        //     break;
        // case 'UPDATE_USER_FOLLOWERS':
        //     newState = { ...state, user: action.user }
        //     break;
    }

    return newState;
}



// const post = require("./")
