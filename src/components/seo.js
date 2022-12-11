/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            image
          }
        }
      }
    `
  )

  const metaDescription = site.siteMetadata.description
  const defaultTitle =title || site.siteMetadata.title
  const image=site.siteMetadata.image
  const  siteUrl=site.siteMetadata.siteUrl
  const author=site.siteMetadata.author

  return (
    <Helmet
      htmlAttributes={{
        lang: `en`,
      }}
      title={defaultTitle }
      titleTemplate={defaultTitle ? ` ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: author,
        },
        { name: `title`,
          property: `og:title`,
          content: defaultTitle,
        },
        { name: `description`,
          property: `og:description`,
          content: metaDescription,
        },
        { name: `image`,
					property: 'og:image',
					content: image,
				},
        {
					property: 'og:url',
					content:  siteUrl,
				},
        {
          property: `og:type`,
          content: `website`,
        },
      
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
