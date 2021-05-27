import * as React from 'react'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'
import ButtonLink from './ButtonLink'
import PreviewableImage from './PreviewableImage'

const Content = styled.div`
  margin: auto 0;
  font-weight: 100;
`

const PageWrapper = styled.article`
  padding: 0 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  h1, h5 {
    font-weight: 100;
  }
  h5 {
    text-transform: uppercase;
    color: ${props => `${props.theme.colors.grey}`};
    letter-spacing: 2px;
  }

  p {
    margin-bottom: 30px;
  }
  
  &:first-of-type {
    margin-bottom: 120px;
  }

  &:nth-of-type(2) {
    ${Content} {
      order: -1;
      grid-column: 1;
    }

  }
`

const FeaturedPage = ({ item }) => {
  return (
    <PageWrapper>
      <PreviewableImage 
        image={item.page.document.data.header_image} 
        alt="value"
      />
      <Content>
        <RichText render={item.page.document.data.label.raw} />
        <RichText render={item.page.document.data.title.raw} />
        <RichText render={item.page.document.data.excerpt.raw} />
        <ButtonLink to={item.page.url}>{item.button_text}</ButtonLink>
      </Content>
    </PageWrapper>
  )
}

export default FeaturedPage