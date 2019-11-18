import React from 'react';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { FacebookLoginButton as Facebook } from "react-social-login-buttons";

import { FACEBOOK_CLIENT_ID } from '../../ApiDetails';
import { ButtonStyles } from '../ButtonStyles';

const FacebookLoginButton = ({handleSuccess, handleFailure}) => {
    return (
        <FacebookLogin
            appId={FACEBOOK_CLIENT_ID}
            fields="name,email,picture"
            callback={handleSuccess} 
            onFailure={handleFailure}
            render={renderProps => (
                <Facebook onClick={renderProps.onClick} style={ButtonStyles}>SIGNUP WITH FACEBOOK</Facebook>
                )}
        />
    );
}

export default FacebookLoginButton;