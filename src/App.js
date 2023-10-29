import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomRouter from './Route/Router';
const App = () => {
  return (
    <Router>
      <CustomRouter />
    </Router>
  );
};

export default App;