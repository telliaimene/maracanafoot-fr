import React, { useEffect, useState } from "react";
import moment from "moment";
//import "../styles/index.module.css";
//import "../public/styles/index.css";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Header from "../../components/Foot/header";
import TopBar from "../../components/Foot/topBar";
import {
  addNewUser,
  removeUser,
  UserID,
  UserType,
} from "../../store/login/auth";
//import Script from "next/script";
function Match() {
  const userId = useAppSelector(UserID);

  return (
    <>
      <HeaderContainer user={userId} />

      <section className="image-header">
        <div className="foot-container">
          <div className="row">
            <div className="col-md-6">
              <div className="info">
                <div className="wrap">
                  <ul className="breadcrumbs">
                    <li>
                      <a href="index.html">Main</a>/
                    </li>
                    <li>Category</li>
                  </ul>
                  <h1>Category</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="club-wrap club-champ">
        <div className="foot-container">
          <div className="row" >
            <div className="col-md-9">
              <h4 className="text-neutral-900 dark:text-neutral-100">La liste des clubs</h4>
              <div className="champ-date">
              <div className="top-clubs">
                <ul className="list">
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle text-neutral-800 dark:text-neutral-200"
                      data-toggle="dropdown"
                      style={{textDecoration: "none"}}
                    >
                     <i className="fa fa-calendar text-neutral-800 dark:text-neutral-200"  aria-hidden="true"></i>
                     2016 - 2017
                    </a>
                    <ul className="dropdown-menu dark:bg-neutral-800">
                      <li>
                        <a href="#" className="bg-neutral-800 dark:text-neutral-200">
                        2020 - 2021
                        </a>
                      </li>
                      <li>
                        <a href="#" className="bg-neutral-800 dark:text-neutral-200">
                        2019 - 2020
                        </a>
                      </li>
                      <li>
                        <a href="#" className="bg-neutral-800 dark:text-neutral-200">
                        2016 - 2017
                        </a>
                      </li>
                  
                    </ul>
                  </li>
                </ul>
              </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
 
      <div className="tab-item part-wrap tab-pane active" id="participants">
        <div className="part-list">
          <div className="foot-container">
            <div className="row">
              <div className="col-md-3">
                <a href="club-stats.html" className="item bg-neutral-0 dark:bg-neutral-800 dark:hover:text-neutral-100 hover:text-neutral-900  " style={{textDecoration: "none"}}>
                  <span className="logo">
                    <img
                      src="images/amfootball/team-logo1.png"
                      width="80"
                      height="80"
                      alt="team-logo"
                    />
                  </span>
                  <span className="name ">Team 1</span>
                </a>
              </div>
              <div className="col-md-3">
                <a href="club-stats.html" className="item bg-neutral-0 dark:bg-neutral-800 dark:hover:text-neutral-100 hover:text-neutral-900 " style={{textDecoration: "none"}}>
                  <span className="logo">
                    <img
                      src="images/amfootball/team-logo2.png"
                      width="80"
                      height="80"
                      alt="team-logo"
                    />
                  </span>
                  <span className="name text-neutral-900 dark:text-neutral-100">Team 2</span>
                </a>
              </div>
              <div className="col-md-3">
                <a href="club-stats.html" className="item bg-neutral-0 dark:bg-neutral-800 dark:hover:text-neutral-100 hover:text-neutral-900 " style={{textDecoration: "none"}}>
                  <span className="logo">
                    <img
                      src="images/amfootball/team-logo3.png"
                      width="80"
                      height="80"
                      alt="team-logo"
                    />
                  </span>
                  <span className="name text-neutral-900 dark:text-neutral-100">Team 3</span>
                </a>
              </div>
              <div className="col-md-3">
                <a href="club-stats.html" className="item bg-neutral-0 dark:bg-neutral-800 dark:hover:text-neutral-100 hover:text-neutral-900 " style={{textDecoration: "none"}}>
                  <span className="logo">
                    <img
                      src="images/amfootball/team-logo4.png"
                      width="80"
                      height="80"
                      alt="team-logo"
                    />
                  </span>
                  <span className="name text-neutral-900 dark:text-neutral-100">Team 4</span>
                </a>
              </div>
              <div className="col-md-3">
                <a href="club-stats.html" className="item bg-neutral-0 dark:bg-neutral-800 dark:hover:text-neutral-100 hover:text-neutral-900 " style={{textDecoration: "none"}}>
                  <span className="logo">
                    <img
                      src="images/amfootball/team-logo5.png"
                      width="80"
                      height="80"
                      alt="team-logo"
                    />
                  </span>
                  <span className="name text-neutral-900 dark:text-neutral-100">Team 5</span>
                </a>
              </div>
              <div className="col-md-3">
                <a href="club-stats.html" className="item bg-neutral-0 dark:bg-neutral-800 dark:hover:text-neutral-100 hover:text-neutral-900 " style={{textDecoration: "none"}}>
                  <span className="logo">
                    <img
                      src="images/amfootball/team-logo1.png"
                      width="80"
                      height="80"
                      alt="team-logo"
                    />
                  </span>
                  <span className="name text-neutral-900 dark:text-neutral-100">Team 6</span>
                </a>
              </div>
              <div className="col-md-3">
                <a href="club-stats.html" className="item bg-neutral-0 dark:bg-neutral-800 dark:hover:text-neutral-100 hover:text-neutral-900 " style={{textDecoration: "none"}}>
                  <span className="logo">
                    <img
                      src="images/amfootball/team-logo2.png"
                      width="80"
                      height="80"
                      alt="team-logo"
                    />
                  </span>
                  <span className="name text-neutral-900 dark:text-neutral-100">Team 7</span>
                </a>
              </div>
              <div className="col-md-3">
                <a href="club-stats.html" className="item bg-neutral-0 dark:bg-neutral-800 dark:hover:text-neutral-100 hover:text-neutral-900 " style={{textDecoration: "none"}}>
                  <span className="logo">
                    <img
                      src="images/amfootball/team-logo3.png"
                      width="80"
                      height="80"
                      alt="team-logo"
                    />
                  </span>
                  <span className="name text-neutral-900 dark:text-neutral-100">Team 8</span>
                </a>
              </div>
              <div className="col-md-3">
                <a href="club-stats.html" className="item bg-neutral-0 dark:bg-neutral-800 dark:hover:text-neutral-100 hover:text-neutral-900 " style={{textDecoration: "none"}}>
                  <span className="logo">
                    <img
                      src="images/amfootball/team-logo4.png"
                      width="80"
                      height="80"
                      alt="team-logo"
                    />
                  </span>
                  <span className="name text-neutral-900 dark:text-neutral-100">Team 9</span>
                </a>
              </div>
              <div className="col-md-3">
                <a href="club-stats.html" className="item bg-neutral-0 dark:bg-neutral-800 dark:hover:text-neutral-100 hover:text-neutral-900 " style={{textDecoration: "none"}}>
                  <span className="logo">
                    <img
                      src="images/amfootball/team-logo5.png"
                      width="80"
                      height="80"
                      alt="team-logo"
                    />
                  </span>
                  <span className="name text-neutral-900 dark:text-neutral-100">Team 10</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-sponsor-slider-background">
        <div
          id="main-sponsor-slider"
          className="carousel slide main-sponsor-slider"
          data-ride="carousel"
        >
          <div className="carousel-inner" role="listbox">
            <div className="item   active">
              <div className="foot-container">
                <div className="row">
                  <div className="col-4 text-center">
                    <img
                      className="sponsor-icons"
                      src="images/common/sponsor-img.png"
                      alt="sponsor-image"
                    />
                  </div>
                  <div className="col-4 text-center">
                    <img
                      className="sponsor-icons"
                      src="images/common/sponsor-img1.png"
                      alt="sponsor-image"
                    />
                  </div>
                  <div className="col-4 text-center">
                    <img
                      className="sponsor-icons dota-csgo-image"
                      src="images/common/sponsor-img2.png"
                      alt="sponsor-image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="item  ">
              <div className="foot-container">
                <div className="row">
                  <div className="col-4 text-center">
                    <img
                      className="sponsor-icons"
                      src="images/common/sponsor-img.png"
                      alt="sponsor-image"
                    />
                  </div>
                  <div className="col-4 text-center">
                    <img
                      className="sponsor-icons"
                      src="images/common/sponsor-img1.png"
                      alt="sponsor-image"
                    />
                  </div>
                  <div className="col-4 text-center">
                    <img
                      className="sponsor-icons dota-csgo-image"
                      src="images/common/sponsor-img2.png"
                      alt="sponsor-image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <a
              className="nav-arrow left-arrow"
              href="#main-sponsor-slider"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-angle-left" aria-hidden="true"></i>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="nav-arrow right-arrow"
              href="#main-sponsor-slider"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-angle-right" aria-hidden="true"></i>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Match;
