import React, { FC } from "react";
import NcImage from "../../components/NcImage/NcImage";
import PostCardSaveAction from "../../components/PostCardSaveAction/PostCardSaveAction";
import moment from "moment";
import { ArticleDataType, PostDataType } from "../../data/types";
import Link  from "next/link";
import PostCardLikeAndComment from "../../components/PostCardLikeAndComment/PostCardLikeAndComment";
import CategoryBadgeList from "../../components/CategoryBadgeList/CategoryBadgeList";
import PostTypeFeaturedIcon from "../../components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import PostFeaturedMedia from "../../components/PostFeaturedMedia/PostFeaturedMedia";
import { API_LINK } from "../../utils/constantes";

export interface Card9Props {
  className?: string;
  ratio?: string;
  post: ArticleDataType;
  hoverClass?: string;
  _id?: string |number
}

const Card9: FC<Card9Props> = ({
  className = "h-full",
  ratio = "aspect-w-3 aspect-h-3 sm:aspect-h-4",
  post,
  _id,
  hoverClass = "",
}) => {
  console.log('authorarticles',post)
  const { title ,author, date ,tournois,typearticle,category } =
    post;
let hrefArt="/article?"+ typearticle + "?" + title
let href='/author?n='+author.name+'&p='+author.lastname
let sport= typearticle ;
  const renderMeta = () => {
    return (
      <div className="block items-center text-xs text-neutral-300">
        {/* className="block relative" */}
        
        <Link href={hrefArt} >
        <>
          <h2 className=" text-lg font-semibold text-white ">
            <span className="line-clamp-2" title={title}>
              {title}
            </span>
          </h2>
          <div className="flex mt-2.5">
            <span  style ={{color:"#8f8f8f" , fontWeight:"bold"}}className=" text-neutral-200 hover:text-white font-medium truncate">
              {author.name +" "+author.lastname}
            </span>
            <span className="mx-[6px] font-medium">·</span>
            <span style={{color :"#8f8f8f", fontWeight:"bold"}} className="font-normal truncate text-neutral-400">{moment(date).format("DD-MM-YYYY")}</span>
          </div>
          </>
        </Link> 
      </div>
    );
  };

  return (
    <div
      className={`nc-Card9 relative flex flex-col group rounded-3xl overflow-hidden ${hoverClass} ${className}`}
      data-nc-id="Card9"
   
    >
      <div className="absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 duration-300">
        {/* <PostCardLikeAndComment className="relative" postData={post} /> */}
        <PostCardSaveAction className="relative" postData={post}  dropdownPositon/>
      </div>
      <div className={`flex items-start relative w-full ${ratio}`}></div>
      {/* {postType === "audio" ? (
        <div className="absolute inset-0">
          <PostFeaturedMedia post={post} />
        </div>
      ) : ( */}
      
        <Link href={hrefArt}>
          <>
          <NcImage
            containerClassName="absolute inset-0 rounded-3xl"
            className="object-cover w-full h-full rounded-3xl"
            src={post.image}
          />
          <PostTypeFeaturedIcon
            className="absolute top-3 left-3 group-hover:hidden"
            postType={"standard"}
            wrapSize="w-7 h-7"
            iconSize="w-4 h-4"
          />
          <span className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </>
        </Link>
      {/* )} */}
      {/* className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black" */}
      <Link
        href={hrefArt}
        
      >
           <a href={hrefArt} className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black" ></a>
      </Link>
      <div className="absolute bottom-0 inset-x-0 p-4 flex flex-col flex-grow">
      {/* className="absolute inset-0" */}
        <Link href={hrefArt} >
          <a href={hrefArt} className="absolute inset-0" ></a>
           </Link>
        <div className="mb-3">
        <CategoryBadgeList categories={category}  />
        </div>
        {renderMeta()}
      </div>
    </div>
  );
};

export default Card9;
