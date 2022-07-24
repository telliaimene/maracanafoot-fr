import React, { FC } from "react";
import Tag from "../../components/Tag/Tag";
import WidgetHeading1 from "../../components/WidgetHeading1/WidgetHeading1";
import { TaxonomyType } from "../../data/types";

export interface WidgetTagsProps {
  className?: string;
  tags: TaxonomyType[];
}

const WidgetTags: FC<WidgetTagsProps> = ({
  className = "bg-neutral-100 dark:bg-neutral-800",
  tags,
}) => {
  return (
    <div
      className={`nc-WidgetTags rounded-3xl overflow-hidden ${className}`}
      data-nc-id="WidgetTags"
    >
      <WidgetHeading1
        title="🏷 Découvrez plus de Tags"
        viewAll={{ label: "Voir plus", href: "/#" }}
      />
      <div className="flex flex-wrap p-4 xl:p-5">
        {tags.map((tag,index) => (
          <Tag className="mr-2 mb-2" key={index} tag={tag} type={'sidebar'} />
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;
