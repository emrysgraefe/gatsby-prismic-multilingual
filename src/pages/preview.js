import * as React from 'react'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import linkResolver from '../utils/linkResolver'

const PreviewPage = ({ isPreview }) => {
  if (isPreview === false) return 'Not a preview!'
  return (
    <p>Loading...</p>
  )
}

const WrappedPreview = (props) => {
  return withPrismicPreview(PreviewPage, {
    repositoryName: process.env.GATSBY_PRISMIC_CONTAINER_NAME,
    linkResolver: () => (doc) => linkResolver(doc),
  })(props)
}

export default WrappedPreview