import * as React from 'react'
import styled from 'styled-components'

import PostPreview from './PostPreview'

const BlogRollWrapper = styled.section`
  max-width: 1200px;
  margin: 120px auto;
  h2 {
    text-align: center;
    font-weight: 100;
  }
  
`

const BlogRollContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
`

const BlogRoll = ({ items }) => {
  console.log(items)
  return (
    <BlogRollWrapper>
      <BlogRollContainer>
        {items.map((item, i) => {
          return (
            <PostPreview key={item.uid} item={item} order={i} />
          )
        })}
      </BlogRollContainer>
    </BlogRollWrapper>
  )
}

export default BlogRoll