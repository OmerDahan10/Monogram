import React from "react";
import { connect } from "react-redux";
import { PostList } from "../cmps/PostList.jsx";
import {loadPosts,updatePost,deletePost} from "../store/post.action.js";
import { NavLink } from "react-router-dom";

class _HomePage extends React.Component{

    componentDidMount() {
        console.log(123);
        this.props.loadPosts();
    }
    

    render(){
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
        posts:state.postModule.posts
    }
}

const mapDispatchToProps ={
    loadPosts,
    updatePost,
    deletePost
}

export const HomePage = connect(mapStateToProps,mapDispatchToProps)(_HomePage)