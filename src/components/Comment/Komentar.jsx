import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import config from '../../../data/SiteConfig';

const commentNodeId = 'comments';

const Komentar = () => {

    state = {
        isShow: !this.props.lazyload,
    }
    
    handleClick = () => {
        this.setState(prevState => ({
            isShow: !prevState.isShow,
        }))
    }

	// this query is for retrieving the repo name from gatsby-config
	// const data = useStaticQuery(graphql`
	// 	query RepoQuery {
	// 		site {
	// 			siteMetadata {
	// 				repo
	// 			}
	// 		}
	// 	}
	// `);

    if (!config.komentar) {
      return null
    }

	useEffect(() => {
		// docs - https://utteranc.es/
		const script = document.createElement('script');
		script.src = 'https://utteranc.es/client.js';
		script.async = true;
		script.setAttribute('repo', config.komentar);
		script.setAttribute('issue-term', 'pathname');
		script.setAttribute('label', 'comment :speech_balloon:');
		script.setAttribute('crossorigin', 'anonymous');

		const scriptParentNode = document.getElementById(commentNodeId);
		scriptParentNode.appendChild(script);

		return () => {
			// cleanup - remove the older script with previous theme
			scriptParentNode.removeChild(scriptParentNode.firstChild);
		};
	}, [data, theme]);

	// return <div id={commentNodeId} />;
    const { extraClass, postNode, btnLoadComments } = this.props

    return (
      <div className={`comment-container text-center ${extraClass}`}>
        {!this.state.isShow && (
          <button className="btn-primary" onClick={this.handleClick}>
            {btnLoadComments}
          </button>
        )}

        {this.state.isShow && <div id={commentNodeId} />}
      </div>
    )
};

export default Komentar;