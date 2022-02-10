import React from "react";
import { connect } from "react-redux";
import { toggleProfileFollowings, removeFollowing } from "../store/user.action.js";
import { ReactComponent as XIcon } from '../img/svg/X-icon.svg';
import { Link } from "react-router-dom";


function _ProfileFollowings({ showProfileFollowings, toggleProfileFollowings, followings }) {

  

  return (
    <>
      {showProfileFollowings && (
        <>
          <div className="profile-followings-background" onClick={toggleProfileFollowings}></div>
          <div className="profile-followings-modal">
            <section className="followings-header">
              <div className="spacer"></div>
              <div className="followings-headline">Following</div>
              <div className="spacer"><button className="clean-btn exit-followings" onClick={toggleProfileFollowings}><XIcon /></button></div>
            </section>
            <section className="followings-container">
              <div className="followings-list">
                {followings.map((following) => {return(
                  <div className="each-following">
                    <div className="center">
                    <img src={following.imgUrl} alt="" />
                    </div>
                    <div className="following-names">
                      <div className="following-username"><Link className="clean-link" to={`/profile/${following.username}`}><span>{following.username}</span></Link></div>
                      <div className="following-fullname">{following.fullname}</div>
                    </div>
                    <button className="clean-btn following-remove" onClick={()=>{removeFollowing(following._id)}}>Following</button>
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
    connectedUser: state.userModule.connectedUser,
    showProfileFollowings: state.userModule.showProfileFollowings,
  };
};

const mapDispatchToProps = {
//   toggleProfileFollowers,
  removeFollowing,
  toggleProfileFollowings,
};

export const ProfileFollowings = connect(mapStateToProps, mapDispatchToProps)(_ProfileFollowings);