import * as React from "react"
import { getImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'

const HeaderWrapper = styled(BackgroundImage)`
  min-height: 33vh;
  padding: 25vh 20px;
  
  background-color: rgba(0,0,0,.3);
`

const HeaderContentWrapper = styled.div`
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

const Header = ({ image, title }) => {
  const bgImage = convertToBgImage(getImage(image))
  return (
      <HeaderWrapper
        Tag="div"
        {...bgImage}
        preserveStackingContext
      >
        <HeaderContentWrapper>
          <RichText render={title.raw} />
        </HeaderContentWrapper>
    </HeaderWrapper>    
  )
}

export default Header