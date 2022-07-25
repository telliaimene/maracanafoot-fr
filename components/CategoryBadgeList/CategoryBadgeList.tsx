import { ArticleDataType, PostDataType, TaxonomyType } from "../../data/types";
import React, { FC } from "react";
import Badge from "../../components/Badge/Badge";
export interface CategoryBadgeListProps {
  className?: string;
  itemClass?: string;
  categories: ArticleDataType["category"];
  tournois?: ArticleDataType["tournois"];
  typearticle?: String;
}

const CategoryBadgeList: FC<CategoryBadgeListProps> = ({
  className = "flex flex-wrap space-x-2",
  itemClass,
  categories, tournois, typearticle
}) => {
  let newTab = []
  let newTab1 = []
  let newTab2 = []
  //  categories?.map(item=>{
  //    newTab1.push(item)
  //  })
  
  {typearticle ?
    newTab1.push({ entitled: typearticle, value: typearticle })
  :null}
  newTab2.push({
    entitled: tournois?.length ? tournois[0].entitled : "", value: tournois?.length ? tournois[0].entitled : ""
  })
  categories != "ACTUALITÉS" ?
    newTab1.push(
      {
        entitled: categories, value: categories
      })
    : null
  newTab = newTab2[0].entitled ? [...newTab1, ...newTab2] : [...newTab1]
  console.log("tab1 new ", newTab1, "tab2", newTab2, tournois)
  return (
    <div
      className={`nc-CategoryBadgeList ${className}`}
      data-nc-id="CategoryBadgeList"

    >
      {newTab.map((item, index) => (
        <Badge
          className={itemClass}
          key={index}
          name={item.entitled}
          // href={item.href}
          color={"pink"}
        />
      ))}
    </div>
  );
};

export default CategoryBadgeList;
