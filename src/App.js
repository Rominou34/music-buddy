import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import UserSignup from './Components/Users/UserSignup';
import RouteWrapper from './Components/RouteWrapper';
import PublicLayout from './layouts/PublicLayout';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <RouteWrapper path="/signup" component={UserSignup} layout={PublicLayout} />
          <Route path="/signup" component={UserSignup} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
