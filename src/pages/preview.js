import * as React from 'react'
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews'
import linkResolver from '../utils/linkResolver'

const repositoryName = process.env.GATSBY_PRISMIC_CONTAINER_NAME

const PreviewPage = () => {
  return (
    <p>Loading...</p>
  )
}

export default withPrismicPreviewResolver(PreviewPage, {
  repositoryName,
  linkResolver
})