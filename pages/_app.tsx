import type { AppProps } from "next/app";

import { useState, useEffect } from "react";
import "../public/fonts/line-awesome-1.3.0/css/line-awesome.css";
import Footer from "../components/Footer/Footer";
import "../public/styles/swiper-bundle.min.css";
import { Provider } from "react-redux";
import "../public/styles/index.scss";
import "font-awesome/css/font-awesome.min.css";
import "../public/images/doc/scss/master.scss";
import "../public/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "../public/styles/foot.css";
import "../public/styles/slick.css";
//  import "../public/styles/slick.scss"
import "../public/styles/slick-theme.css";
//import "../public/styles/slick-theme.scss"
import "../public/styles/comingSoon.css";
import "../public/styles/responsive.css";
import "../public/styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css";
import "../public/styles/style1.css";
import "../public/styles/style2.css";
import "../public/styles/style3.css";
import { useRouter } from "next/router";
import { persistor, store } from "../app/store";
import MyRouter from "../routers/index";
import { PersistGate } from "redux-persist/integration/react";
import { Head } from "next/document";

function MyApp({ Component, pageProps }: any) {
  // const router = useRouter();
  // const [isShow, setIsShow] = useState(true);
  // useEffect(() => {
  //   if (router.pathname.includes("/pdf-")) {
  //     setIsShow(false);
  //     console.log("dash", isShow);
  //   } else {
  //     setIsShow(true);
  //     console.log("accueil", isShow);
  //   }
  // }, [router.pathname, isShow]);

  const seoPage = Component.seo;

  console.log({ seoPage, pageProps });
  return (
    <div className=" text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      {/* <MetaComponent /> */}
      <Provider store={store}>
        {/* {seoPage ? (
          <Component {...pageProps} />
        ) : ( */}
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
          {/* {isShow ? <Footer /> : null} */}
        </PersistGate>
        {/* )} */}
      </Provider>
    </div>
  );
}

const MetaComponent = ({ tags }: any) => {
  return (
    <Head>
      <title>{tags.title} </title>
      <meta name="description" content={tags.description}></meta>
      <meta property="og:title" content={tags.title}></meta>
      <meta property="og:description" content={tags.descrition}></meta>
      <meta property="og:image" content={tags.image}></meta>
      <meta property="og:url" content={tags.url} />
      <meta property="og:type" content="article"></meta>
    </Head>
  );
};
export default MyApp;
