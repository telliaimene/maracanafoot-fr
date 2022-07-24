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

      <div className="inner-banner-header wf100">
            <h1 data-generated="Groups">Groupes</h1>
           
         </div>
      
         <div className="main-content innerpagebg wf100">
       
            <div className="team wf100 p80">
       
               <div className="matach-groups">
                  <div className="foot-container">
                     <div className="row">
                 
                        <div className="col-lg-3 col-md-6">
                           <div className="group-box">
                              <h6>Group A</h6>
                              <ul>
                                 <li className="dark:text-neutral-300 text-neutral-800" ><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/ru-flag.jpg" alt=""/>Russia </li>
                                 <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/sa-flag.jpg" alt=""/>Saudia Arabia </li>
                                 <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/eg-flag.jpg" alt=""/>Egypt</li>
                                 <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/ur-flag.jpg" alt=""/>Uruguay</li>
                              </ul>
                           </div>
                        </div>
                  
                        <div className="col-lg-3 col-md-6">
                           <div className="group-box">
                              <h6>Group B</h6>
                              <ul>
                              <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/ru-flag.jpg" alt=""/>Russia </li>
                                 <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/sa-flag.jpg" alt=""/>Saudia Arabia </li>
                                 <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/eg-flag.jpg" alt=""/>Egypt</li>
                                 <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/ur-flag.jpg" alt=""/>Uruguay</li>
                              </ul>
                           </div>
                        </div>
                  
                        <div className="col-lg-3 col-md-6">
                           <div className="group-box">
                              <h6>Group C</h6>
                              <ul>
                              <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/ru-flag.jpg" alt=""/>Russia </li>
                                 <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/sa-flag.jpg" alt=""/>Saudia Arabia </li>
                                 <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/eg-flag.jpg" alt=""/>Egypt</li>
                                 <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/ur-flag.jpg" alt=""/>Uruguay</li>
                              </ul>
                           </div>
                        </div>
                     
                        <div className="col-lg-3 col-md-6">
                           <div className="group-box">
                              <h6>Group D</h6>
                              <ul>
                              <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/ru-flag.jpg" alt=""/>Russia </li>
                                 <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/sa-flag.jpg" alt=""/>Saudia Arabia </li>
                                 <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/eg-flag.jpg" alt=""/>Egypt</li>
                                 <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/ur-flag.jpg" alt=""/>Uruguay</li>
                              </ul>
                           </div>
                        </div>
                   
                        <div className="col-lg-3 col-md-6">
                           <div className="group-box">
                              <h6>Group E</h6>
                              <ul>
                              <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/ru-flag.jpg" alt=""/>Russia </li>
                                 <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/sa-flag.jpg" alt=""/>Saudia Arabia </li>
                                 <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/eg-flag.jpg" alt=""/>Egypt</li>
                                 <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/ur-flag.jpg" alt=""/>Uruguay</li>
                              </ul>
                           </div>
                        </div>
                      
                        <div className="col-lg-3 col-md-6">
                           <div className="group-box">
                              <h6>Group F</h6>
                              <ul>
                              <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/ru-flag.jpg" alt=""/>Russia </li>
                                 <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/sa-flag.jpg" alt=""/>Saudia Arabia </li>
                                 <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/eg-flag.jpg" alt=""/>Egypt</li>
                                 <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/ur-flag.jpg" alt=""/>Uruguay</li>
                              </ul>
                           </div>
                        </div>
                      
                        <div className="col-lg-3 col-md-6">
                           <div className="group-box">
                              <h6>Group G</h6>
                              <ul>
                              <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/ru-flag.jpg" alt=""/>Russia </li>
                                 <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/sa-flag.jpg" alt=""/>Saudia Arabia </li>
                                 <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/eg-flag.jpg" alt=""/>Egypt</li>
                                 <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/ur-flag.jpg" alt=""/>Uruguay</li>
                              </ul>
                           </div>
                        </div>
              
                        <div className="col-lg-3 col-md-6">
                           <div className="group-box ">
                              <h6>Group H</h6>
                              <ul>
                              <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/ru-flag.jpg" alt=""/>Russia </li>
                                 <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/sa-flag.jpg" alt=""/>Saudia Arabia </li>
                                 <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/eg-flag.jpg" alt=""/>Egypt</li>
                                 <li className="dark:text-neutral-300 text-neutral-800"><img style={{display:"inline-flex", marginRight:"10px"}}src="/images/flags/ur-flag.jpg" alt=""/>Uruguay</li>
                              </ul>
                           </div>
                        </div>
           
                     </div>
                  </div>
               </div>
    
            </div>
      
         </div>

    </>
  );
}

export default Match_detail;
