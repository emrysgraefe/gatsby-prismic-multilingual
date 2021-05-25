import * as React from 'react'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'

const ServiceWrapper = styled.div`
  min-width: 200px;
  max-width: 350px;
  margin: 50px 10px;
  padding: 40px;
  background: lightblue;
  border-radius: 5px;
`
const Service = ({ icon, title, description }) => {
  const image = getImage(icon.localFile.childImageSharp.gatsbyImageData)
  return (
    <ServiceWrapper>
      <GatsbyImage image={image} alt="" />
      <RichText render={title.raw} />
      <RichText render={description.raw} />
    </ServiceWrapper>
  )
}

export default Service