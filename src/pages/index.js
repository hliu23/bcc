import * as React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";


const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <StaticImage
        alt="the Brebeuf Coding Club logo"
        src="../content/files/images/logo.png"
      />
      <p>
        {/* photos of members? <span class="badge bg-secondary">New</span> <br/> */}
        slide presentation <br/>
        poster <br/>
        poster board? <br/>
        Permissions: calendar, submission link in post
      </p>
    </Layout>
  );
}

export default IndexPage;