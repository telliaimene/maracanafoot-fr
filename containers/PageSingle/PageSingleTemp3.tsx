import React, { FC, ReactNode, useEffect } from "react";
import { PostDataType, TaxonomyType } from "../../data/types";

import { CommentType } from "../../data/types";
import SingleRelatedPosts from "./SingleRelatedPosts";
import { useAppDispatch } from "../../store/hooks";
import { changeCurrentPage } from "../../store/pages/pages";
import SingleHeader from "./SingleHeader";

export interface PageSingleTemplate3Props {
  className?: string;
}

export interface SinglePageType extends PostDataType {
  tags: TaxonomyType[];
  // content: string | ReactNode;
  // comments: CommentType[];
}

const PageSingleTemplate3: FC<PageSingleTemplate3Props> = ({
  className = "",
}) => {
  const dispatch = useAppDispatch();


  return (
    <>
      <div
        className={`nc-PageSingleTemplate3 ${className}`}
        data-nc-id="PageSingleTemplate3"
      >
    
      </div>
    </>
  );
};

export default PageSingleTemplate3;
