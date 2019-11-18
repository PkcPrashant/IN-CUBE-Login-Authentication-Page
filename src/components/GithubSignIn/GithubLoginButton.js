import React from 'react';

import { GithubLoginButton as Github } from "react-social-login-buttons";

import { GITHUB_CLIENT_ID, REDIRECT_URI } from '../../ApiDetails';
import { ButtonStyles } from '../ButtonStyles';

const GithubLoginButton = ({handleLogin}) => {

    return (
        <a href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
            onClick={handleLogin()}
            style={{textDecoration: 'none'}}
        >
        <Github style={ButtonStyles}>SIGNUP WITH GITHUB</Github>
        </a>
    );
}

export default GithubLoginButton;