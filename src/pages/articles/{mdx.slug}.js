import * as React from "react";
import { graphql } from "gatsby";

import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";

const blogPost = ({ data }) => {
  console.log(data);

  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
  <Layout pageTitle={data.mdx.frontmatter.title}>
    <p>{data.mdx.frontmatter.date}</p>
    <GatsbyImage 
      image={image}
      alt={data.mdx.frontmatter.hero_image_alt}
    />
    <p>
      Photo Credit:{" "}
      <a href={data.mdx.frontmatter.hero_image_link}>
        {data.mdx.frontmatter.hero_image_credit}
      </a>
    </p>
    <MDXRenderer>
      {data.mdx.body}
    </MDXRenderer>
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
}
`;

export default blogPost;


