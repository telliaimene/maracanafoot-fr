import React, { FC, ReactNode, useEffect } from "react";
import { PostDataType, TaxonomyType } from "../../data/types";
import NcImage from "../../components/NcImage/NcImage";


import { CommentType } from "../../data/types";
import { useAppDispatch } from "../../store/hooks";
import { changeCurrentPage } from "../../store/pages/pages";
import SingleHeader from "./SingleHeader";
import SingleRelatedPosts from "./SingleRelatedPosts";

export interface PageSingleProps {
  className?: string;
}

export interface SinglePageType extends PostDataType {
  tags: TaxonomyType[];
  // content: string | ReactNode;
  // comments: CommentType[];
}

const PageSingle: FC<PageSingleProps> = ({ className = "" }) => {
  const dispatch = useAppDispatch();



  return (
    <>
      <div
        className={`nc-PageSingle pt-8 lg:pt-16 ${className}`}
        data-nc-id="PageSingle"
      >
      
      </div>
    </>
  );
};

export default PageSingle;
