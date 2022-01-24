import { userService } from '../services/user.service.js';
import { storageService } from '../services/async-storage.service.js'

// export function login(credentials) {
//     console.log('the cred in useract', credentials)
//     return async (dispatch) => {
//         try {
//             const user = await userService.login(credentials)
//             dispatch({ type: 'SET_USER', user })
//         } catch (err) {
//             console.log('no user found', err)
//         }
//     }
// }

export function login() {
    const user = storageService.loadFromStorage("users")
    const credentials = user[0];
    return async (dispatch) => {
        try {
            const user = await userService.login(credentials)
            dispatch({ type: 'SET_USER', user })
        } catch (err) {
            console.log('no user found', err)
        }
    }
}

export function signup(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.signup(credentials)
            dispatch({ type: 'SET_USER', user })
        } catch (err) {
            console.log('Cannot signup')
        }
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