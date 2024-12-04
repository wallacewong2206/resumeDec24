import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Languages from './components/Languages';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const App = () => {
  return (
    <div>
      <Header />
      <Experience />
      <Skills />
      <Languages />
    </div>
  );
};

export default App;
