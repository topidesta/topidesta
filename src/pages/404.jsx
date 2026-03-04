import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Header from "../components/Header/Header";
import SEO from "../components/SEO/SEO";
import AutoLink from "../components/AutoLink/AutoLink";
import config from "../../data/SiteConfig";

const PageNotFound = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasMounted(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (!hasMounted) {
    return (
      <Layout hasFooter={false}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "60vh",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              border: "5px solid #e0e0e0",
              borderTop: "5px solid #2196F3",
              borderRadius: "50%",
              animation: "spin404 0.8s linear infinite",
            }}
          />
          <style>{`
            @keyframes spin404 {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
          <p style={{ color: "#aaa", fontSize: "0.95rem" }}>Memuat halaman...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout hasFooter={false}>
      <div className="page-not-found-container">
        <Helmet title={`${config.pageNotFoundTitle} - ${config.siteTitle}`} />
        <SEO />
        <Header title={`${config.pageNotFoundTitle}`} />
        <div className="main-content container padding-top-3 padding-bottom-3 margin-top-3 margin-bottom-3">
          <p>{config.pageNotFoundContent}</p>
          <AutoLink to="/" className="btn btn-primary">
            {config.pageNotFoundBtn}
          </AutoLink>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
