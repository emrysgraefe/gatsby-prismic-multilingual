import * as React from 'react'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
import PreviewableImage from './PreviewableImage'

const MemberWrapper = styled.div`
  padding: 30px;
`

const ProfileImage = styled(PreviewableImage)`
  max-width: 300px;
`

const TeamMember = ({ name, portrait, position }) => {
  return (
    <MemberWrapper>
      <ProfileImage image={portrait} alt="" />
      <RichText render={name.raw} />
      <RichText render={position.raw} />
    </MemberWrapper>
  )
}

export default TeamMember