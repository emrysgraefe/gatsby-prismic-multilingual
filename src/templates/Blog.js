/* eslint-disable no-unused-vars */

import * as React from 'react'
import { graphql } from "gatsby"
import {NavigationFragment} from '../components/TopMenu'
import { withPreview } from 'gatsby-source-prismic'
import styled from 'styled-components'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import BlogRoll from '../components/BlogRoll'

const PageContent = styled.div`
  max-width: 65ch;
  margin: 120px auto;
`

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
      <PageHeader title={document.data.title} image={document.data.header_image.localFile.childImageSharp.gatsbyImageData} />
      <BlogRoll items={data.allPrismicBlogPost.nodes} />
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
    type
    url
    data {
      title {
        raw
      }
      header_image {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 2400)
          }
        }
      }
    }
  }
  allPrismicBlogPost(
    filter: {
      lang: {eq: $lang}
    }
    sort: {
      fields: data___date, order: DESC
    }) {
    nodes {
      data {
        date(fromNow: true)
        excerpt {
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
      url
      lang
      uid
    }
  }
}
`