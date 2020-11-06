//react core modules
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import { useState } from 'react';

//import components
import Home from './components/pages/Home.jsx';
import Nav from './components/molecules/Nav.jsx';
import Login from './components/pages/Login.jsx';

function App() {
  return (
    <>
      <Router>
        <div>Nav Bar title</div>
        <Route></Route>
        <Switch>
          <Home to='/' exact component= {Home}/>
          <Login to='/login' component= {}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
