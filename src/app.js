import React from "react";
import ReactDOM from "react-dom";
import {render} from "react-dom";
import {NavBar} from "./components/navbar.js";
import {HashRouter as Router, Route} from "react-router-dom";
import {Home} from "./components/home.js";
import {About} from "./components/about.js";
import {Contact} from "./components/contact.js";
import { Services} from "./components/Services.js";

render(
  <div>
  <NavBar/>
  </div>,
  document.getElementById("root"));

render(
  <div>
    <Router>
     <div>
     <Route exact path="/" component={Home}/>
     <Route path="/about" component={About}/>
     <Route path="/services" component={Services}/>
     <Route path="/contact" component={Contact}/>
     </div>
     </Router>
     </div>,  document.getElementById("bodyy"));
