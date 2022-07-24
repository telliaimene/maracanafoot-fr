// import { PostActionDropdown } from "../../components/PostActionDropdown/PostActionDropdown";
import BookmarkContainer from "../../containers/BookmarkContainer/BookmarkContainer";
import { ArticleDataType, PostDataType } from "../../data/types";
import React, { FC } from "react";
import { useAppSelector } from "../../store/hooks";
import { UserID } from "../../app/login/auth";

export interface PostCardSaveActionProps
  extends Pick<any, "dropdownPositon"> {
  className?: string;
  classBgIcon?: string;
  readingTime?: number;
  hidenReadingTime?: boolean;
  postData: ArticleDataType;
}

const PostCardSaveAction: FC<PostCardSaveActionProps> = ({
  className = "",
  hidenReadingTime = false,
  classBgIcon,
  readingTime,
  postData,
}) => {
  const user= useAppSelector(UserID)
  const { bookmarked, _id } = postData;
  console.log("postdata bookmarked", postData)
const isBookMarked = postData? postData.bookmarked ? postData.bookmarked.length?postData.bookmarked.filter(x=>{ return x.user === user}).length>0  : false : false : false
console.log('here in test',isBookMarked)
return (
    <div
      className={`nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 ${className}`}
      data-nc-id="PostCardSaveAction"
    >
      {!hidenReadingTime && !!readingTime && (
        <span>{readingTime} min read</span>
      )}

      <BookmarkContainer
        //initBookmarked={isBookMarked}
        isBookmarked={isBookMarked}
        containerClassName={classBgIcon}
        postId={postData?._id}
      />
    </div>
  );
};

export default PostCardSaveAction;
