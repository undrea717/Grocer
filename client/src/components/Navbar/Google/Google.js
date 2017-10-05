import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
// import gapi from "gapi";
 
const responseGoogle = (response) => {
  console.log(response);
}
 
const GoogleLog = () => 
<GoogleLogin
    clientId={"925069312669-monad75p3ihtrt5kob0ljdsfvr6234h5.apps.googleusercontent.com"}
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
>
    <span> Login with Google</span>
  </GoogleLogin>

  // function onSignIn(googleUser) {
  // var profile = googleUser.getBasicProfile();
  // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  // console.log('Name: ' + profile.getName());
  // console.log('Image URL: ' + profile.getImageUrl());
  // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.




// }

export default GoogleLog;

