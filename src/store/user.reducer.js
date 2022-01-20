import { userService } from '../services/user.service.js'
const initialState = {
    user: userService.getLoggedinUser() || null
}


export function userReducer(state = initialState, action) {

    let newState = state

    switch (action.type) {
        case 'SET_USER':
            newState = { ...state, user: action.user }
            break;
        case 'UPDATE_USER_INFO':
            newState = { ...state, user: action.user }
            break;
        case 'UPDATE_USER_FOLLOWINGS':
            newState = { ...state, user: action.user }
            break;
        case 'UPDATE_USER_FOLLOWERS':
            newState = { ...state, user: action.user }
            break;
        case 'GET_USER_FOLLOWINGS':
            newState = { ...state, user: action.user }
            break;
        case 'GET_USER_FOLLOWERS':
            newState = { ...state, user: action.user }
            break;
    }

    return newState;
}