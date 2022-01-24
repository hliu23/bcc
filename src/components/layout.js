import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as custom from "../styles/layout.module.css";


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
  <div className="container-fluid">
    <div className={custom.container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <nav className="navBar">
        <ul className={custom.navBar}>
          <li className={custom.navLink}><Link to="/" className={custom.navLinkText}>Home</Link></li>
          <li className={custom.navLink}><Link to="/events" className={custom.navLinkText}>Events</Link></li>
          <li className={custom.navLink}><Link to="/articles" className={custom.navLinkText}>Articles</Link></li>
          <li className={custom.navLink}><Link to="/projects" className={custom.navLinkText}>Projects</Link></li>
          <li className={custom.navLink}><Link to="/resources" className={custom.navLinkText}>Resources</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={custom.title}>{pageTitle}</h1>
        <div className={custom.content}>{children}</div>
        {/* <div>{data.siteBuildMetadata.buildTime}</div> */}
      </main>
    {/* announcement */}
  </div>


  </div>
  
  );
}

export default Layout;