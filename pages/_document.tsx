import Document, { Html, Head, Main, NextScript } from "next/document";
import { DocumentInitialProps, DocumentContext } from "next/document";
import Router from "next/router";

export default class MyDocument extends Document {
  // constructor(props :DocumentInitialProps) {
  //   super(props);
  // }
  // static async getInitialProps(ctx) {
  //     const initialProps = await Document.getInitialProps(ctx)

  //     return { ...initialProps }
  // }

  render() {
    return (
      <Html lang="en" className="dark">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat%7COpen+Sans:700,400%7CRaleway:400,800,900"
            rel="stylesheet"
          />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          {/* <link
            rel="stylesheet"
            href="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.css"
          />    */}
          {/* <link rel="stylesheet" href="styles/swiper.scss" /> */}
          <link rel="stylesheet" href="/styles/swiper-bundle.min.css" />
          <link rel="stylesheet" href="swiper/swiper-bundle.min.css" />
          <link rel="stylesheet" href="styles/index.scss" />
          <link rel="stylesheet" href="images/doc/scss/master.scss" />
          <link rel="stylesheet" href="styles/foot.css" />
          <link rel="stylesheet" href="styles/comingSoon.css" />
          <link rel="stylesheet" href="styles/responsive.css" />
          <link rel="stylesheet" href="styles/index.css" />
          <link rel="stylesheet" href="styles/style1.css" />
          <link rel="stylesheet" href="styles/style2.css" />
          <link rel="stylesheet" href="styles/style3.css" />
          <link rel="stylesheet" href="styles/index.scss" />
          <link rel="stylesheet" href="tailwindcss/tailwind.css" />
          <link rel="stylesheet" href="styles/bootstrap.min.css" />
          {/* <link rel="stylesheet" href="swiper/swiper.scss" /> */}
          <link rel="stylesheet" href="bootstrap/dist/css/bootstrap.min.css" />
          <link
            rel="stylesheet"
            href="fonts/line-awesome-1.3.0/css/line-awesome.css"
          />
          <link rel="stylesheet" href="styles/slick.css" />
          {/* <link rel="stylesheet" href="styles/slick.scss" /> */}
          <link rel="stylesheet" href="styles/slick-theme.css" />
          {/* <link rel="stylesheet" href="styles/slick-theme.scss" /> */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
          />
          {/* <link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
/>  */}
        </Head>
        {/* id={!this.state.isShow ? "bodyClient" : "bodyClient"} */}
        <body>
          <Main />
          <script src="js/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.1/moment-with-locales.min.js"></script>
          <script src="js/library/jquery.js"></script>
          <script src="js/library/jquery-ui.js"></script>
          <script src="js/library/bootstrap.js"> </script>
          <script src="js/library/jquery.sticky.js"> </script>
          <script src="js/library/jquery.jcarousel.js"> </script>
          <script src="js/library/jcarousel.connected-carousels.js"> </script>
          <script src="js/library/owl.carousel.js"> </script>
          <script src="js/library/progressbar.js"> </script>
          <script src="js/library/jquery.bracket.min.js"> </script>
          <script src="js/library/chartist.js"> </script>
          <script src="js/library/Chart.js"> </script>
          <script src="js/library/fancySelect.js"> </script>
          <script src="js/library/isotope.pkgd.js"> </script>
          <script src="js/library/imagesloaded.pkgd.js"> </script>
          <script src="js/jquery.team-coundown.js"> </script>
          <script src="js/matches-slider.js"> </script>
          <script src="js/header.js"> </script>
          <script src="js/matches_broadcast_listing.js"> </script>
          <script src="js/news-line.js"> </script>
          <script src="js/match_galery.js"> </script>
          <script src="js/main-club-gallery.js"> </script>
          <script src="js/product-slider.js"> </script>
          <script src="js/circle-bar.js"> </script>
          <script src="js/standings.js"> </script>
          <script src="js/shop-price-filter.js"> </script>
          <script src="js/timeseries.js"> </script>
          <script src="js/radar.js"> </script>
          <script src="js/slider.js"> </script>
          <script src="js/preloader.js"> </script>
          <script src="js/diagram.js"> </script>
          <script src="js/bi-polar-diagram.js"> </script>
          <script src="js/label-placement-diagram.js"> </script>
          <script src="js/donut-chart.js"> </script>
          <script src="js/animate-donut.js"> </script>
          <script src="js/advanced-smil.js"> </script>
          <script src="js/svg-path.js"> </script>
          <script src="js/pick-circle.js"> </script>
          <script src="js/horizontal-bar.js"> </script>
          <script src="js/gauge-chart.js"> </script>
          <script src="js/stacked-bar.js"> </script>
          <script src="js/library/chartist-plugin-legend.js"> </script>
          <script src="js/library/chartist-plugin-threshold.js"> </script>
          <script src="js/library/chartist-plugin-pointlabels.js"> </script>
          <script src="js/treshold.js"> </script>
          <script src="js/visible.js"> </script>
          <script src="js/anchor.js"> </script>
          <script src="js/landing_carousel.js"> </script>
          <script src="js/landing_sport_standings.js"> </script>
          <script src="js/twitterslider.js"> </script>
          <script src="js/champions.js"> </script>
          <script src="js/landing_mainnews_slider.js"> </script>
          <script src="js/carousel.js"> </script>
          <script src="js/video_slider.js"> </script>
          <script src="js/footer_slides.js"> </script>
          <script src="js/player_test.js"> </script>
          <script src="js/main.js"> </script>
          <NextScript />
        </body>
      </Html>
    );
  }
}
