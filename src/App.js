import React from 'react';
import { Router } from '@reach/router';
import Login from './pages/login/login';

function App() {
  return (
    <Router>
      <Login path="/login"></Login>
    </Router>
  );
}

export default App;
