import React, { useState,FC ,useEffect} from "react";
import Link from "next/link";
import moment from "moment";
// import video1 from "../../doc/img/video/video1.jpg";
import FontAwesome from "../uiStyle/FontAwesome";
// import ModalVideo from "react-modal-video";
import PopularPosts from "../PopularPosts";
const New_API_KEY = 'AIzaSyBJKshABBTaPbTd4zuXDgADoRz5dVv10pM'
const channelID3 = 'UCuVphVU-nPfPZ36lV2SEXaQ'  //channel Maracana foot
const result = 100
let finalURL = 'https://www.googleapis.com/youtube/v3/search?key=' + New_API_KEY + '&channelId=' + channelID3 + '&part=snippet,id&order=date&maxResults=' + result


export interface Default {
  high: {
    height?: number,
    url: string,
    width?: number
  }
}
export interface YoutubeItem {
  snippet: {
    title: string,
    thumbnails: Default
    channelTitle:string
    publishedAt:Date
  },
  id :{
    videoId:string
  }

}
export interface PageVideoPostProps {
  dark?: string;
  className?: string;
}

const VideoPost: FC<PageVideoPostProps> = ({ className, dark }) => {

  const [vModal, setvModal] = useState(false);
  const [videoId] = useState("0r6C3z3TEKw");
  const [swiper, setSwiper] = useState<any>(null);
  const [videos, setVideo] = useState<YoutubeItem[] | undefined>()
  const [videosCounts, setVideosCounts] = useState([]);
  const [loadingVideos, setLoadingVideos] = useState(true);
  async function getVideos() {
    fetch(finalURL)
    .then((response) => response.json())
    .then((res) => {
      
      setVideo(res.items.slice(0,res.items.length-1))
    })
    .catch(err => {
      console.log(err)
  
        setLoadingVideos(false)
     
    })
  
  }
  useEffect(() => {
    getVideos()
  }, [])
  useEffect(() => {
    if (videos)
      console.log("videosss",videos)
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
  }, [videos])
  return (
    <div className={`video_posts ${className ? className : ""}`}>
      {!loadingVideos && videos ?
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading white">
              <br/>
              <h2 className="widget-title">Video News</h2>
            </div>
          </div>
        </div> 
        <div className="space-50" />
        <div className={`viceo_posts_wrap`}>
          <div className="row">
             <div className="col-lg-8">
              <div className="single_post post_type3 post_type11 margintop-60- xs-mb30 text-right">
                <div className="post_img">
                  <div className="videoWrapperBig">
                 
                      
                        <iframe
                  src={'https://www.youtube.com/embed/' + videos[0].id.videoId}
                  frameBorder="0" 
                  allowFullScreen
                  width="1460"
                  height="822"
                  >
                    </iframe>
                       
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
                  
                      <a href={'https://www.youtube.com/watch?v=' + videos[0].id.videoId} target="_blank">{videos[0].snippet.channelTitle} </a>
                      </>
                    </Link>
                    <Link href="">
                    <>
                      {" "}
                     
                      <a href={'https://www.youtube.com/watch?v=' + videos[0].id.videoId} target="_blank">{moment(videos[0].snippet.publishedAt).format("YYYY/MM/DD HH:mm")} </a>
                      </>
                    </Link>
                  </div>
                  <Link href="">
                  <>
                    {" "}
                      <h4>
                      <a href={'https://www.youtube.com/watch?v=' + videos[0].id.videoId} target="_blank">{videos[0].snippet.title} </a>
                      </h4>
                    </>
                  </Link>
                </div>
              </div>
            </div>
          <div className="col-lg-4">
             <PopularPosts videos={videos.slice(1)}/>  
            </div> 
          </div>
        </div>
      </div>
    :null}
    </div>
  );
};

export default VideoPost;
