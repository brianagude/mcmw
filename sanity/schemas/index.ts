// Rich text annotations used in the block content editor
import annotationLinkEmail from './annotations/linkEmail'
import annotationLinkExternal from './annotations/linkExternal'
import annotationLinkInternal from './annotations/linkInternal'

const annotations = [
  annotationLinkEmail,
  annotationLinkExternal,
  annotationLinkInternal,
]

// Singleton document types
import home from './singletons/home'
import settings from './singletons/settings'

const singletons = [home, settings]

// Block content
import body from './blocks/body'
import blockContent from './blocks/blockContent'
import textBlock from './blocks/textBlock'
import card from './blocks/card'
import linkList from './blocks/linkList'
import link from './blocks/link'

const blocks = [
  body,
  blockContent,
  textBlock,
  card,
  linkList,
  link
]

// Object types
import footer from './objects/global/footer'
import linkExternal from './objects/global/linkExternal'
import linkInternal from './objects/global/linkInternal'
import links from './objects/global/links'
import notFoundPage from './objects/global/notFoundPage'
import heroHome from './objects/hero/home'
import heroPage from './objects/hero/page'
import moduleCallToAction from './objects/module/callToAction'
import menu from './objects/global/menu'
import moduleImage from './objects/module/image'
import moduleImageAction from './objects/module/imageCallToAction'
import moduleImages from './objects/module/images'
import moduleInstagram from './objects/module/instagram'
import seo from './objects/seo/seo'
import seoHome from './objects/seo/home'
import seoPage from './objects/seo/page'
import seoDescription from './objects/seo/description'

import carousel from './objects/module/carousel'
import newsletter from './objects/module/newsletter'
import newsletterPopup from './objects/module/newsletter-popup'
import event from './objects/module/event'
import eventItem from './objects/module/eventItem'

const objects = [
  footer,
  links,
  linkExternal,
  linkInternal,
  notFoundPage,
  heroHome,
  heroPage,
  menu,
  moduleCallToAction,
  moduleImage,
  moduleImageAction,
  moduleImages,
  moduleInstagram,
  seo,
  seoHome,
  seoPage,
  seoDescription,
  carousel,
  newsletter,
  event,
  eventItem,
  newsletterPopup
]

export const schemaTypes = [...annotations, ...singletons, ...objects, ...blocks]
