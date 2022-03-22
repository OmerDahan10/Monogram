import { postService } from "../services/post.service.js";
import { socketService } from "../services/socket.service.js";
const users = require('../data/user.json')


export function loadPosts() {

    return async (dispatch, getState) => {
        try {

            const state = getState(); 
            const user = state.userModule.connectedUser
            const posts = await postService.loadPosts(user);
            posts.sort((post1,post2)=>{
                return post2.createdAt - post1.createdAt
            });
            dispatch({ type: 'LOAD_POSTS', posts });
            socketService.off('post-updated');
            socketService.on('post-updated',(post)=>dispatch({type:'UPDATE_POST',post}))
            socketService.off('post-added');
            socketService.on('post-added',()=>{
                console.log('post-added');
                dispatch({type:'FOLLOWING-ADDED-POST',show:true})

            })
        } catch (err) {
            console.log('error loading posts', err);
            throw err;
        }
    }
}

export function updatePost(post) {
    return async (dispatch, getState) => {
        try {
            const user = users[0];
            dispatch({ type: 'UPDATE_POST', post })
            await postService.updatePost(post, user);
        } catch (err) {
            console.log('cannot update post', err);
        }
    }
}

export function deletePost(postId) {
    return async (dispatch) => {
        try {
            await postService.deletePost(postId);
            dispatch({ type: 'DELETE_POST', postId });
        } catch (err) {
            console.log('cannot delete post', err);
        }
    }
}

export function addPost(post){
    return async (dispatch) =>{
        try{
            const newPost = await postService.addPost(post);
            // dispatch({type:'ADD_POST',newPost});
        }catch(err){
            console.log('Cannot create post',err);
        }
    }
}

export function getPostByUserId(userId){
    // console.log('userId: ',userId);
    
    return async (dispatch) =>{
        try{
            // console.log(userId);
            const userPosts = await postService.getPostByUserId(userId);
            // console.log(userPosts);
            dispatch({type:'SET_USER_POSTS',userPosts});
            // console.log('userPosts: ',userPosts);
            
        }catch(err){
            console.log('cannot get users posts',err);
        }
    }
}

export function toggleShowAdd(showAdd) {
    
    return (dispatch) => {
        // console.log(getState());
        // const state = getState();
        // const showAdd = state.showAdd
        if (showAdd) dispatch({ type: 'SHOW_ADD', show: false })
        else dispatch({ type: 'SHOW_ADD', show: true })
    }

}

export function showNewPostBtn(show){
    console.log(show);
    return(dispatch)=>{
        dispatch({type:'FOLLOWING-ADDED-POST',show:show})
    }
}
