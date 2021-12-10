import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const eventsPage = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle="Events">
      calendar <br/>
      We meet every Wednesday during 2nd PRT in Room 121 (in Dig Cit hallway)<br/>
      come to a meeting and get access to our groupme and shared drive!
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

// graphql`
//   query articlesQuery {
//     allFile(filter: {sourceInstanceName: {eq: "articles"}}) {
//       nodes {
//         name
//       }
//     }
//   }
// `

export default eventsPage;