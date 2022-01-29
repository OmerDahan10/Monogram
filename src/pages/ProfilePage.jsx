// import React from "react";
// import { connect } from "react-redux";
// import { loadPosts, updatePost, deletePost, getPostByUserId } from "../store/post.action.js";
// import { getUser, toggleProfileOptions } from "../store/user.action.js"
// import { ProfileOptions } from "../cmps/ProfileOptions.jsx";
// import { ReactComponent as OptionIcon } from '../img/svg/option.svg';
// // import { ProfileHeaderChange } from "../cmps/ProfileHeaderChange.jsx";


// class _ProfilePage extends React.Component {

//     componentDidMount() {
//         // console.log(this.props.match.params.username);
//         this.props.getUser(this.props.match.params.username);
//         // this.props.getPostByUserId(this.props.connectedUser._id);
//         this.props.getPostByUserId(this.props.connectedUser._id, this.props.connectedUser);
//         // this.props.loadPosts()
//         // this.props.loadPosts(this.props.userProfileShow);
//     }

//     onProfileOptions = () => {
//         console.log('this.props: ', this.props.showProfileOptions);
//         this.props.toggleProfileOptions(this.props.showProfileOptions);
//     }

//     render() {
//         console.log('this.props: ', this.props);


//         const { connectedUser, userProfileShow, connectedUserPosts } = this.props
//         console.log('connectedUserPosts: ', connectedUserPosts);

//         // const { userProfileShow } = this.props
//         if (!userProfileShow) return <></>
//         // if (userProfileShow._id===connectedUser) this.componentDidUpdate() ;

//         // const {connectedUserPosts} = this.props
//         if (userProfileShow._id === connectedUser._id) {
//             this.posts = this.props.posts.filter((post) => userProfileShow._id === post.by._id)
//         }
//         console.log('posts: ', posts);
//         // else {const posts = this.props.connectedUserPosts.map(post=>post)}
//         // console.log('this.props: ',this.props);



//         return (
//             <div className="profile">
//                 <section className="profile-header">
//                     <div className="photo-container">
//                         <img src={userProfileShow.imgUrl} alt="" />
//                     </div>
//                     <div className="profile-user-info">
//                         <section className="un-ed-o">
//                             <h2>{userProfileShow.username}</h2>
//                             {/* <ProfileHeaderChange userProfileShow={userProfileShow} connectedUser={connectedUser} onProfileOptions={this.onProfileOptions} /> */}
//                             {userProfileShow._id === connectedUser._id && (
//                                 <div className="profile-edit-options">
//                                     <div className="profile-edit">
//                                         <button>Edit Profile</button>
//                                     </div>
//                                     <div className="profile-option">
//                                         <button onClick={this.onProfileOptions}><OptionIcon /></button>
//                                     </div>
//                                 </div>
//                             )}
//                             {userProfileShow._id !== connectedUser._id && (
//                                 <div className="profile-msg-unfo">
//                                     <div className="profile-msg">
//                                         <button>Message</button>
//                                     </div>
//                                     <div className="profile-unfollow">
//                                         <button>Unfollow</button>
//                                     </div>
//                                 </div>
//                             )}
//                         </section>
//                         <ul>
//                             <li className="clean-list u-p">
//                                 <span className="num">{userProfileShow.userPostsIds.length}</span> posts
//                             </li>
//                             <li className="clean-list u-fr">
//                                 <button><span className="num">{userProfileShow.followers.length}</span> followers</button>
//                             </li>
//                             <li className="clean-list u-fn">
//                                 <button><span className="num">{userProfileShow.followings.length}</span> following</button>
//                             </li>
//                         </ul>
//                         <h4>{userProfileShow.fullname}</h4>
//                     </div>
//                 </section>
//                 <section className="profile-post-list">
//                     {/* <PostList posts={posts} user={user} onToggleLike={this.onToggleLike} onAddComment={this.onAddComment} /> */}
//                     {userProfileShow._id === connectedUser._id && (
//                         <>
//                             {connectedUserPosts.map((post) => (
//                                 <img src={post.imgUrl} alt="" />
//                                 // <post.imgUrl
//                                 // <ProfilePostList userProfileShow={userProfileShow}/>
//                             ))}
//                         </>
//                     )}
//                     {userProfileShow._id !== connectedUser._id && (
//                         <>
//                             {posts.map((post) => (
//                                 <img src={post.imgUrl} alt="" />
//                                 // <post.imgUrl
//                                 // <ProfilePostList userProfileShow={userProfileShow}/>
//                             ))}
//                         </>
//                     )}
//                 </section>
//                 <ProfileOptions />
//             </div>
//         )
//     }

// };

// function mapStateToProps(state) {
//     return {
//         posts: state.postModule.posts,
//         connectedUserPosts: state.postModule.connectedUserPosts,
//         connectedUser: state.userModule.connectedUser,
//         userProfileShow: state.userModule.userProfileShow,
//         showProfileOptions: state.userModule.showProfileOptions
//     }
// }

// const mapDispatchToProps = {
//     loadPosts,
//     updatePost,
//     deletePost,
//     getPostByUserId,
//     getUser,
//     toggleProfileOptions,
// };

// // export const ProfilePage = connect(null, mapDispatchToProps)(_ProfilePage);
// export const ProfilePage = connect(mapStateToProps, mapDispatchToProps)(_ProfilePage);



import React from "react";
import { connect } from "react-redux";
import { ReactComponent as OptionIcon } from '../img/svg/option.svg';

import { loadPosts, updatePost, deletePost, getPostByUserId } from "../store/post.action.js";
import { getUser, toggleProfileOptions, toggleProfileFollowers, toggleProfileFollowing } from "../store/user.action.js"
// import { getUser, toggleProfileOptions, toggleProfileFollowers } from "../store/user.action.js"

import { ProfileOptions } from "../cmps/ProfileOptions.jsx";
import { ProfileFollowers } from '../cmps/ProfileFollowers.jsx'
// import { ProfileHeaderChange } from "../cmps/ProfileHeaderChange.jsx";


class _ProfilePage extends React.Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.username);
        this.props.getPostByUserId(this.props.connectedUser._id);
        // this.props.loadPosts()
    }

    onProfileOptions = () => {
        this.props.toggleProfileOptions(this.props.showProfileOptions);
    }

    onProfileFollowers = () => {
        this.props.toggleProfileFollowers(this.props.showProfileFollowers);
    }

    onProfileFollowing = () => {
        this.props.toggleProfileFollowing(this.props.showProfileFollowing);
    }

    render() {
        const { connectedUser, userProfileShow, connectedUserPosts } = this.props
        if (!userProfileShow) return <></>
        const posts = this.props.posts.filter((post) => userProfileShow._id === post.by._id)

        return (
            <div className="profile">
                <section className="profile-header">
                    <div className="photo-container">
                        <img src={userProfileShow.imgUrl} alt="" />
                    </div>
                    <div className="profile-info-container">
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
                                            <button>Message</button>
                                        </div>
                                        <div className="profile-unfollow">
                                            <button>Unfollow</button>
                                        </div>
                                    </div>
                                )}
                            </section>
                            <ul>
                                {userProfileShow._id === connectedUser._id && (
                                    <li className="clean-list u-p">
                                        {/* <span className="num">{userProfileShow.userPostsIds.length}</span> posts */}
                                        <span className="num">{connectedUserPosts.length}</span> posts
                                    </li>
                                )}
                                {userProfileShow._id !== connectedUser._id && (
                                    <li className="clean-list u-p">
                                        {/* <span className="num">{userProfileShow.userPostsIds.length}</span> posts */}
                                        <span className="num">{posts.length}</span> posts
                                    </li>
                                )}
                                <li className="clean-list u-fr">
                                    <button onClick={this.onProfileFollowers}><span className="num">{userProfileShow.followers.length}</span> followers</button>
                                </li>
                                <li className="clean-list u-fn">
                                    <button onClick={this.onProfileFollowing}><span className="num">{userProfileShow.followings.length}</span> following</button>
                                </li>
                            </ul>
                            <h4>{userProfileShow.fullname}</h4>
                        </div>
                    </div>
                </section>
                <section className="profile-post-list">
                    {/* <PostList posts={posts} user={user} onToggleLike={this.onToggleLike} onAddComment={this.onAddComment} /> */}
                    {userProfileShow._id === connectedUser._id && (
                        <>
                            {connectedUserPosts.map((post) => (
                                <img src={post.imgUrl} alt="" />
                                // <post.imgUrl
                                // <ProfilePostList userProfileShow={userProfileShow}/>
                            ))}
                        </>
                    )}
                    {userProfileShow._id !== connectedUser._id && (
                        <>
                            {posts.map((post) => (
                                <img src={post.imgUrl} alt="" />
                                // <post.imgUrl
                                // <ProfilePostList userProfileShow={userProfileShow}/>
                            ))}
                        </>
                    )}
                </section>
                {userProfileShow._id === connectedUser._id && (<ProfileOptions />)}
                {userProfileShow._id === connectedUser._id && (<ProfileFollowers followers={connectedUser.followers} />)}
                {userProfileShow._id !== connectedUser._id && (<ProfileFollowers followers={userProfileShow.followers} />)}
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
        showProfileOptions: state.userModule.showProfileOptions,
        showProfileFollowers: state.userModule.showProfileFollowers,
        showProfileFollowing: state.userModule.showProfileFollowing,
    }
}

const mapDispatchToProps = {
    loadPosts,
    updatePost,
    deletePost,
    getPostByUserId,
    getUser,
    toggleProfileOptions,
    toggleProfileFollowers,
    toggleProfileFollowing,
};

// export const ProfilePage = connect(null, mapDispatchToProps)(_ProfilePage);
export const ProfilePage = connect(mapStateToProps, mapDispatchToProps)(_ProfilePage);
