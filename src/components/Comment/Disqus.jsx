/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
// import ReactDisqusComments from 'react-disqus-comments'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus';
import urljoin from 'url-join'
import config from '../../../data/SiteConfig'

class Disqus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toasts: [],
    }
    this.notifyAboutComment = this.notifyAboutComment.bind(this)
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this)
  }

  onSnackbarDismiss() {
    // eslint-disable-next-line react/destructuring-assignment
    const [, ...toasts] = this.state.toasts
    this.setState({ toasts })
  }

  notifyAboutComment() {
    // eslint-disable-next-line react/destructuring-assignment
    // eslint-disable-next-line react/no-access-state-in-setstate
    const toasts = this.state.toasts.slice()
    toasts.push({ text: 'Ada Komentar Baru!' })
    this.setState({ toasts })
  }

  render() {
    const { postNode } = this.props
    if (!config.disqusShortname) {
      return null
    }
    const post = postNode.frontmatter
    const url = urljoin(config.siteUrl, config.pathPrefix, postNode.fields.slug)

    let disqusConfig = {
      url: url,
      identifier: post.title,
      title: post.title,
    }

    return (
      // <ReactDisqusComments
      //   shortname={config.disqusShortname}
      //   identifier={post.title}
      //   title={post.title}
      //   url={url}
      //   category_id={post.category_id}
      //   onNewComment={this.notifyAboutComment}
      // />
      <>
      <h1>{post.title}</h1>
      <CommentCount config={disqusConfig} placeholder={'...'} />
      /* Post Contents */
      <Disqus config={disqusConfig} />
      </>
    )
  }
}

export default Disqus
