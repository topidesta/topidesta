import React, { Component } from 'react'
import { Giscus } from '@giscus/react';

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
      <GiscusKomentar
        repo="topidesta/topidesta"
        repoId="MDEwOlJlcG9zaXRvcnkyMDA1ODIyNTk="
        category="Comments"
        categoryId="DIC_kwDOC_Skc84CAQVo"
        mapping="title"
        reactionsEnabled="1"
        emitMetadata="0"
        theme="light"
      />
      </>
    )
  }
}

export default Giscus