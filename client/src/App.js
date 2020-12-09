import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Saved from './components/Saved/Saved';
import Search from './components/Search/Search';
import Nav from './components/Nav/Nav'
import Banner from './components/Banner/Banner'

function App() {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value)
  }


  return (
   <Router>
    <div className="App" style={{width:"100vw"}}>
       <Nav />
       <Banner />
       <Route exact path="/" component={Search} />
       <Route path="/search" handleSearchChange={handleSearchChange} component={Search} />
       <Route exact path="/saved" component={Saved} />
    </div>
    </Router>
  );
}

export default App;
