import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { PostList } from "../cmps/PostList.jsx"
import { loadPosts, updatePost, deletePost } from "../store/post.action.js";
import { useParams } from "react-router-dom";
import { PostPreview } from "../cmps/PostPreview";
import { ReactComponent as CloseIcon } from "../img/svg/close.svg";
import { storageService } from "../services/async-storage.service.js";

class _ProfilePage extends React.Component {

    componentDidMount() {
        this.props.loadPosts();
        console.log('this.props: ', this.props);

    }


    render() {
        const { user } = this.props
        // console.log('user: ',user);
        const { posts } = this.props;
        // console.log(posts);

        return (
            <div className="profile">
                <header className="profile-header">
                    <img src={user.imgUrl} />
                    <div className="profil-user-info">
                        <section className="un-ed-o">
                        <h2>{user.username}</h2>
                        <button>Edit Profile</button>
                        <button>Options</button>
                        </section>
                        <>
                        posts
                        <button>followers</button>
                        <button>following</button>
                        </>
                        <h4>{user.fullname}</h4>
                    </div>
                </header>
                <section className="profil-post-list">
                    <PostList posts={posts} user={user} onToggleLike={this.onToggleLike} onAddComment={this.onAddComment} />
                </section>
            </div>
        )
    }

};

function mapStateToProps(state) {
    console.log('state: ', state);
    return {

        posts: state.postModule.posts,
        user: state.userModule.connectedUser
    }
}

const mapDispatchToProps = {
    loadPosts,
    updatePost,
    deletePost,
};

// export const ProfilePage = connect(null, mapDispatchToProps)(_ProfilePage);
export const ProfilePage = connect(mapStateToProps, mapDispatchToProps)(_ProfilePage);
