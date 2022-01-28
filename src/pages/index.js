import * as React from "react";

import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";


const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <StaticImage
        alt="the Brebeuf Coding Club logo"
        src="../content/files/images/logo.png"
      />
      <div className="container-fluid">   
        <iframe title="club calendar" id="club-calendar"
        src="https://calendar.google.com/calendar/embed?src=c_9u6bppjdcurit0169uqflq9rjg%40group.calendar.google.com"></iframe>
      </div>
    </Layout>
  );
}

export default IndexPage;