import React, { FC ,useEffect,useState} from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  selectRecentLikeds,
  selectRecentRemoveds,
  removeLikedByPostId,
  addNewLikedByPostId,
} from "../../store/postLikes/postLikes";
import axios from "axios";
import { API_LINK } from "../../utils/constantes";
import { PostDataType } from "../../data/types";
import PostCardLikeAction, {
  PostCardLikeActionProps,
} from "../../components/PostCardLikeAction/PostCardLikeAction";
import { UserID, UserMail,onSetRedirectPath } from "../../app/login/auth";
import { useRouter } from "next/router";

export interface PostCardLikeContainerProps
  extends Omit<PostCardLikeActionProps, "isLiked" | "likeCount"> {
  like: number |undefined;
  liked:boolean ,
  postId:string|number
  url?:string

}

const PostCardLikeContainer: FC<PostCardLikeContainerProps> = ({
  like,
  postId,liked,
  url,
  onClickLike,
  ...args
}) => {
  

  const router = useRouter()
  const user = useAppSelector(UserID)
  const recentLikeds = useAppSelector(selectRecentLikeds);
  const recentRemoveds = useAppSelector(selectRecentRemoveds);
  const dispatch = useAppDispatch();
  const [isLike,setIsLike]=useState(false)
  const [likeCount,setLikeCount]=useState(like)
  
  useEffect(() => {
    console.log("tiiiimeee-useEffect",url,postId)
    // setLikeCount(like)
    isLiked()
    
  }, [like]);
  
  const isLiked = () => {
    console.log("tiiiimeee")
    let URLGet= "v1/articles-likes/"+postId+"/"+user
    axios.get(API_LINK + URLGet)
    .then((response) => {
      console.log('islike',response.data)
      setIsLike(response.data)
     })
    .catch((err) => {
      console.log(err);
    });
    
  };

  
  const handleClickLike = () => {
    console.log("tiiiimeee-click")
    let valueBody
    if (user){ if (isLike) {
       valueBody = 
      {
        value:"dislike"
      }
    } else {
       valueBody = 
      {
        value:"like"
      }
    }}else{
      console.log("API_LINK + url" , API_LINK + url)
      dispatch(onSetRedirectPath(url?url:"/")), router.push("/login") 
    }
   
    let URLGet= "v1/articles-likes/"+postId+"/"+user
    axios.put(API_LINK + URLGet, valueBody)
        .then(res => {
              console.log("hdfgdjkfgb",res)
              setLikeCount(res.data.likes.length)
              isLiked()
        })
        .catch(err => {
            console.log("err", err)
            isLiked()
            console.log('add like/dislike failed',err)
        })

    //onClickLike && onClickLike(postId);
  };

  
  return (
    // router.pathname.includes('archive-audio') ||
    
    <PostCardLikeAction
      {...args}
      isLiked={isLike}
      likeCount={likeCount ? likeCount : 0}
      postId={postId} 
      onClickLike={handleClickLike}
      
    />
   
  );
};

export default PostCardLikeContainer;
