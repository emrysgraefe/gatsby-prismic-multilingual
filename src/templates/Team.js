/* eslint-disable no-unused-vars */

import * as React from 'react'
import { graphql } from "gatsby"
import {NavigationFragment} from '../components/TopMenu'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import SliceRenderer from '../components/SliceRenderer'

const Team = ({ data }) => {
  if (!data) return null
  const document = data.prismicTeam
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
      <PageHeader
        label={document.data.label}
        title={document.data.title}
        image={document.data.header_image}
      />
      <SliceRenderer slices={document.data.body} />
    </Layout>
  )
}

export default withPrismicPreview(Team, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_CONTAINER_NAME,
    linkResolver
  }
])

export const query = graphql`
query TeamPageQuery($lang: String!) {
  prismicNavigation(lang: {eq: $lang}) {
    ...NavigationFragment
  }
  prismicTeam(lang: {eq: $lang}) {
    alternate_languages {
      uid
      type
      lang
    }
    lang
    uid
    _previewable
    data {
      header_image {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 2400)
          }
        }
      }
      title {
        raw
      }
      label {
        raw
      }
      body {
        ... on PrismicTeamDataBodyTeam {
          id
          slice_type
          primary {
            team_title {
              raw
            }
            label {
              raw
            }
          }
          items {
            first_and_lastname {
              raw
            }
            portrait {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 300)
                }
              }
            }
            position {
              raw
            }
          }
        }
      }
    }
  }
}
`