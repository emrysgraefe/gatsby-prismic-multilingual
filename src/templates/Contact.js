/* eslint-disable no-unused-vars */

import * as React from 'react'
import { graphql } from "gatsby"
import {NavigationFragment} from '../components/TopMenu'
import { RichText } from 'prismic-reactjs'
import Layout from '../components/Layout'

const Contact = ({ data }) => {
  if (!data) return null
  const document = data.prismicContact
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

export default Contact

export const query = graphql`
query ContactPageQuery($lang: String!) {
  prismicNavigation(lang: {eq: $lang}) {
    ...NavigationFragment
  }
  prismicContact(lang: {eq: $lang}) {
    alternate_languages {
      uid
      type
      lang
      url
    }
    lang
    url
    data {
      header_image {
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