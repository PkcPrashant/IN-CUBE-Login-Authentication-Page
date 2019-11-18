import React, { useState } from 'react';
 
import { LINKEDIN_CLIENT_ID, LINKEDIN_CLIENT_SECRET, CORS_URL, REDIRECT_URI } from '../../ApiDetails';
import LinkedInProfile from './LinkedInProfile';
import LinkedinLoginButton from './LinkedInLoginButton';

const LinkedInLogin = ({isUserSignedIn, changeSignInState}) => {
  const [ isSignedIn, setIsSignedIn ] = useState(false);
  const [ user, setUser ] = useState('');

  const handleSuccess = async(data) => {
    const code = data.code;
    console.log('Code ',code);
    if(code){
      const get_access_token = await fetch(`${CORS_URL}https://www.linkedin.com/oauth/v2/accessToken?client_id=${LINKEDIN_CLIENT_ID}&client_secret=${LINKEDIN_CLIENT_SECRET}&grant_type=authorization_code&redirect_uri=${REDIRECT_URI}/linkedin&code=${code}`);
      const access_token = (await get_access_token.json()).access_token;
      console.log(access_token)
      if(access_token && access_token!=='Invalid access token'){
        const get_user = await fetch(`${CORS_URL}https://api.linkedin.com/v2/me?projection=(id,localizedLastName,localizedFirstName,profilePicture(displayImage~:playableStreams))&oauth2_access_token=${access_token}`);
        const user = await get_user.json();
        console.log(user);
        setIsSignedIn(true);
        setUser(user);
        changeSignInState('linkedin');
      }
    }
  }

  const handleFailure = (error) => {
    console.log('ERROR WAS CAUSED ', error);
  }

  const handleLogout = () => {
    setIsSignedIn(false);
    setUser('');
    changeSignInState('none')
  }

  return (
    <div style={{textAlign: 'center'}}>
            {(isUserSignedIn ==='none' || isUserSignedIn === 'linkedin') && (isSignedIn ? (
                <LinkedInProfile user={user} onLogoutClick={handleLogout}/>
            ) : (
                <LinkedinLoginButton handleSuccess={handleSuccess} handleFailure={handleFailure} />
            ))}
        </div>
  );
}

export default LinkedInLogin;