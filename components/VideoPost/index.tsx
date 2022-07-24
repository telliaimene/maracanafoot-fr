import React, { useState,FC } from "react";
import Link from "next/link";
// import video1 from "../../doc/img/video/video1.jpg";
import FontAwesome from "../uiStyle/FontAwesome";
// import ModalVideo from "react-modal-video";
import PopularPosts from "../PopularPosts";
export interface PageVideoPostProps {
  dark?: string;
  className?: string;
}

const VideoPost: FC<PageVideoPostProps> = ({ className, dark }) => {

  const [vModal, setvModal] = useState(false);
  const [videoId] = useState("0r6C3z3TEKw");
  return (
    <div className={`video_posts ${className ? className : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading white">
              <h2 className="widget-title">Video News</h2>
            </div>
          </div>
        </div> 
        <div className="space-50" />
        <div className={`viceo_posts_wrap`}>
          <div className="row">
             <div className="col-lg-8">
              <div className="single_post post_type3 post_type11 margintop-60- xs-mb30">
                <div className="post_img">
                  <div className="img_wrap">
                    <Link href="">
                      <>
                        <a href="" className="play_btn">
                          <img
                            src="/images/doc/img/video/video1.jpg"
                            alt="video1"
                          />
                        </a>
                      </>
                    </Link>
                  </div>
                  <p onClick={() => setvModal(true)} className="youtube_middle">
                    <FontAwesome name="youtube-play" />
                  </p>
                </div>
                <div
                  className={`single_post_text padding30 `}
                >
                  <div className="meta3">
                    <Link href="">
                    <>
                      {" "}
                  
                        <a href="">TECHNOLOGY</a>
                      </>
                    </Link>
                    <Link href="">
                    <>
                      {" "}
                     
                        <a href="">March 26, 2020</a>
                      </>
                    </Link>
                  </div>
                  <Link href="">
                  <>
                    {" "}
                 
                      <h4>
                    
                        <a href="">
                          Riots Report Shows London Needs To Maintain Police
                          Numbers, Says Mayor
                        </a>
                      </h4>
                    </>
                  </Link>
                </div>
              </div>
            </div>
          <div className="col-lg-4">
             <PopularPosts  />  
            </div> 
          </div>
        </div>
      </div>
      {/* <ModalVideo
        channel="youtube"
        isOpen={vModal}
        videoId={videoId}
        onClose={() => setvModal(false)}
      /> */}
    </div>
  );
};

export default VideoPost;
