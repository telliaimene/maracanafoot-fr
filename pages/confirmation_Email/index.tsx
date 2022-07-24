import React, { FC, useState, useEffect ,ReactNode} from 'react';
import axios from "axios";
import LayoutPage from "../../components/LayoutPage/LayoutPage";

import Input from "../../components/Input/Input";
import SimpleReactValidator from "simple-react-validator";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import NcLink from "../../components/NcLink/NcLink";
import { Helmet } from "react-helmet";
import { API_LINK ,KIOSQUE_LINK} from "../../utils/constantes";
import { useRouter } from 'next/router';
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import ModalConfirmAddComment from "../../components/CommentCard/ModalConfirmAddComment"
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addNewUser, removeUser ,UserID,UserType
  } from "../../store/login/auth";
import Spinner from "../../components/spinner";
export interface PageLoginProps {
  className?: string;
}

const loginSocials = [
  {
    name: "Continuer avec Facebook",
    href: "#",
    icon: "images/Facebook.svg",
  },
  {
    name: "Continuer avec Twitter",
    href: "#",
    icon: "images/Twitter.svg",
  },
  {
    name: "Continuer avec Google",
    href: "#",
    icon: "images/Google.svg",
  },
];

const PageLogin: FC<PageLoginProps> = ({ className = "" }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const userT = router.query.confirm? Array.isArray(router.query.confirm) ? router.query.confirm[0] : router.query.confirm:""
  
  const [user,setUser] =useState("")
  const [loading,setLoading] =useState(true)
  const [valide,setValid] =useState(true)
  const userId = useAppSelector(UserID);
  console.log("userrr",userId)
  useEffect(()=>{
    if(userId)
    {
     router.replace('/')
    }
    else {
      if (userT)
      {
      validateEmail(valide,userT)}
    }
  },[router.isReady])
    useEffect(()=>{
    if(userId)
    {
     router.replace('/')
    }
  },[valide])
  const validateEmail=(isValide:boolean,userID:string|number)=>{
        const validateUser={
            isValide:true,
        }
        axios.put(API_LINK+'v1/confirmNew/'+userID,validateUser)
        .then(res=>{
          console.log("res confirm",res.data)
          if (res.data.message)
          { console.log("res confirm msg",res.data)
            setValid(false)
            setLoading(false)
          }
          
          else {
            setValid(true)
            const user = {
              UserID: res.data.user._id,
              UserMail: res.data.user.mail,
              UserType:res.data.user.type,
              UserToken:res.data.token,
              UserIsValid:res.data.user.isvalid,
              userName:"",
              userLastName:"",
              authRedirectPath: '/'

            }
            
            dispatch(addNewUser(user));
          }
        
        })
        .catch(err=>{
          setValid(false)
          setLoading(false)
          console.log("erreur lors de confirmation",err)
        })
}


 
  return (
    <div className={`nc-PageLogin ${className}`} data-nc-id="PageLogin">
      <Helmet>
        <title>Confirmation Email || Maracana</title>
      </Helmet>
      {loading ?
      <Spinner loading={loading}/>
      :
      valide==false?
      <>
      <HeaderContainer user={userId} />
      <LayoutPage
        subHeading=""
        heading="Délai expiré!"
      >
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
          Délai de confirmation est expiré .Veuillez s'inscrire de nouveau
          </span>
       
      </LayoutPage>
      </>:null

      }
  
    </div>
  );
};

export default PageLogin;
