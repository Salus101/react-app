import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
        <Route path="/personaldetails" element={<PersonalDetails />} />
        <Route path="/educationbackground" element={<EducationBackground />} />
        <Route path="/specialskills" element={<SpecialSkills />} />
        <Route path="/extracurriculum" element={<ExtraCurriculumActivities />} />
        <Route path="/hobbiesandinterests" element={<HobbiesAndInterests />} />
      </Routes>
    </Router>
  );
}



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)