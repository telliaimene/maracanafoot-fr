import React, { FC } from "react";
import { AppProps } from "next/app";

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { API_LINK } from "../../utils/constantes";
import { Tournois } from "../../data/types";
import PageSport from '../../containers/PageHome/PageSport'
import reportWebVitals from "../reportWebVitals";
// import { persistor, store } from "../store/store";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import { useAppSelector } from "../../store/hooks";
import { UserID } from "../../store/login/auth";
import Calender from "../../containers/Calender/Calender";
import Classement from "../../containers/Classement/Classement";
import ClassementButeur from "../../containers/ClassementButeur/ClassementButeur";
import { useRouter } from "next/router"

import path from "path";
interface SportProps {
  data: string[];
}
const Sport: FC<SportProps> = ({ data }) => {
  const userId = useAppSelector(UserID);
  const router = useRouter()
  console.log("routerr sub", data)
  const taille = data ? data.length : 0
  const competition = data ? data[1] : ""
  const page = data ? data[taille - 1] : ""
  const renderPage = () => {
    console.log("paaage", page)
    switch (page) {
      case "calendrier":
        return <Calender />
      case "classement":
        return <Classement />
      case "classement-buteur":
        return <ClassementButeur />
      case "palmares":
        return <Calender />
      default:
        return <PageSport />;
    }

  }
  return (
    <>
      <div className="  text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">

        <HeaderContainer user={userId} data={data} />
        {renderPage()}

      </div>


    </>
  );

}
export async function getStaticPaths() {
  const sports = await fetch(API_LINK + "v1/sport/")
  const results = await sports.json()
  const tournois = await fetch(API_LINK + "v1/tournois-sport/Football")
  const foot :Tournois= {
    continent: "",
    coupe: [],
    entitled: "",
    entitledAR: "",
    logo:"",
    page: [],
    pays: "",
    sport: "",
    teamType: "",
    type: "",
    typeAR: "",
    _id: "",
  }
  var Tresults = await tournois.json()
  Tresults.push(foot)
  var paths: GetStaticPaths = Tresults.map((t: Tournois,id:number) => {
    if (id<Tresults.length-1)
    return (
      {
        params: {
          id: ["Football", t.entitled]
        },
      })
      else 
      return (
        {
          params: {
            id: ["Football"]
          },
        })


  })
  console.log(paths);
  
  return {
    paths,
    fallback: false,
  }
};
export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params
  console.log("proops", params);
  if (!params) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      data: params.id,
    },
    revalidate: 60,
  };

}

reportWebVitals();
export default Sport;