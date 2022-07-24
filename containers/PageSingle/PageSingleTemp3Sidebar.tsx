import React, { FC, ReactNode, useEffect } from "react";
import { PostDataType, TaxonomyType } from "../../data/types";

import { CommentType } from "../../data/types";
import SingleRelatedPosts from "./SingleRelatedPosts";
import { useAppDispatch } from "../../store/hooks";
import { changeCurrentPage } from "../../store/pages/pages";
import { Sidebar } from "./Sidebar";
import SingleHeader from "./SingleHeader";

export interface PageSingleTemp3SidebarProps {
  className?: string;
}

export interface SinglePageType extends PostDataType {
  tags: TaxonomyType[];
  // content: string | ReactNode;
  // comments: CommentType[];
}

const PageSingleTemp3Sidebar: FC<PageSingleTemp3SidebarProps> = ({
  className = "",
}) => {
  const dispatch = useAppDispatch();


  return (
    <>
      <div
        className={`nc-PageSingleTemp3Sidebar ${className}`}
        data-nc-id="PageSingleTemp3Sidebar"
      >
      
      </div>
    </>
  );
};

export default PageSingleTemp3Sidebar;
