
import React from "react";
import { connect } from "react-redux";
import { toggleProfileFollowers, removeFollower } from "../store/user.action.js";
import { ReactComponent as XIcon } from '../img/svg/X-icon.svg';
import { Link } from "react-router-dom";


class _ProfileFollowers extends React.Component {

  onRemoveFollower = async (theFollower) => {
    await this.props.removeFollower(theFollower, this.props.userProfileShow)
    console.log(this.props.userProfileShow);
    console.log(this.props.connectedUser);
  }
  
  render() {
    const { showProfileFollowers, userProfileShow, connectedUser } = this.props

    let isTheconnectedUser = false;
    if (userProfileShow._id === connectedUser._id) isTheconnectedUser = true;
    const followingList = []
    connectedUser.followings.map((follow) => {
      followingList.push(follow._id);
    })
    const { followers } = userProfileShow

    return (
      <>
        {showProfileFollowers && (
          <>
            <div className="profile-followers-background" onClick={this.props.toggleProfileFollowers}></div>
            <div className="profile-followers-modal">
              <section className="followers-header">
                <div className="spacer"></div>
                <div className="followers-headline">Followers</div>
                <div className="spacer"><button className="clean-btn exit-followers" onClick={this.props.toggleProfileFollowers}><XIcon /></button></div>
              </section>
              <section className="followers-container">
                <div className="followers-list">
                  {followers.map((follower) => {
                    return (
                      <div className="each-follower">
                        <div className="center">
                          <img src={follower.imgUrl} alt="" />
                        </div>
                        <div className="follower-names">
                          <div className="follower-username-follow">
                            <Link className="clean-link" to={`/profile/${follower.username}`}><span>{follower.username}</span></Link>
                            {userProfileShow._id === connectedUser._id &&
                              (!followingList.includes(follower._id) &&
                                <button className="clean-btn" onClick={() => { }}><span>Follow</span></button>
                              )}
                          </div>
                          <div className="follower-fullname">{follower.fullname}</div>
                        </div>
                        {(isTheconnectedUser) &&
                          <button className="clean-btn follower-remove" onClick={() => { this.onRemoveFollower(follower.username) }}>Remove</button>
                        }
                        {(!isTheconnectedUser) &&
                          <>
                            {followingList.includes(follower._id) &&
                              <button className="clean-btn follower-following" onClick={() => { removeFollower(follower.username, userProfileShow) }}>Following</button>
                            }
                            {!followingList.includes(follower._id) &&
                              <button className="clean-btn follower-follow" onClick={() => { removeFollower(follower.username, userProfileShow) }}>Follow</button>
                            }
                          </>
                        }
                      </div>
                    )
                  })}
                </div>
              </section>
            </div>
          </>
        )}
      </>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    // user: state.userModule.connectedUser,
    showProfileFollowers: state.userModule.showProfileFollowers,
    connectedUser: state.userModule.connectedUser,
    userProfileShow: state.userModule.userProfileShow,
    // showProfileFollowing: state.userModule.showProfileFollowing,
  };
};

const mapDispatchToProps = {
  removeFollower,
  toggleProfileFollowers,
};

export const ProfileFollowers = connect(mapStateToProps, mapDispatchToProps)(_ProfileFollowers);