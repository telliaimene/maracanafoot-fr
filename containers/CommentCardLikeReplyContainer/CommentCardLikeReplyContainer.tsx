import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { CommentType } from "../../data/types";
import {
  selectCommentRecentLikeds,
  selectCommentRecentRemoveds,
  removeLikedByPostId,
  addNewLikedByPostId,
} from "../../store/commentLikes/commentLikes";
import CommentCardLikeReply, {
  CommentCardLikeReplyProps,
} from "../../components/CommentCardLikeReply/CommentCardLikeReply";
import React, { FC ,useEffect ,useState} from "react";
import { useRouter } from "next/router";
import { UserID } from "../../store/login/auth";
import axios from "axios";
import { API_LINK } from "../../utils/constantes";
import { count } from "console";

export interface CommentCardLikeReplyContainerProps
  extends Pick<CommentCardLikeReplyProps, "onClickReply"> {
  className?: string;
  comment: CommentType;
  child: Boolean,
  idArticle: string|number
  onClickLike? :(id:string|number,id2:string|number) => void;
}

const CommentCardLikeReplyContainer: FC<CommentCardLikeReplyContainerProps> = ({
  className = "",
  comment,child,idArticle,onClickLike=()=>{},
  ...args
}) => {
  const { like, id ,parentId } = comment;
  
  const router = useRouter()
  const user = useAppSelector(UserID)
  const dispatch = useAppDispatch();
  const [isLike,setIsLike]=useState(false)
  const [likeCount,setLikeCount]=useState(0)
  
  useEffect(() => {
    console.log("commlike",comment,like)
    setLikeCount(like)
    isLiked()
    // dispatch(changeCurrentPage({ type: "/single/:slug", data: SINGLE_VIDEO }));
    // return () => {
    //   dispatch(changeCurrentPage({ type: "/", data: {} }));
    // };
  }, [like]);
  
  const isLiked = () => {
    let URLGet
    if (child === true){
      URLGet ="v1/response-likes/"+idArticle+'/'+parentId+'/' +id +"/"+user 
    } else{
      URLGet ="v1/comments-likes/"+idArticle+'/'+id+"/"+user}
   
    
    axios.get(API_LINK + URLGet)
    .then((response) => {
      console.log("tiiiimeee",response.data)
      setIsLike(response.data)
     })
    .catch((err) => {
      console.log(err);
    });
    
  };

  
  const handleClickLike = () => {
    let URLGet
    if (child){
      URLGet = "v1/response-likes/"+idArticle+'/'+parentId+'/'+id+"/"+user
    } else{
      URLGet ="v1/comments-likes/"+idArticle+'/'+id+"/"+user
    }
    console.log("tiiiimeee-click",idArticle+'/'+id+"/"+user)
    let valueBody
    if (isLike) {
       valueBody = 
      {
        value:"dislike"
      }
      setLikeCount(likeCount-1)
    } else {
       valueBody = 
      {
        value:"like"
      }
      setLikeCount(likeCount+1)
    }
    
    axios.put(API_LINK + URLGet, valueBody)
        .then(res => {
              console.log("in res likes",res.data)  
              isLiked() 
        })
        .catch(err => {
            console.log("err", err)
            console.log('add like/dislike failed',err)
        })

   // onClickLike && onClickLike(idArticle,id);
  };


  return (
   
    <CommentCardLikeReply
      className={className}
      onClickLike={handleClickLike}
      commentId={id}
      // replayStateChildren={child}
      isLiked={isLike}
      likeCount={likeCount}
      {...args}
    />
  );
};

export default CommentCardLikeReplyContainer;
