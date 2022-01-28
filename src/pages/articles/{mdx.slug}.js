import * as React from "react";
import { graphql } from "gatsby";

import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";


const blogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <GatsbyImage
        image={getImage(data.mdx.frontmatter.hero_image)}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <p className="text-end">
        <small className="text-muted">
          Photo Credit:{" "}
          <a href={data.mdx.frontmatter.hero_image_link}>
            {data.mdx.frontmatter.hero_image_credit}
          </a>
        </small>

      </p>


      {/* <h1 className={custom.sectionTitle}>{data.mdx.frontmatter.title}</h1> */}

      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
      <hr/>
      <p>
        <small className="text-muted">Posted: {data.mdx.frontmatter.postDate}</small><br/>
        <small className="text-muted">Updated: {data.allMdx.nodes[0].parent.modifiedTime}</small>
      </p>

    </Layout>
  )
};

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      postDate(formatString: "MMMM D, YYYY")
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
      hero_image_alt
      hero_image_link
      hero_image_credit
    }
    body
  }
  allMdx(filter: {id: {eq: $id}}) {
    nodes {
      parent {
        ... on File {
          modifiedTime(formatString: "MMMM D, YYYY")
        }
      }
    }
  }
}

`;

export default blogPost;


