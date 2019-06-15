import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/login.js';
import LandingPage from './components/landingPage.js';
function App() {
  return (
    <div className="App">
    	<Router> 
	  <Route exact path = '/' component = {Login} />
	  <Route path = '/index' component = {LandingPage}/>
	</Router>
    </div>
  );
}

export default App;
