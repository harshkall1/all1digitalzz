import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './chooseus.css';

const Milestones = () => {
  // Hook to detect when the section is visible
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.8, 
  });

  const stats = [
    { value: 100, label: "Happy Clients" },
    { value: 100, label: "Projects Done" },
    { value: 100, label: "Companies" },
    { value: 100, label: "Media Posts" },
  ];

  return (
    <section className="stats-section" ref={ref}>
      <div className="blue-overlay">
        <div className="stats-container container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-box">
              <h3 className="stat-value">
                {inView ? (
                  <CountUp start={0} end={stat.value} duration={2.5} />
                ) : (
                  "0"
                )}
                +
              </h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
