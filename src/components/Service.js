import * as React from 'react'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
import PreviewableImage from './PreviewableImage'

const ServiceWrapper = styled.div`
  min-width: 200px;
  max-width: 350px;
  margin: 50px 10px;
  padding: 40px;
  background: lightblue;
  border-radius: 5px;
`
const Service = ({ icon, title, description }) => {
  return (
    <ServiceWrapper>
      <PreviewableImage image={icon} alt="" />
      <RichText render={title.raw} />
      <RichText render={description.raw} />
    </ServiceWrapper>
  )
}

export default Service