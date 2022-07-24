import React, { Component ,FC ,useState, useEffect,useRef} from "react";
import Link from "next/link";
import WidgetTab from "../WidgetTab";
import Slider from "react-slick";

 //import "../../node_modules/slick-carousel/slick/slick.css";
import FontAwesome from "../uiStyle/FontAwesome";
import { ArticleDataType } from "../../data/types";


//import './style.scss';

const thumbs = [
  "/images/doc/img/blog/post_gsi1.jpg",
  "/images/doc/img/blog/post_gsi2.jpg",
  "/images/doc/img/blog/post_gsi3.jpg",
  "/images/doc/img/blog/post_gsi4.jpg",
  "/images/doc/img/blog/post_gsi5.jpg",
  "/images/doc/img/blog/post_gsi6.jpg",
  "/images/doc/img/blog/post_gsi7.jpg",
  "/images/doc/img/blog/post_gsi4.jpg",
  "/images/doc/img/blog/post_gsi3.jpg",
];
const postSlider = [
  {
    image: "/images/doc/img/header/sider-top.jpg",
    title:
      "Japan’s virus success has puzzled the world. Is its luck running out?",
    body: "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
  },
  {
    image: "/images/doc/img/header/sider-top2.jpg",
    title:
      "Japan’s virus success has puzzled the world. Is its luck running out?",
    body: "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
  },
  {
    image: "/images/doc/img/header/sider-top2.jpg",
    title: "Copa America: Luis Suarez from devastated US America",
    body: "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
  },
  {
    image: "/images/doc/img/header/sider-top.jpg",
    title:
      "Japan’s virus success has puzzled the world. Is its luck running out?",
    body: "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
  },
  {
    image: "/images/doc/img/header/sider-top2.jpg",
    title: "Copa America: Luis Suarez from devastated US America",
    body: "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
  },
  {
    image: "/images/doc/img/header/sider-top.jpg",
    title:
      "Japan’s virus success has puzzled the world. Is its luck running out?",
    body: "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
  },
  {
    image: "/images/doc/img/header/sider-top2.jpg",
    title: "Copa America: Luis Suarez from devastated US America",
    body: "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
  },
  {
    image: "/images/doc/img/header/sider-top.jpg",
    title:
      "Japan’s virus success has puzzled the world. Is its luck running out?",
    body: "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
  },
  {
    image: "/images/doc/img/header/sider-top2.jpg",
    title: "Copa America: Luis Suarez from devastated US America",
    body: "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
  },
];
export interface PageSampleNextArrowProps {
  onClick?: () => void;
  className?: string;
}
const SampleNextArrow: FC<PageSampleNextArrowProps> = ({ className, onClick }) => {

  return (
    <div
      onClick={onClick}
      className={`${className} slider_arrow arrow_right slick-arrow`}
    >
      <FontAwesome name="angle-right" />
    </div>
  );
}
export interface PageSamplePrevArrowProps {
  onClick?: () => void;
  className?: string;
}

const SamplePrevArrow: FC<PageSamplePrevArrowProps> = ({ className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${className} slider_arrow arrow_left slick-arrow`}
    >
      <FontAwesome name="angle-left" />
    </div>
  );
}
export interface PagePostGalleryProps {
  className?:string
  topComment?: ArticleDataType[]
  topCount?: ArticleDataType[]
  topShare?: ArticleDataType[]
}
const PostGallery: FC<PagePostGalleryProps> = ({className , topComment, topCount,topShare }) => {
  const [nav1, setNav1] = useState<Slider|null>(null);
  const [nav2, setNav2] = useState<Slider|null>(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const [vModal,setVModel]=useState(false)
  const [videoId,setVideoId]=useState("0r6C3z3TEKw")
  
  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  
  }, [])
  const modalHandler  = (value : boolean) => {
    setVModel(value)
    }

    const navSettings = {
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      slidesToShow: 8,
      swipeToSlide: true,
      focusOnSelect: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 8,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    };
    return (
      <div className={`post_gallary_area mb40 ${className}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-xl-8">
                  <div className="slider_demo2">
                    <Slider
                      asNavFor={nav2?nav2:undefined}
                      arrows={false}
                      fade={true}
                      ref={slider1}
                    >
                      {postSlider.slice(0, 9).map((item, i) => {
                        return (
                          <>
                            <div
                              key={i}
                              className="single_post post_type6 xs-mb30"
                            >
                              <div className="post_img gradient1">
                                <img 
                       
                                 src={item.image} alt="thumb" />
                                <span
                                  onClick={() => modalHandler(true)}
                                  className="tranding"
                                >
                                  <FontAwesome name="play" />
                                </span>
                              </div>
                              <div className="single_post_text">
                                <div className="meta meta_separator1">
                                  <Link href="">
                                    <a href="">{item.category}</a>
                                  </Link>
                                  <Link href="">
                                    <>
                                      <a href="">{item.date}</a>
                                    </>
                                  </Link>
                                </div>
                                <Link href="">
                                  <>
                                    <h4>
                                      <a href="" className="play_btn">
                                        {item.title}
                                      </a>
                                    </h4>
                                  </>
                                </Link>
                                <div className="space-10" />
                                <p className="post-p">{item.body}</p>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </Slider>
                  </div>
                  <div className="slider_demo1">
                    <Slider
                      ref={slider2}
                      asNavFor={nav1?nav1:undefined}
                      {...navSettings}
                    >
                      {thumbs.slice(0, 9).map((item, i) => (
                        <div key={i} className="single_gallary_item">
                          <img src={item} alt="thumb" />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
                <div className="col-xl-4">
                  
                 <WidgetTab dark={true} topComment={topComment} topCount={topCount} topShare ={topShare}/>  
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    );
  
}

export default PostGallery;
