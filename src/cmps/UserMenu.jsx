import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import TextareaAutosize from "react-textarea-autosize";
import { Link } from "react-router-dom";
import {toggleUserMenu} from '../store/user.action.js'


function _UserMenu({ showUserMenu, toggleUserMenu }) {

  // cancel =()
  // const 
  console.log('aaaa: ');
  console.log('showUserMenu: ',showUserMenu);
  
  

  return (
    <>
      {showUserMenu && (
        <div className="user-menu" onClick={toggleUserMenu}>
          <div onClick={(ev) => ev.stopPropagation()} className="user-menu-container">
            {/* <p>squre</p> */}
            <div className="user-menu-options">
              <Link className="clean-link change-password" to={`/acconts/password/change`}>Change Password</Link>
              <Link className="clean-link logout" to={'/login'}>Logout</Link>
              <Link className="clean-link u-m-cancel" to={'/'}>Cancel</Link>
              <button >Cancel</button>
              {/* <button><Link className="clean-link change-password" to={`/acconts/password/change`}>Change Password</Link></button>
              <button><Link className='clean-link logout' to={'/login'}>Logout</Link></button> */}
              {/* <li><button onClick={this.Cancel}>Cancel</button></li> */}
            </div>
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
    // showProfileOption: state.userModule.showProfileOption,
    showUserMenu: state.userModule.showUserMenu
  };
};

const mapDispatchToProps = {
  toggleUserMenu,
};

export const UserMenu = connect(mapStateToProps, mapDispatchToProps)(_UserMenu);
