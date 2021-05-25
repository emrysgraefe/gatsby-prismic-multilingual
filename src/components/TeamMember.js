import * as React from 'react'
import styled from 'styled-components'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { RichText } from 'prismic-reactjs'

const MemberWrapper = styled.div`
  padding: 30px;
`

const TeamMember = ({ name, portrait, position }) => {
  const image = getImage(portrait.localFile.childImageSharp.gatsbyImageData)
  return (
    <MemberWrapper>
      <GatsbyImage image={image} alt="" />
      <RichText render={name.raw} />
      <RichText render={position.raw} />
    </MemberWrapper>
  )
}

export default TeamMember