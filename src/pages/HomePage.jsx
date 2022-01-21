import React from "react";
import { connect } from "react-redux";
import { PostList } from "../cmps/PostList.jsx";
import {loadPosts,updatePost,deletePost} from "../store/post.action.js";
import {login,logout} from "../store/user.action.js";
// import { NavLink } from "react-router-dom";


class _HomePage extends React.Component{

    componentDidMount() {
        this.props.loadPosts();
        this.props.login();
        // console.log(this.props);
    }
    
    render(){
        const {user} = this.props
        // console.log('user: ',user);
        const {posts} = this.props;
        // console.log(posts);
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
        user:state.userModule.connectedUser
    }
}

const mapDispatchToProps ={
    loadPosts,
    updatePost,
    deletePost,
    login,
    // logout,
}

export const HomePage = connect(mapStateToProps,mapDispatchToProps)(_HomePage)