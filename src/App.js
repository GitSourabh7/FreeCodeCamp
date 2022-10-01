import React, { Component } from "react";
import NavBar from "./Components/navbar";
import LandingTop from "./Components/landing-top";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <LandingTop />;
      </React.Fragment>
    );
  }
}

export default App;
