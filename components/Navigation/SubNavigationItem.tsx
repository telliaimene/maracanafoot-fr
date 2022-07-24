import { Popover, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faChevronRight from "@fortawesome/fontawesome-free-solid/faChevronRight"
import { IconProp } from '@fortawesome/fontawesome-svg-core';
const right = faChevronRight as IconProp;
import React, { FC, Fragment, useEffect, useState } from "react";
//import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";
import NcImage from "../NcImage/NcImage";
import {useRouter } from "next/router";
import { RouteComponentProps } from "react-router";
import Link from "next/link";
import { NextPage } from "next";

// <--- NavItemType --->
export interface MegamenuItem {
  id: string;
  image: string;
  title: string;
  items: NavItemType[];
}
export interface NavItemType {
  id: string;
  name: string;
  href: string;
  targetBlank?: boolean;
  children?: NavItemType[];
  megaMenu?: MegamenuItem[];
  type?: "dropdown" | "megaMenu" | "none";
}

export interface NavigationItemProps {
  menuItem: NavItemType;
  isFirst?:boolean 
}

//type NavigationItemWithRouterProps = NavigationItemProps;

const SubNavigationItem : NextPage<NavigationItemProps> = ({ menuItem ,isFirst  }) => {
  const [menuCurrentHovers, setMenuCurrentHovers] = useState<string[]>([]);
  const router=useRouter()
  useEffect(()=>{
   
      },[router])

  const onMouseEnterMenu = (id: string) => {
    setMenuCurrentHovers((state) => [...state, id]);
  };

  const onMouseLeaveMenu = (id: string) => {
    setMenuCurrentHovers((state) => {
      return state.filter((item, index) => {
        return item !== id && index < state.indexOf(id);
      });
    });
  };


  // ===================== MENU MAIN MENU =====================
  const renderMainItem = (item: NavItemType) => {
    const path=router.asPath.split('%20').join(' ')
    console.log("routte",path==item.href,isFirst)
    return (
      <Link
       
        href={{
          pathname: item.href || undefined,
        }}
      >
       
          <a
        
                 target={item.targetBlank ? "_blank" : undefined}
        rel="noopener noreferrer"
            type='button'   
            className= {`inline-flex items-center
            text-sm xl:text-base font-normal text-neutral-400 dark:text-neutral-400 
            py-2 px-4  hover:text-neutral-200 dark:hover:text-neutral-200 ${path==item.href?"border-b-4":""} ${isFirst?"!font-semibold !text-neutral-200  dark:bg-neutral-800 dark:!text-neutral-200 hover:bg-neutral-600 dark:hover:bg-neutral-600 "
             :"hover:bg-neutral-500 dark:hover:bg-neutral-500 "}`}
          >
            {item.name}
            {isFirst && (
              // <ChevronRightIcon
              //   className="ml-1 -mr-1 h-4 w-4 text-neutral-400"
              //   aria-hidden="true"
              // />
              <FontAwesomeIcon icon={right}  className="ml-1 -mr-1 h-4 w-4 text-neutral-400" />
            )}
          </a>
   
      </Link>
    );
  };


      return <li className="menu-item">{renderMainItem(menuItem)}</li>;
 
};
// Your component own properties

// const NavigationItemWithRouter = withRouter<
//   NavigationItemWithRouterProps,
//   FC<NavigationItemWithRouterProps>
// >(NavigationItem);
export default (SubNavigationItem);
