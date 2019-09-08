import { Redirect } from '@reach/router';
import React from 'react';
import {
  authEndpoint,
  clientId,
  redirectUri,
  scopes
} from '../../shared/api-config';
import hash from '../../shared/window-hash';
import './login.scss';

function login() {
  return (
    <React.Fragment>
      {hash.access_token ? (
        <Redirect to="/top-tracks-all-time" />
      ) : (
        <div className="login">
          <div className="login__box">
            <h1 className="login__title site-logo">
              sound<span className="site-logo__waves">waves</span>
            </h1>
            <p className="login__description">
              Check out your top artists and tracks for different time periods.
            </p>
            <a
              className="btn btn--primary"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                '%20'
              )}&response_type=token&show_dialog=true`}
            >
              Login with Spotify
            </a>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default login;
