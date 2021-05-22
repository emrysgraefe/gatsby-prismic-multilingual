require("dotenv").config({
  path: `.env`,
})

const linkResolver = require('./src/utils/linkResolver')


module.exports = {
  siteMetadata: {
    title: "Prismic Multilingual",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: `${process.env.GATSBY_PRISMIC_CONTAINER_NAME}`,
        accessToken: `${process.env.PRISMIC_ACCESS_TOKEN}`,
        linkResolver: () => (doc) => linkResolver(doc),  
        schemas: {
          homepage: require(`./custom_types/homepage.json`),
          about: require(`./custom_types/about.json`),
          blog_page: require(`./custom_types/blog_page.json`),
          blog_post: require(`./custom_types/blog_post.json`),
          navigation: require(`./custom_types/navigation.json`),
          project: require(`./custom_types/project.json`),
          projects: require(`./custom_types/projects.json`),
          team: require(`./custom_types/team.json`),
          contact: require(`./custom_types/contact.json`),
        },
        lang: '*',
        prismicToolbar: true,
        shouldDownloadImage: () => (true),
      },
    }
  ],
};
