import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

import Home from './components/Home';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantList from "./components/RestaurantList";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantUpdate from './components/RestaurantUpdate';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faPlus, faSearch, } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></Nav.Link>
              <Nav.Link><Link to="/list"><FontAwesomeIcon icon={faList} />List</Link></Nav.Link>
              <Nav.Link> <Link to="/create"><FontAwesomeIcon icon={faPlus} />Create</Link></Nav.Link>
              <Nav.Link><Link to="/search"><FontAwesomeIcon icon={faSearch} />search</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/list">
          <RestaurantList />
        </Route>
        <Route path="/create">
          <RestaurantCreate />
        </Route>
        <Route path="/details">
          <RestaurantDetail />
        </Route>
        <Route path="/search">
          <RestaurantSearch />
        </Route>
        <Route path="/update/:id"
          render={
            (props) => <RestaurantUpdate {...props} />

          }
        >
          {/* <RestaurantUpdate /> */}
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div >
  );
}

export default App;
