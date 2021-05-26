import * as React from "react"
import { Link } from "gatsby"
import { withUnpublishedPreview } from 'gatsby-source-prismic'

import Homepage from '../templates/Homepage'
import About from '../templates/About'
import Blog from '../templates/Blog'
import BlogPost from '../templates/BlogPost'
import Contact from '../templates/Contact'
import Team from '../templates/Team'

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default withUnpublishedPreview(NotFoundPage, {
  templateMap: {
    homepage: Homepage,
    about: About,
    blog_page: Blog,
    blog_post: BlogPost
    contact: Contact,
    team: Team,
  }
})
