import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { page, container, customHeading, navBar, navLink, navLinkText } from "../styles/layout.module.css";


const Layout = ({ pageTitle, children }) => {
  
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      siteBuildMetadata {
        buildTime
      }
    }  
  `)

  return (
  <div className={page}>
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <nav>
        <ul className={navBar}>
          <li className={navLink}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLink}><Link to="/events" className={navLinkText}>Events</Link></li>
          <li className={navLink}><Link to="/articles" className={navLinkText}>Articles</Link></li>
          <li className={navLink}><Link to="/projects" className={navLinkText}>Projects</Link></li>
          <li className={navLink}><Link to="/resources" className={navLinkText}>Resources</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={customHeading}>{pageTitle}</h1>
        <div>{children}</div>
        {/* <div>{data.siteBuildMetadata.buildTime}</div> */}
      </main>
    {/* announcement */}
  </div>


  </div>
  
  );
}

export default Layout;