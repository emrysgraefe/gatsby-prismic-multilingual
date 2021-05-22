/* eslint-disable no-unused-vars */

import * as React from 'react'
import { graphql } from "gatsby"
import {NavigationFragment} from '../components/TopMenu'
import { withPreview } from 'gatsby-source-prismic'

import { RichText } from 'prismic-reactjs'
import Layout from '../components/Layout'

const About = ({ data }) => {
  if (!data) return null
  const document = data.prismicAbout
  const { lang, type, url } = document
  const alternateLanguages = document.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }
  const topMenu = data.prismicNavigation || {}
  return (
    <Layout
      topMenu={topMenu}
      activeDocMeta={activeDoc}
    >
      <RichText render={document.data.title.raw} />
    </Layout>
  )
}

export default withPreview(About)

export const query = graphql`
query AboutPageQuery($lang: String!) {
  prismicNavigation(lang: {eq: $lang}) {
    ...NavigationFragment
  }
  prismicAbout(lang: {eq: $lang}) {
    alternate_languages {
      uid
      type
      lang
      url
    }
    lang
    url
    data {
      content {
        raw
      }
      header_image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      page_description {
        raw
      }
      label {
        raw
      }
      title {
        raw
      }
    }
  }
}
`