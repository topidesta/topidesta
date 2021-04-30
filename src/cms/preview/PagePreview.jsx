import React from 'react'
import PropTypes from 'prop-types'
import { PageTemplate } from '../../templates/page-template'

const PagePreview = () => {
  return (
    <PageTemplate />
  )
}

PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PagePreview