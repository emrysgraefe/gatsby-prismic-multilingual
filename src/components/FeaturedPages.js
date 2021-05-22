import * as React from 'react'
import styled from 'styled-components'

import FeaturedPage from './FeaturedPage'

const FeaturedPagesWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`

const FeaturedPages = ({ items }) => {
  return (
    <FeaturedPagesWrapper>
      {items.map((item, i) => {
        console.log(item)
        return (
          <FeaturedPage key={item.page.document.id} item={item} order={i} />
        )
      })}
    </FeaturedPagesWrapper>
    
  )
}

export default FeaturedPages