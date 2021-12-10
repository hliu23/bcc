import * as React from "react";
import Layout from "../components/layout";

import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <StaticImage
        alt="the Brebeuf Coding Club logo"
        src="../images/logo.png"
      />
      <p>photos of members? <br/>
        slide presentation <br/>
        poster <br/>
        poster board?
      </p>
    </Layout>
  );
}

export default AboutPage;