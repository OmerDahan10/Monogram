import { storageService } from "./async-storage.service.js";


const posts = require('../data/post.json');


function getPosts() {
    storageService.saveToStorage('posts',posts);
    return posts
}

export const postService ={
    getPosts
}