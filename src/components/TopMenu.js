import * as React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import LanguageSwitcher from './LanguageSwitcher'

const Header = styled.header`
  display: flex;
  background: none;
  height: 66px;
  padding: 0 16px;
  box-sizing: border-box;
`

const Branding = styled.div`
  margin: auto 0;
  max-width: 30px;
  a {
    color: ${props => `${props.theme.colors.red}`};
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;
  }
`

const NavLinks = styled.nav`
  margin-left: auto;
  display: flex;
`
const NavLink = styled.div`
  margin: auto 0;

  a {
    color: ${props => `${props.theme.colors.darkGrey}`};
    padding: 0 16px;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;

    &:hover {
      color: ${props => `${props.theme.colors.darkerGrey}`};
      font-weight: bolder;
    }
  }
`

const TopMenu = ({ topMenu, activeDocMeta }) => {
  return (
    <Header>
      <Branding>
        <Link to="/">
          <GatsbyImage image={getImage(topMenu.data.logo.localFile.childImageSharp.gatsbyImageData)} alt="Business" />
        </Link>
      </Branding>
      <NavLinks>
        {topMenu.data.links.map(link => (
          <NavLink key={link.link.url}>
            <Link to={link.link.url}>{link.label}</Link>
          </NavLink>
        ))}
      </NavLinks>
      {!!activeDocMeta.alternateLanguages && 
        <LanguageSwitcher activeDocMeta={activeDocMeta} />
      }
    </Header>
  )
}

export const query = graphql`
fragment NavigationFragment on PrismicNavigation {
  type
  lang
  data {
    logo {
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
      alt
    }
    links {
      label
      link {
        url
      }
    }
  }
}
`


export default TopMenu