import React from 'react';
import { GithubLoginButton as Github } from "react-social-login-buttons";
import { ButtonStyles } from '../ButtonStyles';

const GithubProfile = ({user, handleLogout}) => {
    console.log(user);
    return (
        <span>
            <h1>Welcome {user.name}</h1>
            <img alt='Profile' src={user.avatar_url} />
            <Github onClick={handleLogout} style={ButtonStyles}>SIGNOUT</Github>
        </span>
    );
}

export default GithubProfile;