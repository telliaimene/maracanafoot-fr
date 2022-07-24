import React, {useEffect,useState,FC } from "react";
import Link from "next/link";
import { ArticleDataType } from "../../data/types";
import { API_LINK } from '../../utils/constantes';
import axios from 'axios';
import moment from "moment";
export interface PageBusinessNewsProps {
  headerHide?:boolean
  data:ArticleDataType[]
}
const BusinessNews: FC<PageBusinessNewsProps> = ({ headerHide=false, data }) => {

  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

 
  return (
    <div className="row">
      <div className="col-12">
        <div className="businerss_news">
          {headerHide ? (
            ""
          ) :  ( 
            <>
            {data.length > 0 ?
              <>
              <div className="row">
              <div className="col-6 align-self-center">
                <h2 className="widget-title">PLUS D’INFOS</h2>
              </div>
              <div className="col-6 text-right align-self-center">
                <Link href="#">
                <>
                  {" "}
                 
                    {" "}
                    <a href="#" className="see_all mb20">
                      Voir Plus
                    </a>
                  </>
                </Link>
              </div>
            </div>    
            
            </>  : null}
           
            </>
          )}
          <div className="row">
            <div className="col-12">
              {!Loading ?
               <>   
              {data.map((item, i) => (
               
                <div
                  key={i}
                  className="single_post post_type3 post_type12 mb30"
                >
                  <div className="post_img">
                    <div className="img_wrap">
                      <Link href={"/article?"+ item.typearticle +"?" + item.title}>
                        <>
                          <img   style={{width:"482px", height:"250px"}} src={ item.image} alt="thumb" />
                        </>
                      </Link>
                    </div>
                  </div>
                  <div className="single_post_text">
                    <div className="meta3">
                      <Link href={"/article?"+ item.typearticle +"?" + item.title}>
                        <>
                          {" "}
                          <a href={"/article?"+ item.typearticle +"?" + item.title}>{item.category}</a>
                        </>
                      </Link>
                      <Link href={"/article?"+ item.typearticle +"?" + item.title}>
                        <>
                          {" "}
                          <a href={"/article?"+ item.typearticle +"?" + item.title}>{item.date}</a>
                        </>
                      </Link>
                    </div>
                    <Link href={"/article?"+ item.typearticle +"?" + item.title}>
                      <>
                        {" "}
                        <h4>
                          <a href={"/article?"+ item.typearticle +"?" + item.title}>
                         {item.title}
                          </a>
                        </h4>
                      </>
                    </Link>
                    <div className="space-10" />
                    {/* <p className="post-p">
                     {item.resumer}…
                    </p> */}
                    <div className="space-20" />
                    <Link href={"/article?"+ item.typearticle +"?" + item.title}>
                      <>
                        {" "}
                        <a href={"/article?"+ item.typearticle +"?" + item.title} className="readmore">
                          Lire la suite
                        </a>
                      </>
                    </Link>
                  </div>
                </div>
              ))} </> : null}
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessNews;
