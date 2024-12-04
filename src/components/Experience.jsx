import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Experience = () => {
  return (
    <section className="container mt-4">
      <div className="bg-light p-3 rounded">
      <h1 className="bg-dark text-white text-center p-2 rounded">Core Competencies</h1>
        <ul>
          <li>Entrepreneurship & Business Growth</li>
          <li>Investment Strategy</li>
          <li>Tech Operations & Support</li>
          <li>Web & App Development</li>
          <li>Leadership & Mentorship</li>
          <li>Cross-Cultural Communication</li>
        </ul>
      </div>

      <div className="bg-light mt-4 p-3 rounded">
      <h1 className="bg-dark text-white text-center p-2 rounded">Professional Experience</h1>
        <h4>Founder & Director</h4>
        <p>lilmons Baby & Kids | PT Wong Jaya Mandiri</p>
        <p>
          <strong>2019 – Present</strong>
        </p>
        <ul>
          <li>
            Business Development: Conceptualized and launched lilmons Baby &
            Kids, driving growth through data-driven marketing and strategic
            product launches.
          </li>
          <li>
            Strategic Partnerships: Secured collaborations and partnerships to
            expand market reach and improve supply chain efficiency.
          </li>
        </ul>
        <h4>IT Support Specialist</h4>
        <p>Apple South Asia PTE LTD | Singapore</p>
        <p>
          <strong>2010 – 2020</strong>
        </p>
        <ul>
          <li>
            Tech Excellence: Provided expert-level IT support, resolving complex
            technical issues and enhancing user experience.
          </li>
        </ul>
        <h4>Full Stack Web & App Developer</h4>
        <p>Sigma School | Malaysia</p>
        <p>
          <strong>2023 – Present</strong>
        </p>
        <ul>
          <li>
            Full-Stack Development: Gained hands-on experience in building
            scalable web and app solutions.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
