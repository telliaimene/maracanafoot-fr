import Card3Small from "../../components/Card3Small/Card3Small";
import WidgetHeading1 from "../../components/WidgetHeading1/WidgetHeading1";
import { ArticleDataType, PostDataType } from "../../data/types";
import React, { FC } from "react";

export interface WidgetPostsProps {
  className?: string;
  posts: ArticleDataType[];
  type: string
}

const WidgetPosts: FC<WidgetPostsProps> = ({
  className = "bg-neutral-100 dark:bg-neutral-800",
  posts,type
}) => {
  console.log('here in type',posts,type)
  return (
    <div
      className={`nc-WidgetPosts rounded-3xl overflow-hidden ${className}`}
      data-nc-id="WidgetPosts"
    >
      <WidgetHeading1
        title={type == 'recent' ? "🎯 Dernières infos" : "🎯 Populaires posts"}
        viewAll={{ label: "Voir plus", href: "/#" }}
      />
      <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
        { type === 'recent' ? 
        posts?.map((item) => (
          <>
          <Card3Small
            className="p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            key={item._id}
            post={item}
          /></>
        )) :
        posts?.splice(0,5).map((item) => (
          <>
          <Card3Small
            className="p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            key={item._id}
            post={item}
          /></>
        ))  }
      </div>
    </div>
  );
};

export default WidgetPosts;
