import React from 'react';
import { FacebookLoginButton as Facebook } from "react-social-login-buttons";
import { ButtonStyles } from '../ButtonStyles';

const FacebookProfile = ({user, handleLogout}) => {
    console.log(user);
    return (
        <span>
            <h1>Welcome {user.name}</h1>
            {user && <img alt='Profile' src={user.picture.data.url} />}
            <Facebook onClick={handleLogout} style={ButtonStyles}>SIGNOUT</Facebook>
        </span>
    );
}

export default FacebookProfile;