import * as React from 'react'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'
import ButtonLink from './ButtonLink'
import PreviewableImage from './PreviewableImage'

const Content = styled.div`
  font-weight: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  > a {
    align-self: center;
    margin-top: auto;
  }
`

const PostWrapper = styled.article`
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 350px;
  
  &:not(:last-of-type()) {
    margin-bottom: 120px;
  }

  h1, h5 {
    font-weight: 100;
    margin-top: 30px;
  }

  h5 {
    text-transform: uppercase;
    color: ${props => `${props.theme.colors.grey}`};
    letter-spacing: 2px;
  }

  p {
    margin-bottom: 30px;
  }
`

const FeaturedPost = ({ item }) => {
  return (
    <PostWrapper>
      <PreviewableImage 
        image={item.data.featured_image} 
        alt="value"
      />
      <Content>
        <RichText render={item.data.title.raw} />
        <p>{item.data.date}</p>
        <RichText render={item.data.excerpt.raw} />
        <ButtonLink to={item.url}>Read</ButtonLink>
      </Content>
    </PostWrapper>
  )
}

export default FeaturedPost