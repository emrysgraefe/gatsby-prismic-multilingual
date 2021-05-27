import * as React from 'react'
import { withPreviewResolver } from 'gatsby-source-prismic'
import linkResolver from '../utils/linkResolver'

const PreviewPage = ({ isPreview }) => {
  if (isPreview === false) return 'Not a preview!'
  return (
    <p>Loading...</p>
  )
}

const WrappedPreview = (props) => {
  return withPreviewResolver(PreviewPage, {
    repositoryName: process.env.GATSBY_PRISMIC_CONTAINER_NAME,
    linkResolver
  })(props)
}

export default WrappedPreview