import React from 'react';

import { LinkedIn } from 'react-linkedin-login-oauth2';
import { LinkedInLoginButton as MyLinkedIn } from "react-social-login-buttons";

import { LINKEDIN_CLIENT_ID, REDIRECT_URI } from '../../ApiDetails';
import { ButtonStyles } from '../ButtonStyles';

const LinkedInLoginButton = ({handleSuccess, handleFailure}) => {

    return (
        <LinkedIn
            clientId={LINKEDIN_CLIENT_ID}
            scope='r_liteprofile'
            onFailure={handleFailure}
            onSuccess={handleSuccess}
            redirectUri={REDIRECT_URI+'/linkedin'}
            renderElement={renderProps => (
                <MyLinkedIn onClick={renderProps.onClick} style={ButtonStyles}>SIGNUP WITH LINKEDIN</MyLinkedIn>
                )}
        />
    );
}

export default LinkedInLoginButton;