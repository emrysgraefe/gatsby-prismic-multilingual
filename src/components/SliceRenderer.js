import * as React from 'react'
import Hero from './Hero'
import BlockQuote from './BlockQuote'
import FeaturedPages from './FeaturedPages'
import FeaturedPosts from './FeaturedPosts'
import CallToAction from './CallToAction'
import Services from './Services'
import TeamList from './TeamList'

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
              />
            )
          case 'block_quote':
            return (
              <BlockQuote
                key={`${bodyContent.slice_type}-${i}`}
                title={bodyContent.primary.block_title}
                content={bodyContent.primary.quote_text}
              />
            )
          case 'featured_pages':
            return (
              <FeaturedPages 
                key={`${bodyContent.slice_type}-${i}`}
                items={bodyContent.items}
              />
            )
          case 'featured_posts':
            return (
              <FeaturedPosts
                key={`${bodyContent.slice_type}-${i}`}
                items={bodyContent.items}
                title={bodyContent.primary.title}
              />
            )
          case 'call_to_action':
            return (
              <CallToAction 
                key={`${bodyContent.slice_type}-${i}`}
                buttonLabel={bodyContent.primary.button_label}
                buttonUrl={bodyContent.primary.button_link.url}
                content={bodyContent.primary.paragraph}
                title={bodyContent.primary.title}
              />
            )
          case 'services':
            return (
              <Services 
                key={`${bodyContent.slice_type}-${i}`}
                items={bodyContent.items}
                title={bodyContent.primary.title}
              />
            )
          case 'team':
            return (
              <TeamList
                key={`${bodyContent.slice_type}-${i}`}
                items={bodyContent.items}
                title={bodyContent.primary.team_title}
                label={bodyContent.primary.label}
              />
            )
          default:
            return null
        }
      })}
    </div>
  )
}

export default SliceRenderer