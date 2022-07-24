import React, { FC, ReactNode, useEffect } from "react";
import { PostDataType, TaxonomyType } from "../../data/types";
import NcImage from "../../components/NcImage/NcImage";


import { CommentType } from "../../data/types";
import { useAppDispatch } from "../../store/hooks";
import { changeCurrentPage } from "../../store/pages/pages";
import { Sidebar } from "./Sidebar";
import SingleRelatedPosts from "./SingleRelatedPosts";
import SingleHeader from "./SingleHeader";

export interface PageSingleHasSidebarProps {
  className?: string;
}

export interface SinglePageType extends PostDataType {
  tags: TaxonomyType[];
  // content: string | ReactNode;
  // comments: CommentType[];
}

const PageSingleHasSidebar: FC<PageSingleHasSidebarProps> = ({
  className = "",
}) => {
  // DEMO DATA
  const dispatch = useAppDispatch();

  // UPDATE CURRENTPAGE DATA IN PAGEREDUCERS


  return (
    <>
      <div
        className={`nc-PageSingleHasSidebar pt-10 lg:pt-16 ${className}`}
        data-nc-id="PageSingleHasSidebar"
      >

      </div>
    </>
  );
};

export default PageSingleHasSidebar;
