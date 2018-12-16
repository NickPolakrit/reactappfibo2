import React from "react";

import profileNick from "../img/profileNick.jpg";
import profileWin from "../img/profileWin.jpg";
import profileSun from "../img/profileSun.jpg";
import profileFai from "../img/profileFai.jpg";
import profileJob from "../img/profileJob.jpg";
import profileTula from "../img/profileTula.jpg";
import profilePee from "../img/profilePee.jpg";
import profileMap from "../img/profileMap.jpg";
import profileTA from "../img/profileTA.jpg";

// import styled from "styled-components";

// const Fontres = styled.h1`
//   html {
//     font-size: 3rem;
//   }

//   @include media-breakpoint-up(sm) {
//     html {
//       font-size: 1.2rem;
//     }
//   }

//   @include media-breakpoint-up(md) {
//     html {
//       font-size: 1.4rem;
//     }
//   }

//   @include media-breakpoint-up(lg) {
//     html {
//       font-size: 3rem;
//     }
//   }
// `;

export default function Landing() {
  return (
    // <Wrapper>
    //   <Title>Hello World, this is my first styled component!</Title>
    // </Wrapper>
    <React.Fragment>
      <h1 className="text-primary text-center">Developer Team</h1>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
        <div className="col-auto ">
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
