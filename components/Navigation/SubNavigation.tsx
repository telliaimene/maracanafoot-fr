import React, { FC, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/router";
import SubNavigationItem from "./SubNavigationItem";
import ncNanoId from "../../utils/ncNanoId";
export interface NavItemType {
  id: string;
  name: string;
  href: string;
  targetBlank?: boolean;
  type?: "dropdown" | "megaMenu" | "none";
}
function Navigation() {
  const router=useRouter()
  console.log("routerr sub",router.asPath)
  const competition=router.query.id?router.query.id[1]:""
  const [NavItems, setNav] = useState<NavItemType[] | undefined>(undefined);
  useEffect(() => {
    console.log("roooouuttee", competition);
        setNav([
          {
            id: ncNanoId(),
            href:  "/sport/Football/"+competition,
            name: competition,
            type: "none",
          },
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
        ])
     
  }, [router.isReady, router.asPath]);
 
  return (
    <ul className="nc-Navigation hidden lg:flex lg:flex-wrap lg:items-center  relative">
      {NavItems
        ? NavItems.map((item, id) => {
     
            return (
              <SubNavigationItem
                key={item.id}
                menuItem={item}
                isFirst={id == 0 ? true : false}
              />
            );
          })
        : null}
    </ul>
  );
}

export default Navigation;
