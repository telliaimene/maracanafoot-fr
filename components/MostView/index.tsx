import React, { Fragment, useState, useEffect, FC } from "react";
import Link from "next/link";
import FontAwesome from "../uiStyle/FontAwesome";
import Swiper from "react-id-swiper";
import { mostViewSort } from "../../utils/commonFunctions";
import { ArticleDataType } from "../../data/types";

// images
// import mostsm1 from '../../doc/img/most_view/mostsm1.jpg';
// import mostsm2 from '../../doc/img/most_view/mostsm2.jpg';
// import mostsm3 from '../../doc/img/most_view/mostsm3.jpg';
// import mostsm4 from '../../doc/img/most_view/mostsm4.jpg';
// import mostsm5 from '../../doc/img/most_view/mostsm5.jpg';

const mostView = [
  {
    image: "images/doc/img/most_view/mostsm1.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Nancy zhang a chinese busy woman and dhaka",
    _id:"1",
    author:"aaaa",
    content:"aaaaaaaaaaaaaa"
  },
  {
    _id:"1",
    author:"aaaa",
    content:"aaaaaaaaaaaaaa",
    image: "images/doc/img/most_view/mostsm2.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "The billionaire Philan thropist read to learn",
  },
  {
    image: "images/doc/img/most_view/mostsm3.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Cheap smartphone sensor could help you",
    _id:"1",
    author:"aaaa",
    content:"aaaaaaaaaaaaaa"
  },
  {
    image: "images/doc/img/most_view/mostsm4.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Ratiffe to be Director of nation talent Trump",
    _id:"1",
    author:"aaaa",
    content:"aaaaaaaaaaaaaa"
  },
  {
    image: "images/doc/img/most_view/mostsm5.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Nancy zhang a chinese busy woman and dhaka",
    _id:"1",
    author:"aaaa",
    content:"aaaaaaaaaaaaaa"
  },
  {
    image: "images/doc/img/most_view/mostsm1.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "The billionaire Philan thropist read to learn",
    _id:"1",
    author:"aaaa",
    content:"aaaaaaaaaaaaaa"
  },
  {
    image: "images/doc/img/most_view/mostsm1.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Nancy zhang a chinese busy woman and dhaka",
    _id:"1",
    author:"aaaa",
    content:"aaaaaaaaaaaaaa"
  },
  {
    image: "images/doc/img/most_view/mostsm2.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "The billionaire Philan thropist read to learn",
    _id:"1",
    author:"aaaa",
    content:"aaaaaaaaaaaaaa"
  },
  {
    image: "images/doc/img/most_view/mostsm3.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Cheap smartphone sensor could help you",
    _id:"1",
    author:"aaaa",
    content:"aaaaaaaaaaaaaa"

  },
  {
    image: "images/doc/img/most_view/mostsm4.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Ratiffe to be Director of nation talent Trump",
    _id:"1",
    author:"aaaa",
    content:"aaaaaaaaaaaaaa"
  },
  {
    image: "images/doc/img/most_view/mostsm5.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Nancy zhang a chinese busy woman and dhaka",
    _id:"1",
    author:"aaaa",
    content:"aaaaaaaaaaaaaa"
  },
  {
    image: "images/doc/img/most_view/mostsm1.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "The billionaire Philan thropist read to learn",
    _id:"1",
    author:"aaaa",
    content:"aaaaaaaaaaaaaa"
  },
];

const API_KEY = 'AIzaSyBMcmSX6cAnTMXBYYy5qzYjZPw2RAjd-UE'
const New_API_KEY = 'AIzaSyBJKshABBTaPbTd4zuXDgADoRz5dVv10pM'
const channelID3 = 'UCuVphVU-nPfPZ36lV2SEXaQ'  //channel Maracana foot
const result = 6
let finalURL = 'https://www.googleapis.com/youtube/v3/search?key=' + New_API_KEY + '&channelId=' + channelID3 + '&part=snippet,id&order=date&maxResults=' + result

export async function getServerSideProps() {
  const res = await fetch(finalURL)
  const youtube = await res.json();
  return {
    props: {
      youtube
    }
  }
}
export interface PageMostViewProps {
  no_margin?: string
  dark?: string
  title?: string

}
const MostView: FC<PageMostViewProps> = ({ no_margin, title, dark }, youtube) => {
  console.log("youtube data", youtube)
  const [swiper, setSwiper] = useState<any>(null);
  const [videos, setVideo] = useState([]);
  const [videosCounts, setVideosCounts] = useState([]);
  const [loadingVideos, setLoadingVideos] = useState(true);
useEffect(()=>{
  fetch(finalURL)
  .then((response) => response.json())
  .then((res) => {
 
    setVideo(res.items.slice(0,res.items.length-1)),
    setLoadingVideos(false)
      if (videos) {
        if (videos.length > 0) {
         videos.map((statistics:any) => {
            fetch('https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=' + statistics.id.videoId + '&key=' + New_API_KEY)
              .then((response) => response.json())
              .then((Count) => {
                // Count.items[0].length>0 ? Count.items[0].statistics.viewCount : 0
                setVideosCounts(Count.items[0] ? Count.items[0].statistics.viewCount : null)
             
              })
          })

        }
      }
  })
  .catch(err => {
    console.log(err)

      setLoadingVideos(false)
   
  })

},[])
 


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
  console.log("videos", videos)
  return (
    <div className={`widget tab_widgets ${no_margin ? "" : "mb30"}`}>
      <h2 className="widget-title">{title ? title : "Les plus Vues"}</h2>
      <div className="post_type2_carousel multipleRowCarousel nav_style1">
        {/*CAROUSEL START*/}
        <Swiper getSwiper={setSwiper} {...params}>
          {videos.map((item : any, i: number) => (
            <div key={i} className="single_post2_carousel">
              <div className="single_post widgets_small type8">
                <div className="post_img">
                  <div className="videoWrapper">
                  


                  
                  </div>
                  <span className="tranding">
                    <FontAwesome name="bolt" />
                  </span>
                </div>
                <div className="single_post_text text-right">
              
                   <Link href="">
                         <> 
                                    <h4>  
                <a href={'https://www.youtube.com/watch?v=' + item.id.videoId}>{item.snippet.title} </a>
                </h4>
                </>
                 </Link> 
                </div>
                <div className="type8_count">
                  <h2></h2>
                </div>
              </div>
              {i + 2 < mostView.length ? (
                <Fragment>
                  <div className="space-15" />
                  {dark ? (
                    <div className="border_white" />
                  ) : (
                    <div className="border_black" />
                  )}
                  <div className="space-15" />
                </Fragment>
              ) : null}
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

export default MostView;
