import * as React from "react";
import Layout from "../components/layout";

import Project from "../components/project";

const projectsPage = () => {
  return (
    <Layout pageTitle="Projects">
      projects of past, present and future <br/>
      thumbnails of github links, descriptions (from api?), and pictures
      <Project name="a">
        <h2>Hi!</h2>
      </Project>
    </Layout>
  );
}

export default projectsPage;