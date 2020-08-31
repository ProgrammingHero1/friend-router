import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './NoMatch/NoMatch';
import FriendDetail from './components/FriendDetail/FriendDetail';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/friend/:friendId">
          <FriendDetail/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
            <NoMatch />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
