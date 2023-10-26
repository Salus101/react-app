import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListGroup from './components/ListGroup';
import PersonalDetails from './components/personaldetails'; 
import EducationBackground from './components/educationalbg'; 
import SpecialSkills from './components/specialskills';
import ExtraCurriculumActivities from './components/extracurriculum';
import HobbiesAndInterests from './components/hobbies';

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/education-background" element={<EducationBackground />} />
        {/* Add more routes for other components as needed */}
      </Routes>
    </Router>
  );
}



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
