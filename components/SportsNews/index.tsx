import React, { useState, useEffect ,FC} from "react";
import Link from "next/link";
import { ArticleDataType } from "../../data/types";
//import sportsbig1 from "../../doc/img/sports/sportsbig1.jpg";
import SportsCarousel from "../SportsCarousel";
import FontAwesome from "../uiStyle/FontAwesome";
import { API_LINK } from "../../utils/constantes";
import axios from "axios";

export interface PageSportsNewsProps {
  dark?: boolean;
  data:ArticleDataType
  data2:ArticleDataType[]
}

const SportsNews: FC<PageSportsNewsProps> = ({ dark , data, data2}) => {


  const [Loading, setLoading] = useState(true);
 
  useEffect(() => {


    if (data) {
      setLoading(false);
    }
  }, [data]);


  return (
    <div className="row">
      <div className="col-12"> {data?
        <div className="sports">
          <div className="row">
            
            
            <div className="col-12">
             
<div className="heading">
                <h2 className="widget-title">Les Autres infos principales</h2>
              </div>
            </div>
           
              
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="single_post post_type3 mb30">
             
      
        <>
          <div className="post_img">
            <Link href="">
              <>
                <img
                  style={{width:"482px", height:"250px"}}
                  src={data.image}
                  alt="sportsbig1"
                />
              </>
            </Link>
            <span className="tranding">
              <FontAwesome name="bolt" />
            </span>
          </div>

          <div className="single_post_text">
            <div className="meta3">
              <Link href="">
                <>
                  <a href="">{data.category}</a>
                </>
              </Link>
              <Link href="">
                <>
                  <a href="">
                    {data.date}
                  </a>
                </>
              </Link>
            </div>

            <Link href="">
              <>
                {" "}
                <h4>
                  {" "}
                  <a href="">{data.title}</a>
                </h4>
              </>
            </Link>
            <div className="space-10" />
            <p className="post-p">
            </p>
            <div className="space-20" />
            <Link href="">
              <>
                <a href="" className="readmore">
                  Lire la suite
                </a>
              </>
            </Link>
          </div>
        </>
            
            
          
              </div>
            </div>

            <div className="col-md-6">
              <div className="sports_carousel nav_style1">
                <SportsCarousel dark={dark ? dark : false} data={data2} />
              </div>
            </div>
          </div>
        </div> : null}
      </div>
    </div>
  );
};

export default SportsNews;
