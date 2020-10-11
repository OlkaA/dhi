import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import InfoPage from './pages/InfoPage';
import About from './pages/About';
import Home from './pages/Home';
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/info">
            <InfoPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}