import React, { FC, useEffect, useState } from "react";
import WidgetAuthors from "../../components/WidgetAuthors/WidgetAuthors";
import WidgetPosts from "../../components/WidgetPosts/WidgetPosts";
import WidgetTags from "../../components/WidgetTags/WidgetTags";
import { DEMO_CATEGORIES, DEMO_TAGS } from "../../data/taxonomies";
import { PostDataType, PostAuthorType, ArticleDataType } from "../../data/types";
import axios from "axios";
import { API_LINK } from "../../utils/constantes";
import { useRouter } from "next/router";
import Spinner from "../../components/spinner";
import { Pave, Skyscraper } from "../../components/Ads";

export interface SidebarProps {
  className?: string;
  data: ArticleDataType
}


const tags = DEMO_TAGS.filter((_, i) => i > 5);
const categories = DEMO_CATEGORIES.filter((_, i) => i > 7 && i < 13);
//const authors = DEMO_AUTHORS.filter((_, i) => i < 5);

export const Sidebar: FC<SidebarProps> = ({ className = "space-y-6 ", data }) => {
  const router = useRouter()
  const [tagsArticles, setTags] = useState([])
  const [articles, setArticles] = useState([])
  const [articlesPopular, setArticlesPopular] = useState([])
  const [authors, setAuthors] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingA, setLoadingA] = useState(true)
  const [loadingP, setLoadingP] = useState(true)
  const [loadingT, setLoadingT] = useState(true)
  useEffect(() => {
    if (router.isReady) {
      const sport = data.typearticle
      getArticle(sport)
      getAuthors()
      getTags(sport)
      getArticlePopular(sport)
    }
  }, [router.isReady]);

  async function getArticle(sport: String) {
    let lng = "FR"
    await axios.get(API_LINK + 'v1/articles-bysportSplice/' + lng + '/' + sport)
      .then(response => {
        console.log('here in recent', response.data)
        setArticles(response.data.article.splice(0, 5))
        setLoading(false)
      })
      .catch(err => {

        console.log(err)
      })
  }
  async function getArticlePopular(sport: String) {
    let lng = "FR"
    console.log('here in article ::', lng, sport)
    await axios.get(API_LINK + 'v1/articles-popularity-sport/' + lng + '/' + sport + '/')
      .then(response => {
        console.log('here in article ::', response.data)
        setArticlesPopular(response.data)
        setLoadingP(false)
      })
      .catch(err => {

        console.log(err)
      })
  }
  async function getAuthors() {
    await axios.get(API_LINK + 'v1/userByType2/' + 'auteur')
      .then(response => {
        let data = response.data.sort((a: PostAuthorType, b: PostAuthorType) => { return (a.lastname && b.lastname ? a.lastname.localeCompare(b.lastname) : false) })
        console.log('dataAuth', data.slice(0, 5))
        const dataAuth = data.slice(0, 5)
        setAuthors(dataAuth.slice(0, 5))
        setLoadingA(false)
      })
      .catch(err => {

        console.log(err)
      })
  }
  async function getTags(sport: String) {
    console.log('getTags', API_LINK + 'v1/tagsArticles/FR/' + sport)
    await axios.get(API_LINK + 'v1/tagsArticles/FR/' + sport + '/')
      .then(response => {

        setTags(response.data.slice(0, 14))
        setLoadingT(false)
      })
      .catch(err => {

        console.log(err)
      })
  }
  return (
    (loading && loadingA && loadingP && loadingT) === false ?
      <div className={`nc-SingleSidebar ${className}`}>

        {/* <WidgetCategories categories={categories} /> */}
        <Skyscraper banner="/images/doc/img/bg/sidebar-1.png" href="#" width="416px" height="600px" />
        <WidgetPosts posts={articlesPopular} type={'popular'} />
        <Pave banner="/images/doc/img/bg/sidebar-1.png" href="#" width="416px" height="330px" />

        <WidgetAuthors authors={authors} />

        {/* <WidgetPosts posts={articles} type={'recent'} /> */}
        <Pave banner="/images/doc/img/bg/sidebar-1.png" href="#" width="416px" height="330px" />

        <WidgetTags tags={tagsArticles} />
      </div>
      : <Spinner loading={loading && loadingA && loadingP && loadingT}></Spinner>
  );
};
