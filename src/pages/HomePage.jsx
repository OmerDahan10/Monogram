import React from "react";
import { connect } from "react-redux";
import { PostList } from "../cmps/PostList.jsx";
import {loadPosts,updatePost,deletePost,showNewPostBtn} from "../store/post.action.js";
import {login,logout} from "../store/user.action.js";
import {storageService} from "../services/async-storage.service.js";
import { Route } from "react-router-dom";
import { LoginSignup } from "./LoginSignup.jsx";
// import { NavLink } from "react-router-dom";


class _HomePage extends React.Component{

    componentDidMount() {
        // console.log('this.props: ',this.props);
        
        this.props.loadPosts();
        // this.props.login();
        // console.log(this.props);
    }

    onToggleLike = (postId,isLiked)=>{
        // console.log(isLiked);
        // const connectedUser = storageService.loadFromStorage('loggedinUser');
        const connectedUser = this.props.user;
        const post = this.props.posts.find(post=> post._id === postId);
        if(isLiked){
           post.likedBy = post.likedBy.filter(user=>user._id !== connectedUser._id)
        }else{
            post.likedBy.unshift(connectedUser);
        }
        this.props.updatePost(post);
    }

    onAddComment = (postId,text) =>{
        // const connectedUser = storageService.loadFromStorage('loggedinUser');
        const connectedUser = this.props.user;
        const post = this.props.posts.find(post=> post._id === postId);
        const comment ={
            _id: storageService.makeId(),
            by:{
                _id: connectedUser._id,
                username: connectedUser.username,
                fullname: connectedUser.fullname,
                imgUrl: connectedUser.imgUrl
            },
            txt:text
        }
        post.comments.unshift(comment);
        this.props.updatePost(post);

    }

    onShowNewPosts = () =>{
        this.props.showNewPostBtn(false);
        this.props.loadPosts();
        window.scrollTo(0,0);
    }
    
    render(){
        if (this.props.user === null) window.location.replace('/login');
        const {user, posts, newPostBtn} = this.props
        return(
            <div>
                {newPostBtn && <button className="new-post-button" onClick={this.onShowNewPosts}>New posts</button>}
               <PostList posts = {posts} user = {user} onToggleLike={this.onToggleLike} onAddComment = {this.onAddComment} className={newPostBtn ? 'post-container margin' : 'post-container'} />
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        posts:state.postModule.posts,
        user:state.userModule.connectedUser,
        newPostBtn:state.postModule.showNewPostBtn
    }
}

const mapDispatchToProps ={
    loadPosts,
    updatePost,
    deletePost,
    showNewPostBtn
    // login,
    // logout,
}

export const HomePage = connect(mapStateToProps,mapDispatchToProps)(_HomePage)