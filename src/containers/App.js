import React, { useState } from 'react';

import GoogleButton from '../components/GoogleSignIn/GoogleButton';
import FacebookButton from '../components/FacebookSignIn/FacebookButton';
import GithubButton from '../components/GithubSignIn/GithubButton';
import LinkedInButton from '../components/LinkedInSignIn/LinkedInButton';

const App = () => {

  const [ isUserSignedIn, setIsUserSignedIn ] = useState('none');

  return (
    <div>
      <GoogleButton isUserSignedIn={isUserSignedIn} changeSignInStatus={setIsUserSignedIn} />
      <FacebookButton isUserSignedIn={isUserSignedIn} changeSignInStatus={setIsUserSignedIn} />
      <GithubButton isUserSignedIn={isUserSignedIn} changeSignInStatus={setIsUserSignedIn} />
      <LinkedInButton isUserSignedIn={isUserSignedIn} changeSignInStatus={setIsUserSignedIn} />
    </div>
  )
}

export default App
