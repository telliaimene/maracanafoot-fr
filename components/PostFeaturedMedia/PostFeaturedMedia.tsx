import React, { FC } from "react";
import NcImage from "../../components/NcImage/NcImage";
import { ArticleDataType } from "../../data/types";


import PostTypeFeaturedIcon from "../../components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";

import { API_LINK } from "../../utils/constantes";

export interface PostFeaturedMediaProps {
  className?: string;
  post: ArticleDataType;
  isHover?: boolean;
}

const PostFeaturedMedia: FC<PostFeaturedMediaProps> = ({
  className = "w-full h-full",
  post,
  isHover = false,
}) => {
  console.log("post page author", post)
  const { image, postType} = post;

  const isPostMedia = () => postType === "video" || postType === "audio";



  const renderContent = () => {
    // GALLERY
    if (postType === "gallery") {
      return <div></div>;
    }

    // VIDEO
   

    // AUDIO
 

    // ICON
    return (
      <div className="absolute inset-0">
        {isPostMedia() &&(
          <span className="absolute inset-0 flex items-center justify-center ">
            <PostTypeFeaturedIcon
              className="hover:scale-105 transform cursor-pointer transition-transform nc-will-change-transform"
              postType={postType}
            />
          </span>
          
        )  
        }
      </div>
    );
  };

  return (
    <div
      className={`nc-PostFeaturedMedia relative ${className}`}
      data-nc-id="PostFeaturedMedia"
    >
      <NcImage containerClassName="absolute inset-0" src={postType == 'standard'? image: image} />
      {renderContent()}
    </div>
  );
};

export default PostFeaturedMedia;
