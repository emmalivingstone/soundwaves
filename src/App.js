import { Router } from '@reach/router';
import React from 'react';
import Login from './pages/login/login';
import TopArtists from './pages/top-artists/top-artists';
import TopTracks from './pages/top-tracks/top-tracks';

function App() {
  return (
    <Router>
      <Login default path="/login"></Login>
      <TopTracks path="/top-tracks/:timeRange"></TopTracks>
      <TopArtists path="/top-artists/:timeRange"></TopArtists>
    </Router>
  );
}

export default App;
