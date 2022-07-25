import SectionHero from "../../components/SectionHero/SectionHero";
import React, { FC } from "react";
import SectionFounder from "../../containers/PageAbout/SectionFounder";
import SectionStatistic from "../../containers/PageAbout/SectionStatistic";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "../../components/SectionSubscribe2/SectionSubscribe2";
import BgGlassmorphism from "../../components/BgGlassmorphism/BgGlassmorphism";
import BackgroundSection from "../../components/BackgroundSection/BackgroundSection";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import { BillBoard } from "../../components/Ads";

import {
  addNewUser,
  removeUser,
  UserID,
  UserType,
} from "../../store/login/auth";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
export interface PageAboutProps {
  className?: string;
}

const className = "";
const PageAbout: FC<PageAboutProps> = (props) => {
  const userId = useAppSelector(UserID);
  return (
    <div
      className={`nc-PageAbout overflow-hidden relative ${className}`}
      data-nc-id="PageAbout"
    >
      <Helmet>
        <title>About || Blog Magazine React Template</title>
      </Helmet>
      <HeaderContainer user={userId} />
      <BillBoard banner="/images/doc/img/bg/sidebar-1.png"  href="#"/>

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg="/images/about-hero-right.png"
          heading="👋 About Us."
          btnText=""
          subHeading="We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world."
        />

        <SectionFounder />

        <div className="relative py-16">
          <BackgroundSection />
          <SectionStatistic />
        </div>

        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageAbout;
