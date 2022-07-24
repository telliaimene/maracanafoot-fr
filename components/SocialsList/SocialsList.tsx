import { SocialType } from "../../components/SocialsShare/SocialsShare";
import React, { FC } from "react";
import { SocialMediaType} from "../../data/types";
export interface SocialsListProps {
  className?: string;
  itemClass?: string;
  socials?: SocialType[];
  socialsMedia :SocialMediaType[],
}

const socialsDemo: SocialType[] = [
  {
    id: "Facebook",
    name: "Facebook",
    icon: "lab la-facebook-square",
    href: "#",
  },
  { id: "Twitter", name: "Twitter", icon: "lab la-twitter", href: "#" },
  { id: "Youtube", name: "Youtube", icon: "lab la-youtube", href: "#" },
  { id: "Instagram", name: "Instagram", icon: "lab la-instagram", href: "#" },
];

export const SOCIALS_2 = socialsDemo;

const SocialsList: FC<SocialsListProps> = ({
  className = "",
  itemClass = "mr-2",
  socials = socialsDemo,
  socialsMedia,
}) => {
 console.log('hhhhhhhhhhhhhhhhhh',socialsMedia) 
  return (
    <nav
      className={`nc-SocialsList flex space-x-2.5 text-2xl text-neutral-6000 dark:text-neutral-300 ${className}`}
      data-nc-id="SocialsList"
    >
      {socialsMedia.map((item, i) => (
        item.type === 'Facebook' ? 
        <a
          key={i}
          style={{ color: "inherit", textDecoration: "inherit" }}
          className={`${itemClass}`}
          href={item.lien}
          target="_blank"
          rel="noopener noreferrer"
          title={item.type}
        >
          <i className={"lab la-facebook-square"}></i>
        </a>
        : item.type === 'Twitter' ?
        <a
          key={i}
          style={{ color: "inherit", textDecoration: "inherit" }}
          className={`${itemClass}`}
          href={item.lien}
          target="_blank"
          rel="noopener noreferrer"
          title={item.type}
        >
          <i className={"lab la-twitter"}></i>
        </a>
        : item.type === 'Youtube' ?
        <a
          key={i}
          style={{ color: "inherit", textDecoration: "inherit" }}
          className={`${itemClass}`}
          href={item.lien}
          target="_blank"
          rel="noopener noreferrer"
          title={item.type}
        >
          <i className={"lab la-youtube"}></i>
        </a>
       : item.type === 'Instagram' ?
       <a
          key={i}
          style={{ color: "inherit", textDecoration: "inherit" }}
          className={`${itemClass}`}
          href={item.lien}
          target="_blank"
          rel="noopener noreferrer"
          title={item.type}
        >
          <i className={"lab la-instagram"}></i>
        </a>
        :item.type === 'LinkedIn' ?
        <a
          key={i}
          style={{ color: "inherit", textDecoration: "inherit" }}
          className={`${itemClass}`}
          href={item.lien}
          target="_blank"
          rel="noopener noreferrer"
          title={item.type}
        >
          <i className={"lab la-linkedin"}></i>
        </a>
        :item.type === 'WhatsApp' ?
        <a
          key={i}
          style={{ color: "inherit", textDecoration: "inherit" }}
          className={`${itemClass}`}
          href={item.lien}
          target="_blank"
          rel="noopener noreferrer"
          title={item.type}
        >
          <i className={"lab la-whatsapp"}></i>
        </a>
        :item.type === 'Viber' ?
        <a
          key={i}
          style={{ color: "inherit", textDecoration: "inherit" }}
          className={`${itemClass}`}
          href={item.lien}
          target="_blank"
          rel="noopener noreferrer"
          title={item.type}
        >
          <i className={"lab la-viber"}></i>
        </a>
        :item.type === 'Telegram' ?
        <a
          key={i}
          style={{ color: "inherit", textDecoration: "inherit" }}
          className={`${itemClass}`}
          href={item.lien}
          target="_blank"
          rel="noopener noreferrer"
          title={item.type}
        >
          <i className={"lab la-telegram"}></i>
        </a>
         : null
      ))}
    </nav>
  );
};

export default SocialsList;
