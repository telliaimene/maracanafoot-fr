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

const PageReinitialisation: FC<PageForgotPassProps> = ({ className = "" }) => {
  const validator = new SimpleReactValidator({ autoForceUpdate: this })
  const router = useRouter();
  const userT = router.query.forgot? Array.isArray(router.query.forgot) ? router.query.forgot[0] : router.query.forgot:""
  const [confirmAdd, setConfirmAdd] = useState(false);
  const dispatch = useAppDispatch();
  const [passwordConfirm,setPasswordConfirm] =useState("")
  const [password,setPassword] =useState("")
  const [text, setText] = useState("");
  const [textH, setTextH] = useState("");
  const userId = useAppSelector(UserID);
  const openModalConfirmAddComment = () => setConfirmAdd(true);
  const closeModalConfirmAddComment = () => setConfirmAdd(false);
  useEffect(()=>{
    validator.showMessageFor('password')
  },[password])
  useEffect(()=>{
    validator.showMessageFor('passwordConfirm')
  },[passwordConfirm])
  const onSubmit = () => {
    if (!validator.allValid())
    { 
      validator.showMessages()

    }
    else {
      const token=userT
      const data = {password}
      axios
      .post(API_LINK + "v1/resetNew/"+token, data)
      .then((res) => {
        console.log("res reset", res.data)
        if (!res.data.message) 
        {
          setText("Mot de passe modifié avec succés!")
          setTextH('Succés!')
          openModalConfirmAddComment()
        }
        else {
          setText(res.data.message)
          setTextH('Oops!!')
          openModalConfirmAddComment()
        }
      })
      .catch((err) => {
           setText("une erreur s'est produite .Veuillez réessayer")
          setTextH('Erreur!')
          openModalConfirmAddComment()
       console.log("res frgot failed",err)
      });

    }     
    

};
  return (
    <div
      className={`nc-PageForgotPass ${className}`}
      data-nc-id="PageForgotPass"
    >
      <Helmet>
        <title>Réinitialisation || Maracana</title>
      </Helmet>
      <HeaderContainer user={userId} />
      <LayoutPage
        subHeading="Veuillez entrer un nouveau mot de passe pour votre compte"
        heading="Réinitialisation de mot de passe"
      >
        <div className="max-w-md mx-auto space-y-6">
          {/* FORM */}
          <div className="grid grid-cols-1 gap-6" >
          <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Nouveau mot de passe
              </span>
              <Input type="password" className="mt-1" value={password} name="register-password" onChange={e => { setPassword(e.target.value) }} required onBlur={() => validator.showMessageFor('password')} />
              <span style={{ 'color': 'red' }}>{validator.message('password', password, ['required', { regex: `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$#%*+@!?&])[A-Za-z\\d$#%*+@!?&]{12,}$` }],
                                                                            {
                                                                                messages: {
                                                                                    'required': "Champs obligatoire", 
                                                                                    'regex': "Mot de passe doit contenir au moins 12 caractères, une minuscule, une majuscule, un chiffre et un caractère spécial($#%*+@!?&)"
                                                                                }
                                                                            }
                                                                        )}</span>
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
              Confirmer le mot de passe
              </span>
              <Input type="password" className="mt-1" value={passwordConfirm} name="register-password" onChange={e => { setPasswordConfirm(e.target.value) }} required onBlur={() => validator.showMessageFor('passwordConfirm')} />
              <span style={{ 'color': 'red' }}>{validator.message('passwordConfirm', passwordConfirm, ['required', { regex: `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$#%*+@!?&])[A-Za-z\\d$#%*+@!?&]{12,}$` }],
                                                                            {
                                                                                messages: {
                                                                                    'required': "Champs obligatoire", 
                                                                                    'regex': "Mot de passe doit contenir au moins 12 caractères, une minuscule, une majuscule, un chiffre et un caractère spécial($#%*+@!?&)"
                                                                                }
                                                                            }
                                                                        )}</span>
                                                                        <span style={{ 'color': 'red' }}>{validator.message('passwordMatch', passwordConfirm===password, 'message',
                                                                            {
                                                                                messages: {
                                                                                    'message': "Les deux mot de passe ne se ressemblent pas ", 
                                                                                }
                                                                            }
                                                                        )}</span>
            </label>
            <ButtonPrimary onClick={onSubmit} disabled={!password || !passwordConfirm }>Envoyer</ButtonPrimary>
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
          onCloseModalConfirmComment={()=> {if (textH==='Succés!') {router.replace("/login")}
        else {router.replace("/forgot-pass")}}}
        />
      </LayoutPage>
    </div>
  );
};

export default PageReinitialisation;
