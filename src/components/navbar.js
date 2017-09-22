import React from "react";
import ReactDOM from "react-dom";
import {render} from "react-dom";
import { HashRouter as Router, Link } from "react-router-dom";

export class NavBar extends React.Component{
render(){
  return(
    <Router>
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#targetting">
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
          </button>
          <Link to="/" className="navbar-brand">WiredConnections</Link>
        </div>
        <div className="collapse navbar-collapse" id="targetting">
          <ul className="nav navbar-nav">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/about">About</Link></li>
            <li className="nav-item"><Link to="/services">Services</Link></li>
            <li className="nav-item"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    </Router>
  )
}
}
