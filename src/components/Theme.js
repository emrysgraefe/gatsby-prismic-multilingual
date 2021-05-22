import * as React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    dark: "#191a1b",
    darkerGrey: "#595959",
    darkGrey: "#7f7f7f",
    grey: "#a5a5a5",
    lightGrey: "#cccccc",
    lighterGrey: "#f2f2f2",
    red: "#c70909"
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme