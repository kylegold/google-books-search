import logo from './logo.svg';
import './App.css';
import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Saved from './components/Saved';
import Search from './components/Search';

function App() {
  return (
   <Router>
    <div className="App">
       <Route exact path="/" component={Search} />
       <Route exact path="/search" component={Search} />
       <Route exact path="/saved" component={Saved} />
    </div>
    </Router>
  );
}

export default App;
