import { TaxonomyType } from "../../data/types";
import React, { FC } from "react";
import  Link  from "next/link";

export interface TagProps {
  className?: string;
  tag: TaxonomyType;
  hideCount?: boolean;
  type:string 
}

const Tag: FC<TagProps> = ({ className = "", tag,type, hideCount = false }) => {
console.log("tag", tag)
  return (
    <Link
      data-nc-id="Tag"
      // href={tag.href}
      href={'/'}
    >
      <>
      {/* <a href={tag.href}       className={`nc-Tag inline-block   text-sm text-neutral-600 py-2 px-3 rounded-lg border border-neutral-100 md:py-2.5 md:px-4 dark:bg-neutral-700 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-6000 ${className}`} */}
      <a href={"/tags?"+`${tag.tag}`}  className={`nc-Tag inline-block text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg  border-neutral-100 md:py-2.5 md:px-4 bg-neutral-50 dark:bg-neutral-700 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-6000  ${className}`}>
     {type == 'sidebar' ? `${tag.tag}` : `${tag}`} 
      {!hideCount && (
         <span className="text-xs font-normal"> ({tag.count})</span>
      )}
      </a>
      </>
    </Link>
  );
};

export default Tag;
