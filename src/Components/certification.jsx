import React from "react";
import List from "./Common/list";
import Spacer from "./Common/spacer";
import ButtonSignIn from "./Common/buttonSignIn";

const Certification = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="w-75 mx-5 wrapper">
        <div className="list-container">
          <h1>Earn free verified certification in:</h1>
          <List />
          <Spacer />
          <ButtonSignIn />
        </div>
      </div>
    </div>
  );
};

export default Certification;
