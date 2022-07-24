
import React, { FC, ReactNode, useEffect , useState} from "react";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import { UserID } from "../../store/login/auth";
import {useAppSelector } from "../../store/hooks";
  
  const PageSingleOffline = () => {
  const userId = useAppSelector(UserID);

  return(
   <>
   <HeaderContainer user={userId}  />
   
   <div className="error-page">
   <div className="error-wrap offline">
    <div className="foot-container">
        <div className="row">
            <div className="col-md-12">
                <a href="/" className="error-logo"><img src="images/amfootball/error-logo.png" alt="logo"/></a>
            </div>
        </div>
    </div>
    <div className="offline-title">
        <div className="foot-container">
            <div className="row">
                <div className="col-md-12">
                    <span className="small-text">Site est</span>
                    <span className="big-text">sous</span>
                    <span className="big-text">Maintenance</span>
                    {/* <ul className="offline-socials">
                        <li><a href="#"><i className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-google" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                    </ul> */}
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<section className="standing-table-wrap"></section>

    



</>



)}
export default PageSingleOffline;