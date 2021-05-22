import * as React from 'react'
import Hero from './Hero'
import BlockQuote from './BlockQuote'

const SliceRenderer = ({ slices }) => {
  return (
    <div>
      {slices.map((bodyContent, i) => {
        switch (bodyContent.slice_type) {
          case 'hero':
            return (
              <Hero 
                key={`${bodyContent.slice_type}-${i}`}
                image={bodyContent.primary.background_image.localFile.childImageSharp.gatsbyImageData}
                title={bodyContent.primary.hero_title}
                content={bodyContent.primary.hero_content}
                buttonLabel={bodyContent.primary.button_label}
                buttonUrl={bodyContent.primary.button_link}
                data={bodyContent.primary} />
            )
          case 'block_quote':
            return (
              <BlockQuote key={`${bodyContent.slice_type}-${i}`} data={bodyContent.primary} />
            )
          case 'featured_pages':
            return (
              <div key={`${bodyContent.slice_type}-${i}`}>
                featured pages
              </div>
            )
          case 'call_to_action':
            return (
              <div key={`${bodyContent.slice_type}-${i}`}>
                call to action
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
}

export default SliceRenderer