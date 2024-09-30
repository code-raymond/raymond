// About.tsx
import React from 'react';
import Raymond from '/src/assets/img/testimonial-2.png';
const About: React.FC = () => {
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img src={Raymond} className="img-fluid rounded b-shadow-a" alt="Raymond Thomas" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p><span className="title-s">Name: </span> <span>Raymond Thomas</span></p>
                        <p><span className="title-s">Profile: </span> <span>Full stack developer</span></p>
                        <p><span className="title-s">Email: </span> <span>raymondmanithara@gmail.com</span></p>
                        <p><span className="title-s">Phone: </span> <span>(+91) 9895191391</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    <p className="title-s">Skill</p>
                    <span>Javascript / Typescript</span> <span className="pull-right">70%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                    <span>React JS</span> <span className="pull-right">90%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                    <span>HTML/CSS3</span> <span className="pull-right">85%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                    <span>Node JS / Express</span> <span className="pull-right">75%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>    
                    <span>Python</span> <span className="pull-right">40%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: '40%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                    <span>ASP .Net Core</span> <span className="pull-right">60%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        Me
                      </h5>
                    </div>
                    <p className="lead">
                      As a Senior Software Engineer, I bring over three years of full-stack development expertise, excelling in React JS, Next JS, Babel, Webpack, and micro frontends. My Master of Computer Applications degree from Amal Jyothi College of Engineering has fortified my foundation in computer science and software engineering.
                    </p>
                    <p className="lead">
                      I specialize in both frontend and backend development, with proficiency in Node.js, C#, Go, and Typescript. I craft scalable, secure web applications leveraging AWS, Docker, and Kubernetes. My adeptness extends to managing relational databases like PostgreSQL and MySQL, and NoSQL solutions such as MongoDB, ensuring seamless data interaction through RESTful APIs and GraphQL interfaces.
                    </p>
                    <p className="lead">
                      Collaborating with cross-functional teams, I deliver elegant, user-centric web experiences using HTML, CSS, and SASS. My expertise in Agile methodologies and tools like Jira enables effective project management and high-quality solution delivery. Ever-curious and adaptable, I thrive on tackling new challenges and continuously expanding my skill set.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
