import React, { FC, ReactNode, useEffect, useState } from "react";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import { UserID } from "../../store/login/auth";
import { Helmet } from 'react-helmet'
import { useAppDispatch, useAppSelector } from "../../store/hooks";
//import Script from "next/script"

import Header from  "../../components/Foot/header";

export interface PageSingleClubProps {
    classNameNameName?: string;
}


const PageSingleClub: FC<PageSingleClubProps> = ({
    classNameNameName = "",
}) => {
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
                                        <li><a style={{textDecoration: "none"}} href="index.html">Main</a>/</li>
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
                        <div className="col-md-9">
                            <h4>FC BARCELONE </h4>
                            <div className="champ-date">
                                {/* <i className="fa fa-calendar" aria-hidden="true"></i>20 August 2016 - 16 may 2017 */}
                                </div>
                        </div>
                        {/* <div className="col-md-3">
                            <a style={{textDecoration: "none"}} href="trophies.html" className="btn small club-top-btn">trophies</a>
                        </div> */}
                    </div>
                </div>

                <div className="championship-header-wrapper" style={{lineHeight: "26px"}}>
                    <div className="foot-container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="club-logo" >
                                    <img src="images/amfootball/champ-logo.png" className="img-responsive" alt="champ image" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="club-info">
                                    <div className="item "><span>Founded:</span> 1955</div>
                                    <div className="item "><span>Region:</span> Europe</div>
                                    <div className="item "><span>Current champions:</span> Reasl Madrdid</div>
                                    <div className="item "><span>Most successful club(s):</span> Reasl Madrdid</div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="club-info">
                                    <div className="item ">About tornament</div>
                                    <p  style={{ margin: "0 0 10px"}}>Curabitur id tellus mi. In laoreet lacinia luctus. Quisque ante lacus, fermentum et ante ultrices, accumsan blandit magna. Sed tincidunt placerat viverra. Integer lacinia nisi sed pharetra tempus. Nullam eu finibus odio. Etiam tristique dui posuere eros varius laoreet. Vivamus euismod neque purus, interdum eleifend nulla vulputate vel.  Donec imperdiet magna sem, ut laoreet ligula dapibus sit amet. Ut interdum diam at condimentum finibus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


                <div className="champ-navigation dark:bg-neutral-900">
                    <div className="foot-container">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="champ-nav-list">
                                    <li className="active"><a className=" dark:text-neutral-200 " style={{textDecoration: "none"}} href="#news">actualités(4)</a></li>
                                    <li><a className=" dark:text-neutral-200 " style={{textDecoration: "none"}} href="#participants">effectifs</a></li>
                                    <li><a  className=" dark:text-neutral-200 " style={{textDecoration: "none"}} href="#matches">calendier / résultats</a></li>
                                    <li><a className=" dark:text-neutral-200 " style={{textDecoration: "none"}} href="#tournamentgrid">stats</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="champ-tab-wrap tab-content">
                    <div className="tab-item news-tab tab-pane active" id="news">
                        <div className="news-list">
                            <div className="foot-container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="item img-top">
                                            <div className="img-wrap">
                                                <div className="bage highlight">highlight</div>
                                                <a style={{textDecoration: "none"}} href="news-single.html"><img src="images/amfootball/news-list-img.jpg" alt="news-list-img" /></a>
                                            </div>
                                            <div className="info ">
                                                <a style={{textDecoration: "none"}} href="news-single.html" className="name dark:text-neutral-300 text-neutral-600">Bauza: Bono and Tolo will start against Intercitulo</a>
                                                <div className="wrap">
                                                    <a className="text-neutral-600 dark:text-neutral-300 " style={{textDecoration: "none"}} href="news-single.html">25 Sep 2017</a> by <a className="dark:text-neutral-300 text-neutral-600" style={{textDecoration: "none"}} href="news-single.html">Mason Carrington</a>
                                                </div>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="item img-top">
                                            <div className="img-wrap">
                                                <div className="bage interview">interview</div>
                                                <a style={{textDecoration: "none"}} href="news-single.html"><img src="images/amfootball/news-list-img.jpg" alt="news-list-img" /></a>
                                            </div>
                                            <div className="info">
                                                <a style={{textDecoration: "none"}} href="news-single.html" className="name dark:text-neutral-300 text-neutral-600">Bauza: Bono and Tolo will start against Intercitulo</a>
                                                <div className="wrap">
                                                    <a style={{textDecoration: "none"}} href="news-single.html">25 Sep 2017</a> by <a style={{textDecoration: "none"}} href="news-single.html">Mason Carrington</a>
                                                </div>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="item img-top">
                                            <div className="img-wrap">
                                                <div className="bage interview">interview</div>
                                                <a style={{textDecoration: "none"}} href="news-single.html"><img src="images/amfootball/news-list-img.jpg" alt="news-list-img" /></a>
                                            </div>
                                            <div className="info">
                                                <a style={{textDecoration: "none"}} href="news-single.html" className="name dark:text-neutral-300 text-neutral-600">Bauza: Bono and Tolo will start against Intercitulo</a>
                                                <div className="wrap">
                                                    <a style={{textDecoration: "none"}} href="news-single.html">25 Sep 2017</a> by <a style={{textDecoration: "none"}} href="news-single.html">Mason Carrington</a>
                                                </div>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="item img-top">
                                            <div className="img-wrap">
                                                <div className="bage interview">interview</div>
                                                <a style={{textDecoration: "none"}} href="news-single.html"><img src="images/amfootball/news-list-img.jpg" alt="news-list-img" /></a>
                                            </div>
                                            <div className="info">
                                                <a style={{textDecoration: "none"}} href="news-single.html" className="name dark:text-neutral-300 text-neutral-600">Bauza: Bono and Tolo will start against Intercitulo</a>
                                                <div className="wrap">
                                                    <a style={{textDecoration: "none"}} href="news-single.html">25 Sep 2017</a> by <a style={{textDecoration: "none"}} href="news-single.html">Mason Carrington</a>
                                                </div>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-item part-wrap tab-pane " id="participants">
                        <div className="part-list">
                            <div className="foot-container">
                                <div className="row">
                                    <div className="col-md-3">
                                        <a style={{textDecoration: "none"}} href="club-stats.html" className="item dark:hover:text-red-800 hover:text-red-800 dark:focus:text-red-800 focus:text-red-800">
                                            <span className="logo"><img src="images/amfootball/team-logo1.png" width="80" height="80" alt="team-logo" /></span>
                                            <span className="name text-neutral-900 dark:text-neutral-100">Team 1</span>
                                        </a>
                                    </div>
                                    <div className="col-md-3">
                                        <a style={{textDecoration: "none"}} href="club-stats.html" className="item dark:hover:text-red-800 hover:text-red-800 dark:focus:text-red-800 focus:text-red-800">
                                            <span className="logo"><img src="images/amfootball/team-logo2.png" width="80" height="80" alt="team-logo" /></span>
                                            <span className="name text-neutral-900 dark:text-neutral-100">Team 2</span>
                                        </a>
                                    </div>
                                    <div className="col-md-3">
                                        <a style={{textDecoration: "none"}} href="club-stats.html" className="item dark:hover:text-red-800 hover:text-red-800 dark:focus:text-red-800 focus:text-red-800">
                                            <span className="logo"><img src="images/amfootball/team-logo3.png" width="80" height="80" alt="team-logo" /></span>
                                            <span className="name text-neutral-900 dark:text-neutral-100">Team 3</span>
                                        </a>
                                    </div>
                                    <div className="col-md-3">
                                        <a style={{textDecoration: "none"}} href="club-stats.html" className="item dark:hover:text-red-800 hover:text-red-800 dark:focus:text-red-800 focus:text-red-800">
                                            <span className="logo"><img src="images/amfootball/team-logo4.png" width="80" height="80" alt="team-logo" /></span>
                                            <span className="name text-neutral-900 dark:text-neutral-100">Team 4</span>
                                        </a>
                                    </div>
                                    <div className="col-md-3">
                                        <a style={{textDecoration: "none"}} href="club-stats.html" className="item dark:hover:text-red-800 hover:text-red-800 dark:focus:text-red-800 focus:text-red-800">
                                            <span className="logo"><img src="images/amfootball/team-logo5.png" width="80" height="80" alt="team-logo" /></span>
                                            <span className="name text-neutral-900 dark:text-neutral-100">Team 5</span>
                                        </a>
                                    </div>
                                    <div className="col-md-3">
                                        <a style={{textDecoration: "none"}} href="club-stats.html" className="item dark:hover:text-red-800 hover:text-red-800 dark:focus:text-red-800 focus:text-red-800">
                                            <span className="logo"><img src="images/amfootball/team-logo1.png" width="80" height="80" alt="team-logo" /></span>
                                            <span className="name">Team 6</span>
                                        </a>
                                    </div>
                                    <div className="col-md-3">
                                        <a style={{textDecoration: "none"}} href="club-stats.html" className="item dark:hover:text-red-800 hover:text-red-800 dark:focus:text-red-800 focus:text-red-800">
                                            <span className="logo"><img src="images/amfootball/team-logo2.png" width="80" height="80" alt="team-logo" /></span>
                                            <span className="name text-neutral-900 dark:text-neutral-100">Team 7</span>
                                        </a>
                                    </div>
                                    <div className="col-md-3">
                                        <a style={{textDecoration: "none"}} href="club-stats.html" className="item dark:hover:text-red-800 hover:text-red-800 dark:focus:text-red-800 focus:text-red-800">
                                            <span className="logo"><img src="images/amfootball/team-logo3.png" width="80" height="80" alt="team-logo" /></span>
                                            <span className="name text-neutral-900 dark:text-neutral-100">Team 8</span>
                                        </a>
                                    </div>
                                    <div className="col-md-3">
                                        <a style={{textDecoration: "none"}} href="club-stats.html" className="item dark:hover:text-red-800 hover:text-red-800 dark:focus:text-red-800 focus:text-red-800">
                                            <span className="logo"><img src="images/amfootball/team-logo4.png" width="80" height="80" alt="team-logo" /></span>
                                            <span className="name text-neutral-900 dark:text-neutral-100">Team 9</span>
                                        </a>
                                    </div>
                                    <div className="col-md-3">
                                        <a style={{textDecoration: "none"}} href="club-stats.html" className="item dark:hover:text-red-800 hover:text-red-800 dark:focus:text-red-800 focus:text-red-800">
                                            <span className="logo"><img src="images/amfootball/team-logo5.png" width="80" height="80" alt="team-logo" /></span>
                                            <span className="name text-neutral-900 dark:text-neutral-100">Team 10</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="tab-item match-wrap tab-pane" id="matches">
                        <div className="foot-container">
                            <h4 style={{paddingTop: "20px",paddingBottom: "19px",fontSize: "24px"}}
                            >Prochain Matchs</h4>
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
                        <div className="foot-container">
                            <h4 style={{paddingTop: "20px",paddingBottom: "19px",fontSize: "24px"}}>Dérniers résultats</h4>
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

                    <div className="tab-item tournament-tab tab-pane" id="tournamentgrid">
                        <div className="foot-container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <ul className="tab-filters">
                                        <li className="active"><a style={{textDecoration: "none"}}  className="dark:text-neutral-200" href="#groupstage" data-toggle="tab">Group stage</a></li>
                                        <li><a className="dark:text-neutral-200" style={{textDecoration: "none"}} href="#playoff" data-toggle="tab">Playoffs</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12 overflow-scroll">
                                    <div className="tab-content">
                                        <div id="groupstage" className="tab-pane fade-foot in active">
                                            <table className="standing-full-foot">
                                                <tbody>
                                                    <tr>
                                                        <th>club</th>
                                                        <th>played</th>
                                                        <th>won</th>
                                                        <th>drawn</th>
                                                        <th>lost</th>
                                                        <th>gd</th>
                                                        <th>points</th>
                                                        <th>form</th>
                                                        <th>next</th>
                                                    </tr>
                                                    <tr>
                                                        <td className="up dark:text-neutral-800">
                                                            <i className="fa fa-caret-up" aria-hidden="true"></i> 1 <span className="team"><img  style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo1.png" width="30" height="30" alt="team-logo" /> </span>Team 1
                                                        </td>
                                                        <td className="dark:text-neutral-800">11</td>
                                                        <td className="dark:text-neutral-800">8</td>
                                                        <td className="dark:text-neutral-800">2</td>
                                                        <td className="dark:text-neutral-800">1</td>
                                                        <td className="dark:text-neutral-800">+16</td>
                                                        <td className="points"><span>26</span></td>
                                                        <td className="form">
                                                            <span className="win">w</span>
                                                            <span className="drawn">d</span>
                                                            <span className="lose">l</span>
                                                            <span className="win">w</span>
                                                            <span className="win">w</span>
                                                        </td>
                                                        <td className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="matches.html"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo2.png" width="30" height="30" alt="team-logo" /></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="down dark:text-neutral-800">
                                                            <i className="fa fa-caret-down" aria-hidden="true"></i> 1 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo2.png" width="30" height="30" alt="team-logo" /> </span>Team 2
                                                        </td>
                                                        <td className="dark:text-neutral-800">11</td>
                                                        <td className="dark:text-neutral-800">8</td>
                                                        <td className="dark:text-neutral-800">2</td>
                                                        <td className="dark:text-neutral-800">1</td>
                                                        <td className="dark:text-neutral-800">+16</td>
                                                        <td className="points"><span>26</span></td>
                                                        <td className="form">
                                                            <span className="win">w</span>
                                                            <span className="drawn">d</span>
                                                            <span className="lose">l</span>
                                                            <span className="win">w</span>
                                                            <span className="lose">l</span>
                                                        </td>
                                                        <td className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="matches.html"><img style={{display:'inline-flex' , marginLeft:"10px"}}  src="images/amfootball/team-logo1.png" width="30" height="30" alt="team-logo" /></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="down dark:text-neutral-800">
                                                            <i className="fa fa-caret-down" aria-hidden="true"></i> 1 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo3.png" width="30" height="30" alt="team-logo" /> </span>Team 3
                                                        </td>
                                                        <td className="dark:text-neutral-800">11</td>
                                                        <td className="dark:text-neutral-800">8</td>
                                                        <td className="dark:text-neutral-800">2</td>
                                                        <td className="dark:text-neutral-800">1</td>
                                                        <td className="dark:text-neutral-800">+16</td>
                                                        <td className="points"><span>26</span></td>
                                                        <td className="form">
                                                            <span className="lose">l</span>
                                                            <span className="drawn">d</span>
                                                            <span className="lose">l</span>
                                                            <span className="win">w</span>
                                                            <span className="win">w</span>
                                                        </td>
                                                        <td className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="matches.html"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo4.png" width="30" height="30" alt="" /></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="down dark:text-neutral-800">
                                                            <i className="fa fa-caret-down" aria-hidden="true"></i> 1 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo4.png" width="30" height="30" alt="team-logo" /> </span>Team 4
                                                        </td>
                                                        <td className="dark:text-neutral-800">11</td>
                                                        <td className="dark:text-neutral-800">8</td>
                                                        <td className="dark:text-neutral-800">2</td>
                                                        <td className="dark:text-neutral-800">1</td>
                                                        <td className="dark:text-neutral-800">+16</td>
                                                        <td className="points"><span>26</span></td>
                                                        <td className="form">
                                                            <span className="win">w</span>
                                                            <span className="drawn">d</span>
                                                            <span className="lose">l</span>
                                                            <span className="win">w</span>
                                                            <span className="lose">l</span>
                                                        </td>
                                                        <td className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="matches.html"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo3.png" width="30" height="30" alt="team-logo" /></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="none dark:text-neutral-800">
                                                            <i className="fa fa-circle" aria-hidden="true"></i> 1 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo5.png" width="30" height="30" alt="team-logo" /> </span>Team 5
                                                        </td>
                                                        <td className="dark:text-neutral-800">11</td>
                                                        <td className="dark:text-neutral-800">8</td>
                                                        <td className="dark:text-neutral-800">2</td>
                                                        <td className="dark:text-neutral-800">1</td>
                                                        <td className="dark:text-neutral-800">+16</td>
                                                        <td className="points"><span>26</span></td>
                                                        <td className="form">
                                                            <span className="win">w</span>
                                                            <span className="drawn">d</span>
                                                            <span className="lose">l</span>
                                                            <span className="win">w</span>
                                                            <span className="win">w</span>
                                                        </td>
                                                        <td className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="matches.html"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo1.png" width="30" height="30" alt="team-logo" /></a></td>
                                                    </tr>
                                                </tbody></table>
                                        </div>

                                        <div id="playoff" className="tab-pane fade-foot">
                                            <table className="standing-full-foot">
                                                <tbody>
                                                    <tr>
                                                        <th>club</th>
                                                        <th>played</th>
                                                        <th>won</th>
                                                        <th>drawn</th>
                                                        <th>lost</th>
                                                        <th>gd</th>
                                                        <th>points</th>
                                                        <th>form</th>
                                                        <th>next</th>
                                                    </tr>
                                                    <tr>
                                                        <td className="up dark:text-neutral-800">
                                                            <i className="fa fa-caret-up" aria-hidden="true"></i> 1 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo1.png" width="30" height="30" alt="team-logo" /> </span>Team 5
                                                        </td>
                                                        <td className="dark:text-neutral-800">11</td>
                                                        <td className="dark:text-neutral-800">8</td>
                                                        <td className="dark:text-neutral-800">2</td>
                                                        <td className="dark:text-neutral-800">1</td>
                                                        <td className="dark:text-neutral-800">+16</td>
                                                        <td className="points"><span>26</span></td>
                                                        <td className="form">
                                                            <span className="win">w</span>
                                                            <span className="drawn">d</span>
                                                            <span className="lose">l</span>
                                                            <span className="win">w</span>
                                                            <span className="win">w</span>
                                                        </td>
                                                        <td className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="matches.html"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo2.png" width="30" height="30" alt="team-logo" /></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="down dark:text-neutral-800">
                                                            <i className="fa fa-caret-down" aria-hidden="true"></i> 1 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo2.png" width="30" height="30" alt="team-logo" /> </span>Team 3
                                                        </td>
                                                        <td className="dark:text-neutral-800">11</td>
                                                        <td className="dark:text-neutral-800">8</td>
                                                        <td className="dark:text-neutral-800">2</td>
                                                        <td className="dark:text-neutral-800">1</td>
                                                        <td className="dark:text-neutral-800">+16</td>
                                                        <td className="points"><span>26</span></td>
                                                        <td className="form">
                                                            <span className="win">w</span>
                                                            <span className="drawn">d</span>
                                                            <span className="lose">l</span>
                                                            <span className="win">w</span>
                                                            <span className="lose">l</span>
                                                        </td>
                                                        <td className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="matches.html"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo1.png" width="30" height="30" alt="team-logo" /></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="down dark:text-neutral-800">
                                                            <i className="fa fa-caret-down" aria-hidden="true"></i> 1 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo3.png" width="30" height="30" alt="team-logo" /> </span>Team 4
                                                        </td>
                                                        <td className="dark:text-neutral-800">11</td>
                                                        <td className="dark:text-neutral-800">8</td>
                                                        <td className="dark:text-neutral-800">2</td>
                                                        <td className="dark:text-neutral-800">1</td>
                                                        <td className="dark:text-neutral-800">+16</td>
                                                        <td className="points"><span>26</span></td>
                                                        <td className="form">
                                                            <span className="lose">l</span>
                                                            <span className="drawn">d</span>
                                                            <span className="lose">l</span>
                                                            <span className="win">w</span>
                                                            <span className="win">w</span>
                                                        </td>
                                                        <td className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="matches.html"><img style={{display:'inline-flex' , marginLeft:"10px"}}src="images/amfootball/team-logo4.png" width="30" height="30" alt="" /></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="down dark:text-neutral-800">
                                                            <i className="fa fa-caret-down" aria-hidden="true"></i> 1 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo4.png" width="30" height="30" alt="team-logo" /> </span>Team 2
                                                        </td>
                                                        <td className="dark:text-neutral-800">11</td>
                                                        <td className="dark:text-neutral-800">8</td>
                                                        <td className="dark:text-neutral-800">2</td>
                                                        <td className="dark:text-neutral-800">1</td>
                                                        <td className="dark:text-neutral-800">+16</td>
                                                        <td className="points"><span>26</span></td>
                                                        <td className="form">
                                                            <span className="win">w</span>
                                                            <span className="drawn">d</span>
                                                            <span className="lose">l</span>
                                                            <span className="win">w</span>
                                                            <span className="lose">l</span>
                                                        </td>
                                                        <td className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="matches.html"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo3.png" width="30" height="30" alt="team-logo" /></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="none dark:text-neutral-800">
                                                            <i className="fa fa-circle" aria-hidden="true"></i> 1 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo5.png" width="30" height="30" alt="team-logo" /> </span>Team 1
                                                        </td>
                                                        <td className="dark:text-neutral-800">11</td>
                                                        <td className="dark:text-neutral-800">8</td>
                                                        <td className="dark:text-neutral-800">2</td>
                                                        <td className="dark:text-neutral-800">1</td>
                                                        <td className="dark:text-neutral-800">+16</td>
                                                        <td className="points"><span>26</span></td>
                                                        <td className="form">
                                                            <span className="win">w</span>
                                                            <span className="drawn">d</span>
                                                            <span className="lose">l</span>
                                                            <span className="win">w</span>
                                                            <span className="win">w</span>
                                                        </td>
                                                        <td className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="matches.html"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo1.png" width="30" height="30" alt="team-logo" /></a></td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>

                <div className="main-sponsor-slider-background">
                    <div id="main-sponsor-slider" className="carousel slide main-sponsor-slider" data-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <div className="foot-container">
                                    <div className="row">
                                        <div className="col-4 text-center">
                                            <img className="sponsor-icons" src="images/common/sponsor-img.png" alt="sponsor-image" />
                                        </div>
                                        <div className="col-4 text-center">
                                            <img className="sponsor-icons" src="images/common/sponsor-img1.png" alt="sponsor-image" />
                                        </div>
                                        <div className="col-4 text-center">
                                            <img className="sponsor-icons dota-csgo-image" src="images/common/sponsor-img2.png" alt="sponsor-image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item ">
                                <div className="foot-container">
                                    <div className="row">
                                        <div className="col-4 text-center">
                                            <img className="sponsor-icons" src="images/common/sponsor-img.png" alt="sponsor-image" />
                                        </div>
                                        <div className="col-4 text-center">
                                            <img className="sponsor-icons" src="images/common/sponsor-img1.png" alt="sponsor-image" />
                                        </div>
                                        <div className="col-4 text-center">
                                            <img className="sponsor-icons dota-csgo-image" src="images/common/sponsor-img2.png" alt="sponsor-image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a style={{textDecoration: "none"}} className="nav-arrow left-arrow" href="#main-sponsor-slider" role="button" data-slide="prev">
                                <i className="fa fa-angle-left" aria-hidden="true"></i>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a style={{textDecoration: "none"}} className="nav-arrow right-arrow" href="#main-sponsor-slider" role="button" data-slide="next">
                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
           
        </>
    )
}
export default PageSingleClub;
