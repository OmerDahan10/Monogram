
// import React from "react";
// import { connect } from "react-redux";
// import { ReactComponent as OptionIcon } from '../img/svg/option.svg';

// import { loadPosts, updatePost, deletePost, getPostByUserId } from "../store/post.action.js";
// import { getUser, toggleProfileOptions, toggleProfileFollowers, toggleProfileFollowings } from "../store/user.action.js"

// import { ProfileOptions } from "../cmps/ProfileOptions.jsx";
// import { ProfileFollowers } from '../cmps/ProfileFollowers.jsx';
// import { ProfileFollowings } from '../cmps/ProfileFollowings.jsx';
// import { Link } from "react-router-dom";


// class _ProfilePage extends React.Component {

//     componentDidMount() {
//         this.props.getUser(this.props.match.params.username);
//         this.props.getPostByUserId(this.props.connectedUser._id);
//         // this.props.loadPosts()
//     }

//     componentWillUnmount() {
//         this.props.getUser(null)
//         console.log('SimpleCounter Unmounting (Destroyed, removed from DOM)');
//     }

//     onProfileOptions = () => {
//         this.props.toggleProfileOptions(this.props.showProfileOptions);
//     }

//     onProfileFollowers = () => {
//         this.props.toggleProfileFollowers(this.props.showProfileFollowers);
//     }

//     onProfileFollowings = () => {
//         this.props.toggleProfileFollowings(this.props.showProfileFollowings);
//     }

//     render() {
//         const { connectedUser, userProfileShow, connectedUserPosts } = this.props;
//         // console.log('connectedUser: ',connectedUser);
//         // console.log('userProfileShow: ',connectedUserPosts);
//         // console.log('connectedUserPosts: ',connectedUserPosts);
//         var isConnectedUserShow = false ;
//         if (!userProfileShow) return <></>;
//         if (userProfileShow.username !== this.props.match.params.username) this.componentDidMount();
//         // if (userProfileShow._id === connectedUser._id) isConnectedUserShow = true 
//         (userProfileShow._id === connectedUser._id) ? console.log(true) : console.log(isConnectedUserShow);

//         const posts = this.props.posts.filter((post) => userProfileShow._id === post.by._id);

//         return (
//             <div className="profile">
//                 <section className="profile-header">
//                     <div className="photo-container-center">
//                         <div className="photo-container">
//                             <img src={userProfileShow.imgUrl} alt="" />
//                         </div>
//                     </div>
//                     {/* <div className="profile-user-info"> */}
//                     <section className="un-ed-o">
//                         <h2>{userProfileShow.username}</h2>
//                         {/* <ProfileHeaderChange userProfileShow={userProfileShow} connectedUser={connectedUser} onProfileOptions={this.onProfileOptions} /> */}
//                         {userProfileShow._id === connectedUser._id && (
//                             <>
//                                 <div className="profile-edit">
//                                     <button>Edit Profile</button>
//                                 </div>
//                                 <div className="profile-option">
//                                     <button onClick={this.onProfileOptions}><OptionIcon /></button>
//                                 </div>
//                             </>
//                         )}
//                         {userProfileShow._id !== connectedUser._id && (
//                             <div className="profile-msg-unfo">
//                                 <div className="profile-msg">
//                                     <button>Message</button>
//                                 </div>
//                                 <div className="profile-unfollow">
//                                     <button>Unfollow</button>
//                                 </div>
//                             </div>
//                         )}
//                     </section>
//                     <ul className="p-f-f">
//                         {userProfileShow._id === connectedUser._id && (
//                             <>
//                                 <li className="clean-list u-p">
//                                     {/* <span className="num">{userProfileShow.userPostsIds.length}</span> posts */}
//                                     <span className="num">{connectedUserPosts.length}</span> posts
//                                 </li>
//                                 <li className="clean-list u-fr">
//                                     <button onClick={this.onProfileFollowers}><span className="num">{userProfileShow.followers.length}</span> followers</button>
//                                 </li>
//                                 <li className="clean-list u-fn">
//                                     <button onClick={this.onProfileFollowings}><span className="num">{userProfileShow.followings.length}</span> following</button>
//                                 </li>
//                             </>
//                         )}
//                         {userProfileShow._id !== connectedUser._id && (
//                             <>
//                                 <li className="clean-list u-p">
//                                     {/* <span className="num">{userProfileShow.userPostsIds.length}</span> posts */}
//                                     <span className="num">{posts.length}</span> posts
//                                 </li>
//                                 <li className="clean-list u-fr">
//                                     <button onClick={this.onProfileFollowers}><span className="num">{userProfileShow.followers.length}</span> followers</button>
//                                 </li>
//                                 <li className="clean-list u-fn">
//                                     <button onClick={this.onProfileFollowings}><span className="num">{userProfileShow.followings.length}</span> following</button>
//                                 </li>
//                             </>
//                         )}
//                     </ul>
//                     <h4 className="user-fullname">{userProfileShow.fullname}</h4>
//                     {/* </div> */}
//                 </section>
//                 <section className="profile-post-list">
//                     {/* <PostList posts={posts} user={user} onToggleLike={this.onToggleLike} onAddComment={this.onAddComment} /> */}
//                     {userProfileShow._id === connectedUser._id && (
//                         <>
//                             {connectedUserPosts.map((post) => (

//                                 <div className="profile-post-img">
//                                     <Link className="clean-link" to={`/p/${post._id}`}>
//                                         <img src={post.imgUrl} alt="" />
//                                     </Link>
//                                 </div>
//                             ))}
//                         </>
//                     )}
//                     {userProfileShow._id !== connectedUser._id && (
//                         <>
//                             {posts.map((post) => (
//                                 <div className="profile-post-img">
//                                     <Link className="clean-link" to={`/p/${post._id}`}>
//                                         <img src={post.imgUrl} alt="" />
//                                     </Link>
//                                 </div>
//                                 // <post.imgUrl
//                                 // <ProfilePostList userProfileShow={userProfileShow}/>
//                             ))}
//                         </>
//                     )}
//                 </section>
//                 {userProfileShow._id === connectedUser._id && (<ProfileOptions />)}
//                 {userProfileShow._id === connectedUser._id && (<ProfileFollowers followers={connectedUser.followers} isConnectedUser={true}/>)}
//                 {userProfileShow._id !== connectedUser._id && (<ProfileFollowers followers={userProfileShow.followers} isConnectedUser={false}/>)}
//                 {userProfileShow._id === connectedUser._id && (<ProfileFollowings followings={connectedUser.followings} isConnectedUser={true}/>)}
//                 {userProfileShow._id !== connectedUser._id && (<ProfileFollowings followings={userProfileShow.followings} isConnectedUser={false}/>)}
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
//         showProfileOptions: state.userModule.showProfileOptions,
//         showProfileFollowers: state.userModule.showProfileFollowers,
//         showProfileFollowings: state.userModule.showProfileFollowings,
//     }
// }

// const mapDispatchToProps = {
//     loadPosts,
//     updatePost,
//     deletePost,
//     getPostByUserId,
//     getUser,
//     toggleProfileOptions,
//     toggleProfileFollowers,
//     toggleProfileFollowings,
// };

// export const ProfilePage = connect(mapStateToProps, mapDispatchToProps)(_ProfilePage);

import React from "react";
import { connect } from "react-redux";
import { ReactComponent as OptionIcon } from '../img/svg/option.svg';

import { updatePost, deletePost, getPostByUserId } from "../store/post.action.js";
import { getUser, toggleProfileOptions, toggleProfileFollowers, toggleProfileFollowings } from "../store/user.action.js"

import { ProfileOptions } from "../cmps/ProfileOptions.jsx";
import { ProfileFollowers } from '../cmps/ProfileFollowers.jsx';
import { ProfileFollowings } from '../cmps/ProfileFollowings.jsx';
import { Link } from "react-router-dom";


class _ProfilePage extends React.Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.username)
            .then(()=>{this.props.getPostByUserId(this.props.userProfileShow._id)})
    }

    componentWillUnmount() {
        this.props.getUser(null)
        this.props.getPostByUserId();
    }

    onProfileOptions = () => {
        this.props.toggleProfileOptions(this.props.showProfileOptions);
    }

    onProfileFollowers = () => {
        this.props.toggleProfileFollowers(this.props.showProfileFollowers);
    }

    onProfileFollowings = () => {
        this.props.toggleProfileFollowings(this.props.showProfileFollowings);
    }

    render() {
        const { connectedUser, userProfileShow, userProfileShowPosts } = this.props;
        if (!userProfileShow) return <></>;
        if (userProfileShow.username !== this.props.match.params.username) {
            this.componentDidMount();
            window.location.reload();
        }

        return (
            <div className="profile">
                <section className="profile-header">
                    <div className="photo-container-center">
                        <div className="photo-container">
                            <img src={userProfileShow.imgUrl} alt="" />
                        </div>
                    </div>
                    <section className="un-ed-o">
                        <h2>{userProfileShow.username}</h2>
                        {userProfileShow._id === connectedUser._id && (
                            <>
                                <div className="profile-edit">
                                    <button>Edit Profile</button>
                                </div>
                                <div className="profile-option">
                                    <button onClick={this.onProfileOptions}><OptionIcon /></button>
                                </div>
                            </>
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
                    <ul className="p-f-f">
                        <li className="clean-list u-p">
                            <span className="num">{userProfileShowPosts.length}</span> posts
                        </li>
                        <li className="clean-list u-fr">
                            <button onClick={this.onProfileFollowers}><span className="num">{userProfileShow.followers.length}</span> followers</button>
                        </li>
                        <li className="clean-list u-fn">
                            <button onClick={this.onProfileFollowings}><span className="num">{userProfileShow.followings.length}</span> following</button>
                        </li>
                    </ul>
                    <h4 className="user-fullname">{userProfileShow.fullname}</h4>
                </section>
                <section className="profile-post-list">
                    {userProfileShowPosts.map((post) => (
                        <div className="profile-post-img">
                            <Link className="clean-link" to={`/p/${post._id}`}>
                                <img src={post.imgUrl} alt="" />
                            </Link>
                        </div>
                    ))}
                </section>
                {userProfileShow._id === connectedUser._id && (<ProfileOptions />)}
                <ProfileFollowers followers={userProfileShow.followers} />
                <ProfileFollowings followings={userProfileShow.followings} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userProfileShowPosts: state.postModule.connectedUserPosts,
        connectedUser: state.userModule.connectedUser,
        userProfileShow: state.userModule.userProfileShow,
        showProfileOptions: state.userModule.showProfileOptions,
        showProfileFollowers: state.userModule.showProfileFollowers,
        showProfileFollowings: state.userModule.showProfileFollowings,
    }
};

const mapDispatchToProps = {
    updatePost,
    deletePost,
    getPostByUserId,
    getUser,
    toggleProfileOptions,
    toggleProfileFollowers,
    toggleProfileFollowings,
};

export const ProfilePage = connect(mapStateToProps, mapDispatchToProps)(_ProfilePage);
