import * as React from "react"
import { getImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
import ButtonLink from './ButtonLink'

const HeroWrapper = styled(BackgroundImage)`
  min-height: 33vh;
  padding: 25vh 20px;
  
  background-color: rgba(0,0,0,.3);
`

const HeroContentWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  color: white;
  max-width: 65ch;
  text-align: center;

  h1 {
    font-weight: 800;
  }
`

const Hero = ({ image, title, content, buttonUrl, buttonLabel }) => {
  const bgImage = convertToBgImage(getImage(image))
  return (
      <HeroWrapper
        Tag="div"
        {...bgImage}
        preserveStackingContext
      >
        <HeroContentWrapper>
          <RichText render={title.raw} />
          <h2>{content}</h2>
          <ButtonLink to={`${buttonUrl.uid}`}>{buttonLabel}</ButtonLink>
        </HeroContentWrapper>
    </HeroWrapper>    
  )
}

export default Hero