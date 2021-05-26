const { defaultLanguage } = require('../../prismic-configuration')

const linkResolver = (doc) => {
  const properties = doc._meta || doc
  
  if (properties.type === 'homepage') {
    return properties.lang === defaultLanguage ? '/' : `/${properties.lang}`
  }

  if (doc.type === 'contact') {
    return properties.lang === defaultLanguage
    ? `/${properties.uid}`
    : `/${properties.lang}/${properties.uid}`
  }

  if (doc.type === 'about') {
    return properties.lang === defaultLanguage
    ? `/${properties.uid}`
    : `/${properties.lang}/${properties.uid}`
  }

  if (doc.type === 'blog_page') {
    return properties.lang === defaultLanguage
    ? `/${properties.uid}`
    : `/${properties.lang}/${properties.uid}`
  }

  if (doc.type === 'team') {
    return properties.lang === defaultLanguage
    ? `/${properties.uid}`
    : `/${properties.lang}/${properties.uid}`
  }

  if (doc.type === 'blog_post') {
    return properties.lang === defaultLanguage
    ? `/blog/${properties.uid}`
    : `/blog/${properties.lang}/${properties.uid}`
  }

  return '/'
}

module.exports = linkResolver