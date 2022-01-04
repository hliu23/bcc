import * as React from "react";
import Layout from "../components/layout";

const eventsPage = () => {
  return (
    <Layout pageTitle="Events">
      calendar <br/>
      We meet every Wednesday during 2nd PRT in Room 121 (in Dig Cit hallway)<br/>
      come to a meeting and be added to our GroupMe and shared drive!
      <iframe title="club calendar" id="club-calendar"
      src="https://calendar.google.com/calendar/embed?src=c_9u6bppjdcurit0169uqflq9rjg%40group.calendar.google.com"></iframe>
      
    </Layout>
  );
}

// graphql`
//   query articlesQuery {
//     allFile(filter: {sourceInstanceName: {eq: "articles"}}) {
//       nodes {
//         name
//       }
//     }
//   }
// `

export default eventsPage;