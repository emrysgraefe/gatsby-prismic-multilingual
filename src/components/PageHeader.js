import * as React from "react"
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
import ButtonLink from './ButtonLink'

const HeaderWrapper = styled.section`
  min-height: 33vh;
  padding: 25vh 20px;
  display: flex;
`

const HeaderContentWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  max-width: 65ch;
  text-align: center;

  h1 {
    font-weight: 800;
  }
`

const PreviewHeaderWrapper = styled.div`
  background-image: url(${props => props.image.url});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 33vh;
  padding: 25vh 20px;
  background-color: rgba(0,0,0,.3);
`

const Header = ({ image, title, label, content, buttonLabel, buttonUrl }) => {
  if (!!image.localFile) {
    return (
        <HeaderWrapper>
        <GatsbyImage image={getImage(image.localFile.childImageSharp.gatsbyImageData)} alt="" />
          <HeaderContentWrapper>
            {!!label && 
              <RichText render={label.raw} />
            }
            <RichText render={title.raw} />
            {!!content && 
              <h2>{content}</h2>
            }
            {!!buttonLabel && 
              <ButtonLink to={`${buttonUrl.uid}`}>{buttonLabel}</ButtonLink>
            }
          </HeaderContentWrapper>
      </HeaderWrapper>    
    )
  } else {
    return (
      <PreviewHeaderWrapper image={image}>
        <HeaderContentWrapper>
          {!!label && 
            <RichText render={label.raw} />
          }
          <RichText render={title.raw} />
        </HeaderContentWrapper>
      </PreviewHeaderWrapper> 
    )
  }
}

export default Header