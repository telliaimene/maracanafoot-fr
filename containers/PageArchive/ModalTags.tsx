import React, { FC } from "react";
import NcModal from "../../components/NcModal/NcModal";
import Tag from "../../components/Tag/Tag";
import { TaxonomyType } from "../../data/types";

export interface ModalTagsProps {
  tags: TaxonomyType[];
}

const ModalTags: FC<ModalTagsProps> = ({ tags }) => {

  console.log("in tags component" ,tags)
  const renderModalContent = () => {
    return (
      <div className="flex flex-wrap dark:text-neutral-200">
        {tags.map((tag) => (
          <Tag type ="tag" key={tag.id} tag={tag} className="mr-2 mb-2" />
        ))}
      </div>
    );
  };

  return (
    <div className="nc-ModalTags">
      <NcModal
        contentExtraClass="max-w-screen-md"
        triggerText={
          <span>
            <span className="hidden sm:inline">Autre</span> Tags
          </span>
        }
        modalTitle="Découvrir d'autres tags"
        renderContent={renderModalContent}
      />
    </div>
  );
};

export default ModalTags;
