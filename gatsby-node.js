const path = require('path')
const { defaultLanguage } = require('./prismic-configuration')
const linkResolver = require('./src/utils/linkResolver')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicHomepage {
        nodes {
          lang
          _previewable
          uid
          type
        }
      }
      allPrismicAbout {
        nodes {
          lang
          uid
          _previewable
          type
        }
      }
      allPrismicBlogPage {
        nodes {
          _previewable
          type
          lang
          uid
        }
      }
      allPrismicTeam {
        nodes {
          uid
          lang
          _previewable
          type          
        }
      }
      allPrismicContact {
        nodes {
          _previewable
          type
          lang
          uid       
        }
      }
      allPrismicBlogPost {
        nodes {
          _previewable
          type
          lang
          uid
        }
      }
    }
  `)

  pages.data.allPrismicHomepage.nodes.forEach((page) => {
    createPage({
      path: linkResolver(page),
      component: path.resolve(__dirname, 'src/templates/Homepage.js'),
      context: { ...page },
    })
  })

  pages.data.allPrismicAbout.nodes.forEach((page) => {
    createPage({
      path: linkResolver(page),
      component: path.resolve(__dirname, 'src/templates/About.js'),
      context: { ...page },
    })
  })

  pages.data.allPrismicBlogPage.nodes.forEach((page) => {
    createPage({
      path: linkResolver(page),
      component: path.resolve(__dirname, 'src/templates/Blog.js'),
      context: { ...page },
    })
  })

  pages.data.allPrismicTeam.nodes.forEach((page) => {
    createPage({
      path: linkResolver(page),
      component: path.resolve(__dirname, 'src/templates/Team.js'),
      context: { ...page },
    })
  })

  pages.data.allPrismicContact.nodes.forEach((page) => {
    createPage({
      path: linkResolver(page),
      component: path.resolve(__dirname, 'src/templates/Contact.js'),
      context: { ...page },
    })
  })

  pages.data.allPrismicBlogPost.nodes.forEach((page) => {
    createPage({
      path: linkResolver(page),
      component: path.resolve(__dirname, 'src/templates/BlogPost.js'),
      context: { ...page },
    })
  })
}