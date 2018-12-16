import React from "react";

import profileNick from "../img/profileNick.png";
import profileWin from "../img/profileWin.png";
import profileSun from "../img/profileSun.png";
import profileFai from "../img/profileFai.png";
import profileJob from "../img/profileJob.png";
import profileTula from "../img/profileTula.png";
import profilePee from "../img/profilePee.png";
import profileMap from "../img/profileMap.png";
import profileTA from "../img/profileTA.png";

export default function Landing() {
  return (
    // <Wrapper>
    //   <Title>Hello World, this is my first styled component!</Title>
    // </Wrapper>
    <React.Fragment>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
        <div className="col-auto ">
          <h1 className="display-2 font-weight-normal text-primary">
            Developer Team
          </h1>
          <div className="card-group">
            <div className="card">
              <img className="card-img-top" src={profileNick} alt="nick " />
              <div className="card-body">
                <h5 className="card-title">M POLAKRIT</h5>
                <p className="card-text text-danger">Full Stack</p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={profileWin} alt="win" />
              <div className="card-body">
                <h5 className="card-title">S NUTTANAWUT</h5>
                <p className="card-text text-danger">Back-End</p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={profileSun} alt="sun" />
              <div className="card-body">
                <h5 className="card-title">P THANAPHOOM</h5>
                <p className="card-text text-danger">Device</p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={profileFai} alt="fai" />
              <div className="card-body">
                <h5 className="card-title">J PUNNAT</h5>
                <p className="card-text text-danger">ProjectManager</p>
              </div>
            </div>
          </div>
          <br />
          <div className="card-group">
            <div className="card">
              <img className="card-img-top" src={profileJob} alt="job" />
              <div className="card-body">
                <h5 className="card-title">P TANADOL</h5>
                <p className="card-text text-danger">Device</p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={profilePee} alt="pee" />
              <div className="card-body">
                <h5 className="card-title">K PEERAPAN</h5>
                <p className="card-text text-danger">Device</p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={profileTula} alt="tula" />
              <div className="card-body">
                <h5 className="card-title">W NATDHANAI</h5>
                <p className="card-text text-danger">Document</p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={profileMap} alt="map" />
              <div className="card-body">
                <h5 className="card-title">S KHEMTID</h5>
                <p className="card-text text-danger">Device</p>
              </div>
            </div>
          </div>
          <br />
          <div className="container">
            <div className="col-md-4 offset-md-4">
              <div className="card">
                <img className="card-img-top" src={profileTA} alt="ta" />
                <div className="card-body">
                  <h5 className="card-title">S WANNACHAT</h5>
                  <p className="card-text text-danger">TA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
