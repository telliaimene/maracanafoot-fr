import React, { FC, useState, useEffect ,ReactNode} from 'react';
import axios from "axios";
import Logo from "../../components/Logo/Logo";
import SubNavigation from "../../components/Navigation/SubNavigation";
import SearchDropdown from "./SearchDropdown";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import ButtonPrimaryLogin from "../../components/Button/ButtonPrimaryLogin";
import MenuBar from "../../components/MenuBar/MenuBar";
import DarkModeContainer from "../../containers/DarkModeContainer/DarkModeContainer";
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
const MainNav2: FC<MainNav1Props> = ({ isTop ,user}) => {
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
      className={`nc-MainNav1 relative bg-neutral-9000 z-10 border-t border-b border-neutral-700  ${
        isTop ? "onTop " : "notOnTop backdrop-filter"
      }`}
    //   style={{borderTop:"#FD0101 2px solid" ,borderBottom:"#FD0101 2px solid" ,
      style={{background:"rgba(17,24,39,1)" }}
    >
      <div className=" relative flex justify-between items-center space-x-4 xl:space-x-1 px-5" style={{paddingTop: "0.5rem",
    paddingBottom: "0.5rem" }}>
        <div className="flex justify-start flex-grow items-center space-x-4 " >

          <SubNavigation />
        </div>
   
      </div>
    </div>
  );
};

export default MainNav2;
