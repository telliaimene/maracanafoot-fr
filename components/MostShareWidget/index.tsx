import React, {useEffect,useState,FC } from "react";
import Link from "next/link";
import { ArticleDataType } from "../../data/types";
import FontAwesome from "../uiStyle/FontAwesome";
import Swiper from "react-id-swiper";

// images
import { mostViewSort } from "../../utils/commonFunctions";
import { API_LINK } from "../../utils/constantes";
import axios from "axios";

const mostView = [
  {
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Nancy zhang a chinese busy woman and dhaka",
  },
  {
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Harbour amid a Slowen down in singer city",
  },
  {
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Cheap smartphone sensor could help you old food safe",
  },
  {
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "The secret to moving this ancient sphinx screening",
  },
  {
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Nancy zhang a chinese busy woman and dhaka",
  },
  {
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "The billionaire Philan thropist read to learn",
  },
  {
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Nancy zhang a chinese busy woman and dhaka",
  },
  {
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "The billionaire Philan thropist read to learn",
  },
  {
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Cheap smartphone sensor could help you",
  },
  {
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Ratiffe to be Director of nation talent Trump",
  },
];
export interface PageMostShareWidgetProps {
  data:ArticleDataType[]
  dark?:string
  title:string
}
const MostShareWidget: FC<PageMostShareWidgetProps> = ({ title, dark, data }) => {
 console.log("data share2",data)

  const [swiper, setSwiper] = useState<any>(null);


  

  const goNext = () => {

    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const params = {
    slidesPerView: 1,
    slidesPerColumn: 6,
  };

  return (
    <div className="widget tab_widgets mb30">
      <h2 className="widget-title">{title ? title : "Les Plus Partagés"}</h2>
      <div className="post_type2_carousel multipleRowCarousel nav_style1">
        {/*CAROUSEL START*/}
        <Swiper getSwiper={setSwiper} {...params}>
        {mostViewSort(data).map((item, i) => (
            <div key={i} className="carousel_items">
              <div className="single_post widgets_small widgets_type4">
                <div className="post_img number">
                  <h2>{i+1}</h2>
                </div>
                <div className="single_post_text">
                  <div className="meta2">
                    <Link href={"/article?"+ item.typearticle +"?" + item.title}>
                    <>
                      {" "}
                    
                        <a href={"/article?"+ item.typearticle +"?" + item.title}>{item.category}</a>
                      </>
                    </Link>
                    <Link href={"/article?"+ item.typearticle +"?" + item.title}>
                    <>
                      {" "}
                      
                        <a href={"/article?"+ item.typearticle +"?" + item.title}>{item.date} </a>
                      </>
                    </Link>
                  </div>
                  <Link href={"/article?"+ item.typearticle +"?" + item.title}>
                  <>
                    {" "}
                  
                      <h4>
                        {" "}
                        <a href={"/article?"+ item.typearticle +"?" + item.title}>
                         {" "}
                         {item.title}
                        </a>
                      </h4>
                    </>
                  </Link>
                  {/* <ul className="inline socail_share">
                    <li>
                      <Link href={"/article?"+ item.typearticle + "?"+item.tournoi +"?" + item.title}>
                      <>
                        <FontAwesome name="twitter" />
                        <a href={"/article?"+ item.typearticle + "?"+item.tournoi +"?" + item.title}>2.2K </a>
                        </>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/article?"+ item.typearticle + "?"+item.tournoi +"?" + item.title}>
                      <>
                        {" "}
                            <FontAwesome name="facebook-f" />
                            <a href={"/article?"+ item.typearticle + "?"+item.tournoi +"?" + item.title}> 2.2K{" "}
                          </a>
                        </>
                      </Link>
                    </li>
                  </ul> */}
                  <div className="space-15" />
                  {dark ? (
                    <div className="border_white" />
                  ) : (
                    <div className="border_black" />
                  )}
                </div>
              </div>
              <div className="space-15" />
            </div>
          ))} 
        </Swiper>
        <div className="navBtns">
          <div onClick={goPrev} className="navBtn prevtBtn">
            <FontAwesome name="angle-left" />
          </div>
          <div onClick={goNext} className="navBtn nextBtn">
            <FontAwesome name="angle-right" />
          </div>
        </div>
        {/*CAROUSEL END*/}
      </div>
    </div>
  );
};

export default MostShareWidget;
