/* eslint-disable no-unused-vars */

import * as React from 'react'
import { graphql } from "gatsby"
import {NavigationFragment} from '../components/TopMenu'
import { withPreview } from 'gatsby-source-prismic'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'

const PageContent = styled.div`
  max-width: 65ch;
  margin: 120px auto;
`

const BlogPost = ({ data }) => {
  if (!data) return null
  const document = data.prismicBlogPost
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
      <PageHeader title={document.data.title} image={document.data.featured_image.localFile.childImageSharp.gatsbyImageData} />
      <PageContent>
        <RichText render={document.data.content.raw} />
      </PageContent>
    </Layout>
  )
}

export default withPreview(BlogPost)

export const query = graphql`
query BlogPostQuery($lang: String!, $uid: String!) {
  prismicNavigation(lang: {eq: $lang}) {
    ...NavigationFragment
  }
  prismicBlogPost(
    lang: {eq: $lang},
    uid: {eq: $uid}
    ) {
    alternate_languages {
      uid
      type
      lang
      url
    }
    _previewable
    lang
    type
    url
    data {
      date
      content {
        raw
      }
      excerpt {
        raw
      }
      featured_image {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 2400)
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