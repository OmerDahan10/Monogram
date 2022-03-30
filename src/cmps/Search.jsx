import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../store/user.action.js";
import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../img/svg/search.svg";
import { ReactComponent as MobileIcon } from "../img/svg/mobile-search.svg";

function _Search({ getUsers, users }) {
  const [search, setSearch] = useState("");
  const [textFocus, setTextFocus] = useState(false);

  const handleChange = (ev) => {
    setSearch(ev.target.value);
    let prevSearch = ev.target.value;
    if (prevSearch.length > 0) getUsers(prevSearch);
  };

  const handleBlur = ()=>{
      setTextFocus(false);
      getUsers(null);
      setSearch('');
  }

  return (
    <>
    <div className="search-users">
      <label className="search-input">
        <SearchIcon className={textFocus ? "search-icon-hide" : ""} />
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder={` Search`}
          onFocus={() => setTextFocus(true)}
        //   onBlur={() => setTextFocus(false)}
          onBlur={handleBlur}
        />
      </label>
      {users && (
        <>
          <div className="arrow"></div>
          <div className="search-result">
            {users.map((user) => {
              return (
                <Link
                  to={`/profile/${user.username}`}
                  className="search-user-result clean-link"
                >
                  <img src={user.imgUrl} />
                  <div className="search-username">
                    <span className="search-main">{user.username}</span>
                    <span className="search-second">{user.fullname}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    users: state.userModule.searchUsers,
  };
}

const mapDispatchToProps = {
  getUsers,
};

export const Search = connect(mapStateToProps, mapDispatchToProps)(_Search);
