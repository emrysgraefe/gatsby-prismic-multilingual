import * as React from 'react'
import Hero from './Hero'

const SliceRenderer = ({ slices }) => {
  return (
    <div>
      {slices.map((bodyContent, i) => {
        switch (bodyContent.slice_type) {
          case 'hero':
            return (
              <Hero key={`${bodyContent.slice_type}-${i}`} data={bodyContent.primary} />
            )
          case 'block_quote':
            return (
              <div key={`${bodyContent.slice_type}-${i}`}>
                block quote
              </div>
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