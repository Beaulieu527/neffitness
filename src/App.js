import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Coaches from "./components/about/Coaches";
import Contact from "./components/contact/Contact";
import FitClasses from "./components/fitness-class/FitClasses";
import Training from "./components/training/Training";
import Deals from "./components/deals/Deals";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/navbar/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />

      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/coaches" component={Coaches} />
            <Route path="/contact" component={Contact} />
            <Route path="/fitness-classes" component={FitClasses} />
            <Route path="/training" component={Training} />
            <Route path="/deals" component={Deals} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
