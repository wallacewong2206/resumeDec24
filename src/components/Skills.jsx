import React from 'react';

const Skills = () => {
  return (
    <section className="container mt-4">
      <div className="bg-light p-3 rounded">
      <h1 className="bg-dark text-white text-center p-2 rounded">Education & Professional Development</h1>
        <ul>
          <li>Web & App Development, Sigma School, Malaysia</li>
          <li>Apple Training Certification, Apple South Asia PTE LTD</li>
        </ul>
      </div>

      <div className="bg-light mt-4 p-3 rounded">
      <h1 className="bg-dark text-white text-center p-2 rounded">Notable Achievements</h1>
        <ul>
          <li>
            E-commerce Success: Grew lilmons Baby & Kids into a recognized brand
            with a loyal customer base.
          </li>
          <li>
            Tech Leadership: Consistently recognized for outstanding technical
            problem-solving at Apple.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
