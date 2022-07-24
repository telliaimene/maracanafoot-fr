


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

function Coupe () {
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
                            <li><a href="index.html">Home</a>/</li>
                            <li>Coupe</li>
                        </ul>
                        <h1>Coupe</h1>
                    </div>
                </div>
            </div>	
        </div>
    </div>
</section>

<section className="standing-cup">
    <div className="foot-container">
        <div className="row">
            <div className="col-md-12">
                <h4>Coupe d'algérie</h4>
                <ul className="tab-filters">
                    <li className="active"><a href="#qualification">qualification</a></li>
                    <li><a href="#quarterfinal">quarts de final</a></li>
                    <li><a href="#semifinal">demi-finales</a></li>
                    <li><a href="#final">Finale</a></li>
                </ul>
            </div>
            <div className="col-md-12 overflow-scroll">
                <div className="tab-content">
                    <div className="cup-body tab-pane active" id="qualification">
                    </div>
                    <div className="cup-body tab-pane" id="quarterfinal">
                    </div>
                    <div className="cup-body tab-pane" id="semifinal">
                    </div>
                    <div className="cup-body tab-pane" id="final">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
 </> )
}
export default Coupe;