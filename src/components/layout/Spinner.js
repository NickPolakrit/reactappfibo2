import React from "react";
import spinner from "./spinner.gif";

export default () => {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "170px", margin: "auto", display: "block" }}
      />
    </div>
  );
};
