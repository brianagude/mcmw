// Rich text annotations used in the block content editor
import annotationLinkEmail from './annotations/linkEmail'
import annotationLinkExternal from './annotations/linkExternal'
import annotationLinkInternal from './annotations/linkInternal'

const annotations = [
  annotationLinkEmail,
  annotationLinkExternal,
  annotationLinkInternal,
]

// Document types
import collection from './documents/collection'
import colorTheme from './documents/colorTheme'
import page from './documents/page'

const documents = [collection, colorTheme, page ]

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
import inventory from './objects/shopify/inventory'
import linkExternal from './objects/global/linkExternal'
import linkInternal from './objects/global/linkInternal'
import links from './objects/global/links'
import notFoundPage from './objects/global/notFoundPage'
import heroCollection from './objects/hero/collection'
import heroHome from './objects/hero/home'
import heroPage from './objects/hero/page'
import moduleAccordion from './objects/module/accordion'
import accordionBody from './objects/module/accordionBody'
import accordionGroup from './objects/module/accordionGroup'
import moduleCallToAction from './objects/module/callToAction'
import moduleCollection from './objects/module/collection'
import moduleGrid from './objects/module/grid'
import gridItems from './objects/module/gridItem'
import menu from './objects/global/menu'
import moduleImage from './objects/module/image'
import moduleImageAction from './objects/module/imageCallToAction'
import moduleImages from './objects/module/images'
import moduleInstagram from './objects/module/instagram'
import placeholderString from './objects/shopify/placeholderString'
import priceRange from './objects/shopify/priceRange'
import option from './objects/shopify/option'
import proxyString from './objects/shopify/proxyString'
import seo from './objects/seo/seo'
import seoHome from './objects/seo/home'
import seoPage from './objects/seo/page'
import seoDescription from './objects/seo/description'
import seoShopify from './objects/seo/shopify'
import shopifyCollection from './objects/shopify/shopifyCollection'
import shopifyCollectionRule from './objects/shopify/shopifyCollectionRule'

import spot from './objects/hotspot/spot'
import carousel from './objects/module/carousel'
import newsletter from './objects/module/newsletter'
import newsletterPopup from './objects/module/newsletter-popup'
import event from './objects/module/event'
import eventItem from './objects/module/eventItem'


// Collections
import collectionGroup from './objects/collection/group'
import collectionLinks from './objects/collection/links'

const objects = [
  footer,
  inventory,
  links,
  linkExternal,
  linkInternal,
  notFoundPage,
  heroCollection,
  heroHome,
  heroPage,
  moduleAccordion,
  accordionBody,
  accordionGroup,
  menu,
  moduleCallToAction,
  moduleCollection,
  moduleGrid,
  gridItems,
  moduleImage,
  moduleImageAction,
  moduleImages,
  moduleInstagram,
  placeholderString,
  priceRange,
  spot,
  option,
  proxyString,
  seo,
  seoHome,
  seoPage,
  seoDescription,
  seoShopify,
  shopifyCollection,
  shopifyCollectionRule,
  collectionGroup,
  collectionLinks,
  carousel,
  newsletter,
  event,
  eventItem,
  newsletterPopup
]

export const schemaTypes = [...annotations, ...singletons, ...objects, ...blocks, ...documents]
