
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

    async componentDidMount() {
        await this.props.getUser(this.props.match.params.username)
        await this.props.getPostByUserId(this.props.userProfileShow._id)
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
        if (userProfileShow.username !== this.props.match.params.username) window.location.reload();

        return (
            <div className="profile" >
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
                {/* <ProfileFollowers followers={userProfileShow.followers} /> */}
                <ProfileFollowers />
                <ProfileFollowings followings={userProfileShow.followings} />
            </div >
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
