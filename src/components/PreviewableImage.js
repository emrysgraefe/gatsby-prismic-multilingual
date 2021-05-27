import React from 'react'
import { getImage, GatsbyImage} from 'gatsby-plugin-image'

export const PreviewableImage = ({ image, alt }) => {
  if (!!image.localFile) {
    return <GatsbyImage image={getImage(image.localFile.childImageSharp.gatsbyImageData)} alt={alt} />
  } else {
    return <img src={image.url} alt={alt} />
  }
}

export default PreviewableImage