import { Popover, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faChevronDown from "@fortawesome/fontawesome-free-solid/faChevronDown"
import { IconProp } from '@fortawesome/fontawesome-svg-core';
const down = faChevronDown as IconProp;
import React, { FC, Fragment, useEffect, useState } from "react";
//import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";
import NcImage from "../NcImage/NcImage";
import { useRouter } from "next/router";
import { RouteComponentProps } from "react-router";
import Link from "next/link";


// <--- NavItemType --->
export interface MegamenuItem {
  id: string;
  items: NavItemType[];
}export interface NavItemType {
  id: string;
  name: string;
  href: string;
  targetBlank?: boolean;
  children?: NavItemType[];
  megaMenu?: MegamenuItem[];
  indice?: string;
  type?: "dropdown" | "megaMenu" | "none";

}
export interface NavigationItemProps {
  menuItem: NavItemType;
}

//type NavigationItemWithRouterProps = NavigationItemProps;

const NavigationItem: FC<NavigationItemProps> = ({ menuItem }) => {
  const [menuCurrentHovers, setMenuCurrentHovers] = useState<string[]>([]);
  const router = useRouter();
  useEffect(() => {
    console.log("routte", router.asPath);
  }, [router]);
  // CLOSE ALL MENU OPENING WHEN CHANGE HISTORY
  // useEffect(() => {
  //   const unlisten = history.listen(() => {
  //     setMenuCurrentHovers([]);
  //   });
  //   return () => {
  //     unlisten();
  //   };
  // }, [history]);

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

  // ===================== MENU MEGAMENU =====================
  const renderMegaMenu = (menu: NavItemType) => {
    const isHover = menuCurrentHovers.includes(menu.id);

    const isFull = menu.megaMenu && menu.megaMenu?.length > 3;
    const classPopover = isFull
      ? "menu-megamenu--large"
      : "menu-megamenu--small relative";
    const classPanel = isFull ? "left-0" : "-translate-x-1/2 left-1/2";

    return (
      <Popover
        as="li"
        className={`menu-item  menu-megamenu ${classPopover}`}
        onMouseEnter={() => onMouseEnterMenu(menu.id)}
        onMouseLeave={() => onMouseLeaveMenu(menu.id)}
      >
        {() => (
          <>
            <Popover.Button as={Fragment}>
              {renderMainItem(menu)}
            </Popover.Button>
            <Transition
              as={Fragment}
              show={isHover}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className={`nc-will-change-transform sub-menu absolute transform z-10 w-screen max-w-sm px-4 pt-3 sm:px-0 lg:max-w-max ${classPanel}`}
              >
                <div className="overflow-hidden rounded-lg bg-neutral-50 dark:bg-neutral-900 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-opacity-10 text-sm">
                  <div
                    className={`relative dark:bg-neutral-900 px-3 py-6 grid gap-1 grid-cols-${menu.megaMenu?.length}`}
                  >
                    {menu.megaMenu?.map((item) => (
                      <div key={item.id}>
                        <ul className="grid space-y-1">
                          {item.items.map(renderMegaMenuNavlink)}
                        </ul>
                      </div>
                    ))}

                  </div>
                  <div
                    className="relative dark:bg-neutral-900 "
                  >
                    {menu.indice === "tournois" ? (
                      <a
                        href="/competitions"
                        type="button"
                        className={`inline-flex float-right font-normal text-neutral-900 dark:text-neutral-200 py-1 mb-2 mx-2 px-2 rounded hover:text-neutral-100 hover:bg-indigo-700 dark:hover:bg-indigo-700 dark:hover:text-neutral-100 ${router.asPath == "/"
                            ? "font-semibold text-neutral-900 dark:text-neutral-200"
                            : ""
                          }`}
                      >
                        Toutes les comp??titions
                      </a>
                    ) : menu.indice === "sport" ? (
                      <a
                        href="/sports"
                        type="button"
                        className={`inline-flex float-right font-normal text-neutral-900 dark:text-neutral-200 py-1 mb-2 mx-2 px-2 rounded hover:text-neutral-100 hover:bg-indigo-700 dark:hover:bg-indigo-700 dark:hover:text-neutral-100 ${router.asPath == "/"
                            ? "font-semibold text-neutral-900 dark:text-neutral-200"
                            : ""
                          }`}
                      >
                        Tous les sports
                      </a>
                    ) : null}
                  </div>


                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };
  const renderMegaMenuNavlink = (item: NavItemType) => {
    {
      console.log(" item.href ", item.href);
    }
    return (
      <li key={item.id}>
        <Link
          // exact
          // strict
          // target={item.targetBlank ? "_blank" : undefined}
          // rel="noopener noreferrer"
          href={{
            pathname: item.href || undefined,
          }}
        // activeClassName="font-semibold text-neutral-900 dark:!text-neutral-200"
        >
          <>
            <a
              href={item.href}
              target={item.targetBlank ? "_blank" : undefined}
              rel="noopener noreferrer"
              type="button"
              className={`inline-flex items-center font-normal text-neutral-6000 dark:text-neutral-300 py-1 px-2 rounded hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 ${router.asPath == item.href
                  ? "font-semibold text-neutral-900 dark:!text-neutral-200"
                  : ""
                }`}
            >
              {item.name}
            </a>
          </>
        </Link>
      </li>
    );
  };

  // ===================== MENU DROPDOW =====================
  const renderDropdownMenu = (menuDropdown: NavItemType) => {
    const isHover = menuCurrentHovers.includes(menuDropdown.id);
    console.log("test", menuDropdown);
    return (
      <Popover
        as="li"
        className="menu-item menu-dropdown relative"
        onMouseEnter={() => onMouseEnterMenu(menuDropdown.id)}
        onMouseLeave={() => onMouseLeaveMenu(menuDropdown.id)}
      >
        {() => (
          <>
            <Popover.Button as={Fragment}>
              {renderMainItem(menuDropdown)}
            </Popover.Button>
            <Transition
              as={Fragment}
              show={isHover}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className="sub-menu nc-will-change-transform absolute transform z-10 w-56 pt-3 left-0"
              >
                <ul className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 text-sm relative   dark:bg-neutral-900 py-4 grid space-y-1">
                  {menuDropdown.children?.map((i) => {
                    if (i.type) {
                      return renderDropdownMenuNavlinkHasChild(i);
                    } else {
                      return (
                        <li key={i.id} className="px-2">
                          {renderDropdownMenuNavlink(i)}
                        </li>
                      );
                    }
                  })}
                </ul>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  const renderDropdownMenuNavlinkHasChild = (item: NavItemType) => {
    const isHover = menuCurrentHovers.includes(item.id);
    return (
      <Popover
        as="li"
        key={item.id}
        className="menu-item menu-dropdown relative px-2"
        onMouseEnter={() => onMouseEnterMenu(item.id)}
        onMouseLeave={() => onMouseLeaveMenu(item.id)}
      >
        {() => (
          <>
            <Popover.Button as={Fragment}>
              {renderDropdownMenuNavlink(item)}
            </Popover.Button>
            <Transition
              as={Fragment}
              show={isHover}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className="sub-menu absolute z-10 w-56 left-full pl-2 top-0"
              >
                <ul className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 text-sm relative   dark:bg-neutral-900 py-4 grid space-y-1">
                  {item.children?.map((i) => {
                    if (i.type) {
                      return renderDropdownMenuNavlinkHasChild(i);
                    } else {
                      return (
                        <li key={i.id} className="px-2">
                          {renderDropdownMenuNavlink(i)}
                        </li>
                      );
                    }
                  })}
                </ul>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  const renderDropdownMenuNavlink = (item: NavItemType) => {
    console.log("link item", item);
    return (
      <Link
        // exact
        //strict
        // target={item.targetBlank ? "_blank" : undefined}
        //rel="noopener noreferrer"
        href={{
          pathname: item.href || undefined,
        }}
      //activeClassName=""
      >
        <>
          <a
            href={item.href}
            target={item.targetBlank ? "_blank" : undefined}
            rel="noopener noreferrer"
            type="button"
            className={`flex items-center font-normal text-neutral-6000 dark:text-neutral-300 py-2 px-4 rounded-md hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 ${router.asPath == item.href
                ? "font-semibold text-neutral-700 dark:!text-neutral-200"
                : ""
              }`}
          >
            {item.name}
            {item.type && (
              <FontAwesomeIcon icon={down} className="ml-2 h-4 w-4 text-neutral-500" />
            )}
          </a>
        </>
      </Link>
    );
  };

  // ===================== MENU MAIN MENU =====================
  const renderMainItem = (item: NavItemType) => {
    return (
      <Link
        // exact
        // strict
        // target={item.targetBlank ? "_blank" : undefined}
        // rel="noopener noreferrer"
        href={{
          pathname: item.href || undefined,
        }}
      // activeClassName="!font-semibold !text-neutral-900 bg-neutral-100 dark:bg-neutral-800 dark:!text-neutral-100"
      >
        <>
          <a
            href={item.href}
            target={item.targetBlank ? "_blank" : undefined}
            rel="noopener noreferrer"
            type="button"
            className={`font-bold inline-flex items-center
            text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 
            py-2 px-4 rounded-full hover:text-neutral-900 hover:bg-neutral-100
             dark:hover:bg-neutral-800 dark:hover:text-neutral-200 ${router.asPath == item.href
                ? "!font-semibold !text-neutral-900 bg-neutral-100 dark:bg-neutral-800 dark:!text-neutral-100"
                : ""
              }`}
          >
            {item.name}
            {item.type === "megaMenu" && (
              <FontAwesomeIcon icon={down} className="ml-1 -mr-1 h-4 w-4 text-neutral-400" />
              // <ChevronDownIcon
              //   className="ml-1 -mr-1 h-4 w-4 text-neutral-400"
              //   aria-hidden="true"
              // />
            )}
          </a>
        </>
      </Link>
    );
  };

  switch (menuItem.type) {
    case "megaMenu":
      return renderMegaMenu(menuItem);
    case "dropdown":
      return renderDropdownMenu(menuItem);
    default:
      return <li className="menu-item">{renderMainItem(menuItem)}</li>;
  }
};
// Your component own properties

// const NavigationItemWithRouter = withRouter<
//   NavigationItemWithRouterProps,
//   FC<NavigationItemWithRouterProps>
// >(NavigationItem);
export default NavigationItem;
