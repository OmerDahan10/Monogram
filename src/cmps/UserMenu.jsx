import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {toggleUserMenu} from '../store/user.action.js'
import { ReactComponent as MiniProfileIcon } from '../img/svg/mini-profile-icon.svg';
import { ReactComponent as MiniSavedIcon } from '../img/svg/mini-saved-icon.svg';
import { ReactComponent as MiniOptionIcon } from '../img/svg/mini-option-icon.svg';
import { ReactComponent as MiniCancelIcon } from '../img/svg/mini-X-icon.svg';
// import { ReactComponent as MiniCancelIcon } from '../img/svg/X-icon.svg';


function _UserMenu({ showUserMenu, toggleUserMenu, user}) {

  return (
    <>
      {showUserMenu && (
        // <div className="user-menu" onClick={toggleUserMenu}>
          // <div onClick={(ev) => ev.stopPropagation()} className="user-menu-container">
          <div className="user-menu-container">
            {/* <p>squre</p> */}
            <div  className="user-menu-options" onClick={toggleUserMenu}>
              <Link className="clean-link menu-profile" to={`/profile/${user.username}`}><span><MiniProfileIcon/></span> Profile</Link>
              <Link className="clean-link menu-change-password" to={`/profile/${user.username}/saved`}><span><MiniSavedIcon/></span> Saved</Link>
              <Link className="clean-link menu-settings" to={`/accounts/edit`}><span><MiniOptionIcon/></span> Settings</Link>
              <button className="clean-btn menu-cancel"><span><MiniCancelIcon/></span>Cancel</button>
              <Link className="clean-link menu-logout" to={'/login'}>Log Out</Link>
            </div>
          </div>
        // </div>
        )}
    </>
  )

}

const mapStateToProps = (state) => {
  return {
    user: state.userModule.connectedUser,
    showUserMenu: state.userModule.showUserMenu
  };
};

const mapDispatchToProps = {
  toggleUserMenu,
};

export const UserMenu = connect(mapStateToProps, mapDispatchToProps)(_UserMenu);
