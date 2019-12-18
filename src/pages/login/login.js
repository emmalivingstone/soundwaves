import { Redirect } from '@reach/router';
import React from 'react';
import {
  authEndpoint,
  clientId,
  redirectUri,
  scopes
} from '../../shared/api-config';
import hash from '../../shared/window-hash';

function login() {
  const onTestClick = () => {
    setTimeout(() => {
      window.open('www.google.co.uk');
    }, 1);
    return true;
  };

  return (
    <React.Fragment>
      {hash.access_token ? (
        <Redirect noThrow to="top-tracks/all-time" />
      ) : (
        <div className="login">
          <div className="login__box">
            <h1 className="login__title site-logo">
              sound<span className="site-logo__waves">waves</span>
            </h1>
            <p className="login__description">
              Check out your top artists and tracks for different time ranges.
            </p>
            <a
              className="btn btn--primary"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                '%20'
              )}&response_type=token&show_dialog=true`}
            >
              Login with Spotify
            </a>
            <a
              onClick={onTestClick}
              href="www.google.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Test IOS Link
            </a>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default login;
