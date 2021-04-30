import React from 'react'
import PropTypes from 'prop-types'
import { PageTemplate } from '../../templates/page-template'

const PagePreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <PageTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PagePreview