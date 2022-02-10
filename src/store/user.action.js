import { userService } from '../services/user.service.js';
import { storageService } from '../services/async-storage.service.js';
import { socketService } from '../services/socket.service.js';

export function login(credentials) {
    // const user = storageService.loadFromStorage("users")
    // const credentials = user[0];
    
    return async (dispatch) => {
        try {
            const user = await userService.login(credentials)
            if(user) socketService.emit('logged in',user._id);
            dispatch({ type: 'SET_USER', user })
            dispatch({type: 'CLEAR_POSTS'})
        } catch (err) {
            console.log('no user found', err)
        }
        return true
    }
}

export function logout() {
    return async (dispatch) => {
        try {
            await userService.logout()
            dispatch({ type: 'SET_USER', user: null })
            dispatch({type: 'CLEAR_POSTS'})
        } catch (err) {
            console.log('Cannot logout');
        }
    }
}

export function signup(credentials) {
    const create = new Date();
    credentials = { ...credentials, createdAt: create.getTime(), followings: [], followers: [], userPostsIds: [] }
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
            dispatch({ type: 'GET_USER_TO_SHOW', userProfileShow })
            return userProfileShow;
        } catch (err) {
            console.log('Cannot logout', err);
        }
    }
}

export function removeFollower(followerUsername, userProfileShow){
    return async (dispatch) => {
        try{
            const theFollower = await userService.getUser(followerUsername);
            userProfileShow.followers = userProfileShow.followers.filter((follower)=>follower._id!==theFollower._id);
            theFollower.followings = theFollower.followings.filter((following)=>following._id!==userProfileShow._id);
            console.log('userProfileShow: ',userProfileShow);
            console.log('theFollower: ',theFollower);
            
            const user = await userService.removeFollower({...userProfileShow})
            console.log('user: ',user);
            userService.removeFollower(theFollower)
            dispatch({type: 'SET_USER', user})
        }
        catch (err) {
            console.log('Cannot remove', err);
        }
    }
}

export function removeFollowing(userId){
    return (dispatch) => {
        try{
            const user = userService.removeFollowing(userId)
            dispatch({type: 'SET_USER', user})
        }
        catch (err) {
            console.log('Cannot remove', err);
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
    }
}

export function toggleProfileFollowings(showProfileFollowings) {
    return (dispatch) => {
        if (showProfileFollowings) dispatch({ type: 'SHOW_PROFILE_FOLLOWINGS', showProfileFollowings: false })
        else dispatch({ type: 'SHOW_PROFILE_FOLLOWINGS', showProfileFollowings: true })
    }
}

export function getUsers(search){
    return async (dispatch) => {
        try {
            if(search){
                const users = await userService.getUsers(search);
                console.log(users);
                dispatch({type:'SET_SEARCH_USERS',users})
            }else dispatch({type:'SET_SEARCH_USERS',search})
        }catch (err){
            console.log('cant find users',err);
        }
    }
}

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