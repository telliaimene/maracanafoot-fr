import React, { FC, useEffect, useRef } from "react";
import NcModal from "../../components/NcModal/NcModal";
import { CommentType } from "../../data/types";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import ButtonSecondary from "../../components/Button/ButtonSecondary";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import axios from "axios";
import { API_LINK } from "../../utils/constantes";
import { UserID } from "../../store/login/auth";
import { useAppSelector } from "../../app/hooks";

export interface ModalDeleteCommentProps {
  comment: CommentType;
  child: Boolean;
  show: boolean;
  idArticle:string|number;
  onCloseModalDeleteComment: () => void;
  onGetComment: (id:string|number) => void;
}

const ModalDeleteComment: FC<ModalDeleteCommentProps> = ({
  comment,
  child,
  show,
  idArticle,
  onGetComment,
  onCloseModalDeleteComment,
}) => {
 const commentId = comment.id
 const parentId = comment.parentId
 const userId = useAppSelector(UserID)
  const textareaRef = useRef(null);
const router =useRouter()
  const deleteCommentOfArticle = () => {
    if (userId){

      let linkdelete = 'v1/articles-comments/'+idArticle+"/"+commentId
      console.log('idComment',linkdelete)
      axios.delete(API_LINK+linkdelete).then(res=>{
        console.log('comment success')
      //   Swal.fire({
      //     position: 'center',
      //     icon: 'success',
      //     title: "Votre commentaire a été bien supprimé",
      //     showConfirmButton: true,
      //     confirmButtonText:"OK"
      // })
      onGetComment(idArticle)
      }).catch(err=>{
        console.log('errcomment',err.response)
      //   Swal.fire({
      //     position: 'center',
      //     icon: 'error',
      //     title: "Oops..!Une erreur s'est produite lors de la suppression de votre commentaire",
      //     showConfirmButton: true,
      //     confirmButtonText:"OK"
      // })
      })
    } else
  {
    Swal.fire({
    position: 'center',
    icon: 'error',
    title: "Veuillez vous connecter pour pouvoir supprimer votre commentaire",
    showConfirmButton: true,
    confirmButtonText:"OK"
})}
  };
  const deleteResponseComment = () =>{
    if (userId){
    // const serie = router.asPath.split('?')[1]
    // const id = router.asPath.split('?')[2]
   
    axios.delete(API_LINK+'v1/deleteResponseArticle/'+idArticle+'/'+parentId+'/'+commentId).then(res=>{
      console.log('comment success',res)
    //   Swal.fire({
    //     position: 'center',
    //     icon: 'success',
    //     title: "Votre commentaire a été bien modifié",
    //     showConfirmButton: true,
    //     confirmButtonText:"OK"
    // })
    onCloseModalDeleteComment()
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
    })}
    else
  {
    Swal.fire({
    position: 'center',
    icon: 'error',
    title: "Veuillez vous connecter pour pouvoir supprimer votre réponse",
    showConfirmButton: true,
    confirmButtonText:"OK"
})}
    }
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
      child === false ?
      <>
      <div >
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
          Supprimer le commentaire
        </h3>
        <span className="text-sm">
          Êtes-vous sûr de vouloir supprimer ce commentaire? Vous ne pouvez pas annuler cette
          action.
        </span>
        <div className="mt-4 space-x-3">
          <ButtonPrimary onClick={()=>deleteCommentOfArticle()} disabled={userId ? false : true}>
            Supprimer
          </ButtonPrimary>
          <ButtonSecondary  onClick={onCloseModalDeleteComment}>
            Annuler
          </ButtonSecondary>
        </div>
      </div>
     </> :
      <div >
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
          Supprimer la réponse du commentaire
        </h3>
        <span className="text-sm">
          Êtes-vous sûr de vouloir supprimer cette réponse? Vous ne pouvez pas annuler cette
          action.
        </span>
        <div className="mt-4 space-x-3">
          <ButtonPrimary onClick={()=>deleteResponseComment()}  disabled={userId ? false : true}>
            Supprimer
          </ButtonPrimary>
          <ButtonSecondary  onClick={onCloseModalDeleteComment}>
            Annuler
          </ButtonSecondary>
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
      onCloseModal={onCloseModalDeleteComment}
      contentExtraClass="max-w-screen-sm"
      renderContent={renderContent}
      renderTrigger={renderTrigger}
      modalTitle=""
    />
  );
};

export default ModalDeleteComment;
