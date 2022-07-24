import React, { useState , useEffect,FC } from "react";
import { ArticleDataType } from "../../data/types";
import Heading from "../uiStyle/Heading";
import Swiper from "react-id-swiper";
import { API_LINK } from "../../utils/constantes";
import axios from "axios";

// import fnewsImg2 from '../../doc/img/feature/feature2.jpg';
// import fnewsImg3 from '../../doc/img/feature/feature3.jpg';
// import fnewsImg4 from '../../doc/img/feature/feature4.jpg';
import Link from "next/link";
import FontAwesome from "../uiStyle/FontAwesome";

const news = [
  {
    image: "/images/doc/img/feature/feature2.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Best garden wing supplies for the horticu ltural",
  },
  {
    image: "/images/doc/img/feature/feature3.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Copa America: Luis Suarez from devastated US",
  },
  {
    image: "/images/doc/img/feature/feature3.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Best garden wing supplies for the horticu ltural",
  },
  {
    image: "/images/doc/img/feature/feature4.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Copa America: Luis Suarez from devastated US",
  },
  {
    image: "/images/doc/img/feature/feature4.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Best garden wing supplies for the horticu ltural",
  },
  {
    image: "/images/doc/img/feature/feature3.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Copa America: Luis Suarez from devastated US",
  },
];
export interface PageFeatureNewsProps {
  className?: string;
  data:ArticleDataType[]
}

const FeatureNews: FC<PageFeatureNewsProps> = ({ className, data }) => {
  const [swiper, setSwiper] = useState<any>(null);
console.log("fennec" , data)
  
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
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  };
  return (
    <div className={`feature_carousel_area mb40 ${className ? className : ""}`}>
      {data.length ?   <div className="container">
        <div className="row">
          <div className="col-12">
            <Heading title="ACTUALITÉ DES FENNECS" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/*CAROUSEL START*/}
            <div className="feature_carousel nav_style1">
              <Swiper getSwiper={setSwiper} {...params}>
                {data.map((item, i) => (
                  <div key={i} className="single_post post_type6 post_type7">
                    <div className="post_img gradient1">
                      <Link href="">
                        <>
                        <a  href={"/article?"+ item.typearticle  +"?" + item.title}>
                          <img
                            style={{
                              width:'510px',
                              height:'330px'
                            }}
                            src={ item.image}
                            alt="thumb"
                          />
                          </a>
                        </>
                      </Link>
                    </div>
                    <div className="single_post_text">
                      <div className="meta5">
                        <Link href={"/article?"+ item.typearticle  +"?" + item.title}>
                          <>
                          <a  href={"/article?"+ item.typearticle  +"?" + item.title}>{item.category}</a>
                          </>
                        </Link>
                        <Link href={"/article?"+ item.typearticle  +"?" + item.title}>
                          <>
                            <a href={"/article?"+ item.typearticle  +"?" + item.title}>{item.date} </a>
                          </>
                        </Link>
                      </div>
                      <h4>
                        <Link href={"/article?"+ item.typearticle +"?" + item.title}>
                          <>
                            <a  href={"/article?"+ item.typearticle  +"?" + item.title}>{item.title} </a>
                          </>
                        </Link>
                      </h4>
                    </div>
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
            </div>
            {/*CAROUSEL END*/}
          </div>
        </div>
      </div>: null}
    
    </div>
  );
};

export default FeatureNews;
