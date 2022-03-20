/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { Giscus } from '@giscus/react';

class GiscusGatsby extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toasts: [],
    }
  //   this.notifyAboutComment = this.notifyAboutComment.bind(this)
  //   this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this)
  }

  // onSnackbarDismiss() {
  //   // eslint-disable-next-line react/destructuring-assignment
  //   const [, ...toasts] = this.state.toasts
  //   this.setState({ toasts })
  // }

  // notifyAboutComment() {
  //   // eslint-disable-next-line react/destructuring-assignment
  //   // eslint-disable-next-line react/no-access-state-in-setstate
  //   const toasts = this.state.toasts.slice()
  //   toasts.push({ text: 'Ada Komentar Baru!' })
  //   this.setState({ toasts })
  // }

  render() {
    const { postNode } = this.props
    // if (!config.disqusShortname) {
    //   return null
    // }
    const post = postNode.frontmatter

    return (
      <>
      <h1>{post.title}</h1>
      <Giscus
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

export default GiscusGatsby
