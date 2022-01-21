import React from "react";
import { connect } from "react-redux";
import { PostList } from "../cmps/PostList.jsx";
import {loadPosts,updatePost,deletePost} from "../store/post.action.js";
import {login,logout,signup} from "../store/user.action.js";
import { storageService } from '../services/async-storage.service'
// import { NavLink } from "react-router-dom";


class _HomePage extends React.Component{

    componentDidMount() {
        console.log(123);
        this.props.loadPosts();
    }
    
    render(){
        const user = storageService.loadFromStorage('loggedinUser');
        console.log(user);
        const {posts} = this.props;
        console.log(posts);
        return(
            <div>
               <PostList posts = {posts} />
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        posts:state.postModule.posts,
        users:state.userModule.users
    }
}

const mapDispatchToProps ={
    loadPosts,
    updatePost,
    deletePost,
    login,
    // logout,
    // signup,
}

export const HomePage = connect(mapStateToProps,mapDispatchToProps)(_HomePage)