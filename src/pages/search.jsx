import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import Sidebar from "../components/Sidebar/Sidebar";
import { getTagCategoryList } from "../utils/helpers";
import config from "../../data/SiteConfig";
import { graphql } from "gatsby";

class SearchPage extends Component {
  componentDidMount() {
    // Configure Google CSE to use full-width results, not overlay/popup
    // and open links in same tab
    window.__gcse = {
      parsetags: 'onload',
      linkTarget: '_self'
    };

    // Load Google Custom Search script
    const script = document.createElement("script");
    script.src = `https://cse.google.com/cse.js?cx=${config.searchEngineID}`;
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const postList = postEdges.map((edge) => ({
      path: edge.node.fields.slug,
      tags: edge.node.frontmatter.tags,
      categories: edge.node.frontmatter.categories,
      title: edge.node.frontmatter.title,
      date: edge.node.fields.date,
    }));
    const { tagList, categoryList } = getTagCategoryList(postList);

    // Generate yearList
    const yearSet = new Set();
    postList.forEach((post) => {
      if (post.date) {
        const year = new Date(post.date).getFullYear().toString();
        yearSet.add(year);
      }
    });
    const yearList = Array.from(yearSet).sort((a, b) => b - a);

    const content = (
      <div 
        className="search-results-container"
        style={{
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '4px',
          minHeight: '400px'
        }}
      >
        <div className="gcse-search"></div>
      </div>
    );

    const sidebar = (
      <Sidebar
        tagList={tagList}
        categoryList={categoryList}
        yearList={yearList}
        links={config.sidebarLinks}
      />
    );

    return (
      <Layout>
        <div className="search-container">
          <Helmet title={`Search - ${config.siteTitle}`} />
          <Header title="Search Results" />
          <MainContainer content={content} sidebar={sidebar} />
        </div>
      </Layout>
    );
  }
}

export default SearchPage;

/* eslint no-undef: "off" */
export const searchQuery = graphql`
  query SearchQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          frontmatter {
            title
            tags
            categories
            date
          }
        }
      }
    }
  }
`;
