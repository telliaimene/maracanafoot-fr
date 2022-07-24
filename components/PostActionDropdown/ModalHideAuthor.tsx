import React, { FC, useEffect, useRef } from "react";
import NcModal from "../../components/NcModal/NcModal";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import ButtonSecondary from "../../components/Button/ButtonSecondary";
import { AuthorType, PostAuthorType } from "../../data/types";

export interface ModalHideAuthorProps {
  author: PostAuthorType|undefined;
  show: boolean;
  onCloseModalHideAuthor: () => void;
}

const ModalHideAuthor: FC<ModalHideAuthorProps> = ({
  author,
  show,
  onCloseModalHideAuthor,
}) => {
  const textareaRef = useRef(null);

  const handleClickSubmitForm = () => {
    console.log({ author: author?._id });
  };

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        const element: HTMLTextAreaElement | null = textareaRef.current;
        if (element) {
          (element as HTMLTextAreaElement).focus();
        }
      }, 400);
    }
  }, [show]);

  const renderContent = () => {
    return (
      <form action="#">
        <h3 className="text-lg font-semibold text-neutral-900">
        Masquer les articles de {author?.name +" "+author?.lastname}
        </h3>
        <span className="text-sm">
        Nous masquerons tous les articles de <strong>{author?.name +" "+author?.lastname}</strong>.
Vous ne verrez plus leurs articles ?        </span>
        <div className="mt-4 space-x-3">
          <ButtonPrimary onClick={handleClickSubmitForm} type="submit">
            Masquer
          </ButtonPrimary>
          <ButtonSecondary type="button" onClick={onCloseModalHideAuthor}>
            Annuler
          </ButtonSecondary>
        </div>
      </form>
    );
  };

  const renderTrigger = () => {
    return null;
  };

  return (
    <NcModal
      isOpenProp={show}
      onCloseModal={onCloseModalHideAuthor}
      contentExtraClass="max-w-screen-sm"
      renderContent={renderContent}
      renderTrigger={renderTrigger}
      modalTitle=""
    />
  );
};

export default ModalHideAuthor;
