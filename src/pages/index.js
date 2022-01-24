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
      <p>
        {/* photos of members? <span class="badge bg-secondary">New</span> <br/> */}
        {/* slide presentation <br/>
        poster <br/>
        poster board? <br/>
        Permissions: calendar, submission link in post */}
      </p>
      <iframe title="club calendar" id="club-calendar"
      src="https://calendar.google.com/calendar/embed?src=c_9u6bppjdcurit0169uqflq9rjg%40group.calendar.google.com"></iframe>
      
    </Layout>
  );
}

export default IndexPage;