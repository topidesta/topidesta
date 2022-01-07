/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { Giscus } from '@giscus/react';
import urljoin from 'url-join'
import config from '../../../data/SiteConfig'

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
        src="https://giscus.app/client.js"
        data-repo="topidesta/topidesta"
        data-repo-id="MDEwOlJlcG9zaXRvcnkyMDA1ODIyNTk="
        data-category="Comments"
        data-category-id="DIC_kwDOC_Skc84CAQVo"
        data-mapping="title"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-theme="light"
        data-lang="en"
        crossorigin="anonymous"
        async
      />
      </>
    )
  }
}

export default GiscusGatsby
