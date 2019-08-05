import React from 'react'
import { Link } from 'gatsby'
import Layout from '@components/Layout'
import SEO from '@components/seo'

/* eslint-disable jsx-a11y/accessible-emoji */
const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Halaman Blog</h1>
    <p>Halaman List Blog Disini</p>
    <p>
      Back&nbsp;
      <span>
        <Link to="/">home</Link>
      </span>
      .
    </p>
  </Layout>
)
/* eslint-enable jsx-a11y/accessible-emoji */

export default BlogPage
