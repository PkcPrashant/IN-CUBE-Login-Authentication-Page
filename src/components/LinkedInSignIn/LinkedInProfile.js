import React from 'react';

import { LinkedInLoginButton as LinkedIn } from "react-social-login-buttons";
import { ButtonStyles } from '../ButtonStyles';

const LinkedInProfile = ({user, onLogoutClick}) => {
    console.log(user);
    return (
        <span>
            <h1>Welcome {user.localizedFirstName+" "+user.localizedLastName}</h1>
            {user && <img alt='Profile' src={user.profilePicture["displayImage~"].elements[2].identifiers[0].identifier} />}
            <LinkedIn onClick={onLogoutClick} style={ButtonStyles}>SIGNOUT</LinkedIn>
        </span>
    );
}

export default LinkedInProfile;