import React, { FC } from "react";
import { PostAuthorType } from "../../data/types";
import Link  from "next/link";
import Avatar from "../../components/Avatar/Avatar";
import { API_LINK } from "../../utils/constantes";

export interface CardAuthorProps {
  className?: string;
  author: PostAuthorType;
}

const CardAuthor: FC<CardAuthorProps> = ({ className = "", author }) => {
  const { lastname,name,  picture } = author;
  let href = "/author?n="+name+"&p="+lastname;
  let job="Auteur";
  return (
    // className={`nc-CardAuthor flex items-center ${className}`}
    // data-nc-id="CardAuthor"
    <div data-nc-id="CardAuthor" >
    <Link
      href={href}
    > 
    <>
       <a href={href} className={`nc-CardAuthor flex items-center ${className}`}>
      
      <Avatar
        sizeClass="h-10 w-10 text-base"
        containerClassName="flex-shrink-0 mr-4"
        radius="rounded-full"
        imgUrl={ picture ? API_LINK+ picture : "https://www.maracanafoot.com/utils/images/avatar-159236__340.webp"}
        userName={name +" "+lastname}
      />
      <div>
        <h2
          className={`text-base text-neutral-900 dark:text-neutral-100 font-semibold`}
        >
          {name +" "+lastname}
        </h2>
        <span
          className={`block mt-[2px] text-xs text-neutral-500 dark:text-neutral-400`}
        >
          {job}
        </span>
      </div>
      </a>
      </>
    </Link>
    </div>
  );
};

export default CardAuthor;
