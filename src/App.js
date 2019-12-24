import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home/Home'
import About from './components/about/About'
import Team from './components/about/Team'
import Contact from './components/contact/Contact'
import FitClasses from './components/fitness-class/FitClasses'
import Training from './components/training/Training'
import Deals from './components/deals/Deals'
import Navbar from  './components/navbar/Navbar'
import Footer from  './components/navbar/Footer'
function App() {
  return (
    <div className="App">
      <Router>
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/team" component={Team} />
                <Route path="/contact" component={Contact} />
                <Route path="/fitness-classes" component={FitClasses} />
                <Route path="/training" component={Training} />
                <Route path="/deals" component={Deals} />
              </Switch>
            </div>
          </Router>
    </div>
  );
}

export default App;
