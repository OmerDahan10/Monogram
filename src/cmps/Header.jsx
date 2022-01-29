import React from "react";
import { connect } from "react-redux";
import { Route, useParams, NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from '../img/svg/home.svg';
import { ReactComponent as AddIcon } from '../img/svg/add.svg';
import { UserMenu } from "./UserMenu.jsx";
import { toggleShowAdd } from '../store/post.action.js';
import { toggleUserMenu } from '../store/user.action.js'
import { AddPost } from '../cmps/AddPost.jsx';


function _Header({ showAdd, toggleShowAdd, user, showUserMenu, toggleUserMenu }) {

  const onAddPost = () => {
    toggleShowAdd(showAdd);
  }
  const onUserMenu = () => {
    toggleUserMenu(showUserMenu)
  }

  return (
    <header className="header">
      <div className="header-container">

        <NavLink className='clean-link' to={'/'}><h1 className="logo">Photogram</h1></NavLink>
        <div className="main-nav">
          <NavLink className='clean-link' to={'/'}><HomeIcon /></NavLink>
          <button className="clean-button" onClick={onAddPost}><AddIcon /></button>
          <button className="clean-button" onClick={onUserMenu}>
            <img src={user.imgUrl} />
          </button>
            <UserMenu/>
        </div>
      </div>
      {showUserMenu && <div className="close-menu" onClick={onUserMenu}></div>}
      <AddPost />
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    showAdd: state.postModule.showAdd,
    showUserMenu: state.userModule.showUserMenu,
    user: state.userModule.connectedUser
  };
};

const mapDispatchToProps = {
  toggleShowAdd,
  toggleUserMenu,
};

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Header);






