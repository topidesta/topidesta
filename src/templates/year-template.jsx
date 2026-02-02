import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import Sidebar from "../components/Sidebar/Sidebar";
import PostListing from "../components/PostListing/PostListing";
import Pagination from "../components/Pagination/Pagination";
import { getPostList, getYearPathWithoutTrailingSlash } from "../utils/helpers";
import config from "../../data/SiteConfig";

const YearTemplate = ({ data, pageContext }) => {
  const {
    year,
    tagList,
    categoryList,
    latestPostEdges,
    currentPage,
    totalPages,
  } = pageContext;
  const postEdges = data.allMarkdownRemark.edges;
  const postList = getPostList(postEdges);
  const content = (
    <>
      <PostListing
        postList={postList}
        hasThumbnail={config.yearHasThumbnail}
        hasLoadmore={false}
      />
      <Pagination
        extraClass="margin-top padding-top-half"
        currentPage={currentPage}
        totalPages={totalPages}
        pathPrefix={getYearPathWithoutTrailingSlash(year)}
        pathPrefixPagination={config.pathPrefixPagination}
      />
    </>
  );
  const sidebar = (
    <Sidebar
      tagList={tagList}
      categoryList={categoryList}
      yearList={pageContext.yearList}
      latestPostEdges={latestPostEdges}
      links={config.sidebarLinks}
    />
  );

  return (
    <Layout>
      <div className="year-container">
        <Helmet
          title={`${config.yearHeader} ${year} - ${config.siteTitle}`}
        />
        <Header title={`${config.yearHeader} ${year}`} />
        <MainContainer content={content} sidebar={sidebar} />
      </div>
    </Layout>
  );
};

export default YearTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query YearPage($yearStart: Date, $yearEnd: Date, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { fields: { date: DESC } }
      filter: {
        fields: {
          date: { gte: $yearStart, lt: $yearEnd }
        }
        frontmatter: {
          template: { eq: "post" }
        }
      }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            cover {
              childImageSharp {
                gatsbyImageData(width: 660, quality: 100, layout: CONSTRAINED)
              }
            }
            date
          }
        }
      }
    }
  }
`;
