import React, { useState } from 'react';

import FacebookProfile from './FacebookProfile';
import FacebookLoginButton from './FacebookLoginButton';

const FacebookButton = ({isUserSignedIn, changeSignInStatus}) => {

    const [ isSignedIn, setIsSignedIn ] = useState(false);
    const [ user, setUser ] = useState('');

    const handleSuccess = (response) => {
        setIsSignedIn(true);
        changeSignInStatus(() => 'facebook');
        setUser(response);
    }

    const handleFailure = (response) => {
        setIsSignedIn(false);
        changeSignInStatus(() => 'none');
        setUser('');
    }

    const handleLogout = () => {
        setIsSignedIn(false);
        changeSignInStatus(() => 'none');
        setUser('');
    }

    return (
        <div style={{textAlign: 'center'}}>
            {(!window.location.href.match('/?code=(.*)')) && (isUserSignedIn ==='none' || isUserSignedIn === 'facebook') && (isSignedIn ? (
                <FacebookProfile user={user} handleLogout={handleLogout} />
            ) : (
                <FacebookLoginButton handleSuccess={handleSuccess} handleFailure={handleFailure} />
            ))}
        </div>
    );
}

export default FacebookButton;