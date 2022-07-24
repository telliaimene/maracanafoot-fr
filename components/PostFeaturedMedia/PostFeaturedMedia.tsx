import React, { FC } from "react";
import NcImage from "../../components/NcImage/NcImage";
import { ArticleDataType, PostDataType } from "../../data/types";


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
  const { image, postType, videoUrl, galleryImgs, audioUrl } = post;

  const isPostMedia = () => postType === "video" || postType === "audio";

  const renderGallerySlider = () => {
    if (!galleryImgs) return null;
    return <div></div>
  };

  const renderContent = () => {
    // GALLERY
    if (postType === "gallery") {
      return renderGallerySlider();
    }

    // VIDEO
    if (postType === "video" && !!videoUrl && isHover) {
      return <div></div>;
    }

    // AUDIO
    if (postType === "audio" && !!audioUrl) {
      return <div></div>;
    }

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
      <NcImage containerClassName="absolute inset-0" src={postType == 'standard'? image: post?.image} />
      {renderContent()}
    </div>
  );
};

export default PostFeaturedMedia;
