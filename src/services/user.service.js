// import { storageService } from '../services/async-storage.service.js'
import {httpService} from './http.service.js';
// import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_LOGIN, SOCKET_EMIT_LOGOUT } from './socket.service'

import Axios from 'axios'
var axios = Axios.create({
    withCredentials: true
})

// const users = require("../data/user.json")
// storageService.saveToStorage('loggedinUser', users[0])

// const STORAGE_KEY = 'users'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    getEmptyUser,
    getUser,
    removeFollower,
}

async function login(user) {
    // storageService.saveToStorage(STORAGE_KEY_LOGGEDIN, user);
     const loggedIn = await httpService.post('auth/login',user);
    //  socketService.emit(SOCKET_EMIT_LOGIN,loggedIn._id);
    _setLoggedinUser(loggedIn);
    return loggedIn;
}

async function logout() {
    // sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, null)
    // return axios.post(`http://localhost:3000/api/logout`);
    // socketService.emit(SOCKET_EMIT_LOGOUT);
    console.log('aaa: ',aaa);
    const aaa = await httpService.post('/auth/logout', null);
    
}

async function signup(user) {
    // storageService.saveToStorage(STORAGE_KEY, user);
    // storageService.saveToStorage(STORAGE_KEY_LOGGEDIN, user);
    const signedUp = await httpService.post('auth/signup',user)
    // socketService.emit(SOCKET_EMIT_LOGIN,signedUp._id);
    _setLoggedinUser(signedUp);
    return signedUp
}

function getLoggedinUser() {
    // return storageService.loadFromStorage(STORAGE_KEY_LOGGEDIN);
    // return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN))
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN) || 'null')
}

function _setLoggedinUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user));
}

async function getUser(username) {
    // const users = storageService.loadFromStorage(STORAGE_KEY);
    // const user = users.filter((user) => user.username === username );
    // return user[0];
    // console.log(username);
    const user = await httpService.get(`user/${username}`);
    return user;
}

async function removeFollower(userId) {
    await httpService.post('/auth/removeFollower', userId);
}

function getEmptyUser() {
    return {
        username: '',
        password: '',
        fullname: '',
    }
}

