import { storageService } from "./async-storage.service.js";


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

export function loadPosts(user) {
   return storageService.query('posts',user).then(res=> res);

}

export function getPostByUserId(userId){
    return storageService.getPostsById(userId);
}

export function addPost(post){
    return storageService.post('post',post);
}

export function updatePost(post,user) {
    return storageService.put('posts',post,user);
}

export function deletePost(postId){
    return storageService.remove('posts',postId);
}
