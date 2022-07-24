import React, { useState, FC } from 'react';
import Link from "next/link";
import FontAwesome from "../uiStyle/FontAwesome";
import Swiper from 'react-id-swiper';
import { YoutubeItem } from "../VideoPost"
// images
// import popularsm1 from '../../doc/img/popular/popularsm1.jpg';
// import popularsm2 from '../../doc/img/popular/popularsm2.jpg';
// import popularsm3 from '../../doc/img/popular/popularsm3.jpg';
// import popularsm4 from '../../doc/img/popular/popularsm4.jpg';
// import popularsm5 from '../../doc/img/popular/popularsm5.jpg';

//import './style.scss';


export interface PagePopularPostsProps {
    videos?: YoutubeItem[]

}
const populerPOsts = [
    {
        image: '/images/doc/img/popular/popularsm1.jpg',
        category: 'TECHNOLOGY',
        title: 'The property complete with a 30 seat screen room.',
    },
    {
        image: '/images/doc/img/popular/popularsm2.jpg',
        category: 'TECHNOLOGY',
        title: 'Cheap smartphone sensor could help you old.',
    },
    {
        image: '/images/doc/img/popular/popularsm3.jpg',
        category: 'TECHNOLOGY',
        title: 'Harbour amid a Slowen the down in singer city',
    },
    {
        image: '/images/doc/img/popular/popularsm4.jpg',
        category: 'TECHNOLOGY',
        title: 'The secret to moving this from sphinx screening',
    },
    {
        image: '/images/doc/img/popular/popularsm5.jpg',
        category: 'TECHNOLOGY',
        title: 'Harbour amid a Slowen the down in singer city',
    },
    {
        image: '/images/doc/img/popular/popularsm1.jpg',
        category: 'TECHNOLOGY',
        title: 'The property complete with a 30 seat screen room.',
    },
    {
        image: '/images/doc/img/popular/popularsm2.jpg',
        category: 'TECHNOLOGY',
        title: 'Cheap smartphone sensor could help you old.',
    },
    {
        image: '/images/doc/img/popular/popularsm3.jpg',
        category: 'TECHNOLOGY',
        title: 'Harbour amid a Slowen the down in singer city',
    },
    {
        image: '/images/doc/img/popular/popularsm4.jpg',
        category: 'TECHNOLOGY',
        title: 'The secret to moving this from sphinx screening',
    },
    {
        image: '/images/doc/img/popular/popularsm5.jpg',
        category: 'TECHNOLOGY',
        title: 'Harbour amid a Slowen the down in singer city',
    },
];
const PopularPosts: FC<PagePopularPostsProps> = ({ videos }) => {

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
        slidesPerColumn: 5,
    };
    return (
        <div className="popular_carousel_area mb30 md-mt-30">
            {videos ?
                <div className="popular_carousel pt-15 multipleRowCarousel nav_style1">
                    {/*CAROUSEL START*/}
                    <Swiper getSwiper={setSwiper} {...params}>
                        {videos.map((item, i) => (
                            <div key={i} className="single_post type10 widgets_small mb15">
                                <div className="post_img">
                                    <div className="img_wrap">
                                        {/* <img src={item.snippet.thumbnails.high.url} alt="thumb" /> */}
                                        <div className="videoWrapper">
                                            <iframe
                                                src={'https://www.youtube.com/embed/' + item.id.videoId}
                                                frameBorder="0"
                                                allowFullScreen
                                                width="600"
                                                height="480"
                                            >
                                            </iframe>


                                        </div>
                                        {/* <span className="tranding">
                                            <FontAwesome name="bolt" />
                                        </span> */}
                                    </div>
                                    {/* <span className="tranding">
                                        <FontAwesome name="bolt" />
                                    </span> */}
                                </div>
                                <div className="single_post_text">

                                    <Link href="">
                                        <>
                                            <h4>
                                                <a href={'https://www.youtube.com/watch?v=' + item.id.videoId} target="_blank">{item.snippet.title} </a>
                                            </h4>
                                        </>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </Swiper>
                    <div className="navBtns text-left">
                        <div onClick={goPrev} className="navBtn prevtBtn"><FontAwesome name="angle-left" /></div>
                        <div onClick={goNext} className="navBtn nextBtn"><FontAwesome name="angle-right" /></div>
                    </div>
                    {/*CAROUSEL END*/}
                </div> : null}
        </div>
    );
};

export default PopularPosts;
