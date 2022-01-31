import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from '../img/svg/home.svg';
import { ReactComponent as AddIcon } from '../img/svg/add.svg';
import { ReactComponent as AddActiveIcon } from '../img/svg/add-active.svg';
import { UserMenu } from "./UserMenu.jsx";
import { toggleShowAdd } from '../store/post.action.js';
import { toggleUserMenu } from '../store/user.action.js'
import { AddPost } from '../cmps/AddPost.jsx';


function _Header({ showAdd, toggleShowAdd, user, showUserMenu, toggleUserMenu,showNewPostBtn }) {

  const onAddPost = () => {
    toggleShowAdd(showAdd);
  }
  const onUserMenu = () => {
    toggleUserMenu(showUserMenu)
  }

  return (
    <header className="header">
      <div className="header-container">
        <NavLink className='clean-link' to={'/'}><h1 className="logo">Monogram</h1></NavLink>
        <div className="main-nav">
          <NavLink exact className='home clean-link' activeClassName={showAdd ?'home clean-link' : 'home clean-link active' } to={'/'}><HomeIcon /></NavLink>
          {/* <NavLink className='clean-link' to={'/create'} onClick={onAddPost}><AddIcon/></NavLink> */}
          <button className='add clean-button' onClick={onAddPost}>{showAdd ? <AddActiveIcon/> :<AddIcon />}</button>
          {/* <NavLink className='clean-link logout' to={'/login'}>Logout</NavLink> */}
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
    user: state.userModule.connectedUser,
    showNewPostBtn:state.postModule.showNewPostBtn
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






