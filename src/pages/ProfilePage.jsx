import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { PostList } from "../cmps/PostList.jsx"
import { loadPosts, updatePost, deletePost } from "../store/post.action.js";
import {getUser} from "../store/user.action.js"
import { useParams } from "react-router-dom";
import { PostPreview } from "../cmps/PostPreview";
import { ReactComponent as CloseIcon } from "../img/svg/close.svg";
import { storageService } from "../services/async-storage.service.js";

class _ProfilePage extends React.Component {

    
    
    componentDidMount() {
        this.props.getUser(this.props.match.params.username)
        this.props.loadPosts()
        // this.props.loadPosts(this.props.userProfileShow);
    }
    
    
    render() {
        console.log('this.props: ', this.props);
        const {userProfileShow} = this.props
        const posts = this.props.posts.filter((post)=>userProfileShow._id===post.by._id)
        console.log('posts: ',posts);
        

        return (
            <div className="profile">
                <section className="profile-header">
                    <img src={userProfileShow.imgUrl} />
                    <div className="profil-user-info">
                        <section className="un-ed-o">
                        <h2>{userProfileShow.username}</h2>
                        <button>Edit Profile</button>
                        <button>Options</button>
                        </section>
                        <>
                        posts
                        <button>followers</button>
                        <button>following</button>
                        </>
                        <h4>{userProfileShow.fullname}</h4>
                    </div>
                </section>
                <section className="profil-post-list">
                    {/* <PostList posts={posts} user={user} onToggleLike={this.onToggleLike} onAddComment={this.onAddComment} /> */}
                    {posts.map((post)=>(
                        <img src={post.imgUrl} />
                        // <post.imgUrl
                        // <ProfilePostList userProfileShow={userProfileShow}/>
                    ))}
                </section>
            </div>
        )
    }

};

function mapStateToProps(state) {
    console.log('state: ', state);
    return {
        posts: state.postModule.posts,
        userProfileShow: state.userModule.userProfileShow,
        connectedUser: state.userModule.userProfileShow
    }
}

const mapDispatchToProps = {
    loadPosts,
    updatePost,
    deletePost,
    getUser,
};

// export const ProfilePage = connect(null, mapDispatchToProps)(_ProfilePage);
export const ProfilePage = connect(mapStateToProps, mapDispatchToProps)(_ProfilePage);
