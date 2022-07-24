import React, { useState, FC } from "react";
import Link from "next/link";
import FontAwesome from "../uiStyle/FontAwesome";
import Swiper from "react-id-swiper";
import { mostViewSort } from "../../utils/commonFunctions";
import { ArticleDataType } from "../../data/types";

// images
// import popularsm1 from '../../doc/img/popular/popularsm1.jpg';
// import popularsm2 from '../../doc/img/popular/popularsm2.jpg';
// import popularsm3 from '../../doc/img/popular/popularsm3.jpg';
// import popularsm4 from '../../doc/img/popular/popularsm4.jpg';
// import popularsm5 from '../../doc/img/popular/popularsm5.jpg';

//import './style.scss';

export interface PagePopularPostsProps {}
const populerPOsts: ArticleDataType[] = [
  {
    typearticle: "football",
    content: "aaaa",
    comments: [
      {
        _id: "aaaaa",
        user: {
          _id: "5e39764dd61ac4029af5adb9",
          name: "Tebani",
          lastname: "Mohemad",
          mail: "moh@gmail.com",
          picture: "images/doc/img/most_view/mostsm1.jpg",
        },
        date: "12/05/1992",

        description: "string",
        isModerate: "string",
        likes: [],
      },
    ],
    bookmarked: [
      {
        user: "String | number",
      },
    ],
    countPartage: 5,
    countVisit: 5,
    keyWord: [],
    image: "aaa",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Nancy zhang a chinese busy woman and dhaka",
    _id: "1",
    author: {
      id: "5e39764dd61ac4029af5adb9",
      firstName: "Tebani",
      lastName: "Mohemad",
      email: "moh@gmail.com",
      picture: "images/doc/img/most_view/mostsm1.jpg",
      name: "aaa",
      displayName: "aaaa",
      avatar: "images/doc/img/most_view/mostsm1.jpg",
      bgImage: "images/doc/img/most_view/mostsm1.jpg",
      href: "https://maracanafoot.fr",
      count: 4,
      desc: "dsfdsdsfdsfdf",
      jobName: "artiste",
    },
  },
  {
    typearticle: "football",
    content: "aaaa",
    comments: [
      {
        _id: "aaaaa",
        user: {
          _id: "5e39764dd61ac4029af5adb9",
          name: "Tebani",
          lastname: "Mohemad",
          mail: "moh@gmail.com",
          picture: "images/doc/img/most_view/mostsm1.jpg",
        },
        date: "12/05/1992",

        description: "string",
        isModerate: "string",
        likes: [],
      },
    ],
    bookmarked: [
      {
        user: "String | number",
      },
    ],
    countPartage: 5,
    countVisit: 5,
    keyWord: [],
    image: "aaa",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Nancy zhang a chinese busy woman and dhaka",
    _id: "1",
    author: {
      id: "5e39764dd61ac4029af5adb9",
      firstName: "Tebani",
      lastName: "Mohemad",
      email: "moh@gmail.com",
      picture: "images/doc/img/most_view/mostsm1.jpg",
      name: "aaa",
      displayName: "aaaa",
      avatar: "images/doc/img/most_view/mostsm1.jpg",
      bgImage: "images/doc/img/most_view/mostsm1.jpg",
      href: "https://maracanafoot.fr",
      count: 4,
      desc: "dsfdsdsfdsfdf",
      jobName: "artiste",
    },
  },
  {
    typearticle: "football",
    content: "aaaa",
    comments: [
      {
        _id: "aaaaa",
        user: {
          _id: "5e39764dd61ac4029af5adb9",
          name: "Tebani",
          lastname: "Mohemad",
          mail: "moh@gmail.com",
          picture: "images/doc/img/most_view/mostsm1.jpg",
        },
        date: "12/05/1992",

        description: "string",
        isModerate: "string",
        likes: [],
      },
    ],
    bookmarked: [
      {
        user: "String | number",
      },
    ],
    countPartage: 5,
    countVisit: 5,
    keyWord: [],
    image: "aaa",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Nancy zhang a chinese busy woman and dhaka",
    _id: "1",
    author: {
      id: "5e39764dd61ac4029af5adb9",
      firstName: "Tebani",
      lastName: "Mohemad",
      email: "moh@gmail.com",
      picture: "images/doc/img/most_view/mostsm1.jpg",
      name: "aaa",
      displayName: "aaaa",
      avatar: "images/doc/img/most_view/mostsm1.jpg",
      bgImage: "images/doc/img/most_view/mostsm1.jpg",
      href: "https://maracanafoot.fr",
      count: 4,
      desc: "dsfdsdsfdsfdf",
      jobName: "artiste",
    },
  },
  {
    typearticle: "football",
    content: "aaaa",
    comments: [
      {
        _id: "aaaaa",
        user: {
          _id: "5e39764dd61ac4029af5adb9",
          name: "Tebani",
          lastname: "Mohemad",
          mail: "moh@gmail.com",
          picture: "images/doc/img/most_view/mostsm1.jpg",
        },
        date: "12/05/1992",

        description: "string",
        isModerate: "string",
        likes: [],
      },
    ],
    bookmarked: [
      {
        user: "String | number",
      },
    ],
    countPartage: 5,
    countVisit: 5,
    keyWord: [],
    image: "aaa",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Nancy zhang a chinese busy woman and dhaka",
    _id: "1",
    author: {
      id: "5e39764dd61ac4029af5adb9",
      firstName: "Tebani",
      lastName: "Mohemad",
      email: "moh@gmail.com",
      picture: "images/doc/img/most_view/mostsm1.jpg",
      name: "aaa",
      displayName: "aaaa",
      avatar: "images/doc/img/most_view/mostsm1.jpg",
      bgImage: "images/doc/img/most_view/mostsm1.jpg",
      href: "https://maracanafoot.fr",
      count: 4,
      desc: "dsfdsdsfdsfdf",
      jobName: "artiste",
    },
  },
  {
    typearticle: "football",
    content: "aaaa",
    comments: [
      {
        _id: "aaaaa",
        user: {
          _id: "5e39764dd61ac4029af5adb9",
          name: "Tebani",
          lastname: "Mohemad",
          mail: "moh@gmail.com",
          picture: "images/doc/img/most_view/mostsm1.jpg",
        },
        date: "12/05/1992",

        description: "string",
        isModerate: "string",
        likes: [],
      },
    ],
    bookmarked: [
      {
        user: "String | number",
      },
    ],
    countPartage: 5,
    countVisit: 5,
    keyWord: [],
    image: "aaa",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Nancy zhang a chinese busy woman and dhaka",
    _id: "1",
    author: {
      id: "5e39764dd61ac4029af5adb9",
      firstName: "Tebani",
      lastName: "Mohemad",
      email: "moh@gmail.com",
      picture: "images/doc/img/most_view/mostsm1.jpg",
      name: "aaa",
      displayName: "aaaa",
      avatar: "images/doc/img/most_view/mostsm1.jpg",
      bgImage: "images/doc/img/most_view/mostsm1.jpg",
      href: "https://maracanafoot.fr",
      count: 4,
      desc: "dsfdsdsfdsfdf",
      jobName: "artiste",
    },
  },
  {
    typearticle: "football",
    content: "aaaa",
    comments: [
      {
        _id: "aaaaa",
        user: {
          _id: "5e39764dd61ac4029af5adb9",
          name: "Tebani",
          lastname: "Mohemad",
          mail: "moh@gmail.com",
          picture: "images/doc/img/most_view/mostsm1.jpg",
        },
        date: "12/05/1992",

        description: "string",
        isModerate: "string",
        likes: [],
      },
    ],
    bookmarked: [
      {
        user: "String | number",
      },
    ],
    countPartage: 5,
    countVisit: 5,
    keyWord: [],
    image: "aaa",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Nancy zhang a chinese busy woman and dhaka",
    _id: "1",
    author: {
      id: "5e39764dd61ac4029af5adb9",
      firstName: "Tebani",
      lastName: "Mohemad",
      email: "moh@gmail.com",
      picture: "images/doc/img/most_view/mostsm1.jpg",
      name: "aaa",
      displayName: "aaaa",
      avatar: "images/doc/img/most_view/mostsm1.jpg",
      bgImage: "images/doc/img/most_view/mostsm1.jpg",
      href: "https://maracanafoot.fr",
      count: 4,
      desc: "dsfdsdsfdsfdf",
      jobName: "artiste",
    },
  },
  {
    typearticle: "football",
    content: "aaaa",
    comments: [
      {
        _id: "aaaaa",
        user: {
          _id: "5e39764dd61ac4029af5adb9",
          name: "Tebani",
          lastname: "Mohemad",
          mail: "moh@gmail.com",
          picture: "images/doc/img/most_view/mostsm1.jpg",
        },
        date: "12/05/1992",

        description: "string",
        isModerate: "string",
        likes: [],
      },
    ],
    bookmarked: [
      {
        user: "String | number",
      },
    ],
    countPartage: 5,
    countVisit: 5,
    keyWord: [],
    image: "aaa",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Nancy zhang a chinese busy woman and dhaka",
    _id: "1",
    author: {
      id: "5e39764dd61ac4029af5adb9",
      firstName: "Tebani",
      lastName: "Mohemad",
      email: "moh@gmail.com",
      picture: "images/doc/img/most_view/mostsm1.jpg",
      name: "aaa",
      displayName: "aaaa",
      avatar: "images/doc/img/most_view/mostsm1.jpg",
      bgImage: "images/doc/img/most_view/mostsm1.jpg",
      href: "https://maracanafoot.fr",
      count: 4,
      desc: "dsfdsdsfdsfdf",
      jobName: "artiste",
    },
  },
  {
    typearticle: "football",
    content: "aaaa",
    comments: [
      {
        _id: "aaaaa",
        user: {
          _id: "5e39764dd61ac4029af5adb9",
          name: "Tebani",
          lastname: "Mohemad",
          mail: "moh@gmail.com",
          picture: "images/doc/img/most_view/mostsm1.jpg",
        },
        date: "12/05/1992",

        description: "string",
        isModerate: "string",
        likes: [],
      },
    ],
    bookmarked: [
      {
        user: "String | number",
      },
    ],
    countPartage: 5,
    countVisit: 5,
    keyWord: [],
    image: "aaa",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "Nancy zhang a chinese busy woman and dhaka",
    _id: "1",
    author: {
      id: "5e39764dd61ac4029af5adb9",
      firstName: "Tebani",
      lastName: "Mohemad",
      email: "moh@gmail.com",
      picture: "images/doc/img/most_view/mostsm1.jpg",
      name: "aaa",
      displayName: "aaaa",
      avatar: "images/doc/img/most_view/mostsm1.jpg",
      bgImage: "images/doc/img/most_view/mostsm1.jpg",
      href: "https://maracanafoot.fr",
      count: 4,
      desc: "dsfdsdsfdsfdf",
      jobName: "artiste",
    },
  },
];
const PopularPosts: FC<PagePopularPostsProps> = () => {
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
    <div className="popular_carousel_area mb30 md-mt-30">
      <h2 className="widget-title">Popular Posts</h2>
      <div className="popular_carousel pt-15 multipleRowCarousel nav_style1">
        {/*CAROUSEL START*/}
        <Swiper getSwiper={setSwiper} {...params}>
          {mostViewSort(populerPOsts).map((item, i) => (
            <div key={i} className="single_post type10 widgets_small mb15">
              <div className="post_img">
                <div className="img_wrap">
                  <Link href="/">
                    <a>
                      <img src={item.image} alt="thubm" />
                    </a>
                  </Link>
                </div>
                <span className="tranding tranding_border"></span>
              </div>
              <div className="single_post_text">
                <Link href="">
                  <>
                    <h4>
                      {" "}
                      <a href="">{item.title} </a>
                    </h4>
                  </>
                </Link>
                <div className="meta4">
                  <Link href="">
                    <>
                      <a href="">{item.category} </a>
                    </>
                  </Link>
                </div>
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
        {/*CAROUSEL END*/}
      </div>
    </div>
  );
};

export default PopularPosts;
