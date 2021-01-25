import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/service" component={Services}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Redirect to="/"/>
    </Switch>
    <Footer />
    </>
  );
}

export default App;
