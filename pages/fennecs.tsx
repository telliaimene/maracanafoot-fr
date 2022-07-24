import React,{useState,useEffect} from "react";
import PageFennecs from '../containers/PageHome/PageFennecs'
import PageSport from '../containers/PageHome/PageSport'
import PageHome from '../containers/PageHome/PageHome'

import reportWebVitals from "./reportWebVitals";
import { persistor, store } from "../store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import HeaderContainer from "../containers/HeaderContainer/HeaderContainer";
import {useAppSelector } from "../store/hooks";
import {UserID } from "../store/login/auth";
import { useRouter } from 'next/router';

function Fennecs() {
  const userId = useAppSelector(UserID);
  const router = useRouter();
  const [isShow, setIsShow] = useState(true)
  useEffect(() => {
    if (router.pathname.includes('/pdf-') ) {
        setIsShow(false)
        console.log("dash", isShow)
    }
    else {
        setIsShow(true)
        console.log("accueil", isShow)
  
    }
 
}, [router.pathname, isShow])

return(
  <>
  <div className="  text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">


  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    {isShow ? <HeaderContainer user={userId}  /> : null}

 <PageFennecs/>
    </PersistGate>
  </Provider>
  </div>


  </>
);

}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default Fennecs ;