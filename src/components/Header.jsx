import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import profileImage from '../assets/profile_image.png';

const Header = () => {
  return (
    <header className="container mt-4">
      {/* Main header with profile photo and details */}
      <div className="bg-light p-3 rounded text-center position-relative">
        {/* Name and Details */}
        <div className="mt-4 bg-light p-3 rounded">
        <h1 className="bg-dark text-white text-center p-2 rounded">Wallace Wong Chee Wai</h1>
          <p>Full Stack React | Software Developer</p>
          <p>Kuala Lumpur, Malaysia | Surabaya, Indonesia</p>
          <p>
            WhatsApp:{' '}
            <a href="https://wa.me/60164373205" className="text-success">
              <FontAwesomeIcon icon={faSquareWhatsapp} /> +6 016 437 3205
            </a>{' '}
            |{' '}
            <a href="https://wa.me/6281331927921" className="text-success">
              <FontAwesomeIcon icon={faSquareWhatsapp} /> +62 813 3192 7921
            </a>
          </p>
          <p>
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/wallacewong2206/"
              className="text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} /> wallacewong2206
            </a>
          </p>
        </div>

        {/* Profile photo */}
        <div
          className="position-absolute top-50 start50"
          style={{
            top: '130px',
            left: '200px',
            transform: 'translateY(-50%)',
            width: '100px',
            height: '100px',
          }}
        >
          <img
            src={profileImage}
            alt="Wallace Wong"
            className="rounded-circle w-100 h-100 shadow"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mt-4 bg-light p-3 rounded">
        <h1 className="bg-dark text-white text-center p-2 rounded">
          Professional Summary
        </h1>
        <p>
          Dynamic entrepreneur with a proven track record of founding and
          scaling successful businesses, including lilmons Baby & Kids. <br />Backed
          by over a decade of tech expertise from Apple South Asia PTE LTD, I am
          skilled in leveraging technology for business growth, strategic
          investments, and innovative digital solutions. <br />I am passionate about
          driving impact through strategic leadership, investment opportunities,
          and tech-driven initiatives that redefine industry standards.
        </p>
      </div>
    </header>
  );
};

export default Header;
