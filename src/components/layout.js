import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { container, heading, navBar, navLink, navLinkText } from "./layout.module.css";


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
      <h1>Announcement</h1>
      <h1 className={heading}>{pageTitle}</h1>
      <div>{children}</div>
      {/* <div>{data.siteBuildMetadata.buildTime}</div> */}
    </main>
  </div>
  );
}

export default Layout;