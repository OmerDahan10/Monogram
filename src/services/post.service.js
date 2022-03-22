// import { storageService } from "./async-storage.service.js";
import axios from 'axios';
import {httpService} from './http.service.js';



// const posts = require('../data/post.json');


// function getPosts() {
//     storageService.saveToStorage('posts',posts);
//     return posts
// }

export const postService ={
    loadPosts,
    updatePost,
    deletePost,
    addPost,
    getPostByUserId
}

export async function loadPosts(user) {
//    return storageService.query('posts',user).then(res=> res);
    //  return httpService.get('post',user._id);
    // const posts =  await axios.get(`//localhost:3030/api/post/?userId=${user._id}`);
    const posts =  await httpService.get(`post/?userId=${user._id}`);
    return posts

}

export async function getPostByUserId(userId){
    // return storageService.getPostsById(userId);
    if (!userId) {
        const posts = [] ;
        return posts;
    }
    const posts = await httpService.get(`post/${userId}`);
    return posts;
}

export function addPost(post){
    // return storageService.post('post',post);
    return httpService.post('post',post);
}

export async function updatePost(post,user) {
    // return storageService.put('posts',post,user);
    
    return httpService.put(`post/${post._id}`,post);
}

export function deletePost(postId){
    // return storageService.remove('posts',postId);
    return httpService.delete(`/post/${postId}`)
}
