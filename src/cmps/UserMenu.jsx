import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {toggleUserMenu} from '../store/user.action.js'


function _UserMenu({ showUserMenu, toggleUserMenu, user }) {


  return (
    <>
      {showUserMenu && (
        // <div className="user-menu" onClick={toggleUserMenu}>
          <div onClick={(ev) => ev.stopPropagation()} className="user-menu-container">
            {/* <p>squre</p> */}
            <div  className="user-menu-options" onClick={toggleUserMenu}>
              <Link className="clean-link" to={`/profile/${user.username}`}>profile</Link>
              <Link className="clean-link change-password" to={`/acconts/password/change`}>Change Password</Link>
              <Link className="clean-link logout" to={'/login'}>Logout</Link>
              {/* <Link className="clean-link u-m-cancel" to={'/'}>Cancel</Link> */}
              <button className="exit-user-menu clean-btn" >Cancel</button>
              {/* <button><Link className="clean-link change-password" to={`/acconts/password/change`}>Change Password</Link></button>
              <button><Link className='clean-link logout' to={'/login'}>Logout</Link></button> */}
              {/* <li><button onClick={this.Cancel}>Cancel</button></li> */}
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
