import { storageService } from '../services/async-storage.service.js'

import Axios from 'axios'
var axios = Axios.create({
    withCredentials: true
})

const users = require("../data/user.json")
storageService.saveToStorage('loggedinUser', users[0])

const STORAGE_KEY = 'user'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    getEmptyUser,
}

async function login(credentials) {
    console.log('cred in services', credentials);
    // storageService.saveToStorage(STORAGE_KEY_LOGGEDIN, credentials);
    try {
        // const user = await axios.post(`http://localhost:3030/api/login`, credentials)
        // const user = await axios.post(`http://localhost:3000`, credentials)
        const user = credentials;
        // _setLoggedinUser()
        return user
        // return user

    } catch (err) {
        console.log('userserivce-front-eror', err)

    }
}

async function signup(userInfo) {
    try {
        const user = await axios.post(`http://localhost:3000/api/signup`, userInfo)
        _setLoggedinUser(user.data)
        return user.data
    } catch (err) {
        console.log('userserivce-front-eror', err)
    }
}

function getLoggedinUser() {
    return storageService.loadFromStorage('loggedinUser');
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

