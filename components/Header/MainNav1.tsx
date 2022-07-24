import React, { FC, useState, useEffect ,ReactNode} from 'react';
import axios from "axios";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Logo from "../../components/Logo/Logo";
import Navigation from "../../components/Navigation/Navigation";
import SearchDropdown from "./SearchDropdown";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import ButtonPrimaryLogin from "../../components/Button/ButtonPrimaryLogin";
import MenuBar from "../../components/MenuBar/MenuBar";
import DarkModeContainer from "../../containers/DarkModeContainer/DarkModeContainer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faUser from "@fortawesome/fontawesome-free-solid/faUser"
import {
  addNewUser, removeUser ,UserID,UserType
  } from "../../store/login/auth";
import { useAppDispatch, useAppSelector } from "../../store/hooks";  
import { useRouter } from 'next/router';
import { API_LINK } from "../../utils/constantes";
export interface MainNav1Props {
  isTop: boolean;
  user:string|number;
}
const userIcon = faUser as IconProp;
const MainNav1: FC<MainNav1Props> = ({ isTop ,user }) => {
  const router=useRouter()
  const dispatch = useAppDispatch();

  const onSignOut = () => {
    dispatch(removeUser())
    router.push('/').then(()=>{
      router.reload()
    })
   
 };
 const login =()=>{
   router.push('/login')
 }
  return (
    <div
      className={`nc-MainNav1 relative z-50 ${
        isTop ? "onTop " : "notOnTop backdrop-filter"
      }`}
      // style={{background:"#E5E5E5"}}
    >
      <div className="container relative flex justify-between items-center space-x-4 xl:space-x-8" style={{paddingTop: "1.25rem",
    paddingBottom: "1.25rem"}}>
        <div className="flex justify-start flex-grow items-center space-x-4  ">
          <Logo />
          <Navigation />
        </div>
        <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100">
        <div className=" items-center xl:flex space-x-1">
                      <DarkModeContainer  />
            <SearchDropdown />
          </div>
          {!user?
            <ButtonPrimaryLogin onClick={() => login()}>Se Connecter</ButtonPrimaryLogin>
            :
            <a href="/dashboard"><FontAwesomeIcon icon={userIcon} color ="#d9534f"  /></a>
            
            // <ButtonPrimaryLogin  onClick={() => onSignOut()}>Se Déconnecter</ButtonPrimaryLogin>
             }
          <div className="flex items-center lg:hidden">

     
            <div className="px-1" />
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav1;
