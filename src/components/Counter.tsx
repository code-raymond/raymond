// src/components/CounterSection.tsx
import React from 'react';
import CountUp from 'react-countup';
import './Counter.css';

const Counter: React.FC = () => {
  return (
    <div className="section-counter bg-image" style={{ backgroundImage: 'url(assets/img/counters-bg.jpg)' }}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          {/* Projects Completed */}
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box">
              <div className="counter-icon">
                <i className="bi bi-check"></i>
              </div>
              <div className="counter-number">
                <CountUp start={0} end={10} duration={2.75} />+
                <span className="counter-text">PROJECTS COMPLETED</span>
              </div>
            </div>
          </div>
          {/* Years of Experience */}
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box">
              <div className="counter-icon">
                <i className="bi bi-journal-richtext"></i>
              </div>
              <div className="counter-number">
                <CountUp start={0} end={3} duration={2.75} />+
                <span className="counter-text">YEARS OF EXPERIENCE</span>
              </div>
            </div>
          </div>
          {/* Stacks */}
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box">
              <div className="counter-icon">
                <i className="bi bi-gear"></i>
              </div>
              <div className="counter-number">
                <CountUp start={0} end={10} duration={2.75} />+
                <span className="counter-text">TECH STACKS</span>
              </div>
            </div>
          </div>
          {/* Certifications */}
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box">
              <div className="counter-icon">
                <i className="bi bi-award"></i>
              </div>
              <div className="counter-number">
                <CountUp start={0} end={5} duration={2.75} />+
                <span className="counter-text">CERTIFICATIONS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
