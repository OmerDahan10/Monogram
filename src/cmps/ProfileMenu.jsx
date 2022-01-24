import React from "react";
import { NavLink, Route } from "react-router-dom";

export function ProfileMenu(display){

    console.log('display: ',display);
    
    console.log('this.props.display: ',this.props.display);
    
    return(
        <div className="profile-menu" style={`display:${this.props.display}`}>
            <NavLink className='clean-link logout' to={'/login'}>Logout</NavLink>

        </div>
    )
}