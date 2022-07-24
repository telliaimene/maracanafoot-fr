import Header from "../../components/Header/Header";
import SubHeader from "../../components/Header/SubHeader";
import React, { FC } from "react";
import { useAppSelector } from "../../store/hooks";
import { selectCurrentPageData } from "../../store/pages/pages";

export interface CommentsMatchProps {
  className?: string;
}

const CommentsMatch: FC<CommentsMatchProps> = ({ className = "" }) => {
  
  return<>
    <section className="live-timeline-text-stream">
    <div className="foot-container">
        <div className="row">
            <div className="col-md-8">
                <h6 style={{paddingTop: "20px",paddingBottom: "21px",fontSize:"28px",fontFamily: "Raleway, sans-serif", fontWeight: "900",textTransform: "uppercase"}}>COMMENTAIRES</h6>
                <div className="team-timeline">
                    <div className="item-wrap">
                        <div className="item-info">
                            <div className="time">65"</div>
                            <div className="point event"><img src="images/common/timeline-goal.jpg" alt="timeline-goal"/></div>
                        </div>
                        <div className="item bg-neutral-100 dark:bg-neutral-800 ">
                            <div className="avatar"><img src="images/amfootball/team-logo1.png" alt="timeline-goal"/></div>
                            <div className="info">
                                <div className="name ">Austin Cook</div>
                                <p>Pabst irony tattooed, synth sriracha selvage pok pok. Wayfarers kinfolk sartorial, helvetica you probably haven't heard of them tumeric venmo deep v mixtape semiotics brunch.</p>	
                                <img className="img-responsive" src="images/soccer/rep-img.jpg" alt="rep-img"/>
                                <ul className="contact-bar">
                                    <li className="facebook"><a href="#"><i className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                                    <li className="twitter"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li className="google"><a href="#"><i className="fa fa-google" aria-hidden="true"></i></a></li>
                                    <li className="pinterest"><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>	
                        </div>	
                    </div>
                    <div className="item-wrap">
                        <div className="item-info">
                            <div className="time">65"</div>
                            <div className="point event"><img src="images/common/timeline-yellow-card.png" alt="timeline-yellow-card"/></div>
                        </div>
                        <div className="item  bg-neutral-100 dark:bg-neutral-800">
                            <p>Pabst irony tattooed, synth sriracha selvage pok pok. Wayfarers kinfolk sartorial, helvetica you probably haven't heard of them tumeric venmo deep v mixtape semiotics brunch.</p>	
                        </div>	
                    </div>
                    <div className="item-wrap">
                        <div className="item-info">
                            <div className="time">35"</div>
                            <div className="point"></div>
                        </div>
                        <div className="item  bg-neutral-100 dark:bg-neutral-800">
                            <p>Pabst irony tattooed, synth sriracha selvage pok pok. Wayfarers kinfolk sartorial, helvetica you probably haven't heard of them tumeric venmo deep v mixtape semiotics brunch.</p>	
                        </div>	
                    </div>
                    <div className="item-wrap">
                        <div className="item-info">
                            <div className="time">35"</div>
                            <div className="point event"><img src="images/common/timeline-reload.png" alt="timeline-reload"/></div>
                        </div>
                        <div className="item  bg-neutral-100 dark:bg-neutral-800 ">
                            <p>Pabst irony tattooed, synth sriracha selvage pok pok. Wayfarers kinfolk sartorial, helvetica you probably haven't heard of them tumeric venmo deep v mixtape semiotics brunch.</p>	
                        </div>	
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</section>
  </> 
};

export default CommentsMatch;
