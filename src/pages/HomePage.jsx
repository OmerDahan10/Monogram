import React from "react";
import { connect } from "react-redux";
import { PostList } from "../cmps/PostList.jsx";
import {loadPosts,updatePost,deletePost} from "../store/post.action.js";
import {login,logout} from "../store/user.action.js";
import {storageService} from "../services/async-storage.service.js";
// import { NavLink } from "react-router-dom";


class _HomePage extends React.Component{

    componentDidMount() {
        console.log('this.props: ',this.props);
        
        this.props.loadPosts();
        // this.props.login();
        // console.log(this.props);
    }

    onToggleLike = (postId,isLiked)=>{
        console.log(isLiked);
        const connectedUser = storageService.loadFromStorage('loggedinUser');
        const post = this.props.posts.find(post=> post._id === postId);
        if(isLiked){
           post.likedBy = post.likedBy.filter(user=>user._id !== connectedUser._id)
        }else{
            post.likedBy.unshift(connectedUser);
        }
        this.props.updatePost(post);
    }

    onAddComment = (postId,text) =>{
        const connectedUser = storageService.loadFromStorage('loggedinUser');
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
    
    render(){
        const {user} = this.props
        // console.log('user: ',user);
        const {posts} = this.props;
        // console.log(posts);
        return(
            <div>
               <PostList posts = {posts} user = {user} onToggleLike={this.onToggleLike} onAddComment = {this.onAddComment} />
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        posts:state.postModule.posts,
        user:state.userModule.connectedUser
    }
}

const mapDispatchToProps ={
    loadPosts,
    updatePost,
    deletePost,
    // login,
    // logout,
}

export const HomePage = connect(mapStateToProps,mapDispatchToProps)(_HomePage)