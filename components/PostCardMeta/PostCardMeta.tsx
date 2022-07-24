import React, { FC } from "react";
import Avatar from "../../components/Avatar/Avatar";
import { ArticleDataType, AuthorType, PostDataType } from "../../data/types";
import Link  from "next/link";
import moment from "moment";
import { API_LINK } from "../../utils/constantes";

export interface PostCardMetaProps {
  className?: string;
  meta: ArticleDataType;
  hiddenAvatar?: boolean;
  size?: "large" | "normal";
}

const PostCardMeta: FC<PostCardMetaProps> = ({
  className = "leading-none",
  meta,
  hiddenAvatar = false,
  size = "normal",
}) => {
  const { date } = meta;
  console.log('auuuu',meta)
  let dateFormat = new Date( date );
    let options = { year: 'numeric', month: "short", day: "2-digit", timeZone: "UTC" };

  return (
    <div
      className={`nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 ${
        size === "normal" ? "text-xs" : "text-base"
      } ${className}`}
      data-nc-id="PostCardMeta"
    >
      <Link href ={"/"} >
      <>
        {!hiddenAvatar && (
          <Avatar
            radius="rounded-full"
            sizeClass={
              size === "normal" ? "h-7 w-7 text-sm" : "h-10 w-10 text-xl"
            }
             imgUrl={meta.author?.picture ? API_LINK+meta?.author?.picture : "https://www.maracanafoot.com/utils/images/avatar-159236__340.webp"}
            //userName= {meta?.author?.name + " " + meta?.author?.lastname}
          />
        )}
        &nbsp; &nbsp;
        <span className=" text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
          {meta?.author?.name + " " + meta?.author?.lastname}
        </span>
        </>
      </Link>
      <>
        <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
          ·
        </span>
        <span className="text-neutral-500 dark:text-neutral-400 font-normal">
          {dateFormat.toLocaleDateString( 'fr' ) }
        </span>
      </>
    </div>
  );
};

export default PostCardMeta;
