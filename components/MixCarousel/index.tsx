import React, { useState, useEffect,FC } from "react";
import { ArticleDataType } from "../../data/types";
import FontAwesome from "../uiStyle/FontAwesome";
import Link from "next/link";
import Swiper from "react-id-swiper";


// import black_white1 from '../../doc/img/bg/black_white1.jpg';
// import black_white2 from '../../doc/img/bg/black_white2.jpg';

const mixArray = [
  {
    icon: "play",
    image: "/images/doc/img/bg/black_white1.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Success is not a good food failure makes you humble",
  },
  {
    icon: "bolt",
    image: "/images/doc/img/bg/black_white2.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Success is not a good food failure makes you humble",
  },
  {
    icon: "play",
    image: "/images/doc/img/bg/black_white1.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Success is not a good food failure makes you humble",
  },
  {
    icon: "bolt",
    image: "/images/doc/img/bg/black_white2.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Success is not a good food failure makes you humble",
  },
];
export interface PageMixCarouselProps {
  dark?: string;
  data:ArticleDataType[]
  className?: string;
}

const MixCarousel: FC<PageMixCarouselProps> = ({ className, dark, data }) => {

  const [swiper, setSwiper] = useState<any>(null);
  const [vModal, setvModal] = useState(false);
  const [videoId] = useState("0r6C3z3TEKw");

  
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
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      300: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  };
  return (
    <div className={`mix_area ${className ? className : ""}`}>
    {data.length>0?  
    <div className="container">

        <div className="row">
          <div className="col-12">
            <div className={`mix_carousel ${dark ? "primay_bg" : ""}`}>
              {/*CAROUSEL START*/}
              <div className="single_mix_carousel nav_style3">
                <Swiper getSwiper={setSwiper} {...params}>
                  {data.map((item, i) => (
                    <div key={i} className="single_post post_type6 post_type9">
                      <div className="post_img gradient1">
                        <div className="img_wrap">
                          <Link href={"/article?"+ item.typearticle +"?" + item.title}>
                            <>
                              <a href={"/article?"+ item.typearticle +"?" + item.title} className="play_btn">
                                <img
                                  style={{
                                    width: "540px",
                                    height: "420px",
                                  }}
                                  src={item.image}
                                  alt="news"
                                />
                              </a>
                            </>
                          </Link>
                        </div>
                        <span
                          onClick={() => setvModal(true)}
                          className={`tranding ${i % 2 ? "left" : ""}`}
                        >
                          {/* <FontAwesome name={item.icon} /> */}
                        </span>
                      </div>
                      <div className="single_post_text">
                        <div className="meta">
                          <>
                            <Link href={"/article?"+ item.typearticle +"?" + item.title}>
                              <>
                                <a href={"/article?"+ item.typearticle +"?" + item.title}>Entretien exclusif</a>
                              </>
                            </Link>
                            <Link href={"/article?"+ item.typearticle +"?" + item.title}>
                              <>
                                <a href={"/article?"+ item.typearticle +"?" + item.title}>{item.date.split('T')[0]}</a>
                              </>
                            </Link>
                          </>
                        </div>
                        <Link href={"/article?"+ item.typearticle +"?" + item.title}>
                          <>
                            <h4>
                              {" "}
                              <a href={"/article?"+ item.typearticle +"?" + item.title}>{item.title} </a>
                            </h4>
                          </>
                        </Link>
                      </div>
                    </div>
                  ))}
                </Swiper>
                <div className="owl-nav">
                  <div onClick={goPrev} className="owl-prev">
                    <FontAwesome name="angle-left" />
                  </div>
                  <div onClick={goNext} className="owl-next">
                    <FontAwesome name="angle-right" />
                  </div>
                </div>
              </div>
            </div>
            {/*CAROUSEL END*/}
          </div>
        </div>
        
      </div>: null}
      <div className="space-30" />
      {/* <ModalVideo
        channel="youtube"
        isOpen={vModal}
        videoId={videoId}
        onClose={() => setvModal(false)}
      /> */}
    </div>
  );
};

export default MixCarousel;
