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

  const style = {"color": "#171738"};

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-2">

          </div>
          <div className="col-md-8">
            <div>
              <title>{pageTitle} | {data.site.siteMetadata.title}</title>
              <nav>
                <ul className="nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link" style={style}>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/articles" className="nav-link" style={style}>Articles</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/projects" className="nav-link" style={style}>Projects</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/resources" className="nav-link" style={style}>Resources</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link" style={style}>Contact Us</Link>
                  </li>
                </ul>
              </nav>
              <main>
                <h1 className={custom.title}>{pageTitle}</h1>
                <div className={custom.content}>{children}</div>
              </main>
            </div>
          </div>
          <div className="col-md-2">
            {/* announcement */}

          </div>
        </div>
      </div>



    </div>

  );
}

export default Layout;