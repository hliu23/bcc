import * as React from "react";
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";

import * as custom from "../../styles/articles.module.css";


const blogPage = ({ data }) => {
  return (
    <Layout pageTitle="Articles">
      <ul>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2 className={custom.sectionTitle}>
            <Link to={`/articles/${node.slug}`}>
              {node.frontmatter.title}
            </Link>
            </h2>
            <p>
              <small className="text-muted">Posted: {node.frontmatter.postDate}</small> <br/>
              <small className="text-muted">Updated: {node.parent.modifiedTime}</small>
            </p>
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

