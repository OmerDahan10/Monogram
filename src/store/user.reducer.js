import { userService } from '../services/user.service.js'

// import { storageService } from '../services/async-storage.service.js'
// const users = require("../data/user.json")
// storageService.saveToStorage("users", users)
// const posts = require("../data/post.json")
// storageService.saveToStorage("posts", posts)

const initialState = {
    // connectedUser: userService.getLoggedinUser() || null
    // connectedUser: userService.getLoggedinUser() || storageService.loadFromStorage('users')[0],
    // userProfileShow: userService.getUser('Muki') || null,
    connectedUser: userService.getLoggedinUser(),
    userProfileShow: null,
    showProfileOptions: false,
    showUserMenu: false,
    showProfileFollowers: false,
    showProfileFollowings: false,
    searchUsers: null
}


export function userReducer(state = initialState, action) {
    let newState = state


    switch (action.type) {
        case 'SET_USER':
            newState = { ...state, connectedUser: action.user };
            break;
        case 'GET_USER_TO_SHOW':
            newState = { ...state, userProfileShow: action.userProfileShow };
            break;
        // case 'GET_USER':
        //     newState = { ...state, userProfileShow: action.userProfileShow };
        //     break;
        case 'SHOW_USER_MENU':
            newState = { ...state, showUserMenu: action.showUserMenu };
            break;
        case 'SHOW_PROFILE_OPTIONS':
            newState = { ...state, showProfileOptions: action.showProfileOptions };
            break;
        case 'SHOW_PROFILE_FOLLOWERS':
            newState = { ...state, showProfileFollowers: action.showProfileFollowers };
            break;
        case 'SHOW_PROFILE_FOLLOWINGS':
            newState = { ...state, showProfileFollowings: action.showProfileFollowings };
            break;
        case 'SET_SEARCH_USERS':
            newState = { ...state, searchUsers: action.users }
            break;
        // case 'LOAD_USER':
        //     newState = { ...state, user: action.user }
        //     break;
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
