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
                      <a href="index.html">Main</a>
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

      <section className="player-single-wrap">
        <div className="foot-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="captain-bage">Captain &nbsp;&nbsp;</div>
              <h4 className="player-name  mt-2 text-neutral-900 dark:text-neutral-100">Benjamin Lecomte</h4>
            </div>
            <div className="col-lg-6">
              <div className="player-photo">
                <div className="number text-neutral-900 dark:text-neutral-100">40</div>
                <img
                  className="img-responsive"
                  src="images/amfootball/single-player-photo.png"
                  alt="player"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="player-info">
                <h6 className="player-info-title">Informations</h6>
                <div className="summary">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-5">
                      <div className="item dark:text-neutral-300 text-neutral-800">Nom complet:</div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-8 col-7 dark:text-neutral-100 text-neutral-800">
                      Benjamin Lecomte
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-4 col-5">
                      <div className="item dark:text-neutral-300 text-neutral-800">Âge:</div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-8 col-7 dark:text-neutral-100 text-neutral-800">24</div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-5">
                      <div className="item dark:text-neutral-300 text-neutral-800">Dit:</div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-8 col-7 dark:text-neutral-100 text-neutral-800">
                      Benjamin Lecomte
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-4 col-5">
                      <div className="item dark:text-neutral-300 text-neutral-800">Taille:</div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-8 col-7 dark:text-neutral-100 text-neutral-800">186cm</div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-5">
                      <div className="item dark:text-neutral-300 text-neutral-800">Nationalité:</div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-8 col-7 dark:text-neutral-100 text-neutral-800">
                      <img src="images/common/fr-flag.png" alt="flag" style={{display:"inline-flex", marginRight:"2px"}} />
                      France
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-4 col-5">
                      <div className="item dark:text-neutral-300 text-neutral-800">Poids:</div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-8 col-7 dark:text-neutral-100 text-neutral-800">78Kg</div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-5">
                      <div className="item dark:text-neutral-300 text-neutral-800">Poste:</div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-7 dark:text-neutral-100 text-neutral-800">
                      Gardien de but
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-5">
                      <div className="item dark:text-neutral-300 text-neutral-800">Numéro:</div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-7 dark:text-neutral-100 text-neutral-800">40</div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-5">
                      <div className="item dark:text-neutral-300 text-neutral-800">Club actuel:</div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-7 dark:text-neutral-100 text-neutral-800">AS Monaco</div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-5">
                      <div className="item dark:text-neutral-300 text-neutral-800">Naissance:</div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-7 dark:text-neutral-100 text-neutral-800">26-04-1991</div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-5">
                      <div className="item dark:text-neutral-300 text-neutral-800">Lieu:</div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-7 dark:text-neutral-100 text-neutral-800 ">Paris</div>
                  </div>
                </div>
                <h6>L'historique du club</h6>
                <div className="overflow-scroll">
                  <table>
                    <tr>
                      <th>Saison</th>
                      <th className="club">Club</th>
                      <th>Matchs</th>
                      <th>Buts</th>
                    </tr>
                    <tr>
                      <td>2016/2017</td>
                      <td className="club">
                        <img
                        style={{display:"inline-flex", marginRight:"10px"}}
                          src="images/amfootball/team-logo1.png"
                          width="30"
                          height="30"
                          alt="trophy"
                        />{" "}
                        International
                      </td>
                      <td>27</td>
                      <td>
                        <span>10</span>
                      </td>
                    </tr>
                    <tr>
                      <td>2016/2017</td>
                      <td className="club">
                        <img
                            style={{display:"inline-flex", marginRight:"10px"}}
                          src="images/amfootball/team-logo2.png"
                          width="30"
                          height="30"
                          alt="trophy"
                        />{" "}
                        International
                      </td>
                      <td>27</td>
                      <td>
                        <span>10</span>
                      </td>
                    </tr>
                  </table>
                </div>
                <h6 className="dark:text-neutral-100 text-neutral-800">Â propos</h6>
                <p className="dark:text-neutral-100 text-neutral-800">
                  Pabst irony tattooed, synth sriracha selvage pok pok.
                  Wayfarers kinfolk sartorial, helvetica you{" "}
                </p>
                <h6 className="dark:text-neutral-100 text-neutral-800">Les médailles</h6>
                <ul className="player-trophey">
                  <li>
                    <img
                      src="images/common/am-trophey1.png"
                      width="100"
                      height="150"
                      alt="trophy"
                    />
                    <div className="year">2012</div>
                  </li>
                  <li>
                    <img
                      src="images/common/am-trophey.png"
                      width="100"
                      height="150"
                      alt="trophy"
                    />
                    <div className="year">2015</div>
                  </li>
                  <li>
                    <img
                      src="images/common/am-trophey2.png"
                      width="100"
                      height="150"
                      alt="trophy"
                    />
                    <div className="year">2017</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <p className="dark:text-neutral-100 text-neutral-800">
                Pabst irony tattooed, synth sriracha selvage pok pok. Wayfarers
                kinfolk sartorial, helvetica you probably haven't heard of them
                tumeric venmo deep v mixtape semiotics brunch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Match;
