import React, { FC, useEffect, useRef } from "react";
import NcModal from "../../components/NcModal/NcModal";

import ButtonPrimary from "../../components/Button/ButtonPrimary";
import ButtonSecondary from "../../components/Button/ButtonSecondary";
import axios from "axios";
import { API_LINK } from "../../utils/constantes";
export interface ModalDeleteCommentProps {
    header:string
    text:string
  show: boolean;
  onCloseModalConfirmComment: () => void;
}

const ModalConfirmAddComment: FC<ModalDeleteCommentProps> = ({
    header,
    text,
  show,
  onCloseModalConfirmComment
}) => {
  const textareaRef = useRef(null);

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
      <div>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
        {header}
        </h3>
        <span className="text-sm">
        {text}
        </span>
        <div className="mt-4 space-x-3">
          <ButtonPrimary onClick={onCloseModalConfirmComment} type="button" >
            ok
          </ButtonPrimary>
        </div>
      </div>
    );
  };

  const renderTrigger = () => {
    return null;
  };

  return (
    <NcModal
      isOpenProp={show}
      onCloseModal={onCloseModalConfirmComment}
      contentExtraClass="max-w-screen-sm"
      renderContent={renderContent}
      renderTrigger={renderTrigger}
      modalTitle=""
    />
  );
};

export default ModalConfirmAddComment;
