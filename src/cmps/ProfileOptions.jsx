
import React from "react";
import { connect } from "react-redux";
import { toggleProfileOptions } from "../store/user.action.js";
import { Link } from "react-router-dom";


function _ProfileOptions({ showProfileOptions, toggleProfileOptions }) {

  console.log('showProfileOptions: ',showProfileOptions);
  
  return (
    <>
      {showProfileOptions && (
        <div className="profile-options-container" onClick={toggleProfileOptions}>
          <div onClick={(ev) => ev.stopPropagation()} className="profile-options-list">
            <ul>
              <button><Link className="clean-link change-password" to={`/acconts/password/change`}>Change Password</Link></button>
              <button><Link className='clean-link logout' to={'/login'}>Logout</Link></button>
              <button className="exit-option" onClick={toggleProfileOptions}>Cancel</button>
              {/* <li><button onClick={this.Cancel}>Cancel</button></li> */}
            </ul>
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
