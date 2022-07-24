import { SOCIALS_2 } from "../../components/SocialsList/SocialsList";
import { SocialType } from "../../components/SocialsShare/SocialsShare";
import React, { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook"
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faTwitter, faViber, faYoutube,  } from "@fortawesome/fontawesome-free-brands";
import { faEnvelope, faMobile , faMobileAlt} from "@fortawesome/fontawesome-free-solid";

export interface SocialsList1Props {
  className?: string;
}

const socials: SocialType[] = SOCIALS_2;
const facebook = faFacebook as IconProp;
const instagram = faInstagram as IconProp;
const twitter = faTwitter as IconProp;
const envlope = faEnvelope as IconProp;
const viber = faViber as IconProp;
const youtube = faYoutube as IconProp;
const mobile = faMobileAlt as IconProp;
const SocialsList1: FC<SocialsList1Props> = ({ className = "space-y-2.5" }) => {
  const renderItem = (item: SocialType, index: number) => {
    return (
      <a
        href={item.href}
        className="flex items-center text-2xl text-neutral-300  hover:text-white leading-none space-x-2 group"
        key={index}
      >
      <FontAwesomeIcon icon ={facebook}></FontAwesomeIcon>
        {/* <i className={item.icon}></i> */}
        <span className="hidden lg:block text-sm">{item.name}</span>
      </a>
    );
  };

  return (
    <div className={`nc-SocialsList1 flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start`} data-nc-id="SocialsList1">
        <a
        href="#"
        className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
        key={1}
      >
    <FontAwesomeIcon icon ={facebook}></FontAwesomeIcon>
    <span className="hidden lg:block text-sm">Facebook</span></a>
    <a
        href="#"
        className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
        key={1}
      >
    <FontAwesomeIcon icon ={twitter}></FontAwesomeIcon>
    <span className="hidden lg:block text-sm">Twitter</span></a>
    <a
        href="#"
        className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
        key={1}
      >
    <FontAwesomeIcon icon ={youtube}></FontAwesomeIcon>
    <span className="hidden lg:block text-sm">Youtube</span></a>
    <a
        href="#"
        className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
        key={1}
      >
    <FontAwesomeIcon icon ={instagram}></FontAwesomeIcon>
    <span className="hidden lg:block text-sm">Instagram </span></a>
    <a
        href="#"
        className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
        key={1}
      >
    <FontAwesomeIcon icon ={viber}></FontAwesomeIcon>
    <span className="hidden lg:block text-sm">Viber</span></a>
    <a
        href="#"
        className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
        key={1}
      >
    <FontAwesomeIcon icon ={mobile}></FontAwesomeIcon>
    <span className="hidden lg:block text-sm">ANDROID</span></a>
    <a
        href="#"
        className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
        key={1}
      >
    <FontAwesomeIcon icon ={mobile}></FontAwesomeIcon>
    <span className="hidden lg:block text-sm">IOS</span></a>
    {/* <a
        href="#"
        className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
        key={1}
      >
    <FontAwesomeIcon icon ={faEnvelope}></FontAwesomeIcon>
    <span className="hidden lg:block text-sm">Contact</span></a>
    <a
        href="#"
        className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
        key={1}
      >
    <FontAwesomeIcon icon ={faFacebook}></FontAwesomeIcon>
    <span className="hidden lg:block text-sm">Newsletters </span></a> */}
        </div>
  );
};

export default SocialsList1;
