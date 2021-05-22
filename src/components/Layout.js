import * as React from 'react'
import styled from 'styled-components'
import Theme from './Theme'
import TopMenu from './TopMenu'
import './Layout.css'

const Main = styled.main`
  margin: 0 auto;
  /* max-width: 1200px; */
  color: ${props => `${props.theme.colors.dark}`};
`

const Layout = ({children, topMenu, activeDocMeta}) => {
  return (
    <Theme>
      <TopMenu topMenu={topMenu} activeDocMeta={activeDocMeta} />
      <Main>
        {children}
      </Main>
    </Theme>
  )
}

export default Layout