/* eslint-disable no-unused-vars */

import * as React from 'react'
import { graphql } from "gatsby"
import {NavigationFragment} from '../components/TopMenu'
import { withPreview } from 'gatsby-source-prismic'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import SliceRenderer from '../components/SliceRenderer'

const PageContent = styled.div`
  max-width: 65ch;
  margin: 120px auto;
`

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
      <PageHeader title={document.data.title} image={document.data.header_image.localFile.childImageSharp.gatsbyImageData} />
      <PageContent>
        <RichText render={document.data.page_description.raw} />
        <RichText render={document.data.content.raw} />
      </PageContent>
      <SliceRenderer slices={document.data.body} />
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
    _previewable
    lang
    url
    data {
      content {
        raw
      }
      excerpt {
        raw
      }
      header_image {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 2400)
          }
        }
      }
      page_description {
        raw
      }
      title {
        raw
      }
      label {
        raw
      }
      body {
        ... on PrismicAboutBodyServices {
          id
          slice_type
          items {
            icon {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 30)
                }
              }
            }
            service_description {
              raw
            }
            service_title {
              raw
            }
          }
          primary {
            title {
              raw
            }
          }
        }
      }
    }
  }
}
`