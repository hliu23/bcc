import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";



const Project = (props) => {
  // imageData, name, authors, description, updatedDate, link
  let authors = "";
  props.authors.forEach((author, index) => {
    authors += author;
    if (index < props.authors.length - 1) authors += ", ";
  });
  return (
    <div className="col-md-6">
      <div className="card">
        <p className="card-header text-center">
          {props.status}
        </p>
        <div className="card-body">
          <h5 className="card-title text-center">{props.name}</h5>
          <h6 className="card-subtitle text-center">{authors}
          </h6>
          <GatsbyImage
            image={props.imageData}
            alt="icon"
            className="card-img-top"
            objectFit="contain"
          ></GatsbyImage>
          <p className="card-text">{props.description}</p>
        </div>
        <p className="card-link text-center">
          <a href={props.link} className="btn btn-primary">View Project</a>
        </p>
      </div>
    </div>
  )
};

export default Project;