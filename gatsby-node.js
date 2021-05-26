const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicHomepage {
        nodes {
          lang
          _previewable
          uid
          url
        }
      }
      allPrismicAbout {
        nodes {
          lang
          uid
          _previewable
          type
          url
        }
      }
      allPrismicBlogPage {
        nodes {
          _previewable
          type
          lang
          uid
          url
        }
      }
      allPrismicTeam {
        nodes {
          uid
          lang
          _previewable
          type
          url
        }
      }
      allPrismicContact {
        nodes {
          _previewable
          type
          lang
          uid
          url
        }
      }
      allPrismicBlogPost {
        nodes {
          _previewable
          type
          lang
          uid
          url
        }
      }
    }
  `)

  pages.data.allPrismicHomepage.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/Homepage.js'),
      context: { ...page },
    })
  })

  pages.data.allPrismicAbout.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/About.js'),
      context: { ...page },
    })
  })

  pages.data.allPrismicBlogPage.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/Blog.js'),
      context: { ...page },
    })
  })

  pages.data.allPrismicTeam.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/Team.js'),
      context: { ...page },
    })
  })

  pages.data.allPrismicContact.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/Contact.js'),
      context: { ...page },
    })
  })

  pages.data.allPrismicBlogPost.nodes.forEach((post) => {
    createPage({
      path: post.url,
      component: path.resolve(__dirname, 'src/templates/BlogPost.js'),
      context: { ...post },
    })
  })
  
}