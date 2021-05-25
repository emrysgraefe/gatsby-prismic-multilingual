import { RichText } from 'prismic-reactjs'
import * as React from 'react'
import styled from 'styled-components'
import TeamMember from './TeamMember'


const TeamListWrapper = styled.div`
  max-width: 1200px;
  margin: 120px auto;
  > h2 {
    text-align: center;
  }
`
const TeamWrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`

const TeamList = ({ title, items }) => {
  return (
    <TeamListWrapper>
      <RichText render={title.raw} />
      <TeamWrapper>
        {items.map((member, i) => {
          return (
            <TeamMember 
              key={i}
              name={member.first_and_lastname}
              portrait={member.portrait}
              position={member.position}
            />
          )
        })}
      </TeamWrapper>
    </TeamListWrapper>
    
  )
}

export default TeamList