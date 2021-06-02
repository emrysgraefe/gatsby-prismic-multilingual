import * as React from 'react'
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews'
import linkResolver from '../utils/linkResolver'

const PreviewPage = () => {
  return (
    <p>Loading...</p>
  )
}

export default withPrismicPreviewResolver(PreviewPage, {
  repositoryName: 'multilingual-demo',
  linkResolver
})