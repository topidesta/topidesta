import React from 'react'
import { Link,graphql } from 'gatsby'
import Layout from '@components/Layout'

/* eslint-disable jsx-a11y/accessible-emoji */
const BlogPage = (props) => {
  const blogList = props.data.allMarkdownRemark;
  return(
    <Layout>
      {blogList.edges.map(({ node },i) => (
        <Link to={node.fields.slug} key={i} className="link">
          <div className="post-list">
            <h1>{node.frontmatter.title}</h1>
            <span>{node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </div>
        </Link>
      ))}

    <p>
      Kembali ke &nbsp;
      <span>
        <Link to="/">home</Link>
      </span>
      .
    </p>
    </Layout>
  );
}
/* eslint-enable jsx-a11y/accessible-emoji */

export default BlogPage;

export const listQuery = graphql`
query ListQuery{
  allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
    edges {
      node {
        fields {
          slug
        }
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
          tags
        }
      }
    }
  }
}
`
