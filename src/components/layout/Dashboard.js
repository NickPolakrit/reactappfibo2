import React from "react";
// import PopChart from "../clients/PopChart";
import PopChart2 from "../clients/PopChart2";
import PopChart4 from "../clients/PopChart4";
import PopChart5 from "../clients/PopChart5";
// import PopChart6 from "../clients/PopChart6";
// import PopChart3 from "../clients/PopChart3";
// import DashChart from "../clients/DashChart";
import DashChart2 from "../clients/DashChart2";

export default function Dashboard() {
  return (
    <div>
      {/* <style>{"body { background-color: #EFF4F7; }  "}</style> */}
      {/* <div className=" shadow-lg p-3 mb-5 bg-white rounded card border-info mb-3">
        <h2 className="fas fa-tachometer-alt "> Dashboard</h2>
      </div> */}
      {/* <hr /> */}
      {/* <div className="col-sm " > */}
      {/* <div>
        <PopChart3 />
      </div> */}
      {/* </div> */}
      {/* <br /> */}
      {/* <PopChart /> */}

      <div className="row">
        <div className="col">
          <PopChart2 />
        </div>
        <div className="col">
          <PopChart4 />
        </div>
        <div className="col">
          <PopChart5 />
        </div>
      </div>
      {/* <DashChart /> */}
      <DashChart2 />
    </div>
  );
}
