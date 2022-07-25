import React, { Fragment, useState, useEffect, FC } from "react";
// import { TabContent, TabPane, Nav, NavItem, Fade } from "reactstrap";
import classnames from "classnames";
import Link from "next/link";
// import 'react-tabs/style/react-tabs.css';
// import thumb1 from '../../public/images/doc/img/header/widget/tab1.jpg';
// import thumb2 from '../../public/images/doc/img/header/widget/tab2.jpg';
// import thumb3 from '../../public/images/doc/img/header/widget/tab3.jpg';
// import thumb4 from '../../public/images/doc/img/header/widget/tab4.jpg';
// import thumb5 from '../../public/images/doc/img/header/widget/tab5.jpg';
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { API_LINK } from "../../utils/constantes";
import axios from "axios";
import { ArticleDataType } from "../../data/types";
import FontAwesome from "../uiStyle/FontAwesome";

import Swiper from 'react-id-swiper';

import {mostViewSort} from "../../utils/commonFunctions";



const data = [
  {
    image: "/images/doc/img/header/widget/tab1.jpg",
    title: "Copa America: Luis Suarez from devastated US",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
  },
  {
    image: "/images/doc/img/header/widget/tab2.jpg",
    title: "Nancy Zhang a Chinese busy woman and Dhaka",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
  },
  {
    image: "/images/doc/img/header/widget/tab3.jpg",
    title: "U.S. Response subash says he will label regions by risk of…",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
  },
  {
    image: "/images/doc/img/header/widget/tab4.jpg",
    title: "Venezuela elan govt and opposit the property collect",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
  },
  {
    image: "/images/doc/img/header/widget/tab5.jpg",
    title: "Cheap smartphone sensor could help you old food safe",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
  },
];
export interface PageWidgetTabPaneProps {
  arr: ArticleDataType[];
  a_id?: string | number;
  id?: string | number;
  dark?: boolean;
}

const WidgetTabPane: FC<PageWidgetTabPaneProps> = ({ arr, a_id, id, dark }) => {
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

      loops: true,

      slidesPerView: 1,

      slidesPerColumn: 6,

  };

  return (
    //kanet au lieu div fi plasetha Fade

    <div
    // in={id === a_id}
    >
      <div className="widget tab_widgets">
        {arr?.map((item, i) => (
          <Fragment key={i}>
            <div className="single_post widgets_small">
              <div className="post_img">
                <div className="img_wrap">
                  <Link href="/">
                    <img
                      style={{ width: 100, height: 65 }}
                      src={item.image}
                      alt="thumb"
                    />
                  </Link>
                </div>
              </div>
              <div className="single_post_text">
                <div className="meta2 meta_separator1">
                  <>
                    <Link
                      href=""
                    >
                      <>
                      <span
            style={{color: "#061da5", fontWeight: "bold" , fontSize:"14px"}}
          >
            {item.category}
          </span>
                      </>
                    </Link>
                    <Link
                      href={"/article?" + item.typearticle + "?" + item.title}
                    >
                      <>
                        <a
                          href={
                            "/article?" + item.typearticle + "?" + item.title
                          }
                        >
                          {item.date}
                        </a>
                      </>
                    </Link>
                  </>
                </div>
                <Link href={"/article?" + item.typearticle + "?" + item.title}>
                  <>
                    <h4>
                      <a
                        href={"/article?" + item.typearticle + "?" + item.title}
                      >
                        {item.title}{" "}
                      </a>
                    </h4>
                  </>
                </Link>
              </div>
            </div>
            <div className="space-15" />
            {dark ? (
              <div className="border_white" />
            ) : (
              <div className="border_black" />
            )}
            <div className="space-15" />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export interface PageWidgetTabProps {
  topComment?: ArticleDataType[];
  topCount?: ArticleDataType[];
  topShare?: ArticleDataType[];
  className?: string;
  dark: boolean;
}

const WidgetTab: FC<PageWidgetTabProps> = ({
  className,
  dark,
  topComment,
  topCount,
  topShare,
}) => {
  const [activeTab, setActiveTab] = useState("1");
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

      loops: true,

      slidesPerView: 1,

      slidesPerColumn: 6,

  };
  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (<>
    <div className="popular_carousel_area mb30 md-mt-30">

    <h2 className="widget-title">Les Plus Lus</h2>

    <div className="popular_carousel pt-15 multipleRowCarousel nav_style1">

        {/*CAROUSEL START*/}


            {topCount?.map((item, i) => (

<div key={i} className="single_post type10 widgets_small mb15">

             
<div className="post_img">
  <div className="img_wrap">
    <Link href="/">
      <img
        style={{ width: 100, height: 65 }}
        src={item.image}
        alt="thumb"
      />
    </Link>
  </div>
</div>
<div className="single_post_text">
  <div className="meta2 meta_separator1">
    <>
      <Link
        href=""
      >
        <>
          <span
            style={{color: "#061da5", fontWeight: "bold" , fontSize:"14px"}}
          >
            {item.category}
          </span>
        </>
      </Link>
      <Link
        href={"/article?" + item.typearticle + "?" + item.title}
      >
        <>
          <a
            href={
              "/article?" + item.typearticle + "?" + item.title
            }
          >
            {item.date}
          </a>
        </>
      </Link>
    </>
  </div>
  <Link href={"/article?" + item.typearticle + "?" + item.title}>
    <>
      <h4>
        <a
          href={"/article?" + item.typearticle + "?" + item.title}
        >
          {item.title}{" "}
        </a>
      </h4>
    </>
  </Link>
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

   

    </div>

</div>
<div className="popular_carousel_area mb30 md-mt-30">

<h2 className="widget-title">Les Plus Commentés</h2>

<div className="popular_carousel pt-15 multipleRowCarousel nav_style1">

    {/*CAROUSEL START*/}


        {topComment?.map((item, i) => (

            <div key={i} className="single_post type10 widgets_small mb15">

             
              <div className="post_img">
                <div className="img_wrap">
                  <Link href="/">
                    <img
                      style={{ width: 100, height: 65 }}
                      src={item.image}
                      alt="thumb"
                    />
                  </Link>
                </div>
              </div>
              <div className="single_post_text">
                <div className="meta2 meta_separator1">
                  <>
                    <Link
                      href=""
                    >
                      <>
                      <span
            style={{color: "#061da5", fontWeight: "bold" , fontSize:"14px"}}
          >
            {item.category}
          </span>
                      </>
                    </Link>
                    <Link
                      href={"/article?" + item.typearticle + "?" + item.title}
                    >
                      <>
                        <a
                          href={
                            "/article?" + item.typearticle + "?" + item.title
                          }
                        >
                          {item.date}
                        </a>
                      </>
                    </Link>
                  </>
                </div>
                <Link href={"/article?" + item.typearticle + "?" + item.title}>
                  <>
                    <h4>
                      <a
                        href={"/article?" + item.typearticle + "?" + item.title}
                      >
                        {item.title}{" "}
                      </a>
                    </h4>
                  </>
                </Link>
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



</div>

</div>
<div className="popular_carousel_area mb30 md-mt-30">

<h2 className="widget-title">Les Plus Partagée</h2>

<div className="popular_carousel pt-15 multipleRowCarousel nav_style1">

    {/*CAROUSEL START*/}


        {topShare?.map((item, i) => (

<div key={i} className="single_post type10 widgets_small mb15">

             
<div className="post_img">
  <div className="img_wrap">
    <Link href="/">
      <img
        style={{ width: 100, height: 65 }}
        src={item.image}
        alt="thumb"
      />
    </Link>
  </div>
</div>
<div className="single_post_text">
  <div className="meta2 meta_separator1">
    <>
      <Link
        href={"/article?" + item.typearticle + "?" + item.title}
      >
        <>
        <span
            style={{color: "#061da5", fontWeight: "bold" , fontSize:"14px"}}
          >
            {item.category}
          </span>
        </>
      </Link>
      <Link
        href={"/article?" + item.typearticle + "?" + item.title}
      >
        <>
          <a
            href={
              "/article?" + item.typearticle + "?" + item.title
            }
          >
            {item.date}
          </a>
        </>
      </Link>
    </>
  </div>
  <Link href={"/article?" + item.typearticle + "?" + item.title}>
    <>
      <h4>
        <a
          href={"/article?" + item.typearticle + "?" + item.title}
        >
          {item.title}{" "}
        </a>
      </h4>
    </>
  </Link>
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



</div>

</div>

  </>);
};

export default WidgetTab;
