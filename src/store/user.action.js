import { userService } from '../services/user.service.js';
import { storageService } from '../services/async-storage.service.js'

export function login(credentials) {
    // const user = storageService.loadFromStorage("users")
    // const credentials = user[0];
    console.log('credentials: ',credentials);
    
    return async (dispatch) => {
        try {
            const user = await userService.login(credentials)
            dispatch({ type: 'SET_USER', user })
            dispatch({type: 'CLEAR_POSTS'})
            console.log('user: ',user);
            
        } catch (err) {
            console.log('no user found', err)
        }
        console.log('login');
        return true
    }
}

export function signup(credentials) {
    const id = storageService.makeId()
    const create = new Date();
    credentials = { ...credentials, _id: id, createdAt: create.getTime(), followings: [], followers: [], userPostsIds: [] }
    console.log('credentials: ', credentials);

    return async (dispatch) => {
        try {
            const user = await userService.signup(credentials)
            dispatch({ type: 'SET_USER', user })
        } catch (err) {
            console.log('Cannot signup')
        }
    }
}

export function getUser(username) {
    return async (dispatch) => {
        try {
            const userProfileShow = await userService.getUser(username)
            dispatch({ type: 'GET_USER', userProfileShow })
            
        } catch (err) {
            console.log('Cannot logout');
        }
    }
}


export function toggleUserMenu(showUserMenu) {
    return (dispatch) => {
        if (showUserMenu) dispatch({ type: 'SHOW_USER_MENU', showUserMenu: false })
        else dispatch({ type: 'SHOW_USER_MENU', showUserMenu: true })
    }
}

export function toggleProfileOptions(showProfileOptions) {
    console.log('showProfileOptions: ',showProfileOptions);
    return (dispatch) => {
        if (showProfileOptions) dispatch({ type: 'SHOW_PROFILE_OPTIONS', showProfileOptions: false })
        else dispatch({ type: 'SHOW_PROFILE_OPTIONS', showProfileOptions: true })
    }
}

export function toggleProfileFollowers(showProfileFollowers) {
    return (dispatch) => {
        if (showProfileFollowers) dispatch({ type: 'SHOW_PROFILE_FOLLOWERS', showProfileFollowers: false })
        else dispatch({ type: 'SHOW_PROFILE_FOLLOWERS', showProfileFollowers: true })
        
        console.log('showProfileFollowers: ',showProfileFollowers);
    }
}

export function toggleProfileFollowing(showProfileFollowing) {
    return (dispatch) => {
        if (showProfileFollowing) dispatch({ type: 'SHOW_PROFILE_FOLLOWING', showProfileFollowing: false })
        else dispatch({ type: 'SHOW_PROFILE_FOLLOWING', showProfileFollowing: true })

        console.log('showProfileFollowing: ',showProfileFollowing);
    }
}

// export function logout() {
//     return async (dispatch) => {
//         try {
//             await userService.logout()
//             dispatch({ type: 'SET_USER', user: null })

//         } catch (err) {
//             console.log('Cannot logout');
//         }
//     }
// }

// export function loadUser() {
//     return async (dispatch) => {
//         try {
//             await userService.loadUser()
//             dispatch({ type: 'GET_USER', user })

//         } catch (err) {
//             console.log('Cannot logout');
//         }
//     }
// }