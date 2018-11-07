import React from 'react';
export const ProjectItem = ({ project }) => {
  return (
    <div
      key={project.id}
      className="col-md-6 col-sm-12 col-lg-4  project-item text-center"
    >
      <img className="project_image" src={project.img} alt="projectPic" />
      <h2 className="mb-2">{project.title}</h2>
      <h5 className="mb-4">{project.tech}</h5>
      <a className="btn btn-outline-teal" href={project.url} target="_blank">
        LEARN MORE
      </a>
    </div>
  );
};
