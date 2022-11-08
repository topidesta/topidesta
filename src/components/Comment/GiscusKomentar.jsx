import React, { Component } from 'react'
// import { Giscus } from '@giscus/react';

class GiscusKomentar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toasts: [],
    }
  }

  render() {
    const { postNode } = this.props
    const post = postNode.frontmatter

    return (
      <>
      <h1>{post.title}</h1> 
        {console.log('load giscuss')}
        {/* <Giscus
          id="comments"
          repo="topidesta/topidesta"
          repoId="MDEwOlJlcG9zaXRvcnkyMDA1ODIyNTk="
          category="Comments"
          categoryId="DIC_kwDOC_Skc84CAQVo"
          mapping="url"
          term="Selamat datang di topidesta Blogs"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="light_protanopia"
          lang="en"
        /> */}
      </>
    )
  }
}

export default GiscusKomentar