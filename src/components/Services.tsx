import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faCode, faCogs, faCloud, faDatabase, faServer, faTasks, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

const strengths = [
  {
    title: 'Frontend',
    description: 'Expertise in building responsive and dynamic user interfaces using modern technologies such as React, Angular, and Vue.js.',
    icon: faDesktop
  },
  {
    title: 'Backend',
    description: 'Experience in developing scalable server-side applications with Node.js, Express, and various backend frameworks.',
    icon: faCode
  },
  {
    title: 'DevOps',
    description: 'Proficient in implementing CI/CD pipelines, containerization with Docker, and orchestration with Kubernetes for efficient deployment.',
    icon: faCogs
  },
  {
    title: 'REST APIs',
    description: 'Skilled in designing and implementing RESTful APIs for seamless communication between frontend and backend systems.',
    icon: faProjectDiagram
  },
  {
    title: 'AWS',
    description: 'Experienced with Amazon Web Services, including EC2, S3, RDS, and Lambda, to deploy and manage cloud infrastructure.',
    icon: faCloud
  },
  {
    title: 'Relational DBs',
    description: 'Knowledgeable in managing and optimizing relational databases such as PostgreSQL and MySQL for efficient data storage and retrieval.',
    icon: faDatabase
  },
  {
    title: 'No SQL DBs',
    description: 'Proficient in working with NoSQL databases like MongoDB and DynamoDB for handling unstructured data and high scalability.',
    icon: faServer
  },
  {
    title: 'Git',
    description: 'Experienced in version control using Git for efficient code management and collaboration in software development projects.',
    icon: faProjectDiagram
  },
  {
    title: 'Jira',
    description: 'Skilled in using Jira for project management, tracking issues, and facilitating agile development workflows.',
    icon: faTasks
  }
];

const Strengths: React.FC = () => {
  return (
    <section id="services" className="strengths-mf pt-5 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Strengths</h3>
              <p className="subtitle-a">Here are some of my core strengths and skills.</p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {strengths.map((strength, index) => (
            <div className="col-md-4" key={index}>
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <FontAwesomeIcon icon={strength.icon} />
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">{strength.title}</h2>
                  <p className="s-description text-center">{strength.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
