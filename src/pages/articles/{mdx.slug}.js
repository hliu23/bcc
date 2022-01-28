import * as React from "react";
import { graphql } from "gatsby";

import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import * as custom from "../../styles/articles.module.css";


const blogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
  <Layout pageTitle={data.mdx.frontmatter.title}>
    <p>{data.mdx.frontmatter.date}</p>
    <GatsbyImage 
      image={image}
      alt={data.mdx.frontmatter.hero_image_alt}
    />
    <p className="text-muted text-end">
      Photo Credit:{" "}
      <a href={data.mdx.frontmatter.hero_image_link}>
        {data.mdx.frontmatter.hero_image_credit}
      </a>
    </p>

    {/* <h1 className={custom.sectionTitle}>{data.mdx.frontmatter.title}</h1> */}
    
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


