import React, { FC, ReactNode, useEffect, useState } from "react";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import { UserID } from "../../store/login/auth";
import { Helmet } from "react-helmet";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
//import Script from "next/script";
import moment from "moment";
import Header from "../../components/Foot/header";

export interface PageSingleCalendarProps {
  classNameNameName?: string;
}

const PageSingleCalendar: FC<PageSingleCalendarProps> = ({
  classNameNameName = "",
}) => {
  const userId = useAppSelector(UserID);
  const date = moment();
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
                      <a style={{ textDecoration: "none" }} href="index.html">
                        Main
                      </a>
                      /
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
          <div className="row">
            <div className="col-md-9 text-neutral-900 dark:text-neutral-200">
              <h4 className="text-neutral-900 dark:text-neutral-100">
                CALENDRIER{" "}
              </h4>
            </div>
            <div className="col-md-3 champ-date">
              <div className="top-clubs">
                <ul className="list">
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle text-neutral-800 dark:text-neutral-200"
                      data-toggle="dropdown"
                      style={{ textDecoration: "none" }}
                    >
                      <i
                        className="fa fa-calendar text-neutral-800 dark:text-neutral-200"
                        aria-hidden="true"
                      ></i>
                      2016 - 2017
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">2020 - 2021</a>
                      </li>
                      <li>
                        <a href="#">2019 - 2020</a>
                      </li>
                      <li>
                        <a href="#">2016 - 2017</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="championship-wrap">
        <div className="champ-tab-wrap tab-content">
          <div className="tab-item match-wrap tab-pane active" id="matches">
            <div className="foot-container">
              <div className="row">
                <div className="col-md-4 ">
                  <div
                    className="dark:bg-neutral-800 bg-neutral-200"
                    style={{ borderRadius: "10px" }}
                  >
                    <input
                      style={{ background: "unset" }}
                      className="dark:text-neutral-100 text-neutral-900"
                      type="date"
                      name="doj"
                      defaultValue={moment().toString()}
                      //onChange={(e) => this.props.onChange(e)}
                    />
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-sm-12">
                  <div className="main-lates-matches">
                    <a
                      style={{ textDecoration: "none" }}
                      href="matches.html"
                      className="item dark:hover:text-red-800 hover:text-red-800 dark:focus:text-red-800 focus:text-red-800 text-neutral-900 dark:text-neutral-100"
                    >
                      <span className="championship">
                        National cup - quarterfinal
                      </span>
                      <span className="teams-wrap">
                        <span className="team text-neutral-900 dark:text-neutral-100">
                          <span>
                            <img
                              src="images/amfootball/team-logo1.png"
                              alt="team-logo"
                            />
                          </span>
                          <span>Valencia Valencia</span>
                        </span>
                        <span className="score">
                          <span>3:2</span>
                        </span>
                        <span className="team1">
                          <span>Internacional Internacional</span>
                          <span>
                            <img
                              src="images/amfootball/team-logo2.png"
                              alt="team-logo"
                            />
                          </span>
                        </span>
                      </span>
                      <span className="game-result">(5-4) penalties</span>
                    </a>
                    <a
                      style={{ textDecoration: "none" }}
                      href="matches.html"
                      className="item dark:hover:text-red-800 hover:text-red-800 dark:focus:text-red-800 focus:text-red-800 text-neutral-900 dark:text-neutral-100"
                    >
                      <span className="championship">
                        NATIONAL CUP - SEMIFINAL
                      </span>
                      <span className="teams-wrap">
                        <span className="team text-neutral-900 dark:text-neutral-100">
                          <span>
                            <img
                              src="images/amfootball/team-logo1.png"
                              alt="team-logo"
                            />
                          </span>
                          <span>Valencia Valencia</span>
                        </span>
                        <span className="score">
                          <span>vs</span>
                        </span>
                        <span className="team1">
                          <span>Internacional Internacional</span>
                          <span>
                            <img
                              src="images/amfootball/team-logo2.png"
                              alt="team-logo"
                            />
                          </span>
                        </span>
                      </span>
                      <span className="game-result">25 SEP 2016 / 7:30 PM</span>
                    </a>
                    <a
                      style={{ textDecoration: "none" }}
                      href="matches.html"
                      className="item dark:hover:text-red-800 hover:text-red-800 dark:focus:text-red-800 focus:text-red-800 text-neutral-900 dark:text-neutral-100"
                    >
                      <span className="championship ">
                        NATIONAL CUP - SEMIFINAL
                      </span>
                      <span className="teams-wrap">
                        <span className="team text-neutral-900 dark:text-neutral-100">
                          <span>
                            <img
                              src="images/amfootball/team-logo1.png"
                              alt="team-logo"
                            />
                          </span>
                          <span>Valencia Valencia</span>
                        </span>
                        <span className="score">
                          <span>vs</span>
                        </span>
                        <span className="team1">
                          <span>Internacional Internacional</span>
                          <span>
                            <img
                              src="images/amfootball/team-logo2.png"
                              alt="team-logo"
                            />
                          </span>
                        </span>
                      </span>
                      <span className="game-result">25 SEP 2016 / 7:30 PM</span>
                    </a>
                    <a
                      style={{ textDecoration: "none" }}
                      href="matches.html"
                      className="item dark:hover:text-red-800 hover:text-red-800 dark:focus:text-red-800 focus:text-red-800 text-neutral-900 dark:text-neutral-100 "
                    >
                      <span className="championship">
                        NATIONAL CUP - SEMIFINAL
                      </span>
                      <span className="teams-wrap">
                        <span className="team text-neutral-900 dark:text-neutral-100">
                          <span>
                            <img
                              src="images/amfootball/team-logo1.png"
                              alt="team-logo"
                            />
                          </span>
                          <span>Valencia Valencia</span>
                        </span>
                        <span className="score">
                          <span>vs</span>
                        </span>
                        <span className="team1">
                          <span>Internacional Internacional</span>
                          <span>
                            <img
                              src="images/amfootball/team-logo2.png"
                              alt="team-logo"
                            />
                          </span>
                        </span>
                      </span>
                      <span className="game-result">25 SEP 2016 / 7:30 PM</span>
                    </a>

                    <a
                      style={{ textDecoration: "none" }}
                      href="matches.html"
                      className="item dark:hover:text-red-800 hover:text-red-800 dark:focus:text-red-800 focus:text-red-800 text-neutral-900 dark:text-neutral-100"
                    >
                      <span className="championship">
                        National cup - quarterfinal
                      </span>
                      <span className="teams-wrap">
                        <span className="team text-neutral-900 dark:text-neutral-100">
                          <span>
                            <img
                              src="images/amfootball/team-logo1.png"
                              alt="team-logo"
                            />
                          </span>
                          <span>Valencia Valencia</span>
                        </span>
                        <span className="score">
                          <span>3:2</span>
                        </span>
                        <span className="team1">
                          <span>Internacional Internacional</span>
                          <span>
                            <img
                              src="images/amfootball/team-logo2.png"
                              alt="team-logo"
                            />
                          </span>
                        </span>
                      </span>
                      <span className="game-result">(5-4) penalties</span>
                    </a>
                  </div>
                </div>
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
            <div className="item active">
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
            <div className="item">
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
};
export default PageSingleCalendar;
