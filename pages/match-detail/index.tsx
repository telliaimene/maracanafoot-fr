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
import CommentsMatch from "../../containers/CommentsMatch/CommentsMatch";
function Match_detail() {
  const userId = useAppSelector(UserID);

  return (
    <>
      <HeaderContainer user={userId} />

      {/* <section className="image-header">
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
      </section> */}
      <div className="match-header wf100">
            <div className="foot-container">
               <div className="row">
                  <div className="col-md-12">
                     <h5>Super Euro League</h5>
                     <p>Indy Eleven Qualified for Semi Final</p>
                     <ul className="teamz">
                        <li className="mt-left"><img src="images/mlogo1.png" alt=""/> <strong>North Carolina</strong> </li>
                        <li className="mt-center-score">
                           <div className="score-left"> <span>2</span> <strong>loss</strong> </div>
                           <div className="score-right"> <span>3</span> <strong>win</strong> </div>
                        </li>
                        <li className="mt-right"> <img src="images/mlogo2.png" alt=""/> <strong>Indy Eleven</strong> </li>
                     </ul>
                     <ul className="match-score">
                        <li className="text-right">
                           <p>Charlie Darren <span>(1 goal)</span> <i className="fas fa-futbol"></i></p>
                           <p>kevin Jamie <span>(1 goal)</span> <i className="fas fa-futbol"></i></p>
                        </li>
                        <li className="text-left">
                           <p><i className="fas fa-futbol"></i> Jon Taylor <span>(1 goal)</span></p>
                           <p><i className="fas fa-futbol"></i> Steven Dean <span>(1 goal)</span></p>
                           <p><i className="fas fa-futbol"></i> Smith Ross <span>(1 goal)</span></p>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <ul className="m-date-loc">
               <li><i className="fas fa-calendar-alt"></i> 17 October, 2020</li>
               <li className="pipeline"> | </li>
               <li><i className="fas fa-map-marker-alt"></i> New Expo Stadium, NYK</li>
            </ul>
         </div>
      <section className="live-timeline">
        <div className="foot-container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-neutral-900 dark:text-neutral-100"   style={{paddingTop: "20px",paddingBottom: "21px",fontSize:"28px",fontFamily: "Raleway, sans-serif", fontWeight: "900",textTransform: "uppercase"}}>Résumé</h3>
              <div className="live-timeline">
                <div className="timeline-wrap">
                  <div className="team text-neutral-600 dark:text-neutral-300">
                    <img
                      src="images/amfootball/team-logo2.png"
                      alt="match-list-team-img"
                    />
                    Team 1
                  </div>
                  <div className="timeline">
                    <div className="first">
                      <div className="period">
                        <div className="line line-1">
                          <a href="#" className="event event-1"></a>
                          <a href="#" className="event event-2"></a>
                          <a
                            href="#"
                            className="goal goal-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="32’ Sherlock"
                          >
                            <img
                              src="images/amfootball/team-logo1.png"
                              alt="timeline-goal"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="second">
                      <div className="period">
                        <div className="line line-2">
                          <a href="#" className="event event-3"></a>
                          <a href="#" className="event event-4"></a>
                          <a
                            href="#"
                            className="goal goal-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="32’ Sherlock"
                          >
                            <img
                              src="images/common/timeline-goal.jpg"
                              alt="timeline-goal"
                            />
                          </a>
                          <div className="current-time text-neutral-900 dark:text-neutral-900 ">64</div>
                        </div>
                        <div className="end"></div>
                      </div>
                    </div>
                  </div>
                  <div className="team">
                    <img
                      src="images/amfootball/team-logo1.png"
                      alt="match-list-team-img"
                    />
                    Team 2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
      <section className="live-match-stat">
        <div className="foot-container">
          <div className="row">
            <div className="col-xl-6">
              <h3  style={{paddingTop: "20px",paddingBottom: "21px",fontSize:"28px",fontFamily: "Raleway, sans-serif", fontWeight: "900",textTransform: "uppercase"}} className="h3-tactic text-neutral-900 dark:text-neutral-100">Stats</h3>
              <h3   style={{paddingTop: "20px",paddingBottom: "21px",fontSize:"28px",fontFamily: "Raleway, sans-serif", fontWeight: "900",textTransform: "uppercase"}} className="csgo text-neutral-900 dark:text-neutral-100">De Dust</h3>
              <div className="tactic football">
                <div className="tab-content">
                  <div className="tab-pane active" id="football_pitch_top">
                    <div className="field text-center">
                      <a
                        href="player-second-page.html"
                        className="player top lf  "
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="26 Joenaathan Koedjaia"
                      >
                        <img
                          width="56"
                          height="56"
                          src="images/amfootball/team-logo1.png"
                          alt="player"
                        />{" "}
                        26{" "}
                      </a>
                      <a
                        href="player-second-page.html"
                        className="player top cf  "
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="8 Aaeroan Tsehiabola"
                      >
                        <img
                          width="56"
                          height="56"
                          src="images/amfootball/team-logo1.png"
                          alt="player"
                        />{" "}
                        8{" "}
                      </a>
                      <a
                        href="player-second-page.html"
                        className="player top rf  "
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="5 Heenrai Laensabury"
                      >
                        <img
                          width="56"
                          height="56"
                          src="images/amfootball/team-logo1.png"
                          alt="player"
                        />{" "}
                        5{" "}
                      </a>
                      <a
                        href="player-second-page.html"
                        className="player top lm  "
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="77 Caerlaes Giela"
                      >
                        <img
                          width="56"
                          height="56"
                          src="images/amfootball/team-logo1.png"
                          alt="player"
                        />{" "}
                        77{" "}
                      </a>
                      <a
                        href="player-second-page.html"
                        className="player top cdm  "
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="28 Aleya Ciessaokho"
                      >
                        <img
                          width="56"
                          height="56"
                          src="images/amfootball/team-logo1.png"
                          alt="player"
                        />{" "}
                        28{" "}
                      </a>
                      <a
                        href="player-second-page.html"
                        className="player top rwb  "
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="27 Rietcahie Deea Laeeta"
                      >
                        <img
                          width="56"
                          height="56"
                          src="images/amfootball/team-logo1.png"
                          alt="player"
                        />{" "}
                        27{" "}
                      </a>
                      <a
                        href="player-second-page.html"
                        className="player top lcb1  "
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="21 Aleana Huettaon"
                      >
                        <img
                          width="56"
                          height="56"
                          src="images/amfootball/team-logo1.png"
                          alt="player"
                        />{" "}
                        21{" "}
                      </a>
                      <a
                        href="player-second-page.html"
                        className="player top lb  "
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="12 Jaemeas Cheesater"
                      >
                        <img
                          width="56"
                          height="56"
                          src="images/amfootball/team-logo1.png"
                          alt="player"
                        />{" "}
                        12{" "}
                      </a>
                      <a
                        href="player-second-page.html"
                        className="player top rb  "
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="6 Toemmay Elephaick"
                      >
                        <img
                          width="56"
                          height="56"
                          src="images/amfootball/team-logo1.png"
                          alt="player"
                        />{" "}
                        6{" "}
                      </a>
                      <a
                        href="player-second-page.html"
                        className="player top rcb  "
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="2 Naethaan Baekear"
                      >
                        <img
                          width="56"
                          height="56"
                          src="images/amfootball/team-logo1.png"
                          alt="player"
                        />{" "}
                        2{" "}
                      </a>
                      <a
                        href="player-second-page.html"
                        className="player top gk  "
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="1 Pieeraluigi Goellaini"
                      >
                        <img
                          width="56"
                          height="56"
                          src="images/amfootball/team-logo1.png"
                          alt="player"
                        />{" "}
                        1{" "}
                      </a>

                      <img
                        className="img-responsive center-block"
                        src="images/common/soccer-match-field.jpg"
                        alt="match-field"
                      />
                    </div>
                  </div>
                  <div className="tab-pane" id="football_pitch_button">
                    <div className="field text-center">
                      <a
                        href="player-second-page.html"
                        className="player bottom gk  "
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="29 Reemiaro"
                      >
                        <img
                          width="56"
                          height="56"
                          src="images/amfootball/team-logo1.png"
                          alt="player"
                        />{" "}
                        29{" "}
                      </a>
                      <a
                        href="player-second-page.html"
                        className="player bottom rcb  "
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="18 Deea Maercaos"
                      >
                        <img
                          width="56"
                          height="56"
                          src="images/amfootball/team-logo1.png"
                          alt="player"
                        />{" "}
                        18{" "}
                      </a>
                      <a
                        href="player-second-page.html"
                        className="player bottom lcb1  "
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="16 X.ea Etexeaita"
                      >
                        <img
                          width="56"
                          height="56"
                          src="images/amfootball/team-logo1.png"
                          alt="player"
                        />{" "}
                        16{" "}
                      </a>
                      <a
                        href="player-second-page.html"
                        className="player bottom cf  "
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="11 Wiellaiams"
                      >
                        <img
                          width="56"
                          height="56"
                          src="images/amfootball/team-logo1.png"
                          alt="player"
                        />{" "}
                        11{" "}
                      </a>
                      <a
                        href="player-second-page.html"
                        className="player bottom rf  "
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="10 Mueniaain"
                      >
                        <img
                          width="56"
                          height="56"
                          src="images/amfootball/team-logo1.png"
                          alt="player"
                        />{" "}
                        10{" "}
                      </a>
                      <a
                        href="player-second-page.html"
                        className="player bottom lf  "
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="14 Suesaaeta"
                      >
                        <img
                          width="56"
                          height="56"
                          src="images/amfootball/team-logo1.png"
                          alt="player"
                        />{" "}
                        14{" "}
                      </a>
                      <a
                        href="player-second-page.html"
                        className="player bottom lm  "
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="8 Iteuraraspe"
                      >
                        <img
                          width="56"
                          height="56"
                          src="images/amfootball/team-logo1.png"
                          alt="player"
                        />{" "}
                        8{" "}
                      </a>
                      <a
                        href="player-second-page.html"
                        className="player bottom cam  "
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="7 Beeñaat"
                      >
                        <img
                          width="56"
                          height="56"
                          src="images/amfootball/team-logo1.png"
                          alt="player"
                        />{" "}
                        7{" "}
                      </a>
                      <a
                        href="player-second-page.html"
                        className="player bottom rm  "
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="5 Ereasao"
                      >
                        <img
                          width="56"
                          height="56"
                          src="images/amfootball/team-logo1.png"
                          alt="player"
                        />{" "}
                        5{" "}
                      </a>
                      <a
                        href="player-second-page.html"
                        className="player bottom lb  "
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="4 Laepoarte"
                      >
                        <img
                          width="56"
                          height="56"
                          src="images/amfootball/team-logo1.png"
                          alt="player"
                        />{" "}
                        4{" "}
                      </a>
                      <a
                        href="player-second-page.html"
                        className="player bottom rb  "
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="3 Eleusatondo"
                      >
                        <img
                          width="56"
                          height="56"
                          src="images/amfootball/team-logo1.png"
                          alt="player"
                        />{" "}
                        3{" "}
                      </a>

                      <img
                        className="img-responsive center-block"
                        src="images/common/soccer-match-field.jpg"
                        alt="match-field"
                      />
                    </div>
                  </div>
                </div>
                <ul className="team-legend" role="tablist">
                  <li className="active">
                    <a
                      href="#football_pitch_top"
                      data-toggle="tab"
                      aria-controls="football_pitch_top"
                      aria-expanded="true"
                      className="text-neutral-600 dark:text-neutral-300"
                    >
                      <div className="circle red text-neutral-600 dark:text-neutral-300"></div>Team 1{" "}
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#football_pitch_button"
                      data-toggle="tab"
                      aria-controls="football_pitch_button"
                      aria-expanded="false"
                      className="text-neutral-600 dark:text-neutral-300"
                    >
                      <div className="circle black"></div>Team 2{" "}
                    </a>
                  </li>
                </ul>
              </div>
        
            </div>
            <div className="col-xl-6">
              <h3 className="text-neutral-900 dark:text-neutral-100"   style={{paddingTop: "20px",paddingBottom: "21px",fontSize:"28px",fontFamily: "Raleway, sans-serif", fontWeight: "900",textTransform: "uppercase"}}> Stats match</h3>

              <div className="match-stat-table">
                <div className="item dark:bg-neutral-800" >
                  <div className="name">Component 1</div>
                  <div className="percent dark:text-neutral-300">1</div>
                  <div className="percent right">1</div>
                  <div className="percent-bar">
                    <div className="bar bar-1"></div>
                  </div>
                </div>
                <div className="item dark:bg-neutral-800">
                  <div className="name">Component 2</div>
                  <div className="percent">48</div>
                  <div className="percent right">52</div>
                  <div className="percent-bar">
                    <div className="bar bar-2"></div>
                  </div>
                </div>
                <div className="item dark:bg-neutral-800">
                  <div className="name">Component 3</div>
                  <div className="percent">15</div>
                  <div className="percent right">13</div>
                  <div className="percent-bar">
                    <div className="bar bar-3"></div>
                  </div>
                </div>
                <div className="item dark:bg-neutral-800">
                  <div className="name">Component 4</div>
                  <div className="percent">7</div>
                  <div className="percent right">5</div>
                  <div className="percent-bar">
                    <div className="bar bar-4"></div>
                  </div>
                </div>
                
                <div className="item dark:bg-neutral-800">
                  <div className="name">Component 7</div>
                  <div className="percent">4</div>
                  <div className="percent right">3</div>
                  <div className="percent-bar">
                    <div className="bar bar-6"></div>
                  </div>
                </div>
                <div className="item dark:bg-neutral-800">
                  <div className="name">Component 8</div>
                  <div className="percent">4</div>
                  <div className="percent right">3</div>
                  <div className="percent-bar">
                    <div className="bar bar-6"></div>
                  </div>
                </div>
                <div className="item dark:bg-neutral-800">
                  <div className="name">Component 9</div>
                  <div className="percent">4</div>
                  <div className="percent right">3</div>
                  <div className="percent-bar">
                    <div className="bar bar-6"></div>
                  </div>
                </div>
              </div>
        
      
            </div>
          </div>
        
        </div>
      </section>   
      <section className="main-match-shedule">
        <div className="foot-container">
        <h3 className="text-neutral-900 dark:text-neutral-100"   style={{paddingTop: "20px",paddingBottom: "21px",fontSize:"28px",fontFamily: "Raleway, sans-serif", fontWeight: "900",textTransform: "uppercase"}}>dérniers matchs</h3>
            <div className="row">
       
                <div className="col-lg-6 col-md-12 col-sm-12">
                <h3 className="text-neutral-900 dark:text-neutral-100"   style={{paddingTop: "10px",paddingBottom: "10px",fontSize:"24px",fontFamily: "Raleway, sans-serif", fontWeight: "400"}}>Équipe 1</h3>
              
                        
<div className="main-lates-matches">
    <a href="" className="item">
        <span className="championship">National cup - quarterfinal</span>
        <span className="teams-wrap">
                <span className="team">
                    <span>
                        <img src="images/amfootball/team-logo1.png" alt="team-image"/>
                    </span>
                    <span>Team 1</span>
                </span>
                <span className="score">
                    <span>3:2</span>

                </span>
                <span className="team1">
                    <span>Internacional</span>
                    <span><img src="images/amfootball/team-logo1.png" alt="team-image"/></span>
                </span>
        </span>
        <span className="game-result">(5-4) penalties</span>
    </a>
    <a href="" className="item">
        <span className="championship">National cup - quarterfinal</span>
        <span className="teams-wrap">
                <span className="team">
                    <span>
                        <img src="images/amfootball/team-logo1.png" alt="team-image"/>
                    </span>
                    <span>Team 1</span>
                </span>
                <span className="score">
                    <span>3:2</span>

                </span>
                <span className="team1">
                    <span>Team 2</span>
                    <span><img src="images/amfootball/team-logo1.png" alt="team-image"/></span>
                </span>
        </span>
        <span className="game-result">(5-4) penalties</span>
    </a>
    <a href="" className="item">
        <span className="championship">National cup - quarterfinal</span>
        <span className="teams-wrap">
                <span className="team">
                    <span>
                        <img src="images/amfootball/team-logo1.png" alt="team-image"/>
                    </span>
                    <span>Team 1</span>
                </span>
                <span className="score">
                    <span>3:2</span>

                </span>
                <span className="team1">
                    <span>Team 2</span>
                    <span><img src="images/amfootball/team-logo1.png" alt="team-image"/></span>
                </span>
        </span>
        <span className="game-result">(5-4) penalties</span>
    </a>
    <a href="" className="item">
        <span className="championship">National cup - quarterfinal</span>
        <span className="teams-wrap">
                <span className="team">
                    <span>
                        <img src="images/amfootball/team-logo1.png" alt="team-image"/>
                    </span>
                    <span>Team 1</span>
                </span>
                <span className="score">
                    <span>3:2</span>

                </span>
                <span className="team1">
                    <span>Team 2</span>
                    <span><img src="images/amfootball/team-logo1.png" alt="team-image"/></span>
                </span>
        </span>
        <span className="game-result">(5-4) penalties</span>
    </a>
    <a href="" className="item">
        <span className="championship">National cup - quarterfinal</span>
        <span className="teams-wrap">
                <span className="team">
                    <span>
                        <img src="images/amfootball/team-logo1.png" alt="team-image"/>
                    </span>
                    <span>Team 1</span>
                </span>
                <span className="score">
                    <span>3:2</span>

                </span>
                <span className="team1">
                    <span>Team 2</span>
                    <span><img src="images/amfootball/team-logo1.png" alt="team-image"/></span>
                </span>
        </span>
        <span className="game-result">(5-4) penalties</span>
    </a>
</div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                <h3 className="text-neutral-900 dark:text-neutral-100"   style={{paddingTop: "10px",paddingBottom: "10px",fontSize:"24px",fontFamily: "Raleway, sans-serif", fontWeight: "400"}}>Équipe 2</h3>
              
                        
<div className="main-lates-matches">
    <a href="" className="item">
        <span className="championship">National cup - quarterfinal</span>
        <span className="teams-wrap">
                <span className="team">
                    <span>
                        <img src="images/amfootball/team-logo1.png" alt="team-image"/>
                    </span>
                    <span>Team 1</span>
                </span>
                <span className="score">
                    <span>3:2</span>

                </span>
                <span className="team1">
                    <span>Internacional</span>
                    <span><img src="images/amfootball/team-logo1.png" alt="team-image"/></span>
                </span>
        </span>
        <span className="game-result">(5-4) penalties</span>
    </a>
    <a href="" className="item">
        <span className="championship">National cup - quarterfinal</span>
        <span className="teams-wrap">
                <span className="team">
                    <span>
                        <img src="images/amfootball/team-logo1.png" alt="team-image"/>
                    </span>
                    <span>Team 1</span>
                </span>
                <span className="score">
                    <span>3:2</span>

                </span>
                <span className="team1">
                    <span>Team 2</span>
                    <span><img src="images/amfootball/team-logo1.png" alt="team-image"/></span>
                </span>
        </span>
        <span className="game-result">(5-4) penalties</span>
    </a>
    <a href="" className="item">
        <span className="championship">National cup - quarterfinal</span>
        <span className="teams-wrap">
                <span className="team">
                    <span>
                        <img src="images/amfootball/team-logo1.png" alt="team-image"/>
                    </span>
                    <span>Team 1</span>
                </span>
                <span className="score">
                    <span>3:2</span>

                </span>
                <span className="team1">
                    <span>Team 2</span>
                    <span><img src="images/amfootball/team-logo1.png" alt="team-image"/></span>
                </span>
        </span>
        <span className="game-result">(5-4) penalties</span>
    </a>
    <a href="" className="item">
        <span className="championship">National cup - quarterfinal</span>
        <span className="teams-wrap">
                <span className="team">
                    <span>
                        <img src="images/amfootball/team-logo1.png" alt="team-image"/>
                    </span>
                    <span>Team 1</span>
                </span>
                <span className="score">
                    <span>3:2</span>

                </span>
                <span className="team1">
                    <span>Team 2</span>
                    <span><img src="images/amfootball/team-logo1.png" alt="team-image"/></span>
                </span>
        </span>
        <span className="game-result">(5-4) penalties</span>
    </a>
    <a href="" className="item">
        <span className="championship">National cup - quarterfinal</span>
        <span className="teams-wrap">
                <span className="team">
                    <span>
                        <img src="images/amfootball/team-logo1.png" alt="team-image"/>
                    </span>
                    <span>Team 1</span>
                </span>
                <span className="score">
                    <span>3:2</span>

                </span>
                <span className="team1">
                    <span>Team 2</span>
                    <span><img src="images/amfootball/team-logo1.png" alt="team-image"/></span>
                </span>
        </span>
        <span className="game-result">(5-4) penalties</span>
    </a>
</div>
                </div>
            </div>
        </div>
    </section>
      <section className="live-match-stat">
        <div className="foot-container">
          <h3 className="text-neutral-900 dark:text-neutral-100"   style={{paddingTop: "20px",paddingBottom: "21px",fontSize:"28px",fontFamily: "Raleway, sans-serif", fontWeight: "900",textTransform: "uppercase"}}>Équipes</h3>
          <div className="row">
         
            <div className="col-xl-6">
            <h3 className="text-neutral-900 dark:text-neutral-100"   style={{paddingTop: "10px",paddingBottom: "10px",fontSize:"24px",fontFamily: "Raleway, sans-serif", fontWeight: "400"}}>Titulaires</h3>
              <div className="match-lineup dark:bg-neutral-800">
                <div className="row no-gutter">
                  <div className="col-md-6">
                    <div className="head ">
                      <div className="name">Internacional</div>
                    </div>
                    <div className="team-wrap">
                      <div className="member">
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                        <div className="info">
                          <div className="wrap">
                            <a href="player.html" className="name">
                              Pasveer Pasveer (GK)
                            </a>
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="goal"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            >
                              <img
                                src="images/common/timeline-goal.jpg"
                                alt="timeline-goal"
                              />
                            </div>
                          </div>
                          <div className="country">
                            <img src="images/common/en-flag.png" alt="v" style={{display:"inline-flex", marginRight:"2px"}} />
                            Ukraine
                          </div>
                        </div>
                      </div>
                      <div className="member">
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                        <div className="info">
                          <div className="wrap">
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="card red"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                          </div>
                          <div className="country">
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginRight:"2px"}} />
                            Ukraine
                          </div>
                        </div>
                      </div>
                      <div className="member">
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                        <div className="info">
                          <div className="wrap">
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="card red"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                          </div>
                          <div className="country">
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginRight:"2px"}} />
                            Ukraine
                          </div>
                        </div>
                      </div>
                      <div className="member">
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                        <div className="info">
                          <div className="wrap">
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="card red"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                          </div>
                          <div className="country">
                            <img src="images/common/en-flag.png" alt="" />
                            Ukraine
                          </div>
                        </div>
                      </div>
                      <div className="member">
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                        <div className="info">
                          <div className="wrap">
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="card red"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                          </div>
                          <div className="country">
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginRight:"2px"}} />
                            Ukraine
                          </div>
                        </div>
                      </div>
                      <div className="member">
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                        <div className="info">
                          <div className="wrap">
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="card red"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                          </div>
                          <div className="country">
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginRight:"2px"}} />
                            Ukraine
                          </div>
                        </div>
                      </div>
                      <div className="member">
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                        <div className="info">
                          <div className="wrap">
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="card red"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                          </div>
                          <div className="country">
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginRight:"2px"}} />
                            Ukraine
                          </div>
                        </div>
                      </div>
                      <div className="member">
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                        <div className="info">
                          <div className="wrap">
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                            <div
                              className="goal"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            >
                              <img
                                src="images/common/timeline-goal.jpg"
                                alt="timeline-goal"
                              />
                            </div>
                          </div>
                          <div className="country">
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginRight:"2px"}} />
                            Ukraine
                          </div>
                        </div>
                      </div>
                      <div className="member">
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                        <div className="info">
                          <div className="wrap">
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                          </div>
                          <div className="country">
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginRight:"2px"}} />
                            Ukraine
                          </div>
                        </div>
                      </div>
                      <div className="member">
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                        <div className="info">
                          <div className="wrap">
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="card red"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                          </div>
                          <div className="country">
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginRight:"2px"}} />
                            Ukraine
                          </div>
                        </div>
                      </div>
                      <div className="member">
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                        <div className="info">
                          <div className="wrap">
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="card red"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                          </div>
                          <div className="country">
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginRight:"2px"}} />
                            Ukraine
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="head">
                      <div className="name right">Arsenal</div>
                    </div>
                    <div className="team-wrap right">
                      <div className="member">
                        <div className="info">
                          <div className="wrap">
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="goal"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            >
                              <img
                                src="images/common/timeline-goal.jpg"
                                alt="timeline-goal"
                              />
                            </div>
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                          </div>
                          <div className="country">
                            Ukraine
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginLeft:"2px"}} />
                          </div>
                        </div>
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                      </div>
                      <div className="member">
                        <div className="info">
                          <div className="wrap">
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="goal"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            >
                              <img
                                src="images/common/timeline-goal.jpg"
                                alt="timeline-goal"
                              />
                            </div>
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                          </div>
                          <div className="country">
                            Ukraine
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginLeft:"2px"}} />
                          </div>
                        </div>
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                      </div>
                      <div className="member">
                        <div className="info">
                          <div className="wrap">
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="goal"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            >
                              <img
                                src="images/common/timeline-goal.jpg"
                                alt="timeline-goal"
                              />
                            </div>
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                          </div>
                          <div className="country">
                            Ukraine
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginLeft:"2px"}} />
                          </div>
                        </div>
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                      </div>
                      <div className="member">
                        <div className="info">
                          <div className="wrap">
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="goal"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            >
                              <img
                                src="images/common/timeline-goal.jpg"
                                alt="timeline-goal"
                              />
                            </div>
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                          </div>
                          <div className="country">
                            Ukraine
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginLeft:"2px"}} />
                          </div>
                        </div>
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                      </div>
                      <div className="member">
                        <div className="info">
                          <div className="wrap">
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="goal"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            >
                              <img
                                src="images/common/timeline-goal.jpg"
                                alt="timeline-goal"
                              />
                            </div>
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                          </div>
                          <div className="country">
                            Ukraine
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginLeft:"2px"}} />
                          </div>
                        </div>
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                      </div>
                      <div className="member">
                        <div className="info">
                          <div className="wrap">
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="goal"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            >
                              <img
                                src="images/common/timeline-goal.jpg"
                                alt="timeline-goal"
                              />
                            </div>
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                          </div>
                          <div className="country">
                            Ukraine
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginLeft:"2px"}} />
                          </div>
                        </div>
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                      </div>
                      <div className="member">
                        <div className="info">
                          <div className="wrap">
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="goal"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            >
                              <img
                                src="images/common/timeline-goal.jpg"
                                alt="timeline-goal"
                              />
                            </div>
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                          </div>
                          <div className="country">
                            Ukraine
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginLeft:"2px"}} />
                          </div>
                        </div>
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                      </div>
                      <div className="member">
                        <div className="info">
                          <div className="wrap">
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="goal"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            >
                              <img
                                src="images/common/timeline-goal.jpg"
                                alt="timeline-goal"
                              />
                            </div>
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                          </div>
                          <div className="country">
                            Ukraine
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginLeft:"2px"}} />
                          </div>
                        </div>
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                      </div>
                      <div className="member">
                        <div className="info">
                          <div className="wrap">
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="goal"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            >
                              <img
                                src="images/common/timeline-goal.jpg"
                                alt="timeline-goal"
                              />
                            </div>
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                          </div>
                          <div className="country">
                            Ukraine
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginLeft:"2px"}} />
                          </div>
                        </div>
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                      </div>
                      <div className="member">
                        <div className="info">
                          <div className="wrap">
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="goal"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            >
                              <img
                                src="images/common/timeline-goal.jpg"
                                alt="timeline-goal"
                              />
                            </div>
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                          </div>
                          <div className="country">
                            Ukraine
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginLeft:"2px"}} />
                          </div>
                        </div>
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                      </div>
                      <div className="member">
                        <div className="info">
                          <div className="wrap">
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="goal"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            >
                              <img
                                src="images/common/timeline-goal.jpg"
                                alt="timeline-goal"
                              />
                            </div>
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                          </div>
                          <div className="country">
                            Ukraine
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginLeft:"2px"}} />
                          </div>
                        </div>
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           
             
            </div>
            <div className="col-xl-6">
            <h3 className="text-neutral-900 dark:text-neutral-100"   style={{paddingTop: "10px",paddingBottom: "10px",fontSize:"24px",fontFamily: "Raleway, sans-serif", fontWeight: "400"}}>Remplaçants</h3>
              <div className="match-lineup">
                <div className="row no-gutter">
                  <div className="col-md-6">
                    <div className="head">
                      <div className="name">Équipe 1</div>
                    </div>
                    <div className="team-wrap">
                      <div className="member">
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                        <div className="info">
                          <div className="wrap">
                            <a href="player.html" className="name">
                              Pasveer Pasveer (GK)
                            </a>
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="goal"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            >
                              <img
                                src="images/common/timeline-goal.jpg"
                                alt="timeline-goal"
                              />
                            </div>
                          </div>
                          <div className="country">
                            <img src="images/common/en-flag.png" alt="v" style={{display:"inline-flex", marginRight:"2px"}} />
                            Ukraine
                          </div>
                        </div>
                      </div>
                      <div className="member">
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                        <div className="info">
                          <div className="wrap">
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="card red"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                          </div>
                          <div className="country">
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginRight:"2px"}} />
                            Ukraine
                          </div>
                        </div>
                      </div>
                      <div className="member">
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                        <div className="info">
                          <div className="wrap">
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="card red"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                          </div>
                          <div className="country">
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginRight:"2px"}} />
                            Ukraine
                          </div>
                        </div>
                      </div>
                      <div className="member">
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                        <div className="info">
                          <div className="wrap">
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="card red"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                          </div>
                          <div className="country">
                            <img src="images/common/en-flag.png" alt="" />
                            Ukraine
                          </div>
                        </div>
                      </div>
                      <div className="member">
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                        <div className="info">
                          <div className="wrap">
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="card red"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                          </div>
                          <div className="country">
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginRight:"2px"}} />
                            Ukraine
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="head">
                      <div className="name right">Équipe 2</div>
                    </div>
                    <div className="team-wrap right">
                      <div className="member">
                        <div className="info">
                          <div className="wrap">
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="goal"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            >
                              <img
                                src="images/common/timeline-goal.jpg"
                                alt="timeline-goal"
                              />
                            </div>
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                          </div>
                          <div className="country">
                            Ukraine
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginLeft:"2px"}} />
                          </div>
                        </div>
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                      </div>
                      <div className="member">
                        <div className="info">
                          <div className="wrap">
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="goal"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            >
                              <img
                                src="images/common/timeline-goal.jpg"
                                alt="timeline-goal"
                              />
                            </div>
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                          </div>
                          <div className="country">
                            Ukraine
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginLeft:"2px"}} />
                          </div>
                        </div>
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                      </div>
                      <div className="member">
                        <div className="info">
                          <div className="wrap">
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="goal"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            >
                              <img
                                src="images/common/timeline-goal.jpg"
                                alt="timeline-goal"
                              />
                            </div>
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                          </div>
                          <div className="country">
                            Ukraine
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginLeft:"2px"}} />
                          </div>
                        </div>
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                      </div>
                      <div className="member">
                        <div className="info">
                          <div className="wrap">
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="goal"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            >
                              <img
                                src="images/common/timeline-goal.jpg"
                                alt="timeline-goal"
                              />
                            </div>
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                          </div>
                          <div className="country">
                            Ukraine
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginLeft:"2px"}} />
                          </div>
                        </div>
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                      </div>
                      <div className="member">
                        <div className="info">
                          <div className="wrap">
                            <div
                              className="card yellow" style={{display:"inline-flex", marginRight:"3px"}}
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            ></div>
                            <div
                              className="goal"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="32’"
                            >
                              <img
                                src="images/common/timeline-goal.jpg"
                                alt="timeline-goal"
                              />
                            </div>
                            <a href="player.html" className="name">
                              Pasveer (GK)
                            </a>
                          </div>
                          <div className="country">
                            Ukraine
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginLeft:"2px"}} />
                          </div>
                        </div>
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <h3 className="text-neutral-900 dark:text-neutral-100"   style={{paddingTop: "10px",paddingBottom: "10px",fontSize:"24px",fontFamily: "Raleway, sans-serif", fontWeight: "400"}}>Non convoqués</h3>

<div className="match-lineup">
  <div className="row no-gutter">
    <div className="col-sm-6">
      <div className="team-wrap">
        <div className="member">
          <a href="player.html" className="avatar">
            <img
              src="images/amfootball/team-logo1.png"
              alt="member-avatar"
            />
          </a>
          <div className="info">
            <div className="wrap">
              <a href="player.html" className="name">
                Coach 1
              </a>
            </div>
            <div className="country">
              <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginRight:"2px"}} />
              Ukraine
            </div>
          </div>
        </div>
        <div className="member">
          <a href="player.html" className="avatar">
            <img
              src="images/amfootball/team-logo1.png"
              alt="member-avatar"
            />
          </a>
          <div className="info">
            <div className="wrap">
              <a href="player.html" className="name">
                Coach 1
              </a>
            </div>
            <div className="country">
              <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginRight:"2px"}} />
              Ukraine
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-6">
      <div className="team-wrap right">
        <div className="member">
          <div className="info">
            <div className="wrap">
              <a href="player.html" className="name">
                Coach 2{" "}
              </a>
            </div>
            <div className="country">
              Ukraine
              <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginLeft:"2px"}} />
            </div>
          </div>
          <a href="player.html" className="avatar">
            <img
              src="images/amfootball/team-logo1.png"
              alt="member-avatar"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

            </div>
          </div>
          <div className="row">
          <div className="col-md-6">
          <h3 className="text-neutral-900 dark:text-neutral-100"   style={{paddingTop: "10px",paddingBottom: "10px",fontSize:"24px",fontFamily: "Raleway, sans-serif", fontWeight: "400"}}>Entraîneurs</h3>

<div className="match-lineup">
  <div className="row no-gutter">
    <div className="col-sm-6">
      <div className="team-wrap">
        <div className="member">
          <a href="player.html" className="avatar">
            <img
              src="images/amfootball/team-logo1.png"
              alt="member-avatar"
            />
          </a>
          <div className="info">
            <div className="wrap">
              <a href="player.html" className="name">
                Coach 1
              </a>
            </div>
            <div className="country">
              <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginRight:"2px"}} />
              Ukraine
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-6">
      <div className="team-wrap right">
        <div className="member">
          <div className="info">
            <div className="wrap">
              <a href="player.html" className="name">
                Coach 2{" "}
              </a>
            </div>
            <div className="country">
              Ukraine
              <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginLeft:"2px"}} />
            </div>
          </div>
          <a href="player.html" className="avatar">
            <img
              src="images/amfootball/team-logo1.png"
              alt="member-avatar"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div className="col-md-8">
<h3 className="text-neutral-900 dark:text-neutral-100"   style={{paddingTop: "10px",paddingBottom: "10px",fontSize:"24px",fontFamily: "Raleway, sans-serif", fontWeight: "400"}}>Arbitres</h3>

              <div className="match-lineup">
              <div className="row no-gutter">

                <div className="team-wrap">
                  <div className="member">
                    <a href="player.html" className="avatar">
                      <img
                        src="images/amfootball/team-logo1.png"
                        alt="member-avata"
                      />
                    </a>
                    <div className="info">
                      <div className="wrap">
                        <a href="player.html" className="name">
                          Dylan Miller
                        </a>
                      </div>
                      <div className="country">
                        <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginRight:"2px"}} />
                        Ukraine
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <div className="row no-gutter">
                  <div className="col-md-6">
                    <div className="team-wrap">
                      <div className="member">
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                        <div className="info">
                          <div className="wrap">
                            <a href="player.html" className="name">
                              Gavin Right
                            </a>
                          </div>
                          <div className="country">
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginRight:"2px"}} />
                            Ukraine
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="team-wrap">
                      <div className="member">
                        <a href="player.html" className="avatar">
                          <img
                            src="images/amfootball/team-logo1.png"
                            alt="member-avatar"
                          />
                        </a>
                        <div className="info">
                          <div className="wrap">
                            <a href="player.html" className="name">
                              Gavin Righthead
                            </a>
                          </div>
                          <div className="country">
                            <img src="images/common/en-flag.png" alt="flag" style={{display:"inline-flex", marginRight:"2px"}} />
                            Ukraine
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
          </div>
        </div>
      </section>



      <CommentsMatch className="mt-5"/>

      <div className="foot-container">
        <div className="row">
          <div className="col-md-12">
            <div className="share-box">
              <div className="item">
                <div className="foot-container">
                  <div className="row no-gutter">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                    <h3  className="h3-tactic text-neutral-900 dark:text-neutral-100"   style={{paddingTop: "20px",paddingBottom: "21px",fontSize:"28px",fontFamily: "Raleway, sans-serif", fontWeight: "700"}} >PARTAGER CE MATCH</h3>
                    </div>
                    <div className="col-md-8 col-sm-6 col-xs-12 text-right">
                      <ul className="share-socials  wpb_fadeInRight fadeInRight wpb_start_animation animated">
                        <li className="digg">
                          <a href="http://www.digg.com/">
                            <i className="fa fa-digg" aria-hidden="true"></i>
                          </a>
                        </li>

                        <li className="facebook">
                          <a href="http://www.facebook.com/">
                            <i
                              className="fa fa-facebook-square"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>

                        <li className="google">
                          <a href="https://plus.google.com/">
                            <i
                              className="fa fa-google-plus-square"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>

                        <li className="linkedin">
                          <a href="http://www.linkedin.com/">
                            <i
                              className="fa fa-linkedin-square"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>

                        <li className="pinterest">
                          <a href="http://assets.pinterest.com/">
                            <i
                              className="fa fa-pinterest-square"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>

                        <li className="reddit">
                          <a href="http://reddit.com/">
                            <i
                              className="fa fa-reddit-square"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>

                        <li className="StumbleUpon">
                          <a href="http://www.stumbleupon.com/">
                            <i
                              className="fa fa-stumbleupon-circle"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li className="tumbler">
                          <a href="http://www.tumblr.com/">
                            <i
                              className="fa fa-tumblr-square"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>

                        <li className="twitter">
                          <a href="https://twitter.com/">
                            <i
                              className="fa fa-twitter-square"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li className="vk">
                          <a href="http://vkontakte.ru/">
                            <i className="fa fa-vk" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Match_detail;
