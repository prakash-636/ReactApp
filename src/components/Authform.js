import React from "react";
import Sigin from "./Sigin";
import SignUp from "./SignUp";

function Authform() {
  return <>{true ? <Sigin /> : <SignUp />}</>;
}

export default Authform;
