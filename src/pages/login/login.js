import React from 'react';
import { Redirect } from '@reach/router';

import {
  authEndpoint,
  clientId,
  redirectUri,
  scopes
} from '../../shared/api-config';
import hash from '../../shared/window-hash';

function login() {
  return (
    <React.Fragment>
      {hash.access_token ? (
        <Redirect to="/top-tracks-all-time" />
      ) : (
        <div className="login">
          <div className="login__box">
            <h1 className="site-logo">
              sound<span className="site-logo__waves">waves</span>
            </h1>
            <a
              className="btn btn--spotify"
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
