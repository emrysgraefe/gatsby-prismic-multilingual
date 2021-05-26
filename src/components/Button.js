import styled from 'styled-components'

const Button = styled.button`
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  background-color: blueviolet;
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  transition: all .2s ease-in-out;
  border: none;
  box-shadow: none;
  &:hover {
    background-color: cyan;
    color: blueviolet;
    box-shadow: 0 0 4px .1px rgb(138, 43, 226, 0.3);
    transform: translateY(-3px);
  }
`

export default Button