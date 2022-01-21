import { postService } from "../services/post.service.js";
const users = require('../data/user.json')


export function loadPosts(){
    
    return async (dispatch,getState)=>{
        try{
            const state = getState();
            const user = state.userModule.connectedUser
            // const user = users[0];
            const posts = await postService.loadPosts(user);
            // console.log(posts)
            dispatch({type:'LOAD_POSTS',posts});
        } catch (err){
            console.log('error loading posts',err);
            throw err;
        }
    }
}

export function updatePost(postId){
    return async (dispatch,getState)=>{
        try{
            const state = getState();
            const post = state.postModule.posts.find(post => post._id === postId);
            await postService.updatePost(post);
            dispatch({type:'UPDATE_POST',post})
        }catch (err){
            console.log('cannot update post',err);
        }
    }
}

export function deletePost(postId){
    return async (dispatch)=>{
        try{
            await postService.deletePost(postId);
            dispatch({type:'DELETE_POST',postId});
        }catch (err){
            console.log('cannot delete post',err);
        }
    }
}
