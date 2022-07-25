import React, { FC, useState, useEffect ,ReactNode} from 'react';
import axios from "axios";
import LayoutPage from "../../components/LayoutPage/LayoutPage";

import Input from "../../components/Input/Input";
import SimpleReactValidator from "simple-react-validator";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import NcLink from "../../components/NcLink/NcLink";
import { Helmet } from "react-helmet";
import { API_LINK } from "../../utils/constantes";
import { useRouter } from "next/router";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import ModalConfirmAddComment from "../../components/CommentCard/ModalConfirmAddComment"
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook"
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter"
import faGoogle from "@fortawesome/fontawesome-free-brands/faGoogle"

import {
  addNewUser, removeUser ,UserID,UserType ,authRedirectPath,onSetRedirectPath
  } from "../../store/login/auth";
export interface PageLoginProps {
  className?: string;
}



const PageLogin: FC<PageLoginProps> = ({ className = "" }) => {
  const facebook = faFacebook as IconProp;
  const twitter = faTwitter as IconProp;
const google = faGoogle as IconProp
  const validator = new SimpleReactValidator({ autoForceUpdate: this })
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [mail,setEmail] =useState("")
  const [password,setPassword] =useState("")
  const userId = useAppSelector(UserID);
  const path = useAppSelector(authRedirectPath)
  console.log("paaaath",path,userId)
  const [confirmAdd, setConfirmAdd] = useState(false);
  const [text, setText] = useState("");
  console.log("userrr",userId)
  const openModalConfirmAddComment = () => setConfirmAdd(true);
  const closeModalConfirmAddComment = () => setConfirmAdd(false);
  useEffect(()=>{
    validator.showMessages()
  },[password])
    useEffect(()=>{
   if(userId)
   {
     router.replace('/dashboard/root')
   }
  },[])
  const onSubmit = () => {
       const data={mail,password}
       axios
         .post(API_LINK + "v1/loginNew", data)
         .then((res) => {
           
           if (res.data.message) {
             setText(res.data.message)
             openModalConfirmAddComment()
           } else {
             const user = {
               UserID: res.data.user._id,
               UserMail: res.data.user.mail,
               UserType:res.data.user.type,
               UserToken:res.data.token,
               UserIsValid:res.data.user.isvalid,
               userName:"",
               userLastName :"",
               authRedirectPath: path?path:"/"
             }
             console.log("res login", user)
             dispatch(addNewUser(user));
             router.replace(path?path:"/")
            console.log("res login success")
           }
         }) 
         .catch((err) => {
          console.log("res login failed",err)
          setText("Une erreur s'est produite. Veuillez réessayer;")
           openModalConfirmAddComment()
           console.log("Error lors de l'authentification .Veuillez réessayer")
         });
 
 
     // router.replace("/")
 
 };
 
  return (
    <div className={`nc-PageLogin ${className}`} data-nc-id="PageLogin">
      <Helmet>
        <title>Login || Maracana</title>
      </Helmet>
      <HeaderContainer user={userId} />
      <LayoutPage
        subHeading=""
        headingEmoji="🔑"
        heading="Login"
      >
        <div className="max-w-md mx-auto space-y-6">
          <div className="grid gap-3">
         
              <a
              
                href={"#"}
                className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              >
               <FontAwesomeIcon icon={facebook} color="#4267B2"></FontAwesomeIcon>
                <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                 Continuer avec Facebook
                </h3>
              </a>
              <a
              
              href={"#"}
              className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
            >
             <FontAwesomeIcon icon={twitter}  color="#1DA1F2"></FontAwesomeIcon>
              <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
               Continuer avec Twitter
              </h3>
            </a>
            <a
              
              href={"#"}
              className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
            >
             <FontAwesomeIcon icon={google} color="#DB4437"></FontAwesomeIcon>
              <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
               Continuer avec Google
              </h3>
            </a>
       
          </div>
          {/* OR */}
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm  dark:text-neutral-400 dark:bg-neutral-900">
              OU
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div>
          {/* FORM */}
          <div className="grid grid-cols-1 gap-6" >
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                L'adresse mail
              </span>
              <Input
                type="email"
                placeholder="exemple@exemple.com"
                className="mt-1"
                value={mail} name="register-email-entreprise" onChange={e => { setEmail(e.target.value) }} onBlur={() => validator.showMessageFor("mail")} required
              />
              <span style={{ 'color': 'red' }}>{validator.message('mail', mail, 'required|email',
                                                                            {
                                                                                messages: {
                                                                                  'required': "Champs obligatoire", 
                                                                                  'email': "Veuillez entrer une adresse e-mail valide"
                                                                                }
                                                                            })}</span>

            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Mot de passe
                <NcLink href="/forgot-pass"  lien="/forgot-pass" className="text-sm">
                Mot de passe oublié?
                </NcLink>
              </span>
              <Input type="password" className="mt-1" value={password} name="register-password" onChange={e => { setPassword(e.target.value) }} required onBlur={() => validator.showMessageFor('password')} />
              <span style={{ 'color': 'red' }}>{validator.message('password', password, 'required',
                                                                            {
                                                                                messages: {
                                                                                    'required': "Champs obligatoire", 
                                                                                }
                                                                            }
                                                                        )}</span>
            </label>
            <ButtonPrimary disabled={!mail || !password || !validator.allValid() } onClick={() => onSubmit()} >Se Connecter</ButtonPrimary>
          </div>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Nouvel utilisateur? {` `}
            <NcLink href="/signup" lien="/signup">Créer un compte
                {/* <a href="/signup">Créer un compte</a> */}
                </NcLink>
          </span>
        </div>
         <ModalConfirmAddComment
          header="Erreur"
          text={text}
          show={confirmAdd}
          onCloseModalConfirmComment={closeModalConfirmAddComment}
        />
      </LayoutPage>
    </div>
  );
};

export default PageLogin;
