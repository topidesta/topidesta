import React from "react";
import Helmet from "react-helmet";
import Safe from "react-safe";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import siteConfig from "../../data/SiteConfig";
import { useSlash } from "../utils/helpers";
import brand from "../../content/images/brand.png";
import "../components/Icons/FontAwesome";
import "shiba-css/docs/css/shiba.min.css";
import "../../content/styles/customize.scss";

const MainLayout = ({ children, hasFooter = true }) => (
  <div>
    <Helmet htmlAttributes={{ lang: siteConfig.siteLang }}>
      <meta name="description" content={siteConfig.siteDescription} />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="canonical" href={useSlash(siteConfig.siteUrl)} />
      {/* <script src="https://cdn.jsdelivr.net/gh/anshumanfauzdar/contact-form@v3/src/contact-form.js" id="contactform" form_worker_url="https://v1.formtopidesta.workers.dev/"></script> */}
      <script>
        window.intergramId = "717698723";
        window.intergramServer = "https://telegram.dev.persahabatan.co.id";
      </script>

      <Safe.script>{
        `
        window.intergramId = "717698723";
        window.intergramCustomizations = {
            titleClosed : "Klik Untuk Bertanya!",
            titleOpen : "Buka Obrolan",
            introMessage : "Selamat datang di Blog Programmer Gadungan",
            autoResponse : "Pesan akan segera terkirim..!!",
            autoNoResponse : "Pesan tidak terkirim..!!",
            mainColor : "#434348",
            alwaysUseFloatingButton : false
          }
        `
      }
      </Safe.script>
      <script id="intergram" type="text/javascript" src="https://telegram.dev.persahabatan.co.id/js/widget.js"></script>

    </Helmet>
    <Navigation
      brand={brand}
      title={siteConfig.navTitle}
      links={siteConfig.navLinks}
    />
    {children}
    {hasFooter && (
      <Footer
        socials={siteConfig.socialLinks}
        links={siteConfig.footerLinks}
        copyright={siteConfig.copyright}
      />
    )}
    <ScrollToTop color="#FFF" bgColor="grey-half" />
  </div>
);

export default MainLayout;
