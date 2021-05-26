/* eslint-disable no-unused-vars */

import * as React from 'react'
import { graphql } from "gatsby"
import {NavigationFragment} from '../components/TopMenu'
import { withPreview } from 'gatsby-source-prismic'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'

import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import SliceRenderer from '../components/SliceRenderer'

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  max-width: 1200px;
  margin: 120px auto;
`

const ContactDetail = styled.div`
  margin-bottom: 25px;
  > h5 {
    margin-bottom: 10px;
  }
  > p {
    margin-bottom: 5px;
  }
`

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
      <PageHeader title={document.data.title} image={document.data.header_image.localFile.childImageSharp.gatsbyImageData} />
      <PageContainer>
        <SliceRenderer slices={document.data.body} lang={activeDoc.lang} />
        <div>
          <ContactDetail>
          <RichText render={document.data.offices_title.raw} />
          <RichText render={document.data.offices_description.raw} />
          </ContactDetail>
          <ContactDetail>
          <RichText render={document.data.address_title.raw} />
          <RichText render={document.data.address.raw} />
          </ContactDetail>

          <ContactDetail>
          <RichText render={document.data.hours_title.raw} />
          <RichText render={document.data.hours_description.raw} />
          </ContactDetail>

          <ContactDetail>
          <RichText render={document.data.contact_info_title.raw} />
          <RichText render={document.data.contact_info.raw} />
          </ContactDetail>
          
          
          
          
        </div>
      </PageContainer>
    </Layout>
  )
}

export default withPreview(Contact)

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
      address {
        raw
      }
      address_title {
        raw
      }
      contact_info {
        raw
      }
      contact_info_title {
        raw
      }
      header_image {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 2400)
          }
        }
      }
      hours_description {
        raw
      }
      hours_title {
        raw
      }
      offices_description {
        raw
      }
      offices_title {
        raw
      }
      title {
        raw
      }
      body {
        ... on PrismicContactBodyContactForm {
          id
          slice_type
          primary {
            submit_button_text
            content {
              raw
            }
            title {
              raw
            }
            redirect {
              url
            }
          }
          items {
            field_name
            field_type
            required
            label
            placeholder
          }
        }
      }
    }
  }
}
`