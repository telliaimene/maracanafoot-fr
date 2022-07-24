import React, { FC, useState, useEffect } from "react";
import Heading from "../../components/Heading/Heading";
import { ArticleDataType, PostDataType,ArticleType } from "../../data/types";
import Card9 from "../../components/Card9/Card9"
import Card11 from "../../components/Card11/Card11";
import axios from "axios";
import { useRouter } from "next/router";
import { API_LINK } from "../../utils/constantes";
import { UserID } from "../../app/login/auth";
import { useAppSelector } from "../../store/hooks";
import moment from "moment";
export interface SingleRelatedPostsProps {
  relatedPosts?: ArticleDataType[];
  data:ArticleDataType;
  moreFromAuthorPosts?: ArticleDataType[];
}

// DEMO DATA


const SingleRelatedPosts: FC<SingleRelatedPostsProps> = ({
  
  data,
}) => {
  console.log('related',data)
  const [articleContent, setArticle] = useState<ArticleDataType []| undefined>(undefined)
  const [articlesAuthor, setArticleAuthor] = useState<ArticleDataType[]| undefined>(undefined)
//const [loading, setLoading] = useState(true)
const router = useRouter()

  useEffect(() => {
  if(router.isReady) {
    getArticle()
    getArticleByAuthor()
    } 
  }, [router.isReady]);
   let user = data?.author?._id
  async function getArticle ()  {
    let sport = data.typearticle
    let lng = "FR"
    console.log('here in article ::',lng,sport)
    await axios.get(API_LINK + 'v1/articles-popularity-sport/'+ lng+ '/' + sport+'/')    
      .then(response => {
        let table = response.data.map((item: ArticleType) => {

          let cat: string = item.category ?
            item.category[0] ?
              item.category[0].entitled == "MERCATO" ?
                "MERCATO" :
                item.category[0].entitled == "DISCIPLINE" ? "DISCIPLINE" :
                  item.tournois ?
                    item.tournois.length > 0 ? item.tournois[0].entitled :
                      item.typearticle
                    : "" : "" : ""

          return ({
            category: cat,
            date: item.date,
            title: item.title.trim(),
            resumer: item.resumer,
            image: API_LINK + item.image,
            typearticle: item.typearticle,
            tournois: item.tournois,
            author: item.author,
            // href : "/article?"+ item.typearticle +"?" + item.title
          })
        })     
         setArticle(table)
        //setLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }
  async function getArticleByAuthor ()  {
    let lng = "FR"
    console.log("get article by author", API_LINK + 'v1/articlesByAuthor/'+ lng+ '/' + user+'/')

    await axios.get(API_LINK + 'v1/articlesByAuthor/'+ lng+ '/' + user+'/')    
      .then(response => {
        let table = response.data.map((item: ArticleType) => {

          let cat: string = item.category ?
            item.category[0] ?
              item.category[0].entitled == "MERCATO" ?
                "MERCATO" :
                item.category[0].entitled == "DISCIPLINE" ? "DISCIPLINE" :
                  item.tournois ?
                    item.tournois.length > 0 ? item.tournois[0].entitled :
                      item.typearticle
                    : "" : "" : ""

          return ({
            category: cat,
            date: item.date,
            title: item.title.trim(),
            resumer: item.resumer,
            image: API_LINK + item.image,
            typearticle: item.typearticle,
            tournois: item.tournois,
            author: item.author,
            // href : "/article?"+ item.typearticle +"?" + item.title
          })
        })
  setArticleAuthor(table)
        //setLoading(false)
      })
      .catch(err => {
      
        console.log(err)
      })
  }
  return (
    <div className="relative bg-neutral-100 dark:bg-neutral-800 py-16 lg:py-28 mt-16 lg:mt-28">
      {/* RELATED  */}
      <div className="container ">
         {/* <div >
          <Heading
            className="mb-10 mt-20 text-neutral-900 dark:text-neutral-50"
            desc=""
          >
            Related posts
          </Heading>
          <div className="mb-5"></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
             {articleContent?.splice(0,4).map((post : ArticleDataType) => (
              <Card11 key={post._id} post={post} />
            ))} 
          </div>
        </div>  */}

        {/* MORE FROM AUTHOR */}
        <div className="mt-40">
         <div className="mt-10 "></div> <Heading
            className="mb-10 mt-20 text-neutral-900 dark:text-neutral-100"
            desc=""
          >
           Plus d’articles du même auteur
         
          </Heading>
          <div className="mb-5 "></div>
          <div className="grid mt-40 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
           {articlesAuthor?.map((post : ArticleDataType) => (
              <Card9 key={post._id} post={post} />
            ))} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRelatedPosts;
