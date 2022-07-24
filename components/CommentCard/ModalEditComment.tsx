import React, { FC, useEffect, useState , useRef } from "react";
import NcModal from "../../components/NcModal/NcModal";
import SingleCommentForm from "../../containers/PageSingle/SingleCommentForm";
import { API_LINK } from "../../utils/constantes";
import { CommentType } from "../../data/types";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import ButtonSecondary from "../../components/Button/ButtonSecondary";
import Textarea from "../../components/Textarea/Textarea";
import axios from "axios";
import Swal from "sweetalert2";
import { UserID } from "../../store/login/auth";
import { useAppSelector } from "../../app/hooks";
import moment from "moment";
import { useRouter } from "next/router";

export interface ModalEditCommentProps {
  comment: CommentType;
  onGetComment: (id:string|number)=>void;
  show: boolean;
  idArticle:string|number;
  child: Boolean;
  onCloseModalEditComment: () => void;
}

const ModalEditComment: FC<ModalEditCommentProps> = ({
  comment,child,idArticle,
  show,onGetComment,
  onCloseModalEditComment,
}) => { 
  const userId = useAppSelector(UserID)
  const textareaRef = useRef(null);
const router = useRouter()
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        const element: HTMLTextAreaElement | null = textareaRef.current;
        if (element) {
          (element as HTMLTextAreaElement).focus();
          (element as HTMLTextAreaElement).setSelectionRange(
            (element as HTMLTextAreaElement).value.length,
            (element as HTMLTextAreaElement).value.length
          );
        }
      }, 400);
    }
  }, [show]);
  console.log('comment success',child)
  const [description,setComment] = useState("")
const updateComment = () =>{
    if(userId){
  let commentObject ={
    description:description,
    user:userId,
    date: moment()}
  axios.put(API_LINK+'v1/articles-comments/'+idArticle+'/'+comment.id,commentObject).then(res=>{
    console.log('comment success',res)
  //   Swal.fire({
  //     position: 'center',
  //     icon: 'success',
  //     title: "Votre commentaire a été bien modifié",
  //     showConfirmButton: true,
  //     confirmButtonText:"OK"
  // })
  onCloseModalEditComment()
  onGetComment(idArticle)
  }).catch(err=>{
    console.log('errcomment',err.response)
  //   Swal.fire({
  //     position: 'center',
  //     icon: 'error',
  //     title: "Oops..!Une erreur s'est produite lors de la modification de votre commentaire",
  //     showConfirmButton: true,
  //     confirmButtonText:"OK"
  // })
  })} else{
      Swal.fire({
      position: 'center',
      icon: 'error',
      title: "Veuillez vous connecter pour pouvoir modifier votre commentaire!",
      showConfirmButton: true,
      confirmButtonText:"OK"
  })
  }
  }
const updateResponseComment = () =>{

  if(userId){
  let commentObject ={
    description:description,
    user:userId,
    date: moment()}
  axios.put(API_LINK+'v1/setResponseArticle/'+idArticle+'/'+comment.parentId+'/'+comment.id,commentObject).then(res=>{
    console.log('comment success',res)
  //   Swal.fire({
  //     position: 'center',
  //     icon: 'success',
  //     title: "Votre commentaire a été bien modifié",
  //     showConfirmButton: true,
  //     confirmButtonText:"OK"
  // })
  onCloseModalEditComment()
  onGetComment(idArticle)
  }).catch(err=>{
    console.log('errcomment',err.response)
  //   Swal.fire({
  //     position: 'center',
  //     icon: 'error',
  //     title: "Oops..!Une erreur s'est produite lors de la modification de votre commentaire",
  //     showConfirmButton: true,
  //     confirmButtonText:"OK"
  // })
  })} else{
    Swal.fire({
    position: 'center',
    icon: 'error',
    title: "Veuillez vous connecter pour pouvoir modifier votre réponse!",
    showConfirmButton: true,
    confirmButtonText:"OK"
})
}
  }
  const renderContent = () => {
    return (
      child === false ?
      <div  className="mt-0">
      {/* // <SingleCommentForm
      //   className="mt-0"
        
      //   onClickSubmit={() => updateComment()}
      //   defaultValue={description}
      //   textareaRef={textareaRef}
      //   rows={8}
      //   children={description}
      // /> */}
      <Textarea
        placeholder="Votre commentaire"
        ref={textareaRef}
        required={true}
        onChange={(e)=>setComment(e.target.value)}
        defaultValue={comment.content}
        rows={8}
      />
      <div className="mt-2 space-x-3">
        <ButtonPrimary onClick={() =>  updateComment()} disabled={description && userId ? false : true}>
          Soumettre
        </ButtonPrimary>
        <ButtonSecondary  onClick={()=>onCloseModalEditComment()}>
          Annuler
        </ButtonSecondary>
      </div></div>
      :
      <div  className="mt-0">
      <Textarea
        placeholder="Votre réponse"
        ref={textareaRef}
        required={true}
        onChange={(e)=>setComment(e.target.value)}
        defaultValue={comment.content}
        rows={8}
      />
      <div className="mt-2 space-x-3">
        <ButtonPrimary onClick={() =>updateResponseComment()}  disabled={description && userId ? false : true}>
          Modifier
        </ButtonPrimary>
        <ButtonSecondary  onClick={()=>onCloseModalEditComment()}>
          Annuler
        </ButtonSecondary>
      </div></div>
    );
  };

  const renderTrigger = () => {
    return null;
  };

  return (
    <NcModal
      isOpenProp={show}
      onCloseModal={onCloseModalEditComment}
      contentExtraClass="max-w-screen-md"
      renderContent={renderContent}
      renderTrigger={renderTrigger}
      modalTitle={child === true ? "Modifier votre réponse" : "Modifier votre commentaire"}
    />
  );
};

export default ModalEditComment;
