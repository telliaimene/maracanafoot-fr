import React, { FC } from "react";
import PostCardCommentBtn from "../../components/PostCardCommentBtn/PostCardCommentBtn";
import PostCardLikeContainer from "../../containers/PostCardLikeContainer/PostCardLikeContainer";
import { ArticleDataType, PostDataType } from "../../data/types";

export interface PostCardLikeAndCommentProps {
  className?: string;
  itemClass?: string;
  postData: ArticleDataType;
  url?:string;
  postId: ArticleDataType["_id"];
  hiddenCommentOnMobile?: boolean;
  onClickLike?: (id: ArticleDataType["_id"]) => void;
}

const PostCardLikeAndComment: FC<PostCardLikeAndCommentProps> = ({
  className = "",
  itemClass = "px-3 h-8 text-xs",
  url,
  hiddenCommentOnMobile = true,
  postData,
  onClickLike = () => {},
}) => {
  console.log('postdata',postData)
  return (
    <div
      className={`nc-PostCardLikeAndComment flex items-center space-x-2 ${className}`}
      data-nc-id="PostCardLikeAndComment"
    >
      <PostCardLikeContainer
        className={itemClass}
        like={postData?.likes?.length}
        liked={postData?postData.likes ? postData.likes.length>0 ?true : false :false:false}
        onClickLike={onClickLike}
        url={url ?url :undefined}
        postId={postData._id}
    
      />
      <PostCardCommentBtn
        href={"https;//maracanafoot.fr/article?"}
        commentCount={postData?.comments ? postData.comments.length : 0}
        className={`${
          hiddenCommentOnMobile ? "hidden sm:flex" : "flex"
        }  ${itemClass}`}
      />
    </div>
  );
};

export default PostCardLikeAndComment;
