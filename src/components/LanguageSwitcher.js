/* eslint-disable jsx-a11y/no-onchange */
import * as React from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import linkResolver from '../utils/linkResolver'


const Select = styled.select`
  background: ${props => `${props.theme.colors.grey}`};
  border: none;
  border-radius: 4px;
  margin: auto 0;
  color: ${props => `${props.theme.colors.lighterGrey}`};
  padding: 4px;
`

const LanguageSwitcher = ({ activeDocMeta }) => {

  const currentLang = activeDocMeta.lang

  const currentLangOption = (
    <option value={currentLang}>
      {currentLang.slice(0, 2).toUpperCase()}
    </option>
  )

  const alternateLangOptions = activeDocMeta.alternateLanguages.map((altLang, index) => (
    <option 
      value={linkResolver(altLang)}
      key={`alt-lang-${index}`}
    >
      {altLang.lang.slice(0, 2).toUpperCase()}
    </option>
  ))

  const handleLangChange = (event) => {
    navigate(event.target.value)
  }

  return (
    <Select
      value={currentLang}
      onChange={handleLangChange}
    >
      {currentLangOption}
      {alternateLangOptions}
    </Select>
  )
}

export default LanguageSwitcher