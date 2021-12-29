import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const blogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      <p>blog</p>
      <ul>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
            <p>Published: {node.frontmatter.publishDate}<br/>
            Updated: {node.parent.modifiedTime}</p>
          </article>
        ))
          
        }
      </ul>
    </Layout>
  );
}


export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___publishDate, order: DESC}) {
      nodes {
        frontmatter {
          title
          publishDate(formatString: "MMMM D, YYYY")
        }
        id
        body
        parent {
          ... on File {
            modifiedTime(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  }
`

export default blogPage;

