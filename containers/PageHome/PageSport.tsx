import React, { Fragment, useState, useEffect } from "react";
import PostCarousel from "../../components/PostCarousel";
import { ArticleDataType, ArticleType } from "../../data/types";
import FeatureNews from "../../components/FeatureNews";
import TrendingNews from "../../components/TrendingNews";
import FollowUs from "../../components/FollowUs";
import MostView from "../../components/MostView";
import MixCarousel from "../../components/MixCarousel";
import VideoPost from "../../components/VideoPost";
import PostGallery from "../../components/PostGallery";
import EntertainmentNews from "../../components/EntertainmentNews";
import Link from "next/link";
import moment from "moment";
import SportsNews from "../../components/SportsNews";
import BusinessNews from "../../components/BusinessNews";
import MostShareWidget from "../../components/MostShareWidget";
import NewsLetter from "../../components/NewsLetter";
import Spinner from "../../components/spinner";
import { useRouter } from "next/router";
import {BillBoard , PopupVideo , Pave , Skyscraper , Megabanner}  from '../../components/Ads'

// import { Spin, Table } from 'antd';

// images
// import banner1 from '../../public/images/doc/img/bg/banner1.png';
// import banner2 from '../../public/images/doc/img/bg/sidebar-1.png';
// import business1 from '../../public/images/doc/img/business/business1.jpg';
// import business2 from '../../public/images/doc/img/business/business2.jpg';
// import business3 from '../../public/images/doc/img/business/business3.jpg';
// import enter1 from '../../public/images/doc/img/entertrainment/enter1.jpg';
// import enter2 from '../../public/images/doc/img/entertrainment/enter2.jpg';
// import enter3 from '../../public/images/doc/img/entertrainment/enter3.jpg';
// import enter4 from '../../public/images/doc/img/entertrainment/enter4.jpg';
import { API_LINK } from "../../utils/constantes";
import axios from "axios";
import { loadavg } from "os";
const entertainments = [
  {
    image: "/images/doc/img/entertrainment/enter1.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "There may be no consoles in the future ea exec says",
    body: "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
  {
    image: "/images/doc/img/entertrainment/enter2.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "There may be no consoles in the future ea exec says",
    body: "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
  {
    image: "/images/doc/img/entertrainment/enter3.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "There may be no consoles in the future ea exec says",
    body: "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
  {
    image: "/images/doc/img/entertrainment/enter4.jpg",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "There may be no consoles in the future ea exec says",
    body: "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
];

const businessNews = [
  {
    image: "/images/doc/img/business/business1.jpg",
    category: "uiux.subash",
    date: "March 26, 2020",
    title: "Copa America: Luis Suarez from devastated US",
    body: "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with…",
  },
  {
    image: "/images/doc/img/business/business2.jpg",
    category: "uiux.subash",
    date: "March 26, 2020",
    title: "Copa America: Luis Suarez from devastated US",
    body: "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with…",
  },
  {
    image: "/images/doc/img/business/business3.jpg",
    category: "uiux.subash",
    date: "March 26, 2020",
    title: "Copa America: Luis Suarez from devastated US",
    body: "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with…",
  },
];
const YOUTUBE_PLAYLIST_ITEM_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";
const New_API_KEY = "AIzaSyCtEIHhWBU5JSWwr_HaDjUTNJABB41LRm0";
const channelID3 = "UCuVphVU-nPfPZ36lV2SEXaQ"; //channel Maracana foot
const result = 6;
export async function getServerSideProps() {
  const res = await fetch(
    `'https://www.googleapis.com/youtube/v3/search?key=' + New_API_KEY + '&channelId=' + channelID3 + '&part=snippet,id&order=date&maxResults=' + result`
  );
  const youtube = await res.json();
  return {
    props: {
      youtube,
    },
  };
}

const SportsPage = () => {
  const router = useRouter();
  const [Loading, setLoading] = useState(true);
  const [allArticle, setAllarticle] = useState<ArticleDataType[] | undefined>(
    undefined
  );
  const [fennec, setFennec] = useState<ArticleDataType[] | undefined>(
    undefined
  );
  const [internationnal, setInternationnal] = useState<
    ArticleDataType[] | undefined
  >(undefined);
  const [topComment, setTopComment] = useState<ArticleDataType[] | undefined>(
    undefined
  );
  const [topShare, setTopShare] = useState<ArticleDataType[] | undefined>(
    undefined
  );
  const [topShare2, setTopShare2] = useState<ArticleDataType[] | undefined>(
    undefined
  );
  const [topCount, setTopCount] = useState<ArticleDataType[] | undefined>(
    undefined
  );
  const [topTournois, setTopTournois] = useState<ArticleDataType[] | undefined>(
    undefined
  );
  const [Entretien, setEntretien] = useState<ArticleDataType[] | undefined>(
    undefined
  );
  const [equipeN, setEquipeN] = useState<ArticleDataType[] | undefined>(
    undefined
  );
  const [internationnal3, setInternationnal3] = useState<
    ArticleDataType[] | undefined
  >(undefined);
  const [internationnal4, setInternationnal4] = useState<
    ArticleDataType[] | undefined
  >(undefined);
  const [internationnal2, setInternationnal2] = useState<
    ArticleDataType[] | undefined
  >(undefined);
  const [tournoi, setTournoi] = useState<string | undefined>(undefined);

  //  { <Spinner></Spinner
  useEffect(() => {
    setTournoi(
      router
        ? router.query
          ? router.query.id
            ? router.query.id[1]
            : undefined
          : undefined
        : undefined
    );

    getFlashInfos();
    getarticleFennecs();
    getarticleInternationals();
    getarticlesTopTenComment();
    getarticlesTopTenCount();
    getarticlesTopTenSHare();
    getarticlesEntretienExclusif();
    getarticleEquipeN();
    getarticleInternationals3();
    getarticleInternationals4();
    getarticleInternationals2();
    getarticlesTopTenSHare2();
    // getTopTournois()
  }, [Loading]);
  async function getFlashInfos() {
    let URL = "v1/articles-bysportSpliceALL2Tournoi/" + "FR/" + tournoi;

    await axios
      .get(API_LINK + URL)
      .then((response) => {
        console.log("flaaash", response);
        let table: ArticleDataType[] = response.data.map(
          (item: ArticleType) => {
            return {
              date: moment(item.date).format("DD/MM/YYYY"),
              title: item.title.trim(),
              resumer: item.resumer,
              image: API_LINK + item.image,
              typearticle: item.typearticle,
              // href : "/article?"+ item.typearticle +"?" + item.title
            };
          }
        );
        setAllarticle(table);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async function getarticleFennecs() {
    await axios
      .get(API_LINK + "v1/articles-fennec/language/FR")
      .then((response) => {
        let table = response.data.map((item: ArticleType) => {
          let cat: string = item.category
            ? item.category[0]
              ? item.category[0].entitled == "MERCATO"
                ? "MERCATO"
                : item.category[0].entitled == "DISCIPLINE"
                ? "DISCIPLINE"
                : item.tournois
                ? item.tournois.length > 0
                  ? item.tournois[0].entitled
                  : item.typearticle
                : ""
              : ""
            : "";

          return {
            category: cat,
            date: moment(item.date).format("DD/MM/YYYY"),
            title: item.title.trim(),
            resumer: item.resumer,
            image: API_LINK + item.image,
            typearticle: item.typearticle,
            // href : "/article?"+ item.typearticle +"?" + item.title
          };
        });
        setFennec(table);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async function getarticleInternationals() {
    await axios
      .get(API_LINK + "v1/articles-bysportSpliceALL2Tournoi/FR/" + tournoi)
      .then((response) => {
        let table = response.data.map((item: ArticleType) => {
          let cat: string = item.category
            ? item.category[0]
              ? item.category[0].entitled == "MERCATO"
                ? "MERCATO"
                : item.category[0].entitled == "DISCIPLINE"
                ? "DISCIPLINE"
                : item.tournois
                ? item.tournois.length > 0
                  ? item.tournois[0].entitled
                  : item.typearticle
                : ""
              : ""
            : "";

          return {
            category: cat,
            date: moment(item.date).format("DD/MM/YYYY"),
            title: item.title.trim(),
            resumer: item.resumer,
            image: API_LINK + item.image,
            typearticle: item.typearticle,
            // href : "/article?"+ item.typearticle +"?" + item.title
          };
        });
        setInternationnal(table);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function getarticlesTopTenComment() {
    let URL = "v1/articles-comment/language/" + "FR";
    await axios
      .get(API_LINK + URL)
      .then((response) => {
        let data = response.data.splice(0, 5);
        let table = response.data.map((item: ArticleType) => {
          let cat: string = item.category
            ? item.category[0]
              ? item.category[0].entitled == "MERCATO"
                ? "MERCATO"
                : item.category[0].entitled == "DISCIPLINE"
                ? "DISCIPLINE"
                : item.tournois
                ? item.tournois.length > 0
                  ? item.tournois[0].entitled
                  : item.typearticle
                : ""
              : ""
            : "";

          return {
            category: cat,
            date: moment(item.date).format("DD/MM/YYYY"),
            title: item.title.trim(),
            resumer: item.resumer,
            image: API_LINK + item.image,
            typearticle: item.typearticle,
            // href : "/article?"+ item.typearticle +"?" + item.title
          };
        });
        setTopComment(table);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async function getarticlesTopTenCount() {
    let URL = "v1/articles-count/language/FR";
    await axios
      .get(API_LINK + URL + "/")
      .then((response) => {
        let data = response.data.splice(0, 5);

        let table = response.data.map((item: ArticleType) => {
          let cat: string = item.category
            ? item.category[0]
              ? item.category[0].entitled == "MERCATO"
                ? "MERCATO"
                : item.category[0].entitled == "DISCIPLINE"
                ? "DISCIPLINE"
                : item.tournois
                ? item.tournois.length > 0
                  ? item.tournois[0].entitled
                  : item.typearticle
                : ""
              : ""
            : "";

          return {
            category: cat,
            date: moment(item.date).format("DD/MM/YYYY"),
            title: item.title.trim(),
            resumer: item.resumer,
            image: API_LINK + item.image,
            typearticle: item.typearticle,
            // href : "/article?"+ item.typearticle +"?" + item.title
          };
        });
        setTopCount(table);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async function getarticlesTopTenSHare() {
    let URL = "v1/articles-Partage/language/FR";
    await axios
      .get(API_LINK + URL + "/")
      .then((response) => {
        let data = response.data.splice(0, 5);
        let table = response.data.map((item: ArticleType) => {
          let cat: string = item.category
            ? item.category[0]
              ? item.category[0].entitled == "MERCATO"
                ? "MERCATO"
                : item.category[0].entitled == "DISCIPLINE"
                ? "DISCIPLINE"
                : item.tournois
                ? item.tournois.length > 0
                  ? item.tournois[0].entitled
                  : item.typearticle
                : ""
              : ""
            : "";

          return {
            category: cat,
            date: moment(item.date).format("DD/MM/YYYY"),
            title: item.title.trim(),
            resumer: item.resumer,
            image: API_LINK + item.image,
            typearticle: item.typearticle,
            // href : "/article?"+ item.typearticle +"?" + item.title
          };
        });

        setTopShare(table);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async function getarticlesEntretienExclusif() {
    let URL = "v1/articles-byEntretien/FR/Football";
    await axios
      .get(API_LINK + URL)
      .then((response) => {
        let table = response.data.map((item: ArticleType) => {
          let cat: string = item.category
            ? item.category[0]
              ? item.category[0].entitled == "MERCATO"
                ? "MERCATO"
                : item.category[0].entitled == "DISCIPLINE"
                ? "DISCIPLINE"
                : item.tournois
                ? item.tournois.length > 0
                  ? item.tournois[0].entitled
                  : item.typearticle
                : ""
              : ""
            : "";

          return {
            category: cat,
            date: moment(item.date).format("DD/MM/YYYY"),
            title: item.title.trim(),
            resumer: item.resumer,
            image: API_LINK + item.image,
            typearticle: item.typearticle,
            // href : "/article?"+ item.typearticle +"?" + item.title
          };
        });
        setEntretien(table);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async function getarticleEquipeN() {
    // axios.get(API_LINK + 'v1/articles-EquipeNSplice/language/' + lang + '/')
    await axios
      .get(API_LINK + "v1/articles-SelectionPaginationNew/language/FR")

      .then((response) => {
        let table = response.data.article.map((item: ArticleType) => {
          let cat: string = item.category
            ? item.category[0]
              ? item.category[0].entitled == "MERCATO"
                ? "MERCATO"
                : item.category[0].entitled == "DISCIPLINE"
                ? "DISCIPLINE"
                : item.tournois
                ? item.tournois.length > 0
                  ? item.tournois[0].entitled
                  : item.typearticle
                : ""
              : ""
            : "";

          return {
            category: cat,
            date: moment(item.date).format("DD/MM/YYYY"),
            title: item.title.trim(),
            resumer: item.resumer,
            image: API_LINK + item.image,
            typearticle: item.typearticle,
            // href : "/article?"+ item.typearticle +"?" + item.title
          };
        });
        setEquipeN(table);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function getarticleInternationals3() {
    await axios
      .get(API_LINK + "v1/articles-bysportSpliceALL3Tournoi/FR/" + tournoi)
      .then((response) => {
        let table = response.data.map((item: ArticleType) => {
          let cat: string = item.category
            ? item.category[0]
              ? item.category[0].entitled == "MERCATO"
                ? "MERCATO"
                : item.category[0].entitled == "DISCIPLINE"
                ? "DISCIPLINE"
                : item.tournois
                ? item.tournois.length > 0
                  ? item.tournois[0].entitled
                  : item.typearticle
                : ""
              : ""
            : "";

          return {
            category: cat,
            date: moment(item.date).format("DD/MM/YYYY"),
            title: item.title.trim(),
            resumer: item.resumer,
            image: API_LINK + item.image,
            typearticle: item.typearticle,
            // href : "/article?"+ item.typearticle +"?" + item.title
          };
        });

        setInternationnal3(table);
        setLoading(false);
      })
      .catch((err) => {
        console.log("inter 3", err);
      });
  }
  async function getarticleInternationals4() {
    await axios
      .get(API_LINK + "v1/articles-bysportSpliceTournoisALL4/FR/" + tournoi)
      .then((response) => {
        let table = response.data.map((item: ArticleType) => {
          let cat: string = item.category
            ? item.category[0]
              ? item.category[0].entitled == "MERCATO"
                ? "MERCATO"
                : item.category[0].entitled == "DISCIPLINE"
                ? "DISCIPLINE"
                : item.tournois
                ? item.tournois.length > 0
                  ? item.tournois[0].entitled
                  : item.typearticle
                : ""
              : ""
            : "";

          return {
            category: cat,
            date: moment(item.date).format("DD/MM/YYYY"),
            title: item.title.trim(),
            resumer: item.resumer,
            image: API_LINK + item.image,
            typearticle: item.typearticle,
            // href : "/article?"+ item.typearticle +"?" + item.title
          };
        });

        setInternationnal4(table);
        setLoading(false);
      })
      .catch((err) => {
        console.log("inter 4", err);
      });
  }
  async function getarticleInternationals2() {
    await axios
      .get(API_LINK + "v1/articles-bysportSpliceALL2Tournoi/FR/" + tournoi)
      .then((response) => {
        let table = response.data.map((item: ArticleType) => {
          let cat: string = item.category
            ? item.category[0]
              ? item.category[0].entitled == "MERCATO"
                ? "MERCATO"
                : item.category[0].entitled == "DISCIPLINE"
                ? "DISCIPLINE"
                : item.tournois
                ? item.tournois.length > 0
                  ? item.tournois[0].entitled
                  : item.typearticle
                : ""
              : ""
            : "";

          return {
            category: cat,
            date: moment(item.date).format("DD/MM/YYYY"),
            title: item.title.trim(),
            resumer: item.resumer,
            image: API_LINK + item.image,
            typearticle: item.typearticle,
            // href : "/article?"+ item.typearticle +"?" + item.title
          };
        });
        setInternationnal2(table);
        setLoading(false);
      })
      .catch((err) => {
        console.log("inter 2", err);
      });
  }

  // async function getTopTournois() {
  //   await axios
  //     .get(API_LINK + "v1/TopTournois")
  //     .then((response) => {

  //       let table = []
  //       response.data.map(item => {

  //         table.push({
  //           small_img: API_LINK + item.value.logo,
  //           big_image: API_LINK + item.value.logo,
  //           title: item.label,

  //         })

  //       })
  //       console.log("top tournois", table)
  //       setTopTournois(table);
  //       setLoading(false)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  async function getarticlesTopTenSHare2() {
    let URL = "v1/articles-Partage/language/FR";
    await axios
      .get(API_LINK + URL + "/")
      .then((response) => {
        let data = response.data.splice(0, 10);
        let table = response.data.map((item: ArticleType) => {
          let cat: string = item.category
            ? item.category[0]
              ? item.category[0].entitled == "MERCATO"
                ? "MERCATO"
                : item.category[0].entitled == "DISCIPLINE"
                ? "DISCIPLINE"
                : item.tournois
                ? item.tournois.length > 0
                  ? item.tournois[0].entitled
                  : item.typearticle
                : ""
              : ""
            : "";

          return {
            category: cat,
            date: moment(item.date).format("DD/MM/YYYY"),
            title: item.title.trim(),
            resumer: item.resumer,
            image: API_LINK + item.image,
            typearticle: item.typearticle,
            // href : "/article?"+ item.typearticle +"?" + item.title
          };
        });
        console.log("topshare2", data);
        setTopShare2(table);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (
    !(
      !Loading &&
      allArticle &&
      fennec &&
      internationnal &&
      internationnal2 &&
      internationnal3 &&
      internationnal4 &&
      equipeN &&
      Entretien &&
      topComment &&
      topCount &&
      topShare &&
      topShare2
    )
  ) {
    console.log("dataaaa", Loading, Entretien);
    return (
      <Spinner loading={!Loading} />
      // <Spin spinning={!Loading} delay={30000} color='red'/>
    );
  }
  console.log("all article", internationnal2);

  return (
    <>
        {/* <PopupVideo video='https://www.youtube.com/watch?v=GLNtbkv4pX0'/> */}
        <BillBoard banner="/images/doc/img/bg/sidebar-1.png"  href="#"/>
    <Fragment>
      <PostCarousel data={allArticle} />

      {topComment.length || topCount.length || topShare.length ? (
        <PostGallery
          topComment={topComment}
          topCount={topCount}
          topShare={topShare}
        />
      ) : null}
            <VideoPost className="pt30 half_bg60" />
            <Megabanner banner="/images/doc/img/bg/sidebar-1.png"  href="#"/>

      {fennec.length ? <FeatureNews data={fennec} /> : null}
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {internationnal2.length ? (
              <TrendingNews data={internationnal2} data2={internationnal2} />
            ) : null}
          </div>
          <div className=" col-lg-4">
          <Pave banner="/images/doc/img/bg/sidebar-1.png"  href="#" width="396px" height="330px"/>

            <FollowUs title="Nous Suivre" />
            <MostView />
          </div>
        </div>
      </div>
      {Entretien ? <MixCarousel className="half_bg1" data={Entretien} /> : null}
      <div className="entertrainments">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-12">
                  <div className="heading">
                    <h2 className="widget-title">Équipes Nationales</h2>
                  </div>
                </div>
              </div>
              <div className="entertrainment_carousel mb30">
                <div className="entertrainment_item">
                  <div className="row justify-content-center">
                    <EntertainmentNews data={equipeN} />
                    <Megabanner banner="/images/doc/img/bg/sidebar-1.png"  href="#"/>

                  </div>
                </div>
              </div>
              {internationnal3 ? (
                <SportsNews data={internationnal3[0]} data2={internationnal3} />
              ) : null}
              {/* <div className="banner_area mt50 mb60 xs-mt60">
                <Link href="/">
                  <a href="#">
                    <img src="/images/doc/img/bg/banner1.png" alt="banner1" />
                  </a>
                </Link>
              </div> */}
              {internationnal4.length ? (
                <BusinessNews data={internationnal4} />
              ) : null}
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-12">
                  {topShare2.length ? (
                    <MostShareWidget
                      title="Les Plus Partagés"
                      data={topShare2}
                    />
                  ) : null}
                </div>
                {/* <div className="col-lg-12">
                  {" "}
                  <UpcomingMatches />{" "}
                </div> */}
                <div className="col-lg-12">
                <Pave banner="/images/doc/img/bg/sidebar-1.png"  href="#" width="396px" height="330px"/>

                  <NewsLetter />
                </div>
                <div className="col-lg-12">
                  {/* {topTournois? <CategoriesWidget data={topTournois}/>  : nul}  */}
                </div>
                <div className="col-lg-12">
                <Skyscraper banner="/images/doc/img/bg/sidebar-1.png"  href="#" width="396px" height="600px" />

                  {/* <div className="banner2 mb30">
                    <Link href="/">
                      <a href="#">
                        <img
                          src="/images/doc/img/bg/sidebar-1.png"
                          alt="thumb"
                        />
                      </a>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-70" />
    </Fragment>
 </> );
};

export default SportsPage;
