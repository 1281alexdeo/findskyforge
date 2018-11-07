import React, { Component } from 'react';
import './projects.scss';
import Fade from 'react-reveal/Fade';

import Heading from '../Common/Heading';
import laptop from '../../img/laptop.jpg';
import website from '../../img/website.jpg';
import webdesign from '../../img/webdesign.jpg';
import { ProjectItem } from './ProjectItem';

export class Projects extends Component {
  state = {
    projects: []
  };

  componentDidMount = () => {
    const projects = [
      {
        id: 1,
        title: 'Dev Connector',
        tech: 'ReactJS + Node + Redux',
        img: laptop,
        url: 'https://obscure-bastion-27494.herokuapp.com/'
      },
      {
        id: 2,
        title: 'Movie App',
        tech: 'ReactJS + Styled Components + TMDb-API',
        img: webdesign,
        url: 'https://vigilant-edison-91d7ef.netlify.com/'
      },
      {
        id: 3,
        title: 'Pay Book',
        tech: 'ReactJS + Express + Node + Stripe API',
        img: website,
        url: 'https://gory-treat-88696.herokuapp.com/'
      },
      {
        id: 4,
        title: 'Viral Search',
        tech: 'ReactJS + Youtube API + Live Search',
        img: webdesign,
        url: 'https://tubeify-app.herokuapp.com/'
      },
      {
        id: 5,
        title: 'Mizuxe',
        tech: 'ReactJS + Bootstrap 4 + Animations',
        img: website,
        url: 'https://mizuke.netlify.com/'
      },
      {
        id: 6,
        title: 'Loan Manager',
        tech: 'ReactJS + Redux + Firestore',
        img: laptop,
        url: 'https://client-loan-manager.firebaseapp.com/login?redirect=%2F'
      }
    ];
    this.setState({ projects });
  };

  render() {
    const projects = this.state.projects.map(project => {
      return <ProjectItem key={project.id} project={project} />;
    });
    return (
      <section className="projects" id="projects">
        <Fade left>
          <Heading title="Projects" />
        </Fade>
        <div style={{ marginTop: '5rem' }} className="container">
          <div className="row  project-container">{projects}</div>
        </div>
      </section>
    );
  }
}
export default Projects;
