import React, { FC, useEffect, useRef, useState } from "react";
import MainNav2 from "./MainNav2";
import { PageItemType } from "../../store/pages/pages";

export interface HeaderProps {
  mainNavStyle?: "style1" | "style2";
  currentPage: PageItemType;
  user: string | number;
  competition?: string;
}

const SubHeader: FC<HeaderProps> = ({
  mainNavStyle = "style1",
  currentPage,
  user,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainMenuRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  //
  // let prevScrollpos = window?.pageYOffset;
  //
  const showSingleMenu = currentPage.type === "/single/:slug";
  //
  const [isSingleHeaderShowing, setIsSingleHeaderShowing] = useState(false);
  const [isTop, setIsTop] = useState(true);

  // useEffect(() => {
  //   if (!mainMenuRef.current) {
  //     return;
  //   }
  //   let mainMenuHeight = mainMenuRef.current.offsetHeight;

  //   window.onscroll = function () {
  //     showHideHeaderMenu(mainMenuHeight);
  //   };
  // }, []);

  useEffect(() => {
    if (showSingleMenu) {
      setTimeout(() => {
        //  BECAUSE DIV HAVE TRANSITION 100ms
        window?.addEventListener("scroll", showHideSingleHeade);
      }, 200);
    } else {
      window?.removeEventListener("scroll", showHideSingleHeade);
    }
  }, [showSingleMenu]);

  const handleProgressIndicator = () => {
    const entryContent = document.querySelector(
      "#single-entry-content"
    ) as HTMLDivElement | null;

    if (!showSingleMenu || !entryContent) {
      return;
    }

    const totalEntryH = entryContent.offsetTop + entryContent.offsetHeight;
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let scrolled = (winScroll / totalEntryH) * 100;
    if (!progressBarRef.current || scrolled > 140) {
      return;
    }

    scrolled = scrolled > 100 ? 100 : scrolled;

    progressBarRef.current.style.width = scrolled + "%";
  };

  const showHideSingleHeade = () => {
    handleProgressIndicator();
    // SHOW _ HIDE SINGLE DESC MENU
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > 600) {
      setIsSingleHeaderShowing(true);
    } else {
      setIsSingleHeaderShowing(false);
    }
  };

  // const showHideHeaderMenu = (mainMenuHeight: number) => {
  //   let currentScrollPos = window?.pageYOffset;
  //   if (!containerRef.current) return;
  //   if (!mainMenuRef.current) return;

  //   // SET BG
  //   if (prevScrollpos < currentScrollPos) {
  //     currentScrollPos > mainMenuHeight ? setIsTop(false) : setIsTop(true);
  //   } else {
  //     currentScrollPos > 0 ? setIsTop(false) : setIsTop(true);
  //   }

  //   // SHOW _ HIDE MAIN MENU
  //   if (prevScrollpos > currentScrollPos) {
  //     containerRef.current.style.top = "0";
  //   } else {
  //     containerRef.current.style.top = `-${mainMenuHeight + 2}px`;
  //   }
  //   prevScrollpos = currentScrollPos;
  // };

  const renderMainNav = () => {
    console.log("mainNavStyle", mainNavStyle);
    switch (mainNavStyle) {
      case "style1":
        return <MainNav2 isTop={isTop} user={user} />;

      default:
        return <MainNav2 isTop={isTop} user={user} />;
    }
  };

  return (
    <div
      className="nc-Header hidden-sub nc-will-change-top sticky top-0 w-full left-0 right-0 z-40 transition-all"
      ref={containerRef}
    >
      {/* RENDER MAIN NAVIGATION */}
      <div ref={mainMenuRef}>{renderMainNav()}</div>

      {/* RENDER PROGESSBAR FOR SINGLE PAGE */}
      {/* {showSingleMenu && renderSingleHeader()} */}
    </div>
  );
};

export default SubHeader;
