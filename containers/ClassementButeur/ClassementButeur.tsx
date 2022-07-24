// <!--STANDING TABLE WRAP BEGIN-->
import React, { FC, ReactNode, useEffect , useState} from "react";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import { UserID } from "../../store/login/auth";
import {Helmet} from 'react-helmet'
import { useAppDispatch, useAppSelector } from "../../store/hooks";
//import Script from "next/script"
import Header from  "../../components/Foot/header";

export interface PageSingleStandingProps {
    classNameName?: string;
  }
  
  
  const PageSingleStanding: FC<PageSingleStandingProps> = ({
    classNameName = "",
  }) => {
  const userId = useAppSelector(UserID);

  return(
   <>
   {/* <HeaderContainer user={userId}  /> */}
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


    <section className="standing-table-wrap">
        <div className="foot-container">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <h4 className="text-neutral-900 dark:text-neutral-100">Premier league</h4>
                    <br />
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
                     <i className="fa fa-calendar text-neutral-800 dark:text-neutral-200" aria-hidden="true"></i>
                     2016 - 2017
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">
                        2020 - 2021
                        </a>
                      </li>
                      <li>
                        <a href="#">
                        2019 - 2020
                        </a>
                      </li>
                      <li>
                        <a href="#">
                        2016 - 2017
                        </a>
                      </li>
                  
                    </ul>
                  </li>
                </ul>
              </div>
              
              </div>
                    <ul className="tab-filters" role="tablist">
                        <li className="active "><a className="dark:text-neutral-200" style={{textDecoration: "none"}} href="#2017" role="tab" data-toggle="tab">Général</a></li>
                        <li><a className="dark:text-neutral-200" style={{textDecoration: "none"}} href="#2016" role="tab" data-toggle="tab">Domicile</a></li>
                        <li><a className="dark:text-neutral-200" style={{textDecoration: "none"}} href="#2015" role="tab" data-toggle="tab">Extérieur</a></li>
                        <li><a className="dark:text-neutral-200" style={{textDecoration: "none"}} href="#2014" role="tab" data-toggle="tab">Meilleure Défense</a></li>
                        <li><a className="dark:text-neutral-200" style={{textDecoration: "none"}} href="#2013" role="tab" data-toggle="tab">Meilleure Attaque</a></li>
                        <li><a className="dark:text-neutral-200" style={{textDecoration: "none"}} href="#2012" role="tab" data-toggle="tab">Classement Live</a></li>
                    </ul>
                </div>

                <div className="col-md-12 col-sm-12 col-xs-12 overflow-scroll standings-table"> 
                    <div className="tab-content">
                        <div className="tab-pane fade-foot in active" id="2017" role="tabpanel">
                            <table className="standing-full-foot">
                                <tr>
                                    <th>club</th>
                                    <th>joué</th>
                                    <th>gagné</th>
                                    <th>null</th>
                                    <th>perdu</th>
                                    <th>différence</th>
                                    <th>points</th>
                                    <th>forme</th>
                                    <th>prochain</th>
                                </tr>
                                <tr >
                                    <td className="up dark:text-neutral-800">
                                        <i className="fa fa-caret-up" aria-hidden="true"></i> 1 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo1.png" width="30" height="30" alt="team-logo" /></span>Team 1
                                    </td>
                                    <td className="dark:text-neutral-800">11</td>
                                    <td className="dark:text-neutral-800">8</td>
                                    <td className="dark:text-neutral-800">2</td>
                                    <td className="dark:text-neutral-800">1</td>
                                    <td className="dark:text-neutral-800">+16</td>
                                    <td className="points"><span >26</span></td>
                                    <td className="form">
                                        <span className="win">w</span>
                                        <span className="drawn">d</span>
                                        <span className="lose">l</span>
                                        <span className="win">w</span>
                                        <span className="win">w</span>
                                    </td>
                                    <td  className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="club-stats.html"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo1.png" width="30" height="30" alt="team-logo" /></a></td>
                                </tr>
                                <tr>
                                    <td  className="down dark:text-neutral-800">
                                        <i className="fa fa-caret-down" aria-hidden="true"></i> 2 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo1.png" width="30" height="30" alt="team-logo" /> </span>Team 2
                                    </td>
                                    <td  className="dark:text-neutral-800">11</td>
                                    <td  className="dark:text-neutral-800">8</td>
                                    <td  className="dark:text-neutral-800">1</td>
                                    <td  className="dark:text-neutral-800">2</td>
                                    <td  className="dark:text-neutral-800">+14</td>
                                    <td className="points"><span>23</span></td>
                                    <td className="form">
                                        <span className="win">w</span>
                                        <span className="drawn">d</span>
                                        <span className="lose">l</span>
                                        <span className="win">w</span>
                                        <span className="lose">l</span>
                                    </td>
                                    <td  className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="club-stats.html"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo1.png" width="30" height="30" alt="team-logo" /></a></td>
                                </tr>
                                <tr>
                                    <td  className="down dark:text-neutral-800">
                                        <i className="fa fa-caret-down" aria-hidden="true"></i> 2 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo1.png" width="30" height="30" alt="team-logo" /> </span>Team 3
                                    </td>
                                    <td  className="dark:text-neutral-800">11</td>
                                    <td  className="dark:text-neutral-800">8</td>
                                    <td  className="dark:text-neutral-800">1</td>
                                    <td  className="dark:text-neutral-800">2</td>
                                    <td  className="dark:text-neutral-800">+13</td>
                                    <td className="points"><span>23</span></td>
                                    <td className="form">
                                        <span className="win">w</span>
                                        <span className="lose">l</span>
                                        <span className="lose">l</span>
                                        <span className="win">w</span>
                                        <span className="drawn">d</span>
                                    </td>
                                    <td  className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="club-stats.html"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo1.png" width="30" height="30" alt="team-logo" /></a></td>
                                </tr>
                                <tr>
                                    <td  className="down dark:text-neutral-800">
                                        <i className="fa fa-caret-down" aria-hidden="true"></i> 2 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo1.png" width="30" height="30" alt="team-logo" /> </span>Team 4
                                    </td>
                                    <td  className="dark:text-neutral-800">11</td>
                                    <td  className="dark:text-neutral-800">8</td>
                                    <td  className="dark:text-neutral-800">1</td>
                                    <td  className="dark:text-neutral-800">2</td>
                                    <td  className="dark:text-neutral-800">+10</td>
                                    <td className="points"><span>23</span></td>
                                    <td className="form">
                                        <span className="lose">l</span>
                                        <span className="drawn">d</span>
                                        <span className="win">w</span>
                                        <span className="win">w</span>
                                        <span className="win">w</span>
                                    </td>
                                    <td  className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="club-stats.html"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo1.png" width="30" height="30" alt="team-logo" /></a></td>
                                </tr>
                                <tr>
                                    <td  className="none dark:text-neutral-800">
                                        <i className="fa fa-circle" aria-hidden="true"></i> 3 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo1.png" width="30" height="30" alt="team-logo" /> </span>Team 5
                                    </td>
                                    <td  className="dark:text-neutral-800">11</td>
                                    <td  className="dark:text-neutral-800">8</td>
                                    <td  className="dark:text-neutral-800">2</td>
                                    <td  className="dark:text-neutral-800">2</td>
                                    <td  className="dark:text-neutral-800">+16</td>
                                    <td className="points"><span>20</span></td>
                                    <td className="form">
                                        <span className="win">w</span>
                                        <span className="drawn">d</span>
                                        <span className="lose">l</span>
                                        <span className="win">w</span>
                                        <span className="win">w</span>
                                    </td>
                                    <td  className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="club-stats.html"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo1.png" width="30" height="30" alt="team-logo" /></a></td>
                                </tr>
                            </table>
                        </div>
                        <div className="tab-pane fade-foot" id="2016" role="tabpanel">
                            <table className="standing-full-foot">
                                <tr>
                                   <th>club</th>
                                    <th>joué</th>
                                    <th>gagné</th>
                                    <th>null</th>
                                    <th>perdu</th>
                                    <th>différence</th>
                                    <th>points</th>
                                    <th>forme</th>
                                    <th>prochain</th>
                                </tr>
                                <tr>
                                    <td  className="up dark:text-neutral-800">
                                        <i className="fa fa-caret-up" aria-hidden="true"></i> 1 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/amfootball/team-logo1.png" width="30" height="30" alt="team-logo" /></span>Team 5
                                    </td>
                                    <td  className="dark:text-neutral-800">11</td>
                                    <td  className="dark:text-neutral-800">8</td>
                                    <td  className="dark:text-neutral-800">2</td>
                                    <td  className="dark:text-neutral-800">1</td>
                                    <td  className="dark:text-neutral-800">+16</td>
                                    <td className="points"><span>26</span></td>
                                    <td className="form">
                                        <span className="win">w</span>
                                        <span className="drawn">d</span>
                                        <span className="lose">l</span>
                                        <span className="win">w</span>
                                        <span className="win">w</span>
                                    </td>
                                    <td  className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="club-stats.html"><img src="images/hockey/team-logo2.png" width="30" height="30" alt="team-logo"/></a></td>
                                </tr>
                                <tr>
                                    <td  className="down dark:text-neutral-800">
                                        <i className="fa fa-caret-down" aria-hidden="true"></i> 1 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/hockey/team-logo2.png" width="30" height="30" alt="team-logo"/> </span>Team 1
                                    </td>
                                    <td  className="dark:text-neutral-800">11</td>
                                    <td  className="dark:text-neutral-800">8</td>
                                    <td  className="dark:text-neutral-800">2</td>
                                    <td  className="dark:text-neutral-800">1</td>
                                    <td  className="dark:text-neutral-800">+16</td>
                                    <td className="points"><span>26</span></td>
                                    <td className="form">
                                        <span className="win">w</span>
                                        <span className="drawn">d</span>
                                        <span className="lose">l</span>
                                        <span className="win">w</span>
                                        <span className="win">w</span>
                                    </td>
                                    <td  className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="club-stats.html"><img src="images/hockey/team-logo1.png" width="30" height="30" alt="team-logo"/></a></td>
                                </tr>
                                <tr>
                                    <td  className="down dark:text-neutral-800">
                                        <i className="fa fa-caret-down" aria-hidden="true"></i> 1 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/hockey/team-logo3.png" width="30" height="30" alt="team-logo"/> </span>Team 2
                                    </td>
                                    <td  className="dark:text-neutral-800">11</td>
                                    <td  className="dark:text-neutral-800">8</td>
                                    <td  className="dark:text-neutral-800">2</td>
                                    <td  className="dark:text-neutral-800">1</td>
                                    <td  className="dark:text-neutral-800">+16</td>
                                    <td className="points"><span>26</span></td>
                                    <td className="form">
                                        <span className="win">w</span>
                                        <span className="drawn">d</span>
                                        <span className="lose">l</span>
                                        <span className="win">w</span>
                                        <span className="win">w</span>
                                    </td>
                                    <td  className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="club-stats.html"><img src="images/hockey/team-logo4.png" width="30" height="30" alt="team-logo"/></a></td>
                                </tr>
                                <tr>
                                    <td  className="down dark:text-neutral-800">
                                        <i className="fa fa-caret-down" aria-hidden="true"></i> 1 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/hockey/team-logo4.png" width="30" height="30" alt="team-logo"/> </span>Team 3
                                    </td>
                                    <td  className="dark:text-neutral-800">11</td>
                                    <td  className="dark:text-neutral-800">8</td>
                                    <td  className="dark:text-neutral-800">2</td>
                                    <td  className="dark:text-neutral-800">1</td>
                                    <td  className="dark:text-neutral-800">+16</td>
                                    <td className="points"><span>26</span></td>
                                    <td className="form">
                                        <span className="win">w</span>
                                        <span className="drawn">d</span>
                                        <span className="lose">l</span>
                                        <span className="win">w</span>
                                        <span className="win">w</span>
                                    </td>
                                    <td  className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="club-stats.html"><img src="images/hockey/team-logo3.png" width="30" height="30" alt="team-logo"/></a></td>
                                </tr>
                                <tr>
                                    <td  className="none dark:text-neutral-800">
                                        <i className="fa fa-circle" aria-hidden="true"></i> 1 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/hockey/team-logo5.png" width="30" height="30" alt="team-logo"/> </span>Team 4
                                    </td>
                                    <td  className="dark:text-neutral-800">11</td>
                                    <td  className="dark:text-neutral-800">8</td>
                                    <td  className="dark:text-neutral-800">2</td>
                                    <td  className="dark:text-neutral-800">1</td>
                                    <td  className="dark:text-neutral-800">+16</td>
                                    <td className="points"><span>26</span></td>
                                    <td className="form">
                                        <span className="win">w</span>
                                        <span className="drawn">d</span>
                                        <span className="lose">l</span>
                                        <span className="win">w</span>
                                        <span className="win">w</span>
                                    </td>
                                    <td  className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="club-stats.html"><img src="images/hockey/team-logo1.png" width="30" height="30" alt="team-logo"/></a></td>
                                </tr>
                            </table>
                        </div>
                        <div className="tab-pane fade-foot" id="2015" role="tabpanel">
                            <table className="standing-full-foot">
                                <tr>
                                   <th>club</th>
                                    <th>joué</th>
                                    <th>gagné</th>
                                    <th>null</th>
                                    <th>perdu</th>
                                    <th>différence</th>
                                    <th>points</th>
                                    <th>forme</th>
                                    <th>prochain</th>
                                </tr>
                                <tr>
                                    <td  className="up dark:text-neutral-800">
                                        <i className="fa fa-caret-up" aria-hidden="true"></i> 1 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/hockey/team-logo1.png" width="30" height="30" alt="team-logo"/> </span>Team 1
                                    </td>
                                    <td  className="dark:text-neutral-800">11</td>
                                    <td  className="dark:text-neutral-800">8</td>
                                    <td  className="dark:text-neutral-800">2</td>
                                    <td  className="dark:text-neutral-800">1</td>
                                    <td  className="dark:text-neutral-800">+16</td>
                                    <td className="points"><span>26</span></td>
                                    <td className="form">
                                        <span className="win">w</span>
                                        <span className="drawn">d</span>
                                        <span className="lose">l</span>
                                        <span className="win">w</span>
                                        <span className="win">w</span>
                                    </td>
                                    <td  className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="club-stats.html"><img src="images/hockey/team-logo2.png" width="30" height="30" alt="team-logo"/></a></td>
                                </tr>
                                <tr>
                                    <td  className="down dark:text-neutral-800">
                                        <i className="fa fa-caret-down" aria-hidden="true"></i> 2 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/hockey/team-logo2.png" width="30" height="30" alt="team-logo"/> </span>Team 2
                                    </td>
                                    <td  className="dark:text-neutral-800">11</td>
                                    <td  className="dark:text-neutral-800">8</td>
                                    <td  className="dark:text-neutral-800">1</td>
                                    <td  className="dark:text-neutral-800">2</td>
                                    <td  className="dark:text-neutral-800">+14</td>
                                    <td className="points"><span>23</span></td>
                                    <td className="form">
                                        <span className="win">w</span>
                                        <span className="drawn">d</span>
                                        <span className="lose">l</span>
                                        <span className="win">w</span>
                                        <span className="lose">l</span>
                                    </td>
                                    <td  className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="club-stats.html"><img src="images/hockey/team-logo1.png" width="30" height="30" alt="team-logo"/></a></td>
                                </tr>
                                <tr>
                                    <td  className="down dark:text-neutral-800">
                                        <i className="fa fa-caret-down" aria-hidden="true"></i> 2 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/hockey/team-logo3.png" width="30" height="30" alt="team-logo"/> </span>Team 3
                                    </td>
                                    <td  className="dark:text-neutral-800">11</td>
                                    <td  className="dark:text-neutral-800">8</td>
                                    <td  className="dark:text-neutral-800">1</td>
                                    <td  className="dark:text-neutral-800">2</td>
                                    <td  className="dark:text-neutral-800">+13</td>
                                    <td className="points"><span>23</span></td>
                                    <td className="form">
                                        <span className="win">w</span>
                                        <span className="lose">l</span>
                                        <span className="lose">l</span>
                                        <span className="win">w</span>
                                        <span className="drawn">d</span>
                                    </td>
                                    <td  className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="club-stats.html"><img src="images/hockey/team-logo4.png" width="30" height="30" alt="team-logo"/></a></td>
                                </tr>
                                <tr>
                                    <td  className="down dark:text-neutral-800">
                                        <i className="fa fa-caret-down" aria-hidden="true"></i> 2 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/hockey/team-logo4.png" width="30" height="30" alt="team-logo"/> </span>Team 4
                                    </td>
                                    <td  className="dark:text-neutral-800">11</td>
                                    <td  className="dark:text-neutral-800">8</td>
                                    <td  className="dark:text-neutral-800">1</td>
                                    <td  className="dark:text-neutral-800">2</td>
                                    <td  className="dark:text-neutral-800">+10</td>
                                    <td className="points"><span>23</span></td>
                                    <td className="form">
                                        <span className="lose">l</span>
                                        <span className="drawn">d</span>
                                        <span className="win">w</span>
                                        <span className="win">w</span>
                                        <span className="win">w</span>
                                    </td>
                                    <td  className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="club-stats.html"><img src="images/hockey/team-logo3.png" width="30" height="30" alt="team-logo"/></a></td>
                                </tr>
                                <tr>
                                    <td  className="none dark:text-neutral-800">
                                        <i className="fa fa-circle" aria-hidden="true"></i> 3 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/hockey/team-logo5.png" width="30" height="30" alt="team-logo"/> </span>Team 5
                                    </td>
                                    <td  className="dark:text-neutral-800">11</td>
                                    <td  className="dark:text-neutral-800">8</td>
                                    <td  className="dark:text-neutral-800">2</td>
                                    <td  className="dark:text-neutral-800">2</td>
                                    <td  className="dark:text-neutral-800">+16</td>
                                    <td className="points"><span>20</span></td>
                                    <td className="form">
                                        <span className="win">w</span>
                                        <span className="drawn">d</span>
                                        <span className="lose">l</span>
                                        <span className="win">w</span>
                                        <span className="win">w</span>
                                    </td>
                                    <td  className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="club-stats.html"><img src="images/hockey/team-logo1.png" width="30" height="30" alt="team-logo"/></a></td>
                                </tr>
                            </table>
                        </div>
                        <div className="tab-pane fade-foot" id="2014" role="tabpanel">
                            <table className="standing-full-foot">
                                <tr>
                                   <th>club</th>
                                    <th>joué</th>
                                    <th>gagné</th>
                                    <th>null</th>
                                    <th>perdu</th>
                                    <th>différence</th>
                                    <th>points</th>
                                    <th>forme</th>
                                    <th>prochain</th>
                                </tr>
                                <tr>
                                    <td  className="up dark:text-neutral-800">
                                        <i className="fa fa-caret-up" aria-hidden="true"></i> 1 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/hockey/team-logo1.png" width="30" height="30" alt="team-logo"/> </span>Team 5
                                    </td>
                                    <td  className="dark:text-neutral-800">11</td>
                                    <td  className="dark:text-neutral-800">8</td>
                                    <td  className="dark:text-neutral-800">2</td>
                                    <td  className="dark:text-neutral-800">1</td>
                                    <td  className="dark:text-neutral-800">+16</td>
                                    <td className="points"><span>26</span></td>
                                    <td className="form">
                                        <span className="win">w</span>
                                        <span className="drawn">d</span>
                                        <span className="lose">l</span>
                                        <span className="win">w</span>
                                        <span className="win">w</span>
                                    </td>
                                    <td  className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="club-stats.html"><img src="images/hockey/team-logo2.png" width="30" height="30" alt="team-logo"/></a></td>
                                </tr>
                                <tr>
                                    <td  className="down dark:text-neutral-800">
                                        <i className="fa fa-caret-down" aria-hidden="true"></i> 1 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/hockey/team-logo2.png" width="30" height="30" alt="team-logo"/> </span>Team 1
                                    </td>
                                    <td  className="dark:text-neutral-800">11</td>
                                    <td  className="dark:text-neutral-800">8</td>
                                    <td  className="dark:text-neutral-800">2</td>
                                    <td  className="dark:text-neutral-800">1</td>
                                    <td  className="dark:text-neutral-800">+16</td>
                                    <td className="points"><span>26</span></td>
                                    <td className="form">
                                        <span className="win">w</span>
                                        <span className="drawn">d</span>
                                        <span className="lose">l</span>
                                        <span className="win">w</span>
                                        <span className="win">w</span>
                                    </td>
                                    <td  className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="club-stats.html"><img src="images/hockey/team-logo1.png" width="30" height="30" alt="team-logo"/></a></td>
                                </tr>
                                <tr>
                                    <td  className="down dark:text-neutral-800">
                                        <i className="fa fa-caret-down" aria-hidden="true"></i> 1 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/hockey/team-logo3.png" width="30" height="30" alt="team-logo"/> </span>Team 2
                                    </td>
                                    <td  className="dark:text-neutral-800">11</td>
                                    <td  className="dark:text-neutral-800">8</td>
                                    <td  className="dark:text-neutral-800">2</td>
                                    <td  className="dark:text-neutral-800">1</td>
                                    <td  className="dark:text-neutral-800">+16</td>
                                    <td className="points"><span>26</span></td>
                                    <td className="form">
                                        <span className="win">w</span>
                                        <span className="drawn">d</span>
                                        <span className="lose">l</span>
                                        <span className="win">w</span>
                                        <span className="win">w</span>
                                    </td>
                                    <td  className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="club-stats.html"><img src="images/hockey/team-logo4.png" width="30" height="30" alt="team-logo"/></a></td>
                                </tr>
                                <tr>
                                    <td  className="down dark:text-neutral-800">
                                        <i className="fa fa-caret-down" aria-hidden="true"></i> 1 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/hockey/team-logo4.png" width="30" height="30" alt="team-logo"/> </span>Team 3
                                    </td>
                                    <td  className="dark:text-neutral-800">11</td>
                                    <td  className="dark:text-neutral-800">8</td>
                                    <td  className="dark:text-neutral-800">2</td>
                                    <td  className="dark:text-neutral-800">1</td>
                                    <td  className="dark:text-neutral-800">+16</td>
                                    <td className="points"><span>26</span></td>
                                    <td className="form">
                                        <span className="win">w</span>
                                        <span className="drawn">d</span>
                                        <span className="lose">l</span>
                                        <span className="win">w</span>
                                        <span className="win">w</span>
                                    </td>
                                    <td  className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="club-stats.html"><img src="images/hockey/team-logo3.png" width="30" height="30" alt="team-logo"/></a></td>
                                </tr>
                                <tr>
                                    <td  className="none dark:text-neutral-800">
                                        <i className="fa fa-circle" aria-hidden="true"></i> 1 <span className="team"><img style={{display:'inline-flex' , marginLeft:"10px"}} src="images/hockey/team-logo5.png" width="30" height="30" alt="team-logo"/> </span>Team 4
                                    </td>
                                    <td  className="dark:text-neutral-800">11</td>
                                    <td  className="dark:text-neutral-800">8</td>
                                    <td  className="dark:text-neutral-800">2</td>
                                    <td  className="dark:text-neutral-800">1</td>
                                    <td  className="dark:text-neutral-800">+16</td>
                                    <td className="points"><span>26</span></td>
                                    <td className="form">
                                        <span className="win">w</span>
                                        <span className="drawn">d</span>
                                        <span className="lose">l</span>
                                        <span className="win">w</span>
                                        <span className="win">w</span>
                                    </td>
                                    <td  className="dark:text-neutral-800"><a style={{textDecoration: "none"}} href="club-stats.html"><img src="images/hockey/team-logo1.png" width="30" height="30" alt="team-logo"/></a></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-12 col-sm-12 col-xs-12">
                    <p>Pabst irony tattooed, synth sriracha selvage pok pok. Wayfarers kinfolk sartorial, helvetica you probably haven't heard of them tumeric venmo deep v mixtape semiotics brunch.</p>
                </div> */}
            </div>
        </div>
    </section>
 
   
 


    



</>



)}
export default PageSingleStanding;
