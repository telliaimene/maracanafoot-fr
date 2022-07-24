import React, { FC, useState } from "react";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import Input from "../components/Input/Input";
import Label from "../components/Label/Label";
import LayoutPage from "../components/LayoutPage/LayoutPage";
import SocialsList from "../components/SocialsList/SocialListContact";
import Textarea from "../components/Textarea/Textarea";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "../components/SectionSubscribe2/SectionSubscribe2";
import axios from "axios";
import { API_LINK ,GOOGLE_RECAPTCHA_SITE_KEY } from "../utils/constantes";
import moment from "moment";
// import ReCAPTCHA from "react-google-recaptcha";
import { useAppSelector } from "../app/hooks";
import { UserID } from "../app/login/auth";
import HeaderContainer from "../containers/HeaderContainer/HeaderContainer";
import Head from "next/head";


export interface PageContactProps {
  className?: string;
}

const info = [
  {
    title: "🗺 ADRESSE",
    desc: "10 RUE BALZAC, EL BIAR."
    +"\n"+"ALGER - ALGÉRIE",
  },
  {
    title: "💌 EMAIL",
    desc: "contact@maracanafoot.com",
  },
  {
    title: "☎ PHONE",
    desc: "+213 23 37 70 00",
  },
];

const PageContact: FC<PageContactProps> = ({ className = "" }) => {

  const userId = useAppSelector(UserID)
  const recaptchaRef = React.createRef();
  const [fullName, setFullName] =useState("")
  const [email, setEmail] =useState("")
  const [message, setMessage] = useState("")
  const resetState = () => {
    setFullName("")
    setEmail("")
    setMessage("")
  }
  const addContact = async () => {

    // console.log('daki')
    // const token = await recaptchaRef.current.executeAsync();
    // recaptchaRef.current.reset();
    // console.log('token', token)

    const contact = {
      fullName: fullName,
      date: moment().format(),
      email: email,
      message: message,
      //token
    }
    await axios.post(API_LINK + 'v1/contactPublicity', contact).then(res => {
      console.log("laylay")
      // resetState()
      setFullName("")
      setEmail("")
      setMessage("")
    }).catch(err => {
      console.log('contact failed', err.response)
    })
  }

  return (
    <div className={`nc-PageContact ${className}`} data-nc-id="PageContact">
     
     <Head>
        <title>Contact </title>
        <meta name="description" content="contact" ></meta>
        <meta  property="og:title" content="conatct" ></meta>
        <meta  property="og:description" content="desc contact" ></meta>
        <meta  property="og:image" content="https://cheatcode-assets.s3.amazonaws.com/default-social-graphic.png" ></meta>
        <meta  property="og:type" content='website'> </meta>
        
      </Head>

      <HeaderContainer user={userId} />
      <LayoutPage
        subHeading="Prenez directement contact avec nous, une réponse vous sera apportée dans les plus brefs délais."
        headingEmoji=""
        heading="Nous contacter"
      >
       <div className="grid gap-8 lg:grid-cols-2">
          <div className="max-w-sm space-y-6">
            {info.map((item, index) => (
              <div key={index}>
                <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                  {item.title}
                </h3>
                <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                  {item.desc}
                </span>
              </div>
            ))}
            <div>
              <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                🌏 RÉSEAUX SOCIAUX
              </h3>
              <SocialsList className="mt-2" />
            </div>
          </div>
          <div className="border border-neutral-100 dark:border-neutral-700 lg:hidden"></div>
          <div>
            <div className="grid grid-cols-1 gap-6" >
              <label className="block">
                <Label>Votre nom</Label>

                <Input placeholder="Example Doe"  name="fullname"  type="text"  className="mt-1" onChange={e=>setFullName(e.target.value)}/>
              </label>
              <label className="block">
                <Label>Adresse email</Label>

                <Input
                  type="email"
                  placeholder="example@example.com"
                  className="mt-1"
                  name="email"
                  
                  onChange={e=>setEmail(e.target.value)}
                />
              </label>
              <label className="block">
                <Label>Message</Label>

                <Textarea className="mt-1" name="message" rows={6}  onChange={e=>setMessage(e.target.value)} />
              </label>
              {/* <ReCAPTCHA
                      sitekey={GOOGLE_RECAPTCHA_SITE_KEY}
                      size="invisible"
                      ref={recaptchaRef}
                    /> */}

              <ButtonPrimary onClick={()=> addContact()} disabled={(fullName && email && message) ? false : true}>Envoyer</ButtonPrimary>
            </div>
          </div>
        </div>
       
      </LayoutPage>

      {/* OTHER SECTIONS */}
      <div className="container pb-16 lg:pb-28">
        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageContact;
