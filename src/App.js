import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Car_Select from './Car_Select';
import Submit from './Submit';
import './App.css';

function App() {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/car_select' component={Car_Select} />
      <Route path='/submit' component={Submit} />
    </Router>
  );
}

export default App;
