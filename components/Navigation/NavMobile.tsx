import React, { FC, useEffect, useRef, useState } from "react";
import ButtonClose from "../../components/ButtonClose/ButtonClose";
import Logo from "../../components/Logo/Logo";
import { Disclosure } from "@headlessui/react";
import ncNanoId from "../../utils/ncNanoId";
import NavLink from "next/link";
import DarkModeContainer from "../../containers/DarkModeContainer/DarkModeContainer";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import SocialsList from "../../components/SocialsList/SocialListContact";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import axios from "axios";
import { API_LINK ,TV_LINK,PODCAST_LINK } from "../../utils/constantes";
import { toogleDarkMode, selectDarkmodeState } from "../../store/darkmode/darkmode";import { useAppSelector, useAppDispatch } from "../../store/hooks";
export interface NavMobileProps {
  onClickClose?: () => void;
}
export interface SubNavType {
    id: string
    href: string
    name: string
  
}
export interface NavItemType {
  id: string;
  name: string;
  href: string;
  indice?: string;
  targetBlank?: boolean;
  children?: NavItemType[];
  megaMenu?: NavItemType[];
  type?: "dropdown" | "megaMenu" | "none";

}
export interface TournoisItem {
  _id?: string;
  value: string;
  label: string;

}
export interface SportItem {
  _id: string;
  sport: string;
}
const NavMobile: React.FC<NavMobileProps> = ({
  onClickClose,
}) => {
  const [topTournois,setTopTournois] = useState<NavItemType[]|undefined>(undefined) 
  const [sports,setSports] = useState<NavItemType[]|undefined>(undefined) 
  const [NavigationItems,setNavigationItems] = useState<NavItemType[]|undefined>(undefined)
  useEffect(()=>{
    getTopTournois()
    getSports()
  },[])
  useEffect(()=>{
    console.log("Hd topTournois",topTournois)
    if(topTournois && sports )
    {
      setNavigationItems([
        {
      id: ncNanoId(),
      href: "/sport/Football",
      name: "FOOTBALL",
      type: "dropdown",
      children: topTournois,
     
    },
  
    {
      id: ncNanoId(),
      href: "/ComingSoon",
      name: "LIVE SCORES",

    },
    {
      id: ncNanoId(),
      href: "/fennecs",
      name: "FENNECS",
      type: "none",

    },

    {
      id: ncNanoId(),
      href: "/journal",
      name: "LE JOURNAL",

    },
    {
      id: ncNanoId(),
      href: "/ComingSoon",
      name: "TOUS LES SPORT",
      type: "dropdown",
      children: sports,

    },
      ])
    }

  },[topTournois,sports])
  const getTournoisSubMenu =(item :string) => {
    var otherPageChildMenus: NavItemType[] = [
    
      {
        id: ncNanoId(),
        href:  "/ComingSoon",
        name: "Calendrier / Résultat",
        type: "none",
      },
      {
        id: ncNanoId(),
        href: "/ComingSoon",
        name: "Classement",
        type: "none",
      },

      {
        id: ncNanoId(),
        href: "/ComingSoon",
        name: "Classement des buteurs",
        type: "none",
      },
      {
        id: ncNanoId(),
        href: "/ComingSoon",
        name: "Palmarès",
        type: "none",
      },
    ];
    return otherPageChildMenus
  }
  const getTopTournois = ()=>{
    let URLGet= "v1/topTournois/";
    axios.get(API_LINK + URLGet)
    .then((response) => {
      var tournois=response.data
        let table: NavItemType[] = tournois.map((tournois:TournoisItem)=> {
          return {
            id:tournois.value ,
            name: tournois.label,
            href: "/sport/Football/"+tournois.label,
            type: "dropdown",
            children: getTournoisSubMenu(tournois.label),
          }
        })
        table.push({
          id:"tournois" ,
          name: "Toutes les compétitions",
          href: "/competitions",
        })
          setTopTournois(table)
     
    })
    .catch((err) => {
      console.log(err);
    });

  }
  const getSports = ()=>{
    let URLGet= "v1/sport/";
    axios.get(API_LINK + URLGet)
    .then((response) => {
      const sports=response.data.filter((s:SportItem)=>s.sport!="Football")
        let table: NavItemType[] = sports.map((sport:SportItem)=> {
          return {
            id:sport._id ,
            name: sport.sport,
            href: "/ComingSoon"
          }
        })
        table.push({
          id:"sport" ,
          name: "Touts les sports",
          href: "/sports",
        })
          setSports(table)
     
    })
    .catch((err) => {
      console.log(err);
    });

  }
  const router = useRouter()
  const darkmodeState = useAppSelector(selectDarkmodeState);
  const _renderMenuChild = (item: NavItemType) => {
    return (
      <ul className="nav-mobile-sub-menu pl-6 pb-1 text-base">
        {item.children?.map((i, index) => (
          <Disclosure key={i.href + index} as="li">
            <NavLink
              href={{
                pathname: i.href || undefined,
              }}
            >
              <>
                <a
                  href={i.href}
                  style={{ color: "inherit", textDecoration: "inherit",
                  paddingLeft: "1rem",
                  paddingRight: "1rem" }}
                  className={`flex  py-2.5 text-neutral-900 dark:text-neutral-50 text-sm font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 mt-[2px] ${router.asPath.split('%20').join(' ')==item.href?"text-secondary":""}`}

                >
                  <span
                    className={!i.children ? "block w-full" : ""}
                    onClick={onClickClose}
                  >
                    {i.name}
                  </span>
                  {i.children && (
                    <span
                      className="block flex-grow"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Disclosure.Button
                        as="span"
                        className="flex justify-end flex-grow"
                      >
                        <ChevronDownIcon
                          className="ml-2 h-4 w-4 text-neutral-500"
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                    </span>
                  )}
                </a>
              </>
            </NavLink>
            {i.children && (
              <Disclosure.Panel>{_renderMenuChild(i)}</Disclosure.Panel>
            )}
          </Disclosure>
        ))}
      </ul>
    );
  };

  const _renderItem = (item: NavItemType, index: number) => {
    return (
      <Disclosure
        key={item.id}
        as="li"
        className="text-neutral-900 dark:text-white"
      >
        <NavLink
          href={{
            pathname: item.href || undefined,
          }}
        >
          <>
            <a
              href={item.href}
              style={{ color: "inherit", textDecoration: "inherit" }}
              className={`flex w-full items-center py-2.5  font-medium uppercase tracking-wide text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg ${router.asPath.split('%20').join(' ')==item.href?"text-secondary":""}`}

            >
              <span
                className={!item.children ? "block w-full" : ""}
                onClick={onClickClose}
              >
                {item.name}
              </span>
              {item.children && (
                <span
                  className={"block flex-grow"}
                  onClick={(e) => e.preventDefault()}
                >
                  <Disclosure.Button
                    as="span"
                    className="flex justify-end flex-grow"
                  >
                    <ChevronDownIcon
                      className="ml-2 h-4 w-4 text-neutral-500"
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                </span>
              )}
            </a>
          </>
        </NavLink>
        {item.children && (
          <Disclosure.Panel>{_renderMenuChild(item)}</Disclosure.Panel>
        )}
      </Disclosure>
    );
  };

  return (
    <div className= {`overflow-y-auto w-full max-w-sm h-screen py-2 transition transform shadow-lg ring-1 dark:ring-neutral-700   dark:bg-neutral-900 divide-y-2 divide-neutral-100 dark:divide-neutral-800 ${!darkmodeState?"bg-white":""}`}>
      
      <div className="py-6 " style={{paddingLeft: "1.25rem",
    paddingRight: "1.25rem"}}>        <Logo />
        <div className="flex flex-col text-neutral-700 dark:text-neutral-300 text-sm" style={{marginTop: "1.25rem"}}>
          <span>
            Discover the most outstanding articles on all topics of life. Write
            your stories and share them
          </span>

          <div className="flex justify-between items-center mt-4">
            <SocialsList itemClass="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-100 text-xl dark:bg-neutral-800 dark:text-neutral-300" />
            <span className="block">
              <DarkModeContainer className="bg-neutral-100 dark:bg-neutral-800" />
            </span>
          </div>
        </div>
        <span className="absolute right-2 top-2 p-1">
          <ButtonClose onClick={onClickClose} />
        </span>
      </div>
      <ul className="flex flex-col py-6 px-2 space-y-1">
        {NavigationItems?.map(_renderItem)}
      </ul>
      {/* <div className="flex items-center justify-between py-6 px-5 space-x-4">
        <a href="/#"  style={{ color: "inherit", textDecoration: "inherit" }} target="_blank" rel="noopener noreferrer">
          <ButtonPrimary>Get Template</ButtonPrimary>
        </a>
      </div> */}
    </div>
  );
};

export default NavMobile;