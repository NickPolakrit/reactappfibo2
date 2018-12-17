import React from "react";
import Clients from "../clients/Clients";
import Sidebar from "./Sidebar";
import ScrollUpButton from "react-scroll-up-button";

export default function Device() {
  return (
    <div className="row">
      <ScrollUpButton />
      <div className="col-md-10">
        <Clients />
      </div>
      <div className="col-md-2">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-success fas fa-search" type="button" />
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
