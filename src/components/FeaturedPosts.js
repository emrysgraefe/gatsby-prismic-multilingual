import { RichText } from 'prismic-reactjs'
import * as React from 'react'
import styled from 'styled-components'

import FeaturedPost from './FeaturedPost'

const FeaturedPostsWrapper = styled.section`
  max-width: 1200px;
  margin: 120px auto;
  h2 {
    text-align: center;
    font-weight: 100;
  }
  
`

const FeaturedPostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
`

const FeaturedPosts = ({ items, title }) => {
  return (
    <FeaturedPostsWrapper>
    <RichText render={title.raw} />
      <FeaturedPostsContainer>
        {items.map((item, i) => {
          return (
            <FeaturedPost key={item.post.document.id} item={item} order={i} />
          )
        })}
      </FeaturedPostsContainer>
    </FeaturedPostsWrapper>
    
  )
}

export default FeaturedPosts