import React from "react";

import styled from "styled-components";
import sfsystemimg1 from "../img/sfsystemimg1.png";
import sfresponsive01 from "../img/sfresponsive01.png";
import profileNick from "../img/profileNick.png";
import profileWin from "../img/profileWin.png";
import profileSun from "../img/profileSun.png";
import profileFai from "../img/profileFai.png";
import profileJob from "../img/profileJob.png";
import profileTula from "../img/profileTula.png";
import profilePee from "../img/profilePee.png";
import profileMap from "../img/profileMap.png";
import profileTA from "../img/profileTA.png";
import logofirst from "../img/logofirst.png";
// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: gray;
`;
const TitleIMG = styled.h1`
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  font-size: 3em;
  text-align: center;
  color: #283593;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
// const Wrapper = styled.section`
//   padding: 3em;
//   // background-color: #007bff;
//   background-color: #f0f0f0;
//   // font-size: 1em;
//   // text-align: center;
//   // color: #3498db;
// `;

// Use them like any other React component – except they're styled!

export default function Landing() {
  return (
    // <Wrapper>
    //   <Title>Hello World, this is my first styled component!</Title>
    // </Wrapper>
    <React.Fragment>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
        <div className="col-auto">
          <img
            src={logofirst}
            alt="Firsttitle"
            style={{ width: "50%", margin: "center" }}
          />
          <Title1>This is the smartest system for every factory</Title1>
          <img
            src={sfsystemimg1}
            alt="imgtitle"
            className="img-fluid"
            style={{ width: "1000px", margin: "center-auto", display: "block" }}
          />
          <a
            class="btn btn-outline-primary btn-lg "
            href="/login"
            role="button"
          >
            Login
          </a>
        </div>
      </div>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
        <TitleIMG>
          <div className="col-auto ">
            <div>
              <img
                src={sfresponsive01}
                alt="deviceimg"
                className="img-fluid"
                style={{
                  width: "1000px",
                  margin: "center-auto",
                  display: "block"
                }}
              />
              <div className="centered">Responsive Design</div>
            </div>
          </div>
        </TitleIMG>
      </div>

      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
        <div className="col-auto ">
          <h1 className="display-2 font-weight-normal text-primary">
            About Us
          </h1>
          <div class="card-group">
            <div class="card">
              <img class="card-img-top" src={profileNick} alt="nick" />
              <div class="card-body">
                <h5 class="card-title">M POLAKRIT</h5>
                <p class="card-text text-danger">Full Stack</p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src={profileWin} alt="win" />
              <div class="card-body">
                <h5 class="card-title">S NUTTANAWUT</h5>
                <p class="card-text text-danger">Back-End</p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src={profileSun} alt="sun" />
              <div class="card-body">
                <h5 class="card-title">P THANAPHOOM</h5>
                <p class="card-text text-danger">Device</p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src={profileFai} alt="fai" />
              <div class="card-body">
                <h5 class="card-title">J PUNNAT</h5>
                <p class="card-text text-danger">ProjectManager</p>
              </div>
            </div>
          </div>
          <br />
          <div class="card-group">
            <div class="card">
              <img class="card-img-top" src={profileJob} alt="job" />
              <div class="card-body">
                <h5 class="card-title">P TANADOL</h5>
                <p class="card-text text-danger">Device</p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src={profilePee} alt="pee" />
              <div class="card-body">
                <h5 class="card-title">K PEERAPAN</h5>
                <p class="card-text text-danger">Device</p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src={profileTula} alt="tula" />
              <div class="card-body">
                <h5 class="card-title">W NATDHANAI</h5>
                <p class="card-text text-danger">Document</p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src={profileMap} alt="map" />
              <div class="card-body">
                <h5 class="card-title">S KHEMTID</h5>
                <p class="card-text text-danger">Device</p>
              </div>
            </div>
          </div>
          <br />
          <div className="container">
            <div className="col-md-4 offset-md-4">
              <div class="card">
                <img class="card-img-top" src={profileTA} alt="ta" />
                <div class="card-body">
                  <h5 class="card-title">S WANNACHAT</h5>
                  <p class="card-text text-danger">TA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
