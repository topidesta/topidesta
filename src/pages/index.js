import React from 'react'
import Layout from '@components/Layout'
import SEO from '@components/seo'
import HelloWorld from '@components/HelloWorld'

const IndexPage = ({ data }) => (
  <Layout showHome={false}>
    <SEO
      title="HORROR THE CODE (HTC) GROUP - TOPIDESTA BLOG"
      keywords={[`developer`, `react`, `javascript`, `codeigniters`, `coffelovers`]}
    />
    <HelloWorld />
  </Layout>
)

export default IndexPage
