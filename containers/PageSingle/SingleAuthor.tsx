import Avatar from "../../components/Avatar/Avatar";
import { PostAuthorType } from "../../data/types";
import React, { FC } from "react";
import Link  from "next/link";
import { API_LINK } from "../../utils/constantes";
import { useRouter } from "next/router";

export interface SingleAuthorProps {
  author: PostAuthorType|undefined;
}

const SingleAuthor: FC<SingleAuthorProps> = ({ author }) => {

const router= useRouter()
console.log('author',router)
let displayName = author?.lastname +" "+ author?.name
let desc = author?.biographie
let avatar =author?.picture ? API_LINK +author?.picture : "https://www.maracanafoot.com/utils/images/avatar-159236__340.webp"
let href = '/author?n='+ author?.name +"&p="+ author?.lastname
  return (
    <div className="nc-SingleAuthor flex">
      <Link href={href}>
        <>
        <a href={href}>
        <Avatar
          imgUrl={avatar}
          userName={displayName}
          sizeClass="h-12 w-12 text-lg sm:text-xl sm:h-24 sm:w-24 "
          radius="rounded-xl"
        />
        </a>
        </>
      </Link>
      <div className="flex flex-col ml-3 max-w-lg sm:ml-5">
        <span style ={{color:"#061da5", fontWeight:"bold"}}className="text-xs text-neutral-400 uppercase tracking-wider">
        ÉCRIT PAR
        </span>
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
          <Link href={href}>{displayName}</Link>
        </h2>
        <span className="text-sm text-neutral-500 sm:text-base dark:text-neutral-300">
           {desc}
          <Link 
          // className="text-primary-6000 font-medium ml-1" 
          href={href}>
           <a href= {href} style={{color:"#8f8f8f"}} className="text-primary-6000 font-medium ml-1" >Plus de détails</a>
         
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SingleAuthor;
