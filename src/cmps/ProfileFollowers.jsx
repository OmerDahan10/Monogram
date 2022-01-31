import React from "react";
import { connect } from "react-redux";
import { toggleProfileFollowers, removeFollower } from "../store/user.action.js";
import { ReactComponent as XIcon } from '../img/svg/X-icon.svg';



function _ProfileFollowers({ showProfileFollowers, toggleProfileFollowers, followers, connectedUser, userProfileShow, isconnected }) {

  // const {followers} = this.followers
  // console.log('followers: ', followers);
  // console.log('connectedUser: ',connectedUser);
  // console.log('userProfileShow: ',userProfileShow);
  

  return (
    <>
      {showProfileFollowers && (
        <>
          <div className="profile-followers-background" onClick={toggleProfileFollowers}></div>
          <div className="profile-followers-modal">
            <section className="followers-header">
              <div className="spacer"></div>
              <div className="followers-headline">Followers</div>
              <div className="spacer"><button className="clean-btn exit-followers" onClick={toggleProfileFollowers}><XIcon /></button></div>
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
                      {console.log(follower)}
                      <div className="follower-username"><span>{follower.username}</span></div>
                      <div className="follower-fullname">{follower.fullname}</div>
                    </div>
                    <button className="clean-btn follower-remove" onClick={()=>{removeFollower(follower._id)}}>Remove</button>
                  </div>
                )})}
              </div>
            </section>
          </div>
        </>
      )}
    </>
  )

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