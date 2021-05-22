import * as React from 'react'
import styled from 'styled-components'

const QuoteContainer = styled.div`
  padding: 25vh 20px;
`

const Textbox = styled.div`
  margin: 0 auto;
  text-align: center;
`

const Label = styled.h5`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 100;
`

const Content = styled.span`
  font-size: 22px;
`

const BlockQuote = ({ title, content }) => {
  return (
    <QuoteContainer>
      <Textbox>
      <Label>{title}</Label>
      <Content>{content}</Content>
      </Textbox>
      
    </QuoteContainer>
  )
}

export default BlockQuote