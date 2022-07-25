import React, { useState, useEffect, FC } from "react";
import { ArticleDataType } from "../../data/types";
import Link from "next/link";
import FontAwesome from "../uiStyle/FontAwesome";
import Swiper from "react-id-swiper";

// images
// import sports2 from '../../doc/img/sports/sports2.jpg';
// import sports3 from '../../doc/img/sports/sports3.jpg';
// import sports4 from '../../doc/img/sports/sports4.jpg';
// import sports5 from '../../doc/img/sports/sports5.jpg';
// import sports6 from '../../doc/img/sports/sports6.jpg';
// import blog_small1 from '../../doc/img/blog/blog_small1.jpg';
// import blog_small2 from '../../doc/img/blog/blog_small2.jpg';
// import blog_small3 from '../../doc/img/blog/blog_small3.jpg';
// import blog_small4 from '../../doc/img/blog/blog_small4.jpg';
// import blog_small5 from '../../doc/img/blog/blog_small5.jpg';

import { mostViewSort } from "../../utils/commonFunctions";
import { API_LINK } from "../../utils/constantes";
import axios from "axios";
const mostView = [
  {
    image: "/images/doc/img/sports/sports2.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Nancy zhang a chinese busy woman and dhaka",
  },
  {
    image: "/images/doc/img/sports/sports3.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "The billionaire Philan thropist read to learn",
  },
  {
    image: "/images/doc/img/sports/sports4.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Cheap smartphone sensor could help you",
  },
  {
    image: "/images/doc/img/sports/sports5.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Ratiffe to be Director of nation talent Trump",
  },
  {
    image: "/images/doc/img/sports/sports6.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Nancy zhang a chinese busy woman and dhaka",
  },
  {
    image: "/images/doc/img/blog/blog_small1.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "The billionaire Philan thropist read to learn",
  },
  {
    image: "/images/doc/img/blog/blog_small2.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Nancy zhang a chinese busy woman and dhaka",
  },
  {
    image: "/images/doc/img/blog/blog_small3.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "The billionaire Philan thropist read to learn",
  },
  {
    image: "/images/doc/img/blog/blog_small4.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Cheap smartphone sensor could help you",
  },
  {
    image: "/images/doc/img/blog/blog_small5.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Ratiffe to be Director of nation talent Trump",
  },
];
export interface PageSportsCarouselProps {
  dark: boolean;
  data: ArticleDataType[];
}

const SportsCarousel: FC<PageSportsCarouselProps> = ({ dark, data }) => {
  const [swiper, setSwiper] = useState<any>(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

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
    <div className="widget tab_widgets">
      <div className="post_type2_carousel multipleRowCarousel nav_style1">
        {/*CAROUSEL START*/}
        <Swiper getSwiper={setSwiper} {...params}>
          {mostViewSort(data).map((item: any, i: number) => (
            <div key={i} className="single_post2_carousel">
              <div className="single_post widgets_small">
                <div className="post_img">
                  <div className="img_wrap">
                    <Link href="/">
                      <img
                        style={{ width: "100%", height: "67px" }}
                        src={item.image}
                        alt="thumb"
                      />
                    </Link>
                  </div>
                  {/* <span className="tranding">
                    <FontAwesome name="bolt" />
                  </span> */}
                </div>
                <div className="single_post_text">
                  <div className="meta2">
                    <Link href="/">
                      <a>{item.category}</a>
                    </Link>
                    <Link href="/">
                      <a>{item.date}</a>
                    </Link>
                  </div>
                  <h4>
                    <Link href="/post1">
                      <a>{item.title}</a>
                    </Link>
                  </h4>
                </div>
              </div>
              <div className="space-15" />
              {dark ? (
                <div className="border_white" />
              ) : (
                <div className="border_black" />
              )}
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
      </div>
    </div>
  );
};

export default SportsCarousel;
