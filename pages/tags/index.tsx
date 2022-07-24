import React, { FC, useEffect, useState } from "react";

import { PostAuthorType,  AuthorType ,ArticleDataType, ArticleType} from "../../data/types";
import Pagination from "../../components/Pagination/Pagination";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import ModalCategories from "../../containers/PageArchive/ModalCategories";
import ModalTags from "../../containers/PageArchive/ModalTags";


import Nav from "../../components/Nav/Nav";
import NavItem from "../../components/NavItem/NavItem";
import Avatar from "../../components/Avatar/Avatar";
import SocialsList from "../../components/SocialsList/SocialsList";
import ArchiveFilterListBox from "../../components/ArchiveFilterListBox/ArchiveFilterListBox";
import useDemoTabFilter from "../../hooks/useDemoTabFilter";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "../../components/SectionSubscribe2/SectionSubscribe2";
import Card11 from "../../components/Card11/Card11";
import BackgroundSection from "../../components/BackgroundSection/BackgroundSection";
import SectionGridCategoryBox from "../../components/SectionGridCategoryBox/SectionGridCategoryBox";
import { DEMO_CATEGORIES } from "../../data/taxonomies";
import ButtonSecondary from "../../components/Button/ButtonSecondary";
import SectionSliderNewAuthors from "../../components/SectionSliderNewAthors/SectionSliderNewAuthors";
import NcImage from "../../components/NcImage/NcImageAuthor";
import { API_LINK } from "../../utils/constantes";
import axios from 'axios'
 import { useRouter } from "next/router";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import { useAppSelector } from "../../store/hooks";
import { UserID } from "../../app/login/auth";
import moment from 'moment'
import { BillBoard } from "../../components/Ads";

export interface PageTagsProps {
  className?: string;
  post: ArticleDataType
}

const FILTERS = [
  { name: "Plus Récents" },
  // { name: "Curated by Admin" },
  { name: "Plus Populaire" },
  { name: "Plus Commentés" },
  { name: "Plus Vus" },
];
// const TABS = ["Articles", "Favorites", "Saved"];
const TABS = ["Articles"];

const PageTags: FC<PageTagsProps> = ({ className = "" , post}) => {
  let timeOut: NodeJS.Timeout | null = null;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tabActive, setTabActive] = useState<string>(TABS[0]);
  const [tagsArticles, setTags] = useState([])
  const [loadingT, setLoadingT] = useState(true)

const user= useAppSelector(UserID)
  

  const handleClickTab = (item: string) => {
    if (item === tabActive) {
      return;
    }
    setIsLoading(true);
    setTabActive(item);
    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 600);
  };

  
  
  const [Author,setAuthor] = useState<PostAuthorType>()
  const [Articles,setArticles] = useState<ArticleDataType[]>()
  const [Books,setBooks] = useState<ArticleDataType[]>()
  const [Podcasts,setPodcasts] = useState<ArticleDataType[]>()// to complete
  const [Videos,setVideos] = useState<ArticleDataType[]>()// to complete
  const [Saved,setSaved] = useState<ArticleDataType[]>()// to complete

  const perPage=12
  const router = useRouter();
  const query = useRouter().query;
  const [totalcount, setTotalcount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [socialMedia, setSocialMedia] = useState([]);
  const [idAuth, setIdAuth] = useState("");

useEffect(()=>{
  console.log("filter", router.asPath.split('?')[1])
    if(router.isReady){
      const filtre = query.filtre? Array.isArray(query.filtre) ? query.filtre[0] : query.filtre:"Recent"
      const page=query.page? Array.isArray(query.page) ? query.page[0] : query.page:""
      const nom=router.asPath.split('?')[1]
      const prenom=query.p? Array.isArray(query.p) ? query.p[0] : query.p:""
      getOwnArticles(nom,prenom,page ? parseInt(page) : 1, perPage,filtre)
      //getOwnBooks(page ? parseInt(page) : 1, perPage)
      
       getTags("Football")
      }}, [query.page,query.filtre,router.isReady])
      async function getTags(sport: String) {
        console.log('getTags', API_LINK + 'v1/tagsArticles/FR/Football')
        await axios.get(API_LINK + 'v1/tagsArticles/FR/Football/')
          .then(response => {
      
            setTags(response.data.slice(0, 14))
            setLoadingT(false)
          })
          .catch(err => {
      
            console.log(err)
          })
      }
  const getOwnArticles = (nom:string,prenom:string,page:string|number,limit:string|number,filtre:string) => {
     let URLGet
    URLGet= "v1/articlesByKeyWord/"+page+"/"+limit+"/"+nom+"/"
    console.log('podcastfiltre', URLGet)
    axios.get(API_LINK + URLGet).then((Response) => {
     
      let data: ArticleDataType []=  Response.data.article.map(( item :ArticleDataType) => {
        
        return {
          _id: item._id,
          count: 0,
          title: item.title,
          href: "/",
          desc: item.resumer,
          image: API_LINK + item.image,
          commentCount: item.comments.length,
          viewdCount: 584,
          readingTime: item.countVisit,
          bookmarked: item.bookmarked.length,
          likes: item.likes?.length,
          date:moment(item.date).format(""),
          author: item.author,
          //categoriesId: [3, 12],
          postType: "standard",
          tournois: item.tournois,
          categories: item.category,
          typearticle:item.typearticle
          
        }
      })
      setArticles(data)
      setTotalCount(Response.data.count);
      setTotalcount(Response.data.article.length);
    }).catch((err) => {
      console.log('err', err)
    })
  
  }

  
  // const activePosts = useDemoTabFilter({
  //   isLoading,
  //   initPosts:  Articles,
  //   tabs: TABS,
  //   newPosts:Articles, 
  //   tabActive,
  // })

  return ( 
    
    <div className={`nc-PageAuthor  ${className}`} data-nc-id="PageAuthor">
 <> <HeaderContainer  user={user}/>
 <BillBoard banner="/images/doc/img/bg/sidebar-1.png"  href="#"/>

      <Helmet>
        <title>Tags || Maracana</title>
      </Helmet>

      {/* HEADER */}
      <div className="w-full px-2 xl:max-w-screen-2xl mx-auto" style={{width:"85%"}}>
        <div className="rounded-3xl relative aspect-w-16 aspect-h-16 sm:aspect-h-9 lg:aspect-h-8 xl:aspect-h-6 overflow-hidden ">
          <NcImage
         
            containerClassName="absolute inset-0"
            src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black text-white bg-opacity-30 flex flex-col items-center justify-center">
            <h2 className="inline-block align-middle text-5xl font-semibold md:text-7xl ">
            Garden
            </h2>
            <span className="block mt-4 text-neutral-300">
              13 Articles
            </span>
          </div>
        </div>
      </div>

      {/* ====================== END HEADER ====================== */}

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <div>
          <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row">
            <div className="flex space-x-2.5">
              {/* <ModalCategories categories={DEMO_CATEGORIES} /> */}
              <ModalTags tags={tagsArticles} />
            </div>
            <div className="block my-4 border-b w-full border-neutral-100 sm:hidden"></div>
            <div className="flex justify-end">
              <ArchiveFilterListBox lists={FILTERS} router={router}/>
            </div>
          </div>

          {/* LOOP ITEMS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10">
            { Articles?.map((post) => (
              <Card11 key={post._id} post={post} />
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
          {totalCount > perPage ? (
                <Pagination perPage={perPage} total={totalCount} />
              ) : (
                ""
              )}
            {/* <ButtonPrimary>Show me more</ButtonPrimary> */}
          </div>
          </div>

        {/* === SECTION 5 === */}
        {/* <div className="relative py-16">
          <BackgroundSection />
          <SectionGridCategoryBox
            categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
          />
          <div className="text-center mx-auto mt-10 md:mt-16">
            <ButtonSecondary>Show me more</ButtonSecondary>
          </div>
        </div> */}

        {/* === SECTION 5 === */}
        {/* <SectionSliderNewAuthors
          heading="Top elite authors"
          subHeading="Discover our elite writers"
          authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
        /> */}

        {/* SUBCRIBES */}
        <SectionSubscribe2 />
      </div></>
    </div>
  );
};

export default PageTags;
