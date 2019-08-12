import React from 'react'
import Layout from '@components/Layout'
import SEO from '@components/seo'
import HelloWorld from '@components/HelloWorld'

const IndexPage = ({ data }) => (
  <Layout showHome={false}>
    [![Netlify Status](https://api.netlify.com/api/v1/badges/3aaf1d50-9df4-4af9-9997-f3278c59633b/deploy-status)](https://app.netlify.com/sites/topidesta/deploys)
    <SEO
      title="HORROR THE CODE (HTC) GROUP - TOPIDESTA BLOG"
      keywords={[`developer`, `react`, `javascript`, `codeigniters`, `coffelovers`]}
    />
    <HelloWorld />
  </Layout>
)

export default IndexPage
