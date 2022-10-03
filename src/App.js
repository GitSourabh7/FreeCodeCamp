import React, { Component } from "react";
import NavBar from "./Components/navBar";
import LandingTop from "./Components/landingTop";
import AsSeenIn from "./Components/asSeenIn";
import Certification from "./Components/certification";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <LandingTop />
        <AsSeenIn />
        <Certification />
      </React.Fragment>
    );
  }
}

export default App;
