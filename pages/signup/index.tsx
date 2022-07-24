import React, { FC, useState, useEffect, ReactNode } from "react";
import axios from "axios";
import LayoutPage from "../../components/LayoutPage/LayoutPage";
import moment from "moment"
import Input from "../../components/Input/Input";
import Radio from "../../components/Radio/Radio";
import SimpleReactValidator from "simple-react-validator";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import NcLink from "../../components/NcLink/NcLink";
import { Helmet } from "react-helmet";
import { API_LINK } from "../../utils/constantes";
import { useRouter } from "next/router";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import ModalConfirmAddComment from "../../components/CommentCard/ModalConfirmAddComment";
import { UserID } from "../../app/login/auth";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook"
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter"
import faGoogle from "@fortawesome/fontawesome-free-brands/faGoogle"
export interface PageSignUpProps {
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

const PageSignUp: FC<PageSignUpProps> = ({ className = "" }) => {
  const facebook = faFacebook as IconProp;
  const twitter = faTwitter as IconProp;
const google = faGoogle as IconProp
  const validator = new SimpleReactValidator({ autoForceUpdate: this });
  const router = useRouter();
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmAdd, setConfirmAdd] = useState(false);
  const [error, setError] = useState(false);
  const userId = useAppSelector(UserID);
  const [text, setText] = useState("");
  const [type, setType] = useState("Client");
  const openModalConfirmAddComment = () => setConfirmAdd(true);
  const closeModalConfirmAddComment = () => setConfirmAdd(false);
  useEffect(() => {
    validator.showMessages();
  }, [password,type,mail]);
  const Inscription = () => {
    setError(false);
    // var client = document.getElementsByName('register-type')[0] as HTMLInputElement;
    // var auteur =document.getElementsByName('register-type')[1] as HTMLInputElement;
    // console.log("type both",auteur,auteur.checked,client,client.checked)
    let type="Client"
    // if(auteur.checked){
    //   type="simple"
    // }
    // else if (client.checked){
    //   type="Client"
    // }
    // else {
    //   type="Client"
    // }
    console.log("<type both2>",type)
    if (validator.allValid()) {
      const lien = "https://maracanafoot.fr" + "/confirmation_Email";
      const action =  JSON.stringify({
        date: moment()
    })
      const data = {
        mail,
        password,
        type,
        lien,
        action
      };
      
      axios
        .post(API_LINK + "v1/userNew", data)
        .then((res) => {
          console.log("res login", res.data);
          if (!res.data.message) {
            setText(
              type!="simple"?"Veuillez consulter votre boite mail un message à été envoyé pour valider votre compte":""
            );
            openModalConfirmAddComment();
          } else {
            setText(res.data.message);
            setError(true);
            openModalConfirmAddComment();
          }
        })
        .catch((err) => {
          setText(
            "Une erreur s'est produite lors de votre inscription, veuillez réessayer;"
          );
          setError(true);
          openModalConfirmAddComment();
          console.log("Error lors de l'authentification .Veuillez réessayer");
        });
    } else {
      validator.showMessages();
    }
  };
  return (
    <div className={`nc-PageSignUp ${className}`} data-nc-id="PageSignUp">
      <Helmet>
        <title>Inscription || Maracana</title>
      </Helmet>
      <HeaderContainer user={userId} />
      <LayoutPage subHeading="" headingEmoji="🎉" heading="Inscription">
        <div className=" max-w-md mx-auto space-y-6">
          {/* <label className="block mb-4">
            <span className="text-neutral-800 dark:text-neutral-200">
              Veuillez séléctionner le type de l'utilisateur
            </span>
            <label className="flex">
          
              <div className="flex items-center">
                <input
              
                  value="Client"
                  id="register-client"
                  name="register-type"
                  type="radio"
                  checked={true}
                  onChange={(e)=>setType(e.target.value)}
                  className="focus:ring-action-primary mt-4"
                />

                <label
                  htmlFor="register-type"
                  className="mt-2 ml-3 block text-paragraph-small text-black dark:text-white"
                >
                  Client simple
                </label>
              </div>
              <div className="flex items-center ml-5 ">
                <input
                  id="register-auteur"
                  style={{}}
                  name="register-type"
                  type="radio"
                  value="simple"
                  onChange={()=> console.log("tyyype")}
                  className="focus:ring-action-primary h-4 w-4 text-action-primary border-primary mt-4"
                />

                <label
                  htmlFor="register-type"
                  className="ml-3 mt-2  block text-paragraph-small  text-black dark:text-white" 
                >
                  Auteur
                </label>
              </div>
              <span style={{ color: "red" }}>
                {validator.message("type", type, "required", {
                  messages: {
                    required: "Champs obligatoire",
                  },
                })}
              </span>
            </label>
          </label> */}

          <div className="grid grid-cols-1 gap-6 ">
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                L'adresse mail
              </span>
              <Input
                type="email"
                placeholder="exemple@exemple.com"
                className="mt-1"
                value={mail}
                name="register-email-entreprise"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onBlur={() => validator.showMessageFor("mail")}
                required
              />
              <span style={{ color: "red" }}>
                {validator.message("mail", mail, "required|email", {
                  messages: {
                    required: "Champs obligatoire",
                    email: "Veuillez entrer une adresse e-mail valide",
                  },
                })}
              </span>
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Mot de passe
              </span>
              <Input
                type="password"
                className="mt-1"
                value={password}
                name="register-password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
                onBlur={() => validator.showMessageFor("password")}
              />
              <span style={{ color: "red" }}>
                {validator.message(
                  "password",
                  password,
                  [
                    "required",
                    {
                      regex: `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$#%*+@!?&])[A-Za-z\\d$#%*+@!?&]{12,}$`,
                    },
                  ],
                  {
                    messages: {
                      required: "Champs obligatoire",
                      regex:
                        "Mot de passe doit contenir au moins 12 caractères, une minuscule, une majuscule, un chiffre et un caractère spécial($#%*+@!?&)",
                    },
                  }
                )}
              </span>
            </label>
            <ButtonPrimary
              disabled={!mail || !password || !validator.allValid()}
              onClick={() => Inscription()}
            >
              S'inscrire
            </ButtonPrimary>
          </div>
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm dark:text-neutral-400 dark:bg-neutral-900">
              OU
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div>
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

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Vous avez déja un compte? {` `}
            <NcLink href="/login" lien="/login">
              Se Connecter
            </NcLink>
          </span>
        </div>
        {!error ? (
          <ModalConfirmAddComment
            header="Inscription faite avec succés"
            text={text}
            show={confirmAdd}
            onCloseModalConfirmComment={closeModalConfirmAddComment}
          />
        ) : (
          <ModalConfirmAddComment
            header="Connexion echouée"
            text={text}
            show={confirmAdd}
            onCloseModalConfirmComment={closeModalConfirmAddComment}
          />
        )}
      </LayoutPage>
    </div>
  );
};

export default PageSignUp;
