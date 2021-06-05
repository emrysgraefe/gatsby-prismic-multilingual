import * as React from 'react'
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'
import 'gatsby-plugin-prismic-previews/dist/styles.css'
import '@fontsource/montserrat'
import '@fontsource/open-sans'

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider>{element}</PrismicPreviewProvider>
)