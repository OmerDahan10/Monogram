import React from "react";
import { connect } from "react-redux";
import { loadPosts, updatePost, deletePost, getPostByUserId } from "../store/post.action.js";
import { getUser, toggleProfileOptions } from "../store/user.action.js"
import { ProfileOptions } from "../cmps/ProfileOptions.jsx";
import { ReactComponent as OptionIcon } from '../img/svg/option.svg';
// import { ProfileHeaderChange } from "../cmps/ProfileHeaderChange.jsx";


class _ProfilePage extends React.Component {

    componentDidMount() {
        console.log(this.props.match.params.username);
        this.props.getUser(this.props.match.params.username);
        this.props.getPostByUserId(this.props.connectedUser._id);
        // this.props.loadPosts()
        // this.props.loadPosts(this.props.userProfileShow);
    }
    
    onProfileOptions = () => {
        console.log('this.props: ', this.props.showProfileOptions);
        this.props.toggleProfileOptions(this.props.showProfileOptions);
    }
    
    render() {
        
        const { connectedUser, userProfileShow, connectedUserPosts } = this.props
        // const { userProfileShow } = this.props
        if(!userProfileShow) {
            return <></>
        }
        // const {connectedUserPosts} = this.props
        const posts = this.props.posts.filter((post) => userProfileShow._id === post.by._id)
        console.log('this.props: ',this.props);
        

        return (
            <div className="profile">
                <section className="profile-header">
                    <div className="photo-container">
                        <img src={userProfileShow.imgUrl} alt=""/>
                    </div>
                    <div className="profile-user-info">
                        <section className="un-ed-o">
                            <h2>{userProfileShow.username}</h2>
                            {/* <ProfileHeaderChange userProfileShow={userProfileShow} connectedUser={connectedUser} onProfileOptions={this.onProfileOptions} /> */}
                            {userProfileShow._id === connectedUser._id && (
                                <div className="profile-edit-options">
                                    <div className="profile-edit">
                                        <button>Edit Profile</button>
                                    </div>
                                    <div className="profile-option">
                                        <button onClick={this.onProfileOptions}><OptionIcon /></button>
                                    </div>
                                </div>
                            )}
                            {userProfileShow._id !== connectedUser._id && (
                                <div className="profile-msg-unfo">
                                    <div className="profile-msg">
                                        <button>Messge</button>
                                    </div>
                                    <div className="profile-unfollow">
                                        <button>Unfollow</button>
                                    </div>
                                </div>
                            )}
                        </section>
                        <ul>
                            <li className="clean-list u-p">
                                <span className="num">{userProfileShow.userPostsIds.length}</span> posts
                            </li>
                            <li className="clean-list u-fr">
                                <button><span className="num">{userProfileShow.followers.length}</span> followers</button>
                            </li>
                            <li className="clean-list u-fn">
                                <button><span className="num">{userProfileShow.followings.length}</span> following</button>
                            </li>
                        </ul>
                        <h4>{userProfileShow.fullname}</h4>
                    </div>
                </section>
                <section className="profile-post-list">
                    {/* <PostList posts={posts} user={user} onToggleLike={this.onToggleLike} onAddComment={this.onAddComment} /> */}
                    {userProfileShow._id === connectedUser._id && (
                        <>
                        {connectedUserPosts.map((post) => (
                        <img src={post.imgUrl} alt=""/>
                        // <post.imgUrl
                        // <ProfilePostList userProfileShow={userProfileShow}/>
                    ))}
                        </>
                    )}
                    {userProfileShow._id !== connectedUser._id && (
                        <>
                        {posts.map((post) => (
                        <img src={post.imgUrl} alt=""/>
                        // <post.imgUrl
                        // <ProfilePostList userProfileShow={userProfileShow}/>
                    ))}
                    </>
                    )}
                </section>
                <ProfileOptions />
            </div>
        )
    }

};

function mapStateToProps(state) {
    return {
        posts: state.postModule.posts,
        connectedUserPosts: state.postModule.connectedUserPosts,
        connectedUser: state.userModule.connectedUser,
        userProfileShow: state.userModule.userProfileShow,
        showProfileOptions: state.userModule.showProfileOptions
    }
}

const mapDispatchToProps = {
    loadPosts,
    updatePost,
    deletePost,
    getPostByUserId,
    getUser,
    toggleProfileOptions,
};

// export const ProfilePage = connect(null, mapDispatchToProps)(_ProfilePage);
export const ProfilePage = connect(mapStateToProps, mapDispatchToProps)(_ProfilePage);
