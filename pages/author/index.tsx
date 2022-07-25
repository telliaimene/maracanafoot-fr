import React, { FC, useEffect, useState } from "react";

import { PostAuthorType,  AuthorType ,ArticleDataType, ArticleType} from "../../data/types";
import Pagination from "../../components/Pagination/Pagination";
import ButtonPrimary from "../../components/Button/ButtonPrimary";

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

export interface PageAuthorProps {
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

const PageAuthor: FC<PageAuthorProps> = ({ className = "" , post}) => {
  let timeOut: NodeJS.Timeout | null = null;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tabActive, setTabActive] = useState<string>(TABS[0]);
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
    if(router.isReady){
      const filtre = query.filtre? Array.isArray(query.filtre) ? query.filtre[0] : query.filtre:"Recent"
      const page=query.page? Array.isArray(query.page) ? query.page[0] : query.page:""
      const nom=query.n? Array.isArray(query.n) ? query.n[0] : query.n:""
      const prenom=query.p? Array.isArray(query.p) ? query.p[0] : query.p:""
      getOwnArticles(nom,prenom,page ? parseInt(page) : 1, perPage,filtre)
      //getOwnBooks(page ? parseInt(page) : 1, perPage)
       getAuthor(nom,prenom)
  }}, [query.page,query.filtre,router.isReady])

  
  const getAuthor = (nom:String,prenom:String) => {
    
    let URLGet= "v1/userByFullName/"+nom +"/"+prenom  // a fixer plus tard the right link
    axios.get(API_LINK + URLGet).then((Response) => {
      console.log('authaur', Response.data)
      const socials = Response.data?.reseaux.splice(0,5)
      setSocialMedia(socials)
      setIdAuth(Response.data._id)
      let result : AuthorType = Response.data
      let data: PostAuthorType = {
          id: result._id?result._id:"",
          firstName:result.name?result.name:"",
          lastName:result.lastname?result.lastname:"",
          displayName:result.name + " "+ result.lastname,
          avatar:result.picture ? API_LINK +result.picture : "https://www.maracanafoot.com/utils/images/avatar-159236__340.webp",
          bgImage:result.picture ? API_LINK +result.picture : undefined,
          email:result.mail,
          count: 0,
          desc:result.biographie?result.biographie:"",
          jobName:"",
          href:"/",
        }
   
      setAuthor(data)
    }).catch((err) => {
      console.log('err', err)
    })
  
  }
  const getOwnArticles = (nom:string,prenom:string,page:string|number,limit:string|number,filtre:string) => {
   
     let URLGet
     
    URLGet= "v1/getArticlesByAuthorPagination/"+page+"/"+limit+"/"+nom+"/"+prenom+"/"+filtre+'/'
    axios.get(API_LINK + URLGet).then((Response) => {
      console.log('podcastfiltre', Response.data)
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
  const getOwnBooks = (page:string|number,limit:string|number) => { // A COMPLETER AVEC RIGHT FUNCTIONS
    const filtre = query.filtre? Array.isArray(query.filtre) ? query.filtre[0] : query.filtre:"Recent"
     let URLGet

    URLGet= "v1/getArticlesByAuthorPagination/"+page+"/"+limit+"/"+idAuth+"/"+filtre;
    axios.get(API_LINK + URLGet).then((Response) => {
      console.log('podcasttttt', Response.data)
      let table = Response.data.article.map((item: ArticleDataType) => {

        let cat: string = item.category ?
          item.category[0] ?
            item.category == "MERCATO" ?
              "MERCATO" :
              item.category == "DISCIPLINE" ? "DISCIPLINE" :
                item.tournois ?
                  item.tournois.length > 0 ? item.tournois[0].entitled :
                    item.typearticle
                  : "" : "" : ""

        return ({
          category: cat,
          date: moment(item.date).format("DD/MM/YYYY"),
          title: item.title.trim(),
          resumer: item.resumer,
          image: API_LINK + item.image,
          typearticle: item.typearticle,
          bookmarked : item.bookmarked.length,
          commentCount : item.comments.length,
          likes :item.likes?.length

          // href : "/article?"+ item.typearticle +"?" + item.title
        })
      })
      setBooks(table)
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
        <title>Auteur || Maracana</title>
      </Helmet>

      {/* HEADER */}
      <div className="w-screen px-2 xl:max-w-screen-2xl mx-auto">
        <div className="rounded-3xl md:rounded-[40px] relative aspect-w-16 aspect-h-12 sm:aspect-h-7 xl:sm:aspect-h-6 overflow-hidden ">
          <NcImage
            containerClassName="absolute inset-0"
            src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative container -mt-20 lg:-mt-nn">
          <div className="p-3 bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 lg:p-16 rounded-[40px]  flex flex-col sm:flex-row sm:items-center">
            <Avatar
              containerClassName="ring-4 ring-white dark:ring-0 "
              imgUrl={Author?.avatar}
              sizeClass="w-20 h-20 text-xl lg:text-2xl lg:w-36 lg:h-36"
              radius="rounded-full"
            />
            <div className="mt-3 sm:mt-0 sm:ml-8 space-y-4 max-w-lg">
              <h2 className="inline-block text-2xl sm:text-3xl md:text-4xl font-semibold">
                {Author?.displayName}
              </h2>
              <span className="block text-sm text-neutral-6000 dark:text-neutral-300 md:text-base">
                {Author?.desc}
              </span>
              <SocialsList socialsMedia={socialMedia} />
            </div>
          </div>
        </div>
      </div>
      {/* ====================== END HEADER ====================== */}

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <main>
          {/* TABS FILTER */}
          <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row">
            <Nav className="sm:space-x-2">
              {TABS.map((item, index) => (
                <NavItem
                  key={index}
                  isActive={tabActive === item}
                  onClick={() => handleClickTab(item)}
                >
                  {item}
                </NavItem>
              ))}
            </Nav>
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
        </main>

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

export default PageAuthor;
