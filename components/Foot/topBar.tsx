import React from "react";
//import "../styles/index.module.css";
//import "../public/styles/index.css";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addNewUser,
  removeUser,
  UserID,
  UserType,
} from "../../store/login/auth";
//import Script from "next/script";

const TopBar = () => {
  return (
    <div></div>
      // <>
      //    <Script src="js/library/jquery.js"></Script>
      // <Script src="js/library/jquery-ui.js"></Script>
      // <Script src="js/library/bootstrap.js"></Script>
      // <Script src="js/library/jquery.sticky.js"></Script>
      // <Script src="js/library/jquery.jcarousel.js"></Script>
      // <Script src="js/library/jcarousel.connected-carousels.js"></Script>
      // <Script src="js/library/owl.carousel.js"></Script>
      // <Script src="js/library/progressbar.js"></Script>
      // <Script src="js/library/jquery.bracket.min.js"></Script>
      // <Script src="js/library/chartist.js"></Script>
      // <Script src="js/library/Chart.js"></Script>
      // <Script src="js/library/fancySelect.js"></Script>
      // <Script src="js/library/isotope.pkgd.js"></Script>
      // <Script src="js/library/imagesloaded.pkgd.js"></Script>

      // <Script src="js/jquery.team-coundown.js"></Script>
      // <Script src="js/matches-slider.js"></Script>
      // <Script src="js/header.js"></Script>
      // <Script src="js/matches_broadcast_listing.js"></Script>
      // <Script src="js/news-line.js"></Script>
      // <Script src="js/match_galery.js"></Script>
      // <Script src="js/main-club-gallery.js"></Script>
      // <Script src="js/product-slider.js"></Script>
      // <Script src="js/circle-bar.js"></Script>
      // <Script src="js/standings.js"></Script>
      // <Script src="js/shop-price-filter.js"></Script>
      // <Script src="js/timeseries.js"></Script>
      // <Script src="js/radar.js"></Script>
      // <Script src="js/slider.js"></Script>
      // <Script src="js/preloader.js"></Script>
      // <Script src="js/diagram.js"></Script>
      // <Script src="js/bi-polar-diagram.js"></Script>
      // <Script src="js/label-placement-diagram.js"></Script>
      // <Script src="js/donut-chart.js"></Script>
      // <Script src="js/animate-donut.js"></Script>
      // <Script src="js/advanced-smil.js"></Script>
      // <Script src="js/svg-path.js"></Script>
      // <Script src="js/pick-circle.js"></Script>
      // <Script src="js/horizontal-bar.js"></Script>
      // <Script src="js/gauge-chart.js"></Script>
      // <Script src="js/stacked-bar.js"></Script>

      // <Script src="js/library/chartist-plugin-legend.js"></Script>
      // <Script src="js/library/chartist-plugin-threshold.js"></Script>
      // <Script src="js/library/chartist-plugin-pointlabels.js"></Script>

      // <Script src="js/treshold.js"></Script>
      // <Script src="js/visible.js"></Script>
      // <Script src="js/anchor.js"></Script>
      // <Script src="js/landing_carousel.js"></Script>
      // <Script src="js/landing_sport_standings.js"></Script>
      // <Script src="js/twitterslider.js"></Script>
      // <Script src="js/champions.js"></Script>
      // <Script src="js/landing_mainnews_slider.js"></Script>
      // <Script src="js/carousel.js"></Script>
      // <Script src="js/video_slider.js"></Script>
      // <Script src="js/footer_slides.js"></Script>
      // <Script src="js/player_test.js"></Script>

      // <Script src="js/main.js"></Script>
      // <div className="top-bar">
      //   <div className="container">
      //     <div className="row">
      //       <div className="col-md-7 hidden-sm hidden-xs">
      //         <div className="top-contacts">
      //           <ul className="socials">
      //             <li>
      //               <a href="#">
      //                 <i
      //                   className="fa fa-facebook-square"
      //                   aria-hidden="true"
      //                 ></i>
      //               </a>
      //             </li>
      //             <li>
      //               <a href="#">
      //                 <i className="fa fa-twitter" aria-hidden="true"></i>
      //               </a>
      //             </li>
      //             <li>
      //               <a href="#">
      //                 <i className="fa fa-google" aria-hidden="true"></i>
      //               </a>
      //             </li>
      //             <li>
      //               <a href="#">
      //                 <i className="fa fa-pinterest" aria-hidden="true"></i>
      //               </a>
      //             </li>
      //             <li>
      //               <a href="#">
      //                 <i className="fa fa-instagram" aria-hidden="true"></i>
      //               </a>
      //             </li>
      //           </ul>
      //           <ul className="contacts">
      //             <li className="phone">
      //               <i className="fa fa-phone-square" aria-hidden="true"></i>+61
      //               3 8376 6284
      //             </li>
      //             <li className="skype">
      //               <a href="callto:team.skype">
      //                 <i className="fa fa-skype" aria-hidden="true"></i>
      //                 team.skype
      //               </a>
      //             </li>
      //           </ul>
      //         </div>
      //       </div>
      //       <div className="col-md-5">
      //         <div className="top-language">
      //           <ul className="list">
      //             <li className="dropdown">
      //               <a
      //                 href="#"
      //                 className="dropdown-toggle"
      //                 data-toggle="dropdown"
      //               >
      //                 <img
      //                   src="images/common/en-flag.png"
      //                   alt="selected language"
      //                 />
      //                 EN
      //               </a>
      //               <ul className="dropdown-menu">
      //                 <li>
      //                   <a href="#">
      //                     <img src="images/common/fr-flag.png" alt="language" />
      //                     FR
      //                   </a>
      //                 </li>
      //                 <li>
      //                   <a href="#">
      //                     <img src="images/common/en-flag.png" alt="language" />
      //                     EN
      //                   </a>
      //                 </li>
                  
      //               </ul>
      //             </li>
      //           </ul>
      //         </div>
      //         <div className="top-search">
      //           <form>
      //             <input type="text" name="text" />
      //             <button>
      //               <i className="fa fa-search" aria-hidden="true"></i>
      //             </button>
      //           </form>
      //         </div>

      //         <div className="clear"></div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      // </>
  
  );
};

export default TopBar;

