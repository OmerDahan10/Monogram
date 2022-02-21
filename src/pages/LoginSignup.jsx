
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink, Route } from 'react-router-dom'

import { userService } from '../services/user.service.js';
import { login, signup } from '../store/user.action.js';
import { storageService } from '../services/async-storage.service'
import { HomePage } from '../pages/HomePage.jsx'
import { RootCmp } from '../RootCmp.jsx';


class _LoginSignup extends React.Component {
    state = {
        credentials: userService.getEmptyUser(),
        // credentials: storageService.loadFromStorage('loggedinUser'),
        isSignup: false,
        user: null,
    }


    clearState = () => {
        const clearTemplate = {
            credentials: userService.getEmptyUser(),
            isSignup: false
        }
        this.setState(clearTemplate);
    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState({ credentials: { ...this.state.credentials, [field]: value } });
    }

    onLogin = async (ev) => {
        ev.preventDefault();
        const { credentials } = this.state
        const user = await this.props.login(credentials);
        this.clearState();
        this.props.history.push('/');
    }

    // _checkForExistsUser = (username) => {
    //     const users = storageService.loadFromStorage('users');
    //     const user = users.filter(user => username === user.username);
    //     return user[0];
    // }

    onSignup = (ev) => {
        ev.preventDefault();
        const { credentials } = this.state;
        if (!credentials.username || !credentials.password || !credentials.fullname) return;
        this.props.signup(credentials);
        this.clearState();
        // window.location = '/';
    }

    toggleSignup = () => {
        this.setState({ isSignup: !this.state.isSignup });
    }

    onGuestMode = () => {
        this.setState({credentials: {...this.state.credentials, username: 'Shuki', password: 'shukshuk'}})
    }

    render() {
        const { username, password, fullname } = this.state.credentials;
        const { isSignup, user } = this.state;

        return (
            <>
                {user && <Route component={HomePage} path='/' />}
                <div className='login-signup-page'>
                    <div className="login-signup-container">
                        <h1 className="logo">Photogram</h1>
                        {!isSignup && <form className="login-form" onSubmit={this.onLogin}>
                            <div className='user-input'>
                                <input
                                    type="text"
                                    name="username"
                                    value={username}
                                    placeholder="Username"
                                    onChange={this.handleChange}
                                    required
                                    autoFocus
                                />
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    placeholder="Password"
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <button onClick={this.onGuestMode}>Guest Mode</button>
                            <button onClick={this.onLogin}>Log In</button>
                        </form>}

                        {isSignup && <form className="signup-form" onSubmit={this.onSignup}>
                            <div className='user-input'>
                                <input
                                    type="text"
                                    name="fullname"
                                    value={fullname}
                                    placeholder="Fullname"
                                    onChange={this.handleChange}
                                    required
                                    autoFocus
                                />
                                <input
                                    type="text"
                                    name="username"
                                    value={username}
                                    placeholder="Username"
                                    onChange={this.handleChange}
                                    required
                                />
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    placeholder="Password"
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <button onClick={this.onSignup}>Sign up</button>
                        </form>}
                    </div>
                    <div className='signup-link'>
                        {!isSignup &&
                            <p>
                                Don't have an account?
                                <span><NavLink className="clean-link" onClick={this.toggleSignup} to="/login"> Signup</NavLink></span>
                            </p>}
                        {isSignup &&
                            <p>
                                Have an account?
                                <span><NavLink className="clean-link" onClick={this.toggleSignup} to="/login"> Login</NavLink></span>
                            </p>}
                    </div>
                </div>
            </>
        )
    }
}


const mapDispatchToProps = {
    login,
    signup
}

export const LoginSignup = connect(null, mapDispatchToProps)(_LoginSignup)
