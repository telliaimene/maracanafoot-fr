import LayoutPage from "../../components/LayoutPage/LayoutPage";
import React, { ComponentType, FC ,useEffect ,useState } from "react";
// import { Redirect, Route, Switch, useRouteMatch } from "next/router";
import { useRouter } from "next/router";
import NavLink from "next/link";
import DashboardEditProfile from "./edit-profile";
import DashboardPosts from "./posts";
import DashboardRoot from "./root";

import { Helmet } from "react-helmet";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import ButtonPrimaryLogin from "../../components/Button/ButtonPrimaryLogin";
import {
  addNewUser, removeUser ,UserID,UserType 
  } from "../../store/login/auth";
export interface PageDashboardProps {
  className?: string;
}

interface DashboardLocationState {
  "/root"?: {};
  "/posts"?: {};
  "/edit-profile"?: {};
  "/subscription"?: {};
  "/billing-address"?: {};
  "/submit-post"?: {};
  "/account"?: {};
  "/"?: {};
}

interface DashboardPage {
  sPath: keyof DashboardLocationState;
  exact?: boolean;
  component: ComponentType<Object>;
  emoij: string;
  pageName: string;
}

const subPages: DashboardPage[] = [
  {
    sPath: "/root",
    exact: true,
    component: DashboardRoot,
    emoij: "🕹",
    pageName: "DASHBOARD ",
  },
  // {
  //   sPath: "/posts",
  //   component: DashboardPosts,
  //   emoij: "📕",
  //   pageName: "Posts",
  // },
  {
    sPath: "/edit-profile",
    component: DashboardEditProfile,
    emoij: "🛠",
    pageName: "Modifier le profile",
  },
 
  // {
  //   sPath: "/subscription",
  //   component: DashboardSubcription,
  //   emoij: "📃",
  //   pageName: "Subscription",
  // },
  // {
  //   sPath: "/billing-address",
  //   component: DashboardBillingAddress,
  //   emoij: "✈",
  //   pageName: "Billing address",
  // },
  // {
  //   sPath: "/submit-post",
  //   component: DashboardSubmitPost,
  //   emoij: "✍",
  //   pageName: "Submit post",
  // },
];

const PageDashboard: FC<PageDashboardProps> = ({ className = "" }) => {
  const userId = useAppSelector(UserID);
  const [page,setPage]=useState('/root')
  const router=useRouter()
  const dispatch = useAppDispatch();
  let { pathname, route } = useRouter();
   const composant =() => {
    console.log("here in composant function")
  
      switch (page) {
        case "/root":
        return (<DashboardRoot  />)
        case "/posts":
          return (<DashboardPosts />)
          case"/edit-profile":
          return (<DashboardEditProfile />)
          
          
                // case "/account":
                //   return (<DashboardEditProfile />)
      }
     
  
  

      
  }
  const onSignOut = () => {
    dispatch(removeUser())
    router.push('/').then(()=>{
      router.reload()
    })
   
 };
  return (
    <div className={`nc-PageDashboard ${className}`} data-nc-id="PageDashboard">
      <Helmet>
        <title>Dashboard || Maracana</title>
      </Helmet>
      <HeaderContainer user={userId} />
      {userId?
        <LayoutPage
        subHeading="Voir ton dashboard, gérer ton profil"
        headingEmoji="⚙"
        heading="DASHBOARD "
      >
        <div className="flex flex-col space-y-8 xl:space-y-0 xl:flex-row">
          {/* SIDEBAR */}

          <div className="flex-shrink-0 max-w-xl xl:w-80 xl:pr-8">
            <ul className="text-base space-y-1 text-neutral-6000 dark:text-neutral-400">
              {subPages.map(({ sPath, pageName, emoij }, index) => {
                return (
                  <li key={index}  className={sPath===page?"bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100":""}>
                    <NavLink
                    href={`${route}#${sPath.split('/')[1]}`}
                    >
                       <>
                      <a
                      style={{cursor:"pointer"}}
                        className="flex px-6 py-2.5 font-medium rounded-lg hover:text-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                         onClick={e=> setPage(sPath)}
                      >
                      <span className="w-8 mr-1">{emoij}</span>
                      {pageName}
                      </a>
                      </>
                      
                    </NavLink>
                  </li>
                );
              })}
              <div style={{marginLeft:50, marginBottom:20 }}>             
                <ButtonPrimaryLogin  onClick={() => onSignOut()}>Se Déconnecter</ButtonPrimaryLogin>
</div>
            </ul>
          </div>
          <div className="border border-neutral-100 dark:border-neutral-800 md:hidden"></div>
          <div className="flex-grow">
          {composant()}


          
          </div>
        </div>
      </LayoutPage>
   :
   <LayoutPage
   subHeading=""
   headingEmoji="⛔️"
   heading="Oops! Aucune permission!"
 >
  
  <span className="block text-center text-neutral-700 dark:text-neutral-300">
          Vous n'étes pas connectés! Veuillez réessayer.
          </span>
               
 </LayoutPage>
      }
   
    </div>
  );
};

export default PageDashboard;
