import React from 'react';

import { GoogleLogout } from 'react-google-login';
import { GoogleLoginButton as Google } from "react-social-login-buttons";
import { ButtonStyles } from '../ButtonStyles';

import { GOOGLE_CLIENT_ID } from '../../ApiDetails';

const GoogleProfile = ({user, handleLogout}) => {
    console.log(user);
    return (
        <span>
            <h1>Welcome {user.name}</h1>
            <img alt='Profile' src={user.imageUrl} />
            <Google onClick={handleLogout} style={ButtonStyles}>SIGNOUT</Google>
        </span>
    );
}

export default GoogleProfile;