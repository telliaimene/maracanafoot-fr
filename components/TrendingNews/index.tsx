import React, { Fragment, useState, useEffect,FC } from "react";
import { ArticleDataType } from "../../data/types";
import Heading from "../uiStyle/Heading";
import TrendingNewsSlider from "../TrendingNewsSlider/index";
import Link from "next/link";
import FontAwesome from "../uiStyle/FontAwesome";
import { API_LINK } from "../../utils/constantes";
import axios from "axios";
// import transm1 from '../../doc/img/trending/transm1.jpg';
// import transm2 from '../../doc/img/trending/transm2.jpg';
// import transm4 from '../../doc/img/trending/transm4.jpg';
// import transm5 from '../../doc/img/trending/transm5.jpg';
// import transm6 from '../../doc/img/trending/transm6.jpg';

const trendingNews = [
  {
    image: "/images/doc/img/trending/transm1.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Nancy Zhang a Chinese busy woman and Dhaka",
  },
  {
    image: "/images/doc/img/trending/transm2.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "U.S. Response subash says he will label regions by risk of…",
  },
  {
    image: "/images/doc/img/trending/transm4.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Venezuela elan govt and opposit the property collect",
  },
  {
    image: "/images/doc/img/trending/transm5.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Nancy Zhang a Chinese busy woman and Dhaka",
  },
  {
    image: "/images/doc/img/trending/transm6.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "U.S. Response subash says he will label regions by risk of…",
  },
  {
    image: "/images/doc/img/trending/transm4.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Venezuela elan govt and opposit the property collect",
  },
];
export interface PageTrendingProps {
  dark?: string;
  data:ArticleDataType[]
  data2:ArticleDataType[]
}

const TrendingNews: FC<PageTrendingProps> = ({ dark , data, data2}) => {
  const [Loading, setLoading] = useState(true);

useEffect(() => {
  if (data  ){
    
      setLoading(false)
  }

}, [data]);

  return (
    <Fragment>
      <Heading title="À LA UNE" />
      <TrendingNewsSlider data ={data2}/>
      {dark ? (
        <div className="border_white" />
      ) : (
        <div className="border_black" />
      )}
      <div className="space-30" />
      <div className="row">
        <div className="col-lg-6">
        {!Loading?
            <>
          {data.slice(12, 15).map((item, i) => (
            <Fragment key={i}>
              <div className="single_post widgets_small">
                <div className="post_img">
                  <div className="img_wrap">
                    <a href={"/article?"+ item.typearticle  +"?" + item.title}>
                    <img style={{
                              width:'200px',
                              height:'77px'
                            }} src={item.image} alt="thumb" />
                            </a>
                  </div>
                  {/* <span className="tranding">
                    <FontAwesome name="bolt" />
                  </span> */}
                </div>
                <div className="single_post_text">
                  <div className="meta2">
                    <Link href="">
                      <>
                      <span
            style={{color: "#061da5", fontWeight: "bold" , fontSize:"14px"}}
          >
            {item.category}
          </span>
                      </>
                    </Link>
                    <Link href={"/article?"+ item.typearticle  +"?" + item.title}>
                      <>
                        <a href={"/article?"+ item.typearticle  +"?" + item.title}>{item.date} </a>
                      </>
                    </Link>
                  </div>
                  <Link href={"/article?"+ item.typearticle  +"?" + item.title}>
                    <>
                      <h4>
                        {" "}
                        <a href={"/article?"+ item.typearticle  +"?" + item.title}>{item.title} </a>
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
             </>:null}
       
        </div>
        <div className="col-lg-6">
        {!Loading?
        <>
          {data.length ? data.slice(16, 19).map((item, i) => (
            <Fragment key={i}>
              <div className="single_post widgets_small">
                <div className="post_img">
                  <div className="img_wrap">
                    <a href={"/article?"+ item.typearticle  +"?" + item.title}>
                    <img style={{
                              width:'200px',
                              height:'77px'
                            }} src={item.image} alt="thumb" /></a>
                  </div>
                  {/* <span className="tranding">
                    <FontAwesome name="bolt" />
                  </span> */}
                </div>
                <div className="single_post_text">
                  <div className="meta2">
                    <Link href="">
                      <>
                      <span
            style={{color: "#061da5", fontWeight: "bold" , fontSize:"14px"}}
          >
            {item.category}
          </span>
                      </>
                    </Link>
                    <Link href={"/article?"+ item.typearticle  +"?" + item.title}>
                      <>
                        <a href={"/article?"+ item.typearticle  +"?" + item.title}>{item.date}</a>
                      </>
                    </Link>
                  </div>
                  <Link href={"/article?"+ item.typearticle  +"?" + item.title}>
                    <>
                      <h4>
                        <a href={"/article?"+ item.typearticle  +"?" + item.title}>{item.title}</a>
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
          )): null}
          </> :null}
        </div>
      </div>
    </Fragment>
  );
};

export default TrendingNews;
