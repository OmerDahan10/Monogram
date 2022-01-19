import { storageService } from "./async-storage.service.js";


const posts = require('../data/user.json');


function getPosts() {
    storageService.saveToStorage('users',posts);
    return posts
}

export const postService ={
    getPosts
}