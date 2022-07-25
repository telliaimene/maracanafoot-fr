
import NcLink from "../../components/NcLink/NcLink";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import React, { useEffect ,useState } from "react";
import {
  addNewUser, removeUser ,UserID, userLastName
  } from "../../store/login/auth";
const DashboardRoot  = () => {
  const lastname = useAppSelector(userLastName);
  return (
    <div className="rounded-xl min-h-full text-sm border border-neutral-100 dark:border-neutral-800 p-6 md:text-base">
      <span className="block text-lg mb-3">
        👋 Salut {lastname ?<strong> {lastname}</strong> :null}, 
        {/* (not <strong>admin</strong>?{" "}
        <NcLink href="#">Sign out</NcLink>) */}
      </span>
      Avec ce compte , vous pouvez voir ton dashboard , gérer 
      {` `}
      <NcLink href={"https://maracanafoot.fr"+'/dashboard#modifier-profil'} lien={"https://maracanafoot.fr"+'/dashboard#modifier-profil'}>Ton profil</NcLink>,
       {/* <NcLink href="#">Subscription</NcLink>, */}
      <NcLink href="#">editer ton profile</NcLink>
    </div>
  );
};

export default DashboardRoot;
