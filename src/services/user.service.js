import { storageService } from '../services/async-storage.service.js'

import Axios from 'axios'
var axios = Axios.create({
    withCredentials: true
})

const users = require("../data/user.json")
// storageService.saveToStorage('loggedinUser', users[0])

const STORAGE_KEY = 'users'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    getEmptyUser,
}

function login(user){
storageService.saveToStorage(STORAGE_KEY_LOGGEDIN, user)
_setLoggedinUser(user)
return user
}

function signup(user){
    // async
    storageService.saveToStorage(STORAGE_KEY, user)
    storageService.saveToStorage(STORAGE_KEY_LOGGEDIN, user)
    _setLoggedinUser(user)
    return user
}

function getLoggedinUser() {
    return storageService.loadFromStorage(STORAGE_KEY_LOGGEDIN);
    // return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN))
}

function _setLoggedinUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
}

function logout() {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, null)
    return axios.post(`http://localhost:3000/api/logout`)
}

function getEmptyUser() {
    return {
        username: '',
        password: '',
        fullname: '',
    }
}

