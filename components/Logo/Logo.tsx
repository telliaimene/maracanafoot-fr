import React, { useEffect } from "react";
import Link from "next/link";
import { useAppSelector } from "../../app/hooks";
import { selectDarkmodeState } from "../../store/darkmode/darkmode";
export interface LogoProps {
  img?: string;
  imgLight?: string;
}

const Logo: React.FC<LogoProps> = () => {
  const darkmodeState = useAppSelector(selectDarkmodeState);
  console.log("llogooo", darkmodeState);

  return (
    <Link
      href="/"

      // className="ttnc-logo inline-block text-primary-6000"
    >
      <a href="/" className="ttnc-logo inline-block text-primary-6000">
        {/* THIS USE FOR MY MULTI DEMO */}
        {/* IF YOU ARE MY CLIENT. PLESE DELETE THIS CODE AND YOU YOUR IMAGE PNG BY BELLOW CODE */}

        <img
          src={darkmodeState == true ? "/images/site2.png" : "/images/site.png"}
          width={150}
        ></img>
      </a>
    </Link>
  );
};

export default Logo;
