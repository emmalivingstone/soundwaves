export const authEndpoint = 'https://accounts.spotify.com/authorize';

export const clientId = process.env.REACT_APP_CLIENT_ID;
export const redirectUri = 'http://localhost:3000';
export const scopes = ['user-top-read', 'user-library-read'];
