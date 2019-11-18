import React from 'react';

import GoogleLogin from 'react-google-login';
import { GoogleLoginButton as Google } from "react-social-login-buttons";

import { GOOGLE_CLIENT_ID } from '../../ApiDetails';
import { ButtonStyles } from '../ButtonStyles';

const GoogleLoginButton = ({handleSuccess, handleFailure}) => {
    return (
        <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            onSuccess={handleSuccess}
            onFailure={handleFailure}
            render={renderProps => (
                <Google onClick={renderProps.onClick} style={ButtonStyles}>SIGNUP WITH GOOGLE</Google>
                )}
        />
    );
}

export default GoogleLoginButton;