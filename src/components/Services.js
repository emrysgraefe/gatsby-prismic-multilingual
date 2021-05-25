import * as React from 'react'
import Service from './Service'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'

const ServicesWrapper = styled.section`
  > h2 {
    text-align: center;
    font-weight: 100;
  }
`
const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-around;
`

const Services = ({ title, items }) => {
  return (
    <ServicesWrapper>
      <RichText render={title.raw} />
      <ServicesContainer>
        {items.map((service, i) => {
          return (
            <Service 
              key={i}
              icon={service.icon}
              title={service.service_title}
              description={service.service_description}
            />
          )
        })}
      </ServicesContainer>
    </ServicesWrapper>
  )
}

export default Services