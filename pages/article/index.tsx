import React, { FC, ReactNode, useEffect, useState } from "react";
import {
  ArticleDataType,
  ArticleType,
} from "../../data/types";
import NcImage from "../../components/NcImage/NcImage";

import SingleContent from "../../containers/PageSingle/SingleContent";
import { useAppDispatch } from "../../store/hooks"; 
import { Sidebar } from "../../containers/PageSingle/Sidebar";
import SingleRelatedPosts from "../../containers/PageSingle/SingleRelatedPosts";
import SingleHeader from "../../containers/PageSingle/SingleHeader";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import Spinner from "../../components/spinner";
import { useAppSelector } from "../../store/hooks";
import { UserID } from "../../app/login/auth";
import axios from "axios";
import { API_LINK } from "../../utils/constantes";

import { useRouter } from "next/router";
import { GetServerSideProps } from "next/types";
import { BillBoard } from "../../components/Ads";

import Head from "next/head";

// var tags = {};
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log("query", ctx.query);

  let route = Object.keys(ctx.query)[0];
  let encoded = encodeURI(route);
  console.log({ route, encoded });

  let lng = "FR";
  const res: any = await axios
    .get(API_LINK + "v1/articlesByTitle/" + encoded.split("?")[1] + "/" + lng)
    .then((response) => {
      let article: ArticleType = response.data;
      let data: ArticleDataType = {
        bookmarked: article.bookmarked,
        likes: article.likes,
        countVisit: article.countVisit,
        countPartage: article.countPartage,
        content: article.content,
        keyWord: article.keyWord,
        image: API_LINK + article.image,
        _id: article._id,
        author: article.author,
        date: article.date,
        tournois: article.tournois,
        typearticle: article.typearticle,
        href: "/article?" + article.typearticle + "?" + article.title,
        category: article.category ? article.category[0].entitled : "",
        title: article.title,
        resumer: article.resumer,
        isActive: article.isActive,
        comments: article.comments,
        commentCount: article.comments.length,
        viewdCount: article.countVisit,
        readingTime: 2,
      };

      return data;
    });
  // tags = res;
  console.log({ res });
  return { props: { data: res, encoded } };
};



const PageArticle = ({ data, encoded }: any) => {

  const dispatch = useAppDispatch();
  const [articleContent, setArticle] = useState<ArticleDataType | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  console.log("router in article",encoded, data) ;
  useEffect(() => {
    if (router.isReady) {
      getArticle();
    }
  }, [router.isReady, router.asPath]);
  useEffect(() => {
    if (articleContent) {
      setLoading(false);
    }
  }, [articleContent]);
  const user = useAppSelector(UserID);
  async function countVisit(IDArticle: string | number) {
    console.log("in count");
    await axios
      .get(API_LINK + "v1/articles/countVisit/" + IDArticle)
      .then()
      .catch((err) => console.log(err));
  }

  async function getArticle() {
    const route = router.asPath.split("?")[2];
    let title = encoded.split("?")[1]
console.log("here in article", title)
    // if (route === undefined) {
    //   title = router.asPath.split("?")[2];
    // } else {
    //   title = router.asPath.split("?")[3];
    // }

    let lng = "FR";
    console.log("here in article2", API_LINK + "v1/articlesByTitle/" + title + "/" + lng);
    await axios
      .get(API_LINK + "v1/articlesByTitle/" + title + "/" + lng)
      .then((response) => {
        let article: ArticleType = response.data;
        let data: ArticleDataType = {
          bookmarked: article.bookmarked,
          likes: article.likes,
          countVisit: article.countVisit,
          countPartage: article.countPartage,
          content: article.content,
          keyWord: article.keyWord,
          image: API_LINK + article.image,
          _id: article._id,
          author: article.author,
          date: article.date,
          tournois: article.tournois,
          typearticle: article.typearticle,
          href: "/article?" + article.typearticle + "?" + article.title,
          category: article.category ? article.category[0].entitled : "",
          title: article.title,
          resumer: article.resumer,
          isActive: article.isActive,
          comments: article.comments,
          commentCount: article.comments.length,
          viewdCount: article.countVisit,
          readingTime: 2,
        };
        setArticle(data);
        console.log("here in article", response.data);
        countVisit(response.data._id);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  console.log("articleContentTest", loading === false && articleContent ,  loading, articleContent);
  if (loading === false && articleContent) {
    return (
      <>
        <Head>
          <title>{data.title} </title>
          <meta name="description" content={data.description}></meta>
          <meta property="og:title" content={data.title}></meta>
          <meta property="og:description" content={data.descrition}></meta>
          <meta property="og:image" content={data.image}></meta>
          <meta
            property="og:type"
            content={`https://www.maracanafoot.fr/article/?https://www.maracanafoot.fr/article/?Football?${encoded}`}
          ></meta>
        </Head>
        <div
          className={`nc-PageSingleHasSidebar pt-10 lg:pt-16 ${""}`}
          data-nc-id="PageSingleHasSidebar"
        >
          <HeaderContainer user={user} />
          {/* SINGLE HEADER */}
          <BillBoard banner="/images/doc/img/bg/sidebar-1.png"  href="#"/>

          <header className="container pt-10 rounded-xl">
            <div className="max-w-screen-md mx-auto">
            <SingleHeader pageData={articleContent} titleMainClass="" url={data.href}/>

</div>
          </header>

          {/* FEATURED IMAGE */}

          <NcImage
            containerClassName="container my-10 sm:my-12"
            className="object-cover w-full h-full rounded-xl center"
            src={articleContent.image}
            //style={{width:"1280px", height:"605px"}}
          />

          {/* SINGLE MAIN CONTENT */}
          <div className="container flex flex-col my-10 lg:flex-row ">
            <div className="w-full lg:w-3/5 xl:w-2/3 xl:pr-20">
              <SingleContent data={articleContent} id={user} />
            </div>
            <div className="w-full mt-12 lg:mt-0 lg:w-2/5 lg:pl-10 xl:pl-0 xl:w-1/3">
              <Sidebar data={articleContent} />
            </div>
          </div>

          {/* RELATED POSTS */}
         
        </div>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>{data.title}</title>
          <meta name="description" content={data.description}></meta>
          <meta property="og:title" content={data.title}></meta>
          <meta property="og:description" content={data.descrition}></meta>
          <meta property="og:image" content={data.image}></meta>
          <meta
            property="og:type"
            content={`https://www.maracanafoot.fr/article/?https://www.maracanafoot.fr/article/?Football?${encoded}`}
          ></meta>
        </Head>
        <Spinner loading={loading} />
      </>
    );
  }
};

PageArticle.seo = true;
export default PageArticle;
