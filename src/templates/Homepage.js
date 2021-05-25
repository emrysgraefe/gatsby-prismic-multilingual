/* eslint-disable no-unused-vars */
import { graphql } from "gatsby"
import * as React from "react"
import {NavigationFragment} from '../components/TopMenu'
import { withPreview } from 'gatsby-source-prismic'
import Layout from '../components/Layout'
import SliceRenderer from '../components/SliceRenderer'
import Seo from '../components/Seo'

const IndexPage = ({ data }) => {
  if (!data) return null

  const document = data.prismicHomepage
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
      <Seo lang={activeDoc.lang} />
      <SliceRenderer slices={document.data.body}/>
    </Layout>
  )
}

export default withPreview(IndexPage)


export const query = graphql`
query HomePageQuery($lang: String!) {
  prismicNavigation(lang: {eq: $lang}) {
    ...NavigationFragment
  }
  prismicHomepage(lang: {eq: $lang}) {
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
      body {
        ... on PrismicHomepageBodyHero {
          id
          slice_type
          slice_label
          primary {
            button_label
            button_link {
              uid
            }
            background_image {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            hero_content
            hero_title {
              raw
            }
          }
        }
        ... on PrismicHomepageBodyBlockQuote {
          id
          slice_type
          primary {
            quote_text
            block_title
          }
        }
        ... on PrismicHomepageBodyCallToAction {
          id
          slice_type
          primary {
            button_label
            button_link {
              url
            }
            paragraph {
              raw
            }
            title {
              raw
            }
          }
        }
        ... on PrismicHomepageBodyFeaturedPages {
          id
          slice_type
          items {
            button_text
            page {
              url
              lang
              slug
              document {
                ... on PrismicAbout {
                  id
                  data {
                    header_image {
                      localFile {
                        childImageSharp {
                          gatsbyImageData(width: 600)
                        }
                      }
                    }
                    excerpt {
                      raw
                    }
                    title {
                      raw
                    }
                    label {
                      raw
                    }
                  }
                }
                ... on PrismicTeam {
                  id
                  data {
                    header_image {
                      localFile {
                        childImageSharp {
                          gatsbyImageData(width: 600)
                        }
                      }
                    }
                    excerpt {
                      raw
                    }
                    title {
                      raw
                    }
                    label {
                      raw
                    }
                  }
                }
              }
            }
          }
        }
        ... on PrismicHomepageBodyFeaturedPosts {
          id
          slice_type
          primary {
            title {
              raw
            }
          }
          items {
            post {
              url
            }
          }
        }
        ... on PrismicHomepageBodyFeaturedPosts {
          id
          slice_type
          primary {
            title {
              raw
            }
          }
          items {
            post {
              document {
                ... on PrismicBlogPost {
                  id
                  data {
                    date
                    title {
                      raw
                    }
                    featured_image {
                      localFile {
                        childImageSharp {
                          gatsbyImageData(width: 350)
                        }
                      }
                    }
                    excerpt {
                      raw
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`