/* eslint-disable no-unused-vars */

import * as React from 'react'
import { graphql } from "gatsby"
import {NavigationFragment} from '../components/TopMenu'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
import linkResolver from '../utils/linkResolver'
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
  const { lang, type, uid } = document
  const alternateLanguages = document.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    uid,
    alternateLanguages,
  }
  const topMenu = data.prismicNavigation || {}
  return (
    <Layout
      topMenu={topMenu}
      activeDocMeta={activeDoc}
    >
      <PageHeader title={document.data.title} image={document.data.header_image} />
      <PageContent>
        <RichText render={document.data.page_description.raw} />
        <RichText render={document.data.content.raw} />
      </PageContent>
      <SliceRenderer slices={document.data.body} />
    </Layout>
  )
}

export default withPrismicPreview(About, [
  {
    repositoryName: `${process.env.GATSBY_PRISMIC_CONTAINER_NAME}`,
    linkResolver
  }
])

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
      uid
    }
    _previewable
    lang
    uid
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
        ... on PrismicAboutDataBodyServices {
          id
          slice_type
          items {
            icon {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 300)
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