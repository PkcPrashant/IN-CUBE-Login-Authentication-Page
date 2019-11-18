import React, { useState } from 'react';

import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, CORS_URL, REDIRECT_URI } from '../../ApiDetails';
import GithubLoginButton from './GithubLoginButton';
import GithubProfile from './GithubProfile';

const GithubButton = ({isUserSignedIn, changeSignInStatus}) => {

  const [ isSignedIn, setIsSignedIn ] = useState(false);
  const [ user, setUser ] = useState('');

  const handleLoginSuccess = async(code) => {
    console.log('Code ',code);   
    const generate_access_token = await fetch(`${CORS_URL}https://github.com/login/oauth/access_token?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&client_secret=${GITHUB_CLIENT_SECRET}&code=${code}`, {
                                                method: 'POST',
                                              });
    const access_token = (await generate_access_token.text()).split('&')[0].split('=')[1];
    console.log('Access Token ',access_token);

    if(access_token && access_token !== 'bad_verification_code'){
      const generate_user = await fetch(`${CORS_URL}https://api.github.com/user?access_token=${access_token}`);
      const user = JSON.parse(await generate_user.text());
      console.log('USER ',user);
      if(user.id){
        setUser(user);
        setIsSignedIn(true);
        changeSignInStatus(() => 'github');
      }
    }
  } 

  const handleLogin = () => {
    if(window.location.href.match('/?code=(.*)'))
      handleLoginSuccess(window.location.href.match('/?code=(.*)')[1]);
    else
      console.log('CODE COULD NOT BE GENERATED');
  }

  const handleLogout = () => {
    setUser('');
    setIsSignedIn(false);
    changeSignInStatus(() => 'none');
    window.location.href = REDIRECT_URI;
  }

  return (
    <div className="App" align="center">  
      {(isUserSignedIn === 'none' || isUserSignedIn === 'github') && (isSignedIn ? (
          <GithubProfile user={user} handleLogout={handleLogout}/>
      ) : (
          <GithubLoginButton handleLogin={handleLogin} />
      ))}
    </div>
  );
}

export default GithubButton;