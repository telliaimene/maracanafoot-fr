import React, { FC, useState,useEffect } from "react";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import ButtonSecondary from "../../components/Button/ButtonSecondary";
import Textarea from "../../components/Textarea/Textarea";
import axios from "axios";
import { API_LINK } from "../../utils/constantes";
import { useRouter } from "next/router";
import moment from "moment";
import Swal from "sweetalert2";
import { useAppSelector } from "../../store/hooks";
import { UserID } from "../../app/login/auth";


export interface SingleCommentFormProps {
  className?: string;
  commentId?: number;
  onClickSubmit: (id?: number) => void;
  onClickCancel: (id?: number) => void;
  textareaRef?: React.MutableRefObject<null>;
  defaultValue?: string;
  articleId: string |number;
  onGetComments:(id?: string|number) => void;
  rows?: number;
}

const SingleCommentForm: FC<SingleCommentFormProps> = ({
  className = "mt-5",
  commentId,
  onClickSubmit,
  onClickCancel,
  onGetComments,
  textareaRef,
  defaultValue = "",
  articleId,
  rows = 4,
}) => { 
 
  const router = useRouter()
const [description,setComment] = useState("")
const userId = useAppSelector(UserID)
console.log('articleId',articleId,userId)
const addComment = () => {
  if(userId){
  let comment ={comment:{
  description:description,
  user:userId,
  date: moment()}}
axios.post(API_LINK+'v1/articles-comments/'+articleId,comment).then(res=>{
  resetComment()
  console.log('comment success',res)
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: "Votre commentaire a été bien ajouté",
    showConfirmButton: true,
    confirmButtonText:"OK"
})
onGetComments(articleId)
}).catch(err=>{
  console.log('errcomment',err.response)
  Swal.fire({
    position: 'center',
    icon: 'error',
    title: "Oops..!Une erreur s'est produite lors d'ajout de votre commentaire",
    showConfirmButton: true,
    confirmButtonText:"OK"
})
})} else{
  Swal.fire({
    position: 'center',
    icon: 'error',
    title: "Veuillez vous connecter pour pouvoir commenter!",
    showConfirmButton: true,
    confirmButtonText:"OK"
})
}
}
const resetComment = () =>{
  setComment("")
}
  return (
    <div className={`nc-SingleCommentForm ${className}`}>
      <Textarea
        placeholder="Ajouter à la discussion"
        ref={textareaRef}
        required={true}
        onChange={(e)=>setComment(e.target.value)}
        defaultValue={description}
        rows={rows}
      />
      <div className="mt-2 space-x-3">
        <ButtonPrimary onClick={() => addComment()} disabled={description && userId ?false:true}>
          Soumettre
        </ButtonPrimary>
        <ButtonSecondary  onClick={()=>resetComment()}>
          Annuler
        </ButtonSecondary>
      </div>
    </div>
  );
};

export default SingleCommentForm;
