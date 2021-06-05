import * as React from 'react'
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'
import 'gatsby-plugin-prismic-previews/dist/styles.css'
import '@fontsource/montserrat/100.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/800.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/400-italic.css'

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider>{element}</PrismicPreviewProvider>
)