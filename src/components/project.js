import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import JSONData from "../content/projects/brebeuf-schedule-5754929/project.json";


const Project = (props) => {
  return (
    <p>
      <h1>Hello World! {props.name}</h1>
    <p>{props.children}</p>
    <p>{JSONData.name}</p>

    </p>
    
  )
};

export default Project;