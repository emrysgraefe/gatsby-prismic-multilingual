import * as React from 'react'
import styled from 'styled-components'

const QuoteContainer = styled.div`
  padding: 25vh 20px;
`

const Textbox = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 65ch;
`

const Label = styled.h5`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 100;
`

const Content = styled.h2`
  font-size: 66px;
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