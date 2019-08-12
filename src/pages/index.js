import React from 'react'
import Layout from '@components/Layout'
import SEO from '@components/seo'
import HelloWorld from '@components/HelloWorld'
// import Badges from '@components/badges'

const IndexPage = ({ data }) => (
  <Layout showHome={false}>
    {/* <Badges /> */}
    <SEO
      title="HORROR THE CODE (HTC) GROUP - TOPIDESTA BLOG"
      keywords={[`developer`, `react`, `javascript`, `codeigniters`, `coffelovers`]}
    />
    <HelloWorld />
  </Layout>
)

export default IndexPage
