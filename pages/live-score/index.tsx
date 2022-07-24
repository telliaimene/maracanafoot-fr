import React,{useEffect,useState} from "react";
import moment from "moment"
//import "../styles/index.module.css";
//import "../public/styles/index.css";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Header from  "../../components/Foot/header";
import TopBar from  "../../components/Foot/topBar";
import {
  addNewUser,
  removeUser,
  UserID,
  UserType,
} from "../../store/login/auth";
//import Script from "next/script";
function Match() {
  const userId = useAppSelector(UserID);
  useEffect(()=>{
    const date = moment(moment(),'MM-DD-YYYY').locale("Fr").format('dddd')
    console.log("daaate",date)
  })
  function DateToFrench(day:string)
  {
    var dayInFrench=""
    switch (day) {
      case "Saturday":
        return "Samedi"

      case "Sunday":
       return "Dimanche"

      case "Monday":
        return "Lundi"

      case "Tuesday":
       return "Mardi"
      
      case "Wednesday":
      return "Mercredi"

      case "Thursday":
      return "Jeudi"

      case "Friday":
      return "Vendredi"
      default:
    } 

  }
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
                      <a  style={{textDecoration: "none"}} href="index.html">Main</a>/
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
 
      <div className="broadcast-wrap">
        <div className="foot-container">
          <div className="row">
            <div className="col-md-12">
        <div className="row row-eq-height" style={{justifyContent: "center !important"}}>
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <h4 className="text-neutral-900 dark:text-neutral-100">LIVE SCORES</h4>
                    <ul className="tab-filters">
                        <li><a  className="dark:text-neutral-200" style={{textDecoration: "none"}} href="#all">{DateToFrench(moment().subtract(3, 'days').locale("Fr").format('dddd'))}</a></li>
                        <li><a className="dark:text-neutral-200" style={{textDecoration: "none"}} href="#nationalcup">{DateToFrench(moment().subtract(2, 'days').locale("fr").format('dddd'))}</a></li>
                        <li><a  className="dark:text-neutral-200" style={{textDecoration: "none"}} href="#premierleague">{DateToFrench(moment().subtract(1, 'days').locale("fr").format('dddd'))}</a></li>
                        <li className="active "><a className="dark:text-neutral-200"   style={{textDecoration: "none"}} href="#premierleague">Aujourd'hui</a></li>
                        <li><a  className="dark:text-neutral-200" style={{textDecoration: "none"}} href="#premierleague">{DateToFrench(moment().add(1, 'days').locale("fr").format('dddd'))}</a></li>
                        <li><a  className="dark:text-neutral-200" style={{textDecoration: "none"}} href="#premierleague">{DateToFrench(moment().add(2, 'days').locale("fr").format('dddd'))}</a></li>
                        <li><a  className="dark:text-neutral-200" style={{textDecoration: "none"}} href="#premierleague">{DateToFrench(moment().add(3, 'days').locale("fr").format('dddd'))}</a></li>
                    </ul>
               
            </div>
        </div>
            </div>
            <div className="col-md-12">
              <div
                className="broadcast-list"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="broadcast-item">
                  <div className="item-header" id="headingOne">
                    <div className="row">
                      <div className="col-lg-1 col-md-2">
                        <a  style={{textDecoration: "none"}}
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseOne"
                          className="arrow"
                        >
                          <i
                            className="fa fa-caret-down"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </div>
                      <div className="col-lg-7 col-md-10">
                        <div className="item-head-body">
                          <a  style={{textDecoration: "none"}} href="matches.html">
                            <img
                              src="images/amfootball/team-logo1.png"
                              width="40"
                              height="40"
                              alt="team-logo1"
                            />
                          </a>
                          <span className="vs">vs</span>
                          <a  style={{textDecoration: "none"}} href="matches.html">
                            <img
                              src="images/amfootball/team-logo2.png"
                              width="40"
                              height="40"
                              alt="team-logo1"
                            />
                          </a>
                          <span className="info">
                            <span className="what">
                              National cup - semifinal
                            </span>
                            <span className="then">25 sep 2016 / 7:30 PM</span>
                          </span>
                          <span className="marker">live</span>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <div className="channel">
                          <img
                            src="images/common/channel-logo.png"
                            width="40"
                            height="40"
                            alt="channel-logo"
                          />
                          <span className="info">
                            <span className="what">
                              National cup - semifinal
                            </span>
                            <span className="then">25 sep 2016 / 7:30 PM</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="collapseOne"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingOne"
                  >
                    <div className="img-wrap">
                      <img
                        src="images/amfootball/exemple.jpeg"
                        alt="broad-img"
                      />
                    </div>
                    <div className="item-body bg-neutral-100 dark:bg-neutral-900">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="title text-neutral-900 dark:text-neutral-100">Match details</div>
                          <p className="text-neutral-800 dark:text-neutral-400">
                            Selvage mixtape coloring book, street art swag
                            sriracha activated charcoal vegan hammock selfies
                            distillery wayfarers dreamcatcher lyft beard.{" "}
                          </p>
                          <div className="title text-neutral-900 dark:text-neutral-100">Match Time</div>
                          <p className="text-neutral-800 dark:text-neutral-400">
                            7:30 PM, Saturday
                            <br />
                            29 Sep 2016
                          </p>
                          <div className="title text-neutral-900 dark:text-neutral-100">Stadium</div>
                          <p className="text-neutral-800 dark:text-neutral-400">
                            Fulham Rd, Fulham, London SW6 1HS, <br />
                            Stamford Bridge
                          </p>
                      
                          <a  style={{textDecoration: "none"}} href="upcoming-match.html" className="btn">
                            View match page
                          </a>
                        </div>
                        <div className="col-md-7">
                          <div className="title text-neutral-900 dark:text-neutral-100">Lineups</div>
                          <div className="lineup-list">
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="broadcast-item">
                  <div className="item-header" id="headingTwo">
                    <div className="row">
                      <div className="col-lg-1 col-md-2">
                        <a  style={{textDecoration: "none"}}
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseTwo"
                          className="arrow"
                        >
                          <i
                            className="fa fa-caret-down"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </div>
                      <div className="col-lg-7 col-md-10">
                        <div className="item-head-body">
                          <a  style={{textDecoration: "none"}} href="matches.html">
                            <img
                              src="images/amfootball/team-logo1.png"
                              width="40"
                              height="40"
                              alt="team-logo1"
                            />
                          </a>
                          <span className="vs">vs</span>
                          <a  style={{textDecoration: "none"}} href="matches.html">
                            <img
                              src="images/amfootball/team-logo2.png"
                              width="40"
                              height="40"
                              alt="team-logo1"
                            />
                          </a>
                          <span className="info">
                            <span className="what">
                              National cup - semifinal
                            </span>
                            <span className="then">25 sep 2016 / 7:30 PM</span>
                          </span>
                          <span className="marker">live</span>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <div className="channel">
                          <img
                            src="images/common/channel-logo.png"
                            width="40"
                            height="40"
                            alt="channel-logo"
                          />
                          <span className="info">
                            <span className="what">
                              National cup - semifinal
                            </span>
                            <span className="then">25 sep 2016 / 7:30 PM</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="collapseTwo"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                  >
                    <div className="img-wrap">
                      <img
                        src="images/amfootball/exemple.jpeg"
                        alt="broad-img"
                      />
                    </div>
                    <div className="item-body bg-neutral-100 dark:bg-neutral-900">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="title text-neutral-900 dark:text-neutral-100">Match details</div>
                          <p className="text-neutral-800 dark:text-neutral-400">
                            Selvage mixtape coloring book, street art swag
                            sriracha activated charcoal vegan hammock selfies
                            distillery wayfarers dreamcatcher lyft beard.{" "}
                          </p>
                          <div className="title text-neutral-900 dark:text-neutral-100">Match Time</div>
                          <p className="text-neutral-800 dark:text-neutral-400">
                            7:30 PM, Saturday
                            <br />
                            29 Sep 2016
                          </p>
                          <div className="title text-neutral-900 dark:text-neutral-100">Stadium</div>
                          <p className="text-neutral-800 dark:text-neutral-400">
                            Fulham Rd, Fulham, London SW6 1HS, <br />
                            Stamford Bridge
                          </p>
                      
                          <a  style={{textDecoration: "none"}} href="upcoming-match.html" className="btn">
                            View match page
                          </a>
                        </div>
                        <div className="col-md-7">
                          <div className="title text-neutral-900 dark:text-neutral-100">Lineups</div>
                          <div className="lineup-list">
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="broadcast-item">
                  <div className="item-header" id="headingThree">
                    <div className="row">
                      <div className="col-lg-1 col-md-2">
                        <a  style={{textDecoration: "none"}}
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseThree"
                          className="arrow"
                        >
                          <i
                            className="fa fa-caret-down"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </div>
                      <div className="col-lg-7 col-md-10">
                        <div className="item-head-body">
                          <a  style={{textDecoration: "none"}} href="matches.html">
                            <img
                              src="images/amfootball/team-logo1.png"
                              width="40"
                              height="40"
                              alt="team-logo1"
                            />
                          </a>
                          <span className="vs">vs</span>
                          <a  style={{textDecoration: "none"}} href="matches.html">
                            <img
                              src="images/amfootball/team-logo2.png"
                              width="40"
                              height="40"
                              alt="team-logo1"
                            />
                          </a>
                          <span className="info">
                            <span className="what">
                              National cup - semifinal
                            </span>
                            <span className="then">25 sep 2016 / 7:30 PM</span>
                          </span>
                          <span className="marker">live</span>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <div className="channel">
                          <img
                            src="images/common/channel-logo.png"
                            width="40"
                            height="40"
                            alt="channel-logo"
                          />
                          <span className="info">
                            <span className="what">
                              National cup - semifinal
                            </span>
                            <span className="then">25 sep 2016 / 7:30 PM</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="collapseThree"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree"
                  >
                    <div className="img-wrap">
                      <img
                        src="images/amfootball/exemple.jpeg"
                        alt="broad-img"
                      />
                    </div>
                    <div className="item-body bg-neutral-100 dark:bg-neutral-900">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="title text-neutral-900 dark:text-neutral-100">Match details</div>
                          <p className="text-neutral-800 dark:text-neutral-400">
                            Selvage mixtape coloring book, street art swag
                            sriracha activated charcoal vegan hammock selfies
                            distillery wayfarers dreamcatcher lyft beard.{" "}
                          </p>
                          <div className="title text-neutral-900 dark:text-neutral-100">Match Time</div>
                          <p className="text-neutral-800 dark:text-neutral-400">
                            7:30 PM, Saturday
                            <br />
                            29 Sep 2016
                          </p>
                          <div className="title text-neutral-900 dark:text-neutral-100">Stadium</div>
                          <p className="text-neutral-800 dark:text-neutral-400">
                            Fulham Rd, Fulham, London SW6 1HS, <br />
                            Stamford Bridge
                          </p>
                      
                          <a  style={{textDecoration: "none"}} href="upcoming-match.html" className="btn">
                            View match page
                          </a>
                        </div>
                        <div className="col-md-7">
                          <div className="title text-neutral-900 dark:text-neutral-100">Lineups</div>
                          <div className="lineup-list">
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="left">
                                <div className="number">
                                  <span>1</span>
                                </div>
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                              </div>
                              <div className="right">
                                <div className="name text-neutral-800 dark:text-neutral-400">Borjan (GK)</div>
                                <div className="number">
                                  <span>2</span>
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
            </div>
          </div>
        </div>

        <div className="broadcast-sponsors">
          <div className="list">
            <div className="foot-container">
              <div className="row">
                <div className="col-sm-3 col-xs-6 text-center">
                  <img
                    className="image-width"
                    src="images/common/sponsor-img3.png"
                    alt="sponsor-img"
                  />
                </div>
                <div className="col-sm-3 col-xs-6 text-center">
                  <img
                    className="image-width"
                    src="images/common/sponsor-img.png"
                    alt="sponsor-img"
                  />
                </div>
                <div className="col-sm-3 col-xs-6 text-center">
                  <img
                    className="image-width"
                    src="images/common/sponsor-img1.png"
                    alt="sponsor-img"
                  />
                </div>
                <div className="col-sm-3 col-xs-6 text-center">
                  <img
                    className="dota-csgo-image image-width"
                    src="images/common/sponsor-img2.png"
                    alt="sponsor-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Match;
