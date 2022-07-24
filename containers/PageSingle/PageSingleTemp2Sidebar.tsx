import React, { FC, ReactNode, useEffect } from "react";
import { PostDataType, TaxonomyType } from "../../data/types";
import NcImage from "../../components/NcImage/NcImage";

import { CommentType } from "../../data/types";
import SingleRelatedPosts from "./SingleRelatedPosts";
import { useAppDispatch } from "../../store/hooks";
import { changeCurrentPage } from "../../store/pages/pages";
import { Sidebar } from "./Sidebar";
import SingleHeader from "./SingleHeader";

export interface PageSingleTemp2SidebarProps {
  className?: string;
}

export interface SinglePageType extends PostDataType {
  tags: TaxonomyType[];
  // content: string | ReactNode;
  // comments: CommentType[];
}

const PageSingleTemp2Sidebar: FC<PageSingleTemp2SidebarProps> = ({
  className = "",
}) => {
  const dispatch = useAppDispatch();

  // UPDATE CURRENTPAGE DATA IN PAGEREDUCERS
 

  return (
    <>
      <div
        className={`nc-PageSingleTemp2Sidebar pt-8 lg:pt-16 ${className}`}
        data-nc-id="PageSingleTemp2Sidebar"
      >
    
      </div>
    </>
  );
};

export default PageSingleTemp2Sidebar;
