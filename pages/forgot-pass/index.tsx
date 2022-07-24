import React, { FC, useState, useEffect ,ReactNode} from 'react';
import axios from "axios";
import LayoutPage from "../../components/LayoutPage/LayoutPage";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import Input from "../../components/Input/Input";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import NcLink from "../../components/NcLink/NcLink";
import { Helmet } from "react-helmet";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addNewUser, removeUser ,UserID,UserType
  } from "../../store/login/auth";
  import SimpleReactValidator from "simple-react-validator";
  import ModalConfirmAddComment from "../../components/CommentCard/ModalConfirmAddComment"
  import { API_LINK } from "../../utils/constantes";
import { useRouter } from 'next/router';
export interface PageForgotPassProps {
  className?: string;
}

const PageForgotPass: FC<PageForgotPassProps> = ({ className = "" }) => {
  const validator = new SimpleReactValidator({ autoForceUpdate: this })
  const router = useRouter();
  const [confirmAdd, setConfirmAdd] = useState(false);
  const dispatch = useAppDispatch();
  const [mail,setEmail] =useState("")
  const [text, setText] = useState("");
  const [textH, setTextH] = useState("");
  const userId = useAppSelector(UserID);
  const openModalConfirmAddComment = () => setConfirmAdd(true);
  const closeModalConfirmAddComment = () => setConfirmAdd(false);
  useEffect(()=>{
    validator.showMessages()
  },[mail])
  const onSubmit = () => {
     
    const lien = "https://maracanafoot.fr"+'/reset-mdp'
    const data = {mail,lien}
    axios
      .post(API_LINK + "v1/forgotNew", data)
      .then((res) => {
        console.log("res forgot", res.data)
        if (!res.data.message) 
        {
          setText("un mail est envoyé à votre boite pour la réinitialisation de votre mot de passe")
          setTextH('Mail envoyé!')
          openModalConfirmAddComment()
        }
        else {
          setText(res.data.message)
          setTextH('Adresse introuvable!')
          openModalConfirmAddComment()
        }
      })
      .catch((err) => {
           setText("une erreur s'est produite .Veuillez réessayer")
          setTextH('Erreur!')
          openModalConfirmAddComment()
       console.log("res frgot failed",err)
      });


};
  return (
    <div
      className={`nc-PageForgotPass ${className}`}
      data-nc-id="PageForgotPass"
    >
      <Helmet>
        <title>Mot de passe Oublié || Maracana</title>
      </Helmet>
      <HeaderContainer user={userId} />
      <LayoutPage
        subHeading="Des instruction pour la réinitialisation de mot de passe seront envoyés à cet adresse mail"
        heading="Mot de passe oublié"
      >
        <div className="max-w-md mx-auto space-y-6">
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
            <ButtonPrimary onClick={onSubmit} disabled={!mail || !validator.allValid()}>Envoyer</ButtonPrimary>
          </div>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Revenir à {` `}
            <NcLink href="/login" lien="/login">Login</NcLink>
            {` / `}
            <NcLink href="/signup" lien="/signup">Inscription</NcLink>
          </span>
        </div>
        <ModalConfirmAddComment
          header={textH}
          text={text}
          show={confirmAdd}
          onCloseModalConfirmComment={()=> {if (textH==='Mail envoyé!') {router.replace("/")}}}
        />
      </LayoutPage>
    </div>
  );
};

export default PageForgotPass;
