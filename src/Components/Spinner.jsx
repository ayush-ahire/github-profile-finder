import React from "react";
import Spinning from "./assets/loading.gif";

function Spinner() {
  return (
    <div className="w-100 mt-20">
    <img src={Spinning} width={100} alt='Loading'/>
    </div>
  );
}

export default Spinner;
