"use client";

import React from 'react';

const JobList: React.FC = () => {
  const jobs = [
    {
      title: 'Looking for expert web scraper',
      rate: '$8-$25/hr',
      description: 'We are looking for web scraper developers...',
    },
    {
      title: 'Go programming for a cybersecurity startup',
      rate: '$22-$45/hr',
      description: 'Go developer needed to expand the codebase...',
    },
  ];

  return (
    <section className="job-list">
      {jobs.map((job, index) => (
        <div key={index} className="job-card">
          <h3>{job.title}</h3>
          <p><strong>Rate:</strong> {job.rate}</p>
          <p>{job.description}</p>
        </div>
      ))}
      <style jsx>{`
        .job-list {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .job-card {
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: black;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
};

export default JobList;
