import * as React from "react";
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";

const blogPage = ({ data }) => {
  return (
    <Layout pageTitle="Articles">
      <ul>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            
            <h2>
            <Link to={`/articles/${node.slug}`}>
              {node.frontmatter.title}
            </Link>
            </h2>
            <p>Posted: {node.frontmatter.postDate}<br/>
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
    allMdx(sort: {fields: frontmatter___postDate, order: DESC}) {
      nodes {
        frontmatter {
          title
          postDate(formatString: "MMMM D, YYYY")
        }
        id
        slug
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

