import React, { FC,useState } from "react";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import CommentCard from "../../components/CommentCard/CommentCard";
import { CommentType } from  "../../data/types"
import { useRouter } from "next/router";
export interface SingleCommentListsProps {
  comments: CommentType[] | undefined;
  moderateState: string |undefined;
  articleId : number| string;
  onGetComments: (id:string|number) => void;
}

const SingleCommentLists :FC<SingleCommentListsProps> = ({ comments,onGetComments,articleId,moderateState}) => {
  let cmtLv1 = comments ?  comments.filter((item) => !item.parentId) : [];
  console.log('comments',comments)
 const [hideComment,setHideComment] = useState(true)
const router =useRouter()
  const renderCommentItemChild = (comment:CommentType ) => {
     if(moderateState === "Modérer" && comment.isModerate === true || moderateState === "Accepter"){
    return (
      <li key={comment.id}>
        <CommentCard idArt={articleId} commentGet={()=>onGetComments(articleId)} size="normal" comment={comment} child={true} />
        {/* {comment.children && (
          <ul className="pl-4 mt-5 space-y-5 md:pl-9">
            {comment.children.map(renderCommentItemChild)}
          </ul>
        )} */}
      </li>
    )
  };
  };

  const renderCommentItem = (comment :CommentType) => {
     if(moderateState === "Modérer" && comment.isModerate === true || moderateState === "Accepter"){
    return (
      <li key={comment.id}>
        <CommentCard idArt={articleId}  child={false} comment={comment} commentGet={()=>onGetComments(articleId)} />
        {comment.children && (
          <ul className="pl-4 mt-5 space-y-5 md:pl-11">
            {comment.children.map(renderCommentItemChild)}
          </ul>
        )}
      </li>
    )
    ;}
  };
  const cmtcount = comments? comments.length-1 : 0
  return (
    <ul className="nc-SingleCommentLists space-y-5">
      {cmtLv1?cmtLv1.length<=5?
      cmtLv1.map(renderCommentItem):
      hideComment?cmtLv1.slice(0,5).map(renderCommentItem):cmtLv1.map(renderCommentItem)
      :null}
      {cmtLv1?cmtLv1.length > 5 ?
      <ButtonPrimary onClick={()=>setHideComment(!hideComment)} className="dark:bg-primary-700 w-full">
        {hideComment? "Voir tous les commentaires +("+ cmtcount+ "commentaires)":"Voir moins de commentaires"}
      </ButtonPrimary>
      :null:null}
    </ul>

  );
};

export default SingleCommentLists;
