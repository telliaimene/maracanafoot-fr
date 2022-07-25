import ButtonPrimary from "../../components/Button/ButtonPrimary";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import SimpleReactValidator from "simple-react-validator";
import moment from "moment"
import Select from "../../components/Select/Select";
import Checkbox from "../../components/Checkbox/Checkbox";
import Textarea from "../../components/Textarea/Textarea";
import ModalConfirmAddComment from "../../components/CommentCard/ModalConfirmAddComment";
import {
  addNewUser,
  removeUser,
  UserID,
  UserType,
} from "../../store/login/auth";
import { useRouter } from 'next/router';
import axios from "axios";
import { API_LINK ,COUNTRIES_LIST,VILLES,PHONE_CODE} from "../../utils/constantes";
const DashboardEditProfile = () => {
  const validator = new SimpleReactValidator({ autoForceUpdate: this });
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector(UserID);
  const [pseudo, setPseudo] = useState("");
  const [lastname, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [sexe, setSexe] = useState("");
  const [pays, setPays] = useState("");
  const [ville, setVille] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [text, setText] = useState("");
  const [confirmAdd, setConfirmAdd] = useState(false);
  const [phonePart, setPhonePart] = useState("");
  const [image, setImage] = useState("");
  const [newslettermaracana, setNewslettermaracana] = useState(false);
  const [offermaracana, setOffermaracana] = useState(false);
  const openModalConfirmAddComment = () => setConfirmAdd(true);
  const closeModalConfirmAddComment = () => setConfirmAdd(false);
  useEffect(() => {
    if (user) {
      getUser(user);
    }
  }, [user]);
  useEffect(() => {
    console.log("parametres",moment(date).format("DD/MM/yyyy"),name,lastname,ville,sexe,pays,code,phonePart,pseudo,mail)
  }, [date,name,lastname,ville,sexe,pays,code,phonePart,pseudo,mail]);
  function getUser(user: string | number) {
    axios
      .get(API_LINK + "v1/user/" + user)
      .then((response) => {
        setImage(response.data.image);
        setName(response.data.name);
        setLastName(response.data.lastname);
        setPseudo(response.data.pseudo);
        setMail(response.data.mail);
        setType(response.data.type)
        setSexe(response.data.sexe);
        setPhonePart(response.data.phone?response.data.phone.split('-')[1]:"");
        setCode(response.data.phone?response.data.phone.split('-')[0]:"");
        setVille(response.data.ville);
        setPays(response.data.pays);
        setDate(response.data.date);
        setNewslettermaracana(response.data.newslettermaracana);
        setOffermaracana(response.data.offermaracana);
      })
      .catch((err) => console.log("errUser", err));
  }
  const onSubmit = () => {
    setError(false)
    if (!validator.allValid)
    {
      validator.showMessages()
    }
    else {
      const action =  JSON.stringify({
        user:user,
        date: moment()
    })
      let data = new FormData()
      data.append('name', name)
      data.append('lastname', lastname)
      data.append('sexe', sexe)
      data.append('ville', ville)
      data.append('pays', pays)
      data.append('mail', mail)
      data.append('phonemobile', code + "-" + phonePart)
      data.append('date', date)
      data.append('pseudo', pseudo)
      data.append('type', type)
      data.append("action", action);
      axios
        .put(API_LINK + "v1/editeuser/"+user, data)
        .then((res) => {
          console.log("res login", res.data)
         
            const user = {
              UserID: res.data.user._id,
              UserMail: res.data.user.mail,
              UserType:res.data.user.type,
              UserToken:res.data.token,
              UserIsValid:res.data.user.isvalid,
              userName:res.data.user.name,
              userLastName:res.data.user.lastname,
              authRedirectPath: '/'

            }
            dispatch(addNewUser(user));
            setText(
              "Vos informations sont modifiées avec succés"
            );
            openModalConfirmAddComment();
            // router.replace("/")
           console.log("res login success")
       
        })
        .catch((err) => {
         console.log("res login failed",err)
         setText("Oops!... Une erreur s'est produite. Veuillez réessayer");
         setError(true);
         openModalConfirmAddComment();
        //  setText("Une erreur s'est produite. Veuillez réessayer;")
        //   openModalConfirmAddComment()
          console.log("Error lors de l'authentification .Veuillez réessayer")
        });
  
    }
   

};
  return (
    <div className="rounded-xl md:border md:border-neutral-100 dark:border-neutral-800 md:p-6">
      <div className="grid md:grid-cols-2 gap-6">
     
        <label className="block">
          <span className="text-neutral-800 dark:text-neutral-200">
            L'adresse mail *
          </span>
          <Input
            type="email"
            placeholder="exemple@exemple.com"
            className="mt-1"
            value={mail}
            name="register-email-entreprise"
           
            required
            disabled
          />
        </label>
        <label className="block">
          <Label>Prénom</Label>
          <Input
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            className="mt-1"
          />
        </label>
        <label className="block">
          <Label>Nom</Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="mt-1"
          />
        </label>
        <label className="block">
          <Label>Pseudo</Label>
          <Input
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
            type="text"
            className="mt-1"
          />
        </label>

        <label className="block">
          <Label>Sexe</Label>
          <Select value={sexe} onChange={(e)=>setSexe(e.target.value)} className="mt-1">
            <option value="">– Sélectionnez une –</option>
            <option value="Femme">Femme</option>
            <option value="Homme">Homme</option>
          </Select>
        </label>
        <label className="block">
          <Label>Pays</Label>
          <Select  value={pays} onChange={(e)=>setPays(e.target.value)}className="mt-1">
            <option value="">– Sélectionnez un –</option>
            {COUNTRIES_LIST.map(p=>(
               <option value={p}>{p}</option>
            ))}
         
         
          </Select>
        </label>
        <label className="block">
          <Label>Ville</Label>

          <Select value={ville} onChange={(e)=>setVille(e.target.value)} className="mt-1">
          <option value="">– Sélectionnez une –</option>
          {VILLES.map(p=>(
               <option value={p}>{p}</option>
            ))}
          </Select>
        </label>
     
        <label className="block">
          <Label>Numéro de téléphone</Label>
          <div className="flex" >
          <Select value={code} onChange={(e)=>setCode(e.target.value)} className="mt-1" style={{width:"30%"}} 
              onBlur={() => validator.showMessageFor('code')}>
          {PHONE_CODE.map(p=>(
               <option value={p.value}>{p.label}</option>
            ))}
          </Select>
          {phonePart?
                                  <span style={{ 'color': 'red' }}>{validator.message('code', code, 'required',
                                    {
                                      messages: {
                                        'required': "Champs obligatoire"
                                      }
                                    })}</span>
                                  :
                                  null}

          <Input
           style={{width:"80%"}}
            value={phonePart}
            onChange={(e) => setPhonePart(e.target.value)}
            type="mobile"
            required
            name="phone"
            id="mobile"
            className="mt-1"
          />
            <span style={{ 'color': 'red' }}>{validator.message('phone',phonePart, code?'required|phone':'phone',
                                  {
                                    messages: {
                                      'phone': "Mobile doit être un numéro de téléphone valide",
                                      required: "Champs obligatoire",
                                    }
                                  })}</span>

          </div>
        </label>
        <label className="block">
          <Label>Pseudo</Label>
          <Input
            value={date?moment(date).format("YYYY-MM-DD"):""}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            className="mt-1"
          />
        </label>

      
        <div className="block md:col-span-2">
          <Label>Photo de profil</Label>

          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-700 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-neutral-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div className="flex flex-col sm:flex-row text-sm text-neutral-6000">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md font-medium text-primary-6000 hover:text-primary-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                >
                  <span>Importer un fichier</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    value={image}
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">ou glisser-déposer </p>
              </div>
              <p className="text-xs text-neutral-500">
                PNG, JPG, GIF 
              </p>
            </div>
          </div>
        </div>
        <ButtonPrimary disabled={!mail} onClick={() => onSubmit()} >Modifier le profil</ButtonPrimary>
      </div>
      {!error ? (
          <ModalConfirmAddComment
            header="Modification faite avec succés"
            text={text}
            show={confirmAdd}
            onCloseModalConfirmComment={()=>router.reload()}
          />
        ) : (
          <ModalConfirmAddComment
            header="Connexion echouée"
            text={text}
            show={confirmAdd}
            onCloseModalConfirmComment={closeModalConfirmAddComment}
          />
        )}
    </div>
  );
};

export default DashboardEditProfile;
