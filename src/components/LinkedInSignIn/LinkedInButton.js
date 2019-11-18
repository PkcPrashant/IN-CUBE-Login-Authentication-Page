import React from 'react';

import { LinkedInPopUp } from 'react-linkedin-login-oauth2';

import LinkedInLogin from './LinkedInLogin';

const LinkedInButton = ({isUserSignedIn, changeSignInStatus}) => {

  const setIsUserSignedInState = (resp) => {
    changeSignInStatus(() => resp);
  }

  if(window.location.href.match('/linkedin')){
    return <LinkedInPopUp />
  }else{
    return <LinkedInLogin isUserSignedIn={isUserSignedIn} changeSignInState={setIsUserSignedInState} />
  }

}

export default LinkedInButton;