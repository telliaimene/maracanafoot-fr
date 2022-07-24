import React, { FC, useRef, useState } from "react";
import Avatar from "../../components/Avatar/Avatar";
import NcDropDown from "../../components/NcDropDown/NcDropDown";
import CommentCardLikeReplyContainer from "../../containers/CommentCardLikeReplyContainer/CommentCardLikeReplyContainer";
import { PostAuthorType ,AuthorType} from "../../data/types";
import Link  from "next/link";
import twFocusClass from "../../utils/twFocusClass";
import SingleCommentForm from "../../containers/PageSingle/SingleCommentForm";
import ModalEditComment from "./ModalEditComment";
import ModalDeleteComment from "./ModalDeleteComment";
import ModalReportItem from "../../components/ModalReportItem/ModalReportItem";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import ButtonSecondary from "../../components/Button/ButtonSecondary";
import Textarea from "../../components/Textarea/Textarea";
import { UserID } from "../../app/login/auth";
import moment from "moment";
import { useRouter } from "next/router";
import axios from "axios";
import { API_LINK } from "../../utils/constantes";
import { useAppSelector } from "../../app/hooks";
import Swal from "sweetalert2";
import { CommentType } from "../../data/types";


export interface CommentCardProps {
  className?: string;
  comment: CommentType;
  child: Boolean;
  idArt: number|string,
  commentGet: (id1:string|number) =>void;
  size?: "large" | "normal";
}

const CommentCard: FC<CommentCardProps> = ({
  className = "",
  comment,commentGet,child,idArt,
  size = "large",
}) => {

  console.log('idArt',idArt,comment)

  const { author, id, date, parentId, content } = comment;
  const actions = child === false ? [
    { id: "edit", name: "Modifier", icon: "las la-edit" },
    { id: "reply", name: "Répondre", icon: "las la-reply" },
    { id: "report", name: "Report abuse", icon: "las la-flag" },
    { id: "delete", name: "Supprimer", icon: "las la-trash-alt" },
  ]: [
    { id: "edit", name: "Modifier", icon: "las la-edit" },
    { id: "report", name: "Report abuse", icon: "las la-flag" },
    { id: "delete", name: "Supprimer", icon: "las la-trash-alt" },
  ]
  ;
const router = useRouter()
const userId = useAppSelector(UserID)
  const textareaRef = useRef(null);
  const [isReplying, setIsReplying] = useState(false);
  const [isEditting, setIsEditting] = useState(false);
  const [isReporting, setIsReporting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const openReplyForm = () => {
    setIsReplying(true);
    setTimeout(() => {
      textareaRef.current && (textareaRef.current as any).focus();
    }, 100);
  };
  const closeReplyForm = () => {
    setIsReplying(false);
  };

  const openModalEditComment = () => setIsEditting(true);
  const closeModalEditComment = () => setIsEditting(false);

  const openModalReportComment = () => setIsReporting(true);
  const closeModalReportComment = () => setIsReporting(false);

  const openModalDeleteComment = () => setIsDeleting(true);
  const closeModalDeleteComment = () => setIsDeleting(false);

  const hanldeClickDropDown = (item: typeof actions[number]) => {
    if (item.id === "reply" && child === false) {
      return openReplyForm();
    }
    if (item.id === "edit") {
      return openModalEditComment();
    }
    if (item.id === "report") {
      return openModalReportComment();
    }
    if (item.id === "delete") {
      return openModalDeleteComment();
    }
    return;
  };
  const [description,setComment] = useState("")
  const addResponseComment = () =>{
   if(userId){
    // const  serie = router.asPath.split('?')[1]
    //   const  idArt = router.asPath.split('?')[2]
    let commentObject ={
      description:description,
      user:userId,
      date: moment()}
    axios.put(API_LINK+'v1/addResponseArticle/'+idArt+'/'+id,commentObject).then(res=>{
      console.log('comment success',res)
    //   Swal.fire({
    //     position: 'center',
    //     icon: 'success',
    //     title: "Votre commentaire a été bien modifié",
    //     showConfirmButton: true,
    //     confirmButtonText:"OK"
    // })
    closeReplyForm()
    commentGet(idArt)
    }).catch(err=>{
      console.log('errcomment',err.response)
    //   Swal.fire({
    //     position: 'center',
    //     icon: 'error',
    //     title: "Oops..!Une erreur s'est produite lors de la modification de votre commentaire",
    //     showConfirmButton: true,
    //     confirmButtonText:"OK"
    // })
    })}
   
    }
  const renderCommentForm = () => {
    return (
      // <SingleCommentForm
      //   textareaRef={textareaRef}
      //   onClickSubmit={(id) => {
      //     console.log(id);
      //   }}
      //   onClickCancel={closeReplyForm}
      //   className="flex-grow"
      //   commentId={id}
      // />
      <div className={`nc-SingleCommentForm ${className}`}>
      <Textarea
        placeholder="Votre Réponse"
        ref={textareaRef}
        required={true}
        onChange={(e)=>setComment(e.target.value)}
        defaultValue={""}
        rows={4}
      />
      <div className="mt-2 space-x-3">
        <ButtonPrimary onClick={() => addResponseComment()} disabled={description && userId ? false : true} >
          Répondre
        </ButtonPrimary>
        <ButtonSecondary  onClick={() => closeReplyForm()}>
          Annuler
        </ButtonSecondary>
      </div>
    </div>
    );
  };

  return (
    <>
      <div
        className={`nc-CommentCard flex ${className}`}
        data-nc-id="CommentCard"
        data-comment-id={id}
        data-comment-parent-id={parentId}
      >
        <Avatar
          imgUrl={author? API_LINK+ author?.picture : "https://www.maracanafoot.com/utils/images/avatar-159236__340.webp"}
          userName={author?.name+"  "+author?.lastname}
          sizeClass={`h-6 w-6 text-base ${
            size === "large" ? "sm:text-lg sm:h-8 sm:w-8" : ""
          }`}
          radius="rounded-full"
          containerClassName="mt-4"
        />
        <div className="flex-grow flex flex-col p-4 ml-2 text-sm border border-neutral-200 rounded-xl sm:ml-3 sm:text-base dark:border-neutral-700">
          {/* AUTHOR INFOR */}
          <div className="relative flex items-center pr-6">
            <div className="absolute -right-3 -top-3">
              <NcDropDown
                className={`p-2 text-neutral-500 flex items-center justify-center rounded-lg hover:text-neutral-800 dark:hover:text-neutral-200 sm:hover:bg-neutral-100 dark:hover:bg-neutral-800 ${twFocusClass()}`}
                data={actions}
                onClick={hanldeClickDropDown}
              />
            </div>
            <Link
              // className="flex-shrink-0 font-semibold text-neutral-800 dark:text-neutral-100"
              href={'/'}
            >
               <a href={'/'}  className="flex-shrink-0 font-semibold text-neutral-800 dark:text-neutral-100"> {author?.name +" "+ author?.lastname}</a>
             
            </Link>
            <span className="mx-2">·</span>
            <span className="text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1 sm:text-sm">
              {moment(date).format('DD-MM-YYYY HH:mm:ss')}
            </span>
          </div>

          {/* CONTENT */}
          <span className="block text-neutral-700 mt-2 mb-3 sm:mt-3 sm:mb-4 dark:text-neutral-300">
            {content}
          </span>

          {/* ACTION LIKE REPLY */}
          {isReplying && child === false ? (
            renderCommentForm()
          ) : ( 
            < CommentCardLikeReplyContainer
              onClickReply={openReplyForm}
              comment={comment}
              child={child}
              idArticle={idArt}
              
            />
          )}
        </div>
      </div>

      <ModalEditComment
       child={child}
       idArticle={idArt}
       onGetComment={()=>commentGet(idArt)}
        show={isEditting}
        comment={comment}
        onCloseModalEditComment={closeModalEditComment}
      />
      <ModalReportItem
        show={isReporting}
        id={comment.id}
        onCloseModalReportItem={closeModalReportComment}
      />
      <ModalDeleteComment
        child={child}
        idArticle={idArt}
        onGetComment={()=>commentGet(idArt)}
        show={isDeleting}
        comment={comment}
        onCloseModalDeleteComment={closeModalDeleteComment}
      /> 
    </>
  );
};

export default CommentCard;

