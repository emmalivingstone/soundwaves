import { Router } from '@reach/router';
import React from 'react';
import Login from './pages/login/login';
import TopTracks from './pages/top-tracks/top-tracks';

function App() {
  return (
    <Router>
      <Login default path="/login"></Login>
      <TopTracks path="/top-tracks/:timeRange"></TopTracks>
    </Router>
  );
}

export default App;
