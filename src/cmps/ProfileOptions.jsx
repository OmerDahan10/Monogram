
import React from "react";
import { connect } from "react-redux";
import { toggleProfileOptions } from "../store/user.action.js";
import { Link } from "react-router-dom";


function _ProfileOptions({ showProfileOptions, toggleProfileOptions }) {

  return (
    <>
      {showProfileOptions && (
        <div className="profile-options-container" onClick={toggleProfileOptions}>
          <div onClick={toggleProfileOptions} className="profile-options-list">
              {/* <button className="clean-btn profile-change-password"> */}
                <Link className="clean-link profile-change-password" tabIndex={0} to={`/acconts/password/change`}>Change Password</Link>
                {/* </button> */}
              {/* <button className="clean-btn"> */}
                <Link className="clean-link profile-settings" to={`/accounts/edit`}>Settings</Link>
                {/* </button> */}
              {/* <button className="clean-btn"> */}
                <Link className="clean-link profile-to-homepage" to={`/`}>Home Page</Link>
                {/* </button> */}
              {/* <button className="clean-btn"> */}
                <Link className='clean-link profile-logout' to={'/login'}>Log Out</Link>
              {/* </button> */}
              <button className="clean-btn profile-exit">Cancel</button>
              {/* <li><button onClick={this.Cancel}>Cancel</button></li> */}
          </div>
        </div>
      )}
    </>
  )

}

const mapStateToProps = (state) => {
  return {
    // posts: state.postModule.posts,
    // showAdd: state.postModule.showAdd,
    // user: state.userModule.connectedUser,
    showProfileOptions: state.userModule.showProfileOptions,
  };
};

const mapDispatchToProps = {
  toggleProfileOptions,
};

export const ProfileOptions = connect(mapStateToProps, mapDispatchToProps)(_ProfileOptions);
