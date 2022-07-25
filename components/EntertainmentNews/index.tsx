import React, { Fragment ,useState, useEffect,FC} from "react";
import { ArticleDataType } from "../../data/types";
import Link from "next/link";
import { API_LINK } from "../../utils/constantes";
import axios from "axios";
export interface PageEntertainmentNewsProps {
  data:ArticleDataType[]
}

const EntertainmentNews: FC<PageEntertainmentNewsProps> = ({   data  }) => {
  console.log("entrainment", data)
 
  return (
    <Fragment>
      {data.map((item, i) => (
        
        <div key={i} className="col-lg-6">
          <div className="single_post post_type3 mb30">
            <div className="post_img">
              <div className="img_wrap">
                <Link href={"/article?"+ item.typearticle  +"?" + item.title}>
                  <>
                    <img style={{width:"482px", height:"250px"}} src={ item.image} alt="thumb" />
                  </>
                </Link>
              </div>
            </div>
            <div className="single_post_text">
              <div className="meta3">
                <Link href="">
                <>
                  {" "}
                 
                  <span
            style={{color: "#061da5", fontWeight: "bold" , fontSize:"14px"}}
          >
            {item.category}
          </span>                  </>
                </Link>
                <Link href={"/article?"+ item.typearticle  +"?" + item.title}>
                  <>
                    <a href={"/article?"+ item.typearticle  +"?" + item.title}>{item.date.split('T')[0]}</a>
                  </>
                </Link>
              </div>
              <Link href={"/article?"+ item.typearticle  +"?" + item.title}>
                <>
                  <h4>
                    {" "}
                    <a href={"/article?"+ item.typearticle  +"?" + item.title}>{item.title}</a>
                  </h4>
                </>
              </Link>
              <div className="space-10" />
              {/* <p className="post-p">{item.resumer.substring(0,100)}...</p> */}
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default EntertainmentNews;
