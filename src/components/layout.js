import * as React from "react";
import { Link } from "gatsby";
import { container, heading, navBar, navLink, navLinkText } from "./layout.module.css";


const Layout = ({ pageTitle, children }) => {
  return (
  <div className={container}>
    <title>{pageTitle} | Brebeuf Coding Club</title>
    <nav>
      <ul className={navBar}>
        <li className={navLink}><Link to="/" className={navLinkText}>Home</Link></li>
        <li className={navLink}><Link to="/about" className={navLinkText}>About</Link></li>
      </ul>
    </nav>
    <main>
      <h1 className={heading}>{pageTitle}</h1>
      <div>{children}</div>
    </main>
  </div>
  );
}

export default Layout;