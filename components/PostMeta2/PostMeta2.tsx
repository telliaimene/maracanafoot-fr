import React, { FC } from "react";
import Avatar from "../../components/Avatar/Avatar";
import { ArticleDataType, PostDataType } from "../../data/types";
import Link  from "next/link";
import { API_LINK } from "../../utils/constantes";
import moment from "moment";

export interface PostMeta2Props {
  className?: string;
  meta: Pick<ArticleDataType, "date" | "author" | "category" | "readingTime"|"countVisit">;
  hiddenCategories?: boolean;
  size?: "large" | "normal";
  avatarRounded?: string;
}

const PostMeta2: FC<PostMeta2Props> = ({
  className = "leading-none",
  meta,
  hiddenCategories = false,
  size = "normal",
  avatarRounded,
}) => {
  const { date, author, countVisit } = meta;
  let displayName = author?.lastname +" "+ author?.name
let desc = author?.biographie
let avatar = author?.picture  ? API_LINK +author?.picture : "https://www.maracanafoot.com/utils/images/avatar-159236__340.webp"
let href = '/author?n='+ author?.name +"&p="+ author?.lastname
  return (
    <div
      className={`nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 ${
        size === "normal" ? "text-xs" : "text-sm"
      } ${className}`}
      data-nc-id="PostMeta2"
    >
      <Link href={href} 
      // className="flex items-center space-x-2"
      >
         <>
         <a href={href} className="flex items-center space-x-2">
         <Avatar
          radius={avatarRounded}
          sizeClass={
            size === "normal"
              ? "h-6 w-6 text-sm"
              : "h-10 w-10 sm:h-11 sm:w-11 text-xl"
          }
          imgUrl={avatar}
          userName={displayName}
        />

         </a>
         </>
      
      </Link>
      <div className="ml-3">
        <div className="flex items-center">
          <Link href={href} 
        
          >
            <a className="block font-semibold text-neutral-900 dark:text-neutral-100" href="">{displayName}</a>
            
          </Link>

          {!hiddenCategories && (
            <>
              <span className="mx-2 font-semibold">·</span>
              {/* <div className="ml-0">
                <span className="text-xs">🏷 </span>
                {categories.map((cat, index) => (

                  <Link key={cat.id} href={cat.href}
                
                   >
                     <>
                      <a  className="font-semibold" href={cat.href}>{cat.name}

                    
                    {index < categories.length - 1 && <span>, </span>}
                    </a>
                    </>
                  </Link>
                ))}
              </div> */}
            </>
          )}
        </div>
        <div className="text-xs mt-[6px]">
          <span  style ={{color:"#8f8f8f"}} className="text-neutral-700 dark:text-neutral-300">{moment(date).format('DD-MM-YYYY hh:mm')}</span>
          <span className="mx-2 font-semibold">·</span>
          <span  style ={{color:"#8f8f8f"}} className="text-neutral-700 dark:text-neutral-300">
            {countVisit} fois lu
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostMeta2;
