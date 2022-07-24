import React, { FC, ReactNode, useEffect } from "react";
import { PostDataType, TaxonomyType } from "../../data/types";
import NcImage from "../../components/NcImage/NcImage";

import { CommentType } from "../../data/types";
import { useAppDispatch } from "../../store/hooks";
import { changeCurrentPage } from "../../store/pages/pages";
import SingleRelatedPosts from "./SingleRelatedPosts";
import SingleHeader from "./SingleHeader";

export interface PageSingleTemplate2Props {
  className?: string;
}

export interface SinglePageType extends PostDataType {
  tags: TaxonomyType[];
  // content: string | ReactNode;
  // comments: CommentType[];
}

const PageSingleTemplate2: FC<PageSingleTemplate2Props> = ({
  className = "",
}) => {
  const dispatch = useAppDispatch();

  // UPDATE CURRENTPAGE DATA IN PAGEREDUCERS


  return (
    <>
      <div
        className={`nc-PageSingleTemplate2 pt-8 lg:pt-16 ${className}`}
        data-nc-id="PageSingleTemplate2"
      >

      </div>
    </>
  );
};

export default PageSingleTemplate2;
