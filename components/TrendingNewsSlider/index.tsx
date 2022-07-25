import React, {useState ,useEffect,FC} from 'react';
import { ArticleDataType } from '../../data/types';
import FontAwesome from "../uiStyle/FontAwesome";
import Link from "next/link";
import Swiper from 'react-id-swiper';
import { API_LINK } from "../../utils/constantes";
import axios from "axios";
//  


const trendingNews = [
    {
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'There may be no consoles in the future ea exec says',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
        image: '/images/doc/img/trending/trendbig1.jpg',
    },
    {
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Japan’s virus success has puzzled the world. Is its luck running out?',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
        image: '/images/doc/img/trending/trendbig2.jpg',
    },
    {
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'There may be no consoles in the future ea exec says',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
        image: '/images/doc/img/trending/trendbig1.jpg',
    },
];
export interface PageTrendingNewsSliderProps {

    data:ArticleDataType[]

  }
  
  const TrendingNewsSlider: FC<PageTrendingNewsSliderProps> = ({  data}) => {

    const [swiper, setSwiper] = useState<any>(null);
    
    const [Loading, setLoading] = useState(true);
   

    useEffect(() => {
        {console.log("sport new la une 2", data.length)}

        if (data  ){
            setLoading(false)
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
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            300: {
                slidesPerView: 1,
                spaceBetween: 20
            },
        }
    };
    return (
        <div className="carousel_post2_type3 nav_style1">
     {!Loading?
     
            <Swiper getSwiper={setSwiper} 
            // className="trancarousel"
             {...params}>
                {data.slice(0, 12).map((item, i) => (
                    <div key={i} className="single_post post_type3">
                        <div className="post_img">
                            <div className="img_wrap">
                            <a  href={"/article?"+ item.typearticle +"?" + item.title}>
                                <img style={{
                              width:'410px',
                              height:'255px'
                            }}src={item.image} alt="thumb"/>
                            </a>
                            </div>
                            {/* <span className="tranding"><FontAwesome name="fa-bolt"/></span> */}
                        </div>
                        <div className="single_post_text">
                            <div className="meta3"><Link  href={"/article?"+ item.typearticle +"?" + item.title}><> 
                                                <a  href={"/article?"+ item.typearticle +"?" + item.title}>{item.category} </a>
                                                    </></Link>
                                <Link  href={"/article?"+ item.typearticle +"?" + item.title}><> 
                                                <a  href={"/article?"+ item.typearticle +"?" + item.title}>{item.date} </a>
                                                    </></Link>
                            </div>
                            <Link  href={"/article?"+ item.typearticle +"?" + item.title}><> 
                            <h4>  <a  href={"/article?"+ item.typearticle +"?" + item.title}>{item.title} </a></h4>
                                                    </></Link>
                            <div className="space-10"/>
                            {/* <p className="post-p">{item.body.substring(0,200)}...</p> */}
                        </div>
                    </div>
                ))}
            </Swiper>
            : null}

            <div className="navBtns">
                <div onClick={goPrev} className="navBtn prevtBtn"><FontAwesome name="angle-left"/></div>
                <div onClick={goNext} className="navBtn nextBtn"><FontAwesome name="angle-right"/></div>
            </div>
        </div>
    );
};

export default TrendingNewsSlider;
