import React, { FC, useEffect, useRef, useState } from "react";
import Tag from "../../components/Tag/Tag";
import { SinglePageType } from "./PageSingle";
import SingleAuthor from "./SingleAuthor";
import SingleCommentForm from "./SingleCommentForm";
import SingleCommentLists from "./SingleCommentLists";
import SingleContentDemo from "./SingleContentDemo";
//import { useLocation } from "next/";
import { useRouter } from "next/router";
import axios from "axios";
import { API_LINK } from "../../utils/constantes";
import {
  CommentDataType,
  CommentType,
  TaxonomyType,
  PostDataType,
  ArticleDataType,
} from "../../data/types";
import SingleRelatedPosts from "./SingleRelatedPosts";
export interface SingleContentProps {
  data: ArticleDataType;
  tags?: TaxonomyType[] | undefined;
  id?: string | number;
}

const SingleContent: FC<SingleContentProps> = ({ data, tags, id }: any) => {
  console.log("single", id);
  const { keyWord, author, comments, content } = data;
  const commentRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [commentCount, setcommentCount] = useState(comments?.length);
  const location = router.pathname;
  const [commentList, setCommentList] = useState<CommentType[] | undefined>();
  useEffect(() => {
    //  SCROLL TO COMMENT AREA
    // if (location.hash !== "#comment") {
    //   return;
    // }
    // if (location.hash === "#comment") {
    //   setTimeout(() => {
    //     if (commentRef.current) {
    //       commentRef.current.scrollIntoView();
    //     }
    //   }, 500);
    // }
  }, [location]);
  useEffect(() => {
    if (data._id && id) getComments(data._id);
  }, []);
  const getComments = (id: String | number) => {
    axios
      .get(API_LINK + "v1/articles-comments/" + id)
      .then((res) => {
        console.log("get one more time");
        setcommentCount(res.data.length);
        let data: CommentType[] = res.data.map((item: CommentDataType) => {
          const dataResponse = item.response?.map((resp: CommentDataType) => {
            return {
              id: resp._id,
              author: resp.user,
              date: resp.date,
              content: resp.description,
              parentId: item._id,
              isModerate: resp.isModerate,
              children: [],
              like: resp.likes.length,
            };
          });
          return {
            id: item._id,
            author: item.user,
            date: item.date,
            content: item.description,
            parentId: null,
            isModerate: item.isModerate,
            children: dataResponse,
            like: item.likes.length,
          };
        });
        setCommentList(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <div className="nc-SingleContent space-y-10">
      {/* ENTRY CONTENT */}
      <div
        id="single-entry-content"
        className="prose prose-sm !max-w-screen-md sm:prose lg:prose-lg mx-auto dark:prose-dark"
      >
        {/* THIS IS THE DEMP CONTENT */}
        {/* IF YOUR DATA IS JSON, YOU CAN USE render with html-react-parser (https://www.npmjs.com/package/html-react-parser) */}
        {content ? <SingleContentDemo data={content} /> : null}
      </div>

      {/* TAGS */}
      <div className="max-w-screen-md mx-auto flex flex-wrap">
        {keyWord?.map((item: any) => (
          <Tag
            hideCount
            key={item}
            tag={item}
            className="mr-2 mb-2"
            type="tag"
          />
        ))}
      </div>

      {/* AUTHOR */}
      <div className="max-w-screen-md mx-auto border-b border-t border-neutral-100 dark:border-neutral-700"></div>
      <div className="max-w-screen-md mx-auto ">
        <SingleAuthor author={author} />
      </div>

      {/* COMMENT FORM */}
       <div
        id="comment"
        ref={commentRef}
        className="max-w-screen-md mx-auto pt-5"
      >
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
        Réponses  ({commentCount})
        </h3>
        {
          <SingleCommentForm
          onGetComments={()=>getComments(data._id)}
          articleId={data._id}
          onClickSubmit={(id) => console.log(id)}
          onClickCancel={(id) => console.log(id)}
        />

        }
      
      </div>  

      {/* COMMENTS LIST */}
  <div className="max-w-screen-md mx-auto">
      {
        <SingleCommentLists 
        comments={commentList}
         articleId={data._id} 
         onGetComments={()=>getComments(data._id)} 
         moderateState = {data?.isActive}/>
        

        }
      </div>
      <SingleRelatedPosts data={data} />
    </div>
  );
};

export default SingleContent;
