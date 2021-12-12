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
    const url = urljoin(config.siteUrl, config.pathPrefix, postNode.fields.slug)

    // let giscusConfig = {
    //   url: url,
    //   identifier: post.title,
    //   title: post.title,
    //   repo="...",
    //   repoId="...",
    //   category="...",
    //   categoryId="...",
    //   mapping="...",
    //   term="...",
    //   reactionsEnabled="...",
    //   emitMetadata="...",
    //   theme="...",
    // }

    return (
      <>
      <h1>{post.title}</h1>
      {/* <Giscus config={giscusConfig} /> */}
      <Giscus
            src="https://giscus.app/client.js"
            repo="topidesta/topidesta"
            repoId="MDEyOk9yZ2FuaXphdGlvbjc2NzY2OTI="
            category="Announcements"
            mapping="og:title"
            theme="light"
            reactionsEnabled="1"
          />
      </>
    )
  }
}

export default GiscusGatsby
