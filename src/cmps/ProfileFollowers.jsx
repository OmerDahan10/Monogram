import React from "react";
import { connect } from "react-redux";
import { toggleProfileFollowers } from "../store/user.action.js";
import { Link } from "react-router-dom";
import { ReactComponent as XIcon } from '../img/svg/X-icon.svg';



function _ProfileFollowers({ showProfileFollowers, toggleProfileFollowers, followers }) {

  // const {followers} = this.followers
  console.log('followers: ', followers);


  return (
    <>
      {showProfileFollowers && (
        <>
          <div className="profile-followers-background" onClick={toggleProfileFollowers}></div>
          <div className="profile-followers-modal">
            <section className="followers-header">
              <div className="spacer"></div>
              <div className="followers-headline">Followers</div>
              <div className="spacer"><button className="clean-btn exit-followers"><XIcon /></button></div>
            </section>
            <section className="followers-container">
              <div className="followers-list">
                {followers.map((follower) => {return(
                  <div className="each-follower">
                    <div className="center">
                    <img src={follower.imgUrl} alt="" />
                    </div>
                    <div className="follower-names">
                      {console.log(follower)}
                      <div className="follower-username"><span>{follower.username}</span></div>
                      <div className="follower-fullname">{follower.fullname}</div>
                    </div>
                    <button className="clean-btn follower-remove">Remove</button>
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
    // showProfileFollowing: state.userModule.showProfileFollowing,
  };
};

const mapDispatchToProps = {
  toggleProfileFollowers,
  // toggleProfileFollowing,
};

export const ProfileFollowers = connect(mapStateToProps, mapDispatchToProps)(_ProfileFollowers);