import Logo from "../../components/Logo/Logo";
import SocialsList1 from "../../components/SocialsList1/SocialsList1";
import { CustomLink } from "../../data/types";
import React from "react";
import Item from "antd/lib/list/Item";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  
  {
    id: "1",
    title: "EXPLORER",
    menus: [
      { href: "/sport/Football", label: "Football" },
      { href: "/ComingSoon", label: "Live Scores" },
      { href: "/fennecs", label: "Fennecs" },
      { href: "#", label: "Podcasts" },
      { href: "#", label: "TV" },
      { href: "/sports", label: "Tous les sports" },
      { href: "/journal", label: "Le Journal" },
    ],
  },
  {
    id: "2",
    title: "COMPTES",
    menus: [
      { href: "/login", label: "Se Connecter" },
      { href: "/signup", label: "Créer un compte" },
      { href: "/forgot-pass/", label: "Mot de passe oublié" },
      { href: "#", label: "" },
      { href: "/contact", label: "NOUS CONTACTER" },
     
    ],
  },
  {
    id: "4",
    title: "MENTIONS LÉGALES",
    menus: [
      { href: "/Conditions/", label: "Conditions d’utilisations" },
      { href: "/Politique", label: "Politique de confidentialité" },
      { href: "#", label: "" },
      { href: "#", label: "" },
      { href: "#", label: "NEWSLETTERS" },
     
    ],
  },
  {
    id: "5",
    title: "LANGUES",
    menus: [
      { href: "https://maracanafott.fr", label: "Français" },
      { href: "https://maracanafott.com", label: "Arabe" },
     
    ],
  }
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              {item.label == "NOUS CONTACTER" || item.label == "NEWSLETTERS" ?
               <a
               key={index}
               className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
               href={item.href}
               style={{fontWeight:"bold"}}
             >
               
               {item.label}
             </a> :
              <a
              key={index}
              className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
              href={item.href}
              
            >
              
              {item.label}
            </a>}
             
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="nc-Footer bg-neutral-900 dark relative py-16 lg:py-28 border-t border-neutral-200 dark:border-neutral-700">
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
        <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1">
            <Logo />
          </div>
          <br></br>
          <div className="col-span-2 flex items-center md:col-span-3">
            <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" />
          </div>
        </div>
        {widgetMenus.map(renderWidgetMenuItem)}
      </div>
    </div>
  );
};

export default Footer;
