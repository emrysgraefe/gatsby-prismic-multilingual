import { RichText } from 'prismic-reactjs'
import * as React from 'react'
import ButtonLink from './ButtonLink'
import styled from 'styled-components'

const CallToActionWrapper = styled.section`
  padding: 120px;
  background: ${props => `${props.theme.colors.dark}`};
`

const ContentWrapper = styled.div`
  max-width: 65ch;
  margin: 0 auto;
  color: white;
  h2 {
    font-size: 64px;
  }
`
const CallToAction = ({ title, content, buttonLabel, buttonUrl }) => {
  return (
    <CallToActionWrapper>
      <ContentWrapper>
        <RichText render={title.raw} />
        <RichText render={content.raw} />
        <ButtonLink to={buttonUrl.url}>{buttonLabel}</ButtonLink>
      </ContentWrapper>
    </CallToActionWrapper>
  )
}

export default CallToAction