import React from "react";
import PopChart from "../clients/PopChart";

export default function Dashboard() {
  return (
    <div>
      <style>{"body { background-color: #EFF4F7; }"}</style>
      {/* <div className=" shadow-lg p-3 mb-5 bg-white rounded card border-info mb-3">
        <h2 className="fas fa-tachometer-alt "> Dashboard</h2>
      </div> */}
      {/* <hr /> */}
      <PopChart />
      <div />
    </div>
  );
}
