 import React from 'react';
import './App.css';
import Home from './home.js'
import Register from './mentor.js'
import { BrowserRouter, Route } from 'react-router-dom';
const App = () => (
  <div>
    <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      </div>

    </BrowserRouter>
  </div>

);
export default App;
