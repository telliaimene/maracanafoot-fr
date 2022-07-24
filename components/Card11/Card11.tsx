import React, { FC, useState } from "react";
import PostCardSaveAction from "../../components/PostCardSaveAction/PostCardSaveAction";
import { ArticleDataType, PostDataType } from "../../data/types";
import Link  from "next/link";
import CategoryBadgeList from "../../components/CategoryBadgeList/CategoryBadgeList";
import PostCardLikeAndComment from "../../components/PostCardLikeAndComment/PostCardLikeAndComment";
import PostCardMeta from "../../components/PostCardMeta/PostCardMeta";
import PostFeaturedMedia from "../../components/PostFeaturedMedia/PostFeaturedMedia";

export interface Card11Props {
  className?: string;
  post: ArticleDataType;
  ratio?: string;
  hiddenAuthor?: boolean;
}

const Card11: FC<Card11Props> = ({
  className = "h-full",
  post,
  hiddenAuthor = false,
  ratio = "aspect-w-4 aspect-h-3",
}) => {
  console.log('here in card',post)
  const { title, date,typearticle ,tournois} = post;

  const href = '/article?'+typearticle+"?"+title
const sport=post?.typearticle
const categories=post?.category
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`nc-Card11 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="Card11"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={`block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden ${ratio}`}
      >
        <div>
          <PostFeaturedMedia post={post} isHover={isHover} />
        </div>
      </div>
      {/* className="absolute inset-0" */}
      <Link href={href} >
        <a href={href} className="absolute inset-0"></a>
      </Link>
      {categories?
      <span className="absolute top-3 inset-x-3">

        <CategoryBadgeList categories={categories}   typearticle={sport}/>
      </span>
      :null
      }

      <div className="p-4 flex flex-col flex-grow space-y-3">
        {!hiddenAuthor ? (
          <PostCardMeta meta={post} />
        ) : (
          <span className="text-xs text-neutral-500">{date}</span>
        )}
        <h2 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 ">
        {/* className="line-clamp-2" title={title} */}
          <Link href={href} >
          <a href={href} className="line-clamp-2"  >{title}</a>
          </Link>
        </h2>
        <div className="flex items-end justify-between mt-auto">
          <PostCardLikeAndComment className="relative" postData={post} postId ={post?._id} />
          <PostCardSaveAction className="relative" postData={post} dropdownPositon/>
        </div>
      </div>
    </div>
  );
};

export default Card11;
