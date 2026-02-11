import { groq } from 'next-sanity'

export const getServicesQuery = groq`*[_type == "service"] {
  _id,
  title,
  "slug": slug.current,
  description,
  features,
  icon,
  statistics
}`

export const getServiceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  description,
  features,
  geoFacts,
  icon,
  statistics,
  expert->{
    name,
    role,
    expertQuote,
    "photoUrl": photo.asset->url,
    linkedinUrl,
    credentials
  },
  citations,
  "faqs": *[_type == "faq" && service._ref == ^._id] {
    question,
    answer
  },
  "glossaryTerms": *[_type == "glossary" && references(^._id)] {
    term,
    definition
  }
}`

export const getPortfoliosQuery = groq`*[_type == "portfolio"] {
  _id,
  title,
  "slug": slug.current,
  client,
  year,
  category,
  location,
  description,
  "imageUrl": image.asset->url,
  challenge,
  solution,
  result
}`

export const getPortfolioBySlugQuery = groq`*[_type == "portfolio" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  client,
  year,
  category,
  location,
  description,
  "imageUrl": image.asset->url,
  challenge,
  solution,
  result,
  expert->{
    name,
    role
  },
  citations
}`

export const getTestimonialsQuery = groq`*[_type == "testimonial"] {
  _id,
  name,
  role,
  company,
  content,
  rating
}`

export const getFAQsByServiceQuery = groq`*[_type == "faq" && service->slug.current == $slug] {
  _id,
  question,
  answer
}`

export const getSitemapDataQuery = groq`{
  "services": *[_type == "service"] {
    "slug": slug.current,
    "_updatedAt": _updatedAt
  },
  "portfolios": *[_type == "portfolio"] {
    "slug": slug.current,
    "_updatedAt": _updatedAt
  }
}`
