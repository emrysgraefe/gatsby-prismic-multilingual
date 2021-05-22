/* eslint-disable no-unused-vars */

import * as React from 'react'
import { graphql } from "gatsby"
import {NavigationFragment} from '../components/TopMenu'
import { withPreview } from 'gatsby-source-prismic'

import { RichText } from 'prismic-reactjs'
import Layout from '../components/Layout'

const Blog = ({ data }) => {
  if (!data) return null
  const document = data.prismicBlogPage
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

export default withPreview(Blog)

export const query = graphql`
query BlogPageQuery($lang: String!) {
  prismicNavigation(lang: {eq: $lang}) {
    ...NavigationFragment
  }
  prismicBlogPage(lang: {eq: $lang}) {
    alternate_languages {
      uid
      type
      lang
      url
    }
    lang
    url
    type
    data {
      content {
          raw
        }
        featured_image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        title {
          raw
        }
      } 
    }
  }

`