import NcBookmark, { NcBookmarkProps } from "../../components/NcBookmark/NcBookmark";
import React,{useEffect,useState} from "react";
import { useAppSelector } from "../../store/hooks";
import { UserID } from "../../app/login/auth";
import {
  addNewSavedByPostId,
  removeSavedByPostId,
  selectRecentSaveds,
  selectRecentRemoveds,
} from "../../store/bookmarks/bookmarksSlice";
import { useRouter } from "next/router";
import axios from "axios";
import { API_LINK } from "../../utils/constantes";

export type BookmarkContainerProps = Omit<NcBookmarkProps, ""> 

const BookmarkContainer: React.FC<BookmarkContainerProps> = (props) => {
  const { postId ,isBookmarked} = props;
  console.log('bookmark',isBookmarked)
  // const isBookmarked = () => {
  //   if (recentSaveds.includes(postId)) {
  //     return true;
  //   }
  //   if (initBookmarked && !recentRemoveds.includes(postId)) {
  //     return true;
  //   }
  //   return false;
  // };

  // const handleClickBookmark = () => {
  //   if (isBookmarked()) {
  //     dispatch(removeSavedByPostId(postId));
  //   } else {
  //     dispatch(addNewSavedByPostId(postId));
  //   }
  // };
  const router = useRouter()
  const user= useAppSelector(UserID)
  const [isSaved,setIsSaved]= useState(isBookmarked)
  
  useEffect(() => {
    ArticleIsBookmarked()
  
  }, [isSaved]);
  
  const ArticleIsBookmarked = () => {
    let URLGet
   
      URLGet ="v1/articles-bookmark/"+postId+"/"+user
   
    axios.get(API_LINK + URLGet)
    .then((response) => {
      setIsSaved(response.data)
     })
    .catch((err) => {
      console.log(err);
    });
    
  };

  
  const handleClickBookmark = () => {
    let URLGet
      URLGet ="v1/setBookmarkArticle"
   
    console.log("tiiiimeee-click")
    let valueBody
    if (isSaved) {
       valueBody = 
      {
        user:user,
        id:postId,
        value:"unsaved"
      }
    } else {
       valueBody = 
      {
        user:user,
        id:postId,
        value:"saved"
      }
    }
    
    axios.put(API_LINK + URLGet, valueBody)
        .then(res => {
              console.log("hdfgdjkfgb",res.data)
              //setLikeCount(res.data.likes.length)
              setIsSaved(!isSaved)
        })
        .catch(err => {
            console.log("err", err)
            console.log('add like/dislike failed',err)
        })

  };
  return (
    <NcBookmark
      onClick={handleClickBookmark}
      isBookmarked={isSaved}
      // {...props}
      postId={postId}
    />
  );
};

export default BookmarkContainer;
