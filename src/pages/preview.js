import * as React from 'react'
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews'
import linkResolver from '../utils/linkResolver'

const PreviewPage = ({ isPreview }) => {
  if (isPreview === false) return 'Not a preview!'
  return (
    <p>Loading...</p>
  )
}

const WrappedPreview = (props) => {
  return withPrismicPreviewResolver(PreviewPage, {
    repositoryName: process.env.GATSBY_PRISMIC_CONTAINER_NAME,
    linkResolver
  })(props)
}

export default WrappedPreview