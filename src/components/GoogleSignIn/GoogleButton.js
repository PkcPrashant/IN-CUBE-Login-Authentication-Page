import React, { useState } from 'react';

import GoogleLoginButton from './GoogleLoginButton';
import GoogleProfile from './GoogleProfile';

const GoogleButton = ({isUserSignedIn, changeSignInStatus}) => {

    const [ isSignedIn, setIsSignedIn ] = useState(false);
    const [ user, setUser ] = useState('');

    const handleSuccess = (response) => {
        console.log('Success')
        setIsSignedIn(true);
        changeSignInStatus(() => 'google');
        setUser(response.profileObj);
    }

    const handleFailure = (response) => {
        console.log('Failure')
        setIsSignedIn(false);
        changeSignInStatus(() => 'none');
        setUser('');
    }

    const handleLogout = () => {
        console.log('Log out')
        setIsSignedIn(false);
        changeSignInStatus(() => 'none');
        setUser('');
    }
    return (
        <div style={{textAlign: 'center'}}>
            {(isUserSignedIn==='none' || isUserSignedIn === 'google') && (isSignedIn ? (
                <GoogleProfile user={user} handleLogout={handleLogout} />
            ) : (
                <GoogleLoginButton handleSuccess={handleSuccess} handleFailure={handleFailure} />
            ))}
        </div>
    );
}

export default GoogleButton;