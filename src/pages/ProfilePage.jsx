import React from "react";
import { connect } from "react-redux";
import { loadPosts, updatePost, deletePost } from "../store/post.action.js";
import { getUser, toggleProfileOption } from "../store/user.action.js"
import { ProfileOptions } from "../cmps/ProfileOptions.jsx";
// import {ReactComponent as OptionIcon} from '../img/svg/'
// import { ReactComponent as OptionIcon} from '../img/svg/'
import { ReactComponent as OptionIcon } from '../img/svg/option.svg';


class _ProfilePage extends React.Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.username)
        this.props.loadPosts()
        // this.props.loadPosts(this.props.userProfileShow);
    }

    onProfileOptions = () => {
        console.log('this.props: ', this.props);
        this.props.toggleProfileOption(this.props.showProfileOption)
    }

    render() {
        console.log('this.props: ', this.props);
        const { connectedUser } = this.props
        const { userProfileShow } = this.props
        const posts = this.props.posts.filter((post) => userProfileShow._id === post.by._id)
        console.log(userProfileShow);

        return (
            <div className="profile">
                <section className="profile-header">
                    <div className="photo-container">
                        <img src={userProfileShow.imgUrl} />
                    </div>
                    <div className="profil-user-info">
                        <section className="un-ed-o">
                            <h2>{userProfileShow.username}</h2>
                            {userProfileShow._id === connectedUser._id && (
                                <>
                                    <button>Edit Profile</button>
                                    <button onClick={this.onProfileOptions}><OptionIcon /></button>
                                </>
                            )}
                            {userProfileShow._id !== connectedUser._id && (
                                <>
                                    <button>Messge</button>
                                    <button>Unfollow</button>
                                </>
                            )}
                            {/* <button >Options</button> */}
                        </section>
                        <>
                            {userProfileShow.userPostsIds.length} posts
                            <button>{userProfileShow.followers.length} followers</button>
                            <button>{userProfileShow.followings.length} following</button>
                        </>
                        <h4>{userProfileShow.fullname}</h4>
                    </div>
                </section>
                <article className="profile-post-list">
                    {/* <PostList posts={posts} user={user} onToggleLike={this.onToggleLike} onAddComment={this.onAddComment} /> */}
                    {posts.map((post) => (
                        <img src={post.imgUrl} />
                        // <post.imgUrl
                        // <ProfilePostList userProfileShow={userProfileShow}/>
                    ))}
                </article>
                <ProfileOptions />
            </div>
        )
    }

};

function mapStateToProps(state) {
    return {
        posts: state.postModule.posts,
        userProfileShow: state.userModule.userProfileShow,
        connectedUser: state.userModule.connectedUser,
        showProfileOption: state.userModule.showProfileOption
    }
}

const mapDispatchToProps = {
    loadPosts,
    updatePost,
    deletePost,
    getUser,
    toggleProfileOption,
};

// export const ProfilePage = connect(null, mapDispatchToProps)(_ProfilePage);
export const ProfilePage = connect(mapStateToProps, mapDispatchToProps)(_ProfilePage);
