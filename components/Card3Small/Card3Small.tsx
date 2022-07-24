import React, { FC } from "react";
import NcImage from "../../components/NcImage/NcImage";
import PostCardMeta from "../../components/PostCardMeta/PostCardMeta";
import { ArticleDataType, PostDataType } from "../../data/types";
import Link  from "next/link";
import { API_LINK } from "../../utils/constantes";

export interface Card3SmallProps {
  className?: string;
  post:ArticleDataType;
}

const Card3Small: FC<Card3SmallProps> = ({
  className = "h-full",
  post
}) => {
  console.log('here in article 4',post)
  const { title, image,tournois ,typearticle,author} = post;
let href = '/article?'+typearticle+'?'+title
  return (
    <div
      className={`nc-Card3Small relative flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center ${className}`}
      data-nc-id="Card3Small"
    >
          <>
      {/* className=" absolute inset-0" title={title} */}
      <Link href={href} >
        <a href={href}  className=" absolute inset-0" title={title} ></a>
      </Link>
      <div className="relative space-y-2">
        <PostCardMeta meta={{ ...post }} /> 
        <h2 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
        {/* className=" line-clamp-2"  */}
          <Link href={href}>
          <a href={href} className=" line-clamp-2"  >{title}</a>
          </Link>
        </h2>
      </div>
      {/* className={`block sm:w-20 flex-shrink-0 relative rounded-lg overflow-hidden mb-5 sm:ml-4 sm:mb-0 group`} */}

      <Link
        href={href}
      >
        <>
        <a href={href} className={` sm:w-20 flex-shrink-0 relative rounded-lg overflow-hidden mb-1 sm:ml-4 sm:mb-0 group`}>
        <div className={`w-full h-0 aspect-w-16 aspect-h-9 sm:aspect-h-16`}>
          <NcImage
            containerClassName="absolute inset-0 "
            style={{marginLeft:"auto"}}
            className="nc-will-change-transform object-cover w-full h-full group-hover:scale-110 transform transition-transform duration-300"
            src={API_LINK+image}
            title={title}
          />
        </div>
        </a>
        </>
      </Link>
      </> 
    </div>
  );
};

export default Card3Small;
